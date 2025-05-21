const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Models
const Bill = require('../Models/Bill');
const MPP = require('../Models/MPP');

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Scrape Bills
const scrapeBills = async () => {
  console.log('Scraping Bills...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = 'https://www.ola.org/en/legislative-business/bills/current';
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Wait for the content to load
  await page.waitForSelector('.view-content ul');

  // Extract Bills
  const bills = await page.evaluate(() => {
    const billElements = document.querySelectorAll('.views-row');
    const extractedBills = [];

    billElements.forEach((bill) => {
      const titleElement = bill.querySelector('a');
      const sponsorElement = bill.querySelector('.views-field-field-sponsor');

      const title = titleElement?.innerText.trim();
      const link = titleElement?.href;
      const sponsor = sponsorElement?.innerText.trim();

      // Extract the bill number from the title (before the comma)
      const billNumberMatch = title.match(/Bill (\d+),/);
      const bill_number = billNumberMatch ? billNumberMatch[1] : null;

      if (bill_number && title && link) {
        extractedBills.push({ bill_number, title, link, sponsor });
      }
    });

    return extractedBills;
  });

  console.log('Extracted Bills:', bills);

  // Insert into MongoDB
  for (let bill of bills) {
    if (!bill.bill_number) {
      console.error('Skipped bill due to missing bill_number:', bill);
      continue; // Skip invalid bills
    }

    try {
      const result = await Bill.updateOne(
        { bill_number: bill.bill_number }, // Use bill_number as the unique key
        { $set: bill },
        { upsert: true }
      );
      console.log('Inserted/Updated Bill:', bill.bill_number, result);
    } catch (error) {
      console.error('Error inserting bill:', bill, error.message);
    }
  }

  console.log('Bills saved to the database');
  await browser.close();
};

  
  

// Scrape MPPs
const scrapeMPPs = async () => {
  console.log('Scraping MPPs...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = 'https://www.ola.org/en/members/parliament-43';
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Wait for the table to load
  await page.waitForSelector('table tbody tr');

  // Extract MPP Information
  const mpps = await page.evaluate(() => {
    const rows = document.querySelectorAll('table tbody tr');
    const extractedMPPs = [];

    rows.forEach((row) => {
      const nameElement = row.querySelector('td.views-field-full-name a');
      const ridingElement = row.querySelector('td.views-field-name');

      const name = nameElement?.innerText.trim();
      const link = nameElement?.href;
      const riding = ridingElement?.innerText.trim();

      if (name && link && riding) {
        extractedMPPs.push({ name, riding, profileLink: link });
      }
    });

    return extractedMPPs;
  });

  console.log('Extracted MPPs:', mpps);

  // Insert into MongoDB
  for (let mpp of mpps) {
    await MPP.updateOne(
      { name: mpp.name },
      { $set: mpp },
      { upsert: true }
    );
  }

  console.log('MPPs saved to the database');
  await browser.close();
};

// Main Function
const main = async () => {
  await connectDB();

  try {
    await scrapeBills();
    await scrapeMPPs();
    console.log('Database successfully filled with Bills and MPPs!');
  } catch (error) {
    console.error('Error during scraping:', error);
  } finally {
    mongoose.connection.close();
  }
};

main();
