const mongoose = require('mongoose');
const TadikaSchema = mongoose.Schema({
    // negeri, daerah, kp is associated with each person
    createdByNegeri: {
        type: String,
        // required: true
    },
    createdByDaerah: {
        type: String,
        // required: true
    },
    createdByKp: {
        type: String,
        // required: true
    },
    // --------------------------------------------------
    kelas: {
        type: String,
        // required: [true, 'Sila Masukkan Nama Kelas'],
        trim: true
    },
    nama: {
        type: String,
        // required: [true, 'Sila Masukkan Nama Pesakit'],
        trim: true
    },
    enrolmen: {
    type: String,
    defaultValue: "0"
    },
    kedatanganBaru: {
    type: String,
    // required: [true, 'Sila tandakan Baru'],
    defaultValue: "1"

    },
    kedatanganUlangan: {
    type: String,
    defaultValue: "0"
    },
    kedatanganEnggan: {
    type: String,
    defaultValue: "0"
    },
    kedatanganTidakHadir: {
    type: String,
    defaultValue: "0"
    },
    cleftAda: {
    type: String,
    defaultValue: "0"
    },
    cleftRujuk: {
    type: String,
    defaultValue: "0"
    },
    traumaToothSurfaceLoss: {
    type: String,
    defaultValue: "0"
    },
    traumaTisuLembut: {
    type: String,
    defaultValue: "0"
    },
    traumaTisuKeras: {
    type: String,
    defaultValue: "0"
    },
    traumaKecederaanGigiAnterior: {
    type: String,
    defaultValue: "0"
    },
    statusDenturAdaB: {
    type: String,
    defaultValue: "0"
    },
    statusDenturAdaS: {
    type: String,
    defaultValue: "0"
    },
    statusDenturPerluB: {
    type: String,
    defaultValue: "0"
    },
    statusDenturPerluS: {
    type: String,
    defaultValue: "0"
    },
    kebersihanMulutA: {
    type: String,
    defaultValue: "0"
    },
    kebersihanMulutC: {
    type: String,
    defaultValue: "0"
    },
    kebersihanMulutE: {
    type: String,
    defaultValue: "0"
    },
    gisSkor0: {
    type: String,
    defaultValue: "0"
    },
    gisSkor1: {
    type: String,
    defaultValue: "0"
    },
    gisSkor2: {
    type: String,
    defaultValue: "0"
    },
    gisSkor3: {
    type: String,
    defaultValue: "0"
    },
    statusGigidesidusD: {
    type: String,
    defaultValue: "0"
    },
    statusGigidesidusM: {
    type: String,
    defaultValue: "0"
    },
    statusGigidesidusF: {
    type: String,
    defaultValue: "0"
    },
    statusGigidesidusX: {
    type: String,
    defaultValue: "0"
    },
    statusGigidesidusJumlahdfx: {
    type: String,
    defaultValue: "0"
    },
    statusGigiDesidusdfx0: {
    type: String,
    defaultValue: "0"
    },
    statusGigiKekalE: {
    type: String,
    defaultValue: "0"
    },
    statusGigiKekalD: {
    type: String,
    defaultValue: "0"
    },
    statusGigiKekalM: {
    type: String,
    defaultValue: "0"
    },
    statusGigiKekalF: {
    type: String,
    defaultValue: "0"
    },
    statusGigiKekalX: {
    type: String,
    defaultValue: "0"
    },
    statusGigiKekalJumlahDMFX: {
    type: String,
    defaultValue: "0"
    },
    dFBilGigiCariesE: {
    type: String,
    defaultValue: "0"
    },
    dFClassIdanII: {
    type: String,
    defaultValue: "0"
    },
    dFClassISahaja: {
    type: String,
    defaultValue: "0"
    },
    gigiKekalDMFXsamaAtauKurangDari3: {
    type: String,
    defaultValue: "0"
    },
    totalStatusGigiKekalSamaKosong: {
    type: String,
    defaultValue: "0"
    },
    statusBebasKaries: {
    type: String,
    defaultValue: "0"
    },
    statusBebasKariesTapiElebihDariSatu: {
    type: String,
    defaultValue: "0"
    },
    MBK: {
    type: String,
    defaultValue: "0"
    },
    eMoreThanZero: {
    type: String,
    defaultValue: "0"
    },
    mulutBebasGingivitis: {
    type: String,
    defaultValue: "0"
    },
    tprSMKP: {
    type: String,
    defaultValue: "0"
    },
    tprICDAS: {
    type: String,
    defaultValue: "0"
    },
    CRA: {
    type: String,
    defaultValue: "0"
    },
    craRendah: {
    type: String,
    defaultValue: "0"
    },
    craSederhana: {
    type: String,
    defaultValue: "0"
    },
    craTinggi: {
    type: String,
    defaultValue: "0"
    },
    fsDibuatPadaTahunLepas: {
    type: String,
    defaultValue: "0"
    },
    fsDibuatPadaTahunSemasaResin: {
    type: String,
    defaultValue: "0"
    },
    fsDibuatPadaTahunSemasaGIC: {
    type: String,
    defaultValue: "0"
    },
    perluFSMuridB: {
    type: String,
    defaultValue: "0"
    },
    perluFSMuridS: {
    type: String,
    defaultValue: "0"
    },
    perluFSGigiB: {
    type: String,
    defaultValue: "0"
    },
    perluFSGigiS: {
    type: String,
    defaultValue: "0"
    },
    perluFsBilGigiFailed: {
    type: String,
    defaultValue: "0"
    },
    perluFvMuridB: {
    type: String,
    defaultValue: "0"
    },
    perluFvMuridS: {
    type: String,
    defaultValue: "0"
    },
    perluFvGigiB: {
    type: String,
    defaultValue: "0"
    },
    perluFvGigiS: {
    type: String,
    defaultValue: "0"
    },
    perluPRR1MuridB: {
    type: String,
    defaultValue: "0"
    },
    perluPRR1MuridS: {
    type: String,
    defaultValue: "0"
    },
    perluPRR1BGigiB: {
    type: String,
    defaultValue: "0"
    },
    perluPRR1BGigiS: {
    type: String,
    defaultValue: "0"
    },
    perluPRRatauFissureSealantAtauKeduaDua: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAntGdB: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAntGdS: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAntGkB: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAntGkS: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanPosGdB: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanPosGdS: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanPosGkB: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanPosGkS: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAmgGdB: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAmgGdS: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAmgGkB: {
    type: String,
    defaultValue: "0"
    },
    perluTampalanAmgGkS: {
    type: String,
    defaultValue: "0"
    },
    telahFSMuridB: {
    type: String,
    defaultValue: "0"
    },
    telahFSMuridS: {
    type: String,
    defaultValue: "0"
    },
    telahFSGigiB: {
    type: String,
    defaultValue: "0"
    },
    telahFSGigiS: {
    type: String,
    defaultValue: "0"
    },
    telahFVMuridB: {
    type: String,
    defaultValue: "0"
    },
    telahFVMuridS: {
    type: String,
    defaultValue: "0"
    },
    telahFVGigiB: {
    type: String,
    defaultValue: "0"
    },
    telahFVGigiS: {
    type: String,
    defaultValue: "0"
    },
    telahPRR1GigiB: {
    type: String,
    defaultValue: "0"
    },
    telahPRR1MuridB: {
    type: String,
    defaultValue: "0"
    },
    telahPRR1GigiB: {
    type: String,
    defaultValue: "0"
    },
    telahPRR1GigiS: {
    type: String,
    defaultValue: "0"
    },
    telahFsOrPrr: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAntGdB: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAntGdS: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAntGkB: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAntGkS: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanPosGdB: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanPosGdS: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanPosGkB: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanPosGkS: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAmgGdB: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAmgGdS: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAmgGkB: {
    type: String,
    defaultValue: "0"
    },
    telahTampalanAmgGkS: {
    type: String,
    defaultValue: "0"
    },
    jumlahTampalanB: {
    type: String,
    defaultValue: "0"
    },
    jumlahTampalanS: {
    type: String,
    defaultValue: "0"
    },
    tampalanSementara: {
    type: String,
    defaultValue: "0"
    },
    cabutanGd: {
    type: String,
    defaultValue: "0"
    },
    cabutanGk: {
    type: String,
    defaultValue: "0"
    },
    penskaleran: {
    type: String,
    defaultValue: "0"
    },
    abses: {
    type: String,
    defaultValue: "0"
    },
    pulpotomi: {
    type: String,
    defaultValue: "0"
    },
    kesSelesaiICDAS: {
    type: String,
    defaultValue: "0"
    },
    kesSelesai: {
    type: String,
    defaultValue: "0"
    },
    rujuk: {
    type: String,
    defaultValue: "0"
    },
    catatan: {
    type: String,
    defaultValue: "0"
    },
    umur: {
    type: String,
    // required: [true, 'Sila Masukkan Umur Pesakit'],
    trim: true
    },
    klinikPergigian: {
    type: String,
    // required: [true, 'Sila Masukkan Nama Klinik Pergigian'],
    trim: true
    },
    namaTadika: {
    type: String,
    // required: [true, 'Sila Masukkan Nama Taska/Tadika'],
    trim: true
    },
    jenisTadika: {
    type: String,
    // required: [true, 'Sila Pilih Jenis Tadika'],
    trim: true
    },
    operator: {
    type: String,
    // required: [true, 'Sila Masukkan Nama Operator'],
    trim: true
    },
    pasukanPergigian: {
    type: String,
    // required: [true, 'Sila Pilih Pasukan Pergigian Bergerak'],
    trim: true
    },
    menjalankanBegin: {
    type: String,
    defaultValue: "0"
    },
    taska: {
    type: String,
    defaultValue: "0"
    },
    tadika: {
    type: String,
    defaultValue: "0"
    },
    gigiKekal: {
    type: String,
    defaultValue: "0"
    },
    dClassI: {
    type: String,
    defaultValue: "0"
    },
    dCLASII: {
    type: String,
    defaultValue: "0"
    },
    fClassI: {
    type: String,
    defaultValue: "0"
    },
    fClassII: {
    type: String,
    defaultValue: "0"
    },
    fsTahunLepasGic: {
    type: String,
    defaultValue: "0"
    },
    fsTahunLepasResin: {
    type: String,
    defaultValue: "0"
    },
    fsTahunLepasLain: {
    type: String,
    defaultValue: "0"
    },
    fsTahunLepasIntactLain: {
    type: String,
    defaultValue: "0"
    },
    ceramahToddler: {
    type: String,
    defaultValue: "0"
    },
    ceramahPenjaga: {
    type: String,
    defaultValue: "0"
    },
    toddlerLMG: {
	type: String,
	defaultValue: "0"
	},
    gigiDesidus: {
    type: String,
    defaultValue: "0"
    },
    //tambah model baru by Leong 
    jenisTadikaKerajaanPendaftaranTadika:{
    type: String,
    defaultValue: "0"
    },
    adaPendaftaranTadika:{
    type: String,
    defaultValue: "0"
    },
    tiadaPendaftaranTadika:{
    type: String,
    defaultValue: "0"
    },
    faktorRisikoPemeriksaanAwalTadika:{
    type: String,
    defaultValue: "0"
    },
    gicIntactPemeriksaanAwalTadika:{
    type: String,
    defaultValue: "0"
    },
    resinIntactPemeriksaanAwalTadika:{
    type: String,
    defaultValue: "0"
    },
    lainLainIntactPemeriksaanAwalTadika:{
    type: String,
    defaultValue: "0"
    },
    tidakPerluFvPerluDibuatTadika:{
    type: String,
    defaultValue: "0"
    },
    sesiFvPerludiBuatSATUPenyataAkhirSatuTadika:{
    type: String,
    defaultValue: "0"
    },
    sesiFvPerludiBuatDUAPenyataAkhirSatuTadika:{
    type: String,
    defaultValue: "0"
    },
    sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika:{
    type: String,
    defaultValue: "0"
    },
    sesiFvPerludiBuatEMPATPenyataAkhirSatuTadika:{
    type: String,
    defaultValue: "0"
    },
    jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    jumlahEnamPuluhAGPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    toddlerLMG: {
	type: String,
	defaultValue: "0"
	},
    tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadika:{
    type: String,
    defaultValue: "0"
    },
    txEndo:{
    type: String,
    defaultValue: "0"
    },
});

module.exports = mongoose.model('Tadika', TadikaSchema);