const mongoose = require("mongoose");
const Fasiliti = require("../models/Fasiliti");

//create your array.
const newFasiliti = 
[   
  new Fasiliti({
    nama: "Klinik Pergigian Rawang",
    negeri: "Selangor",
    daerah: "Gombak",
    handler: "",
    jenisFasiliti: "Klinik"
  }),
  new Fasiliti({
    nama: "Sekolah Rendah Rawang",
    negeri: "Selangor",
    daerah: "Gombak",
    handler: "Klinik Pergigian Rawang",
    jenisFasiliti: "Sekolah Rendah"
  }),
  new Fasiliti({
    nama: "Sekolah Menengah Rawang",
    negeri: "Selangor",
    daerah: "Gombak",
    handler: "Klinik Pergigian Rawang",
    jenisFasiliti: "Sekolah Menengah"
  }),
  new Fasiliti({
    nama: "Taska Rawang",
    negeri: "Selangor",
    daerah: "Gombak",
    handler: "Klinik Pergigian Rawang",
    jenisFasiliti: "Taska"
  }),
  new Fasiliti({
    nama: "Tadika Rawang",
    negeri: "Selangor",
    daerah: "Gombak",
    handler: "Klinik Pergigian Rawang",
    jenisFasiliti: "Tadika"
  }),
  new Fasiliti({
    nama: "Klinik Pergigian Dengkil",
    negeri: "Selangor",
    daerah: "Sepang",
    handler: "",
    jenisFasiliti: "Klinik"
  }),
  new Fasiliti({
    nama: "Sekolah Rendah Dengkil",
    negeri: "Selangor",
    daerah: "Sepang",
    handler: "Klinik Pergigian Dengkil",
    jenisFasiliti: "Sekolah Rendah"
  }),
  new Fasiliti({
    nama: "Sekolah Menengah Dengkil",
    negeri: "Selangor",
    daerah: "Sepang",
    handler: "Klinik Pergigian Dengkil",
    jenisFasiliti: "Sekolah Menengah"
  }),
  new Fasiliti({
    nama: "Taska Dengkil",
    negeri: "Selangor",
    daerah: "Sepang",
    handler: "Klinik Pergigian Dengkil",
    jenisFasiliti: "Taska"
  }),
  new Fasiliti({
    nama: "Tadika Dengkil",
    negeri: "Selangor",
    daerah: "Sepang",
    handler: "Klinik Pergigian Dengkil",
    jenisFasiliti: "Tadika"
  }),
  new Fasiliti({
    nama: "Klinik Pergigian Damansara",
    negeri: "Perlis",
    daerah: "Petaling",
    handler: "",
    jenisFasiliti: "Klinik"
  }),
  new Fasiliti({
    nama: "Sekolah Rendah Damansara",
    negeri: "Perlis",
    daerah: "Petaling",
    handler: "Klinik Pergigian Damansara",
    jenisFasiliti: "Sekolah Rendah"
  }),
  new Fasiliti({
    nama: "Sekolah Menengah Petaling",
    negeri: "Perlis",
    daerah: "Damansara",
    handler: "Klinik Pergigian Damansara",
    jenisFasiliti: "Sekolah Menengah"
  }),
  new Fasiliti({
    nama: "Taska Damansara",
    negeri: "Perlis",
    daerah: "Petaling",
    handler: "Klinik Pergigian Damansara",
    jenisFasiliti: "Taska"
  }),
  new Fasiliti({
    nama: "Tadika Damansara",
    negeri: "Perlis",
    daerah: "Petaling",
    handler: "Klinik Pergigian Damansara",
    jenisFasiliti: "Tadika"
  })
]

//connect mongoose
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
newFasiliti.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === newFasiliti.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});