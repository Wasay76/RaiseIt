const Bill = require("../models/bill");
const MPP = require("../models/MPP")

const CreateBill = async (req, res) => {
    try {
        const {BillNumber, BillName, Link, SubCat, Abstract, ShortDesc } = req.body;

        const newBill = await Bill.create({
            BillNumber,
            Bill: BillName,
            Link,        
            SubCat,      
            Abstract,    
            ShortDesc    
        });

        return res.status(200).send(newBill);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bill creation failed");
    }
}

const getInfoFromSubCat = async (req, res) => {
    try {
      const { subCat } = req.body; 
  
      const bills = await Bill.find({
        SubCat: subCat
      });
  
      if (bills.length === 0) { 
        return res.status(404).send({
          success: false,
          message: "No Bill Found for this sub-category"
        });
      }

      let mppInfo = []

      for (const each of bills) {
        const currMPP = await MPP.find({ bills: each.BillNumber });
        mppInfo.push(currMPP);
      }

      return res.status(200).send({
        success: true,
        bills: bills,
        mppInfo: mppInfo
      });

    } catch (error) {
      console.log(error);

      return res.status(400).send({
        success: false,
        message: "An error occurred while fetching bills"
      });
    }
};  


module.exports = { CreateBill, getInfoFromSubCat };
