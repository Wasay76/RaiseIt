const databaseApiClient = require('../config/dbAPIClient');

// **Get All Bills** - Supports both test and regular bills
const getAllBills = async (req, res) => {
  try {
    const { testMode } = req.query;

    const response = await databaseApiClient.get('/api/bills/getAllBills', {
      params: { testMode },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Error fetching all bills', error: error.message });
    }
  }
};

// **Get Bills by Bill Number**
const getBillsByBillNumber = async (req, res) => {
  try {
    const { billNumber, testMode } = req.query;
    if (!billNumber) return res.status(400).json({ message: 'billNumber query parameter is required' });

    const response = await databaseApiClient.get('/api/bills/getBillsByBillNumber', {
      params: { billNumber, testMode },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Error fetching bills by billNumber', error: error.message });
    }
  }
};

// **Get Bills by Parliament**
const getBillsByParliament = async (req, res) => {
  try {
    const { session, testMode } = req.query;
    if (!session) return res.status(400).json({ message: 'session query parameter is required' });

    const response = await databaseApiClient.get('/api/bills/getBillsByParliament', {
      params: { session, testMode },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Error fetching bills by parliament session', error: error.message });
    }
  }
};

// **Get Bill ObjectId**
const getBillObjectId = async (req, res) => {
  try {
    const { billNumber, session, testMode } = req.query;
    if (!billNumber || !session) return res.status(400).json({ message: 'Both billNumber and session are required' });

    const response = await databaseApiClient.get('/api/bills/getBillObjectId', {
      params: { billNumber, session, testMode },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Error fetching bill ObjectId', error: error.message });
    }
  }
};

// **Get Bills by Status**
const getBillsByStatus = async (req, res) => {
  try {
    const { status, testMode } = req.query;
    if (!status) return res.status(400).json({ message: 'Status parameter is required' });

    const response = await databaseApiClient.get('/api/bills/getBillsByStatus', {
      params: { status, testMode },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Error fetching bills by status', error: error.message });
    }
  }
};

// **Get Bills by Sponsor**
const getBillsBySponsor = async (req, res) => {
  try {
    const { MPP_Name, testMode } = req.query;
    if (!MPP_Name) return res.status(400).json({ message: 'MPP_Name parameter is required' });

    const response = await databaseApiClient.get('/api/bills/getBillsBySponsor', {
      params: { MPP_Name, testMode },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Error fetching bills by sponsor', error: error.message });
    }
  }
};

// **Export all functions**
module.exports = {
  getAllBills,
  getBillsByBillNumber,
  getBillsByParliament,
  getBillObjectId,
  getBillsByStatus,
  getBillsBySponsor,
};
