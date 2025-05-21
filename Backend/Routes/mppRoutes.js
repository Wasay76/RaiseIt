const express = require('express');
const router = express.Router();
const {
    getAllMPPs
  } = require('../controllers/mppsController');



router.get('/getAllMPPs', getAllMPPs);
module.exports = router;