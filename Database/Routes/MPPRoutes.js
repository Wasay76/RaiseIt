const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const MPP = require('../Models/MPP');
// 1. **Get All MPPs or Specific MPP by Name** (GET /api/mpps/getAllMPPs?name={name})
router.get('/getAllMPPs', async (req, res) => {
  try {
    const { name } = req.query;

    // If name is provided, fetch a specific MPP
    if (name) {
      const mpp = await MPP.findOne({ name });
      if (mpp) {
        return res.status(200).json(mpp);
      } else {
        return res.status(404).json({ message: 'MPP not found' });
      }
    }


    // If no name is provided, return all MPPs
    const mpps = await MPP.find({}, 'name riding party'); // Fetch specific fields
    res.status(200).json(mpps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching MPPs', error: error.message });
  }
});

// 2. **Get MPP by Name** (GET /api/mpps/getMPPByName?name={name})
router.get('/getMPPByName', async (req, res) => {
  try {
    const { name } = req.query;

    // Validate that the name parameter is provided
    if (!name) {
      return res.status(400).json({ message: 'Name parameter is required' });
    }

    // Fetch the MPP by name
    const mpp = await MPP.findOne({ name });
    if (mpp) {
      return res.status(200).json(mpp);
    } else {
      return res.status(404).json({ message: 'MPP not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching MPP', error: error.message });
  }
});

// 3. **Get MPPs by Riding** (GET /api/mpps/getMPPByRiding?riding={riding})
router.get('/getMPPByRiding', async (req, res) => {
  try {
    const { riding } = req.query;

    // Validate that the riding parameter is provided
    if (!riding) {
      return res.status(400).json({ message: 'Riding parameter is required' });
    }

    // Fetch MPPs by riding
    const mpps = await MPP.find({ riding });
    if (mpps.length > 0) {
      return res.status(200).json(mpps);
    } else {
      return res.status(404).json({ message: 'No MPPs found for the specified riding' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching MPPs', error: error.message });
  }
});

// 4. **Get Bills Sponsored by MPP** (GET /api/mpps/getBillsSponsoredByMPP?name={name})
router.get('/getBillsSponsoredByMPP', async (req, res) => {
  try {
    const { name } = req.query;

    // Validate that the name parameter is provided
    if (!name) {
      return res.status(400).json({ message: 'Name parameter is required' });
    }

    // Fetch the MPP by name
    const mpp = await MPP.findOne({ name });
    if (!mpp) {
      return res.status(404).json({ message: 'MPP not found' });
    }

    // Fetch all bills sponsored by the MPP
    const bills = await Bill.find({ sponsor: new RegExp(name, 'i') }); // Match sponsor field with the MPP name
    if (bills.length > 0) {
      return res.status(200).json(bills);
    } else {
      return res.status(404).json({ message: 'No bills sponsored by this MPP' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills', error: error.message });
  }
});

 /*MOVE THIS API TO THE BACKEND
// 5. **Get MPP Position on a Bill** (GET /api/mpps/getMPPPositionOnBill?name={name}&bill_number={bill_number})
router.get('/getMPPPositionOnBill', async (req, res) => {
  try {
    const { name, bill_number } = req.query;

    // Validate that both name and bill_number parameters are provided
    if (!name || !bill_number) {
      return res.status(400).json({ message: 'Both name and bill_number parameters are required' });
    }

    // Fetch the MPP by name
    const mpp = await MPP.findOne({ name });
    if (!mpp) {
      return res.status(404).json({ message: 'MPP not found' });
    }

    // Fetch the bill by bill_number
    const bill = await Bill.findOne({ bill_number });
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    const position = mpp.votes?.find((vote) => vote.bill_number === bill_number);

    if (position) {
      return res.status(200).json({
        mpp_name: name,
        bill_number,
        bill_title: bill.title,
        position: position.position,
      });
    } else {
      return res
        .status(404)
        .json({ message: `No recorded position for ${name} on Bill ${bill_number}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching MPP position on the bill', error: error.message });
  }
}); 
*/

// 6. **Get Motions by MPP** (GET /api/mpps/getMotionsByMPP?name={name})
router.get('/getMotionsByMPP', async (req, res) => {
  try {
    const { name } = req.query;

    // Validate that the name parameter is provided
    if (!name) {
      return res.status(400).json({ message: 'Name parameter is required' });
    }

    // Fetch the MPP by name
    const mpp = await MPP.findOne({ name });
    if (!mpp) {
      return res.status(404).json({ message: 'MPP not found' });
    }

    if (mpp.motions && mpp.motions.length > 0) {
      return res.status(200).json({
        mpp_name: mpp.name,
        motions: mpp.motions,
      });
    } else {
      return res.status(404).json({ message: `No motions found for ${name}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching motions', error: error.message });
  }
});





module.exports = router;
