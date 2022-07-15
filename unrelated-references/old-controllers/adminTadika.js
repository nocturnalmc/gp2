const Tadika = require('../models/Tadika');

const adminGetAllPersonTadikas = async (req, res) => {
    if (req.user.accountType === 'negaraUser') {
        const tadikas = await Tadika.find({}).sort('createdByNegeri');
        return res.status(200).json({ tadikas });
    }
    if (req.user.accountType === 'negeriUser') {
        const tadikas = await Tadika.find({ createdByNegeri: req.user.negeri }).sort('createdByDaerah');
        return res.status(200).json({ tadikas });
    }
    if (req.user.accountType === 'daerahUser') {
        const tadikas = await Tadika.find({ createdByDaerah: req.user.daerah }).sort('createdByKp');
        return res.status(200).json({ tadikas });
    }

    res.status(401).json({ msg: `You are ${req.user.accountType}` });
};

const adminGetSinglePersonTadika = async (req, res) => {
    const { user: { accountType }, params: { id: personTadikaId } } = req;

    if (accountType === 'negaraUser') {
        const tadika = await Tadika.findOne({ _id: personTadikaId });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).json({ tadika });
    }
    if (accountType === 'negeriUser') {
        const tadika = await Tadika.findOne({ _id: personTadikaId, createdByNegeri: req.user.negeri });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).json({ tadika });
    }
    if (accountType === 'daerahUser') {
        const tadika = await Tadika.findOne({ _id: personTadikaId, createdByDaerah: req.user.daerah });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).json({ tadika });
    }

    res.status(401).json({ msg: `You are ${req.user.accountType}` });
};

const adminUpdatePersonTadika = async (req, res) => {
    const { user: { accountType }, params: { id: personTadikaId } } = req;

    // copy paste from user's createPersonTadika, to uppercase all updated text input
    req.body.namaPendaftaranTadika = req.body.namaPendaftaranTadika.toUpperCase();
    req.body.kelasPendaftaranTadika = req.body.kelasPendaftaranTadika.toUpperCase();
    req.body.namaTaskaTadikaPendaftaranTadika = req.body.namaTaskaTadikaPendaftaranTadika.toUpperCase();
    //-------------------------------------------------------------------------------

    if (accountType === 'negaraUser') {
        const tadika = await Tadika.findOneAndUpdate({ _id: personTadikaId }, req.body, { new: true, runValidators: true });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).json({ tadika });
    }
    if (accountType === 'negeriUser') {
        const tadika = await Tadika.findOneAndUpdate({ _id: personTadikaId, createdByNegeri: req.user.negeri }, req.body, { new: true, runValidators: true });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).json({ tadika });   
    }
    if (accountType === 'daerahUser') {
        const tadika = await Tadika.findOneAndUpdate({ _id: personTadikaId, createdByDaerah: req.user.daerah }, req.body, { new: true, runValidators: true });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).json({ tadika });
    }

    res.status(401).json({ msg: `You are ${req.user.accountType}` });
};

const adminDeletePersonTadika = async (req, res) => {
    const { user: { accountType }, params: { id: personTadikaId } } = req;
    
    if (accountType === 'negaraUser') {
        const tadika = await Tadika.findOneAndRemove({ _id: personTadikaId });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).send();
    }
    if (accountType === 'negeriUser') {
        const tadika = await Tadika.findOneAndRemove({ _id: personTadikaId, createdByNegeri: req.user.negeri });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).send();
    }
    if (accountType === 'daerahUser') {
        const tadika = await Tadika.findOneAndRemove({ _id: personTadikaId, createdByDaerah: req.user.daerah });
        if (!tadika) {
            return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
        }
        return res.status(200).send();
    }

    res.status(401).json({ msg: `You are ${req.user.accountType}` });
};

module.exports = { adminGetAllPersonTadikas, adminGetSinglePersonTadika, adminUpdatePersonTadika, adminDeletePersonTadika };