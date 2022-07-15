const Tadika = require('../models/Tadika');

const getAllPersonTadikas = async (req, res) => {
    const tadikas = await Tadika.find({ createdByKp: req.user.kp }).sort('kelasPendaftaranTadika');
    res.status(200).json({ tadikas });
};

const getSinglePersonTadika = async (req, res) => {
    const { user: { kp }, params: { id: personTadikaId } } = req;

    const tadika = await Tadika.findOne({ _id: personTadikaId, createdByKp: kp });

    if (!tadika) {
        return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
    }

    res.status(200).json({ tadika });
};

const createPersonTadika = async (req, res) => {
    // copy paste these to updatePersonTadika, to uppercase all created text input
    // req.body.namaPendaftaranTadika = req.body.namaPendaftaranTadika.toUpperCase();
    // req.body.kelasPendaftaranTadika = req.body.kelasPendaftaranTadika.toUpperCase();
    // req.body.namaTaskaTadikaPendaftaranTadika = req.body.namaTaskaTadikaPendaftaranTadika.toUpperCase();
    // ---------------------------------------------------------------------------

    // convert from frontend req.body to match Tadika Model
    const createPersonTadika = {};
    createPersonTadika.createdByNegeri = req.user.negeri;
    createPersonTadika.createdByDaerah = req.user.daerah;
    if (!req.body.namaFasiliti) {
        createPersonTadika.createdByKp = req.user.kp;
    }
    if (req.body.namaFasiliti) {
        createPersonTadika.createdByKp = req.body.namaFasiliti;
    }
    
    // // pendaftaran tadika
    // createPersonTadika.nama = req.body.namaPendaftaranTadika;
    // createPersonTadika.umur = req.body.umurPendaftaranTadika;
    // createPersonTadika.bangsa = req.body.bangsaPendaftaranTadika;
    // createPersonTadika.kelas = req.body.kelasPendaftaranTadika;
    // createPersonTadika.namaTadika = req.body.namaTaskaTadikaPendaftaranTadika;
    // createPersonTadika.taska = req.body.taskaPendaftaranTadika;
    // createPersonTadika.tadika = req.body.tadikaPendaftaranTadika;
    // createPersonTadika.jenisTadika = req.body.jenisTadikaPendaftaranTadika;
    // createPersonTadika.jenisTadikaKerajaanPendaftaranTadika = req.body.jenisTadikaKerajaanPendaftaranTadika; // X
    // createPersonTadika.kedatanganBaru = req.body.baruPendaftaranTadika;
    // createPersonTadika.kedatanganUlangan = req.body.ulanganPendaftaranTadika;
    // createPersonTadika.kedatanganEnggan = req.body.engganPendaftaranTadika;
    // createPersonTadika.kedatanganTidakHadir = req.body.tidakHadirPendaftaranTadika;
    // createPersonTadika.adaPendaftaranTadika = req.body.adaPendaftaranTadika; // X
    // createPersonTadika.tiadaPendaftaranTadika = req.body.tiadaPendaftaranTadika; // X
    // // createPersonTadika.operator = req.body.namaOperator; // should be skipped
    // createPersonTadika.pasukanPergigian = req.body.namaPasukanBergerakPendaftaranTadika;
    
    // // pemeriksaan awal
    // createPersonTadika.cleftAda = req.body.adaCleftPemeriksaanAwalTadika;
    // createPersonTadika.cleftRujuk = req.body.rujukPemeriksaanAwalTadika;
    // createPersonTadika.statusDenturAdaB = req.body.adaDenturePemeriksaanAwalTadika;
    // createPersonTadika.statusDenturAdaS = req.body.perluPemeriksaanAwalTadika;
    // createPersonTadika.statusDenturPerluB = req.body.perluBaruPemeriksaanAwalTadika;
    // createPersonTadika.statusDenturPerluS = req.body.perluSemulaPemeriksaanAwalTadika;
    // createPersonTadika.traumaToothSurfaceLoss = req.body.toothSurfaceLossPemeriksaanAwalTadika;
    // createPersonTadika.traumaKecederaanGigiAnterior = req.body.kecederaanGigiAnteriorPemeriksaanAwalTadika;
    // createPersonTadika.traumaTisuLembut = req.body.tisuLembutPemeriksaanAwalTadika;
    // createPersonTadika.traumaTisuKeras = req.body.tisuKerasPemeriksaanAwalTadika;
    // createPersonTadika.kebersihanMulut = req.body.kebersihanMulutPemeriksaanAwalTadika; // tadika should be kebersihan mulut only
    // createPersonTadika.gisSkor = req.body.GISSkorPemeriksaanAwalTadika; // tadika should be gisSkor only
    // createPersonTadika.statusGigidesidusD = req.body.decayDesidusPemeriksaanAwalTadika;
    // createPersonTadika.statusGigidesidusM = req.body.missingDesidusPemeriksaanAwalTadika;
    // createPersonTadika.statusGigidesidusF = req.body.filledDesidusPemeriksaanAwalTadika;
    // createPersonTadika.statusGigidesidusX = req.body.forExtractionDesidusPemeriksaanAwalTadika;
    // createPersonTadika.statusGigiKekalD = req.body.decayKekalPemeriksaanAwalTadika;
    // createPersonTadika.statusGigiKekalM = req.body.missingKekalPemeriksaanAwalTadika;
    // createPersonTadika.statusGigiKekalF = req.body.filledKekalPemeriksaanAwalTadika;
    // createPersonTadika.statusGigiKekalX = req.body.forExtractionKekalPemeriksaanAwalTadika;
    // createPersonTadika.faktorRisikoPemeriksaanAwalTadika = req.body.faktorRisikoPemeriksaanAwalTadika; // X
    // createPersonTadika.dClassI = req.body.class1DPemeriksaanAwalTadika;
    // createPersonTadika.dCLASII = req.body.class2DPemeriksaanAwalTadika;
    // createPersonTadika.fClassI = req.body.class1FPemeriksaanAwalTadika;
    // createPersonTadika.fClassII = req.body.class2FPemeriksaanAwalTadika;
    // createPersonTadika.fsTahunLepasGic = req.body.gicLepasPemeriksaanAwalTadika;
    // createPersonTadika.fsTahunLepasResin = req.body.resinLepasPemeriksaanAwalTadika;
    // createPersonTadika.fsTahunLepasLain = req.body.lainLainLepasPemeriksaanAwalTadika;
    // createPersonTadika.gicIntactPemeriksaanAwalTadika = req.body.gicIntactPemeriksaanAwalTadika; // X
    // createPersonTadika.resinIntactPemeriksaanAwalTadika = req.body.resinIntactPemeriksaanAwalTadika; // X
    // createPersonTadika.lainLainIntactPemeriksaanAwalTadika = req.body.lainLainIntactPemeriksaanAwalTadika; // X
    // // perlu dibuat
    // createPersonTadika.perluFSGigiB = req.body.baruJumlahGigiPerluFsPerluDibuatTadika;
    // createPersonTadika.perluFSGigiS = req.body.semulaJumlahGigiPerluFsPerluDibuatTadika;
    // createPersonTadika.perluFsBilGigiFailed = req.body.failedJumlahGigiPerluFsPerluDibuatTadika;
    // createPersonTadika.perluFvGigiB = req.body.yaPerluFvPerluDibuatTadika;
    // createPersonTadika.tidakPerluFvPerluDibuatTadika = req.body.tidakPerluFvPerluDibuatTadika; // X
    // createPersonTadika.perluPRR1MuridB = req.body.baruJumlahGigiPerluPrrPerluDibuatTadika;
    // createPersonTadika.perluPRR1MuridS = req.body.semulaJumlahGigiPerluPrrPerluDibuatTadika;
    // createPersonTadika.perluTampalanAntGdB = req.body.gdBaruAnteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanAntGdS = req.body.gdSemulaAnteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanAntGkB = req.body.gkBaruAnteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanAntGkS = req.body.gkSemulaAnteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanPosGdB = req.body.gdBaruPosteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanPosGdS = req.body.gdSemulaPosteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanPosGkB = req.body.gkBaruPosteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanPosGkS = req.body.gkSemulaPosteriorSewarnaPerluDibuatTadika;
    // createPersonTadika.perluTampalanAmgGdB = req.body.gdBaruPosteriorAmalgamPerluDibuatTadika;
    // createPersonTadika.perluTampalanAmgGdS = req.body.gdSemulaPosteriorAmalgamPerluDibuatTadika;
    // createPersonTadika.perluTampalanAmgGkB = req.body.gkBaruPosteriorAmalgamPerluDibuatTadika;
    // createPersonTadika.perluTampalanAmgGkS = req.body.gkSemulaPosteriorAmalgamPerluDibuatTadika;
    // //PENYATA AKHIR 1
    // createPersonTadika.telahFSGigiB = req.body.baruJumlahGigiTelahDibuatFSPenyataAkhir;
    // createPersonTadika.telahFSGigiS = req.body.semulaJumlahGigiTelahDibuatFSPenyataAkhir;
    // createPersonTadika.sesiFvPerludiBuatSATUPenyataAkhirSatuTadika = req.body.sesiFvPerludiBuatSATUPenyataAkhirSatuTadika;// X
    // createPersonTadika.sesiFvPerludiBuatDUAPenyataAkhirSatuTadika = req.body.sesiFvPerludiBuatDUAPenyataAkhirSatuTadika;//X
    // createPersonTadika.sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika = req.body.sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika;//X
    // createPersonTadikasesiFvPerludiBuatEMPATPenyataAkhirSatuTadika = req.body.sesiFvPerludiBuatEMPATPenyataAkhirSatuTadika;//X
    // createPersonTadika.telahFVGigiB = req.body.baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika;
    // createPersonTadika.telahFVGigiS = req.body.semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika;
    // createPersonTadika.telahPRR1GigiB = req.body.baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika;
    // createPersonTadika.telahPRR1GigiS = req.body.semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAntGdB = req.body.gdBaruAnteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAntGdS = req.body.gdSemulaAnteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAntGkB = req.body.gkBaruAnteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAntGkS = req.body.gkSemulaAnteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanPosGdB = req.body.gdBaruPosteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanPosGdS = req.body.gdSemulaPosteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanPosGkB = req.body.gkBaruPosteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanPosGkS = req.body.gkSemulaPosteriorSewarnaPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAmgGdB = req.body.gdBaruPosteriorAmalgamPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAmgGdS = req.body.gdSemulaPosteriorAmalgamPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAmgGkB = req.body.gkBaruPosteriorAmalgamPenyataAkhirSATUTadika;
    // createPersonTadika.telahTampalanAmgGkS = req.body.gkSemulaPosteriorAmalgamPenyataAkhirSATUTadika;
    // //PENYATA AKHIR 2
    // createPersonTadika.cabutanGd = req.body.desidusJumlahGigiTelahDicabutPenyataAkhirDUATadika;
    // createPersonTadika.cabutanGk = req.body.kekalJumlahGigiTelahDicabutPenyataAkhirDUATadika;
    // createPersonTadika.tampalanSementara = req.body.jumlahGigiTampalanSementaraPenyataAkhirDUATadika;
    // createPersonTadika.pulpotomi = req.body.jumlahPulpotomiRawatanLainPenyataAkhirDUATadika;
    // createPersonTadika.jumlahEndodontikRawatanLainPenyataAkhirDUATadika = req.body.jumlahEndodontikRawatanLainPenyataAkhirDUATadika;//x
    // createPersonTadika.abses = req.body.jumlahAbsesRawatanLainPenyataAkhirDUATadika;
    // createPersonTadika.kesSelesai = req.body.kesSelesaiRawatanLainPenyataAkhirDUATadika;
    // createPersonTadika.kesSelesaiICDAS = req.body.kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadika;
    // createPersonTadika.rujuk = req.body.rujukRawatanLainPenyataAkhirDUATadika;
    // createPersonTadika.penskaleran = req.body.penskaleranRawatanLainPenyataAkhirDUATadika;
    // createPersonTadika.ceramahPenjaga = req.body.ceramahPromosiPenyataAkhirDUATadika;
    // createPersonTadika.lmgPromosiPenyataAkhirDUATadika = req.body.lmgPromosiPenyataAkhirDUATadika;//X
    // createPersonTadika.menjalankanBegin = req.body.yaMelaksanakanAktivitiBeginPenyataAkhirDUATadika;
    // createPersonTadika.tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadika = req.body.tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadika;//X
    // createPersonTadika.jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika = req.body.jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika;//x
    // createPersonTadika.jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika = req.body.jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika;//x
    // createPersonTadika.jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika = req.body.jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika;//x
    // createPersonTadika.jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika = req.body.jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika;//x
    // createPersonTadika.jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika = req.body.jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika;//x
    // createPersonTadika.jumlahEnamPuluhAGPenyataAkhirDUATadika = req.body.jumlahEnamPuluhAGPenyataAkhirDUATadika;//x
    // createPersonTadika.catatan = req.body.catatanPenyataAkhirDUATadika;

    // const tadika = await Tadika.create(createPersonTadika);
    // res.status(201).json({ tadika });
    console.log(createPersonTadika);
    console.log(req.body);
    res.status(201).send(req.body);
};

const updatePersonTadika = async (req, res) => {
    const { user: { kp }, params: { id: personTadikaId } } = req;

    // copy paste from createPersonTadika, to uppercase all updated text input
    req.body.namaPendaftaranTadika = req.body.namaPendaftaranTadika.toUpperCase();
    req.body.kelasPendaftaranTadika = req.body.kelasPendaftaranTadika.toUpperCase();
    req.body.namaTaskaTadikaPendaftaranTadika = req.body.namaTaskaTadikaPendaftaranTadika.toUpperCase();
    //------------------------------------------------------------------------

    const tadika = await Tadika.findOneAndUpdate({ _id: personTadikaId, createdByKp: kp }, req.body, { new: true, runValidators: true });
    
    if (!tadika) {
        return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
    }

    res.status(200).json({ tadika });
};

const deletePersonTadika = async (req, res) => {
    const { user: { kp }, params: { id: personTadikaId } } = req;

    const tadika = await Tadika.findOneAndRemove({ _id: personTadikaId, createdByKp: kp });

    if (!tadika) {
        return res.status(404).json({ msg: `No person with id ${personTadikaId}` });
    }

    res.status(200).send();
};

// query route
const queryPersonTadika = async (req, res) => {
    // in future query input we must make uppercase all input at the front end
    // req.query.namaPendaftaranTadika is UPPERCASE

    const { user: { kp }, query: { namaPendaftaranTadika, kelasPendaftaranTadika } } = req;
    const queryObject = {};
    queryObject.createdByKp = kp;

    if (namaPendaftaranTadika) {
        queryObject.namaPendaftaranTadika = namaPendaftaranTadika;
    }

    if (kelasPendaftaranTadika) { // this query is not used at front end atm, just to justify why queryObject is used
        queryObject.kelasPendaftaranTadika = kelasPendaftaranTadika;
    }

    // const tadika = await Tadika.find({ namaPendaftaranTadika, kelasPendaftaranTadika, createdByKp: kp }); // try this with Postman to justify why queryObject is used
    const tadika = await Tadika.find(queryObject);

    res.status(200).json({ tadika });
};

module.exports = { getAllPersonTadikas, getSinglePersonTadika, createPersonTadika, updatePersonTadika, deletePersonTadika, queryPersonTadika };