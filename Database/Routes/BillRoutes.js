const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

// Import both collections
const Bill = require('../Models/Bill'); 
const TestBill = mongoose.model('test_bills', Bill.schema); // Use the same schema for the test collection

// Helper function to choose collection dynamically
const getCollection = (testMode) => (testMode ? TestBill : Bill);

// **Get All Bills**: Fetch all bills from the database
router.get('/getAllBills', async (req, res) => {
  try {
    const { testMode } = req.query;
    const collection = getCollection(testMode);

    // Fetch all bills
    const bills = await collection.find({});
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills', error: error.message });
  }
});

// **getBillsByBillNumber**: Fetch all bills by billNumber
router.get('/getBillsByBillNumber', async (req, res) => {
  try {
    const { billNumber, testMode } = req.query;
    if (!billNumber) return res.status(400).json({ message: 'billNumber is required' });

    const collection = getCollection(testMode);
    const bills = await collection.find({ billNumber });

    if (bills.length > 0) {
      res.status(200).json(bills);
    } else {
      res.status(404).json({ message: `No bills found with billNumber ${billNumber}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills by billNumber', error: error.message });
  }
});

// **getBillsByParliament**: Fetch all bills by parliament session
router.get('/getBillsByParliament', async (req, res) => {
  try {
    const { session, testMode } = req.query;
    if (!session) return res.status(400).json({ message: 'session query parameter is required' });

    const collection = getCollection(testMode);
    const bills = await collection.find({ session: { $regex: new RegExp(session, 'i') } });

    if (bills.length > 0) {
      res.status(200).json(bills);
    } else {
      res.status(404).json({ message: `No bills found for session "${session}"` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills by parliament session', error: error.message });
  }
});

// **getBillObjectId**: Fetch ObjectId of a bill by billNumber and session
router.get('/getBillObjectId', async (req, res) => {
  try {
    const { billNumber, session, testMode } = req.query;
    if (!billNumber || !session) return res.status(400).json({ message: 'Both billNumber and session are required' });

    const collection = getCollection(testMode);
    const bill = await collection.findOne({ billNumber, session: { $regex: new RegExp(session, 'i') } });

    if (bill) {
      res.status(200).json({ objectId: bill._id });
    } else {
      res.status(404).json({ objectId: null, message: 'Bill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bill ObjectId', error: error.message });
  }
});

// **Get Bills by Status** (GET /api/bills/getBillsByStatus?status={status})
router.get('/getBillsByStatus', async (req, res) => {
  try {
    const { status, testMode } = req.query;
    if (!status) return res.status(400).json({ message: 'Status parameter is required' });

    const collection = getCollection(testMode);
    const bills = await collection.find({ status });

    if (bills.length > 0) {
      res.status(200).json(bills);
    } else {
      res.status(404).json({ message: 'No bills found with the specified status' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills by status', error: error.message });
  }
});

// **Get Bills Sponsored by MPP** (GET /api/bills/getBillsBySponsor?MPP_Name={MPP_Name})
router.get('/getBillsBySponsor', async (req, res) => {
  try {
    const { MPP_Name, testMode } = req.query;
    if (!MPP_Name) return res.status(400).json({ message: 'MPP_Name parameter is required' });

    const collection = getCollection(testMode);
    const bills = await collection.find({ primarySponsor: { $regex: new RegExp(MPP_Name, 'i') } });

    if (bills.length > 0) {
      res.status(200).json(bills);
    } else {
      res.status(404).json({ message: `No bills found sponsored by ${MPP_Name}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills by sponsor', error: error.message });
  }
});

module.exports = router;
