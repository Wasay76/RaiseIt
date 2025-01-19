const express = require('express')

const router = express.Router()
const{CreateBill, getInfoFromSubCat} = require('../controllers/bills')

router.route('/createBill').post(CreateBill)
router.route('/findBillFromSub').post(getInfoFromSubCat)

module.exports = router