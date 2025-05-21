const databaseApiClient = require('../config/dbAPIClient');

// **Get All MPPS** - Supports both test and regular bills
const getAllMPPs = async (req, res) => {
    try {
      const response = await databaseApiClient.get('/api/mpps/getAllmpps');
  
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ message: 'Error fetching all MPPs', error: error.message });
      }
    }
  };
  module.exports = {
    getAllMPPs
  };
  