const Petition = require('../models/petition'); 
const MPP = require("../models/MPP")

const getPetitionsByMPP = async (req, res) => {
  try {
    const {memberName} = req.body;
    const [firstName, lastName] = memberName.split(" ");

    const bills = await MPP.find({
        firstName,
        lastName
    }).select('bills')

    const petitions = await Petition.find({
      members: {
        $elemMatch: {
          Member: memberName
        }
      }
    });

    return res.status(200).send({
        success: true,
        petitions: petitions,
        bills: bills
    });
  } catch (error) {
    console.log(error)
    return res.status(400).send({
        success: false,
        data: []
    })
  }
}

module.exports = { getPetitionsByMPP };