const Operator = require('../models/Operator');
const Fasiliti = require('../models/Fasiliti');

const getOperatorList = async (req, res) => {
    const operator = await Operator.find({ kpSkrg: req.user.kp });
    console.log(operator);
    res.status(200).send('Operator');
}

const getFasilitiList = async (req, res) => {
    const fasiliti = await Fasiliti.find({ daerah: req.user.daerah });
    console.log(fasiliti);
    res.status(200).send('Fasiliti');
}

module.exports = { getOperatorList, getFasilitiList };