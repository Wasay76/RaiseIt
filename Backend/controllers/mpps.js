const MPP = require("../models/MPP");
const Bill = require("../models/bill")
const Petition = require('../models/petition'); 

const CreateMPP = async (req, res) => {
    try {
        const {firstName, lastName, currentRoles, bills, location, party } = req.body;

        const newMPP = await MPP.create({
            firstName,
            lastName,       
            currentRoles,        
            bills, 
            location,
            party     
        });

        return res.status(200).send(newMPP);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Mpp creation failed");
    }
}  

const mppData = async (req, res) => {
    try {
        const { firstName, lastName } = req.query;
        const fullname = firstName + " " + lastName

        const bills = await MPP.find({
            firstName,
            lastName
        }).select('bills')

        if(bills.length === 0){
            throw new Error("Mpp bills not found")
        }

        if (!bills || bills.length === 0) {
            return res.status(404).send({ message: "No bills found for this MPP" });
        }

        return res.status(200).send({
            success: true,
            bills: bills
        });

    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "An error occurred while fetching bills" });
    }
};



module.exports = { CreateMPP, mppData };
