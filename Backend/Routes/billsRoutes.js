const express = require('express');
const router = express.Router();
const {
  getAllBills,
  getBillsByBillNumber,
  getBillsByParliament,
  getBillObjectId,
  getBillsByStatus,
  getBillsBySponsor,
} = require('../controllers/billsController');

// Define routes for the backend API
router.get('/getAllBills', getAllBills);
router.get('/getBillsByBillNumber', getBillsByBillNumber);
router.get('/getBillsByParliament', getBillsByParliament);
router.get('/getBillObjectId', getBillObjectId);
router.get('/getBillsByStatus', getBillsByStatus);
router.get('/getBillsBySponsor', getBillsBySponsor);

module.exports = router;
