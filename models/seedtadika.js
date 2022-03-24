const mongoose = require("mongoose");
const Tadika = require("./Tadika");

const newTadika = [
    new Tadika({
        createdByNegeri: "Kedah", 
        createdByDaerah: "Kota Setar",
        createdByKp: "Klinik Pergigian Alor Janggus",
        // --------------------------------------------------
        kelas: " 3 Siddiq",
        nama: "Abdurrahman",
        enrolmen: "",
        kedatanganBaru: "1",
        kedatanganUlangan: "",
        kedatanganEnggan: "",
        kedatanganTidakHadir: "",
        cleftAda: "",
        cleftRujuk: "",
        traumaToothSurfaceLoss: "",
        traumaTisuLembut: "1",
        traumaTisuKeras: "1",
        traumaKecederaanGigiAnterior: "",
        statusDenturAdaB: "",
        statusDenturAdaS: "",
        statusDenturPerluB: "",
        statusDenturPerluS: "",
        kebersihanMulutA: "",
        kebersihanMulutC: "",
        kebersihanMulutE: "1",
        gisSkor0: "",
        gisSkor1: "",
        gisSkor2: "",
        gisSkor3: "",
        statusGigidesidusD: "1",
        statusGigidesidusM: "",
        statusGigidesidusF: "1",
        statusGigidesidusX: "",
        statusGigidesidusJumlahdfx: "",
        statusGigiDesidusdfx0: "",
        statusGigiKekalE: "",
        statusGigiKekalD: "",
        statusGigiKekalM: "",
        statusGigiKekalF: "",
        statusGigiKekalX: "",
        statusGigiKekalJumlahDMFX: "",
        dFBilGigiCariesE: "",
        dFClassIdanII: "",
        dFClassISahaja: "",
        gigiKekalDMFXsamaAtauKurangDari3: "",
        totalStatusGigiKekalSamaKosong: "",
        statusBebasKaries: "",
        statusBebasKariesTapiElebihDariSatu: "",
        MBK: "",
        eMoreThanZero: "", 
        mulutBebasGingivitis: "",
        tprSMKP: "",
        tprICDAS: "",
        CRA: "",
        craRendah: "",
        craSederhana: "",
        craTinggi: "1",
        fsDibuatPadaTahunLepas: "",
        fsDibuatPadaTahunSemasaResin: "",
        fsDibuatPadaTahunSemasaGIC: "",
        perluFSMuridB: "",
        perluFSMuridS: "",
        perluFSGigiB: "",
        perluFSGigiS: "",
        perluFsBilGigiFailed: "",
        perluFvMuridB: "",
        perluFvMuridS: "",
        perluFvGigiB: "",
        perluFvGigiS: "",
        perluPRR1MuridB: "",
        perluPRR1MuridS: "",
        perluPRR1BGigiB: "",
        perluPRR1BGigiS: "",
        perluPRRatauFissureSealantAtauKeduaDua: "",
        perluTampalanAntGdB: "",
        perluTampalanAntGdB: "",
        perluTampalanAntGkB: "",
        perluTampalanAntGkS: "",
        perluTampalanPosGdB: "",
        perluTampalanPosGdS: "",
        perluTampalanPosGkB: "",
        perluTampalanPosGkS: "",        
        perluTampalanAmgGdB: "",
        perluTampalanAmgGdS: "",
        perluTampalanAmgGkB: "",
        perluTampalanAmgGkS: "",
        telahFSMuridB: "",
        telahFSMuridS: "",
        telahFSGigiB: "",
        telahFSGigiS: "",
        telahFVMuridB: "",
        telahFVMuridB: "",
        telahFVGigiB: "",
        telahFVGigiB: "",
        telahPRR1GigiB: "",
        telahPRR1MuridB: "",
        telahPRR1GigiB: "", 
        telahPRR1GigiS: "",
        telahFsOrPrr: "",
        telahTampalanAntGdB: "2",
        telahTampalanAntGdB: "1",
        telahTampalanAntGkB: "",
        telahTampalanAntGkS:  "",
        telahTampalanPosGdB: "",
        telahTampalanPosGdS: "",
        telahTampalanPosGkB: "",
        telahTampalanPosGkS: "",
        telahTampalanAmgGdB: "",
        telahTampalanAmgGdS: "",
        telahTampalanAmgGkB: "",
        telahTampalanAmgGkS: "",
        jumlahTampalanB: "",
        jumlahTampalanS: "",
        tampalanSementara: "",
        cabutanGd: "1",
        cabutanGk: "",
        penskaleran: "",
        abses: "1",
        pulpotomi: "1", 
        kesSelesaiICDAS: "",
        kesSelesai: "",
        rujuk: "",
        catatan: "",
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        jenisTadika: "",
        operator: "",
        pasukanPergigian: "",
        menjalankanBegin: "",
        taska: "",
        tadika: "",
        gigiKekal: "",
        dClassI: "",
        dCLASII: "",
        fClassI: "",
        fClassII: "",
        fsTahunLepasGic: "",
        fsTahunLepasResin: "",
        fsTahunLepasLain: "",
        fsTahunLepasIntactLain: "",
        ceramahToddler: "1",
        ceramahPenjaga: "",
        gigiDesidus: ""
    }),
    new Tadika({
        createdByNegeri: "Kedah", 
        createdByDaerah: "Kota Setar",
        createdByKp: "Klinik Pergigian Datuk Kumbar",
        // --------------------------------------------------
        kelas: " 3 Amanah",
        nama: "Said",
        enrolmen: "",
        kedatanganBaru: "",
        kedatanganUlangan: "1",
        kedatanganEnggan: "",
        kedatanganTidakHadir: "",
        cleftAda: "",
        cleftRujuk: "",
        traumaToothSurfaceLoss: "",
        traumaTisuLembut: "",
        traumaTisuKeras: "1",
        traumaKecederaanGigiAnterior: "",
        statusDenturAdaB: "",
        statusDenturAdaS: "",
        statusDenturPerluB: "",
        statusDenturPerluS: "",
        kebersihanMulutA: "1",
        kebersihanMulutC: "",
        kebersihanMulutE: "",
        gisSkor0: "",
        gisSkor1: "",
        gisSkor2: "",
        gisSkor3: "",
        statusGigidesidusD: "0",
        statusGigidesidusM: "0",
        statusGigidesidusF: "0",
        statusGigidesidusX: "0",
        statusGigidesidusJumlahdfx: "",
        statusGigiDesidusdfx0: "",
        statusGigiKekalE: "",
        statusGigiKekalD: "",
        statusGigiKekalM: "",
        statusGigiKekalF: "",
        statusGigiKekalX: "",
        statusGigiKekalJumlahDMFX: "",
        dFBilGigiCariesE: "",
        dFClassIdanII: "",
        dFClassISahaja: "",
        gigiKekalDMFXsamaAtauKurangDari3: "",
        totalStatusGigiKekalSamaKosong: "",
        statusBebasKaries: "",
        statusBebasKariesTapiElebihDariSatu: "",
        MBK: "",
        eMoreThanZero: "", 
        mulutBebasGingivitis: "",
        tprSMKP: "",
        tprICDAS: "",
        CRA: "",
        craRendah:"1",
        craSederhana: "",
        craTinggi: "",
        fsDibuatPadaTahunLepas: "",
        fsDibuatPadaTahunSemasaResin: "",
        fsDibuatPadaTahunSemasaGIC: "",
        perluFSMuridB: "",
        perluFSMuridS: "",
        perluFSGigiB: "",
        perluFSGigiS: "",
        perluFsBilGigiFailed: "",
        perluFvMuridB: "",
        perluFvMuridS: "",
        perluFvGigiB: "",
        perluFvGigiS: "",
        perluPRR1MuridB: "",
        perluPRR1MuridS: "",
        perluPRR1BGigiB: "",
        perluPRR1BGigiS: "",
        perluPRRatauFissureSealantAtauKeduaDua: "",
        perluTampalanAntGdB: "",
        perluTampalanAntGdB: "",
        perluTampalanAntGkB: "",
        perluTampalanAntGkS: "",
        perluTampalanPosGdB: "",
        perluTampalanPosGdS: "",
        perluTampalanPosGkB: "",
        perluTampalanPosGkS: "",        
        perluTampalanAmgGdB: "",
        perluTampalanAmgGdS: "",
        perluTampalanAmgGkB: "",
        perluTampalanAmgGkS: "",
        telahFSMuridB: "",
        telahFSMuridS: "",
        telahFSGigiB: "",
        telahFSGigiS: "",
        telahFVMuridB: "1",
        telahFVMuridB: "",
        telahFVGigiB: "",
        telahFVGigiB: "",
        telahPRR1GigiB: "",
        telahPRR1MuridB: "",
        telahPRR1GigiB: "", 
        telahPRR1GigiS: "",
        telahFsOrPrr: "",
        telahTampalanAntGdB: "1",
        telahTampalanAntGdS: "1",
        telahTampalanAntGkB: "",
        telahTampalanAntGkS:  "",
        telahTampalanPosGdB: "",
        telahTampalanPosGdS: "",
        telahTampalanPosGkB: "",
        telahTampalanPosGkS: "",
        telahTampalanAmgGdB: "",
        telahTampalanAmgGdS: "",
        telahTampalanAmgGkB: "",
        telahTampalanAmgGkS: "",
        jumlahTampalanB: "",
        jumlahTampalanS: "",
        tampalanSementara: "",
        cabutanGd: "",
        cabutanGk: "",
        penskaleran: "",
        abses: "",
        pulpotomi: "", 
        kesSelesaiICDAS: "",
        kesSelesai: "",
        rujuk: "",
        catatan: "",
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        jenisTadika: "",
        operator: "",
        pasukanPergigian: "",
        menjalankanBegin: "",
        taska: "",
        tadika: "",
        gigiKekal: "",
        dClassI: "",
        dCLASII: "",
        fClassI: "",
        fClassII: "",
        fsTahunLepasGic: "",
        fsTahunLepasResin: "",
        fsTahunLepasLain: "",
        fsTahunLepasIntactLain: "",
        ceramahToddler: "1",
        ceramahPenjaga: "1",
        gigiDesidus: ""
    }),
    new Tadika({
        createdByNegeri: "Kedah", 
        createdByDaerah: "Kota Setar",
        createdByKp: "Klinik Pergigian Datuk Kumbar",
        // --------------------------------------------------
        kelas: " 3 Fatanah",
        nama: "Saad",
        enrolmen: "",
        kedatanganBaru: "1",
        kedatanganUlangan: "",
        kedatanganEnggan: "",
        kedatanganTidakHadir: "",
        cleftAda: "",
        cleftRujuk: "",
        traumaToothSurfaceLoss: "",
        traumaTisuLembut: "",
        traumaTisuKeras: "",
        traumaKecederaanGigiAnterior: "",
        statusDenturAdaB: "",
        statusDenturAdaS: "",
        statusDenturPerluB: "",
        statusDenturPerluS: "",
        kebersihanMulutA: "",
        kebersihanMulutC: "0",
        kebersihanMulutE: "",
        gisSkor0: "",
        gisSkor1: "",
        gisSkor2: "",
        gisSkor3: "",
        statusGigidesidusD: "1",
        statusGigidesidusM: "1",
        statusGigidesidusF: "1",
        statusGigidesidusX: "1",
        statusGigidesidusJumlahdfx: "",
        statusGigiDesidusdfx0: "",
        statusGigiKekalE: "",
        statusGigiKekalD: "",
        statusGigiKekalM: "",
        statusGigiKekalF: "",
        statusGigiKekalX: "",
        statusGigiKekalJumlahDMFX: "",
        dFBilGigiCariesE: "",
        dFClassIdanII: "",
        dFClassISahaja: "",
        gigiKekalDMFXsamaAtauKurangDari3: "",
        totalStatusGigiKekalSamaKosong: "",
        statusBebasKaries: "",
        statusBebasKariesTapiElebihDariSatu: "",
        MBK: "",
        eMoreThanZero: "", 
        mulutBebasGingivitis: "",
        tprSMKP: "",
        tprICDAS: "",
        CRA: "",
        craRendah: "1",
        craSederhana: "",
        craTinggi: "",
        fsDibuatPadaTahunLepas: "",
        fsDibuatPadaTahunSemasaResin: "",
        fsDibuatPadaTahunSemasaGIC: "",
        perluFSMuridB: "",
        perluFSMuridS: "",
        perluFSGigiB: "",
        perluFSGigiS: "",
        perluFsBilGigiFailed: "",
        perluFvMuridB: "1",
        perluFvMuridS: "",
        perluFvGigiB: "",
        perluFvGigiS: "",
        perluPRR1MuridB: "",
        perluPRR1MuridS: "",
        perluPRR1BGigiB: "",
        perluPRR1BGigiS: "",
        perluPRRatauFissureSealantAtauKeduaDua: "",
        perluTampalanAntGdB: "",
        perluTampalanAntGdB: "",
        perluTampalanAntGkB: "",
        perluTampalanAntGkS: "",
        perluTampalanPosGdB: "",
        perluTampalanPosGdS: "",
        perluTampalanPosGkB: "",
        perluTampalanPosGkS: "",        
        perluTampalanAmgGdB: "",
        perluTampalanAmgGdS: "",
        perluTampalanAmgGkB: "",
        perluTampalanAmgGkS: "",
        telahFSMuridB: "",
        telahFSMuridS: "",
        telahFSGigiB: "",
        telahFSGigiS: "",
        telahFVMuridB: "1",
        telahFVMuridB: "",
        telahFVGigiB: "",
        telahFVGigiB: "",
        telahPRR1GigiB: "",
        telahPRR1MuridB: "",
        telahPRR1GigiB: "", 
        telahPRR1GigiS: "",
        telahFsOrPrr: "",
        telahTampalanAntGdB: "0",
        telahTampalanAntGdS: "1",
        telahTampalanAntGkB: "",
        telahTampalanAntGkS:  "",
        telahTampalanPosGdB: "",
        telahTampalanPosGdS: "",
        telahTampalanPosGkB: "",
        telahTampalanPosGkS: "",
        telahTampalanAmgGdB: "",
        telahTampalanAmgGdS: "",
        telahTampalanAmgGkB: "",
        telahTampalanAmgGkS: "",
        jumlahTampalanB: "",
        jumlahTampalanS: "",
        tampalanSementara: "",
        cabutanGd: "2",
        cabutanGk: "",
        penskaleran: "",
        abses: "1",
        pulpotomi: "0", 
        kesSelesaiICDAS: "",
        kesSelesai: "",
        rujuk: "",
        catatan: "",
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        jenisTadika: "",
        operator: "",
        pasukanPergigian: "",
        menjalankanBegin: "",
        taska: "",
        tadika: "",
        gigiKekal: "",
        dClassI: "",
        dCLASII: "",
        fClassI: "",
        fClassII: "",
        fsTahunLepasGic: "",
        fsTahunLepasResin: "",
        fsTahunLepasLain: "",
        fsTahunLepasIntactLain: "",
        ceramahToddler: "1",
        ceramahPenjaga: "0",
        gigiDesidus: ""
    })
];

var mongoDB = 'mongodb://localhost:27017/giret';

function connect(){
  mongoose.connect(mongoDB);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  console.log("Connected to MongoDB");
}

connect();
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
newTadika.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === newTadika.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
        
        
