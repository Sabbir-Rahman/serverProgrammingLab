const express = require('express')
const router = express.Router()

const {
    ensureAuthentication,
    addUserData
} = require('../middlewares/authMiddlewire')

//MO = Math Olympiad
const { getRegisterMO,postRegisterMO,getListMO,deleteMO, paymentDoneMO, selectParticipantMO, getEditMO, postEditMO, editMO} = require('./../controllers/mathOlympiad.controller')


router.get('/register',ensureAuthentication,addUserData, getRegisterMO)
router.post('/register',ensureAuthentication,addUserData, postRegisterMO)
router.get("/list", ensureAuthentication, addUserData, getListMO);
router.get("/delete/:id", ensureAuthentication, addUserData, deleteMO);
router.get("/edit/:id", ensureAuthentication, addUserData, editMO);
router.get("/payment_done/:id", ensureAuthentication, addUserData, paymentDoneMO);
router.get("/select_participant/:id", ensureAuthentication, addUserData, selectParticipantMO);
router.get("/edit_participant_form", ensureAuthentication, addUserData, getEditMO);
router.post(
  "/edit_participant_form/:id",
  ensureAuthentication,
  addUserData,
  postEditMO
);

module.exports = router

