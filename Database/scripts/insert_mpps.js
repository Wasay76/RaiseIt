const fs = require('fs');
const mongoose = require('mongoose');
const connectDB = require('../db/dbconnect'); // Adjust the path to your database connection

// Define the MPP Schema and Model
const MPP = mongoose.model('MPP', new mongoose.Schema({
  name: { type: String, required: true },
  riding: { type: String, required: true },
}));

// Path to the mpp.txt file
const filePath = './scripts/mpp.txt'; // Adjust the path if necessary

(async () => {
  try {
    // Connect to the database
    await connectDB();

    // Read the mpp.txt file
    const data = fs.readFileSync(filePath, 'utf8');

    // Parse the MPP data
    const mpps = data
      .trim()
      .split('\n') // Split file into lines
      .slice(1) // Skip the header row ("MPP\tRiding")
      .map((line) => {
        const [name, riding] = line.split('\t'); // Split each line by tab
        return { name: name.trim(), riding: riding.trim() };
      });

    // Insert MPPs into the database
    const result = await MPP.insertMany(mpps, { ordered: false });
    console.log(`Successfully inserted ${result.length} MPPs into the database.`);
  } catch (error) {
    if (error.code === 11000) {
      console.error('Duplicate MPP found:', error.message);
    } else {
      console.error('Error inserting MPPs:', error);
    }
  } finally {
    mongoose.connection.close();
  }
})();
