const fs = require('fs');
const mongoose = require('mongoose');
const connectDB = require('../db/dbconnect'); // Adjust path to your DB connection

(async () => {
  await connectDB();
})();

const filePath = './scripts/bills.txt'; // Path to your data file

const parseBills = (data) => {
  const lines = data.trim().split('\n');
  const bills = [];
  let currentSession = '';
  const billPattern = /^(\d+|Pr\d+)\s+(.+?Act(?:, \d{4})?)$/;

  let currentBill = null;
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    // Check for session header
    if (trimmedLine.match(/^\d{1,3}(rd|st|nd|th) Parliament, \d{1,3}(st|nd|rd|th) Session$/)) {
      currentSession = trimmedLine;
      continue;
    }

    const match = billPattern.exec(trimmedLine);
    if (match) {
      if (currentBill) {
        bills.push(currentBill);
      }
      const [_, billNumber, title] = match;
      const yearMatch = title.match(/Act, (\d{4})/);
      const year = yearMatch ? parseInt(yearMatch[1]) : 2023;
      const cleanedTitle = title.replace(/Act, \d{4}/, '').trim();

      currentBill = {
        billNumber,
        title: cleanedTitle,
        sponsors: [],
        year,
        session: currentSession,
      };
    } else if (currentBill) {
      // Clean sponsor names
      let sponsor = trimmedLine.replace(/(Hon\.|Minister of .+)/, '').trim();
      sponsor = sponsor.replace(/\t/g, ' '); // Replace tabs with spaces
      if (sponsor) currentBill.sponsors.push(sponsor);
    }
  }

  if (currentBill) {
    bills.push(currentBill);
  }

  return bills.filter((bill) => bill.billNumber && bill.session); // Exclude bills without a billNumber or session
};

fs.readFile(filePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    process.exit(1);
  }

  try {
    const bills = parseBills(data);

    // Deduplicate by billNumber and session
    const uniqueBills = bills.filter(
      (bill, index, self) =>
        index === self.findIndex((b) => b.billNumber === bill.billNumber && b.session === bill.session)
    );

    // Validate bills and clean up sponsors
    const validBills = uniqueBills.filter((bill) => {
      if (!bill.billNumber || !bill.title || !bill.year || !bill.session) {
        console.error(`Invalid bill skipped: ${JSON.stringify(bill)}`);
        return false;
      }
      return true;
    });

    // Log bills that will be inserted
    console.log('Valid Bills for Insertion:', validBills);

    // Insert valid bills into the `bill` collection
    const result = await mongoose.connection.collection('regulations').insertMany(validBills, { ordered: false });
    console.log(`Successfully inserted ${result.insertedCount} bills into the 'bill' collection.`);
  } catch (error) {
    if (error.code === 11000) {
      console.error('Duplicate billNumber and session found:', error.message);
    } else {
      console.error('Error processing bills:', error);
    }
  } finally {
    mongoose.connection.close();
  }
});
