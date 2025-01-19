const express = require('express')

const router = express.Router()
const {CreateMPP, mppData} = require('../controllers/mpps')
const {getPetitionsByMPP} = require("../controllers/petition")

router.route('/createMPP').post(CreateMPP)
router.route("/findMPPData").get(mppData)
router.route("/petitionFind").post(getPetitionsByMPP)

module.exports = router