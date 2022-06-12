// CORE ----------------------------------------------------
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const path = require('path');
// const cookieParser = require('cookie-parser');

// IMPORT ROUTER -------------------------------------------
// user import
const authLogin = require('./routes/authLogin');
// const pilihOperatorFasiliti = require('./routes/pilihOperatorFasiliti');
const identity = require('./routes/identity');
// const tadika = require('./routes/tadika');
// const sekolah = require('./routes/sekolah');
// const allQueryRoute = require('./routes/allQueryRoute');
// admin import
// const adminAuthLogin = require('./routes/adminAuthLogin');
// const adminTadika = require('./routes/adminTadika');
// generate import
// const genRouter = require('./routes/generateRouter');
// const adminRouter = require('./routes/adminRouter');

// IMPORT MIDDLEWARES --------------------------------------
const authCheck = require('./middlewares/authCheck');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
// const genAuth = require('./middlewares/genAuth').verifyToken;

// DATABASE ------------------------------------------------
const connectDB = require('./database/connect');

// MIDDLEWARES ---------------------------------------------
const root = path.join(__dirname, 'client', 'build');
app.use(express.static(root));
// app.use(express.static('./public/exports'));
app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

// user route
app.use('/api/v1/auth', authLogin);
// app.use('/api/v1/pilih', authCheck, pilihOperatorFasiliti);
app.use('/api/v1/identity', authCheck, identity);
// app.use('/api/v1/tadika', authCheck, tadika);
// app.use('/api/v1/sekolah', authCheck, sekolah);
// app.use('/api/v1/query', authCheck, allQueryRoute);
// admin route
// app.use('/api/v1/admin/auth', adminAuthLogin);
// app.use('/api/v1/admin/tadika', authCheck, adminTadika);
// generate route
// app.use('/api/v1/generate', genRouter);
// app.use('/admin', adminRouter);

// for use in deployment
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// error handler & not found
app.use(errorHandler);
app.use(notFound);
// use pug
// app.set('views', './views');
// app.set('view engine', 'pug');

// SERVER --------------------------------------------------
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to Giret Database!');
    app.listen(
      port,
      console.log(`Server is listening at port: ${port}. Lessgo!`)
    );
  } catch (error) {
    console.log('Could not Connect to Giret Database!');
    console.log(error);
  }
};

start();
