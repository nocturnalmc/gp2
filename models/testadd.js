const mongoose = require('mongoose');
// const connectDB = require('../database/connect');
const Character = require('./Subdocs');

async function testAdd() {
  mongoose
    .connect('mongodb://localhost:27017/test')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));
  //   connectDB
  //     .connect(
  //       'mongodb+srv://dbNoct:Noct12345678@gi-ret-psy-cloud-mongod.14ms8.mongodb.net/Gi-Ret-PSY-Cloud?retryWrites=true&w=majority'
  //     )
  //     .then(() => console.log('DB Connected'))
  //     .catch((err) => console.log(err));

  const ken = {
    name: 'Guile',
    child2: [
      {
        name: 'Hadoken',
        keys: '↓ ↘ → P',
      },
      {
        name: 'Shoryuken',
        keys: '→ ↓ ↘ → P',
      },
      {
        name: 'Tatsumaki Senpukyaku',
        keys: '↓ ↙ ← K',
      },
    ],
    child1: {
      name: 'Shinku Hadoken',
      keys: '↓ ↘ → ↓ ↘ → P',
    },
  };
  const char = new Character(ken);
  const doc = await char.save();
  console.log(doc);
  return;
}

testAdd();
