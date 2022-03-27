const mongoose = require("mongoose");
const Tadika = require("./Tadika");

const newTadika = [
    // new Tadika({
    //     createdByNegeri: "Kedah", 
    //     createdByDaerah: "Kota Setar",
    //     createdByKp: "Klinik Pergigian Alor Janggus",
    //     // --------------------------------------------------
    //     kelas: " 3 Siddiq",
    //     nama: "Abdurrahman",
    //     enrolmen: "",
    //     kedatanganBaru: "1",
    //     kedatanganUlangan: "",
    //     kedatanganEnggan: "",
    //     kedatanganTidakHadir: "",
    //     cleftAda: "",
    //     cleftRujuk: "",
    //     traumaToothSurfaceLoss: "",
    //     traumaTisuLembut: "1",
    //     traumaTisuKeras: "1",
    //     traumaKecederaanGigiAnterior: "",
    //     statusDenturAdaB: "",
    //     statusDenturAdaS: "",
    //     statusDenturPerluB: "",
    //     statusDenturPerluS: "",
    //     kebersihanMulutA: "",
    //     kebersihanMulutC: "",
    //     kebersihanMulutE: "1",
    //     gisSkor0: "",
    //     gisSkor1: "",
    //     gisSkor2: "",
    //     gisSkor3: "",
    //     statusGigidesidusD: "1",
    //     statusGigidesidusM: "",
    //     statusGigidesidusF: "1",
    //     statusGigidesidusX: "",
    //     statusGigidesidusJumlahdfx: "",
    //     statusGigiDesidusdfx0: "",
    //     statusGigiKekalE: "",
    //     statusGigiKekalD: "",
    //     statusGigiKekalM: "",
    //     statusGigiKekalF: "",
    //     statusGigiKekalX: "",
    //     statusGigiKekalJumlahDMFX: "",
    //     dFBilGigiCariesE: "",
    //     dFClassIdanII: "",
    //     dFClassISahaja: "",
    //     gigiKekalDMFXsamaAtauKurangDari3: "",
    //     totalStatusGigiKekalSamaKosong: "",
    //     statusBebasKaries: "",
    //     statusBebasKariesTapiElebihDariSatu: "",
    //     MBK: "",
    //     eMoreThanZero: "", 
    //     mulutBebasGingivitis: "",
    //     tprSMKP: "",
    //     tprICDAS: "",
    //     CRA: "",
    //     craRendah: "",
    //     craSederhana: "",
    //     craTinggi: "1",
    //     fsDibuatPadaTahunLepas: "",
    //     fsDibuatPadaTahunSemasaResin: "",
    //     fsDibuatPadaTahunSemasaGIC: "",
    //     perluFSMuridB: "",
    //     perluFSMuridS: "",
    //     perluFSGigiB: "",
    //     perluFSGigiS: "",
    //     perluFsBilGigiFailed: "",
    //     perluFvMuridB: "",
    //     perluFvMuridS: "",
    //     perluFvGigiB: "",
    //     perluFvGigiS: "",
    //     perluPRR1MuridB: "",
    //     perluPRR1MuridS: "",
    //     perluPRR1BGigiB: "",
    //     perluPRR1BGigiS: "",
    //     perluPRRatauFissureSealantAtauKeduaDua: "",
    //     perluTampalanAntGdB: "",
    //     perluTampalanAntGdB: "",
    //     perluTampalanAntGkB: "",
    //     perluTampalanAntGkS: "",
    //     perluTampalanPosGdB: "",
    //     perluTampalanPosGdS: "",
    //     perluTampalanPosGkB: "",
    //     perluTampalanPosGkS: "",        
    //     perluTampalanAmgGdB: "",
    //     perluTampalanAmgGdS: "",
    //     perluTampalanAmgGkB: "",
    //     perluTampalanAmgGkS: "",
    //     telahFSMuridB: "",
    //     telahFSMuridS: "",
    //     telahFSGigiB: "",
    //     telahFSGigiS: "",
    //     telahFVMuridB: "",
    //     telahFVMuridB: "",
    //     telahFVGigiB: "",
    //     telahFVGigiB: "",
    //     telahPRR1GigiB: "",
    //     telahPRR1MuridB: "",
    //     telahPRR1GigiB: "", 
    //     telahPRR1GigiS: "",
    //     telahFsOrPrr: "",
    //     telahTampalanAntGdB: "2",
    //     telahTampalanAntGdB: "1",
    //     telahTampalanAntGkB: "",
    //     telahTampalanAntGkS:  "",
    //     telahTampalanPosGdB: "",
    //     telahTampalanPosGdS: "",
    //     telahTampalanPosGkB: "",
    //     telahTampalanPosGkS: "",
    //     telahTampalanAmgGdB: "",
    //     telahTampalanAmgGdS: "",
    //     telahTampalanAmgGkB: "",
    //     telahTampalanAmgGkS: "",
    //     jumlahTampalanB: "",
    //     jumlahTampalanS: "",
    //     tampalanSementara: "",
    //     cabutanGd: "1",
    //     cabutanGk: "",
    //     penskaleran: "",
    //     abses: "1",
    //     pulpotomi: "1", 
    //     kesSelesaiICDAS: "",
    //     kesSelesai: "",
    //     rujuk: "",
    //     catatan: "",
    //     umur: "",
    //     klinikPergigian: "",
    //     namaTadika: "",
    //     jenisTadika: "",
    //     operator: "",
    //     pasukanPergigian: "",
    //     menjalankanBegin: "",
    //     taska: "",
    //     tadika: "",
    //     gigiKekal: "",
    //     dClassI: "",
    //     dCLASII: "",
    //     fClassI: "",
    //     fClassII: "",
    //     fsTahunLepasGic: "",
    //     fsTahunLepasResin: "",
    //     fsTahunLepasLain: "",
    //     fsTahunLepasIntactLain: "",
    //     ceramahToddler: "1",
    //     ceramahPenjaga: "",
    //     gigiDesidus: ""
    // }),
    new Tadika({
      createdByNegeri: "Kedah", 
      createdByDaerah: "Kota Setar",
      createdByKp: "Klinik Pergigian Datuk Kumbar",
      // --------------------------------------------------
      kelas: " 3 Fatanah",
      nama: "Saad",
      enrolmen: "",
      kedatanganBaru: "1",
      kedatanganUlangan: "0",
      kedatanganEnggan: "0",
      kedatanganTidakHadir: "0",
      kebersihanMulutA: "0",
      kebersihanMulutC: "0",
      kebersihanMulutE: "0",
      statusGigidesidusD: "0",
      statusGigidesidusM: "0",
      statusGigidesidusF: "0",
      statusGigidesidusX: "0",
      tprSMKP: "0",
      tprICDAS: "0",
      craRendah: "1",
      craSederhana: "0",
      craTinggi: "0",
      perluFvMuridB: "1",
      perluFvMuridS: "0",
      perluFvGigiB: "0",
      perluFvGigiS: "0",
      perluTampalanAntGdB: "0",
      perluTampalanAntGdS: "0",
      perluTampalanPosGdB: "0",
      perluTampalanPosGdS: "0",
      telahFVMuridB: "1",
      telahFVMuridS: "0",
      telahFVGigiB: "0",
      telahFVGigiS: "0",
      telahTampalanAntGdB: "0",
      telahTampalanAntGdS: "1",
      telahTampalanPosGdB: "0",
      telahTampalanPosGdS: "0",
      telahTampalanAmgGdB: "0",
      telahTampalanAmgGdS: "0",
      tampalanSementara: "0",
      cabutanGd: "2",
      cabutanGk: "0",
      abses: "1",
      pulpotomi: "0", 
      umur: "",
      klinikPergigian: "",
      namaTadika: "",
      operator: "",
      pasukanPergigian: "",
      taska: "1",
      tadika: "0",
      ceramahToddler: "1",
      ceramahPenjaga: "0"
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
        kedatanganUlangan: "0",
        kedatanganEnggan: "0",
        kedatanganTidakHadir: "0",
        kebersihanMulutA: "0",
        kebersihanMulutC: "0",
        kebersihanMulutE: "0",
        statusGigidesidusD: "1",
        statusGigidesidusM: "1",
        statusGigidesidusF: "1",
        statusGigidesidusX: "1",
        tprSMKP: "0",
        tprICDAS: "0",
        craRendah: "1",
        craSederhana: "0",
        craTinggi: "0",
        perluFvMuridB: "1",
        perluFvMuridS: "0",
        perluFvGigiB: "0",
        perluFvGigiS: "0",
        perluTampalanAntGdB: "0",
        perluTampalanAntGdS: "0",
        perluTampalanPosGdB: "0",
        perluTampalanPosGdS: "0",
        telahFVMuridB: "1",
        telahFVMuridS: "0",
        telahFVGigiB: "0",
        telahFVGigiS: "0",
        telahTampalanAntGdB: "0",
        telahTampalanAntGdS: "1",
        telahTampalanPosGdB: "0",
        telahTampalanPosGdS: "0",
        telahTampalanAmgGdB: "0",
        telahTampalanAmgGdS: "0",
        tampalanSementara: "0",
        cabutanGd: "2",
        cabutanGk: "0",
        abses: "1",
        pulpotomi: "0", 
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        operator: "",
        pasukanPergigian: "",
        taska: "1",
        tadika: "0",
        ceramahToddler: "1",
        ceramahPenjaga: "0"
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
        kedatanganUlangan: "0",
        kedatanganEnggan: "0",
        kedatanganTidakHadir: "0",
        kebersihanMulutA: "0",
        kebersihanMulutC: "0",
        kebersihanMulutE: "0",
        statusGigidesidusD: "1",
        statusGigidesidusM: "1",
        statusGigidesidusF: "1",
        statusGigidesidusX: "1",
        tprSMKP: "0",
        tprICDAS: "0",
        craRendah: "1",
        craSederhana: "0",
        craTinggi: "0",
        perluFvMuridB: "1",
        perluFvMuridS: "0",
        perluFvGigiB: "0",
        perluFvGigiS: "0",
        perluTampalanAntGdB: "0",
        perluTampalanAntGdS: "0",
        perluTampalanPosGdB: "0",
        perluTampalanPosGdS: "0",
        telahFVMuridB: "1",
        telahFVMuridS: "0",
        telahFVGigiB: "0",
        telahFVGigiS: "0",
        telahTampalanAntGdB: "0",
        telahTampalanAntGdS: "1",
        telahTampalanPosGdB: "0",
        telahTampalanPosGdS: "0",
        telahTampalanAmgGdB: "0",
        telahTampalanAmgGdS: "0",
        tampalanSementara: "0",
        cabutanGd: "2",
        cabutanGk: "0",
        abses: "1",
        pulpotomi: "0", 
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        operator: "",
        pasukanPergigian: "",
        taska: "1",
        tadika: "0",
        ceramahToddler: "1",
        ceramahPenjaga: "0"
    }),
      new Tadika({
        createdByNegeri: "Kedah", 
        createdByDaerah: "Yan",
        createdByKp: "Klinik Pergigian Sg. Limau",
        // --------------------------------------------------
        kelas: " 3 Fatanah",
        nama: "Saad",
        enrolmen: "",
        kedatanganBaru: "1",
        kedatanganUlangan: "0",
        kedatanganEnggan: "0",
        kedatanganTidakHadir: "0",
        kebersihanMulutA: "0",
        kebersihanMulutC: "0",
        kebersihanMulutE: "0",
        statusGigidesidusD: "0",
        statusGigidesidusM: "0",
        statusGigidesidusF: "0",
        statusGigidesidusX: "0",
        tprSMKP: "0",
        tprICDAS: "0",
        craRendah: "1",
        craSederhana: "0",
        craTinggi: "0",
        perluFvMuridB: "1",
        perluFvMuridS: "0",
        perluFvGigiB: "0",
        perluFvGigiS: "0",
        perluTampalanAntGdB: "0",
        perluTampalanAntGdS: "0",
        perluTampalanPosGdB: "0",
        perluTampalanPosGdS: "0",
        telahFVMuridB: "1",
        telahFVMuridS: "0",
        telahFVGigiB: "0",
        telahFVGigiS: "0",
        telahTampalanAntGdB: "0",
        telahTampalanAntGdS: "1",
        telahTampalanPosGdB: "0",
        telahTampalanPosGdS: "0",
        telahTampalanAmgGdB: "0",
        telahTampalanAmgGdS: "0",
        tampalanSementara: "0",
        cabutanGd: "2",
        cabutanGk: "0",
        abses: "1",
        pulpotomi: "0", 
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        operator: "",
        pasukanPergigian: "",
        taska: "1",
        tadika: "0",
        ceramahToddler: "1",
        ceramahPenjaga: "0"
    }),
      new Tadika({
        createdByNegeri: "Kedah", 
        createdByDaerah: "Yan",
        createdByKp: "Klinik Pergigian Sg. Limau",
        // --------------------------------------------------
        kelas: " 3 Fatanah",
        nama: "Saad",
        enrolmen: "",
        kedatanganBaru: "1",
        kedatanganUlangan: "0",
        kedatanganEnggan: "0",
        kedatanganTidakHadir: "0",
        kebersihanMulutA: "0",
        kebersihanMulutC: "0",
        kebersihanMulutE: "0",
        statusGigidesidusD: "1",
        statusGigidesidusM: "1",
        statusGigidesidusF: "1",
        statusGigidesidusX: "1",
        tprSMKP: "0",
        tprICDAS: "0",
        craRendah: "1",
        craSederhana: "0",
        craTinggi: "0",
        perluFvMuridB: "1",
        perluFvMuridS: "0",
        perluFvGigiB: "0",
        perluFvGigiS: "0",
        perluTampalanAntGdB: "0",
        perluTampalanAntGdS: "0",
        perluTampalanPosGdB: "0",
        perluTampalanPosGdS: "0",
        telahFVMuridB: "1",
        telahFVMuridS: "0",
        telahFVGigiB: "0",
        telahFVGigiS: "0",
        telahTampalanAntGdB: "0",
        telahTampalanAntGdS: "1",
        telahTampalanPosGdB: "0",
        telahTampalanPosGdS: "0",
        telahTampalanAmgGdB: "0",
        telahTampalanAmgGdS: "0",
        tampalanSementara: "0",
        cabutanGd: "2",
        cabutanGk: "0",
        abses: "1",
        pulpotomi: "0", 
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        operator: "",
        pasukanPergigian: "",
        taska: "1",
        tadika: "0",
        ceramahToddler: "1",
        ceramahPenjaga: "0"
    }),
      new Tadika({
        createdByNegeri: "Kedah", 
        createdByDaerah: "Yan",
        createdByKp: "Klinik Pergigian Sg. Limau",
        // --------------------------------------------------
        kelas: " 3 Fatanah",
        nama: "Saad",
        enrolmen: "",
        kedatanganBaru: "1",
        kedatanganUlangan: "0",
        kedatanganEnggan: "0",
        kedatanganTidakHadir: "0",
        kebersihanMulutA: "0",
        kebersihanMulutC: "0",
        kebersihanMulutE: "0",
        statusGigidesidusD: "1",
        statusGigidesidusM: "1",
        statusGigidesidusF: "1",
        statusGigidesidusX: "1",
        tprSMKP: "0",
        tprICDAS: "0",
        craRendah: "1",
        craSederhana: "0",
        craTinggi: "0",
        perluFvMuridB: "1",
        perluFvMuridS: "0",
        perluFvGigiB: "0",
        perluFvGigiS: "0",
        perluTampalanAntGdB: "0",
        perluTampalanAntGdS: "0",
        perluTampalanPosGdB: "0",
        perluTampalanPosGdS: "0",
        telahFVMuridB: "1",
        telahFVMuridS: "0",
        telahFVGigiB: "0",
        telahFVGigiS: "0",
        telahTampalanAntGdB: "0",
        telahTampalanAntGdS: "1",
        telahTampalanPosGdB: "0",
        telahTampalanPosGdS: "0",
        telahTampalanAmgGdB: "0",
        telahTampalanAmgGdS: "0",
        tampalanSementara: "0",
        cabutanGd: "2",
        cabutanGk: "0",
        abses: "1",
        pulpotomi: "0", 
        umur: "",
        klinikPergigian: "",
        namaTadika: "",
        operator: "",
        pasukanPergigian: "",
        taska: "1",
        tadika: "0",
        ceramahToddler: "1",
        ceramahPenjaga: "0"
    }),
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
        
        

