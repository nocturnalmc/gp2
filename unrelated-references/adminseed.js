const mongoose = require("mongoose");
const Superadmin = require("./Superadmin");

//create your array.
const newSuperadmin = 
[   
  new Superadmin({
    user_name: "izzudin",
    password: 123456,
    daerah: "Kuala Selangor",
    negeri: "Selangor",
    token: "",
  }),
  new Superadmin({
    user_name: "naim",
    password: 123456,
    daerah: "Arau",
    negeri: "Perlis",
    token: "",
  }),
  new Superadmin({
    user_name: "izyan",
    password: 123456,
    daerah: "Kota Setar",
    negeri: "Kedah",
    token: "",
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
newSuperadmin.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === newSuperadmin.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});