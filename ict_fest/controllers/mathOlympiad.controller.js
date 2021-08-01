//getRegisterMO,postRegisterMO,getListMO,deleteMO

const MathOlympiad = require('../models/MathOlympiad.model')
const getRegisterMO = (req, res) => {
    res.render("mathOlympiad/register.ejs")
}

const postRegisterMO = (req,res) => {
    console.log(req.body)
    const { name,email,contact,institution,category,tshirt} = req.body
}

const getListMO = (req,res) => {
    res.render("mathOlympiad/list.ejs")
}

const deleteMO = (req,res) => {
    const id = req.params.id

    console.log(id)
    res.render("mathOlympiad/list.ejs")
}

module.exports = { getRegisterMO, postRegisterMO, getListMO, deleteMO };