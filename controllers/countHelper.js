const fs = require('fs');
const path = require('path');
const async = require('async');
const Excel = require('exceljs');
// const Tadika = require('../models/Tadika');
// const moment = require('moment');
// const json2csv = require('json2csv').parse;
// const YAData = require('../models/Sekolah'); to put in the future
// const YAData = require('../models/YA'); to put in the future

exports.filterbyUmur = function (req, res) {
  async.parallel(
    {
      resultTaska: function (callback) {
        Tadika.aggregate(
          [
            { $match: { taska: '1' } },

            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahDMFX: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$statusGigidesidusD', '0'] },
                          { $eq: ['$statusGigidesidusM', '0'] },
                          { $eq: ['$statusGigidesidusF', '0'] },
                          { $eq: ['$statusGigidesidusX', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },

            { $sort: { _id: 1 } },
          ],
          callback
        );

        Tadika.aggregate(
          [
            { $match: { tadika: '1' } },

            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahDMFX: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$statusGigidesidusD', '0'] },
                          { $eq: ['$statusGigidesidusM', '0'] },
                          { $eq: ['$statusGigidesidusF', '0'] },
                          { $eq: ['$statusGigidesidusX', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },

            { $sort: { _id: 1 } },
          ],
          callback
        );

        Tadika.aggregate(
          [
            { $match: { kkia: '1' } }, // nak ambil data dari mana?

            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahDMFX: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$statusGigidesidusD', '0'] },
                          { $eq: ['$statusGigidesidusM', '0'] },
                          { $eq: ['$statusGigidesidusF', '0'] },
                          { $eq: ['$statusGigidesidusX', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },

            { $sort: { _id: 1 } },
          ],
          callback
        );

        Tadika.aggregate(
          [
            { $match: { outpatient: '1' } }, // nak ambil data dari mana?

            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahDMFX: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$statusGigidesidusD', '0'] },
                          { $eq: ['$statusGigidesidusM', '0'] },
                          { $eq: ['$statusGigidesidusF', '0'] },
                          { $eq: ['$statusGigidesidusX', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },

            { $sort: { _id: 1 } },
          ],
          callback
        );

        Tadika.aggregate(
          [
            { $match: { lain2: '1' } }, // nak ambil data dari mana?

            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahDMFX: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$statusGigidesidusD', '0'] },
                          { $eq: ['$statusGigidesidusM', '0'] },
                          { $eq: ['$statusGigidesidusF', '0'] },
                          { $eq: ['$statusGigidesidusX', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },

            { $sort: { _id: 1 } },
          ],
          callback
        );

        Tadika.aggregate(
          [
            { $match: { agensiluar: '1' } }, // nak ambil data dari mana?

            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahDMFX: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$statusGigidesidusD', '0'] },
                          { $eq: ['$statusGigidesidusM', '0'] },
                          { $eq: ['$statusGigidesidusF', '0'] },
                          { $eq: ['$statusGigidesidusX', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },

            { $sort: { _id: 1 } },
          ],
          callback
        );
      },
    },
    async function (err, results) {
      if (err) {
        return res.status(500).json({ err });
      }
      console.log(results.resultTaska[1]);
      res.send(results);
    }
  );
};

exports.createBEGIN = (req, res) => {
  async.parallel({
    pesakitBaru: function (callback) {
      Tadika.countDocuments({ pesakitBaru: '1' }, callback);
    },
    jumlahFasiliti: function (callback) {
      Tadika.countDocuments({ jumlahFasiliti: '1' }, callback);
    },
    jumlahFasilitiLaksanakanBEGIN: function (callback) {
      Tadika.countDocuments({ jumlahFasilitiLaksanakanBEGIN: '1' }, callback);
    },
    peratusFasilitiLaksanakanBEGIN: function (callback) {
      Tadika.countDocuments({ peratusFasilitiLaksanakanBEGIN: '1' }, callback);
    },
    lowCRA: function (callback) {
      Tadika.countDocuments({ lowCRA: '1' }, callback);
    },
    moderateCRA: function (callback) {
      Tadika.countDocuments({ moderateCRA: '1' }, callback);
    },
    highCRA: function (callback) {
      Tadika.countDocuments({ highCRA: '1' }, callback);
    },
    jumlahKKjalaniBEGIN: function (callback) {
      Tadika.countDocuments({ peratusKKjalaniBEGIN: '1' }, callback);
    },
    jumlahKKlaksanakanBEGIN: function (callback) {
      Tadika.countDocuments({ peratusKKjalaniBEGIN: '1' }, callback);
    },
    jumlahHighCRAdoBEGIN: function (callback) {
      Tadika.countDocuments({ jumlahHighCRAdoBEGIN: '1' }, callback);
    },
    peratusHighCRAdoBEGIN: function (callback) {
      Tadika.countDocuments({ peratusHighCRAdoBEGIN: '1' }, callback);
    },
    async function(err, results) {
      try {
        // prepare the minigun
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'BEGIN.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('BEGIN');

        // Execute them all
        //Taska Reten
        let rowNew = worksheet.getRow(15);
        rowNew.getCell(3).value = results.pesakitBaru; //Pesakit baru Program BEGIN dari Taska
        rowNew.getCell(4).value = results.jumlahFasiliti; //Jumlah Fasiliti Taska
        rowNew.getCell(5).value = results.jumlahFasilitiLaksanakanBEGIN; //Jumlah Fasiliti Laksanakan BEGIN di Taska
        rowNew.getCell(7).value = results.lowCRA; //Jumlah Murid w low CRA and Gums Dz di Taska
        rowNew.getCell(8).value = results.moderateCRA; //Jumlah Murid w moderate CRA and Gums Dz di Taska
        rowNew.getCell(9).value = results.highCRA; //Jumlah Murid w high CRA and Gums Dz di Taska
        rowNew.getCell(10).value = results.jumlahKKlaksanakanBEGIN; //Jumlah Murid Jalani BEGIN di Taska
        await rowNew.commit();

        // Execute operation 66
        //Pra-sekolah atau Tadika
        let rowNew2 = worksheet.getRow(16);
        rowNew2.getCell(3).value = results.pesakitBaru; //Pesakit baru Program BEGIN dari PraSekolah atau Tadika
        rowNew2.getCell(4).value = results.jumlahFasiliti; //Jumlah Fasiliti PraSekolah atau Tadika
        rowNew2.getCell(5).value = results.jumlahFasilitiLaksanakanBEGIN; //Jumlah Fasiliti Laksanakan BEGIN di PraSekolah atau Tadika
        rowNew2.getCell(7).value = results.lowCRA; //Jumlah Murid w low CRA and Gums Dz di PraSekolah atau Tadika
        rowNew2.getCell(8).value = results.moderateCRA; //Jumlah Murid w moderate CRA and Gums Dz di PraSekolah atau Tadika
        rowNew2.getCell(9).value = results.highCRA; //Jumlah Murid w high CRA and Gums Dz di PraSekolah atau Tadika
        rowNew2.getCell(10).value = results.jumlahKKlaksanakanBEGIN; //Jumlah Murid Jalani BEGIN di PraSekolah atau Tadika
        await rowNew2.commit();

        // Execute operation 67
        //Sekolah Rendah Tahun 1 (termasuk KKI)
        let rowNew3 = worksheet.getRow(17);
        rowNew3.getCell(3).value = results.pesakitBaru; //Pesakit baru Program BEGIN dari Sekolah Rendah Tahun 1
        rowNew3.getCell(4).value = results.jumlahFasiliti; //Jumlah Fasiliti Sekolah Rendah Tahun 1
        rowNew3.getCell(5).value = results.jumlahFasilitiLaksanakanBEGIN; //Jumlah Fasiliti Laksanakan BEGIN di Sekolah Rendah Tahun 1
        rowNew3.getCell(7).value = results.lowCRA; //Jumlah Murid w low CRA and Gums Dz di Sekolah Rendah Tahun 1
        rowNew3.getCell(8).value = results.moderateCRA; //Jumlah Murid w moderate CRA and Gums Dz di Sekolah Rendah Tahun 1
        rowNew3.getCell(9).value = results.highCRA; //Jumlah Murid w high CRA and Gums Dz di Sekolah Rendah Tahun 1
        rowNew3.getCell(10).value = results.jumlahKKlaksanakanBEGIN; //Jumlah Murid Jalani BEGIN di Sekolah Rendah Tahun 1
        await rowNew3.commit();

        // Execute operation 68
        //Sekolah Rendah Tahun 2 - 6
        let rowNew4 = worksheet.getRow(18);
        rowNew4.getCell(3).value = results.pesakitBaru; //Pesakit baru Program BEGIN dari Sekolah Rendah Tahun 2 - 6
        rowNew4.getCell(5).value = results.jumlahFasilitiLaksanakanBEGIN; //Jumlah Fasiliti Laksanakan BEGIN di Sekolah Rendah Tahun 2 - 6
        rowNew4.getCell(7).value = results.lowCRA; //Jumlah Murid w low CRA and Gums Dz di Sekolah Rendah Tahun 2 - 6
        rowNew4.getCell(8).value = results.moderateCRA; //Jumlah Murid w moderate CRA and Gums Dz di Sekolah Rendah Tahun 2 - 6
        rowNew4.getCell(9).value = results.highCRA; //Jumlah Murid w high CRA and Gums Dz di Sekolah Rendah Tahun 2 - 6
        rowNew4.getCell(12).value = results.jumlahHighCRAdoBEGIN; //Jumlah Murid high CRA jalani BEGIN di Sekolah Rendah Tahun 2 - 6
        await rowNew4.commit();

        let rowNew5 = worksheet.getRow(20);
        rowNew6.getCell(1).value = 'Report Generated by Gi-Ret 2.0';
        rowNew6.commit();

        delete rowNew, rowNew2, rowNew3, rowNew4, rowNew5;
        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-BEGIN.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);
        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // download the file after 3 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    },
  });
};

exports.createTOD = function (req, res) {
  async.parallel(
    {
      dmfxEqualToZero: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
      resultTaska: function (callback) {
        Tadika.aggregate(
          [
            { $match: { taska: '1' } },
            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: { $sum: { $toDouble: '$kedatanganBaru' } },
                jumlahUlangan: { $sum: { $toDouble: '$kedatanganUlangan' } },
                jumlahD: { $sum: { $toDouble: '$statusGigidesidusD' } },
                jumlahM: { $sum: { $toDouble: '$statusGigidesidusM' } },
                jumlahF: { $sum: { $toDouble: '$statusGigidesidusF' } },
                jumlahX: { $sum: { $toDouble: '$statusGigidesidusX' } },
                jumlahSpA: { $sum: { $toDouble: '$kebersihanMulutA' } },
                jumlahSpC: { $sum: { $toDouble: '$kebersihanMulutC' } },
                jumlahSpE: { $sum: { $toDouble: '$kebersihanMulutE' } },
                jumlahTisuKeras: { $sum: { $toDouble: '$traumaTisuKeras' } },
                jumlahTisuLembut: { $sum: { $toDouble: '$traumaTisuLembut' } },
                jumlahPerluFV: { $sum: { $toDouble: '$perluFvMuridB' } },
                jumlahTelahFVB: { $sum: { $toDouble: '$telahFVMuridB' } },
                jumlahTelahFVS: { $sum: { $toDouble: '$telahFVMuridS' } },
                jumlahTelahTampalAntB: {
                  $sum: { $toDouble: '$telahTampalanAntGdB' },
                },
                jumlahTelahTampalAntS: {
                  $sum: { $toDouble: '$telahTampalanAntGdS' },
                },
                jumlahTelahTampalPosB: {
                  $sum: { $toDouble: '$telahTampalanPosGdB' },
                },
                jumlahTelahTampalPosS: {
                  $sum: { $toDouble: '$telahTampalanPosGdS' },
                },
                cabutan: { $sum: { $toDouble: '$cabutanGd' } },
                jumlahAbses: { $sum: { $toDouble: '$abses' } },
                jumlahPulpotomi: { $sum: { $toDouble: '$pulpotomi' } },
                jumlahCTod: { $sum: { $toDouble: '$ceramahToddler' } },
                jumlahCPar: { $sum: { $toDouble: '$ceramahPenjaga' } },
                jumlahLMG: { $sum: { $toDouble: '$toddlerLMG' } },
                jumlahCRAlow: { $sum: { $toDouble: '$craRendah' } },
                jumlahCRAmid: { $sum: { $toDouble: '$craSederhana' } },
                jumlahCRAhi: { $sum: { $toDouble: '$craTinggi' } },
              },
            },
          ],
          callback
        );
      },
      // dirujukDariAgensiLuar: function(callback) {
      //   Tadika.countDocuments({ rujuk: "1" }, callback);
      // },
      // toddlerDirujukPadaLawatan: function(callback) {
      //   Tadika.countDocuments({ toddlerDirujukPadaLawatan: "1" }, callback);
      // },
      // toddlerHadirRujukan: function(callback) {
      //   Tadika.countDocuments({ toddlerHadirRujukan: "1" }, callback);
      // },
      // pbToddler: function(callback) {
      //   Tadika.countDocuments({ pbToddler: "1" }, callback);
      // },
      // pbDstatusDMFX: function(callback) {
      //   Tadika.countDocuments({ pbDstatusDMFX: "1" }, callback);
      // },
      // pbMstatusDMFX: function(callback) {
      //   Tadika.countDocuments({ pbMstatusDMFX: "1" }, callback);
      // },
      // pbFstatusDMFX: function(callback) {
      //   Tadika.countDocuments({ pbFstatusDMFX: "1" }, callback);
      // },
      // pbXstatusDMFX: function(callback) {
      //   Tadika.countDocuments({ pbXstatusDMFX: "1" }, callback);
      // },
      // pbDMFXequalToZero: function(callback) {
      //   Tadika.countDocuments({ pbDMFXequalToZero: "1" }, callback);
      // },
      // agensiATM: function(callback) {
      //   Tadika.countDocuments({ agensiATM: "1" }, callback);
      // },
      // agensiIPTA: function(callback) {
      //   Tadika.countDocuments({ agensiIPTA: "1" }, callback);
      // },
      // agensiIPTS: function(callback) {
      //   Tadika.countDocuments({ agensiIPTS: "1" }, callback);
      // },
      // agensiPrivateDentalClinic: function(callback) {
      //   Tadika.countDocuments({ agensiPrivateDentalClinic: "1" }, callback);
      // },
      // agensiNGO: function(callback) {
      //   Tadika.countDocuments({ agensiNGO: "1" }, callback);
      // },
      // agensiIndustri: function(callback) {
      //   Tadika.countDocuments({ agensiIndustri: "1" }, callback);
      // },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'TOD.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('TOD');

        let rowNew = worksheet.getRow(19);
        rowNew.getCell(3).value = results.theMother[0].jumlahBaru; //Kedatangan Baru Taska
        rowNew.getCell(4).value = results.theMother[0].jumlahUlangan; //Kedatangan Ulangan Taska
        rowNew.getCell(5).value = results.theMother[0].jumlahD; //d Status dmfx Taska
        rowNew.getCell(6).value = results.theMother[0].jumlahM; //m Status dmfx Taska
        rowNew.getCell(7).value = results.theMother[0].jumlahF; //f Status dmfx Taska
        rowNew.getCell(8).value = results.theMother[0].jumlahX; //x Status dmfx Taska
        rowNew.getCell(11).value = results.dmfxEqualToZero; //dmfx = 0 Taska
        rowNew.getCell(12).value = results.theMother[0].jumlahSpA; //Skor Plak A Taska
        rowNew.getCell(13).value = results.theMother[0].jumlahSpC; //Skor Plak C Taska
        rowNew.getCell(14).value = results.theMother[0].jumlahSpE; //Skor Plak E Taska
        rowNew.getCell(15).value = results.dmfxEqualToZero; //Tidak Perlu Rawatan (TPR) Taska
        rowNew.getCell(16).value = results.theMother[0].jumlahTisuKeras; //Trauma Tisu Lembut Taska
        rowNew.getCell(17).value = results.theMother[0].jumlahTisuLembut; //Trauma Tisu Keras Taska
        rowNew.getCell(19).value = results.theMother[0].jumlahPerluFV; //Bilangan Toddler Baru Perlu FV Taska
        rowNew.getCell(20).value = results.theMother[0].jumlahTelahFVB; //Bilangan Toddler Baru Dibuat FV Taska
        rowNew.getCell(21).value = results.theMother[0].jumlahTelahTampalAntB; //Bilangan Tampalan Anterior baru Taska
        rowNew.getCell(22).value = results.theMother[0].jumlahTelahTampalPosB; //Bilangan Tampalan Posterior baru Taska
        rowNew.getCell(24).value = results.theMother[0].cabutan; //Bilangan Cabutan Taska
        rowNew.getCell(25).value = results.theMother[0].jumlahAbses; //Bilangan Abses Taska
        rowNew.getCell(26).value = results.theMother[0].jumlahPulpotomi; //Pulpotomi Taska
        rowNew.getCell(27).value = results.theMother[0].jumlahCTod; //Ceramah Toddler Taska
        rowNew.getCell(28).value = results.theMother[0].jumlahCPar; //Ceramah Dewasa Taska
        rowNew.getCell(29).value = results.theMother[0].jumlahLMG; //LMG Toddler Taska
        rowNew.getCell(33).value = results.theMother[0].jumlahCRAlow; //CRA Rendah Taska
        rowNew.getCell(34).value = results.theMother[0].jumlahCRAmid; //CRA Sederhana Taska
        rowNew.getCell(35).value = results.theMother[0].jumlahCRAhi; //CRA Tinggi Taska
        await rowNew.commit();
        //Toddler Reten (Taska)
        let rowNew2 = worksheet.getRow(20);
        rowNew2.getCell(20).value = results.theMother[0].jumlahTelahFVS; //Bilangan Toddler Semula Dibuat FV Taska
        rowNew2.getCell(21).value = results.theMother[0].jumlahTelahTampalAntS; //Bilangan Tampalan Anterior Ulangan Taska
        rowNew2.getCell(22).value = results.theMother[0].jumlahTelahTampalPosS; //Bilangan Tampalan Posterior Ulangan Taska
        await rowNew2.commit();

        // //Toddler Reten (Tadika)
        // let rowNew3 = worksheet.getRow(21);
        // rowNew3.getCell(3).value = results.kedatanganBaru; //Kedatangan Baru Tadika
        // rowNew3.getCell(4).value = results.kedatanganUlangan; //Kedatangan Ulangan Tadika
        // rowNew3.getCell(5).value = results.dStatusDMFX; //d Status dmfx Tadika
        // rowNew3.getCell(6).value = results.mStatusDMFX; //m Status dmfx Tadika
        // rowNew3.getCell(7).value = results.dStatusDMFX; //f Status dmfx Tadika
        // rowNew3.getCell(8).value = results.xStatusDMFX; //x Status dmfx Tadika
        // rowNew3.getCell(11).value = results.dmfxEqualToZero; //dmfx = 0 Tadika
        // rowNew3.getCell(12).value = results.skorPlakA; //Skor Plak A Tadika
        // rowNew3.getCell(13).value = results.skorPlakC; //Skor Plak C Tadika
        // rowNew3.getCell(14).value = results.skorPlakE; //Skor Plak E Tadika
        // rowNew3.getCell(15).value = results.tpr; //Tidak Perlu Rawatan (TPR) Tadika
        // rowNew3.getCell(16).value = results.traumaTisuLembut; //Trauma Tisu Lembut Tadika
        // rowNew3.getCell(17).value = results.traumaTisuKeras; //Trauma Tisu Keras Tadika
        // rowNew3.getCell(19).value = results.bilTODperluFV; //Bilangan Toddler Baru Perlu FV Tadika
        // rowNew3.getCell(20).value = results.bilTodBaruDibuatFV; //Bilangan Toddler Baru Dibuat FV Tadika
        // rowNew3.getCell(21).value = results.tampalanAnteriorB; //Bilangan Tampalan Anterior baru Tadika
        // rowNew3.getCell(22).value = results.tampalanPosteriorB; //Bilangan Tampalan Posterior baru Tadika
        // rowNew3.getCell(24).value = results.cabutan; //Bilangan Cabutan Tadika
        // rowNew3.getCell(25).value = results.abses; //Bilangan Abses Tadika
        // rowNew3.getCell(26).value = results.pulpotomi; //Pulpotomi Tadika
        // rowNew3.getCell(27).value = results.ceramahUtkToddler; //Ceramah Toddler Tadika
        // rowNew3.getCell(28).value = results.ceramahUtkDewasa; //Ceramah Dewasa Tadika
        // rowNew3.getCell(29).value = results.toddlerLMG; //LMG Toddler Tadika
        // rowNew3.getCell(33).value = results.lowCRA; //CRA Rendah Tadika
        // rowNew3.getCell(34).value = results.moderateCRA; //CRA Sederhana Tadika
        // rowNew3.getCell(35).value = results.highCRA; //CRA Tinggi Tadika
        // await rowNew3.commit();
        // //Toddler Reten (Tadika)
        // let rowNew4 = worksheet.getRow(22);
        // rowNew4.getCell(20).value = results.bilTodSemulaDibuatFV; //Bilangan Toddler Semula Dibuat FV Tadika
        // rowNew4.getCell(21).value = results.tampalanAnteriorS; //Bilangan Tampalan Anterior Ulangan Tadika
        // rowNew4.getCell(22).value = results.tampalanPosteriorS; //Bilangan Tampalan Posterior Ulangan Tadika
        // await rowNew4.commit();

        // // Execute batch five KKIA
        // let rowNew5 = worksheet.getRow(23);
        // rowNew5.getCell(3).value = results.kedatanganBaru; //Kedatangan Baru KKIA
        // rowNew5.getCell(4).value = results.kedatanganUlangan; //Kedatangan Ulangan KKIA
        // rowNew5.getCell(5).value = results.dStatusDMFX; //d Status dmfx KKIA
        // rowNew5.getCell(6).value = results.mStatusDMFX; //m Status dmfx KKIA
        // rowNew5.getCell(7).value = results.dStatusDMFX; //f Status dmfx KKIA
        // rowNew5.getCell(8).value = results.xStatusDMFX; //x Status dmfx KKIA
        // rowNew5.getCell(11).value = results.dmfxEqualToZero; //dmfx = 0 KKIA
        // rowNew5.getCell(12).value = results.skorPlakA; //Skor Plak A KKIA
        // rowNew5.getCell(13).value = results.skorPlakC; //Skor Plak C KKIA
        // rowNew5.getCell(14).value = results.skorPlakE; //Skor Plak E KKIA
        // rowNew5.getCell(15).value = results.tpr; //Tidak Perlu Rawatan (TPR) KKIA
        // rowNew5.getCell(16).value = results.traumaTisuLembut; //Trauma Tisu Lembut KKIA
        // rowNew5.getCell(17).value = results.traumaTisuKeras; //Trauma Tisu Keras KKIA
        // rowNew5.getCell(19).value = results.bilTODperluFV; //Bilangan Toddler Baru Perlu FV KKIA
        // rowNew5.getCell(20).value = results.bilTodBaruDibuatFV; //Bilangan Toddler Baru Dibuat FV KKIA
        // rowNew5.getCell(21).value = results.tampalanAnteriorB; //Bilangan Tampalan Anterior baru KKIA
        // rowNew5.getCell(22).value = results.tampalanPosteriorB; //Bilangan Tampalan Posterior baru KKIA
        // rowNew5.getCell(24).value = results.cabutan; //Bilangan Cabutan KKIA
        // rowNew5.getCell(25).value = results.abses; //Bilangan Abses KKIA
        // rowNew5.getCell(26).value = results.pulpotomi; //Pulpotomi KKIA
        // rowNew5.getCell(27).value = results.ceramahUtkToddler; //Ceramah Toddler KKIA
        // rowNew5.getCell(28).value = results.ceramahUtkDewasa; //Ceramah Dewasa KKIA
        // rowNew5.getCell(29).value = results.toddlerLMG; //LMG Toddler KKIA
        // rowNew5.getCell(33).value = results.lowCRA; //CRA Rendah KKIA
        // rowNew5.getCell(34).value = results.moderateCRA; //CRA Sederhana KKIA
        // rowNew5.getCell(35).value = results.highCRA; //CRA Tinggi KKIA
        // await rowNew5.commit();

        // let rowNew6 = worksheet.getRow(24);
        // rowNew6.getCell(20).value = results.bilTodSemulaDibuatFV; //Bilangan Toddler Semula Dibuat FV KKIA
        // rowNew6.getCell(21).value = results.tampalanAnteriorS; //Bilangan Tampalan Anterior Ulangan KKIA
        // rowNew6.getCell(22).value = results.tampalanPosteriorS; //Bilangan Tampalan Posterior Ulangan KKIA
        // await rowNew6.commit();

        // // PESAKIT LUAR
        // let rowNew7 = worksheet.getRow(25);
        // rowNew7.getCell(3).value = results.kedatanganBaru; //Kedatangan Baru PESAKIT LUAR
        // rowNew7.getCell(4).value = results.kedatanganUlangan; //Kedatangan Ulangan PESAKIT LUAR
        // rowNew7.getCell(5).value = results.dStatusDMFX; //d Status dmfx PESAKIT LUAR
        // rowNew7.getCell(6).value = results.mStatusDMFX; //m Status dmfx PESAKIT LUAR
        // rowNew7.getCell(7).value = results.dStatusDMFX; //f Status dmfx PESAKIT LUAR
        // rowNew7.getCell(8).value = results.xStatusDMFX; //x Status dmfx PESAKIT LUAR
        // rowNew7.getCell(11).value = results.dmfxEqualToZero; //dmfx = 0 PESAKIT LUAR
        // rowNew7.getCell(12).value = results.skorPlakA; //Skor Plak A PESAKIT LUAR
        // rowNew7.getCell(13).value = results.skorPlakC; //Skor Plak C PESAKIT LUAR
        // rowNew7.getCell(14).value = results.skorPlakE; //Skor Plak E PESAKIT LUAR
        // rowNew7.getCell(15).value = results.tpr; //Tidak Perlu Rawatan (TPR) PESAKIT LUAR
        // rowNew7.getCell(16).value = results.traumaTisuLembut; //Trauma Tisu Lembut PESAKIT LUAR
        // rowNew7.getCell(17).value = results.traumaTisuKeras; //Trauma Tisu Keras PESAKIT LUAR
        // rowNew7.getCell(19).value = results.bilTODperluFV; //Bilangan Toddler Baru Perlu FV PESAKIT LUAR
        // rowNew7.getCell(20).value = results.bilTodBaruDibuatFV; //Bilangan Toddler Baru Dibuat FV PESAKIT LUAR
        // rowNew7.getCell(21).value = results.tampalanAnteriorB; //Bilangan Tampalan Anterior baru PESAKIT LUAR
        // rowNew7.getCell(22).value = results.tampalanPosteriorB; //Bilangan Tampalan Posterior baru PESAKIT LUAR
        // rowNew7.getCell(24).value = results.cabutan; //Bilangan Cabutan PESAKIT LUAR
        // rowNew7.getCell(25).value = results.abses; //Bilangan Abses PESAKIT LUAR
        // rowNew7.getCell(26).value = results.pulpotomi; //Pulpotomi PESAKIT LUAR
        // rowNew7.getCell(27).value = results.ceramahUtkToddler; //Ceramah Toddler PESAKIT LUAR
        // rowNew7.getCell(28).value = results.ceramahUtkDewasa; //Ceramah Dewasa PESAKIT LUAR
        // rowNew7.getCell(29).value = results.toddlerLMG; //LMG Toddler PESAKIT LUAR
        // rowNew7.getCell(30).value = results.dirujukDariAgensiLuar; //dirujuk daripada Agensi Luar
        // rowNew7.getCell(33).value = results.lowCRA; //CRA Rendah PESAKIT LUAR
        // rowNew7.getCell(34).value = results.moderateCRA; //CRA Sederhana PESAKIT LUAR
        // rowNew7.getCell(35).value = results.highCRA; //CRA Tinggi PESAKIT LUAR
        // await rowNew7.commit();

        // let rowNew8 = worksheet.getRow(26);
        // rowNew8.getCell(20).value = results.bilTodSemulaDibuatFV; //Bilangan Toddler Semula Dibuat FV PESAKIT LUAR
        // rowNew8.getCell(21).value = results.tampalanAnteriorS; //Bilangan Tampalan Anterior Ulangan PESAKIT LUAR
        // await rowNew8.commit();

        // // LAIN LAIN
        // let rowNew9 = worksheet.getRow(27);
        // rowNew9.getCell(3).value = results.kedatanganBaru; //Kedatangan Baru LAIN-LAIN
        // rowNew9.getCell(4).value = results.kedatanganUlangan; //Kedatangan Ulangan LAIN-LAIN
        // rowNew9.getCell(5).value = results.dStatusDMFX; //d Status dmfx LAIN-LAIN
        // rowNew9.getCell(6).value = results.mStatusDMFX; //m Status dmfx LAIN-LAIN
        // rowNew9.getCell(7).value = results.dStatusDMFX; //f Status dmfx LAIN-LAIN
        // rowNew9.getCell(8).value = results.xStatusDMFX; //x Status dmfx LAIN-LAIN
        // rowNew9.getCell(11).value = results.dmfxEqualToZero; //dmfx = 0 LAIN-LAIN
        // rowNew9.getCell(12).value = results.skorPlakA; //Skor Plak A LAIN-LAIN
        // rowNew9.getCell(13).value = results.skorPlakC; //Skor Plak C LAIN-LAIN
        // rowNew9.getCell(14).value = results.skorPlakE; //Skor Plak E LAIN-LAIN
        // rowNew9.getCell(15).value = results.tpr; //Tidak Perlu Rawatan (TPR) LAIN-LAIN
        // rowNew9.getCell(16).value = results.traumaTisuLembut; //Trauma Tisu Lembut LAIN-LAIN
        // rowNew9.getCell(17).value = results.traumaTisuKeras; //Trauma Tisu Keras LAIN-LAIN
        // rowNew9.getCell(19).value = results.bilTODperluFV; //Bilangan Toddler Baru Perlu FV LAIN-LAIN
        // rowNew9.getCell(20).value = results.bilTodBaruDibuatFV; //Bilangan Toddler Baru Dibuat FV LAIN-LAIN
        // rowNew9.getCell(21).value = results.tampalanAnteriorB; //Bilangan Tampalan Anterior baru LAIN-LAIN
        // rowNew9.getCell(22).value = results.tampalanPosteriorB; //Bilangan Tampalan Posterior baru LAIN-LAIN
        // rowNew9.getCell(24).value = results.cabutan; //Bilangan Cabutan LAIN-LAIN
        // rowNew9.getCell(25).value = results.abses; //Bilangan Abses LAIN-LAIN
        // rowNew9.getCell(26).value = results.pulpotomi; //Pulpotomi LAIN-LAIN
        // rowNew9.getCell(27).value = results.ceramahUtkToddler; //Ceramah Toddler LAIN-LAIN
        // rowNew9.getCell(28).value = results.ceramahUtkDewasa; //Ceramah Dewasa LAIN-LAIN
        // rowNew9.getCell(29).value = results.toddlerLMG; //LMG Toddler LAIN-LAIN
        // rowNew9.getCell(33).value = results.lowCRA; //CRA Rendah LAIN-LAIN
        // rowNew9.getCell(34).value = results.moderateCRA; //CRA Sederhana LAIN-LAIN
        // rowNew9.getCell(35).value = results.highCRA; //CRA Tinggi LAIN-LAIN
        // await rowNew9.commit();

        // let rowNew10 = worksheet.getRow(28);
        // rowNew10.getCell(20).value = results.bilTodSemulaDibuatFV; //Bilangan Toddler Semula Dibuat FV LAIN-LAIN
        // rowNew10.getCell(21).value = results.tampalanAnteriorS; //Bilangan Tampalan Anterior Ulangan LAIN-LAIN
        // rowNew10.getCell(22).value = results.tampalanPosteriorS; //Bilangan Tampalan Posterior Ulangan LAIN-LAIN
        // await rowNew10.commit();

        // // AGENSI LUAR
        // let rowNew11 = worksheet.getRow(31);
        // rowNew11.getCell(3).value = results.kedatanganBaru; //Kedatangan Baru AGENSI LUAR
        // rowNew11.getCell(4).value = results.kedatanganUlangan; //Kedatangan Ulangan AGENSI LUAR
        // rowNew11.getCell(5).value = results.dStatusDMFX; //d Status dmfx AGENSI LUAR
        // rowNew11.getCell(6).value = results.mStatusDMFX; //m Status dmfx AGENSI LUAR
        // rowNew11.getCell(7).value = results.dStatusDMFX; //f Status dmfx AGENSI LUAR
        // rowNew11.getCell(8).value = results.xStatusDMFX; //x Status dmfx AGENSI LUAR
        // rowNew11.getCell(11).value = results.dmfxEqualToZero; //dmfx = 0 AGENSI LUAR
        // rowNew11.getCell(12).value = results.skorPlakA; //Skor Plak A AGENSI LUAR
        // rowNew11.getCell(13).value = results.skorPlakC; //Skor Plak C AGENSI LUAR
        // rowNew11.getCell(14).value = results.skorPlakE; //Skor Plak E AGENSI LUAR
        // rowNew11.getCell(15).value = results.tpr; //Tidak Perlu Rawatan (TPR) AGENSI LUAR
        // rowNew11.getCell(19).value = results.bilTODperluFV; //Bilangan Toddler Baru Perlu FV AGENSI LUAR
        // rowNew11.getCell(25).value = results.abses; //Bilangan Abses AGENSI LUAR
        // rowNew11.getCell(27).value = results.ceramahUtkToddler; //Ceramah Toddler AGENSI LUAR
        // rowNew11.getCell(28).value = results.ceramahUtkDewasa; //Ceramah Dewasa AGENSI LUAR
        // rowNew11.getCell(29).value = results.toddlerLMG; //LMG Toddler AGENSI LUAR
        // rowNew11.getCell(31).value = results.toddlerDirujukPadaLawatan; //Toddler dirujuk pada Lawatan AGENSI Luar
        // rowNew11.getCell(32).value = results.toddlerHadirRujukan; //Toddler hadir rujukan AGENSI LUAR
        // rowNew11.getCell(33).value = results.lowCRA; //CRA Rendah AGENSI LUAR
        // rowNew11.getCell(34).value = results.moderateCRA; //CRA Sederhana AGENSI LUAR
        // rowNew11.getCell(35).value = results.highCRA; //CRA Tinggi AGENSI LUAR
        // await rowNew11.commit();

        // let rowNew12 = worksheet.getRow(32);
        // rowNew12.getCell(20).value = results.bilTodSemulaDibuatFV; //Bilangan Toddler Semula Dibuat FV AGENSI LUAR
        // rowNew12.getCell(21).value = results.tampalanAnteriorS; //Bilangan Tampalan Anterior Ulangan AGENSI LUAR
        // rowNew12.getCell(22).value = results.tampalanPosteriorS; //Bilangan Tampalan Posterior Ulangan AGENSI LUAR
        // await rowNew12.commit();

        let rowNew13 = worksheet.getRow(53);
        rowNew13.getCell(10).value = 'Report Generated by Gi-Ret 2.0';
        rowNew13.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-TOD.xlsx'
        );
        await workbook.xlsx.writeFile(newfile);
        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPGPS2201 = function (req, res) {
  async.parallel(
    {
      pesakitBaru: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      kedatanganUlangan: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      dStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      mStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      fStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      xStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      dmfxEqualToZero: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
      skorPlakA: function (callback) {
        Tadika.countDocuments(
          { kebersihanMulutA: '1', kedatanganBaru: 1 },
          callback
        );
      },
      skorPlakC: function (callback) {
        Tadika.countDocuments(
          { kebersihanMulutC: '1', kedatanganBaru: 1 },
          callback
        );
      },
      skorPlakE: function (callback) {
        Tadika.countDocuments(
          { kebersihanMulutE: '1', kedatanganBaru: 1 },
          callback
        );
      },
      traumaTisuLembut: function (callback) {
        Tadika.countDocuments({ traumaTisuLembut: { $gte: 1 } }, callback);
      },
      traumaTisuKeras: function (callback) {
        Tadika.countDocuments({ traumaTisuKeras: { $gte: 1 } }, callback);
      },
      bilTODperluFV: function (callback) {
        Tadika.countDocuments(
          { perluFvMuridB: '1', kedatanganBaru: 1 },
          callback
        );
      },
      bilTodBaruDibuatFV: function (callback) {
        Tadika.countDocuments({ telahFVMuridB: '1' }, callback);
      },
      tampalanAnteriorB: function (callback) {
        Tadika.countDocuments(
          { telahTampalanAntGdB: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tampalanAnteriorS: function (callback) {
        Tadika.countDocuments(
          { telahTampalanAntGdS: { $gte: 1 }, kedatanganUlangan: 1 },
          callback
        );
      },
      tampalanPosteriorB: function (callback) {
        Tadika.countDocuments(
          { telahTampalanPosGdB: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tampalanPosteriorS: function (callback) {
        Tadika.countDocuments(
          { telahTampalanPosGdS: { $gte: 1 }, kedatanganUlangan: 1 },
          callback
        );
      },
      cabutan: function (callback) {
        // Tadika.aggregate([
        //   { $match: { $and: [{ telahCabut: "1" }, { telahFVMuridB: "1" }] } },
        //   { $group: { _id: null, count: { $sum: 1 } } }
        // ], callback);
        Tadika.countDocuments({ cabutanGd: { $gte: 1 } }, callback);
      },
      abses: function (callback) {
        Tadika.countDocuments({ abses: '1' }, callback);
      },
      pulpotomi: function (callback) {
        Tadika.countDocuments({ pulpotomi: '1' }, callback);
      },
      ceramahUtkToddler: function (callback) {
        Tadika.countDocuments({ ceramahToddler: '1' }, callback);
      },
      ceramahUtkDewasa: function (callback) {
        Tadika.countDocuments({ ceramahPenjaga: '1' }, callback);
      },
      toddlerLMG: function (callback) {
        Tadika.countDocuments({ toddlerLMG: '1' }, callback);
      },
      dirujukDariAgensiLuar: function (callback) {
        Tadika.countDocuments({ rujuk: '1' }, callback);
      },
      toddlerDirujukPadaLawatan: function (callback) {
        Tadika.countDocuments({ toddlerDirujukPadaLawatan: '1' }, callback);
      },
      toddlerHadirRujukan: function (callback) {
        Tadika.countDocuments({ toddlerHadirRujukan: '1' }, callback);
      },
      lowCRA: function (callback) {
        Tadika.countDocuments(
          { craRendah: '1', kedatanganBaru: '1' },
          callback
        );
      },
      moderateCRA: function (callback) {
        Tadika.countDocuments(
          { craSederhana: '1', kedatanganBaru: '1' },
          callback
        );
      },
      highCRA: function (callback) {
        Tadika.countDocuments(
          { craTinggi: '1', kedatanganBaru: '1' },
          callback
        );
      },
      pbToddler: function (callback) {
        Tadika.countDocuments({ pbToddler: '1' }, callback);
      },
      pbDstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbDstatusDMFX: '1' }, callback);
      },
      pbMstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbMstatusDMFX: '1' }, callback);
      },
      pbFstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbFstatusDMFX: '1' }, callback);
      },
      pbXstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbXstatusDMFX: '1' }, callback);
      },
      pbDMFXequalToZero: function (callback) {
        Tadika.countDocuments({ pbDMFXequalToZero: '1' }, callback);
      },
      agensiATM: function (callback) {
        Tadika.countDocuments({ agensiATM: '1' }, callback);
      },
      agensiIPTA: function (callback) {
        Tadika.countDocuments({ agensiIPTA: '1' }, callback);
      },
      agensiIPTS: function (callback) {
        Tadika.countDocuments({ agensiIPTS: '1' }, callback);
      },
      agensiPrivateDentalClinic: function (callback) {
        Tadika.countDocuments({ agensiPrivateDentalClinic: '1' }, callback);
      },
      agensiNGO: function (callback) {
        Tadika.countDocuments({ agensiNGO: '1' }, callback);
      },
      agensiIndustri: function (callback) {
        Tadika.countDocuments({ agensiIndustri: '1' }, callback);
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGPS2201.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PGPS2201');

        /// 5 tahun
        let rowNew = worksheet.getRow(18);
        rowNew.getCell(2).value = results.enggan; //B18      5 tahun"
        rowNew.getCell(3).value = results.kedatanganTidakHadir; //C18      5 tahun
        rowNew.getCell(4).value = results.enrolmen; //D18      5 tahun
        rowNew.getCell(5).value = results.kedatanganBaru; //E18      5 tahun
        rowNew.getCell(6).value = results.kedatanganUlangan; //F18      5 tahun
        rowNew.getCell(8).value = results.kebersihanMulutA; //H18      5 tahun
        rowNew.getCell(9).value = results.statusGigidesidusD; //I18      5 tahun
        rowNew.getCell(10).value = results.statusGigidesidusF; //J18      5 tahun
        rowNew.getCell(11).value = results.statusGigidesidusX; //K18      5 tahun
        rowNew.getCell(12).value = results.statusGigidesidusJumlahdfx; //L18      5 tahun
        rowNew.getCell(13).value = results.statusGigiKekalD; //M18      5 tahun
        rowNew.getCell(14).value = results.statusGigiKekalM; //N18      5 tahun
        rowNew.getCell(15).value = results.statusGigiKekalF; //O18      5 tahun
        rowNew.getCell(16).value = results.statusGigiKekalX; //P18      5 tahun
        rowNew.getCell(17).value = results.statusGigiKekalJumlahDMFX; //Q18      5 tahun
        rowNew.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; //R18      5 tahun
        rowNew.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //S18      5 tahun
        rowNew.getCell(20).value = results.MBK; //T18      5 tahun
        rowNew.getCell(21).value = results.statusBebasKaries; //U18      5 tahun
        rowNew.getCell(22).value = results.statusGigiDesidusdfx0; //V18      5 tahun
        rowNew.getCell(23).value = results.mulutBebasGingivitis; //W18      5 tahun
        rowNew.getCell(24).value = results.tprSMKP; //X18      5 tahun
        rowNew.getCell(25).value = results.traumaKecederaanGigiAnterior; //Y18      5 tahun
        rowNew.getCell(26).value = results.cleftAda; //Z18      5 tahun
        rowNew.getCell(27).value = results.cleftRujuk; //AA18      5 tahun
        rowNew.getCell(29).value = results.perluFSMuridB; //AC18      5 tahun
        rowNew.getCell(30).value = results.perluFSGigiB; //AD18      5 tahun
        rowNew.getCell(31).value = results.perluFvMuridB; //AE18      5 tahun
        rowNew.getCell(32).value = results.perluFvGigiB; //AF18      5 tahun
        rowNew.getCell(33).value = results.perluPRR1MuridB; //AG18      5 tahun
        rowNew.getCell(34).value = results.perluPRR1BGigiB; //AH18      5 tahun
        rowNew.getCell(35).value = results.perluTampalanAntGdB; //AI18      5 tahun
        rowNew.getCell(36).value = results.perluTampalanAntGkB; //AJ18      5 tahun
        rowNew.getCell(37).value = results.perluTampalanPosGdB; //AK18      5 tahun
        rowNew.getCell(38).value = results.perluTampalanPosGkB; //AL18      5 tahun
        rowNew.getCell(39).value = results.perluTampalanAmgGdB; //AM18      5 tahun
        rowNew.getCell(40).value = results.perluTampalanAmgGkB; //AN18      5 tahun
        rowNew.getCell(42).value = results.telahFSMuridB; //AP18      5 tahun
        rowNew.getCell(43).value = results.telahFSGigiB; //AQ18      5 tahun
        rowNew.getCell(44).value = results.telahFVMuridB; //AR18      5 tahun
        rowNew.getCell(45).value = results.telahFVGigiB; //AS18      5 tahun
        rowNew.getCell(46).value = results.perluPRR1MuridS; //AT18      5 tahun
        rowNew.getCell(47).value = results.telahPRR1GigiB; //AU18      5 tahun
        rowNew.getCell(48).value = results.telahTampalanAntGdB; //AV18      5 tahun
        rowNew.getCell(49).value = results.telahTampalanAntGkB; //AW18      5 tahun
        rowNew.getCell(50).value = results.telahTampalanPosGdB; //AX18      5 tahun
        rowNew.getCell(51).value = results.telahTampalanPosGkB; //AY18      5 tahun
        rowNew.getCell(52).value = results.telahTampalanAmgGdB; //AZ18      5 tahun
        rowNew.getCell(53).value = results.telahTampalanAmgGkB; //BA18      5 tahun
        rowNew.getCell(54).value = results.jumlahTampalanB; //BB18      5 tahun
        rowNew.getCell(55).value = results.cabutanGd; //BC18      5 tahun
        rowNew.getCell(56).value = results.cabutanGk; //BD18      5 tahun
        rowNew.getCell(57).value = results.penskaleran; //BE18      5 tahun
        rowNew.getCell(58).value = results.kesSelesai; //BF18      5 tahun
        rowNew.commit();

        let rowNew2 = worksheet.getRow(19);
        rowNew2.getCell(8).value = results.kebersihanMulutC; //H19      5 tahun
        rowNew2.commit();

        let rowNew3 = worksheet.getRow(20);
        rowNew3.getCell(8).value = results.kebersihanMulutE; //H20      5 tahun
        rowNew3.getCell(30).value = results.perluFSGigiS; //AD20      5 tahun
        rowNew3.getCell(32).value = results.perluFvGigiS; //AF20      5 tahun
        rowNew3.getCell(34).value = results.perluPRR1BGigiS; //AH20      5 tahun
        rowNew3.getCell(35).value = results.perluTampalanAntGdS; //AI20      5 tahun
        rowNew3.getCell(36).value = results.perluTampalanAntGkS; //AJ20      5 tahun
        rowNew3.getCell(37).value = results.perluTampalanPosGdS; //AK20      5 tahun
        rowNew3.getCell(38).value = results.perluTampalanPosGkS; //AL20      5 tahun
        rowNew3.getCell(39).value = results.perluTampalanAmgGdS; //AM20      5 tahun
        rowNew3.getCell(40).value = results.perluTampalanAmgGkS; //AN20      5 tahun
        rowNew3.getCell(43).value = results.telahFSGigiS; //AQ20      5 tahun
        rowNew3.getCell(45).value = results.telahFVGigiS; //AS20      5 tahun
        rowNew3.getCell(47).value = results.telahPRR1GigiS; //AU20      5 tahun
        rowNew3.getCell(48).value = results.telahTampalanAntGdS; //AV20      5 tahun
        rowNew3.getCell(49).value = results.telahTampalanAntGkS; //AW20      5 tahun
        rowNew3.getCell(50).value = results.telahTampalanPosGdS; //AX20      5 tahun
        rowNew3.getCell(51).value = results.telahTampalanPosGkS; //AY20      5 tahun
        rowNew3.getCell(52).value = results.telahTampalanAmgGdS; //AZ20      5 tahun
        rowNew3.getCell(53).value = results.telahTampalanAmgGkS; //BA20      5 tahun
        rowNew3.getCell(54).value = results.jumlahTampalanS; //BB20      5 tahun
        rowNew3.commit();

        //// 6 tahun
        let rowNew4 = worksheet.getRow(21);
        rowNew4.getCell(2).value = results.Enggan; //B21      6 tahun"
        rowNew4.getCell(3).value = results.Tidakhadir; //C21      6 tahun
        rowNew4.getCell(4).value = results.enrolmen; //D21      6 tahun
        rowNew4.getCell(5).value = results.Baru; //E21      6 tahun
        rowNew4.getCell(6).value = results.Ulangan; //F21      6 tahun
        rowNew4.getCell(8).value = results.kebersihanMulutA; //H21      6 tahun
        rowNew4.getCell(9).value = results.statusGigidesidusD; //I21      6 tahun
        rowNew4.getCell(10).value = results.statusGigidesidusF; //J21      6 tahun
        rowNew4.getCell(11).value = results.statusGigidesidusX; //K21      6 tahun
        rowNew4.getCell(12).value = results.statusGigidesidusJumlahdfx; //L21      6 tahun
        rowNew4.getCell(13).value = results.statusGigiKekalD; //M21      6 tahun
        rowNew4.getCell(14).value = results.statusGigiKekalM; //N21      6 tahun
        rowNew4.getCell(15).value = results.statusGigiKekalF; //O21      6 tahun
        rowNew4.getCell(16).value = results.statusGigiKekalX; //P21      6 tahun
        rowNew4.getCell(17).value = results.statusGigiKekalJumlahDMFX; //Q21      6 tahun
        rowNew4.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; //R21      6 tahun
        rowNew4.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //S21      6 tahun
        rowNew4.getCell(20).value = results.MBK; //T21      6 tahun
        rowNew4.getCell(21).value = results.statusBebasKaries; //U21      6 tahun
        rowNew4.getCell(22).value = results.statusGigiDesidusdfx0; //V21      6 tahun
        rowNew4.getCell(23).value = results.mulutBebasGingivitis; //W21      6 tahun
        rowNew4.getCell(24).value = results.tprSMKP; //X21      6 tahun
        rowNew4.getCell(25).value = results.traumaKecederaanGigiAnterior; //Y21      6 tahun
        rowNew4.getCell(26).value = results.cleftAda; //Z21      6 tahun
        rowNew4.getCell(27).value = results.cleftRujuk; //AA21      6 tahun
        rowNew4.getCell(29).value = results.perluFSMuridB; //AC21      6 tahun
        rowNew4.getCell(30).value = results.perluFSGigiB; //AD21      6 tahun
        rowNew4.getCell(31).value = results.perluFvMuridB; //AE21      6 tahun
        rowNew4.getCell(33).value = results.perluPRR1MuridB; //AG21      6 tahun
        rowNew4.getCell(35).value = results.perluTampalanAntGdB; //AI21      6 tahun
        rowNew4.getCell(36).value = results.perluTampalanAntGkB; //AJ21      6 tahun
        rowNew4.getCell(37).value = results.perluTampalanPosGdB; //AK21      6 tahun
        rowNew4.getCell(38).value = results.perluTampalanPosGkB; //AL21      6 tahun
        rowNew4.getCell(39).value = results.perluTampalanAmgGdB; //AM21      6 tahun
        rowNew4.getCell(40).value = results.perluTampalanAmgGkB; //AN21      6 tahun
        rowNew4.getCell(42).value = results.telahFSMuridB; //AP21      6 tahun
        rowNew4.getCell(43).value = results.telahFSGigiB; //AQ21      6 tahun
        rowNew4.getCell(44).value = results.telahFVMuridB; //AR21      6 tahun
        rowNew4.getCell(45).value = results.telahFVGigiB; //AS21      6 tahun
        rowNew4.getCell(46).value = results.perluPRR1MuridS; //AT21      6 tahun
        rowNew4.getCell(48).value = results.telahTampalanAntGdB; //AV21      6 tahun
        rowNew4.getCell(49).value = results.telahTampalanAntGkB; //AW21      6 tahun
        rowNew4.getCell(50).value = results.telahTampalanPosGdB; //AX21      6 tahun
        rowNew4.getCell(51).value = results.telahTampalanPosGkB; //AY21      6 tahun
        rowNew4.getCell(52).value = results.telahTampalanAmgGdB; //AZ21      6 tahun
        rowNew4.getCell(53).value = results.telahTampalanAmgGkB; //BA21      6 tahun
        rowNew4.getCell(54).value = results.jumlahTampalanB; //BB21      6 tahun
        rowNew4.getCell(55).value = results.cabutanGd; //BC21      6 tahun
        rowNew4.getCell(56).value = results.cabutanGk; //BD21      6 tahun
        rowNew4.getCell(57).value = results.penskaleran; //BE21      6 tahun
        rowNew4.getCell(58).value = results.kesSelesai; //BF21      6 tahun
        rowNew4.commit();

        let rowNew5 = worksheet.getRow(22);
        rowNew5.getCell(8).value = results.kebersihanMulutC; //H22      6 tahun
        rowNew5.commit();

        let rowNew6 = worksheet.getRow(23);
        rowNew6.getCell(8).value = results.kebersihanMulutE; //H23      6 tahun
        rowNew6.getCell(30).value = results.perluFSGigiS; //AD23      6 tahun
        rowNew6.getCell(32).value = results.perluFvGigiB; //AF23      6 tahun
        rowNew6.getCell(32).value = results.perluFvGigiS; //AF23      6 tahun
        rowNew6.getCell(34).value = results.perluPRR1BGigiB; //AH23      6 tahun
        rowNew6.getCell(34).value = results.perluPRR1BGigiS; //AH23      6 tahun
        rowNew6.getCell(35).value = results.perluTampalanAntGdS; //AI23      6 tahun
        rowNew6.getCell(36).value = results.perluTampalanAntGkS; //AJ23      6 tahun
        rowNew6.getCell(37).value = results.perluTampalanPosGdS; //AK23      6 tahun
        rowNew6.getCell(38).value = results.perluTampalanPosGkS; //AL23      6 tahun
        rowNew6.getCell(39).value = results.perluTampalanAmgGdS; //AM23      6 tahun
        rowNew6.getCell(40).value = results.perluTampalanAmgGkS; //AN23      6 tahun
        rowNew6.getCell(43).value = results.telahFSGigiS; //AQ23      6 tahun
        rowNew6.getCell(45).value = results.telahFVGigiS; //AS23      6 tahun
        rowNew6.getCell(47).value = results.telahPRR1GigiB; //AU23      6 tahun
        rowNew6.getCell(47).value = results.telahPRR1GigiS; //AU23      6 tahun
        rowNew6.getCell(48).value = results.telahTampalanAntGdS; //AV23      6 tahun
        rowNew6.getCell(49).value = results.telahTampalanAntGkS; //AW23      6 tahun
        rowNew6.getCell(50).value = results.telahTampalanPosGdS; //AX23      6 tahun
        rowNew6.getCell(51).value = results.telahTampalanPosGkS; //AY23      6 tahun
        rowNew6.getCell(52).value = results.telahTampalanAmgGdS; //AZ23      6 tahun
        rowNew6.getCell(53).value = results.telahTampalanAmgGkS; //BA23      6 tahun
        rowNew6.getCell(54).value = results.jumlahTampalanS; //BB23      6
        rowNew6.commit();

        let rowNew7 = worksheet.getRow(23);
        rowNew7.getCell(8).value = results.kebersihanMulutE; //H23      6 tahun
        rowNew7.getCell(30).value = results.perluFSGigiS; //AD23      6 tahun
        rowNew7.getCell(32).value = results.perluFvGigiB; //AF23      6 tahun
        rowNew7.getCell(32).value = results.perluFvGigiS; //AF23      6 tahun
        rowNew7.getCell(34).value = results.perluPRR1BGigiB; //AH23      6 tahun
        rowNew7.getCell(34).value = results.perluPRR1BGigiS; //AH23      6 tahun
        rowNew7.getCell(35).value = results.perluTampalanAntGdS; //AI23      6 tahun
        rowNew7.getCell(36).value = results.perluTampalanAntGkS; //AJ23      6 tahun
        rowNew7.getCell(37).value = results.perluTampalanPosGdS; //AK23      6 tahun
        rowNew7.getCell(38).value = results.perluTampalanPosGkS; //AL23      6 tahun
        rowNew7.getCell(39).value = results.perluTampalanAmgGdS; //AM23      6 tahun
        rowNew7.getCell(40).value = results.perluTampalanAmgGkS; //AN23      6 tahun
        rowNew7.getCell(43).value = results.telahFSGigiS; //AQ23      6 tahun
        rowNew7.getCell(45).value = results.telahFVGigiS; //AS23      6 tahun
        rowNew7.getCell(47).value = results.telahPRR1GigiB; //AU23      6 tahun
        rowNew7.getCell(47).value = results.telahPRR1GigiS; //AU23      6 tahun
        rowNew7.getCell(48).value = results.telahTampalanAntGdS; //AV23      6 tahun
        rowNew7.getCell(49).value = results.telahTampalanAntGkS; //AW23      6 tahun
        rowNew7.getCell(50).value = results.telahTampalanPosGdS; //AX23      6 tahun
        rowNew7.getCell(51).value = results.telahTampalanPosGkS; //AY23      6 tahun
        rowNew7.getCell(52).value = results.telahTampalanAmgGdS; //AZ23      6 tahun
        rowNew7.getCell(53).value = results.telahTampalanAmgGkS; //BA23      6 tahun
        rowNew7.getCell(54).value = results.jumlahTampalanS; //BB23      6 tahun        // // Execute batch five KKIA
        rowNew7.commit();

        let rowNew8 = worksheet.getRow(31);
        rowNew8.getCell(5).value = results.bilCeramah; //E31      bilCeramah
        rowNew8.getCell(8).value = results.bilCeramahpeserta; //H31      bilCeramahPeserta
        rowNew8.commit();

        let rowNew9 = worksheet.getRow(32);
        rowNew9.getCell(5).value = results.bilRoleplay; //E32      bilRoleplay
        rowNew9.getCell(8).value = results.bilRoleplaypeserta; //H32      bilRoleplayPeserta
        rowNew9.getCell(58).value = results.peratusMuridDiliputi; //BC32      peratusMuridDiliputi
        rowNew9.commit();

        let rowNew10 = worksheet.getRow(33);
        rowNew10.getCell(5).value = results.bilLmg; //E33      bilLmg
        rowNew10.getCell(8).value = results.bilLmgpeserta; //H33      bilLmgPeserta
        rowNew10.commit();

        let rowNew11 = worksheet.getRow(29);
        rowNew11.getCell(58).value = results.peratusKesSelesai; //BC29      peratusKesSelesai'
        rowNew11.commit();

        let rowNew12 = worksheet.getRow(9);
        rowNew12.getCell(16).value = results.namaTadika; //F9
        rowNew12.getCell(8).value = results.bilhariprojek; //AA9      bil hari projek
        rowNew12.getCell(58).value = results.tarikhSelesaiRawatan; //AV9      tarikhSelesaiRawatan
        rowNew12.commit();

        let rowNew13 = worksheet.getRow(8);
        rowNew13.getCell(16).value = results.klinikPergigian; //F8
        rowNew13.getCell(58).value = results.tarikhMulaRawatan; //AV8      tarikhMulaRawatan
        rowNew13.commit();

        let rowNew14 = worksheet.getRow(6);
        rowNew14.getCell(1).value = results.tahun; //A6      tahun
        rowNew14.commit();

        let rowNew15 = worksheet.getRow(53);
        rowNew15.getCell(10).value = 'Report Generated by Gi-Ret 2.0';
        rowNew15.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PGPS2201.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPGPS2202 = function (req, res) {
  async.parallel(
    {
      pesakitBaru: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      kedatanganUlangan: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      dStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      mStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      fStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      xStatusDMFX: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      dmfxEqualToZero: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
      skorPlakA: function (callback) {
        Tadika.countDocuments(
          { kebersihanMulutA: '1', kedatanganBaru: 1 },
          callback
        );
      },
      skorPlakC: function (callback) {
        Tadika.countDocuments(
          { kebersihanMulutC: '1', kedatanganBaru: 1 },
          callback
        );
      },
      skorPlakE: function (callback) {
        Tadika.countDocuments(
          { kebersihanMulutE: '1', kedatanganBaru: 1 },
          callback
        );
      },
      traumaTisuLembut: function (callback) {
        Tadika.countDocuments({ traumaTisuLembut: { $gte: 1 } }, callback);
      },
      traumaTisuKeras: function (callback) {
        Tadika.countDocuments({ traumaTisuKeras: { $gte: 1 } }, callback);
      },
      bilTODperluFV: function (callback) {
        Tadika.countDocuments(
          { perluFvMuridB: '1', kedatanganBaru: 1 },
          callback
        );
      },
      bilTodBaruDibuatFV: function (callback) {
        Tadika.countDocuments({ telahFVMuridB: '1' }, callback);
      },
      tampalanAnteriorB: function (callback) {
        Tadika.countDocuments(
          { telahTampalanAntGdB: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tampalanAnteriorS: function (callback) {
        Tadika.countDocuments(
          { telahTampalanAntGdS: { $gte: 1 }, kedatanganUlangan: 1 },
          callback
        );
      },
      tampalanPosteriorB: function (callback) {
        Tadika.countDocuments(
          { telahTampalanPosGdB: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tampalanPosteriorS: function (callback) {
        Tadika.countDocuments(
          { telahTampalanPosGdS: { $gte: 1 }, kedatanganUlangan: 1 },
          callback
        );
      },
      cabutan: function (callback) {
        // Tadika.aggregate([
        //   { $match: { $and: [{ telahCabut: "1" }, { telahFVMuridB: "1" }] } },
        //   { $group: { _id: null, count: { $sum: 1 } } }
        // ], callback);
        Tadika.countDocuments({ cabutanGd: { $gte: 1 } }, callback);
      },
      abses: function (callback) {
        Tadika.countDocuments({ abses: '1' }, callback);
      },
      pulpotomi: function (callback) {
        Tadika.countDocuments({ pulpotomi: '1' }, callback);
      },
      ceramahUtkToddler: function (callback) {
        Tadika.countDocuments({ ceramahToddler: '1' }, callback);
      },
      ceramahUtkDewasa: function (callback) {
        Tadika.countDocuments({ ceramahPenjaga: '1' }, callback);
      },
      toddlerLMG: function (callback) {
        Tadika.countDocuments({ toddlerLMG: '1' }, callback);
      },
      dirujukDariAgensiLuar: function (callback) {
        Tadika.countDocuments({ rujuk: '1' }, callback);
      },
      toddlerDirujukPadaLawatan: function (callback) {
        Tadika.countDocuments({ toddlerDirujukPadaLawatan: '1' }, callback);
      },
      toddlerHadirRujukan: function (callback) {
        Tadika.countDocuments({ toddlerHadirRujukan: '1' }, callback);
      },
      lowCRA: function (callback) {
        Tadika.countDocuments(
          { craRendah: '1', kedatanganBaru: '1' },
          callback
        );
      },
      moderateCRA: function (callback) {
        Tadika.countDocuments(
          { craSederhana: '1', kedatanganBaru: '1' },
          callback
        );
      },
      highCRA: function (callback) {
        Tadika.countDocuments(
          { craTinggi: '1', kedatanganBaru: '1' },
          callback
        );
      },
      pbToddler: function (callback) {
        Tadika.countDocuments({ pbToddler: '1' }, callback);
      },
      pbDstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbDstatusDMFX: '1' }, callback);
      },
      pbMstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbMstatusDMFX: '1' }, callback);
      },
      pbFstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbFstatusDMFX: '1' }, callback);
      },
      pbXstatusDMFX: function (callback) {
        Tadika.countDocuments({ pbXstatusDMFX: '1' }, callback);
      },
      pbDMFXequalToZero: function (callback) {
        Tadika.countDocuments({ pbDMFXequalToZero: '1' }, callback);
      },
      agensiATM: function (callback) {
        Tadika.countDocuments({ agensiATM: '1' }, callback);
      },
      agensiIPTA: function (callback) {
        Tadika.countDocuments({ agensiIPTA: '1' }, callback);
      },
      agensiIPTS: function (callback) {
        Tadika.countDocuments({ agensiIPTS: '1' }, callback);
      },
      agensiPrivateDentalClinic: function (callback) {
        Tadika.countDocuments({ agensiPrivateDentalClinic: '1' }, callback);
      },
      agensiNGO: function (callback) {
        Tadika.countDocuments({ agensiNGO: '1' }, callback);
      },
      agensiIndustri: function (callback) {
        Tadika.countDocuments({ agensiIndustri: '1' }, callback);
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGPS2202.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PGPS202');

        // 5 tahun kerajaan
        let rowNew = worksheet.getRow(16);
        rowNew.getCell(3).value = results.kedatanganBaru; //C16      Kedatangan Baru5 tahun kerajaan
        rowNew.getCell(4).value = results.kedatanganUlangan; //D16      Kedatangan Ulangan5 tahun kerajaan
        rowNew.getCell(5).value = results.kebersihanMulutA; //E16      Kebersihan Mulut A5 tahun kerajaan
        rowNew.getCell(6).value = results.kebersihanMulutC; //F16      Kebersihan Mulut C5 tahun kerajaan
        rowNew.getCell(7).value = results.kebersihanMulutE; //G16      Kebersihan Mulut E5 tahun kerajaan
        rowNew.getCell(8).value = results.statusGigidesidusD; //H16      Status Gigi Desidus d5 tahun kerajaan
        rowNew.getCell(9).value = results.statusGigidesidusF; //I16      Status Gigi Desidus f5 tahun kerajaan
        rowNew.getCell(10).value = results.statusGigidesidusX; //J16      Status Gigi Desidus x5 tahun kerajaan
        rowNew.getCell(11).value = results.statusGigidesidusJumlahdfx; //K16      Status Gigi Desidus Jumlah dfx5 tahun kerajaan
        rowNew.getCell(12).value = results.statusGigiKekalD; //L16      Status Gigi Kekal D5 tahun kerajaan
        rowNew.getCell(13).value = results.statusGigiKekalM; //M16      Status Gigi Kekal M5 tahun kerajaan
        rowNew.getCell(14).value = results.statusGigiKekalF; //N16      Status Gigi Kekal F5 tahun kerajaan
        rowNew.getCell(15).value = results.statusGigiKekalX; //O16      Status Gigi Kekal X5 tahun kerajaan
        rowNew.getCell(16).value = results.statusGigiKekalJumlahDMFX; //P16      Status Gigi Kekal Jumlah DMFX5 tahun kerajaan
        rowNew.getCell(17).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Q16      Status Gigi Kekal DMFX <= 35 tahun kerajaan
        rowNew.getCell(18).value = results.totalStatusGigiKekalSamaKosong; //R16      Status Gigi Kekal X+M = 05 tahun kerajaan
        rowNew.getCell(19).value = results.MBK; //S16      Mulut Bebas Karies (MBK)5 tahun kerajaan
        rowNew.getCell(20).value = results.statusBebasKaries; //T16      Status Gigi Kekal Bebas Karies (BK) DMFX = 05 tahun kerajaan
        rowNew.getCell(21).value = results.statusGigiDesidusdfx0; //U16      Status Gigi Desidus dfx = 05 tahun kerajaan
        rowNew.getCell(22).value = results.mulutBebasGingivitis; //V16      Mulut Bebas Gingivitis (MBG)5 tahun kerajaan
        rowNew.getCell(23).value = results.tprSMKP; //W16      Tidak Perlu Rawatan (SMKP)5 tahun kerajaan
        rowNew.getCell(25).value = results.perluFSMuridB; //Y16      5 tahun kerajaan
        rowNew.getCell(26).value = results.perluFSGigiB; //Z16      5 tahun kerajaan
        rowNew.getCell(27).value = results.perluFvMuridB; //AA16      5 tahun kerajaan
        rowNew.getCell(28).value = results.perluFvGigiB; //AB16      5 tahun kerajaan
        rowNew.getCell(29).value = results.perluPRR1MuridB; //AC16      5 tahun kerajaan
        rowNew.getCell(30).value = results.perluPRR1BGigiB; //AD16      5 tahun kerajaan
        rowNew.getCell(32).value = results.perluFSMuridB; //AF16      5 tahun kerajaan
        rowNew.getCell(33).value = results.perluFSGigiB; //AG16      5 tahun kerajaan
        rowNew.getCell(34).value = results.perluFvMuridB; //AH16      5 tahun kerajaan
        rowNew.getCell(35).value = results.perluFvGigiB; //AI16      5 tahun kerajaan
        rowNew.getCell(36).value = results.perluPRR1MuridB; //AJ16      5 tahun kerajaan
        rowNew.getCell(37).value = results.perluPRR1BGigiB; //AK16      5 tahun kerajaan
        rowNew.getCell(38).value = results.telahTampalanAntGdB; //AL16      5 tahun kerajaan
        rowNew.getCell(39).value = results.telahTampalanAntGkB; //AM16      5 tahun kerajaan
        rowNew.getCell(40).value = results.telahTampalanPosGdB; //AN16      5 tahun kerajaan
        rowNew.getCell(41).value = results.telahTampalanPosGkB; //AO16      5 tahun kerajaan
        rowNew.getCell(42).value = results.telahTampalanAmgGdB; //AP16      5 tahun kerajaan
        rowNew.getCell(43).value = results.telahTampalanAmgGkB; //AQ16      5 tahun kerajaan
        rowNew.getCell(44).value = results.jumlahTampalanB; //AR16      5 tahun kerajaan
        rowNew.getCell(45).value = results.cabutanGd; //AS16      5 tahun kerajaan
        rowNew.getCell(46).value = results.cabutanGk; //AT16      5 tahun kerajaan
        rowNew.getCell(47).value = results.jumlahCabutan; //AU16      5 tahun kerajaan
        rowNew.getCell(48).value = results.penskaleran; //AV16      5 tahun kerajaan
        rowNew.getCell(49).value = results.kesSelesai; //AW16      5 tahun kerajaan
        rowNew.getCell(50).value = results.enrolmen; //AX16      5 tahun kerajaan
        rowNew.getCell(51).value = results.peratusKesDiliputi; //AY16      5 tahun kerajaan
        rowNew.commit();

        let rowNew2 = worksheet.getRow(17);
        rowNew2.getCell(26).value = results.perluFSGigiS; //Z17      5 tahun kerajaan
        rowNew2.getCell(28).value = results.perluFvGigiS; //AB17      5 tahun kerajaan
        rowNew2.getCell(30).value = results.perluPRR1BGigiS; //AD17      5 tahun kerajaan
        rowNew2.getCell(33).value = results.perluFSGigiS; //AG17      5 tahun kerajaan
        rowNew2.getCell(35).value = results.perluFvGigiS; //AI17      5 tahun kerajaan
        rowNew2.getCell(37).value = results.perluPRR1BGigiS; //AK17      5 tahun kerajaan
        rowNew2.getCell(38).value = results.telahTampalanAntGdS; //AL17      5 tahun kerajaan
        rowNew2.getCell(39).value = results.telahTampalanAntGkS; //AM17      5 tahun kerajaan
        rowNew2.getCell(40).value = results.telahTampalanPosGdS; //AN17      5 tahun kerajaan
        rowNew2.getCell(41).value = results.telahTampalanPosGkS; //AO17      5 tahun kerajaan
        rowNew2.getCell(42).value = results.telahTampalanAmgGdS; //AP17      5 tahun kerajaan
        rowNew2.getCell(43).value = results.telahTampalanAmgGkS; //AQ17      5 tahun kerajaan
        rowNew2.getCell(44).value = results.jumlahTampalanS; //AR17      5 tahun kerajaan
        rowNew2.commit();

        /// 6 tahun kerajaan
        let rowNew3 = worksheet.getRow(18);
        rowNew3.getCell(3).value = results.kedatanganBaru; //C18      results.kedatangan Baru6 kerajaan
        rowNew3.getCell(4).value = results.kedatanganUlangan; //D18      results.kedatangan Ulangan6 kerajaan
        rowNew3.getCell(5).value = results.kebersihanMulutA; //E18      Kebersihan Mulut A6 kerajaan
        rowNew3.getCell(6).value = results.kebersihanMulutC; //F18      Kebersihan Mulut C6 kerajaan
        rowNew3.getCell(7).value = results.kebersihanMulutE; //G18      Kebersihan Mulut E6 kerajaan
        rowNew3.getCell(8).value = results.statusGigidesidusD; //H18      Status Gigi Desidus d6 kerajaan
        rowNew3.getCell(9).value = results.statusGigidesidusF; //I18      Status Gigi Desidus f6 kerajaan
        rowNew3.getCell(10).value = results.statusGigidesidusX; //J18      Status Gigi Desidus x6 kerajaan
        rowNew3.getCell(11).value = results.statusGigidesidusJumlahdfx; //K18      Status Gigi Desidus Jumlah dfx6 kerajaan
        rowNew3.getCell(12).value = results.statusGigiKekalD; //L18      Status Gigi Kekal D6 kerajaan
        rowNew3.getCell(13).value = results.statusGigiKekalM; //M18      Status Gigi Kekal M6 kerajaan
        rowNew3.getCell(14).value = results.statusGigiKekalF; //N18      Status Gigi Kekal F6 kerajaan
        rowNew3.getCell(15).value = results.statusGigiKekalX; //O18      Status Gigi Kekal X6 kerajaan
        rowNew3.getCell(16).value = results.statusGigiKekalJumlahDMFX; //P18      Status Gigi Kekal Jumlah DMFX6 kerajaan
        rowNew3.getCell(17).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Q18      Status Gigi Kekal DMFX <= 36 kerajaan
        rowNew3.getCell(18).value = results.totalStatusGigiKekalSamaKosong; //R18      Status Gigi Kekal X+M = 06 kerajaan
        rowNew3.getCell(19).value = results.MBK; //S18      Mulut Bebas Karies (MBK)6 kerajaan
        rowNew3.getCell(20).value = results.statusBebasKaries; //T18      Status Gigi Kekal Bebas Karies (BK) DMFX = 06 kerajaan
        rowNew3.getCell(21).value = results.statusGigiDesidusdfx0; //U18      Status Gigi Desidus dfx = 06 kerajaan
        rowNew3.getCell(22).value = results.mulutBebasGingivitis; //V18      Mulut Bebas Gingivitis (MBG)6 kerajaan
        rowNew3.getCell(23).value = results.tprSMKP; //W18      Tidak Perlu Rawatan (SMKP)6 kerajaan
        rowNew3.getCell(25).value = results.perluFSMuridB; //Y18      6 kerajaan
        rowNew3.getCell(26).value = results.perluFSGigiB; //Z18      6 kerajaan
        rowNew3.getCell(27).value = results.perluFvMuridB; //AA18      6 kerajaan
        rowNew3.getCell(28).value = results.perluFvGigiB; //AB18      6 kerajaan
        rowNew3.getCell(29).value = results.perluPRR1MuridB; //AC18      6 kerajaan
        rowNew3.getCell(30).value = results.perluPRR1BGigiB; //AD18      6 kerajaan
        rowNew3.getCell(32).value = results.perluFSMuridB; //AF18      6 kerajaan
        rowNew3.getCell(33).value = results.perluFSGigiB; //AG18      6 kerajaan
        rowNew3.getCell(34).value = results.perluFvMuridB; //AH18      6 kerajaan
        rowNew3.getCell(35).value = results.perluFvGigiB; //AI18      6 kerajaan
        rowNew3.getCell(36).value = results.perluPRR1MuridB; //AJ18      6 kerajaan
        rowNew3.getCell(37).value = results.perluPRR1BGigiB; //AK18      6 kerajaan
        rowNew3.getCell(38).value = results.telahTampalanAntGdB; //AL18      6 kerajaan
        rowNew3.getCell(39).value = results.telahTampalanAntGkB; //AM18      6 kerajaan
        rowNew3.getCell(40).value = results.telahTampalanPosGdB; //AN18      6 kerajaan
        rowNew3.getCell(41).value = results.telahTampalanPosGkB; //AO18      6 kerajaan
        rowNew3.getCell(42).value = results.telahTampalanAmgGdB; //AP18      6 kerajaan
        rowNew3.getCell(43).value = results.telahTampalanAmgGkB; //AQ18      6 kerajaan
        rowNew3.getCell(44).value = results.jumlahTampalanB; //AR18      6 kerajaan
        rowNew3.getCell(45).value = results.cabutanGd; //AS18      6 kerajaan
        rowNew3.getCell(46).value = results.cabutanGk; //AT18      6 kerajaan
        rowNew3.getCell(47).value = results.jumlahCabutan; //AU18      6 kerajaan
        rowNew3.getCell(48).value = results.penskaleran; //AV18      6 kerajaan
        rowNew3.getCell(49).value = results.kesSelesai; //AW18      6 kerajaan
        rowNew3.getCell(50).value = results.enrolmen; //AX18      6 kerajaan
        rowNew3.getCell(51).value = results.peratusKesDiliputi; //AY18      6 kerajaan
        rowNew3.commit();

        let rowNew4 = worksheet.getRow(19);
        rowNew4.getCell(26).value = results.perluFSGigiS; //Z19      6 kerajaan
        rowNew4.getCell(28).value = results.perluFvGigiS; //AB19      6 kerajaan
        rowNew4.getCell(30).value = results.perluPRR1BGigiS; //AD19      6 kerajaan
        rowNew4.getCell(33).value = results.perluFSGigiS; //AG19      6 kerajaan
        rowNew4.getCell(35).value = results.perluFvGigiS; //AI19      6 kerajaan
        rowNew4.getCell(37).value = results.perluPRR1BGigiS; //AK19      6 kerajaan
        rowNew4.getCell(38).value = results.telahTampalanAntGdS; //AL19      6 kerajaan
        rowNew4.getCell(39).value = results.telahTampalanAntGkS; //AM19      6 kerajaan
        rowNew4.getCell(40).value = results.telahTampalanPosGdS; //AN19      6 kerajaan
        rowNew4.getCell(41).value = results.telahTampalanPosGkS; //AO19      6 kerajaan
        rowNew4.getCell(42).value = results.telahTampalanAmgGdS; //AP19      6 kerajaan
        rowNew4.getCell(43).value = results.telahTampalanAmgGkS; //AQ19      6 kerajaan
        rowNew4.getCell(44).value = results.jumlahTampalanS; //AR19      6 kerajaan
        rowNew4.commit();

        //// 5 tahun swasta
        let rowNew5 = worksheet.getRow(22);
        rowNew5.getCell(3).value = results.kedatanganBaru; //C22      Kedatangan Baru5 tahun swasta"
        rowNew5.getCell(4).value = results.kedatanganUlangan; //D22      Kedatangan Ulangan5 tahun swasta
        rowNew5.getCell(5).value = results.kebersihanMulutA; //E22      Kebersihan Mulut A5 tahun swasta
        rowNew5.getCell(6).value = results.kebersihanMulutC; //F22      Kebersihan Mulut C5 tahun swasta
        rowNew5.getCell(7).value = results.kebersihanMulutE; //G22      Kebersihan Mulut E5 tahun swasta
        rowNew5.getCell(8).value = results.statusGigidesidusD; //H22      Status Gigi Desidus d5 tahun swasta
        rowNew5.getCell(9).value = results.statusGigidesidusF; //I22      Status Gigi Desidus f5 tahun swasta
        rowNew5.getCell(10).value = results.statusGigidesidusX; //J22      Status Gigi Desidus x5 tahun swasta
        rowNew5.getCell(11).value = results.statusGigidesidusJumlahdfx; //K22      Status Gigi Desidus Jumlah dfx5 tahun swasta
        rowNew5.getCell(12).value = results.statusGigiKekalD; //L22      Status Gigi Kekal D5 tahun swasta
        rowNew5.getCell(13).value = results.statusGigiKekalM; //M22      Status Gigi Kekal M5 tahun swasta
        rowNew5.getCell(14).value = results.statusGigiKekalF; //N22      Status Gigi Kekal F5 tahun swasta
        rowNew5.getCell(15).value = results.statusGigiKekalX; //O22      Status Gigi Kekal X5 tahun swasta
        rowNew5.getCell(16).value = results.statusGigiKekalJumlahDMFX; //P22      Status Gigi Kekal Jumlah DMFX5 tahun swasta
        rowNew5.getCell(17).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Q22      Status Gigi Kekal DMFX <= 35 tahun swasta
        rowNew5.getCell(18).value = results.totalStatusGigiKekalSamaKosong; //R22      Status Gigi Kekal X+M = 05 tahun swasta
        rowNew5.getCell(19).value = results.MBK; //S22      Mulut Bebas Karies (MBK)5 tahun swasta
        rowNew5.getCell(20).value = results.statusBebasKaries; //T22      Status Gigi Kekal Bebas Karies (BK) DMFX = 05 tahun swasta
        rowNew5.getCell(21).value = results.statusGigiDesidusdfx0; //U22      Status Gigi Desidus dfx = 05 tahun swasta
        rowNew5.getCell(22).value = results.mulutBebasGingivitis; //V22      Mulut Bebas Gingivitis (MBG)5 tahun swasta
        rowNew5.getCell(23).value = results.tprSMKP; //W22      Tidak Perlu Rawatan (SMKP)5 tahun swasta
        rowNew5.getCell(25).value = results.perluFSMuridB; //Y22      5 tahun swasta
        rowNew5.getCell(26).value = results.perluFSGigiB; //Z22      5 tahun swasta
        rowNew5.getCell(27).value = results.perluFvMuridB; //AA22      5 tahun swasta
        rowNew5.getCell(28).value = results.perluFvGigiB; //AB22      5 tahun swasta
        rowNew5.getCell(29).value = results.perluPRR1MuridB; //AC22      5 tahun swasta
        rowNew5.getCell(30).value = results.perluPRR1BGigiB; //AD22      5 tahun swasta
        rowNew5.getCell(32).value = results.perluFSMuridB; //AF22      5 tahun swasta
        rowNew5.getCell(33).value = results.perluFSGigiB; //AG22      5 tahun swasta
        rowNew5.getCell(34).value = results.perluFvMuridB; //AH22      5 tahun swasta
        rowNew5.getCell(35).value = results.perluFvGigiB; //AI22      5 tahun swasta
        rowNew5.getCell(36).value = results.perluPRR1MuridB; //AJ22      5 tahun swasta
        rowNew5.getCell(37).value = results.perluPRR1BGigiB; //AK22      5 tahun swasta
        rowNew5.getCell(38).value = results.telahTampalanAntGdB; //AL22      5 tahun swasta
        rowNew5.getCell(39).value = results.telahTampalanAntGkB; //AM22      5 tahun swasta
        rowNew5.getCell(40).value = results.telahTampalanPosGdB; //AN22      5 tahun swasta
        rowNew5.getCell(41).value = results.telahTampalanPosGkB; //AO22      5 tahun swasta
        rowNew5.getCell(42).value = results.telahTampalanAmgGdB; //AP22      5 tahun swasta
        rowNew5.getCell(43).value = results.telahTampalanAmgGkB; //AQ22      5 tahun swasta
        rowNew5.getCell(44).value = results.jumlahTampalanB; //AR22      5 tahun swasta
        rowNew5.getCell(45).value = results.cabutanGd; //AS22      5 tahun swasta
        rowNew5.getCell(46).value = results.cabutanGk; //AT22      5 tahun swasta
        rowNew5.getCell(47).value = results.jumlahCabutan; //AU22      5 tahun swasta
        rowNew5.getCell(48).value = results.penskaleran; //AV22      5 tahun swasta
        rowNew5.getCell(49).value = results.kesSelesai; //AW22      5 tahun swasta
        rowNew5.getCell(50).value = results.enrolmen; //AX22      5 tahun swasta
        rowNew5.getCell(51).value = results.peratusKesDiliputi; //AY22      5 tahun swasta
        rowNew5.commit();

        let rowNew6 = worksheet.getRow(22);
        rowNew6.getCell(26).value = results.perluFSGigiS; //Z23      5 tahun swasta
        rowNew6.getCell(28).value = results.perluFvGigiS; //AB23      5 tahun swasta
        rowNew6.getCell(30).value = results.perluPRR1BGigiS; //AD23      5 tahun swasta
        rowNew6.getCell(33).value = results.perluFSGigiS; //AG23      5 tahun swasta
        rowNew6.getCell(35).value = results.perluFvGigiS; //AI23      5 tahun swasta
        rowNew6.getCell(37).value = results.perluPRR1BGigiS; //AK23      5 tahun swasta
        rowNew6.getCell(38).value = results.telahTampalanAntGdS; //AL23      5 tahun swasta
        rowNew6.getCell(39).value = results.telahTampalanAntGkS; //AM23      5 tahun swasta
        rowNew6.getCell(40).value = results.telahTampalanPosGdS; //AN23      5 tahun swasta
        rowNew6.getCell(41).value = results.telahTampalanPosGkS; //AO23      5 tahun swasta
        rowNew6.getCell(42).value = results.telahTampalanAmgGdS; //AP23      5 tahun swasta
        rowNew6.getCell(43).value = results.telahTampalanAmgGkS; //AQ23      5 tahun swasta
        rowNew6.getCell(44).value = results.jumlahTampalanS; //AR23      5 tahun swasta
        rowNew6.commit();

        // 6 tahun swasta
        let rowNew7 = worksheet.getRow(24);
        rowNew7.getCell(3).value = results.kedatanganBaru; //C24      Kedatangan Baru6 swasta
        rowNew7.getCell(4).value = results.kedatanganUlangan; //D24      Kedatangan Ulangan6 swasta
        rowNew7.getCell(5).value = results.kebersihanMulutA; //E24      Kebersihan Mulut A6 swasta
        rowNew7.getCell(6).value = results.kebersihanMulutC; //F24      Kebersihan Mulut C6 swasta
        rowNew7.getCell(7).value = results.kebersihanMulutE; //G24      Kebersihan Mulut E6 swasta
        rowNew7.getCell(8).value = results.statusGigidesidusD; //H24      Status Gigi Desidus d6 swasta
        rowNew7.getCell(9).value = results.statusGigidesidusF; //I24      Status Gigi Desidus f6 swasta
        rowNew7.getCell(10).value = results.statusGigidesidusX; //J24      Status Gigi Desidus x6 swasta
        rowNew7.getCell(11).value = results.statusGigidesidusJumlahdfx; //K24      Status Gigi Desidus Jumlah dfx6 swasta
        rowNew7.getCell(12).value = results.statusGigiKekalD; //L24      Status Gigi Kekal D6 swasta
        rowNew7.getCell(13).value = results.statusGigiKekalM; //M24      Status Gigi Kekal M6 swasta
        rowNew7.getCell(14).value = results.statusGigiKekalF; //N24      Status Gigi Kekal F6 swasta
        rowNew7.getCell(15).value = results.statusGigiKekalX; //O24      Status Gigi Kekal X6 swasta
        rowNew7.getCell(16).value = results.statusGigiKekalJumlahDMFX; //P24      Status Gigi Kekal Jumlah DMFX6 swasta
        rowNew7.getCell(17).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Q24      Status Gigi Kekal DMFX <= 36 swasta
        rowNew7.getCell(18).value = results.totalStatusGigiKekalSamaKosong; //R24      Status Gigi Kekal X+M = 06 swasta
        rowNew7.getCell(19).value = results.MBK; //S24      Mulut Bebas Karies (MBK)6 swasta
        rowNew7.getCell(20).value = results.statusBebasKaries; //T24      Status Gigi Kekal Bebas Karies (BK) DMFX = 06 swasta
        rowNew7.getCell(21).value = results.statusGigiDesidusdfx0; //U24      Status Gigi Desidus dfx = 06 swasta
        rowNew7.getCell(22).value = results.mulutBebasGingivitis; //V24      Mulut Bebas Gingivitis (MBG)6 swasta
        rowNew7.getCell(23).value = results.tprSMKP; //W24      Tidak Perlu Rawatan (SMKP)6 swasta
        rowNew7.getCell(25).value = results.perluFSMuridB; //Y24      6 swasta
        rowNew7.getCell(26).value = results.perluFSGigiB; //Z24      6 swasta
        rowNew7.getCell(27).value = results.perluFvMuridB; //AA24      6 swasta
        rowNew7.getCell(28).value = results.perluFvGigiB; //AB24      6 swasta
        rowNew7.getCell(29).value = results.perluPRR1MuridB; //AC24      6 swasta
        rowNew7.getCell(30).value = results.perluPRR1BGigiB; //AD24      6 swasta
        rowNew7.getCell(32).value = results.perluFSMuridB; //AF24      6 swasta
        rowNew7.getCell(33).value = results.perluFSGigiB; //AG24      6 swasta
        rowNew7.getCell(34).value = results.perluFvMuridB; //AH24      6 swasta
        rowNew7.getCell(35).value = results.perluFvGigiB; //AI24      6 swasta
        rowNew7.getCell(36).value = results.perluPRR1MuridB; //AJ24      6 swasta
        rowNew7.getCell(37).value = results.perluPRR1BGigiB; //AK24      6 swasta
        rowNew7.getCell(38).value = results.telahTampalanAntGdB; //AL24      6 swasta
        rowNew7.getCell(39).value = results.telahTampalanAntGkB; //AM24      6 swasta
        rowNew7.getCell(40).value = results.telahTampalanPosGdB; //AN24      6 swasta
        rowNew7.getCell(41).value = results.telahTampalanPosGkB; //AO24      6 swasta
        rowNew7.getCell(42).value = results.telahTampalanAmgGdB; //AP24      6 swasta
        rowNew7.getCell(43).value = results.telahTampalanAmgGkB; //AQ24      6 swasta
        rowNew7.getCell(44).value = results.jumlahTampalanB; //AR24      6 swasta
        rowNew7.getCell(45).value = results.cabutanGd; //AS24      6 swasta
        rowNew7.getCell(46).value = results.cabutanGk; //AT24      6 swasta
        rowNew7.getCell(47).value = results.jumlahCabutan; //AU24      6 swasta
        rowNew7.getCell(48).value = results.penskaleran; //AV24      6 swasta
        rowNew7.getCell(49).value = results.kesSelesai; //AW24      6 swasta
        rowNew7.getCell(50).value = results.enrolmen; //AX24      6 swasta
        rowNew7.getCell(51).value = results.peratusKesDiliputi; //AY24      6 swasta
        rowNew7.commit();

        let rowNew8 = worksheet.getRow(25);
        rowNew8.getCell(26).value = results.perluFSGigiS; //Z25      6 swasta
        rowNew8.getCell(28).value = results.perluFvGigiS; //AB25      6 swasta
        rowNew8.getCell(30).value = results.perluPRR1BGigiS; //AD25      6 swasta
        rowNew8.getCell(33).value = results.perluFSGigiS; //AG25      6 swasta
        rowNew8.getCell(35).value = results.perluFvGigiS; //AI25      6 swasta
        rowNew8.getCell(37).value = results.perluPRR1BGigiS; //AK25      6 swasta
        rowNew8.getCell(38).value = results.telahTampalanAntGdS; //AL25      6 swasta
        rowNew8.getCell(39).value = results.telahTampalanAntGkS; //AM25      6 swasta
        rowNew8.getCell(40).value = results.telahTampalanPosGdS; //AN25      6 swasta
        rowNew8.getCell(41).value = results.telahTampalanPosGkS; //AO25      6 swasta
        rowNew8.getCell(42).value = results.telahTampalanAmgGdS; //AP25      6 swasta
        rowNew8.getCell(43).value = results.telahTampalanAmgGkS; //AQ25      6 swasta
        rowNew8.getCell(44).value = results.jumlahTampalanS; //AR25      6 swasta
        rowNew8.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PGPS2202.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createMMI = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'MMI.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('MMI');

        ////  Pra Sekolah 5 tahun
        let rowNew = worksheet.getRow(14);
        rowNew.getCell(2).value = results.kedatanganBaru; //B14      Pra sekolah 5 tahun
        rowNew.getCell(3).value = results.statusGigiKekalD; //C14      Pra sekolah 5 tahun
        rowNew.getCell(4).value = results.meanD; //D14      Pra sekolah 5 tahun
        rowNew.getCell(5).value = results.bilMuridEmore0; //E14      Pra sekolah 5 tahun
        rowNew.getCell(6).value = results.prevalenceCariesAwal; //F14      Pra sekolah 5 tahun
        rowNew.getCell(7).value = results.bilBKEMoreThan0; //G14      Pra sekolah 5 tahun
        rowNew.getCell(8).value = results.peratusMuridBKEmore0; //H14      Pra sekolah 5 tahun
        rowNew.getCell(10).value = results.perluFSMuridB; //J14      Pra sekolah 5 tahun
        rowNew.getCell(11).value = results.perluFSGigiB; //K14      Pra sekolah 5 tahun
        rowNew.getCell(12).value = results.perluFvMuridB; //L14      Pra sekolah 5 tahun
        rowNew.getCell(13).value = results.perluFvGigiB; //M14      Pra sekolah 5 tahun
        rowNew.getCell(14).value = results.perluPRR1MuridB; //N14      Pra sekolah 5 tahun
        rowNew.getCell(15).value = results.perluPRR1BGigiB; //O14      Pra sekolah 5 tahun
        rowNew.getCell(17).value = results.telahFSMuridB; //Q14      Pra sekolah 5 tahun
        rowNew.getCell(18).value = results.telahFSGigiB; //R14      Pra sekolah 5 tahun
        rowNew.getCell(19).value = results.telahFVMuridB; //S14      Pra sekolah 5 tahun
        rowNew.getCell(20).value = results.telahFVGigiB; //T14      Pra sekolah 5 tahun
        rowNew.getCell(21).value = results.telahPRR1GigiB; //U14      Pra sekolah 5 tahun
        rowNew.getCell(22).value = results.telahPRR1GigiB; //V14      Pra sekolah 5 tahun
        rowNew.commit();

        let rowNew2 = worksheet.getRow(15);
        rowNew2.getCell(11).value = results.perluFSGigiS; //K15      Pra sekolah 5 tahun
        rowNew2.getCell(13).value = results.perluFvGigiS; //M15      Pra sekolah 5 tahun
        rowNew2.getCell(15).value = results.perluPRR1BGigiS; //O15      Pra sekolah 5 tahun
        rowNew2.getCell(17).value = results.telahFSMuridS; //Q15      Pra sekolah 5 tahun
        rowNew2.getCell(18).value = results.telahFSGigiS; //R15      Pra sekolah 5 tahun
        rowNew2.getCell(19).value = results.telahFVMuridS; //S15      Pra sekolah 5 tahun
        rowNew2.getCell(20).value = results.telahFVGigiS; //T15      Pra sekolah 5 tahun
        rowNew2.getCell(21).value = results.telahPRR1MuridS; //U15      Pra sekolah 5 tahun
        rowNew2.getCell(22).value = results.telahPRR1GigiS; //V15      Pra sekolah 5 tahun
        rowNew2.commit();

        //// Pras sekolah 6 tahun
        let rowNew3 = worksheet.getRow(16);
        rowNew3.getCell(2).value = results.kedatanganBaru; //B16      Pra sekolah 6 tahun
        rowNew3.getCell(3).value = results.statusGigiKekalD; //C16      Pra sekolah 6 tahun
        rowNew3.getCell(4).value = results.meanD; //D16      Pra sekolah 6 tahun
        rowNew3.getCell(5).value = results.bilMuridEmore0; //E16      Pra sekolah 6 tahun
        rowNew3.getCell(6).value = results.prevalenceCariesAwal; //F16      Pra sekolah 6 tahun
        rowNew3.getCell(7).value = results.bilBKEMoreThan0; //G16      Pra sekolah 6 tahun
        rowNew3.getCell(8).value = results.peratusMuridBKEmore0; //H16      Pra sekolah 6 tahun
        rowNew3.getCell(10).value = results.perluFSMuridB; //J16      Pra sekolah 6 tahun
        rowNew3.getCell(11).value = results.perluFSGigiB; //K16      Pra sekolah 6 tahun
        rowNew3.getCell(12).value = results.perluFvMuridB; //L16      Pra sekolah 6 tahun
        rowNew3.getCell(13).value = results.perluFvGigiB; //M16      Pra sekolah 6 tahun
        rowNew3.getCell(14).value = results.perluPRR1MuridB; //N16      Pra sekolah 6 tahun
        rowNew3.getCell(15).value = results.perluPRR1BGigiB; //O16      Pra sekolah 6 tahun
        rowNew3.getCell(17).value = results.telahFSMuridB; //Q16      Pra sekolah 6 tahun
        rowNew3.getCell(18).value = results.telahFSGigiB; //R16      Pra sekolah 6 tahun
        rowNew3.getCell(19).value = results.telahFVMuridB; //S16      Pra sekolah 6 tahun
        rowNew3.getCell(20).value = results.telahFVGigiB; //T16      Pra sekolah 6 tahun
        rowNew3.getCell(21).value = results.telahPRR1GigiB; //U16      Pra sekolah 6 tahun
        rowNew3.getCell(22).value = results.telahPRR1GigiB; //V16      Pra sekolah 6 tahun
        rowNew3.commit();

        let rowNew4 = worksheet.getRow(17);
        rowNew4.getCell(11).value = results.perluFSGigiS; //K17      Pra sekolah 6 tahun
        rowNew4.getCell(13).value = results.perluFvGigiS; //M17      Pra sekolah 6 tahun
        rowNew4.getCell(15).value = results.perluPRR1BGigiS; //O17      Pra sekolah 6 tahun
        rowNew4.getCell(17).value = results.telahFSMuridS; //Q17      Pra sekolah 6 tahun
        rowNew4.getCell(18).value = results.telahFSGigiS; //R17      Pra sekolah 6 tahun
        rowNew4.getCell(19).value = results.telahFVMuridS; //S17      Pra sekolah 6 tahun
        rowNew4.getCell(20).value = results.telahFVGigiS; //T17      Pra sekolah 6 tahun
        rowNew4.getCell(21).value = results.telahPRR1MuridS; //U17      Pra sekolah 6 tahun
        rowNew4.getCell(22).value = results.telahPRR1GigiS; //V17      Pra sekolah 6 tahun
        rowNew4.commit();

        //// Tahun 1
        let rowNew5 = worksheet.getRow(18);
        rowNew5.getCell(2).value = results.kedatanganBaru; //B18      Tahun 1
        rowNew5.getCell(3).value = results.statusGigiKekalD; //C18      Tahun 1
        rowNew5.getCell(4).value = results.meanD; //D18      Tahun 1
        rowNew5.getCell(5).value = results.bilMuridEmore0; //E18      Tahun 1
        rowNew5.getCell(6).value = results.prevalenceCariesAwal; //F18      Tahun 1
        rowNew5.getCell(7).value = results.bilBKEMoreThan0; //G18      Tahun 1
        rowNew5.getCell(8).value = results.peratusMuridBKEmore0; //H18      Tahun 1
        rowNew5.getCell(10).value = results.perluFSMuridB; //J18      Tahun 1
        rowNew5.getCell(11).value = results.perluFSGigiB; //K18      Tahun 1
        rowNew5.getCell(12).value = results.perluFvMuridB; //L18      Tahun 1
        rowNew5.getCell(13).value = results.perluFvGigiB; //M18      Tahun 1
        rowNew5.getCell(14).value = results.perluPRR1MuridB; //N18      Tahun 1
        rowNew5.getCell(15).value = results.perluPRR1BGigiB; //O18      Tahun 1
        rowNew5.getCell(17).value = results.telahFSMuridB; //Q18      Tahun 1
        rowNew5.getCell(18).value = results.telahFSGigiB; //R18      Tahun 1
        rowNew5.getCell(19).value = results.telahFVMuridB; //S18      Tahun 1
        rowNew5.getCell(20).value = results.telahFVGigiB; //T18      Tahun 1
        rowNew5.getCell(21).value = results.telahPRR1GigiB; //U18      Tahun 1
        rowNew5.getCell(22).value = results.telahPRR1GigiB; //V18      Tahun 1
        rowNew5.commit();

        let rowNew6 = worksheet.getRow(19);
        rowNew6.getCell(11).value = results.perluFSGigiS; //K19      Tahun 1
        rowNew6.getCell(13).value = results.perluFvGigiS; //M19      Tahun 1
        rowNew6.getCell(15).value = results.perluPRR1BGigiS; //O19      Tahun 1
        rowNew6.getCell(17).value = results.telahFSMuridS; //Q19      Tahun 1
        rowNew6.getCell(18).value = results.telahFSGigiS; //R19      Tahun 1
        rowNew6.getCell(19).value = results.telahFVMuridS; //S19      Tahun 1
        rowNew6.getCell(20).value = results.telahFVGigiS; //T19      Tahun 1
        rowNew6.getCell(21).value = results.telahPRR1MuridS; //U19      Tahun 1
        rowNew6.getCell(22).value = results.telahPRR1GigiS; //V19      Tahun 1
        rowNew6.commit();

        //// Tahun 2
        let rowNew7 = worksheet.getRow(20);
        rowNew7.getCell(2).value = results.kedatanganBaru; //B20      Tahun 2
        rowNew7.getCell(3).value = results.statusGigiKekalD; //C20      Tahun 2
        rowNew7.getCell(4).value = results.meanD; //D20      Tahun 2
        rowNew7.getCell(5).value = results.bilMuridEmore0; //E20      Tahun 2
        rowNew7.getCell(6).value = results.prevalenceCariesAwal; //F20      Tahun 2
        rowNew7.getCell(7).value = results.bilBKEMoreThan0; //G20      Tahun 2
        rowNew7.getCell(8).value = results.peratusMuridBKEmore0; //H20      Tahun 2
        rowNew7.getCell(10).value = results.perluFSMuridB; //J20      Tahun 2
        rowNew7.getCell(11).value = results.perluFSGigiB; //K20      Tahun 2
        rowNew7.getCell(12).value = results.perluFvMuridB; //L20      Tahun 2
        rowNew7.getCell(13).value = results.perluFvGigiB; //M20      Tahun 2
        rowNew7.getCell(14).value = results.perluPRR1MuridB; //N20      Tahun 2
        rowNew7.getCell(15).value = results.perluPRR1BGigiB; //O20      Tahun 2
        rowNew7.getCell(17).value = results.telahFSMuridB; //Q20      Tahun 2
        rowNew7.getCell(18).value = results.telahFSGigiB; //R20      Tahun 2
        rowNew7.getCell(19).value = results.telahFVMuridB; //S20      Tahun 2
        rowNew7.getCell(20).value = results.telahFVGigiB; //T20      Tahun 2
        rowNew7.getCell(21).value = results.telahPRR1GigiB; //U20      Tahun 2
        rowNew7.getCell(22).value = results.telahPRR1GigiB; //V20      Tahun 2
        rowNew7.commit();

        let rowNew8 = worksheet.getRow(21);
        rowNew8.getCell(11).value = results.perluFSGigiS; //K21      Tahun 2
        rowNew8.getCell(13).value = results.perluFvGigiS; //M21      Tahun 2
        rowNew8.getCell(15).value = results.perluPRR1BGigiS; //O21      Tahun 2
        rowNew8.getCell(17).value = results.telahFSMuridS; //Q21      Tahun 2
        rowNew8.getCell(18).value = results.telahFSGigiS; //R21      Tahun 2
        rowNew8.getCell(19).value = results.telahFVMuridS; //S21      Tahun 2
        rowNew8.getCell(20).value = results.telahFVGigiS; //T21      Tahun 2
        rowNew8.getCell(21).value = results.telahPRR1MuridS; //U21      Tahun 2
        rowNew8.getCell(22).value = results.telahPRR1GigiS; //V21      Tahun 2
        rowNew8.commit();

        ///  Tahun 3
        let rowNew9 = worksheet.getRow(22);
        rowNew9.getCell(2).value = results.kedatanganBaru; //B22      Tahun 3
        rowNew9.getCell(3).value = results.statusGigiKekalD; //C22      Tahun 3
        rowNew9.getCell(4).value = results.meanD; //D22      Tahun 3
        rowNew9.getCell(5).value = results.bilMuridEmore0; //E22      Tahun 3
        rowNew9.getCell(6).value = results.prevalenceCariesAwal; //F22      Tahun 3
        rowNew9.getCell(7).value = results.bilBKEMoreThan0; //G22      Tahun 3
        rowNew9.getCell(8).value = results.peratusMuridBKEmore0; //H22      Tahun 3
        rowNew9.getCell(10).value = results.perluFSMuridB; //J22      Tahun 3
        rowNew9.getCell(11).value = results.perluFSGigiB; //K22      Tahun 3
        rowNew9.getCell(12).value = results.perluFvMuridB; //L22      Tahun 3
        rowNew9.getCell(13).value = results.perluFvGigiB; //M22      Tahun 3
        rowNew9.getCell(14).value = results.perluPRR1MuridB; //N22      Tahun 3
        rowNew9.getCell(15).value = results.perluPRR1BGigiB; //O22      Tahun 3
        rowNew9.getCell(17).value = results.telahFSMuridB; //Q22      Tahun 3
        rowNew9.getCell(18).value = results.telahFSGigiB; //R22      Tahun 3
        rowNew9.getCell(19).value = results.telahFVMuridB; //S22      Tahun 3
        rowNew9.getCell(20).value = results.telahFVGigiB; //T22      Tahun 3
        rowNew9.getCell(21).value = results.telahPRR1GigiB; //U22      Tahun 3
        rowNew9.getCell(22).value = results.telahPRR1GigiB; //V22      Tahun 3
        rowNew9.commit();

        let rowNew10 = worksheet.getRow(23);
        rowNew10.getCell(11).value = results.perluFSGigiS; //K23      Tahun 3
        rowNew10.getCell(13).value = results.perluFvGigiS; //M23      Tahun 3
        rowNew10.getCell(15).value = results.perluPRR1BGigiS; //O23      Tahun 3
        rowNew10.getCell(17).value = results.telahFSMuridS; //Q23      Tahun 3
        rowNew10.getCell(18).value = results.telahFSGigiS; //R23      Tahun 3
        rowNew10.getCell(19).value = results.telahFVMuridS; //S23      Tahun 3
        rowNew10.getCell(20).value = results.telahFVGigiS; //T23      Tahun 3
        rowNew10.getCell(21).value = results.telahPRR1MuridS; //U23      Tahun 3
        rowNew10.getCell(22).value = results.telahPRR1GigiS; //V23      Tahun 3
        rowNew10.commit();

        /// Tahun 4
        let rowNew11 = worksheet.getRow(24);
        rowNew11.getCell(2).value = results.kedatanganBaru; //B24      Tahun 4
        rowNew11.getCell(3).value = results.statusGigiKekalD; //C24      Tahun 4
        rowNew11.getCell(4).value = results.meanD; //D24      Tahun 4
        rowNew11.getCell(5).value = results.bilMuridEmore0; //E24      Tahun 4
        rowNew11.getCell(6).value = results.prevalenceCariesAwal; //F24      Tahun 4
        rowNew11.getCell(7).value = results.bilBKEMoreThan0; //G24      Tahun 4
        rowNew11.getCell(8).value = results.peratusMuridBKEmore0; //H24      Tahun 4
        rowNew11.getCell(10).value = results.perluFSMuridB; //J24      Tahun 4
        rowNew11.getCell(11).value = results.perluFSGigiB; //K24      Tahun 4
        rowNew11.getCell(12).value = results.perluFvMuridB; //L24      Tahun 4
        rowNew11.getCell(13).value = results.perluFvGigiB; //M24      Tahun 4
        rowNew11.getCell(14).value = results.perluPRR1MuridB; //N24      Tahun 4
        rowNew11.getCell(15).value = results.perluPRR1BGigiB; //O24      Tahun 4
        rowNew11.getCell(17).value = results.telahFSMuridB; //Q24      Tahun 4
        rowNew11.getCell(18).value = results.telahFSGigiB; //R24      Tahun 4
        rowNew11.getCell(19).value = results.telahFVMuridB; //S24      Tahun 4
        rowNew11.getCell(20).value = results.telahFVGigiB; //T24      Tahun 4
        rowNew11.getCell(21).value = results.telahPRR1GigiB; //U24      Tahun 4
        rowNew11.getCell(22).value = results.telahPRR1GigiB; //V24      Tahun 4
        rowNew11.commit();

        let rowNew12 = worksheet.getRow(25);
        rowNew12.getCell(11).value = results.perluFSGigiS; //K25      Tahun 4
        rowNew12.getCell(13).value = results.perluFvGigiS; //M25      Tahun 4
        rowNew12.getCell(15).value = results.perluPRR1BGigiS; //O25      Tahun 4
        rowNew12.getCell(17).value = results.telahFSMuridS; //Q25      Tahun 4
        rowNew12.getCell(18).value = results.telahFSGigiS; //R25      Tahun 4
        rowNew12.getCell(19).value = results.telahFVMuridS; //S25      Tahun 4
        rowNew12.getCell(20).value = results.telahFVGigiS; //T25      Tahun 4
        rowNew12.getCell(21).value = results.telahPRR1MuridS; //U25      Tahun 4
        rowNew12.getCell(22).value = results.telahPRR1GigiS; //V25      Tahun 4
        rowNew12.commit();

        /// Tahun 5
        let rowNew13 = worksheet.getRow(26);
        rowNew13.getCell(2).value = results.kedatanganBaru; //B26      Tahun 5
        rowNew13.getCell(3).value = results.statusGigiKekalD; //C26      Tahun 5
        rowNew13.getCell(4).value = results.meanD; //D26      Tahun 5
        rowNew13.getCell(5).value = results.bilMuridEmore0; //E26      Tahun 5
        rowNew13.getCell(6).value = results.prevalenceCariesAwal; //F26      Tahun 5
        rowNew13.getCell(7).value = results.bilBKEMoreThan0; //G26      Tahun 5
        rowNew13.getCell(8).value = results.peratusMuridBKEmore0; //H26      Tahun 5
        rowNew13.getCell(10).value = results.perluFSMuridB; //J26      Tahun 5
        rowNew13.getCell(11).value = results.perluFSGigiB; //K26      Tahun 5
        rowNew13.getCell(12).value = results.perluFvMuridB; //L26      Tahun 5
        rowNew13.getCell(13).value = results.perluFvGigiB; //M26      Tahun 5
        rowNew13.getCell(14).value = results.perluPRR1MuridB; //N26      Tahun 5
        rowNew13.getCell(15).value = results.perluPRR1BGigiB; //O26      Tahun 5
        rowNew13.getCell(17).value = results.telahFSMuridB; //Q26      Tahun 5
        rowNew13.getCell(18).value = results.telahFSGigiB; //R26      Tahun 5
        rowNew13.getCell(19).value = results.telahFVMuridB; //S26      Tahun 5
        rowNew13.getCell(20).value = results.telahFVGigiB; //T26      Tahun 5
        rowNew13.getCell(21).value = results.telahPRR1GigiB; //U26      Tahun 5
        rowNew13.getCell(22).value = results.telahPRR1GigiB; //V26      Tahun 5
        rowNew13.commit();

        let rowNew14 = worksheet.getRow(27);
        rowNew14.getCell(11).value = results.perluFSGigiS; //K27      Tahun 5
        rowNew14.getCell(13).value = results.perluFvGigiS; //M27      Tahun 5
        rowNew14.getCell(15).value = results.perluPRR1BGigiS; //O27      Tahun 5
        rowNew14.getCell(17).value = results.telahFSMuridS; //Q27      Tahun 5
        rowNew14.getCell(18).value = results.telahFSGigiS; //R27      Tahun 5
        rowNew14.getCell(19).value = results.telahFVMuridS; //S27      Tahun 5
        rowNew14.getCell(20).value = results.telahFVGigiS; //T27      Tahun 5
        rowNew14.getCell(21).value = results.telahPRR1MuridS; //U27      Tahun 5
        rowNew14.getCell(22).value = results.telahPRR1GigiS; //V27      Tahun 5
        rowNew14.commit();

        //// Tahun 6/Peralihan
        let rowNew15 = worksheet.getRow(28);
        rowNew15.getCell(2).value = results.kedatanganBaru; //B28      Tahun 6"
        rowNew15.getCell(3).value = results.statusGigiKekalD; //C28      Tahun 6
        rowNew15.getCell(4).value = results.meanD; //D28      Tahun 6
        rowNew15.getCell(5).value = results.bilMuridEmore0; //E28      Tahun 6
        rowNew15.getCell(6).value = results.prevalenceCariesAwal; //F28      Tahun 6
        rowNew15.getCell(7).value = results.bilBKEMoreThan0; //G28      Tahun 6
        rowNew15.getCell(8).value = results.peratusMuridBKEmore0; //H28      Tahun 6
        rowNew15.getCell(10).value = results.perluFSMuridB; //J28      Tahun 6
        rowNew15.getCell(11).value = results.perluFSGigiB; //K28      Tahun 6
        rowNew15.getCell(12).value = results.perluFvMuridB; //L28      Tahun 6
        rowNew15.getCell(13).value = results.perluFvGigiB; //M28      Tahun 6
        rowNew15.getCell(14).value = results.perluPRR1MuridB; //N28      Tahun 6
        rowNew15.getCell(15).value = results.perluPRR1BGigiB; //O28      Tahun 6
        rowNew15.getCell(17).value = results.telahFSMuridB; //Q28      Tahun 6
        rowNew15.getCell(18).value = results.telahFSGigiB; //R28      Tahun 6
        rowNew15.getCell(19).value = results.telahFVMuridB; //S28      Tahun 6
        rowNew15.getCell(20).value = results.telahFVGigiB; //T28      Tahun 6
        rowNew15.getCell(21).value = results.telahPRR1GigiB; //U28      Tahun 6
        rowNew15.getCell(22).value = results.telahPRR1GigiB; //V28      Tahun 6
        rowNew15.commit();

        let rowNew16 = worksheet.getRow(29);
        rowNew16.getCell(11).value = results.perluFSGigiS; //K29      Tahun 6
        rowNew16.getCell(13).value = results.perluFvGigiS; //M29      Tahun 6
        rowNew16.getCell(15).value = results.perluPRR1BGigiS; //O29      Tahun 6
        rowNew16.getCell(17).value = results.telahFSMuridS; //Q29      Tahun 6
        rowNew16.getCell(18).value = results.telahFSGigiS; //R29      Tahun 6
        rowNew16.getCell(19).value = results.telahFVMuridS; //S29      Tahun 6
        rowNew16.getCell(20).value = results.telahFVGigiS; //T29      Tahun 6
        rowNew16.getCell(21).value = results.telahPRR1MuridS; //U29      Tahun 6
        rowNew16.getCell(22).value = results.telahPRR1GigiS; //V29      Tahun 6
        rowNew16.commit();

        ///KKI
        let rowNew17 = worksheet.getRow(30);
        rowNew17.getCell(2).value = results.kedatanganBaru; //B30      KKI
        rowNew17.getCell(3).value = results.statusGigiKekalD; //C30      KKI
        rowNew17.getCell(4).value = results.meanD; //D30      KKI
        rowNew17.getCell(5).value = results.bilMuridEmore0; //E30      KKI
        rowNew17.getCell(6).value = results.prevalenceCariesAwal; //F30      KKI
        rowNew17.getCell(7).value = results.bilBKEMoreThan0; //G30      KKI
        rowNew17.getCell(8).value = results.peratusMuridBKEmore0; //H30      KKI
        rowNew17.getCell(10).value = results.perluFSMuridB; //J30      KKI
        rowNew17.getCell(11).value = results.perluFSGigiB; //K30      KKI
        rowNew17.getCell(12).value = results.perluFvMuridB; //L30      KKI
        rowNew17.getCell(13).value = results.perluFvGigiB; //M30      KKI
        rowNew17.getCell(14).value = results.perluPRR1MuridB; //N30      KKI
        rowNew17.getCell(15).value = results.perluPRR1BGigiB; //O30      KKI
        rowNew17.getCell(17).value = results.telahFSMuridB; //Q30      KKI
        rowNew17.getCell(18).value = results.telahFSGigiB; //R30      KKI
        rowNew17.getCell(19).value = results.telahFVMuridB; //S30      KKI
        rowNew17.getCell(20).value = results.telahFVGigiB; //T30      KKI
        rowNew17.getCell(21).value = results.telahPRR1GigiB; //U30      KKI
        rowNew17.getCell(22).value = results.telahPRR1GigiB; //V30      KKI
        rowNew17.commit();

        let rowNew18 = worksheet.getRow(31);
        rowNew18.getCell(11).value = results.perluFSGigiS; //K31      KKI
        rowNew18.getCell(13).value = results.perluFvGigiS; //M31      KKI
        rowNew18.getCell(15).value = results.perluPRR1BGigiS; //O31      KKI
        rowNew18.getCell(17).value = results.telahFSMuridS; //Q31      KKI
        rowNew18.getCell(18).value = results.telahFSGigiS; //R31      KKI
        rowNew18.getCell(19).value = results.telahFVMuridS; //S31      KKI
        rowNew18.getCell(20).value = results.telahFVGigiS; //T31      KKI
        rowNew18.getCell(21).value = results.telahPRR1MuridS; //U31      KKI
        rowNew18.getCell(22).value = results.telahPRR1GigiS; //V31      KKI
        rowNew18.commit();

        /// Others
        let rowNew19 = worksheet.getRow(5);
        rowNew19.getCell(2).value = results.negeri; //B5      negeri
        rowNew19.commit();

        let rowNew20 = worksheet.getRow(6);
        rowNew20.getCell(6).value = results.jumlahSRnegeri; //F6      Jumlah SR seluruh negeri:
        rowNew20.getCell(11).value = results.tahun; //K6      Tahun:
        rowNew20.commit();

        let rowNew21 = worksheet.getRow(7);
        rowNew21.getCell(6).value = results.jumlahEnrolmenSr; //F7      Jumlah enrolmen SR seluruh negeri:
        rowNew21.getCell(11).value = results.sekolah; //K7      Sekolah:
        rowNew21.commit();

        let rowNew22 = worksheet.getRow(8);
        rowNew22.getCell(6).value = results.jumlahSrTerlibatMMI; //F8      Jumlah SR yang terlibat MMI:
        rowNew22.getCell(11).value = results.klinik; //K8      Klinik:
        rowNew22.commit();

        // // 5 thn kerajaaan
        // let rowNew = worksheet.getRow(17);
        // rowNew.getCell(26).value = results.perluFSGigiS; //Z17      5 tahun kerajaan"
        // rowNew.getCell(28).value = results.perluFvGigiS; //AB17      5 tahun kerajaan
        // rowNew.getCell(30).value = results.perluPRR1BGigiS; //AD17      5 tahun kerajaan
        // rowNew.getCell(33).value = results.perluFSGigiS; //AG17      5 tahun kerajaan
        // rowNew.getCell(35).value = results.perluFvGigiS; //AI17      5 tahun kerajaan
        // rowNew.getCell(37).value = results.perluPRR1BGigiS; //AK17      5 tahun kerajaan
        // rowNew.getCell(38).value = results.telahTampalanAntGdS; //AL17      5 tahun kerajaan
        // rowNew.getCell(39).value = results.telahTampalanAntGkS; //AM17      5 tahun kerajaan
        // rowNew.getCell(40).value = results.telahTampalanPosGdS; //AN17      5 tahun kerajaan
        // rowNew.getCell(41).value = results.telahTampalanPosGkS; //AO17      5 tahun kerajaan
        // rowNew.getCell(42).value = results.telahTampalanAmgGdS; //AP17      5 tahun kerajaan
        // rowNew.getCell(43).value = results.telahTampalanAmgGkS; //AQ17      5 tahun kerajaan
        // rowNew.getCell(44).value = results.jumlahTampalanS; //AR17      5 tahun kerajaan

        // // 6 thn kerajaan
        // let rowNew2 = worksheet.getRow(19);
        // rowNew2.getCell(26).value = results.perluFSGigiS; //Z19      6 kerajaan"
        // rowNew2.getCell(28).value = results.perluFvGigiS; //AB19      6 kerajaan
        // rowNew2.getCell(30).value = results.perluPRR1BGigiS; //AD19      6 kerajaan
        // rowNew2.getCell(33).value = results.perluFSGigiS; //AG19      6 kerajaan
        // rowNew2.getCell(35).value = results.perluFvGigiS; //AI19      6 kerajaan
        // rowNew2.getCell(37).value = results.perluPRR1BGigiS; //AK19      6 kerajaan
        // rowNew2.getCell(38).value = results.telahTampalanAntGdS; //AL19      6 kerajaan
        // rowNew2.getCell(39).value = results.telahTampalanAntGkS; //AM19      6 kerajaan
        // rowNew2.getCell(40).value = results.telahTampalanPosGdS; //AN19      6 kerajaan
        // rowNew2.getCell(41).value = results.telahTampalanPosGkS; //AO19      6 kerajaan
        // rowNew2.getCell(42).value = results.telahTampalanAmgGdS; //AP19      6 kerajaan
        // rowNew2.getCell(43).value = results.telahTampalanAmgGkS; //AQ19      6 kerajaan
        // rowNew2.getCell(44).value = results.jumlahTampalanS; //AR19      6 kerajaan

        // // 5 thn swasta
        // let rowNew3 = worksheet.getRow(23);
        // rowNew3.getCell(26).value = results.perluFSGigiS; //Z23      5 tahun swasta
        // rowNew3.getCell(28).value = results.perluFvGigiS; //AB23      5 tahun swasta
        // rowNew3.getCell(30).value = results.perluPRR1BGigiS; //AD23      5 tahun swasta
        // rowNew3.getCell(33).value = results.perluFSGigiS; //AG23      5 tahun swasta
        // rowNew3.getCell(35).value = results.perluFvGigiS; //AI23      5 tahun swasta
        // rowNew3.getCell(37).value = results.perluPRR1BGigiS; //AK23      5 tahun swasta
        // rowNew3.getCell(38).value = results.telahTampalanAntGdS; //AL23      5 tahun swasta
        // rowNew3.getCell(39).value = results.telahTampalanAntGkS; //AM23      5 tahun swasta
        // rowNew3.getCell(40).value = results.telahTampalanPosGdS; //AN23      5 tahun swasta
        // rowNew3.getCell(41).value = results.telahTampalanPosGkS; //AO23      5 tahun swasta
        // rowNew3.getCell(42).value = results.telahTampalanAmgGdS; //AP23      5 tahun swasta
        // rowNew3.getCell(43).value = results.telahTampalanAmgGkS; //AQ23      5 tahun swasta
        // rowNew3.getCell(44).value = results.jumlahTampalanS; //AR23      5 tahun swasta

        // // 6 thn swasta
        // let rowNew4 = worksheet.getRow(25);
        // rowNew4.getCell(26).value = results.perluFSGigiS; //Z25      6 swasta"
        // rowNew4.getCell(28).value = results.perluFvGigiS; //AB25      6 swasta
        // rowNew4.getCell(30).value = results.perluPRR1BGigiS; //AD25      6 swasta
        // rowNew4.getCell(33).value = results.perluFSGigiS; //AG25      6 swasta
        // rowNew4.getCell(35).value = results.perluFvGigiS; //AI25      6 swasta
        // rowNew4.getCell(37).value = results.perluPRR1BGigiS; //AK25      6 swasta
        // rowNew4.getCell(38).value = results.telahTampalanAntGdS; //AL25      6 swasta
        // rowNew4.getCell(39).value = results.telahTampalanAntGkS; //AM25      6 swasta
        // rowNew4.getCell(40).value = results.telahTampalanPosGdS; //AN25      6 swasta
        // rowNew4.getCell(41).value = results.telahTampalanPosGkS; //AO25      6 swasta
        // rowNew4.getCell(42).value = results.telahTampalanAmgGdS; //AP25      6 swasta
        // rowNew4.getCell(43).value = results.telahTampalanAmgGkS; //AQ25      6 swasta
        // rowNew4.getCell(44).value = results.jumlahTampalanS; //AR25      6 swasta

        // let rowNew5 = worksheet.getRow(5);
        // rowNew5.getCell(2).value =   results.negeri; //B5      negeri"
        // rowNew5.commit();

        // let rowNew6 = worksheet.getRow(6);
        // rowNew6.getCell(6).value =   results.jumlahSRnegeri; //F6      Jumlah SR seluruh negeri: "
        // rowNew6.commit();

        // let rowNew7 = worksheet.getRow(7);
        // rowNew7.getCell(6).value =   results.jumlahEnrolmenSr; //F7      Jumlah enrolmen SR seluruh negeri:"
        // rowNew7.commit();

        // let rowNew8 = worksheet.getRow(8);
        // rowNew8.getCell(6).value =   results.jumlahSrTerlibatMMI; //F8      Jumlah SR yang terlibat MMI:"
        // rowNew8.getCell(11).value =   results.tahun; //K6      Tahun:
        // rowNew8.getCell(11).value =   results.sekolah; //K7      Sekolah:
        // rowNew8.getCell(11).value =   results.klinik; //K8      Klinik:
        // rowNew8.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-MMI.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createOA = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'OA.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('OA');

        //Toddler OA RETEN
        let rowNew = worksheet.getRow(19);
        rowNew.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Toddler OA
        rowNew.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Toddler OA
        rowNew.getCell(4).value = results.dStatusdfx; //d Status dfx Toddler OA
        rowNew.getCell(5).value = results.fStatusdfx; //f Status dfx Toddler OA
        rowNew.getCell(6).value = results.xStatusdfx; //x Status dfx Toddler OA
        rowNew.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Toddler OA
        rowNew.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Toddler OA
        rowNew.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Toddler OA
        rowNew.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Toddler OA
        rowNew.getCell(14).value = results.skorPlakA; //Skor Plak A Toddler OA
        rowNew.getCell(15).value = results.skorPlakC; //Skor Plak C Toddler OA
        rowNew.getCell(16).value = results.skorPlakE; //Skor Plak E Toddler OA
        rowNew.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = 0) Toddler OA
        rowNew.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Toddler OA
        rowNew.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Toddler OA
        rowNew.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Toddler OA
        rowNew.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Toddler OA
        rowNew.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Toddler OA
        rowNew.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Toddler OA
        rowNew.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Toddler OA
        rowNew.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Toddler OA
        rowNew.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Toddler OA
        rowNew.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Toddler OA
        rowNew.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Toddler OA
        rowNew.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Toddler OA
        rowNew.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Toddler OA
        rowNew.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Toddler OA
        rowNew.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Toddler OA
        rowNew.getCell(48).value = results.penskaleran; //Penskelaran Toddler OA
        rowNew.getCell(49).value = results.txPerio; //Rawatan Periodontik Toddler OA
        rowNew.getCell(50).value = results.txEndo; //Rawatan Endodontik Toddler OA
        rowNew.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Toddler OA
        rowNew.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Toddler OA
        rowNew.getCell(53).value = results.abses; //Abses Toddler OA
        rowNew.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Toddler OA
        rowNew.getCell(55).value = results.fracture; //Fraktur Toddler OA
        rowNew.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Toddler OA
        rowNew.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Toddler OA
        rowNew.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Toddler OA
        rowNew.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Toddler OA
        rowNew.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Toddler OA
        rowNew.getCell(61).value = results.lainLain; //lain-lain Toddler OA
        rowNew.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Toddler OA
        rowNew.getCell(63).value = results.caseCompleted; //kes selesai Toddler OA
        rowNew.getCell(64).value = results.lowCRA; //rendah CRA Toddler OA
        rowNew.getCell(65).value = results.moderateCRA; //sederhana CRA Toddler OA
        rowNew.getCell(66).value = results.highCRA; //tinggi CRA Toddler OA
        rowNew.commit();

        let rowNew2 = worksheet.getRow(20);
        rowNew2.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Toddler OA
        rowNew2.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Toddler OA
        rowNew2.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Toddler OA
        rowNew2.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Toddler OA
        rowNew2.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Toddler OA
        rowNew2.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Toddler OA
        rowNew2.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Toddler OA
        rowNew2.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Toddler OA
        rowNew2.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Toddler OA
        rowNew2.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Toddler OA
        rowNew2.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Toddler OA
        rowNew2.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Toddler OA
        rowNew2.commit();

        //Pra Sekolah RETEN
        let rowNew3 = worksheet.getRow(21);
        rowNew3.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Pra Sekolah
        rowNew3.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Pra Sekolah
        rowNew3.getCell(4).value = results.dStatusdfx; //d Status dfx Pra Sekolah
        rowNew3.getCell(5).value = results.fStatusdfx; //f Status dfx Pra Sekolah
        rowNew3.getCell(6).value = results.xStatusdfx; //x Status dfx Pra Sekolah
        rowNew3.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Pra Sekolah
        rowNew3.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Pra Sekolah
        rowNew3.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Pra Sekolah
        rowNew3.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Pra Sekolah
        rowNew3.getCell(14).value = results.skorPlakA; //Skor Plak A Pra Sekolah
        rowNew3.getCell(15).value = results.skorPlakC; //Skor Plak C Pra Sekolah
        rowNew3.getCell(16).value = results.skorPlakE; //Skor Plak E Pra Sekolah
        rowNew3.getCell(17).value = results.skorGIS0; //Skor GIS 0 Pra Sekolah
        rowNew3.getCell(18).value = results.skorGIS1; //Skor GIS 1 Pra Sekolah
        rowNew3.getCell(19).value = results.skorGIS2; //Skor GIS 2 Pra Sekolah
        rowNew3.getCell(20).value = results.skorGIS3; //Skor GIS 3 Pra Sekolah
        rowNew3.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Pra Sekolah
        rowNew3.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Pra Sekolah
        rowNew3.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Pra Sekolah
        rowNew3.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Pra Sekolah
        rowNew3.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Pra Sekolah
        rowNew3.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Pra Sekolah
        rowNew3.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Pra Sekolah
        rowNew3.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Pra Sekolah
        rowNew3.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Pra Sekolah
        rowNew3.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Pra Sekolah
        rowNew3.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Pra Sekolah
        rowNew3.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Pra Sekolah
        rowNew3.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Pra Sekolah
        rowNew3.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Pra Sekolah
        rowNew3.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Pra Sekolah
        rowNew3.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Pra Sekolah
        rowNew3.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Pra Sekolah
        rowNew3.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Pra Sekolah
        rowNew3.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Pra Sekolah
        rowNew3.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Pra Sekolah
        rowNew3.getCell(48).value = results.penskaleran; //Penskelaran Pra Sekolah
        rowNew3.getCell(49).value = results.txPerio; //Rawatan Periodontik Pra Sekolah
        rowNew3.getCell(50).value = results.txEndo; //Rawatan Endodontik Pra Sekolah
        rowNew3.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Pra Sekolah
        rowNew3.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Pra Sekolah
        rowNew3.getCell(53).value = results.abses; //Abses Pra Sekolah
        rowNew3.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Pra Sekolah
        rowNew3.getCell(55).value = results.fracture; //Fraktur Pra Sekolah
        rowNew3.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Pra Sekolah
        rowNew3.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Pra Sekolah
        rowNew3.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Pra Sekolah
        rowNew3.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Pra Sekolah
        rowNew3.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Pra Sekolah
        rowNew3.getCell(61).value = results.lainLain; //lain-lain Pra Sekolah
        rowNew3.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Pra Sekolah
        rowNew3.getCell(63).value = results.caseCompleted; //kes selesai Pra Sekolah
        rowNew3.getCell(64).value = results.lowCRA; //rendah CRA Pra Sekolah
        rowNew3.getCell(65).value = results.moderateCRA; //sederhana CRA Pra Sekolah
        rowNew3.getCell(66).value = results.highCRA; //tinggi CRA Pra Sekolah
        rowNew3.commit();

        let rowNew4 = worksheet.getRow(22);
        rowNew4.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Pra Sekolah
        rowNew4.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Pra Sekolah
        rowNew4.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Pra Sekolah
        rowNew4.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Pra Sekolah
        rowNew4.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Pra Sekolah
        rowNew4.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Pra Sekolah
        rowNew4.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Pra Sekolah
        rowNew4.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Pra Sekolah
        rowNew4.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Pra Sekolah
        rowNew4.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Pra Sekolah
        rowNew4.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Pra Sekolah
        rowNew4.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Pra Sekolah
        rowNew4.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Pra Sekolah
        rowNew4.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Pra Sekolah
        rowNew4.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Pra Sekolah
        rowNew4.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Pra Sekolah
        rowNew4.commit();

        //Sekolah Rendah RETEN
        let rowNew5 = worksheet.getRow(23);
        rowNew5.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Sekolah Rendah
        rowNew5.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Sekolah Rendah
        rowNew5.getCell(4).value = results.dStatusdfx; //d Status dfx Sekolah Rendah
        rowNew5.getCell(5).value = results.fStatusdfx; //f Status dfx Sekolah Rendah
        rowNew5.getCell(6).value = results.xStatusdfx; //x Status dfx Sekolah Rendah
        rowNew5.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Sekolah Rendah
        rowNew5.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Sekolah Rendah
        rowNew5.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Sekolah Rendah
        rowNew5.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Sekolah Rendah
        rowNew5.getCell(14).value = results.skorPlakA; //Skor Plak A Sekolah Rendah
        rowNew5.getCell(15).value = results.skorPlakC; //Skor Plak C Sekolah Rendah
        rowNew5.getCell(16).value = results.skorPlakE; //Skor Plak E Sekolah Rendah
        rowNew5.getCell(17).value = results.skorGIS0; //Skor GIS 0 Sekolah Rendah
        rowNew5.getCell(18).value = results.skorGIS1; //Skor GIS 1 Sekolah Rendah
        rowNew5.getCell(19).value = results.skorGIS2; //Skor GIS 2 Sekolah Rendah
        rowNew5.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Sekolah Rendah
        rowNew5.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Sekolah Rendah
        rowNew5.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Sekolah Rendah
        rowNew5.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Sekolah Rendah
        rowNew5.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Sekolah Rendah
        rowNew5.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Sekolah Rendah
        rowNew5.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Sekolah Rendah
        rowNew5.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Sekolah Rendah
        rowNew5.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Sekolah Rendah
        rowNew5.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Sekolah Rendah
        rowNew5.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Sekolah Rendah
        rowNew5.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Sekolah Rendah
        rowNew5.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Sekolah Rendah
        rowNew5.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Sekolah Rendah
        rowNew5.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Sekolah Rendah
        rowNew5.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Sekolah Rendah
        rowNew5.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Sekolah Rendah
        rowNew5.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Sekolah Rendah
        rowNew5.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Sekolah Rendah
        rowNew5.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Sekolah Rendah
        rowNew5.getCell(48).value = results.penskaleran; //Penskelaran Sekolah Rendah
        rowNew5.getCell(49).value = results.txPerio; //Rawatan Periodontik Sekolah Rendah
        rowNew5.getCell(50).value = results.txEndo; //Rawatan Endodontik Sekolah Rendah
        rowNew5.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Sekolah Rendah
        rowNew5.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Sekolah Rendah
        rowNew5.getCell(53).value = results.abses; //Abses Sekolah Rendah
        rowNew5.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Sekolah Rendah
        rowNew5.getCell(55).value = results.fracture; //Fraktur Sekolah Rendah
        rowNew5.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Sekolah Rendah
        rowNew5.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Sekolah Rendah
        rowNew5.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Sekolah Rendah
        rowNew5.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Sekolah Rendah
        rowNew5.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Sekolah Rendah
        rowNew5.getCell(61).value = results.lainLain; //lain-lain Sekolah Rendah
        rowNew5.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Sekolah Rendah
        rowNew5.getCell(63).value = results.caseCompleted; //kes selesai Sekolah Rendah
        rowNew5.getCell(64).value = results.lowCRA; //rendah CRA Sekolah Rendah
        rowNew5.getCell(65).value = results.moderateCRA; //sederhana CRA Sekolah Rendah
        rowNew5.getCell(66).value = results.highCRA; //tinggi CRA Sekolah Rendah
        rowNew5.commit();

        let rowNew6 = worksheet.getRow(24);
        rowNew6.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Sekolah Rendah
        rowNew6.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Sekolah Rendah
        rowNew6.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Sekolah Rendah
        rowNew6.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Sekolah Rendah
        rowNew6.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Sekolah Rendah
        rowNew6.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Sekolah Rendah
        rowNew6.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Sekolah Rendah
        rowNew6.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Sekolah Rendah
        rowNew6.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Sekolah Rendah
        rowNew6.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Sekolah Rendah
        rowNew6.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Sekolah Rendah
        rowNew6.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Sekolah Rendah
        rowNew6.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Sekolah Rendah
        rowNew6.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Sekolah Rendah
        rowNew6.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Sekolah Rendah
        rowNew6.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Sekolah Rendah
        rowNew6.commit();

        //Sekolah Menengah RETEN
        let rowNew7 = worksheet.getRow(25);
        rowNew7.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Sekolah Menengah
        rowNew7.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Sekolah Menengah
        rowNew7.getCell(4).value = results.dStatusdfx; //d Status dfx Sekolah Menengah
        rowNew7.getCell(5).value = results.fStatusdfx; //f Status dfx Sekolah Menengah
        rowNew7.getCell(6).value = results.xStatusdfx; //x Status dfx Sekolah Menengah
        rowNew7.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Sekolah Menengah
        rowNew7.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Sekolah Menengah
        rowNew7.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Sekolah Menengah
        rowNew7.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Sekolah Menengah
        rowNew7.getCell(14).value = results.skorPlakA; //Skor Plak A Sekolah Menengah
        rowNew7.getCell(15).value = results.skorPlakC; //Skor Plak C Sekolah Menengah
        rowNew7.getCell(16).value = results.skorPlakE; //Skor Plak E Sekolah Menengah
        rowNew7.getCell(17).value = results.skorGIS0; //Skor GIS 0 Sekolah Menengah
        rowNew7.getCell(18).value = results.skorGIS1; //Skor GIS 1 Sekolah Menengah
        rowNew7.getCell(19).value = results.skorGIS2; //Skor GIS 2 Sekolah Menengah
        rowNew7.getCell(20).value = results.skorGIS3; //Skor GIS 3 Sekolah Menengah
        rowNew7.getCell(21).value = results.skorBPE0; //Skor BPE 0 Sekolah Menengah
        rowNew7.getCell(22).value = results.skorBPE1; //Skor BPE 1 Sekolah Menengah
        rowNew7.getCell(23).value = results.skorBPE2; //Skor BPE 2 Sekolah Menengah
        rowNew7.getCell(24).value = results.skorBPE3; //Skor BPE 3 Sekolah Menengah
        rowNew7.getCell(25).value = results.skorBPE4; //Skor BPE 4 Sekolah Menengah
        rowNew7.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Sekolah Menengah
        rowNew7.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Sekolah Menengah
        rowNew7.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Sekolah Menengah
        rowNew7.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Sekolah Menengah
        rowNew7.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Sekolah Menengah
        rowNew7.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Sekolah Menengah
        rowNew7.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Sekolah Menengah
        rowNew7.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Sekolah Menengah
        rowNew7.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Sekolah Menengah
        rowNew7.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Sekolah Menengah
        rowNew7.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Sekolah Menengah
        rowNew7.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Sekolah Menengah
        rowNew7.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Sekolah Menengah
        rowNew7.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Sekolah Menengah
        rowNew7.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Sekolah Menengah
        rowNew7.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Sekolah Menengah
        rowNew7.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Sekolah Menengah
        rowNew7.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Sekolah Menengah
        rowNew7.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Sekolah Menengah
        rowNew7.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Sekolah Menengah
        rowNew7.getCell(48).value = results.penskaleran; //Penskelaran Sekolah Menengah
        rowNew7.getCell(49).value = results.txPerio; //Rawatan Periodontik Sekolah Menengah
        rowNew7.getCell(50).value = results.txEndo; //Rawatan Endodontik Sekolah Menengah
        rowNew7.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Sekolah Menengah
        rowNew7.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Sekolah Menengah
        rowNew7.getCell(53).value = results.abses; //Abses Sekolah Menengah
        rowNew7.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Sekolah Menengah
        rowNew7.getCell(55).value = results.fracture; //Fraktur Sekolah Menengah
        rowNew7.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Sekolah Menengah
        rowNew7.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Sekolah Menengah
        rowNew7.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Sekolah Menengah
        rowNew7.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Sekolah Menengah
        rowNew7.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Sekolah Menengah
        rowNew7.getCell(61).value = results.lainLain; //lain-lain Sekolah Menengah
        rowNew7.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Sekolah Menengah
        rowNew7.getCell(63).value = results.caseCompleted; //kes selesai Sekolah Menengah
        rowNew7.getCell(64).value = results.lowCRA; //rendah CRA Sekolah Menengah
        rowNew7.getCell(65).value = results.moderateCRA; //sederhana CRA Sekolah Menengah
        rowNew7.getCell(66).value = results.highCRA; //tinggi CRA Sekolah Menengah
        rowNew7.commit();

        let rowNew8 = worksheet.getRow(26);
        rowNew8.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Sekolah Menengah
        rowNew8.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Sekolah Menengah
        rowNew8.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Sekolah Menengah
        rowNew8.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Sekolah Menengah
        rowNew8.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Sekolah Menengah
        rowNew8.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Sekolah Menengah
        rowNew8.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Sekolah Menengah
        rowNew8.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Sekolah Menengah
        rowNew8.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Sekolah Menengah
        rowNew8.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Sekolah Menengah
        rowNew8.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Sekolah Menengah
        rowNew8.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Sekolah Menengah
        rowNew8.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Sekolah Menengah
        rowNew8.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Sekolah Menengah
        rowNew8.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Sekolah Menengah
        rowNew8.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Sekolah Menengah
        rowNew8.commit();

        //Keperluan Khas RETEN
        let rowNew9 = worksheet.getRow(27);
        rowNew9.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Keperluan Khas
        rowNew9.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Keperluan Khas
        rowNew9.getCell(4).value = results.dStatusdfx; //d Status dfx Keperluan Khas
        rowNew9.getCell(5).value = results.fStatusdfx; //f Status dfx Keperluan Khas
        rowNew9.getCell(6).value = results.xStatusdfx; //x Status dfx Keperluan Khas
        rowNew9.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Keperluan Khas
        rowNew9.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Keperluan Khas
        rowNew9.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Keperluan Khas
        rowNew9.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Keperluan Khas
        rowNew9.getCell(14).value = results.skorPlakA; //Skor Plak A Keperluan Khas
        rowNew9.getCell(15).value = results.skorPlakC; //Skor Plak C Keperluan Khas
        rowNew9.getCell(16).value = results.skorPlakE; //Skor Plak E Keperluan Khas
        rowNew9.getCell(17).value = results.skorGIS0; //Skor GIS 0 Keperluan Khas
        rowNew9.getCell(18).value = results.skorGIS1; //Skor GIS 1 Keperluan Khas
        rowNew9.getCell(19).value = results.skorGIS2; //Skor GIS 2 Keperluan Khas
        rowNew9.getCell(20).value = results.skorGIS3; //Skor GIS 3 Keperluan Khas
        rowNew9.getCell(21).value = results.skorBPE0; //Skor BPE 0 Keperluan Khas
        rowNew9.getCell(22).value = results.skorBPE1; //Skor BPE 1 Keperluan Khas
        rowNew9.getCell(23).value = results.skorBPE2; //Skor BPE 2 Keperluan Khas
        rowNew9.getCell(24).value = results.skorBPE3; //Skor BPE 3 Keperluan Khas
        rowNew9.getCell(25).value = results.skorBPE4; //Skor BPE 4 Keperluan Khas
        rowNew9.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Keperluan Khas
        rowNew9.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Keperluan Khas
        rowNew9.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Keperluan Khas
        rowNew9.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Keperluan Khas
        rowNew9.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Keperluan Khas
        rowNew9.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Keperluan Khas
        rowNew9.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Keperluan Khas
        rowNew9.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Keperluan Khas
        rowNew9.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Keperluan Khas
        rowNew9.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Keperluan Khas
        rowNew9.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Keperluan Khas
        rowNew9.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Keperluan Khas
        rowNew9.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Keperluan Khas
        rowNew9.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Keperluan Khas
        rowNew9.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Keperluan Khas
        rowNew9.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Keperluan Khas
        rowNew9.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Keperluan Khas
        rowNew9.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Keperluan Khas
        rowNew9.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Keperluan Khas
        rowNew9.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Keperluan Khas
        rowNew9.getCell(48).value = results.penskaleran; //Penskelaran Keperluan Khas
        rowNew9.getCell(49).value = results.txPerio; //Rawatan Periodontik Keperluan Khas
        rowNew9.getCell(50).value = results.txEndo; //Rawatan Endodontik Keperluan Khas
        rowNew9.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Keperluan Khas
        rowNew9.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Keperluan Khas
        rowNew9.getCell(53).value = results.abses; //Abses Keperluan Khas
        rowNew9.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Keperluan Khas
        rowNew9.getCell(55).value = results.fracture; //Fraktur Keperluan Khas
        rowNew9.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Keperluan Khas
        rowNew9.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Keperluan Khas
        rowNew9.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Keperluan Khas
        rowNew9.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Keperluan Khas
        rowNew9.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Keperluan Khas
        rowNew9.getCell(61).value = results.lainLain; //lain-lain Keperluan Khas
        rowNew9.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Keperluan Khas
        rowNew9.getCell(63).value = results.caseCompleted; //kes selesai Keperluan Khas
        rowNew9.getCell(64).value = results.lowCRA; //rendah CRA Keperluan Khas
        rowNew9.getCell(65).value = results.moderateCRA; //sederhana CRA Keperluan Khas
        rowNew9.getCell(66).value = results.highCRA; //tinggi CRA Keperluan Khas
        rowNew9.commit();

        let rowNew10 = worksheet.getRow(28);
        rowNew10.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Keperluan Khas
        rowNew10.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Keperluan Khas
        rowNew10.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Keperluan Khas
        rowNew10.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Keperluan Khas
        rowNew10.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Keperluan Khas
        rowNew10.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Keperluan Khas
        rowNew10.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Keperluan Khas
        rowNew10.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Keperluan Khas
        rowNew10.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Keperluan Khas
        rowNew10.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Keperluan Khas
        rowNew10.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Keperluan Khas
        rowNew10.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Keperluan Khas
        rowNew10.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Keperluan Khas
        rowNew10.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Keperluan Khas
        rowNew10.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Keperluan Khas
        rowNew10.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Keperluan Khas
        rowNew10.commit();

        //Ibu Mengandung RETEN
        let rowNew11 = worksheet.getRow(29);
        rowNew11.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Ibu Mengandung
        rowNew11.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Ibu Mengandung
        rowNew11.getCell(4).value = results.dStatusdfx; //d Status dfx Ibu Mengandung
        rowNew11.getCell(5).value = results.fStatusdfx; //f Status dfx Ibu Mengandung
        rowNew11.getCell(6).value = results.xStatusdfx; //x Status dfx Ibu Mengandung
        rowNew11.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Ibu Mengandung
        rowNew11.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Ibu Mengandung
        rowNew11.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Ibu Mengandung
        rowNew11.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Ibu Mengandung
        rowNew11.getCell(14).value = results.skorPlakA; //Skor Plak A Ibu Mengandung
        rowNew11.getCell(15).value = results.skorPlakC; //Skor Plak C Ibu Mengandung
        rowNew11.getCell(16).value = results.skorPlakE; //Skor Plak E Ibu Mengandung
        rowNew11.getCell(17).value = results.skorGIS0; //Skor GIS 0 Ibu Mengandung
        rowNew11.getCell(18).value = results.skorGIS1; //Skor GIS 1 Ibu Mengandung
        rowNew11.getCell(19).value = results.skorGIS2; //Skor GIS 2 Ibu Mengandung
        rowNew11.getCell(20).value = results.skorGIS3; //Skor GIS 3 Ibu Mengandung
        rowNew11.getCell(21).value = results.skorBPE0; //Skor BPE 0 Ibu Mengandung
        rowNew11.getCell(22).value = results.skorBPE1; //Skor BPE 1 Ibu Mengandung
        rowNew11.getCell(23).value = results.skorBPE2; //Skor BPE 2 Ibu Mengandung
        rowNew11.getCell(24).value = results.skorBPE3; //Skor BPE 3 Ibu Mengandung
        rowNew11.getCell(25).value = results.skorBPE4; //Skor BPE 4 Ibu Mengandung
        rowNew11.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Ibu Mengandung
        rowNew11.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Ibu Mengandung
        rowNew11.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Ibu Mengandung
        rowNew11.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Ibu Mengandung
        rowNew11.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Ibu Mengandung
        rowNew11.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Ibu Mengandung
        rowNew11.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Ibu Mengandung
        rowNew11.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Ibu Mengandung
        rowNew11.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Ibu Mengandung
        rowNew11.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Ibu Mengandung
        rowNew11.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Ibu Mengandung
        rowNew11.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Ibu Mengandung
        rowNew11.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Ibu Mengandung
        rowNew11.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Ibu Mengandung
        rowNew11.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Ibu Mengandung
        rowNew11.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Ibu Mengandung
        rowNew11.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Ibu Mengandung
        rowNew11.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Ibu Mengandung
        rowNew11.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Ibu Mengandung
        rowNew11.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Ibu Mengandung
        rowNew11.getCell(48).value = results.penskaleran; //Penskelaran Ibu Mengandung
        rowNew11.getCell(49).value = results.txPerio; //Rawatan Periodontik Ibu Mengandung
        rowNew11.getCell(50).value = results.txEndo; //Rawatan Endodontik Ibu Mengandung
        rowNew11.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Ibu Mengandung
        rowNew11.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Ibu Mengandung
        rowNew11.getCell(53).value = results.abses; //Abses Ibu Mengandung
        rowNew11.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Ibu Mengandung
        rowNew11.getCell(55).value = results.fracture; //Fraktur Ibu Mengandung
        rowNew11.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Ibu Mengandung
        rowNew11.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Ibu Mengandung
        rowNew11.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Ibu Mengandung
        rowNew11.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Ibu Mengandung
        rowNew11.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Ibu Mengandung
        rowNew11.getCell(61).value = results.lainLain; //lain-lain Ibu Mengandung
        rowNew11.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Ibu Mengandung
        rowNew11.getCell(63).value = results.caseCompleted; //kes selesai Ibu Mengandung
        rowNew11.getCell(64).value = results.lowCRA; //rendah CRA Ibu Mengandung
        rowNew11.getCell(65).value = results.moderateCRA; //sederhana CRA Ibu Mengandung
        rowNew11.getCell(66).value = results.highCRA; //tinggi CRA Ibu Mengandung
        rowNew11.commit();

        let rowNew12 = worksheet.getRow(30);
        rowNew12.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Ibu Mengandung
        rowNew12.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Ibu Mengandung
        rowNew12.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Ibu Mengandung
        rowNew12.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Ibu Mengandung
        rowNew12.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Ibu Mengandung
        rowNew12.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Ibu Mengandung
        rowNew12.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Ibu Mengandung
        rowNew12.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Ibu Mengandung
        rowNew12.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Ibu Mengandung
        rowNew12.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Ibu Mengandung
        rowNew12.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Ibu Mengandung
        rowNew12.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Ibu Mengandung
        rowNew12.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Ibu Mengandung
        rowNew12.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Ibu Mengandung
        rowNew12.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Ibu Mengandung
        rowNew12.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Ibu Mengandung
        rowNew12.commit();

        //Orang Dewasa RETEN
        let rowNew13 = worksheet.getRow(31);
        rowNew13.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Orang Dewasa
        rowNew13.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Orang Dewasa
        rowNew13.getCell(4).value = results.dStatusdfx; //d Status dfx Orang Dewasa
        rowNew13.getCell(5).value = results.fStatusdfx; //f Status dfx Orang Dewasa
        rowNew13.getCell(6).value = results.xStatusdfx; //x Status dfx Orang Dewasa
        rowNew13.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Orang Dewasa
        rowNew13.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Orang Dewasa
        rowNew13.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Orang Dewasa
        rowNew13.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Orang Dewasa
        rowNew13.getCell(14).value = results.skorPlakA; //Skor Plak A Orang Dewasa
        rowNew13.getCell(15).value = results.skorPlakC; //Skor Plak C Orang Dewasa
        rowNew13.getCell(16).value = results.skorPlakE; //Skor Plak E Orang Dewasa
        rowNew13.getCell(17).value = results.skorGIS0; //Skor GIS 0 Orang Dewasa
        rowNew13.getCell(18).value = results.skorGIS1; //Skor GIS 1 Orang Dewasa
        rowNew13.getCell(19).value = results.skorGIS2; //Skor GIS 2 Orang Dewasa
        rowNew13.getCell(20).value = results.skorGIS3; //Skor GIS 3 Orang Dewasa
        rowNew13.getCell(21).value = results.skorBPE0; //Skor BPE 0 Orang Dewasa
        rowNew13.getCell(22).value = results.skorBPE1; //Skor BPE 1 Orang Dewasa
        rowNew13.getCell(23).value = results.skorBPE2; //Skor BPE 2 Orang Dewasa
        rowNew13.getCell(24).value = results.skorBPE3; //Skor BPE 3 Orang Dewasa
        rowNew13.getCell(25).value = results.skorBPE4; //Skor BPE 4 Orang Dewasa
        rowNew13.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Orang Dewasa
        rowNew13.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Orang Dewasa
        rowNew13.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Orang Dewasa
        rowNew13.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Orang Dewasa
        rowNew13.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Orang Dewasa
        rowNew13.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Orang Dewasa
        rowNew13.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Orang Dewasa
        rowNew13.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Orang Dewasa
        rowNew13.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Orang Dewasa
        rowNew13.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Orang Dewasa
        rowNew13.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Orang Dewasa
        rowNew13.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Orang Dewasa
        rowNew13.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Orang Dewasa
        rowNew13.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Orang Dewasa
        rowNew13.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Orang Dewasa
        rowNew13.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Orang Dewasa
        rowNew13.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Orang Dewasa
        rowNew13.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Orang Dewasa
        rowNew13.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Orang Dewasa
        rowNew13.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Orang Dewasa
        rowNew13.getCell(48).value = results.penskaleran; //Penskelaran Orang Dewasa
        rowNew13.getCell(49).value = results.txPerio; //Rawatan Periodontik Orang Dewasa
        rowNew13.getCell(50).value = results.txEndo; //Rawatan Endodontik Orang Dewasa
        rowNew13.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Orang Dewasa
        rowNew13.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Orang Dewasa
        rowNew13.getCell(53).value = results.abses; //Abses Orang Dewasa
        rowNew13.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Orang Dewasa
        rowNew13.getCell(55).value = results.fracture; //Fraktur Orang Dewasa
        rowNew13.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Orang Dewasa
        rowNew13.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Orang Dewasa
        rowNew13.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Orang Dewasa
        rowNew13.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Orang Dewasa
        rowNew13.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Orang Dewasa
        rowNew13.getCell(61).value = results.lainLain; //lain-lain Orang Dewasa
        rowNew13.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Orang Dewasa
        rowNew13.getCell(63).value = results.caseCompleted; //kes selesai Orang Dewasa
        rowNew13.getCell(64).value = results.lowCRA; //rendah CRA Orang Dewasa
        rowNew13.getCell(65).value = results.moderateCRA; //sederhana CRA Orang Dewas
        rowNew13.commit();

        let rowNew14 = worksheet.getRow(32);
        rowNew14.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Orang Dewasa
        rowNew14.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Orang Dewasa
        rowNew14.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Orang Dewasa
        rowNew14.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Orang Dewasa
        rowNew14.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Orang Dewasa
        rowNew14.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Orang Dewasa
        rowNew14.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Orang Dewasa
        rowNew14.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Orang Dewasa
        rowNew14.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Orang Dewasa
        rowNew14.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Orang Dewasa
        rowNew14.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Orang Dewasa
        rowNew14.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Orang Dewasa
        rowNew14.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Orang Dewasa
        rowNew14.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Orang Dewasa
        rowNew14.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Orang Dewasa
        rowNew14.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Orang Dewasa
        rowNew14.commit();

        //Warga Emas RETEN
        let rowNew15 = worksheet.getRow(33);
        rowNew15.getCell(2).value = results.kedatanganBaru; //Pesakit Baru Warga Emas
        rowNew15.getCell(3).value = results.kedatanganUlangan; //Pesakit Ulangan Warga Emas
        rowNew15.getCell(4).value = results.dStatusdfx; //d Status dfx Warga Emas
        rowNew15.getCell(5).value = results.fStatusdfx; //f Status dfx Warga Emas
        rowNew15.getCell(6).value = results.xStatusdfx; //x Status dfx Warga Emas
        rowNew15.getCell(8).value = results.dStatusDMFX; //dStatusDMFX Warga Emas
        rowNew15.getCell(9).value = results.mStatusDMFX; //mStatusDMFX Warga Emas
        rowNew15.getCell(10).value = results.fStatusDMFX; //fStatusDMFX Warga Emas
        rowNew15.getCell(11).value = results.xStatusDMFX; //xStatusDMFX Warga Emas
        rowNew15.getCell(14).value = results.skorPlakA; //Skor Plak A Warga Emas
        rowNew15.getCell(15).value = results.skorPlakC; //Skor Plak C Warga Emas
        rowNew15.getCell(16).value = results.skorPlakE; //Skor Plak E Warga Emas
        rowNew15.getCell(17).value = results.skorGIS0; //Skor GIS 0 Warga Emas
        rowNew15.getCell(18).value = results.skorGIS1; //Skor GIS 1 Warga Emas
        rowNew15.getCell(19).value = results.skorGIS2; //Skor GIS 2 Warga Emas
        rowNew15.getCell(20).value = results.skorGIS3; //Skor GIS 3 Warga Emas
        rowNew15.getCell(21).value = results.skorBPE0; //Skor BPE 0 Warga Emas
        rowNew15.getCell(22).value = results.skorBPE1; //Skor BPE 1 Warga Emas
        rowNew15.getCell(23).value = results.skorBPE2; //Skor BPE 2 Warga Emas
        rowNew15.getCell(24).value = results.skorBPE3; //Skor BPE 3 Warga Emas
        rowNew15.getCell(25).value = results.skorBPE4; //Skor BPE 4 Warga Emas
        rowNew15.getCell(26).value = results.dmfxEqualZero; //BK (DMFX = results.0) Warga Emas
        rowNew15.getCell(27).value = results.tpr; //Tidak Perlu Rawatan (TPR) Warga Emas
        rowNew15.getCell(28).value = results.traumaTSL; //Trauma Tooth Surface Loss (TSL) Warga Emas
        rowNew15.getCell(29).value = results.traumaTisuLembut; //Trauma Tisu Lembut Warga Emas
        rowNew15.getCell(30).value = results.traumaTisuKeras; //Trauma Tisu Keras Warga Emas
        rowNew15.getCell(32).value = results.sapuanFluoridaBaru; //Sapuan Fluorida Baru Warga Emas
        rowNew15.getCell(33).value = results.muridBaruPerluFS; //Murid Baru Perlu Sealan Fisur Warga Emas
        rowNew15.getCell(34).value = results.gigiBaruPerluFS; //Gigi Baru Perlu Sealan Fisur Warga Emas
        rowNew15.getCell(35).value = results.muridBaruTelahFS; //Murid Baru Telah Sealan Fisur Warga Emas
        rowNew15.getCell(36).value = results.gigiBaruTelahFS; //Gigi Baru Telah Sealan Fisur Warga Emas
        rowNew15.getCell(37).value = results.tampalanAntGdBaru; //Anterior Tampalan Sewarna GD baru Warga Emas
        rowNew15.getCell(38).value = results.tampalanAntGkBaru; //Anterior Tampalan Sewarna GK baru Warga Emas
        rowNew15.getCell(39).value = results.tampalanPostGdBaru; //Posterior Tampalan Sewarna GD baru Warga Emas
        rowNew15.getCell(40).value = results.tampalanPostGkBaru; //Posterior Tampalan Sewarna GK baru Warga Emas
        rowNew15.getCell(41).value = results.tampalanPostAmgGdBaru; //Posterior Tampalan Amalgam GD Baru Warga Emas
        rowNew15.getCell(42).value = results.tampalanPostAmgGkBaru; //Posterior Tampalan Amalgam GD Baru Warga Emas
        rowNew15.getCell(43).value = results.crownBridgeInlayBaru; //Crown Bridge Inlay baru Warga Emas
        rowNew15.getCell(45).value = results.cabutanGd; //Cabutan Gigi Desidus Warga Emas
        rowNew15.getCell(46).value = results.cabutanGk; //Cabutan Gigi Kekal Warga Emas
        rowNew15.getCell(47).value = results.komplikasiAfterXn; //Komplikasi Selepas Cabutan Warga Emas
        rowNew15.getCell(48).value = results.penskaleran; //Penskelaran Warga Emas
        rowNew15.getCell(49).value = results.txPerio; //Rawatan Periodontik Warga Emas
        rowNew15.getCell(50).value = results.txEndo; //Rawatan Endodontik Warga Emas
        rowNew15.getCell(51).value = results.txOrtho; //Rawatan Ortodontik Warga Emas
        rowNew15.getCell(52).value = results.caseOMOP; //Kes Perubatan Mulut Warga Emas
        rowNew15.getCell(53).value = results.abses; //Abses Warga Emas
        rowNew15.getCell(54).value = results.surgikalXn; //Cabutan Surgikal Warga Emas
        rowNew15.getCell(55).value = results.fracture; //Fraktur Warga Emas
        rowNew15.getCell(56).value = results.otherSurgicalCase; //Kes Surgical yang Lain Warga Emas
        rowNew15.getCell(57).value = results.fullDentureBaruByUnit; //Full denture Baru (Unit) Warga Emas
        rowNew15.getCell(58).value = results.bilPesakitCDbaru; //Full denture Baru (patient) Warga Emas
        rowNew15.getCell(59).value = results.rpdBaruByUnit; //RPD Baru (unit) Warga Emas
        rowNew15.getCell(60).value = results.bilPesakitRPDbaru; //RPD baru (patient) Warga Emas
        rowNew15.getCell(61).value = results.lainLain; //lain-lain Warga Emas
        rowNew15.getCell(62).value = results.bilXRAYdiambil; //Bil X-ray diambil Warga Emas
        rowNew15.getCell(63).value = results.caseCompleted; //kes selesai Warga Emas
        rowNew15.getCell(64).value = results.lowCRA; //rendah CRA Warga Emas
        rowNew15.getCell(65).value = results.moderateCRA; //sederhana CRA Warga Emas
        rowNew15.getCell(66).value = results.highCRA; //tinggi CRA Warga Emas
        rowNew15.commit();

        let rowNew16 = worksheet.getRow(34);
        rowNew16.getCell(32).value = results.sapuanFluoridaUlangan; //Sapuan Fluorida Ulangan Warga Emas
        rowNew16.getCell(33).value = results.muridUlanganPerluFS; //Murid Ulangan Perlu Sealan Fisur Warga Emas
        rowNew16.getCell(34).value = results.gigiUlanganPerluFS; //Gigi Ulangan Perlu Sealan Fisur Warga Emas
        rowNew16.getCell(35).value = results.muridUlanganTelahFS; //Murid Ulangan Telah Sealan Fisur Warga Emas
        rowNew16.getCell(36).value = results.gigiUlanganTelahFS; //Gigi Ulangan Telah Sealan Fisur Warga Emas
        rowNew16.getCell(37).value = results.tampalanAntGdUlangan; //Anterior Tampalan Sewarna GD ulangan Warga Emas
        rowNew16.getCell(38).value = results.tampalanAntGkUlangan; //Anterior Tampalan Sewarna GK ulangan Warga Emas
        rowNew16.getCell(39).value = results.tampalanPostGdUlangan; //Posterior Tampalan Sewarna GD ulangan Warga Emas
        rowNew16.getCell(40).value = results.tampalanPostGkUlangan; //Posterior Tampalan Sewarna GK Ulangan Warga Emas
        rowNew16.getCell(41).value = results.tampalanPostAmgGdUlangan; //Posterior Tampalan Amalgam GD Ulangan Warga Emas
        rowNew16.getCell(42).value = results.tampalanPostAmgGkUlangan; //Posteiror Tampalan Amalgam GK Ulangan Warga Emas
        rowNew16.getCell(43).value = results.crownBridgeInlayUlangan; //crownBridgeInlayUlangan Warga Emas
        rowNew16.getCell(57).value = results.fullDentureUlanganByUnit; //Full denture Ulangan (Unit) Warga Emas
        rowNew16.getCell(58).value = results.bilPesakitCDulangan; //Full denture Ulangan (patient) Warga Emas
        rowNew16.getCell(59).value = results.rpdUlanganByUnit; //RPD Ulangan (unit) Warga Emas
        rowNew16.getCell(60).value = results.bilPesakitRPDulangan; //RPD ulangan (patient) Warga Emas
        rowNew16.commit();

        let newfile = results.path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-OA.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPGPR201 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGPR201.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PGPR 201');

        //Reten PGPR 201 Coding
        //Bawah 1 Tahun
        let rowNew = worksheet.getRow(14);
        rowNew.getCell(2).value = results.baruLMG; //LMG Baru Bawah 1 Tahun
        rowNew.getCell(3).value = results.ulanganLMG; //LMG Ulangan Bawah 1 Tahun
        rowNew.getCell(4).value = results.baruCeramah; //Ceramah Baru Bawah 1 Tahun
        rowNew.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Bawah 1 Tahun
        rowNew.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Bawah 1 Tahun
        rowNew.getCell(7).value = results.mainPeranan; //Main Peranan Bawah 1 Tahun
        rowNew.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Bawah 1 Tahun
        rowNew.getCell(9).value = results.bercerita; //Bercerita Bawah 1 Tahun
        rowNew.getCell(10).value = results.kanserMulut; //Kanser Mulut Bawah 1 Tahun
        rowNew.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Bawah 1 Tahun
        rowNew.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi  Bawah 1 Tahun
        rowNew.getCell(13).value = results.adviceOHE; //Advice OHE Bawah 1 Tahun
        rowNew.getCell(14).value = results.adviceDiet; //Advice Diet Bawah 1 Tahun
        rowNew.commit();

        //Antara 1 hingga 4 tahun
        let rowNew2 = worksheet.getRow(15);
        rowNew2.getCell(2).value = results.baruLMG; //LMG Baru 1 - 4 tahun
        rowNew2.getCell(3).value = results.ulanganLMG; //LMG Ulangan 1 - 4 tahun
        rowNew2.getCell(4).value = results.baruCeramah; //Ceramah Baru 1 - 4 tahun
        rowNew2.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 1 - 4 tahun
        rowNew2.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 1 - 4 tahun
        rowNew2.getCell(7).value = results.mainPeranan; //Main Peranan 1 - 4 tahun
        rowNew2.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 1 - 4 tahun
        rowNew2.getCell(9).value = results.bercerita; //Bercerita 1 - 4 tahun
        rowNew2.getCell(10).value = results.kanserMulut; //Kanser Mulut 1 - 4 tahun
        rowNew2.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 1 - 4 tahun
        rowNew2.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi  1 - 4 tahun
        rowNew2.getCell(13).value = results.adviceOHE; //Advice OHE 1 - 4 tahun
        rowNew2.getCell(14).value = results.adviceDiet; //Advice Diet Antara 1 - 4 tahun
        rowNew2.commit();

        //Antara 5 hingga 6 tahun
        let rowNew3 = worksheet.getRow(16);
        rowNew3.getCell(2).value = results.baruLMG; //LMG Baru 5 - 6 tahun
        rowNew3.getCell(3).value = results.ulanganLMG; //LMG Ulangan 5 - 6 tahun
        rowNew3.getCell(4).value = results.baruCeramah; //Ceramah Baru 5 - 6 tahun
        rowNew3.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 5 - 6 tahun
        rowNew3.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 5 - 6 tahun
        rowNew3.getCell(7).value = results.mainPeranan; //Main Peranan 5 - 6 tahun
        rowNew3.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 5 - 6 tahun
        rowNew3.getCell(9).value = results.bercerita; //Bercerita 5 - 6 tahun
        rowNew3.getCell(10).value = results.kanserMulut; //Kanser Mulut 5 - 6 tahun
        rowNew3.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 5 - 6 tahun
        rowNew3.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi  5 - 6 tahun
        rowNew3.getCell(13).value = results.adviceOHE; //Advice OHE 5 - 6 tahun
        rowNew3.getCell(14).value = results.adviceDiet; //Advice Diet 5 - 6 tahun
        rowNew3.commit();

        //Antara 7 hingga 9 tahun
        let rowNew4 = worksheet.getRow(17);
        rowNew4.getCell(2).value = results.baruLMG; //LMG Baru 7 - 9 tahun
        rowNew4.getCell(3).value = results.ulanganLMG; //LMG Ulangan 7 - 9 tahun
        rowNew4.getCell(4).value = results.baruCeramah; //Ceramah Baru 7 - 9 tahun
        rowNew4.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 7 - 9 tahun
        rowNew4.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 7 - 9 tahun
        rowNew4.getCell(7).value = results.mainPeranan; //Main Peranan 7 - 9 tahun
        rowNew4.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 7 - 9 tahun
        rowNew4.getCell(9).value = results.bercerita; //Bercerita 7 - 9 tahun
        rowNew4.getCell(10).value = results.kanserMulut; //Kanser Mulut 7 - 9 tahun
        rowNew4.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 7 - 9 tahun
        rowNew4.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 7 - 9 tahun
        rowNew4.getCell(13).value = results.adviceOHE; //Advice OHE 7 - 9 tahun
        rowNew4.getCell(14).value = results.adviceDiet; //Advice Diet 7 - 9 tahun
        rowNew4.commit();

        //Antara 10 hingga 12 tahun
        let rowNew5 = worksheet.getRow(18);
        rowNew5.getCell(2).value = results.baruLMG; //LMG Baru 10 - 12 tahun
        rowNew5.getCell(3).value = results.ulanganLMG; //LMG Ulangan 10 - 12 tahun
        rowNew5.getCell(4).value = results.baruCeramah; //Ceramah Baru 10 - 12 tahun
        rowNew5.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 10 - 12 tahun
        rowNew5.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 10 - 12 tahun
        rowNew5.getCell(7).value = results.mainPeranan; //Main Peranan 10 - 12 tahun
        rowNew5.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 10 - 12 tahun
        rowNew5.getCell(9).value = results.bercerita; //Bercerita 10 - 12 tahun
        rowNew5.getCell(10).value = results.kanserMulut; //Kanser Mulut 10 - 12 tahun
        rowNew5.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 10 - 12 tahun
        rowNew5.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 10 - 12 tahun
        rowNew5.getCell(13).value = results.adviceOHE; //Advice OHE 10 - 12 tahun
        rowNew5.getCell(14).value = results.adviceDiet; //Advice Diet 10 - 12 tahun
        rowNew5.commit();

        //Antara 13 hingga 14 tahun
        let rowNew6 = worksheet.getRow(19);
        rowNew6.getCell(2).value = results.baruLMG; //LMG Baru 13 - 14 tahun
        rowNew6.getCell(3).value = results.ulanganLMG; //LMG Ulangan 13 - 14 tahun
        rowNew6.getCell(4).value = results.baruCeramah; //Ceramah Baru 13 - 14 tahun
        rowNew6.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 13 - 14 tahun
        rowNew6.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 13 - 14 tahun
        rowNew6.getCell(7).value = results.mainPeranan; //Main Peranan 13 - 14 tahun
        rowNew6.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 13 - 14 tahun
        rowNew6.getCell(9).value = results.bercerita; //Bercerita 13 - 14 tahun
        rowNew6.getCell(10).value = results.kanserMulut; //Kanser Mulut 13 - 14 tahun
        rowNew6.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 13 - 14 tahun
        rowNew6.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 13 - 14 tahun
        rowNew6.getCell(13).value = results.adviceOHE; //Advice OHE 13 - 14 tahun
        rowNew6.getCell(14).value = results.adviceDiet; //Advice Diet 13 - 14 tahun
        rowNew6.commit();

        //Antara 15 hingga 17 tahun
        let rowNew7 = worksheet.getRow(20);
        rowNew7.getCell(2).value = results.baruLMG; //LMG Baru 15 - 17 tahun
        rowNew7.getCell(3).value = results.ulanganLMG; //LMG Ulangan 15 - 17 tahun
        rowNew7.getCell(4).value = results.baruCeramah; //Ceramah Baru 15 - 17 tahun
        rowNew7.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 15 - 17 tahun
        rowNew7.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 15 - 17 tahun
        rowNew7.getCell(7).value = results.mainPeranan; //Main Peranan 15 - 17 tahun
        rowNew7.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 15 - 17 tahun
        rowNew7.getCell(9).value = results.bercerita; //Bercerita 15 - 17 tahun
        rowNew7.getCell(10).value = results.kanserMulut; //Kanser Mulut 15 - 17 tahun
        rowNew7.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 15 - 17 tahun
        rowNew7.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 15 - 17 tahun
        rowNew7.getCell(13).value = results.adviceOHE; //Advice OHE 15 - 17 tahun
        rowNew7.getCell(14).value = results.adviceDiet; //Advice Diet 15 - 17 tahun
        rowNew7.commit();

        //Antara 18 hingga 19 tahun
        let rowNew8 = worksheet.getRow(21);
        rowNew8.getCell(2).value = results.baruLMG; //LMG Baru 18 - 19 tahun
        rowNew8.getCell(3).value = results.ulanganLMG; //LMG Ulangan 18 - 19 tahun
        rowNew8.getCell(4).value = results.baruCeramah; //Ceramah Baru 18 - 19 tahun
        rowNew8.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 18 - 19 tahun
        rowNew8.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 18 - 19 tahun
        rowNew8.getCell(7).value = results.mainPeranan; //Main Peranan 18 - 19 tahun
        rowNew8.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 18 - 19 tahun
        rowNew8.getCell(9).value = results.bercerita; //Bercerita 18 - 19 tahun
        rowNew8.getCell(10).value = results.kanserMulut; //Kanser Mulut 18 - 19 tahun
        rowNew8.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 18 - 19 tahun
        rowNew8.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 18 - 19 tahun
        rowNew8.getCell(13).value = results.adviceOHE; //Advice OHE 18 - 19 tahun
        rowNew8.getCell(14).value = results.adviceDiet; //Advice Diet 18 - 19 tahun
        rowNew8.commit();

        //Antara 20 hingga 29 tahun
        let rowNew9 = worksheet.getRow(22);
        rowNew9.getCell(2).value = results.baruLMG; //LMG Baru 20 - 29 Tahun
        rowNew9.getCell(3).value = results.ulanganLMG; //LMG Ulangan 20 - 29 Tahun
        rowNew9.getCell(4).value = results.baruCeramah; //Ceramah Baru 20 - 29 Tahun
        rowNew9.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 20 - 29 Tahun
        rowNew9.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 20 - 29 Tahun
        rowNew9.getCell(7).value = results.mainPeranan; //Main Peranan 20 - 29 Tahun
        rowNew9.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 20 - 29 Tahun
        rowNew9.getCell(9).value = results.bercerita; //Bercerita 20 - 29 Tahun
        rowNew9.getCell(10).value = results.kanserMulut; //Kanser Mulut 20 - 29 Tahun
        rowNew9.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 20 - 29 Tahun
        rowNew9.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 20 - 29 Tahun
        rowNew9.getCell(13).value = results.adviceOHE; //Advice OHE 20 - 29 Tahun
        rowNew9.getCell(14).value = results.adviceDiet; //Advice Diet 20 - 29 Tahun
        rowNew9.commit();

        //Antara 30 hingga 49 tahun
        let rowNew10 = worksheet.getRow(23);
        rowNew10.getCell(2).value = results.baruLMG; //LMG Baru 30 - 49 Tahun
        rowNew10.getCell(3).value = results.ulanganLMG; //LMG Ulangan 30 - 49 Tahun
        rowNew10.getCell(4).value = results.baruCeramah; //Ceramah Baru 30 - 49 Tahun
        rowNew10.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 30 - 49 Tahun
        rowNew10.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 30 - 49 Tahun
        rowNew10.getCell(7).value = results.mainPeranan; //Main Peranan 30 - 49 Tahun
        rowNew10.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 30 - 49 Tahun
        rowNew10.getCell(9).value = results.bercerita; //Bercerita 30 - 49 Tahun
        rowNew10.getCell(10).value = results.kanserMulut; //Kanser Mulut 30 - 49 Tahun
        rowNew10.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 30 - 49 Tahun
        rowNew10.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 30 - 49 Tahun
        rowNew10.getCell(13).value = results.adviceOHE; //Advice OHE 30 - 49 Tahun
        rowNew10.getCell(14).value = results.adviceDiet; //Advice Diet 30 - 49 Tahun
        rowNew10.commit();

        //Antara 50 hingga 59 tahun
        let rowNew11 = worksheet.getRow(24);
        rowNew11.getCell(2).value = results.baruLMG; //LMG Baru 50 - 59 Tahun
        rowNew11.getCell(3).value = results.ulanganLMG; //LMG Ulangan 50 - 59 Tahun
        rowNew11.getCell(4).value = results.baruCeramah; //Ceramah Baru 50 - 59 Tahun
        rowNew11.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 50 - 59 Tahun
        rowNew11.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 50 - 59 Tahun
        rowNew11.getCell(7).value = results.mainPeranan; //Main Peranan 50 - 59 Tahun
        rowNew11.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 50 - 59 Tahun
        rowNew11.getCell(9).value = results.bercerita; //Bercerita 50 - 59 Tahun
        rowNew11.getCell(10).value = results.kanserMulut; //Kanser Mulut 50 - 59 Tahun
        rowNew11.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 50 - 59 Tahun
        rowNew11.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 50 - 59 Tahun
        rowNew11.getCell(13).value = results.adviceOHE; //Advice OHE 50 - 59 Tahun
        rowNew11.getCell(14).value = results.adviceDiet; //Advice Diet 50 - 59 Tahun
        rowNew11.commit();

        //60 Tahun dan ke atas
        let rowNew12 = worksheet.getRow(25);
        rowNew12.getCell(2).value = results.baruLMG; //LMG Baru 60 tahun dan ke atas
        rowNew12.getCell(3).value = results.ulanganLMG; //LMG Ulangan 60 tahun dan ke atas
        rowNew12.getCell(4).value = results.baruCeramah; //Ceramah Baru 60 tahun dan ke atas
        rowNew12.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan 60 tahun dan ke atas
        rowNew12.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel 60 tahun dan ke atas
        rowNew12.getCell(7).value = results.mainPeranan; //Main Peranan 60 tahun dan ke atas
        rowNew12.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka 60 tahun dan ke atas
        rowNew12.getCell(9).value = results.bercerita; //Bercerita 60 tahun dan ke atas
        rowNew12.getCell(10).value = results.kanserMulut; //Kanser Mulut 60 tahun dan ke atas
        rowNew12.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance 60 tahun dan ke atas
        rowNew12.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi 60 tahun dan ke atas
        rowNew12.getCell(13).value = results.adviceOHE; //Advice OHE 60 tahun dan ke atas
        rowNew12.getCell(14).value = results.adviceDiet; //Advice Diet 60 tahun dan ke atas
        rowNew12.commit();

        //Ibu Mengandung
        let rowNew13 = worksheet.getRow(27);
        rowNew13.getCell(2).value = results.baruLMG; //LMG Baru Ibu Mengandung
        rowNew13.getCell(3).value = results.ulanganLMG; //LMG Ulangan Ibu Mengandung
        rowNew13.getCell(4).value = results.baruCeramah; //Ceramah Baru Ibu Mengandung
        rowNew13.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Ibu Mengandung
        rowNew13.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Ibu Mengandung
        rowNew13.getCell(7).value = results.mainPeranan; //Main Peranan Ibu Mengandung
        rowNew13.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Ibu Mengandung
        rowNew13.getCell(9).value = results.bercerita; //Bercerita Ibu Mengandung
        rowNew13.getCell(10).value = results.kanserMulut; //Kanser Mulut Ibu Mengandung
        rowNew13.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Ibu Mengandung
        rowNew13.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi Ibu Mengandung
        rowNew13.getCell(13).value = results.adviceOHE; //Advice OHE Ibu Mengandung
        rowNew13.getCell(14).value = results.adviceDiet; //Advice Diet Ibu Mengandung
        rowNew13.commit();

        //Orang Kurang Upaya
        let rowNew14 = worksheet.getRow(28);
        rowNew14.getCell(2).value = results.baruLMG; //LMG Baru Orang Kurang Upaya
        rowNew14.getCell(3).value = results.ulanganLMG; //LMG Ulangan Orang Kurang Upaya
        rowNew14.getCell(4).value = results.baruCeramah; //Ceramah Baru Orang Kurang Upaya
        rowNew14.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Orang Kurang Upaya
        rowNew14.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Orang Kurang Upaya
        rowNew14.getCell(7).value = results.mainPeranan; //Main Peranan Orang Kurang Upaya
        rowNew14.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Orang Kurang Upaya
        rowNew14.getCell(9).value = results.bercerita; //Bercerita Orang Kurang Upaya
        rowNew14.getCell(10).value = results.kanserMulut; //Kanser Mulut Orang Kurang Upaya
        rowNew14.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Orang Kurang Upaya
        rowNew14.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi Orang Kurang Upaya
        rowNew14.getCell(13).value = results.adviceOHE; //Advice OHE Orang Kurang Upaya
        rowNew14.getCell(14).value = results.adviceDiet; //Advice Diet Orang Kurang Upaya
        rowNew14.commit();

        //Guru Tadika
        let rowNew15 = worksheet.getRow(29);
        rowNew15.getCell(2).value = results.baruLMG; //LMG Baru Guru Tadika
        rowNew15.getCell(3).value = results.ulanganLMG; //LMG Ulangan Guru Tadika
        rowNew15.getCell(4).value = results.baruCeramah; //Ceramah Baru Guru Tadika
        rowNew15.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Guru Tadika
        rowNew15.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Guru Tadika
        rowNew15.getCell(7).value = results.mainPeranan; //Main Peranan Guru Tadika
        rowNew15.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Guru Tadika
        rowNew15.getCell(9).value = results.bercerita; //Bercerita Guru Tadika
        rowNew15.getCell(10).value = results.kanserMulut; //Kanser Mulut Guru Tadika
        rowNew15.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Guru Tadika
        rowNew15.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi Guru Tadika
        rowNew15.getCell(13).value = results.adviceOHE; //Advice OHE Guru Tadika
        rowNew15.getCell(14).value = results.adviceDiet; //Advice Diet Guru Tadika
        rowNew15.commit();

        //Penjaga Warga Emas
        let rowNew16 = worksheet.getRow(30);
        rowNew16.getCell(2).value = results.baruLMG; //LMG Baru Penjaga Warga Emas
        rowNew16.getCell(3).value = results.ulanganLMG; //LMG Ulangan Penjaga Warga Emas
        rowNew16.getCell(4).value = results.baruCeramah; //Ceramah Baru Penjaga Warga Emas
        rowNew16.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Penjaga Warga Emas
        rowNew16.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Penjaga Warga Emas
        rowNew16.getCell(7).value = results.mainPeranan; //Main Peranan Penjaga Warga Emas
        rowNew16.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Penjaga Warga Emas
        rowNew16.getCell(9).value = results.bercerita; //Bercerita Penjaga Warga Emas
        rowNew16.getCell(10).value = results.kanserMulut; //Kanser Mulut Penjaga Warga Emas
        rowNew16.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Penjaga Warga Emas
        rowNew16.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi Penjaga Warga Emas
        rowNew16.getCell(13).value = results.adviceOHE; //Advice OHE Penjaga Warga Emas
        rowNew16.getCell(14).value = results.adviceDiet; //Advice Diet Penjaga Warga Emas
        rowNew16.commit();

        //Penjaga PDK
        let rowNew17 = worksheet.getRow(31);
        rowNew17.getCell(2).value = results.baruLMG; //LMG Baru Penjaga PDK
        rowNew17.getCell(3).value = results.ulanganLMG; //LMG Ulangan Penjaga PDK
        rowNew17.getCell(4).value = results.baruCeramah; //Ceramah Baru Penjaga PDK
        rowNew17.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Penjaga PDK
        rowNew17.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Penjaga PDK	rowNew17.getCell(7).value = results.mainPeranan; //Main Peranan Penjaga PDK	rowNew17.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Penjaga PDK	rowNew17.getCell(9).value = results.bercerita; //Bercerita Penjaga PDK
        rowNew17.getCell(10).value = results.kanserMulut; //Kanser Mulut Penjaga PDK	rowNew17.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Penjaga PDK
        rowNew17.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi Penjaga PDK
        rowNew17.getCell(13).value = results.adviceOHE; //Advice OHE Penjaga PDK
        rowNew17.getCell(14).value = results.adviceDiet; //Advice Diet Penjaga PDK
        rowNew17.commit();

        //Penjaga Bukan PDK
        let rowNew18 = worksheet.getRow(32);
        rowNew18.getCell(2).value = results.baruLMG; //LMG Baru Penjaga Bukan PDK
        rowNew18.getCell(3).value = results.ulanganLMG; //LMG Ulangan Penjaga Bukan PDK
        rowNew18.getCell(4).value = results.baruCeramah; //Ceramah Baru Penjaga Bukan PDK
        rowNew18.getCell(5).value = results.ulanganCeramah; //Ceramah Ulangan Penjaga Bukan PDK
        rowNew18.getCell(6).value = results.seminarKursusBengkel; //Kursus Seminar Bengkel Penjaga Bukan PDK
        rowNew18.getCell(7).value = results.mainPeranan; //Main Peranan Penjaga Bukan PDK
        rowNew18.getCell(8).value = results.pertunjukanBoneka; //Pertunjukan Boneka Penjaga Bukan PDK
        rowNew18.getCell(9).value = results.bercerita; //Bercerita Penjaga Bukan PDK
        rowNew18.getCell(10).value = results.kanserMulut; //Kanser Mulut Penjaga Bukan PDK
        rowNew18.getCell(11).value = results.anticipatoryGuidance; //Anticipatory Guidance Penjaga Bukan PDK
        rowNew18.getCell(12).value = results.advicePlakGigi; //Advice Plak Gigi Penjaga Bukan PDK
        rowNew18.getCell(13).value = results.adviceOHE; //Advice OHE Penjaga Bukan PDK
        rowNew18.getCell(14).value = results.adviceDiet; //Advice Diet Penjaga Bukan PDK
        rowNew18.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PGPR201.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPPIM03 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PPIM03.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PPIM03');

        //Reten PPIM03
        //PPIM03 Pra Sekolah 5 Tahun
        let rowNew = worksheet.getRow(13);
        rowNew.getCell(2).value = results.enrolmen; //Bil Enrolment Pra Sekolah 5 Tahun
        rowNew.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Pra Sekolah 5 Tahun
        rowNew.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Pra Sekolah 5 Tahun
        rowNew.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Pra Sekolah 5 Tahun
        rowNew.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Pra Sekolah 5 Tahun
        rowNew.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Pra Sekolah 5 Tahun
        rowNew.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Pra Sekolah 5 Tahun
        rowNew.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Pra Sekolah 5 Tahun
        rowNew.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Pra Sekolah 5 Tahun
        rowNew.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Pra Sekolah 5 Tahun
        rowNew.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Pra Sekolah 5 Tahun
        rowNew.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Pra Sekolah 5 Tahun
        rowNew.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Pra Sekolah 5 Tahun
        rowNew.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Pra Sekolah 5 Tahun
        rowNew.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Pra Sekolah 5 Tahun
        rowNew.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Pra Sekolah 5 Tahun
        rowNew.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Pra Sekolah 5 Tahun
        rowNew.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Pra Sekolah 5 Tahun
        rowNew.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Pra Sekolah 5 Tahun
        rowNew.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Pra Sekolah 5 Tahun
        rowNew.commit();

        //PPIM03 Pra Sekolah 6 Tahun
        let rowNew2 = worksheet.getRow(14);
        rowNew2.getCell(2).value = results.enrolmen; //Bil Enrolment Pra Sekolah 6 Tahun
        rowNew2.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Pra Sekolah 6 Tahun
        rowNew2.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Pra Sekolah 6 Tahun
        rowNew2.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Pra Sekolah 6 Tahun
        rowNew2.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Pra Sekolah 6 Tahun
        rowNew2.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Pra Sekolah 6 Tahun
        rowNew2.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Pra Sekolah 6 Tahun
        rowNew2.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Pra Sekolah 6 Tahun
        rowNew2.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Pra Sekolah 6 Tahun
        rowNew2.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Pra Sekolah 6 Tahun
        rowNew2.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Pra Sekolah 6 Tahun
        rowNew2.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Pra Sekolah 6 Tahun
        rowNew2.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Pra Sekolah 6 Tahun
        rowNew2.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Pra Sekolah 6 Tahun
        rowNew2.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Pra Sekolah 6 Tahun
        rowNew2.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Pra Sekolah 6 Tahun
        rowNew2.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Pra Sekolah 6 Tahun
        rowNew2.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Pra Sekolah 6 Tahun
        rowNew2.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Pra Sekolah 6 Tahun
        rowNew2.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Pra Sekolah 6 Tahun
        rowNew2.commit();

        //PPIM03 Darjah 1 Atau Tingkatan 1
        let rowNew3 = worksheet.getRow(15);
        rowNew3.getCell(2).value = results.enrolmen; //Bil Enrolment Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Darjah 1 Atau Tingkatan 1
        rowNew3.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Darjah 1 Atau Tingkatan 1
        rowNew3.commit();

        //PPIM03 Darjah 2 Atau Tingkatan 2
        let rowNew4 = worksheet.getRow(16);
        rowNew4.getCell(2).value = results.enrolmen; //Bil Enrolment Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Darjah 2 Atau Tingkatan 2
        rowNew4.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Darjah 2 Atau Tingkatan 2
        rowNew4.commit();

        //PPIM03 Darjah 3 Atau Tingkatan 3
        let rowNew5 = worksheet.getRow(17);
        rowNew5.getCell(2).value = results.enrolmen; //Bil Enrolment Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Darjah 3 Atau Tingkatan 3
        rowNew5.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Darjah 3 Atau Tingkatan 3
        rowNew5.commit();

        //PPIM03 Darjah 4 Atau Tingkatan 4
        let rowNew6 = worksheet.getRow(18);
        rowNew6.getCell(2).value = results.enrolmen; //Bil Enrolment Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Darjah 4 Atau Tingkatan 4
        rowNew6.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Darjah 4 Atau Tingkatan 4
        rowNew6.commit();

        //PPIM03 Darjah 5 Atau Tingkatan 5
        let rowNew7 = worksheet.getRow(19);
        rowNew7.getCell(2).value = results.enrolmen; //Bil Enrolment Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Darjah 5 Atau Tingkatan 5
        rowNew7.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Darjah 5 Atau Tingkatan 5
        rowNew7.commit();

        //PPIM03 Darjah 6 (Sekolah Rendah)
        let rowNew8 = worksheet.getRow(20);
        rowNew8.getCell(2).value = results.enrolmen; //Bil Enrolment Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Darjah 6 (Sekolah Rendah)
        rowNew8.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Darjah 6 (Sekolah Rendah)
        rowNew8.commit();

        //PPIM03 Peralihan
        let rowNew9 = worksheet.getRow(21);
        rowNew9.getCell(2).value = results.enrolmen; //Bil Enrolment Peralihan
        rowNew9.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu Peralihan
        rowNew9.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina Peralihan
        rowNew9.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian Peralihan
        rowNew9.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain Peralihan
        rowNew9.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu Peralihan
        rowNew9.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina Peralihan
        rowNew9.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian Peralihan
        rowNew9.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain Peralihan
        rowNew9.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa Peralihan
        rowNew9.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik Peralihan
        rowNew9.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha Peralihan
        rowNew9.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain Peralihan
        rowNew9.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi Peralihan
        rowNew9.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki Peralihan
        rowNew9.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan Peralihan
        rowNew9.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki Peralihan
        rowNew9.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan Peralihan
        rowNew9.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki Peralihan
        rowNew9.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan Peralihan
        rowNew9.commit();

        //PPIM03 KKI (SR & SM)
        let rowNew10 = worksheet.getRow(22);
        rowNew10.getCell(2).value = results.enrolmen; //Bil Enrolment KKI (SR & SM)
        rowNew10.getCell(9).value = results.perokokLelakiMelayu; //Perokok Lelaki Melayu KKI (SR & SM)
        rowNew10.getCell(10).value = results.perokokLelakiCina; //Perokok Lelaki Cina KKI (SR & SM)
        rowNew10.getCell(11).value = results.perokokLelakiIndian; //Perokok Lelaki Indian KKI (SR & SM)
        rowNew10.getCell(12).value = results.perokokLelakiLainLain; //Perokok Lelaki Lain-Lain KKI (SR & SM)
        rowNew10.getCell(14).value = results.perokokPerempuanMelayu; //Perokok Perempuan Melayu KKI (SR & SM)
        rowNew10.getCell(15).value = results.perokokPerempuanCina; //Perokok Perempuan Cina KKI (SR & SM)
        rowNew10.getCell(16).value = results.perokokPerempuanIndian; //Perokok Perempuan Indian KKI (SR & SM)
        rowNew10.getCell(17).value = results.perokokPerempuanLainLain; //Perokok Perempuan Lain-Lain KKI (SR & SM)
        rowNew10.getCell(18).value = results.jenisRokokBiasa; //Jenis Rokok Biasa KKI (SR & SM)
        rowNew10.getCell(19).value = results.jenisRokokElektronik; //Jenis Rokok Elektronik KKI (SR & SM)
        rowNew10.getCell(20).value = results.jenisRokokShisha; //Jenis Rokok Shisha KKI (SR & SM)
        rowNew10.getCell(21).value = results.jenisRokokLainLain; //Jenis Rokok Lain-lain KKI (SR & SM)
        rowNew10.getCell(22).value = results.bilDirujukUntukIntervensi; //Bil Dirujuk untuk Intervensi KKI (SR & SM)
        rowNew10.getCell(25).value = results.bekasPerokokLelaki; //Bekas Perokok Lelaki KKI (SR & SM)
        rowNew10.getCell(26).value = results.bekasPerokokPerempuan; //Bekas Perokok Perempuan KKI (SR & SM)
        rowNew10.getCell(29).value = results.perokokPasifLelaki; //Perokok Pasif Lelaki KKI (SR & SM)
        rowNew10.getCell(30).value = results.perokokPasifPerempuan; //Perokok Pasif Perempuan KKI (SR & SM)
        rowNew10.getCell(33).value = results.bukanPerokokLelaki; //Bukan Perokok Lelaki KKI (SR & SM)
        rowNew10.getCell(34).value = results.bukanPerokokPerempuan; //Bukan Perokok Perempuan KKI (SR & SM)
        rowNew10.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PPIM03.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG201A = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PG201A.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PG201A');

        //PG201A
        // Reten Sekolah (Darjah 1)
        let rowNew = worksheet.getRow(17);
        rowNew.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (Darjah 1)
        rowNew.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (Darjah 1)
        rowNew.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (Darjah 1)
        rowNew.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (Darjah 1)
        rowNew.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (Darjah 1)
        rowNew.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (Darjah 1)
        rowNew.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (Darjah 1)
        rowNew.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (Darjah 1)
        rowNew.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (Darjah 1)
        rowNew.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (Darjah 1)
        rowNew.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (Darjah 1)
        rowNew.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (Darjah 1)
        rowNew.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (Darjah 1)
        rowNew.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (Darjah 1)
        rowNew.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (Darjah 1)
        rowNew.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (Darjah 1)
        rowNew.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (Darjah 1)
        rowNew.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (Darjah 1)
        rowNew.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (Darjah 1)
        rowNew.getCell(24).value = results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (Darjah 1)
        rowNew.getCell(25).value = results.dfxEqualToZero; //dfx=0 (Darjah 1)
        rowNew.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (Darjah 1)
        rowNew.getCell(27).value = results.tprICDAS; //TPR ICDAS (Darjah 1)
        rowNew.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (Darjah 1)
        rowNew.getCell(29).value = results.cleftAda; //cleft Ada (Darjah 1)
        rowNew.getCell(30).value = results.cleftRujuk; //cleft Rujuk (Darjah 1)
        rowNew.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (Darjah 1)
        rowNew.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (Darjah 1)
        rowNew.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (Darjah 1)
        rowNew.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (Darjah 1)
        rowNew.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (Darjah 1)
        rowNew.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (Darjah 1)
        rowNew.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (Darjah 1)
        rowNew.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 1)
        rowNew.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 1)
        rowNew.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 1)
        rowNew.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 1)
        rowNew.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 1)
        rowNew.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 1)
        rowNew.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (Darjah 1)
        rowNew.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 1)
        rowNew.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (Darjah 1)
        rowNew.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (Darjah 1)
        rowNew.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (Darjah 1)
        rowNew.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (Darjah 1)
        rowNew.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 1)
        rowNew.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 1)
        rowNew.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 1)
        rowNew.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 1)
        rowNew.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 1)
        rowNew.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 1)
        rowNew.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (Darjah 1)
        rowNew.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (Darjah 1)
        rowNew.getCell(61).value = results.penskaleran; // Penskelaran (Darjah 1)
        rowNew.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (Darjah 1)
        rowNew.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (Darjah 1)
        rowNew.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (Darjah 1)
        rowNew.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (Darjah 1)
        rowNew.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (Darjah 1)
        rowNew.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (Darjah 1)
        rowNew.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (Darjah 1)
        rowNew.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (Darjah 1)
        rowNew.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit Ada Full Denture Atas(Darjah 1)
        rowNew.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit Ada Partial Denture Atas (Darjah 1)
        rowNew.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit Perlu Full Denture Atas (Darjah 1)
        rowNew.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit Perlu Partial Denture Atas (Darjah 1)
        rowNew.commit();

        let rowNew2 = worksheet.getRow(18);
        rowNew2.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (Darjah 1)
        rowNew2.commit();

        let rowNew3 = worksheet.getRow(19);
        rowNew3.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (Darjah 1)
        rowNew3.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(Darjah 1)
        rowNew3.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (Darjah 1)
        rowNew3.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (Darjah 1)
        rowNew3.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (Darjah 1)
        rowNew3.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (Darjah 1)
        rowNew3.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 1)
        rowNew3.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 1)
        rowNew3.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 1)
        rowNew3.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 1)
        rowNew3.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 1)
        rowNew3.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 1)
        rowNew3.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (Darjah 1)
        rowNew3.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 1)
        rowNew3.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (Darjah 1)
        rowNew3.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (Darjah 1)
        rowNew3.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (Darjah 1)
        rowNew3.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (Darjah 1)
        rowNew3.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 1)
        rowNew3.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 1)
        rowNew3.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 1)
        rowNew3.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 1)
        rowNew3.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 1)
        rowNew3.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 1)
        rowNew3.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit Ada Full Denture Bawah (Darjah 1)
        rowNew3.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (Darjah 1)
        rowNew3.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah (Darjah 1)
        rowNew3.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (Darjah 1)
        rowNew3.commit();

        // Reten Sekolah (Darjah 2)
        let rowNew4 = worksheet.getRow(17);
        rowNew4.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (Darjah 2)
        rowNew4.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (Darjah 2)
        rowNew4.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (Darjah 2)
        rowNew4.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (Darjah 2)
        rowNew4.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (Darjah 2)
        rowNew4.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (Darjah 2)
        rowNew4.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (Darjah 2)
        rowNew4.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (Darjah 2)
        rowNew4.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (Darjah 2)
        rowNew4.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (Darjah 2)
        rowNew4.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (Darjah 2)
        rowNew4.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (Darjah 2)
        rowNew4.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (Darjah 2)
        rowNew4.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (Darjah 2)
        rowNew4.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (Darjah 2)
        rowNew4.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (Darjah 2)
        rowNew4.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (Darjah 2)
        rowNew4.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (Darjah 2)
        rowNew4.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (Darjah 2)
        rowNew4.getCell(24).value = results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (Darjah 2)
        rowNew4.getCell(25).value = results.dfxEqualToZero; //dfx=0 (Darjah 2)
        rowNew4.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (Darjah 2)
        rowNew4.getCell(27).value = results.tprICDAS; //TPR ICDAS (Darjah 2)
        rowNew4.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (Darjah 2)
        rowNew4.getCell(29).value = results.cleftAda; //cleft Ada (Darjah 2)
        rowNew4.getCell(30).value = results.cleftRujuk; //cleft Rujuk (Darjah 2)
        rowNew4.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (Darjah 2)
        rowNew4.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (Darjah 2)
        rowNew4.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (Darjah 2)
        rowNew4.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (Darjah 2)
        rowNew4.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (Darjah 2)
        rowNew4.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (Darjah 2)
        rowNew4.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (Darjah 2)
        rowNew4.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 2)
        rowNew4.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 2)
        rowNew4.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 2)
        rowNew4.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 2)
        rowNew4.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 2)
        rowNew4.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 2)
        rowNew4.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (Darjah 2)
        rowNew4.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 2)
        rowNew4.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (Darjah 2)
        rowNew4.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (Darjah 2)
        rowNew4.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (Darjah 2)
        rowNew4.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (Darjah 2)
        rowNew4.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 2)
        rowNew4.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 2)
        rowNew4.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 2)
        rowNew4.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 2)
        rowNew4.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 2)
        rowNew4.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 2)
        rowNew4.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (Darjah 2)
        rowNew4.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (Darjah 2)
        rowNew4.getCell(61).value = results.penskaleran; // Penskelaran (Darjah 2)
        rowNew4.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (Darjah 2)
        rowNew4.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (Darjah 2)
        rowNew4.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (Darjah 2)
        rowNew4.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (Darjah 2)
        rowNew4.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (Darjah 2)
        rowNew4.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (Darjah 2)
        rowNew4.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (Darjah 2)
        rowNew4.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (Darjah 2)
        rowNew4.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit baru Ada Full Denture Atas(Darjah 2)
        rowNew4.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit baru Ada Partial Denture Atas(Darjah 2)
        rowNew4.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit baru Perlu Full Denture Atas (Darjah 2)
        rowNew4.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit baru Perlu Partial Denture Atas (Darjah 2)
        rowNew4.commit();

        let rowNew5 = worksheet.getRow(18);
        rowNew5.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (Darjah 2)
        rowNew5.commit();

        let rowNew6 = worksheet.getRow(19);
        rowNew6.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (Darjah 2)
        rowNew6.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(Darjah 2)
        rowNew6.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (Darjah 2)
        rowNew6.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (Darjah 2)
        rowNew6.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (Darjah 2)
        rowNew6.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (Darjah 2)
        rowNew6.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 2)
        rowNew6.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 2)
        rowNew6.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 2)
        rowNew6.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 2)
        rowNew6.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 2)
        rowNew6.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 2)
        rowNew6.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (Darjah 2)
        rowNew6.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 2)
        rowNew6.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (Darjah 2)
        rowNew6.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (Darjah 2)
        rowNew6.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (Darjah 2)
        rowNew6.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (Darjah 2)
        rowNew6.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 2)
        rowNew6.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 2)
        rowNew6.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 2)
        rowNew6.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 2)
        rowNew6.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 2)
        rowNew6.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 2)
        rowNew6.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit Ada Full Denture Bawah (Darjah 2)
        rowNew6.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (Darjah 2)
        rowNew6.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah (Darjah 2)
        rowNew6.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (Darjah 2)
        rowNew6.commit();

        // Reten Sekolah (Darjah 3)
        let rowNew7 = worksheet.getRow(17);
        rowNew7.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (Darjah 3)
        rowNew7.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (Darjah 3)
        rowNew7.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (Darjah 3)
        rowNew7.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (Darjah 3)
        rowNew7.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (Darjah 3)
        rowNew7.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (Darjah 3)
        rowNew7.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (Darjah 3)
        rowNew7.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (Darjah 3)
        rowNew7.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (Darjah 3)
        rowNew7.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (Darjah 3)
        rowNew7.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (Darjah 3)
        rowNew7.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (Darjah 3)
        rowNew7.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (Darjah 3)
        rowNew7.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (Darjah 3)
        rowNew7.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (Darjah 3)
        rowNew7.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (Darjah 3)
        rowNew7.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (Darjah 3)
        rowNew7.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (Darjah 3)
        rowNew7.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (Darjah 3)
        rowNew7.getCell(24).value = results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (Darjah 3)
        rowNew7.getCell(25).value = results.dfxEqualToZero; //dfx=0 (Darjah 3)
        rowNew7.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (Darjah 3)
        rowNew7.getCell(27).value = results.tprICDAS; //TPR ICDAS (Darjah 3)
        rowNew7.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (Darjah 3)
        rowNew7.getCell(29).value = results.cleftAda; //cleft Ada (Darjah 3)
        rowNew7.getCell(30).value = results.cleftRujuk; //cleft Rujuk (Darjah 3)
        rowNew7.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (Darjah 3)
        rowNew7.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (Darjah 3)
        rowNew7.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (Darjah 3)
        rowNew7.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (Darjah 3)
        rowNew7.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (Darjah 3)
        rowNew7.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (Darjah 3)
        rowNew7.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (Darjah 3)
        rowNew7.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 3)
        rowNew7.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 3)
        rowNew7.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 3)
        rowNew7.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 3)
        rowNew7.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 3)
        rowNew7.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 3)
        rowNew7.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (Darjah 3)
        rowNew7.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 3)
        rowNew7.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (Darjah 3)
        rowNew7.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (Darjah 3)
        rowNew7.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (Darjah 3)
        rowNew7.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (Darjah 3)
        rowNew7.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 3)
        rowNew7.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 3)
        rowNew7.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 3)
        rowNew7.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 3)
        rowNew7.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 3)
        rowNew7.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 3)
        rowNew7.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (Darjah 3)
        rowNew7.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (Darjah 3)
        rowNew7.getCell(61).value = results.penskaleran; // Penskelaran (Darjah 3)
        rowNew7.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (Darjah 3)
        rowNew7.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (Darjah 3)
        rowNew7.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (Darjah 3)
        rowNew7.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (Darjah 3)
        rowNew7.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (Darjah 3)
        rowNew7.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (Darjah 3)
        rowNew7.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (Darjah 3)
        rowNew7.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (Darjah 3)
        rowNew7.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit Ada Full Denture Atas (Darjah 3)
        rowNew7.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit Ada Partial Denture Atas (Darjah 3)
        rowNew7.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit Perlu Full Denture Atas (Darjah 3)
        rowNew7.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit Perlu Partial Denture Atas (Darjah 3)
        rowNew7.commit();

        let rowNew8 = worksheet.getRow(18);
        rowNew8.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (Darjah 3)
        rowNew8.commit();

        let rowNew9 = worksheet.getRow(19);
        rowNew9.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (Darjah 3)
        rowNew9.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(Darjah 3)
        rowNew9.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (Darjah 3)
        rowNew9.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (Darjah 3)
        rowNew9.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (Darjah 3)
        rowNew9.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (Darjah 3)
        rowNew9.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 3)
        rowNew9.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 3)
        rowNew9.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 3)
        rowNew9.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (Darjah 3)
        rowNew9.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 3)
        rowNew9.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (Darjah 3)
        rowNew9.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (Darjah 3)
        rowNew9.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (Darjah 3)
        rowNew9.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (Darjah 3)
        rowNew9.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 3)
        rowNew9.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 3)
        rowNew9.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 3)
        rowNew9.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit  Ada Full Denture Bawah (Darjah 3)
        rowNew9.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (Darjah 3)
        rowNew9.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah (Darjah 3)
        rowNew9.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (Darjah 3)
        rowNew9.commit();

        // Reten Sekolah (Darjah 4)
        let rowNew10 = worksheet.getRow(17);
        rowNew10.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (Darjah 4)
        rowNew10.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (Darjah 4)
        rowNew10.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (Darjah 4)
        rowNew10.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (Darjah 4)
        rowNew10.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (Darjah 4)
        rowNew10.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (Darjah 4)
        rowNew10.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (Darjah 4)
        rowNew10.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (Darjah 4)
        rowNew10.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (Darjah 4)
        rowNew10.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (Darjah 4)
        rowNew10.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (Darjah 4)
        rowNew10.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (Darjah 4)
        rowNew10.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (Darjah 4)
        rowNew10.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (Darjah 4)
        rowNew10.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (Darjah 4)
        rowNew10.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (Darjah 4)
        rowNew10.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (Darjah 4)
        rowNew10.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (Darjah 4)
        rowNew10.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (Darjah 4)
        rowNew10.getCell(24).value =
          results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (Darjah 4)
        rowNew10.getCell(25).value = results.dfxEqualToZero; //dfx=0 (Darjah 4)
        rowNew10.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (Darjah 4)
        rowNew10.getCell(27).value = results.tprICDAS; //TPR ICDAS (Darjah 4)
        rowNew10.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (Darjah 4)
        rowNew10.getCell(29).value = results.cleftAda; //cleft Ada (Darjah 4)
        rowNew10.getCell(30).value = results.cleftRujuk; //cleft Rujuk (Darjah 4)
        rowNew10.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (Darjah 4)
        rowNew10.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (Darjah 4)
        rowNew10.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (Darjah 4)
        rowNew10.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (Darjah 4)
        rowNew10.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (Darjah 4)
        rowNew10.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (Darjah 4)
        rowNew10.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (Darjah 4)
        rowNew10.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 4)
        rowNew10.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 4)
        rowNew10.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 4)
        rowNew10.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 4)
        rowNew10.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 4)
        rowNew10.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 4)
        rowNew10.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (Darjah 4)
        rowNew10.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 4)
        rowNew10.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (Darjah 4)
        rowNew10.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (Darjah 4)
        rowNew10.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (Darjah 4)
        rowNew10.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (Darjah 4)
        rowNew10.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 4)
        rowNew10.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 4)
        rowNew10.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 4)
        rowNew10.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 4)
        rowNew10.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 4)
        rowNew10.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 4)
        rowNew10.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (Darjah 4)
        rowNew10.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (Darjah 4)
        rowNew10.getCell(61).value = results.penskaleran; // Penskelaran (Darjah 4)
        rowNew10.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (Darjah 4)
        rowNew10.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (Darjah 4)
        rowNew10.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (Darjah 4)
        rowNew10.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (Darjah 4)
        rowNew10.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (Darjah 4)
        rowNew10.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (Darjah 4)
        rowNew10.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (Darjah 4)
        rowNew10.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (Darjah 4)
        rowNew10.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit Ada Full Denture Atas (Darjah 4)
        rowNew10.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit Ada Partial Denture Atas (Darjah 4)
        rowNew10.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit Perlu Full Denture Atas (Darjah 4)
        rowNew10.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit Perlu Partial Denture Atas (Darjah 4)
        rowNew10.commit();

        let rowNew11 = worksheet.getRow(18);
        rowNew11.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (Darjah 4)
        rowNew11.commit();

        let rowNew12 = worksheet.getRow(19);
        rowNew12.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (Darjah 4)
        rowNew12.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(Darjah 4)
        rowNew12.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (Darjah 4)
        rowNew12.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (Darjah 4)
        rowNew12.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (Darjah 4)
        rowNew12.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (Darjah 4)
        rowNew12.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 4)
        rowNew12.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 4)
        rowNew12.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 4)
        rowNew12.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (Darjah 4)
        rowNew12.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 4)
        rowNew12.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (Darjah 4)
        rowNew12.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (Darjah 4)
        rowNew12.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (Darjah 4)
        rowNew12.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (Darjah 4)
        rowNew12.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 4)
        rowNew12.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 4)
        rowNew12.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 4)
        rowNew12.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit Ada Full Denture Bawah (Darjah 4)
        rowNew12.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (Darjah 4)
        rowNew12.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah (Darjah 4)
        rowNew12.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (Darjah 4)
        rowNew12.commit();

        // Reten Sekolah (Darjah 5)
        let rowNew13 = worksheet.getRow(17);
        rowNew13.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (Darjah 5)
        rowNew13.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (Darjah 5)
        rowNew13.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (Darjah 5)
        rowNew13.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (Darjah 5)
        rowNew13.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (Darjah 5)
        rowNew13.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (Darjah 5)
        rowNew13.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (Darjah 5)
        rowNew13.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (Darjah 5)
        rowNew13.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (Darjah 5)
        rowNew13.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (Darjah 5)
        rowNew13.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (Darjah 5)
        rowNew13.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (Darjah 5)
        rowNew13.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (Darjah 5)
        rowNew13.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (Darjah 5)
        rowNew13.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (Darjah 5)
        rowNew13.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (Darjah 5)
        rowNew13.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (Darjah 5)
        rowNew13.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (Darjah 5)
        rowNew13.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (Darjah 5)
        rowNew13.getCell(24).value =
          results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (Darjah 5)
        rowNew13.getCell(25).value = results.dfxEqualToZero; //dfx=0 (Darjah 5)
        rowNew13.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (Darjah 5)
        rowNew13.getCell(27).value = results.tprICDAS; //TPR ICDAS (Darjah 5)
        rowNew13.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (Darjah 5)
        rowNew13.getCell(29).value = results.cleftAda; //cleft Ada (Darjah 5)
        rowNew13.getCell(30).value = results.cleftRujuk; //cleft Rujuk (Darjah 5)
        rowNew13.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (Darjah 5)
        rowNew13.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (Darjah 5)
        rowNew13.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (Darjah 5)
        rowNew13.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (Darjah 5)
        rowNew13.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (Darjah 5)
        rowNew13.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (Darjah 5)
        rowNew13.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (Darjah 5)
        rowNew13.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 5)
        rowNew13.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 5)
        rowNew13.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 5)
        rowNew13.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 5)
        rowNew13.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 5)
        rowNew13.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 5)
        rowNew13.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (Darjah 5)
        rowNew13.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 5)
        rowNew13.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (Darjah 5)
        rowNew13.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (Darjah 5)
        rowNew13.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (Darjah 5)
        rowNew13.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (Darjah 5)
        rowNew13.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 5)
        rowNew13.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 5)
        rowNew13.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 5)
        rowNew13.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 5)
        rowNew13.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 5)
        rowNew13.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 5)
        rowNew13.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (Darjah 5)
        rowNew13.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (Darjah 5)
        rowNew13.getCell(61).value = results.penskaleran; // Penskelaran (Darjah 5)
        rowNew13.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (Darjah 5)
        rowNew13.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (Darjah 5)
        rowNew13.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (Darjah 5)
        rowNew13.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (Darjah 5)
        rowNew13.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (Darjah 5)
        rowNew13.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (Darjah 5)
        rowNew13.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (Darjah 5)
        rowNew13.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (Darjah 5)
        rowNew13.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit Ada Full Denture Atas (Darjah 5)
        rowNew13.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit Ada Partial Denture Atas (Darjah 5)
        rowNew13.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit Perlu Full Denture Atas (Darjah 5)
        rowNew13.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit Perlu Partial Denture Atas (Darjah 5)
        rowNew13.commit();

        let rowNew14 = worksheet.getRow(18);
        rowNew14.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (Darjah 5)
        rowNew14.commit();

        let rowNew15 = worksheet.getRow(19);
        rowNew15.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (Darjah 5)
        rowNew15.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(Darjah 5)
        rowNew15.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (Darjah 5)
        rowNew15.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (Darjah 5)
        rowNew15.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (Darjah 5)
        rowNew15.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (Darjah 5)
        rowNew15.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 5)
        rowNew15.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 5)
        rowNew15.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 5)
        rowNew15.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (Darjah 5)
        rowNew15.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 5)
        rowNew15.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (Darjah 5)
        rowNew15.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (Darjah 5)
        rowNew15.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (Darjah 5)
        rowNew15.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (Darjah 5)
        rowNew15.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 5)
        rowNew15.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 5)
        rowNew15.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 5)
        rowNew15.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit Ada Full Denture Bawah(Darjah 5)
        rowNew15.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (Darjah 5)
        rowNew15.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah(Darjah 5)
        rowNew15.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (Darjah 5)
        rowNew15.commit();

        // Reten Sekolah (Darjah 6 OR Peralihan)
        let rowNew16 = worksheet.getRow(17);
        rowNew16.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (Darjah 6 OR Peralihan)
        rowNew16.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (Darjah 6 OR Peralihan)
        rowNew16.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (Darjah 6 OR Peralihan)
        rowNew16.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (Darjah 6 OR Peralihan)
        rowNew16.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (Darjah 6 OR Peralihan)
        rowNew16.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (Darjah 6 OR Peralihan)
        rowNew16.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (Darjah 6 OR Peralihan)
        rowNew16.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (Darjah 6 OR Peralihan)
        rowNew16.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (Darjah 6 OR Peralihan)
        rowNew16.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (Darjah 6 OR Peralihan)
        rowNew16.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (Darjah 6 OR Peralihan)
        rowNew16.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (Darjah 6 OR Peralihan)
        rowNew16.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (Darjah 6 OR Peralihan)
        rowNew16.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (Darjah 6 OR Peralihan)
        rowNew16.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (Darjah 6 OR Peralihan)
        rowNew16.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (Darjah 6 OR Peralihan)
        rowNew16.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (Darjah 6 OR Peralihan)
        rowNew16.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (Darjah 6 OR Peralihan)
        rowNew16.getCell(24).value =
          results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (Darjah 6 OR Peralihan)
        rowNew16.getCell(25).value = results.dfxEqualToZero; //dfx=0 (Darjah 6 OR Peralihan)
        rowNew16.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (Darjah 6 OR Peralihan)
        rowNew16.getCell(27).value = results.tprICDAS; //TPR ICDAS (Darjah 6 OR Peralihan)
        rowNew16.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (Darjah 6 OR Peralihan)
        rowNew16.getCell(29).value = results.cleftAda; //cleft Ada (Darjah 6 OR Peralihan)
        rowNew16.getCell(30).value = results.cleftRujuk; //cleft Rujuk (Darjah 6 OR Peralihan)
        rowNew16.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (Darjah 6 OR Peralihan)
        rowNew16.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (Darjah 6 OR Peralihan)
        rowNew16.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (Darjah 6 OR Peralihan)
        rowNew16.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (Darjah 6 OR Peralihan)
        rowNew16.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (Darjah 6 OR Peralihan)
        rowNew16.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew16.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew16.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan)
        rowNew16.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan)
        rowNew16.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (Darjah 6 OR Peralihan)
        rowNew16.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (Darjah 6 OR Peralihan)
        rowNew16.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew16.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew16.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (Darjah 6 OR Peralihan)
        rowNew16.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (Darjah 6 OR Peralihan)
        rowNew16.getCell(61).value = results.penskaleran; // Penskelaran (Darjah 6 OR Peralihan)
        rowNew16.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (Darjah 6 OR Peralihan)
        rowNew16.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (Darjah 6 OR Peralihan)
        rowNew16.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (Darjah 6 OR Peralihan)
        rowNew16.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (Darjah 6 OR Peralihan)
        rowNew16.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (Darjah 6 OR Peralihan)
        rowNew16.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (Darjah 6 OR Peralihan)
        rowNew16.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (Darjah 6 OR Peralihan)
        rowNew16.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (Darjah 6 OR Peralihan)
        rowNew16.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit Ada Full Denture Atas (Darjah 6 OR Peralihan)
        rowNew16.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit Ada Partial Denture Atas (Darjah 6 OR Peralihan)
        rowNew16.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit Perlu Full Denture Atas (Darjah 6 OR Peralihan)
        rowNew16.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit Perlu Partial Denture Atas (Darjah 6 OR Peralihan)
        rowNew16.commit();

        let rowNew17 = worksheet.getRow(18);
        rowNew17.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (Darjah 6 OR Peralihan)
        rowNew17.commit();

        let rowNew18 = worksheet.getRow(19);
        rowNew18.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (Darjah 6 OR Peralihan)
        rowNew18.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(Darjah 6 OR Peralihan)
        rowNew18.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (Darjah 6 OR Peralihan)
        rowNew18.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (Darjah 6 OR Peralihan)
        rowNew18.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew18.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew18.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan)
        rowNew18.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan)
        rowNew18.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (Darjah 6 OR Peralihan)
        rowNew18.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (Darjah 6 OR Peralihan)
        rowNew18.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew18.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (Darjah 6 OR Peralihan)
        rowNew18.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit Ada Full Denture Bawah (Darjah 6 OR Peralihan)
        rowNew18.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (Darjah 6 OR Peralihan)
        rowNew18.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah (Darjah 6 OR Peralihan)
        rowNew18.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (Darjah 6 OR Peralihan)
        rowNew18.commit();

        // Reten Sekolah (KKI)
        let rowNew19 = worksheet.getRow(17);
        rowNew19.getCell(2).value = results.kedatanganEnggan; //Kedatangan enggan (KKI)
        rowNew19.getCell(3).value = results.kedatanganTidakHadir; //Kedatangan Tidak Hadir (KKI)
        rowNew19.getCell(4).value = results.enrolmen; //Kedatangan enrolmen (KKI)
        rowNew19.getCell(5).value = results.kedatanganBaru; //Kedatangan baru (KKI)
        rowNew19.getCell(6).value = results.kedatanganUlangan; //Kedatangan ulangan (KKI)
        rowNew19.getCell(8).value = results.skorPlakA; //Kebersihan Mulut Skor A (KKI)
        rowNew19.getCell(9).value = results.dStatusdfx; //Karies Gigi Desidus (d) (KKI)
        rowNew19.getCell(10).value = results.fStatusdfx; //Telah Ditampal Gigi Desidus (f) (KKI)
        rowNew19.getCell(11).value = results.xStatusdfx; //Gigi Desidus Perlu Ditampal (x) (KKI)
        rowNew19.getCell(13).value = results.eStatusDMFX; //Karies Awal Gigi Kekal (E) (KKI)
        rowNew19.getCell(14).value = results.dStatusDMFX; //Karies Gigi Kekal (D) (KKI)
        rowNew19.getCell(15).value = results.mStatusDMFX; //Gigi Kekal Telah Dicabut (M) (KKI)
        rowNew19.getCell(16).value = results.fStatusDMFX; //Gigi Kekal Telah Ditampal (F) (KKI)
        rowNew19.getCell(17).value = results.xStatusDMFX; //Jumlah DMFX (KKI)
        rowNew19.getCell(19).value = results.gigiKekalDMFXsamaAtauKurangDari3; //Status Gigi Kekal DMFX <= 3 (KKI)
        rowNew19.getCell(20).value = results.totalStatusGigiKekalSamaKosong; //Status Gigi Kekal X+M = results.0  (KKI)
        rowNew19.getCell(21).value = results.eMoreThanZero; //E≥1 (ada karies awal) (KKI)
        rowNew19.getCell(22).value = results.mbk; //Mulut Bebas Karies (MBK) (KKI)
        rowNew19.getCell(23).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 (KKI)
        rowNew19.getCell(24).value =
          results.statusBebasKariesTapiElebihDariSatu; //Bebas Karies (BK) tetapi E ≥ 1 (KKI)
        rowNew19.getCell(25).value = results.dfxEqualToZero; //dfx=0 (KKI)
        rowNew19.getCell(26).value = results.mulutBebasGingivitis; //Mulut Bebas Gingivitis (MBG) (KKI)
        rowNew19.getCell(27).value = results.tprICDAS; //TPR ICDAS (KKI)
        rowNew19.getCell(28).value = results.kecederaanGigiAnterior; //Kecederaan gigi Anterior (KKI)
        rowNew19.getCell(29).value = results.cleftAda; //cleft Ada (KKI)
        rowNew19.getCell(30).value = results.cleftRujuk; //cleft Rujuk (KKI)
        rowNew19.getCell(32).value = results.perluFSMuridB; //Bil. Murid Baru perlu Fisur Sealan (KKI)
        rowNew19.getCell(33).value = results.perluFSGigiB; //Bil. Gigi Baru perlu Fisur Sealan (KKI)
        rowNew19.getCell(34).value = results.perluFsBilGigiFailed; //Bilangan Gigi 'Failed' Semula FS (KKI)
        rowNew19.getCell(35).value = results.perluFvMuridB; //Bil. Murid Baru perlu Fluoride varnish (KKI)
        rowNew19.getCell(36).value = results.perluFvGigiB; //Bil. Gigi Baru perlu Fluoride varnish (KKI)
        rowNew19.getCell(37).value = results.perluPRR1MuridB; //Bil. Murid Baru perlu PRR Jenis 1 (KKI)
        rowNew19.getCell(38).value = results.perluPRR1BGigiB; //Bil. Gigi Baru perlu PRR Jenis 1 (KKI)
        rowNew19.getCell(39).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (KKI)
        rowNew19.getCell(40).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (KKI)
        rowNew19.getCell(41).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (KKI)
        rowNew19.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (KKI)
        rowNew19.getCell(43).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (KKI)
        rowNew19.getCell(44).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (KKI)
        rowNew19.getCell(46).value = results.telahFSMuridB; //Bil. Murid B Telah Menerima Fisur Sealan (KKI)
        rowNew19.getCell(47).value = results.telahFSGigiB; //Bil. Gigi B Telah Menerima Fisur Sealan (KKI)
        rowNew19.getCell(48).value = results.telahFVMuridB; //Bil. Murid B Telah Menerima Fluoride Varnish (KKI)
        rowNew19.getCell(49).value = results.telahFVGigiB; //Bil. Gigi B Telah Menerima Fluoride Varnish (KKI)
        rowNew19.getCell(50).value = results.telahPRR1MuridB; //Bil. Murid B Telah Menerima PRR Jenis 1 (KKI)
        rowNew19.getCell(51).value = results.telahPRR1GigiB; //Bil. Gigi B Telah Menerima PRR Jenis 1 (KKI)
        rowNew19.getCell(52).value = results.telahTampalanAntGdB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (KKI)
        rowNew19.getCell(53).value = results.telahTampalanAntGkB; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (KKI)
        rowNew19.getCell(54).value = results.telahTampalanPosGdB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (KKI)
        rowNew19.getCell(55).value = results.telahTampalanPosGkB; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (KKI)
        rowNew19.getCell(56).value = results.telahTampalanAmgGdB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (KKI)
        rowNew19.getCell(57).value = results.telahTampalanAmgGkB; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (KKI)
        rowNew19.getCell(59).value = results.cabutanGd; // Gigi Desidus Dicabut (KKI)
        rowNew19.getCell(60).value = results.cabutanGk; // Gigi Kekal Dicabut (KKI)
        rowNew19.getCell(61).value = results.penskaleran; // Penskelaran (KKI)
        rowNew19.getCell(62).value = results.caseCompleted; // Kes Selesai ICDAS (KKI)
        rowNew19.getCell(63).value = results.skorGIS0; // GIS SKOR 0 (KKI)
        rowNew19.getCell(64).value = results.skorGIS1; // GIS SKOR 1 (KKI)
        rowNew19.getCell(65).value = results.skorGIS2; // GIS SKOR 2 (KKI)
        rowNew19.getCell(66).value = results.skorGIS3; // GIS SKOR 3 (KKI)
        rowNew19.getCell(68).value = results.traumaTSL; // Trauma Tooth Surface Loss (KKI)
        rowNew19.getCell(69).value = results.traumaTisuLembut; // Trauma Tisu Lembut (KKI)
        rowNew19.getCell(70).value = results.traumaTisuKeras; // Trauma Tisu Keras (KKI)
        rowNew19.getCell(72).value = results.pesakitAdaFullDentureAtas; // Pesakit Ada Full Denture Atas (KKI)
        rowNew19.getCel(73).value = results.pesakitAdaPartialDentureAtas; // Pesakit Ada Partial Denture Atas (KKI)
        rowNew19.getCell(74).value = results.pesakitPerluFullDentureAtas; // Pesakit Perlu Full Denture Atas (KKI)
        rowNew19.getCell(75).value = results.pesakitPerluPartialDentureAtas; // Pesakit Perlu Partial Denture Atas (KKI)
        rowNew19.commit();

        let rowNew20 = worksheet.getRow(18);
        rowNew20.getCell(8).value = results.skorPlakC; //Kebersihan Mulut Skor C (KKI)
        rowNew20.commit();

        let rowNew21 = worksheet.getRow(19);
        rowNew21.getCell(8).value = results.skorPlakE; //Kebersihan Mulut Skor E (KKI)
        rowNew21.getCell(33).value = results.perluFSGigiS; //Bil. Gigi Semula perlu Fisur Sealan	(KKI)
        rowNew21.getCell(35).value = results.perluFvMuridS; //Bil. Murid Semula perlu Fluoride varnish (KKI)
        rowNew21.getCell(36).value = results.perluFvGigiS; //Bil. Gigi Semula perlu Fluoride varnish (KKI)
        rowNew21.getCell(37).value = results.perluPRR1MuridS; //Bil. Murid Semula perlu PRR Jenis 1 (KKI)
        rowNew21.getCell(38).value = results.perluPRR1BGigiS; //Bil. Gigi Semula perlu PRR Jenis 1 (KKI)
        rowNew21.getCell(39).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (KKI)
        rowNew21.getCell(40).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (KKI)
        rowNew21.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (KKI)
        rowNew21.getCell(42).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (KKI)
        rowNew21.getCell(43).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (KKI)
        rowNew21.getCell(44).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (KKI)
        rowNew21.getCell(46).value = results.telahFSMuridS; //Bil. Murid S Telah Menerima Fisur Sealan (KKI)
        rowNew21.getCell(47).value = results.telahFSGigiS; //Bil. Gigi S Telah Menerima Fisur Sealan (KKI)
        rowNew21.getCell(48).value = results.telahFVMuridS; //Bil. Murid S Telah Menerima Fluoride Varnish (KKI)
        rowNew21.getCell(49).value = results.telahFVGigiS; //Bil. Gigi S Telah Menerima Fluoride Varnish (KKI)
        rowNew21.getCell(50).value = results.telahPRR1MuridS; //Bil. Murid S Telah Menerima PRR Jenis 1 (KKI)
        rowNew21.getCell(51).value = results.telahPRR1GigiS; //Bil. Gigi S Telah Menerima PRR Jenis 1 (KKI)
        rowNew21.getCell(52).value = results.telahTampalanAntGdS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (KKI)
        rowNew21.getCell(53).value = results.telahTampalanAntGkS; //Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (KKI)
        rowNew21.getCell(54).value = results.telahTampalanPosGdS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (KKI)
        rowNew21.getCell(55).value = results.telahTampalanPosGkS; //Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (KKI)
        rowNew21.getCell(56).value = results.telahTampalanAmgGdS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (KKI)
        rowNew21.getCell(57).value = results.telahTampalanAmgGkS; //Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (KKI)
        rowNew21.getCell(72).value = results.pesakitAdaFullDentureBawah; // Pesakit Ada Full Denture Bawah (KKI)
        rowNew21.getCel(73).value = results.pesakitAdaPartialDentureBawah; // Pesakit Ada Partial Denture Bawah (KKI)
        rowNew21.getCell(74).value = results.pesakitPerluFullDentureBawah; // Pesakit Perlu Full Denture Bawah (KKI)
        rowNew21.getCell(75).value = results.pesakitPerluPartialDentureBawah; // Pesakit Perlu Partial Denture Bawah (KKI)
        rowNew21.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PG201A.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPGS203 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGS203.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PGS203');

        //Reten PGS 203
        //PraSekolah Tadika (Kerajaan)
        let rowNew = worksheet.getRow(16);
        rowNew.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru PraSekolah Tadika (Kerajaan)
        rowNew.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan PraSekolah Tadika (Kerajaan)
        rowNew.getCell(5).value = results.dStatusdfx; //d Status dfx PraSekolah Tadika (Kerajaan)
        rowNew.getCell(6).value = results.fStatusdfx; //f Status dfx PraSekolah Tadika (Kerajaan)
        rowNew.getCell(7).value = results.XStatusdfx; //X Status dfx PraSekolah Tadika (Kerajaan)
        rowNew.getCell(10).value = results.dStatusDMFX; //d Status DMFX PraSekolah Tadika (Kerajaan)
        rowNew.getCell(11).value = results.mStatusDMFX; //m Status DMFX PraSekolah Tadika (Kerajaan)
        rowNew.getCell(12).value = results.fStatusDMFX; //f Status DMFX PraSekolah Tadika (Kerajaan)
        rowNew.getCell(13).value = results.xStatusDMFX; //x Status DMFX PraSekolah Tadika (Kerajaan)
        rowNew.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) PraSekolah Tadika (Kerajaan)
        rowNew.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) PraSekolah Tadika (Kerajaan)
        rowNew.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior PraSekolah Tadika (Kerajaan)
        rowNew.getCell(25).value = results.tpr; //TPR PraSekolah Tadika (Kerajaan)
        rowNew.getCell(26).value = results.skorGIS0; //Skor GIS 0 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(27).value = results.skorGIS1; //Skor GIS 1 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(28).value = results.skorGIS2; //Skor GIS 2 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(29).value = results.skorGIS3; //Skor GIS 3 PraSekolah Tadika (Kerajaan)
        rowNew.getCell(30).value = results.perluFvMurid; //Perlu FV Murid PraSekolah Tadika (Kerajaan)
        rowNew.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid PraSekolah Tadika (Kerajaan)
        rowNew.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(50).value = results.telahFvMurid; //Telah FV Murid PraSekolah Tadika (Kerajaan)
        rowNew.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid PraSekolah Tadika (Kerajaan)
        rowNew.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B PraSekolah Tadika (Kerajaan)
        rowNew.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S PraSekolah Tadika (Kerajaan)
        rowNew.getCell(70).value = results.cabutanGd; //Cabutan GD PraSekolah Tadika (Kerajaan)
        rowNew.getCell(71).value = results.cabutanGk; //Cabutan GK PraSekolah Tadika (Kerajaan)
        rowNew.getCell(73).value = results.penskaleran; //Penskaleran PraSekolah Tadika (Kerajaan)
        rowNew.getCell(74).value = results.caseCompleted; //Kes Selesai PraSekolah Tadika (Kerajaan)

        //PraSekolah Tadika (Swasta)
        let rowNew2 = worksheet.getRow(17);
        rowNew2.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru PraSekolah Tadika (Swasta)
        rowNew2.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan PraSekolah Tadika (Swasta)
        rowNew2.getCell(5).value = results.dStatusdfx; //d Status dfx PraSekolah Tadika (Swasta)
        rowNew2.getCell(6).value = results.fStatusdfx; //f Status dfx PraSekolah Tadika (Swasta)
        rowNew2.getCell(7).value = results.XStatusdfx; //X Status dfx PraSekolah Tadika (Swasta)
        rowNew2.getCell(10).value = results.dStatusDMFX; //d Status DMFX PraSekolah Tadika (Swasta)
        rowNew2.getCell(11).value = results.mStatusDMFX; //m Status DMFX PraSekolah Tadika (Swasta)
        rowNew2.getCell(12).value = results.fStatusDMFX; //f Status DMFX PraSekolah Tadika (Swasta)
        rowNew2.getCell(13).value = results.xStatusDMFX; //x Status DMFX PraSekolah Tadika (Swasta)
        rowNew2.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) PraSekolah Tadika (Swasta)
        rowNew2.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 PraSekolah Tadika (Swasta)
        rowNew2.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 PraSekolah Tadika (Swasta)
        rowNew2.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 PraSekolah Tadika (Swasta)
        rowNew2.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 PraSekolah Tadika (Swasta)
        rowNew2.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 PraSekolah Tadika (Swasta)
        rowNew2.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) PraSekolah Tadika (Swasta)
        rowNew2.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 PraSekolah Tadika (Swasta)
        rowNew2.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior PraSekolah Tadika (Swasta)
        rowNew2.getCell(25).value = results.tpr; //TPR PraSekolah Tadika (Swasta)
        rowNew2.getCell(26).value = results.skorGIS0; //Skor GIS 0 PraSekolah Tadika (Swasta)
        rowNew2.getCell(27).value = results.skorGIS1; //Skor GIS 1 PraSekolah Tadika (Swasta)
        rowNew2.getCell(28).value = results.skorGIS2; //Skor GIS 2 PraSekolah Tadika (Swasta)
        rowNew2.getCell(29).value = results.skorGIS3; //Skor GIS 3 PraSekolah Tadika (Swasta)
        rowNew2.getCell(30).value = results.perluFvMurid; //Perlu FV Murid PraSekolah Tadika (Swasta)
        rowNew2.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid PraSekolah Tadika (Swasta)
        rowNew2.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B PraSekolah Tadika (Swasta)
        rowNew2.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S PraSekolah Tadika (Swasta)
        rowNew2.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B PraSekolah Tadika (Swasta)
        rowNew2.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S PraSekolah Tadika (Swasta)
        rowNew2.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B PraSekolah Tadika (Swasta)
        rowNew2.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S PraSekolah Tadika (Swasta)
        rowNew2.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B PraSekolah Tadika (Swasta)
        rowNew2.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S PraSekolah Tadika (Swasta)
        rowNew2.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B PraSekolah Tadika (Swasta)
        rowNew2.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S PraSekolah Tadika (Swasta)
        rowNew2.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B PraSekolah Tadika (Swasta)
        rowNew2.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S PraSekolah Tadika (Swasta)
        rowNew2.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B PraSekolah Tadika (Swasta)
        rowNew2.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S PraSekolah Tadika (Swasta)
        rowNew2.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B PraSekolah Tadika (Swasta)
        rowNew2.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S PraSekolah Tadika (Swasta)
        rowNew2.getCell(50).value = results.telahFvMurid; //Telah FV Murid PraSekolah Tadika (Swasta)
        rowNew2.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid PraSekolah Tadika (Swasta)
        rowNew2.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B PraSekolah Tadika (Swasta)
        rowNew2.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S PraSekolah Tadika (Swasta)
        rowNew2.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B PraSekolah Tadika (Swasta)
        rowNew2.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S PraSekolah Tadika (Swasta)
        rowNew2.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B PraSekolah Tadika (Swasta)
        rowNew2.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S PraSekolah Tadika (Swasta)
        rowNew2.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B PraSekolah Tadika (Swasta)
        rowNew2.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S PraSekolah Tadika (Swasta)
        rowNew2.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B PraSekolah Tadika (Swasta)
        rowNew2.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S PraSekolah Tadika (Swasta)
        rowNew2.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B PraSekolah Tadika (Swasta)
        rowNew2.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S PraSekolah Tadika (Swasta)
        rowNew2.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B PraSekolah Tadika (Swasta)
        rowNew2.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S PraSekolah Tadika (Swasta)
        rowNew2.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B PraSekolah Tadika (Swasta)
        rowNew2.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S PraSekolah Tadika (Swasta)
        rowNew2.getCell(70).value = results.cabutanGd; //Cabutan GD PraSekolah Tadika (Swasta)
        rowNew2.getCell(71).value = results.cabutanGk; //Cabutan GK PraSekolah Tadika (Swasta)
        rowNew2.getCell(73).value = results.penskaleran; //Penskaleran PraSekolah Tadika (Swasta)
        rowNew2.getCell(74).value = results.caseCompleted; //Kes Selesai PraSekolah Tadika (Swasta)

        //PraSekolah Tadika (Murid Pendidikan Khas)
        let rowNew3 = worksheet.getRow(18);
        rowNew3.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(5).value = results.dStatusdfx; //d Status dfx PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(6).value = results.fStatusdfx; //f Status dfx PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(7).value = results.XStatusdfx; //X Status dfx PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(10).value = results.dStatusDMFX; //d Status DMFX PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(11).value = results.mStatusDMFX; //m Status DMFX PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(12).value = results.fStatusDMFX; //f Status DMFX PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(13).value = results.xStatusDMFX; //x Status DMFX PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(25).value = results.tpr; //TPR PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(26).value = results.skorGIS0; //Skor GIS 0 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(27).value = results.skorGIS1; //Skor GIS 1 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(28).value = results.skorGIS2; //Skor GIS 2 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(29).value = results.skorGIS3; //Skor GIS 3 PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(30).value = results.perluFvMurid; //Perlu FV Murid PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(50).value = results.telahFvMurid; //Telah FV Murid PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(70).value = results.cabutanGd; //Cabutan GD PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(71).value = results.cabutanGk; //Cabutan GK PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(73).value = results.penskaleran; //Penskaleran PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.getCell(74).value = results.caseCompleted; //Kes Selesai PraSekolah Tadika (Murid Pendidikan Khas)
        rowNew3.commit();

        //Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        let rowNew4 = worksheet.getRow(20);
        rowNew4.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Tahun 1)
        rowNew4.getCell(74).value = results.caseCompleted; //Kes Selesai Klinik atau Pusat Pergigian Sekolah (Tahun 1)a
        rowNew4.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        let rowNew5 = worksheet.getRow(21);
        rowNew5.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Tahun 1)
        rowNew5.commit();

        //Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        let rowNew6 = worksheet.getRow(23);
        rowNew6.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.getCell(74).value = results.caseCompleted; //Kes Selesai Klinik atau Pusat Pergigian Sekolah (Tahun 6)
        rowNew6.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        let rowNew7 = worksheet.getRow(24);
        rowNew7.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Tahun 6)
        rowNew7.commit();

        //Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        let rowNew8 = worksheet.getRow(26);
        rowNew8.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.getCell(74).value = results.caseCompleted; //Kes Selesai Pusat Pergigian Sekolah (Pendidikan Khas Rendah)
        rowNew8.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        let rowNew9 = worksheet.getRow(27);
        rowNew9.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(23).value = results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Rendah)
        rowNew9.commit();

        //Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        let rowNew10 = worksheet.getRow(29);
        rowNew10.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.getCell(74).value = results.caseCompleted; //Kes Selesai Pusat Pergigian Sekolah (Semua Murid Sekolah Rendah)
        rowNew10.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        let rowNew11 = worksheet.getRow(30);
        rowNew11.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Rendah)
        rowNew11.commit();

        //Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        let rowNew12 = worksheet.getRow(32);
        rowNew12.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.getCell(74).value = results.caseCompleted; //Kes Selesai Pusat Pergigian Sekolah (Tingkatan 4)
        rowNew12.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        let rowNew13 = worksheet.getRow(33);
        rowNew13.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)
        rowNew13.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Tingkatan 4)\
        rowNew13.commit();

        //Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        let rowNew14 = worksheet.getRow(35);
        rowNew14.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.getCell(74).value = results.caseCompleted; //Kes Selesai Pusat Pergigian Sekolah (Pendidikan Khas Menengah)
        rowNew14.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        let rowNew15 = worksheet.getRow(36);
        rowNew15.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Pendidikan Khas Menengah)
        rowNew15.commit();

        //Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        let rowNew16 = worksheet.getRow(38);
        rowNew16.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(5).value = results.dStatusdfx; //d Status dfx Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(6).value = results.fStatusdfx; //f Status dfx Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(7).value = results.XStatusdfx; //X Status dfx Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(10).value = results.dStatusDMFX; //d Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(11).value = results.mStatusDMFX; //m Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(12).value = results.fStatusDMFX; //f Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(13).value = results.xStatusDMFX; //x Status DMFX Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(25).value = results.tpr; //TPR Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(26).value = results.skorGIS0; //Skor GIS 0 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(27).value = results.skorGIS1; //Skor GIS 1 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(28).value = results.skorGIS2; //Skor GIS 2 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(29).value = results.skorGIS3; //Skor GIS 3 Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(50).value = results.telahFvMurid; //Telah FV Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(70).value = results.cabutanGd; //Cabutan GD Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(71).value = results.cabutanGk; //Cabutan GK Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(73).value = results.penskaleran; //Penskaleran Klinik atau Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.getCell(74).value = results.caseCompleted; //Kes Selesai Pusat Pergigian Sekolah (Semua Murid Sekolah Menengah)
        rowNew16.commit();

        //Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        let rowNew17 = worksheet.getRow(39);
        rowNew17.getCell(3).value = results.kedatanganEnggan; //Kedatangan Baru Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(4).value = results.kedatanganUlangan; //Kedatangn Ulangan Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(5).value = results.dStatusdfx; //d Status dfx Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(6).value = results.fStatusdfx; //f Status dfx Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(7).value = results.XStatusdfx; //X Status dfx Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(10).value = results.dStatusDMFX; //d Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(11).value = results.mStatusDMFX; //m Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(12).value = results.fStatusDMFX; //f Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(13).value = results.xStatusDMFX; //x Status DMFX Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(16).value = results.mbk; //Mulut Bebas Karies (MBK) Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(17).value = results.dfxEqualToZero; //dfx = results.0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(18).value = results.statusBebasKaries; //Status Gigi Kekal Bebas Karies (BK) DMFX = results.0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(19).value = results.totalStatusGigiKekalSamaKosong; //X + M = results.0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(20).value = results.gigiKekalDMFXsamaAtauKurangDari1; //DMFX <= 1 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(21).value = results.gigiKekalDMFXsamaAtauKurangDari2; //DMFX <=2 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(22).value = results.eMoreThanZero; //E ≥ 1 (ada karies awal) Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(23).value =
          results.statusBebasKariesTapiElebihDariSatu; //Status Gigi Kekal Bebas Karies (BK) tetapi E ≥ 1 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(24).value = results.kecederaanGigiAnterior; //Kecederaan Gigi Anterior Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(25).value = results.tpr; //TPR Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(26).value = results.skorGIS0; //Skor GIS 0 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(27).value = results.skorGIS1; //Skor GIS 1 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(28).value = results.skorGIS2; //Skor GIS 2 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(29).value = results.skorGIS3; //Skor GIS 3 Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(30).value = results.perluFvMurid; //Perlu FV Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(31).value = results.perluPRR1Murid; //Perlu PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(32).value = results.perluFSMuridB; //Perlu FS Murid B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(33).value = results.perluFSMuridS; //Perlu FS Murid S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(34).value = results.perluFSGigiB; //Perlu FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(35).value = results.perluFSGigiS; //Perlu FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(36).value = results.perluTampalanAntGdB; //Perlu Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(37).value = results.perluTampalanAntGdS; //Perlu Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(38).value = results.perluTampalanAntGkB; //Perlu Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(39).value = results.perluTampalanAntGkS; //Perlu Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(40).value = results.perluTampalanPosGdB; //Perlu Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(41).value = results.perluTampalanPosGdS; //Perlu Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(42).value = results.perluTampalanPosGkB; //Perlu Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(43).value = results.perluTampalanPosGkS; //Perlu Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(44).value = results.perluTampalanAmgGdB; //Perlu Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(45).value = results.perluTampalanAmgGdS; //Perlu Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(46).value = results.perluTampalanAmgGkB; //Perlu Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(47).value = results.perluTampalanAmgGkS; //Perlu Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(50).value = results.telahFvMurid; //Telah FV Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(51).value = results.telahPRR1Murid; //Telah PRR1 Murid Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(52).value = results.telahFSMuridB; //Telah FS Murid B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(53).value = results.telahFSMuridS; //Telah FS Murid S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(54).value = results.telahFSGigiB; //Telah FS Gigi B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(55).value = results.telahFSGigiS; //Telah FS Gigi S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(56).value = results.telahTampalanAntGdB; //Telah Tampalan Anterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(57).value = results.telahTampalanAntGdS; //Telah Tampalan Anterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(58).value = results.telahTampalanAntGkB; //Telah Tampalan Anterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(59).value = results.telahTampalanAntGkS; //Telah Tampalan Anterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(60).value = results.telahTampalanPosGdB; //Telah Tampalan Posterior Sewarna GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(61).value = results.telahTampalanPosGdS; //Telah Tampalan Posterior Sewarna GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(62).value = results.telahTampalanPosGkB; //Telah Tampalan Posterior Sewarna GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(63).value = results.telahTampalanPosGkS; //Telah Tampalan Posterior Sewarna GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(64).value = results.telahTampalanAmgGdB; //Telah Tampalan Posterior Amalgam GD B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(65).value = results.telahTampalanAmgGdS; //Telah Tampalan Posterior Amalgam GD S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(66).value = results.telahTampalanAmgGkB; //Telah Tampalan Posterior Amalgam GK B Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(67).value = results.telahTampalanAmgGkS; //Telah Tampalan Posterior Amalgam GK S Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(70).value = results.cabutanGd; //Cabutan GD Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(71).value = results.cabutanGk; //Cabutan GK Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(73).value = results.penskaleran; //Penskaleran Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.getCell(74).value = results.caseCompleted; //Kes Selesai Pasukan atau Klinik Pergigian Bergerak (Semua Murid Sekolah Menengah)
        rowNew17.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PGS203.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG201SMKP = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PG201SMKP.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PGS201SMKP');

        // darjah/tingkatan 1
        let rowNew = worksheet.getRow(17);
        rowNew.getCell(2).value = results.kedatanganEnggan; // Kedatangan  darjah/tingkatan 1
        rowNew.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  darjah/tingkatan 1
        rowNew.getCell(4).value = results.enrolmen; // Kedatangan  darjah/tingkatan 1
        rowNew.getCell(5).value = results.kedatanganbaru; // Kedatangan  darjah/tingkatan 1
        rowNew.getCell(6).value = results.kedatanganUlangan; // Kedatangan  darjah/tingkatan 1
        rowNew.getCell(7).value = results.skorPlakA; // Skor Plak A darjah/tingkatan 1
        rowNew.getCell(9).value = results.dStatusdfx; // d  darjah/tingkatan 1
        rowNew.getCell(10).value = results.fStatusdfx; // f  darjah/tingkatan 1
        rowNew.getCell(11).value = results.xStatusdfx; // x  darjah/tingkatan 1
        rowNew.getCell(13).value = results.dStatusDMFX; // D  darjah/tingkatan 1
        rowNew.getCell(14).value = results.mStatusDMFX; // M  darjah/tingkatan 1
        rowNew.getCell(15).value = results.fStatusDMFX; // F  darjah/tingkatan 1
        rowNew.getCell(16).value = results.xStatusDMFX; // X  darjah/tingkatan 1
        rowNew.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 darjah/tingkatan 1
        rowNew.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  darjah/tingkatan 1
        rowNew.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  darjah/tingkatan 1
        rowNew.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  darjah/tingkatan 1
        rowNew.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   darjah/tingkatan 1
        rowNew.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  darjah/tingkatan 1
        rowNew.getCell(24).value = results.tpr; // Tidak perlu rawatan  darjah/tingkatan 1
        rowNew.getCell(25).value = results.kecederaanGigiAnterior; // X  darjah/tingkatan 1
        rowNew.getCell(26).value = results.cleftAda; // X  darjah/tingkatan 1
        rowNew.getCell(27).value = results.cleftRujuk; // X  darjah/tingkatan 1
        rowNew.getCell(29).value = results.perluFSMuridB; // X  darjah/tingkatan 1
        rowNew.getCell(30).value = results.perluFSGigiB; // X  darjah/tingkatan 1
        rowNew.getCell(31).value = results.perluFsBilGigiFailed; // X  darjah/tingkatan 1
        rowNew.getCell(32).value = results.perluTampalanAntGdB; // X  darjah/tingkatan 1
        rowNew.getCell(33).value = results.perluTampalanAntGkB; // X  darjah/tingkatan 1
        rowNew.getCell(34).value = results.perluTampalanPosGdB; // X  darjah/tingkatan 1
        rowNew.getCell(35).value = results.perluTampalanPosGkB; // X  darjah/tingkatan 1
        rowNew.getCell(36).value = results.perluTampalanAmgGdB; // X  darjah/tingkatan 1
        rowNew.getCell(37).value = results.perluTampalanAmgGkB; // X  darjah/tingkatan 1
        rowNew.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  darjah/tingkatan 1
        rowNew.getCell(40).value = results.telahFSGigiB; //   darjah/tingkatan 1
        rowNew.getCell(41).value = results.telahTampalanAntGdB; // X  darjah/tingkatan 1
        rowNew.getCell(42).value = results.telahTampalanAntGkB; // X  darjah/tingkatan 1
        rowNew.getCell(43).value = results.telahTampalanPosGdB; // X  darjah/tingkatan 1
        rowNew.getCell(44).value = results.telahTampalanPosGkB; // X  darjah/tingkatan 1
        rowNew.getCell(45).value = results.telahTampalanAmgGdB; // X  darjah/tingkatan 1
        rowNew.getCell(46).value = results.telahTampalanAmgGkB; // X  darjah/tingkatan 1
        rowNew.getCell(48).value = results.cabutanGd; // Cabutan GD  darjah/tingkatan 1
        rowNew.getCell(49).value = results.cabutanGk; // Cabutan GK  darjah/tingkatan 1
        rowNew.getCell(50).value = results.penskaleran; // Penskaleran  darjah/tingkatan 1
        rowNew.getCell(51).value = results.kesSelesai; // Kes selesai  darjah/tingkatan 1
        rowNew.getCell(52).value = results.skorGIS0; // Skor GIS 0  darjah/tingkatan 1
        rowNew.getCell(53).value = results.skorGIS1; // Skor GIS 1  darjah/tingkatan 1
        rowNew.getCell(54).value = results.skorGIS2; // Skor GIS 2  darjah/tingkatan 1
        rowNew.getCell(55).value = results.skorGIS3; // Skor GIS 3  darjah/tingkatan 1
        rowNew.commit();

        let rowNew2 = worksheet.getRow(18);
        rowNew2.getCell(2).value = results.skorPlakC; // darjah/tingkatan 1
        rowNew2.commit();

        let rowNew3 = worksheet.getRow(19);
        rowNew3.getCell(2).value = results.skorPlakE; // darjah/tingkatan 1
        rowNew3.commit();

        let rowNew4 = worksheet.getRow(19);
        rowNew4.getCell(30).value = results.perluFSGigiS; // darjah/tingkatan 1
        rowNew4.getCell(32).value = results.perluTampalanAntGdS; //   darjah/tingkatan 1
        rowNew4.getCell(33).value = results.perluTampalanAntGkS; //   darjah/tingkatan 1
        rowNew4.getCell(34).value = results.perluTampalanPosGdS; //   darjah/tingkatan 1
        rowNew4.getCell(35).value = results.perluTampalanPosGkS; //   darjah/tingkatan 1
        rowNew4.getCell(36).value = results.perluTampalanAmgGdS; //   darjah/tingkatan 1
        rowNew4.getCell(37).value = results.perluTampalanAmgGkS; //   darjah/tingkatan 1
        rowNew4.getCell(39).value = results.telahFSMuridS; //   darjah/tingkatan 1
        rowNew4.getCell(40).value = results.telahFSGigiS; //   darjah/tingkatan 1
        rowNew4.getCell(41).value = results.telahTampalanAntGdS; //   darjah/tingkatan 1
        rowNew4.getCell(42).value = results.telahTampalanAntGkS; //   darjah/tingkatan 1
        rowNew4.getCell(43).value = results.telahTampalanPosGdS; //   darjah/tingkatan 1
        rowNew4.getCell(44).value = results.telahTampalanPosGkS; //   darjah/tingkatan 1
        rowNew4.getCell(45).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 1
        rowNew4.getCell(46).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 1
        rowNew4.commit();

        // darjah/tingkatan 2
        let rowNew5 = worksheet.getRow(20);
        rowNew5.getCell(2).value = results.kedatanganEnggan; // Kedatangan  darjah/tingkatan 2
        rowNew5.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  darjah/tingkatan 2
        rowNew5.getCell(4).value = results.enrolmen; // Kedatangan  darjah/tingkatan 2
        rowNew5.getCell(5).value = results.kedatanganbaru; // Kedatangan  darjah/tingkatan 2
        rowNew5.getCell(6).value = results.kedatanganUlangan; // Kedatangan  darjah/tingkatan 2
        rowNew5.getCell(7).value = results.skorPlakA; // Skor Plak A darjah/tingkatan 2
        rowNew5.getCell(9).value = results.dStatusdfx; // d  darjah/tingkatan 2
        rowNew5.getCell(10).value = results.fStatusdfx; // f  darjah/tingkatan 2
        rowNew5.getCell(11).value = results.xStatusdfx; // x  darjah/tingkatan 2
        rowNew5.getCell(13).value = results.dStatusDMFX; // D  darjah/tingkatan 2
        rowNew5.getCell(14).value = results.mStatusDMFX; // M  darjah/tingkatan 2
        rowNew5.getCell(15).value = results.fStatusDMFX; // F  darjah/tingkatan 2
        rowNew5.getCell(16).value = results.xStatusDMFX; // X  darjah/tingkatan 2
        rowNew5.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 darjah/tingkatan 2
        rowNew5.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  darjah/tingkatan 2
        rowNew5.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  darjah/tingkatan 2
        rowNew5.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  darjah/tingkatan 2
        rowNew5.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   darjah/tingkatan 2
        rowNew5.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  darjah/tingkatan 2
        rowNew5.getCell(24).value = results.tpr; // Tidak perlu rawatan  darjah/tingkatan 2
        rowNew5.getCell(25).value = results.kecederaanGigiAnterior; // X  darjah/tingkatan 2
        rowNew5.getCell(26).value = results.cleftAda; // X  darjah/tingkatan 2
        rowNew5.getCell(27).value = results.cleftRujuk; // X  darjah/tingkatan 2
        rowNew5.getCell(29).value = results.perluFSMuridB; // X  darjah/tingkatan 2
        rowNew5.getCell(30).value = results.perluFSGigiB; // X  darjah/tingkatan 2
        rowNew5.getCell(31).value = results.perluFsBilGigiFailed; // X  darjah/tingkatan 2
        rowNew5.getCell(32).value = results.perluTampalanAntGdB; // X  darjah/tingkatan 2
        rowNew5.getCell(33).value = results.perluTampalanAntGkB; // X  darjah/tingkatan 2
        rowNew5.getCell(34).value = results.perluTampalanPosGdB; // X  darjah/tingkatan 2
        rowNew5.getCell(35).value = results.perluTampalanPosGkB; // X  darjah/tingkatan 2
        rowNew5.getCell(36).value = results.perluTampalanAmgGdB; // X  darjah/tingkatan 2
        rowNew5.getCell(37).value = results.perluTampalanAmgGkB; // X  darjah/tingkatan 2
        rowNew5.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  darjah/tingkatan 2
        rowNew5.getCell(40).value = results.telahFSGigiB; //   darjah/tingkatan 2
        rowNew5.getCell(41).value = results.telahTampalanAntGdB; // X  darjah/tingkatan 2
        rowNew5.getCell(42).value = results.telahTampalanAntGkB; // X  darjah/tingkatan 2
        rowNew5.getCell(43).value = results.telahTampalanPosGdB; // X  darjah/tingkatan 2
        rowNew5.getCell(44).value = results.telahTampalanPosGkB; // X  darjah/tingkatan 2
        rowNew5.getCell(45).value = results.telahTampalanAmgGdB; // X  darjah/tingkatan 2
        rowNew5.getCell(46).value = results.telahTampalanAmgGkB; // X  darjah/tingkatan 2
        rowNew5.getCell(48).value = results.cabutanGd; // Cabutan GD  darjah/tingkatan 2
        rowNew5.getCell(49).value = results.cabutanGk; // Cabutan GK  darjah/tingkatan 2
        rowNew5.getCell(50).value = results.penskaleran; // Penskaleran  darjah/tingkatan 2
        rowNew5.getCell(51).value = results.kesSelesai; // Kes selesai  darjah/tingkatan 2
        rowNew5.getCell(52).value = results.skorGIS0; // Skor GIS 0  darjah/tingkatan 2
        rowNew5.getCell(53).value = results.skorGIS1; // Skor GIS 1  darjah/tingkatan 2
        rowNew5.getCell(54).value = results.skorGIS2; // Skor GIS 2  darjah/tingkatan 2
        rowNew5.getCell(55).value = results.skorGIS3; // Skor GIS 3  darjah/tingkatan 2
        rowNew5.commit();

        let rowNew6 = worksheet.getRow(21);
        rowNew6.getCell(2).value = results.skorPlakC; // darjah/tingkatan 2
        rowNew6.commit();

        let rowNew7 = worksheet.getRow(22);
        rowNew7.getCell(2).value = results.skorPlakE; // darjah/tingkatan 2
        rowNew7.commit();

        let rowNew8 = worksheet.getRow(22);
        rowNew8.getCell(30).value = results.perluFSGigiS; // darjah/tingkatan 2
        rowNew8.getCell(32).value = results.perluTampalanAntGdS; //   darjah/tingkatan 2
        rowNew8.getCell(33).value = results.perluTampalanAntGkS; //   darjah/tingkatan 2
        rowNew8.getCell(34).value = results.perluTampalanPosGdS; //   darjah/tingkatan 2
        rowNew8.getCell(35).value = results.perluTampalanPosGkS; //   darjah/tingkatan 2
        rowNew8.getCell(36).value = results.perluTampalanAmgGdS; //   darjah/tingkatan 2
        rowNew8.getCell(37).value = results.perluTampalanAmgGkS; //   darjah/tingkatan 2
        rowNew8.getCell(39).value = results.telahFSMuridS; //   darjah/tingkatan 2
        rowNew8.getCell(40).value = results.telahFSGigiS; //   darjah/tingkatan 2
        rowNew8.getCell(41).value = results.telahTampalanAntGdS; //   darjah/tingkatan 2
        rowNew8.getCell(42).value = results.telahTampalanAntGkS; //   darjah/tingkatan 2
        rowNew8.getCell(43).value = results.telahTampalanPosGdS; //   darjah/tingkatan 2
        rowNew8.getCell(44).value = results.telahTampalanPosGkS; //   darjah/tingkatan 2
        rowNew8.getCell(45).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 2
        rowNew8.getCell(46).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 2
        rowNew8.commit();

        // darjah/tingkatan 3
        let rowNew9 = worksheet.getRow(23);
        rowNew9.getCell(2).value = results.kedatanganEnggan; // Kedatangan  darjah/tingkatan 3
        rowNew9.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  darjah/tingkatan 3
        rowNew9.getCell(4).value = results.enrolmen; // Kedatangan  darjah/tingkatan 3
        rowNew9.getCell(5).value = results.kedatanganbaru; // Kedatangan  darjah/tingkatan 3
        rowNew9.getCell(6).value = results.kedatanganUlangan; // Kedatangan  darjah/tingkatan 3
        rowNew9.getCell(7).value = results.skorPlakA; // Skor Plak A darjah/tingkatan 3
        rowNew9.getCell(9).value = results.dStatusdfx; // d  darjah/tingkatan 3
        rowNew9.getCell(10).value = results.fStatusdfx; // f  darjah/tingkatan 3
        rowNew9.getCell(11).value = results.xStatusdfx; // x  darjah/tingkatan 3
        rowNew9.getCell(13).value = results.dStatusDMFX; // D  darjah/tingkatan 3
        rowNew9.getCell(14).value = results.mStatusDMFX; // M  darjah/tingkatan 3
        rowNew9.getCell(15).value = results.fStatusDMFX; // F  darjah/tingkatan 3
        rowNew9.getCell(16).value = results.xStatusDMFX; // X  darjah/tingkatan 3
        rowNew9.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 darjah/tingkatan 3
        rowNew9.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  darjah/tingkatan 3
        rowNew9.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  darjah/tingkatan 3
        rowNew9.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  darjah/tingkatan 3
        rowNew9.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   darjah/tingkatan 3
        rowNew9.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  darjah/tingkatan 3
        rowNew9.getCell(24).value = results.tpr; // Tidak perlu rawatan  darjah/tingkatan 3
        rowNew9.getCell(25).value = results.kecederaanGigiAnterior; // X  darjah/tingkatan 3
        rowNew9.getCell(26).value = results.cleftAda; // X  darjah/tingkatan 3
        rowNew9.getCell(27).value = results.cleftRujuk; // X  darjah/tingkatan 3
        rowNew9.getCell(29).value = results.perluFSMuridB; // X  darjah/tingkatan 3
        rowNew9.getCell(30).value = results.perluFSGigiB; // X  darjah/tingkatan 3
        rowNew9.getCell(31).value = results.perluFsBilGigiFailed; // X  darjah/tingkatan 3
        rowNew9.getCell(32).value = results.perluTampalanAntGdB; // X  darjah/tingkatan 3
        rowNew9.getCell(33).value = results.perluTampalanAntGkB; // X  darjah/tingkatan 3
        rowNew9.getCell(34).value = results.perluTampalanPosGdB; // X  darjah/tingkatan 3
        rowNew9.getCell(35).value = results.perluTampalanPosGkB; // X  darjah/tingkatan 3
        rowNew9.getCell(36).value = results.perluTampalanAmgGdB; // X  darjah/tingkatan 3
        rowNew9.getCell(37).value = results.perluTampalanAmgGkB; // X  darjah/tingkatan 3
        rowNew9.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  darjah/tingkatan 3
        rowNew9.getCell(40).value = results.telahFSGigiB; //   darjah/tingkatan 3
        rowNew9.getCell(41).value = results.telahTampalanAntGdB; // X  darjah/tingkatan 3
        rowNew9.getCell(42).value = results.telahTampalanAntGkB; // X  darjah/tingkatan 3
        rowNew9.getCell(43).value = results.telahTampalanPosGdB; // X  darjah/tingkatan 3
        rowNew9.getCell(44).value = results.telahTampalanPosGkB; // X  darjah/tingkatan 3
        rowNew9.getCell(45).value = results.telahTampalanAmgGdB; // X  darjah/tingkatan 3
        rowNew9.getCell(46).value = results.telahTampalanAmgGkB; // X  darjah/tingkatan 3
        rowNew9.getCell(48).value = results.cabutanGd; // Cabutan GD  darjah/tingkatan 3
        rowNew9.getCell(49).value = results.cabutanGk; // Cabutan GK  darjah/tingkatan 3
        rowNew9.getCell(50).value = results.penskaleran; // Penskaleran  darjah/tingkatan 3
        rowNew9.getCell(51).value = results.kesSelesai; // Kes selesai  darjah/tingkatan 3
        rowNew9.getCell(52).value = results.skorGIS0; // Skor GIS 0  darjah/tingkatan 3
        rowNew9.getCell(53).value = results.skorGIS1; // Skor GIS 1  darjah/tingkatan 3
        rowNew9.getCell(54).value = results.skorGIS2; // Skor GIS 2  darjah/tingkatan 3
        rowNew9.getCell(55).value = results.skorGIS3; // Skor GIS 3  darjah/tingkatan 3
        rowNew9.commit();

        let rowNew10 = worksheet.getRow(24);
        rowNew10.getCell(2).value = results.skorPlakC; // darjah/tingkatan 3
        rowNew10.commit();

        let rowNew11 = worksheet.getRow(25);
        rowNew11.getCell(2).value = results.skorPlakE; // darjah/tingkatan 3
        rowNew11.commit();

        let rowNew12 = worksheet.getRow(25);
        rowNew12.getCell(30).value = results.perluFSGigiS; // darjah/tingkatan 3
        rowNew12.getCell(32).value = results.perluTampalanAntGdS; //   darjah/tingkatan 3
        rowNew12.getCell(33).value = results.perluTampalanAntGkS; //   darjah/tingkatan 3
        rowNew12.getCell(34).value = results.perluTampalanPosGdS; //   darjah/tingkatan 3
        rowNew12.getCell(35).value = results.perluTampalanPosGkS; //   darjah/tingkatan 3
        rowNew12.getCell(36).value = results.perluTampalanAmgGdS; //   darjah/tingkatan 3
        rowNew12.getCell(37).value = results.perluTampalanAmgGkS; //   darjah/tingkatan 3
        rowNew12.getCell(39).value = results.telahFSMuridS; //   darjah/tingkatan 3
        rowNew12.getCell(40).value = results.telahFSGigiS; //   darjah/tingkatan 3
        rowNew12.getCell(41).value = results.telahTampalanAntGdS; //   darjah/tingkatan 3
        rowNew12.getCell(42).value = results.telahTampalanAntGkS; //   darjah/tingkatan 3
        rowNew12.getCell(43).value = results.telahTampalanPosGdS; //   darjah/tingkatan 3
        rowNew12.getCell(44).value = results.telahTampalanPosGkS; //   darjah/tingkatan 3
        rowNew12.getCell(45).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 3
        rowNew12.getCell(46).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 3
        rowNew12.commit();

        // darjah/tingkatan 4
        let rowNew13 = worksheet.getRow(26);
        rowNew13.getCell(2).value = results.kedatanganEnggan; // Kedatangan  darjah/tingkatan 4
        rowNew13.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  darjah/tingkatan 4
        rowNew13.getCell(4).value = results.enrolmen; // Kedatangan  darjah/tingkatan 4
        rowNew13.getCell(5).value = results.kedatanganbaru; // Kedatangan  darjah/tingkatan 4
        rowNew13.getCell(6).value = results.kedatanganUlangan; // Kedatangan  darjah/tingkatan 4
        rowNew13.getCell(7).value = results.skorPlakA; // Skor Plak A darjah/tingkatan 4
        rowNew13.getCell(9).value = results.dStatusdfx; // d  darjah/tingkatan 4
        rowNew13.getCell(10).value = results.fStatusdfx; // f  darjah/tingkatan 4
        rowNew13.getCell(11).value = results.xStatusdfx; // x  darjah/tingkatan 4
        rowNew13.getCell(13).value = results.dStatusDMFX; // D  darjah/tingkatan 4
        rowNew13.getCell(14).value = results.mStatusDMFX; // M  darjah/tingkatan 4
        rowNew13.getCell(15).value = results.fStatusDMFX; // F  darjah/tingkatan 4
        rowNew13.getCell(16).value = results.xStatusDMFX; // X  darjah/tingkatan 4
        rowNew13.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 darjah/tingkatan 4
        rowNew13.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  darjah/tingkatan 4
        rowNew13.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  darjah/tingkatan 4
        rowNew13.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  darjah/tingkatan 4
        rowNew13.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   darjah/tingkatan 4
        rowNew13.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  darjah/tingkatan 4
        rowNew13.getCell(24).value = results.tpr; // Tidak perlu rawatan  darjah/tingkatan 4
        rowNew13.getCell(25).value = results.kecederaanGigiAnterior; // X  darjah/tingkatan 4
        rowNew13.getCell(26).value = results.cleftAda; // X  darjah/tingkatan 4
        rowNew13.getCell(27).value = results.cleftRujuk; // X  darjah/tingkatan 4
        rowNew13.getCell(29).value = results.perluFSMuridB; // X  darjah/tingkatan 4
        rowNew13.getCell(30).value = results.perluFSGigiB; // X  darjah/tingkatan 4
        rowNew13.getCell(31).value = results.perluFsBilGigiFailed; // X  darjah/tingkatan 4
        rowNew13.getCell(32).value = results.perluTampalanAntGdB; // X  darjah/tingkatan 4
        rowNew13.getCell(33).value = results.perluTampalanAntGkB; // X  darjah/tingkatan 4
        rowNew13.getCell(34).value = results.perluTampalanPosGdB; // X  darjah/tingkatan 4
        rowNew13.getCell(35).value = results.perluTampalanPosGkB; // X  darjah/tingkatan 4
        rowNew13.getCell(36).value = results.perluTampalanAmgGdB; // X  darjah/tingkatan 4
        rowNew13.getCell(37).value = results.perluTampalanAmgGkB; // X  darjah/tingkatan 4
        rowNew13.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  darjah/tingkatan 4
        rowNew13.getCell(40).value = results.telahFSGigiB; //   darjah/tingkatan 4
        rowNew13.getCell(41).value = results.telahTampalanAntGdB; // X  darjah/tingkatan 4
        rowNew13.getCell(42).value = results.telahTampalanAntGkB; // X  darjah/tingkatan 4
        rowNew13.getCell(43).value = results.telahTampalanPosGdB; // X  darjah/tingkatan 4
        rowNew13.getCell(44).value = results.telahTampalanPosGkB; // X  darjah/tingkatan 4
        rowNew13.getCell(45).value = results.telahTampalanAmgGdB; // X  darjah/tingkatan 4
        rowNew13.getCell(46).value = results.telahTampalanAmgGkB; // X  darjah/tingkatan 4
        rowNew13.getCell(48).value = results.cabutanGd; // Cabutan GD  darjah/tingkatan 4
        rowNew13.getCell(49).value = results.cabutanGk; // Cabutan GK  darjah/tingkatan 4
        rowNew13.getCell(50).value = results.penskaleran; // Penskaleran  darjah/tingkatan 4
        rowNew13.getCell(51).value = results.kesSelesai; // Kes selesai  darjah/tingkatan 4
        rowNew13.getCell(52).value = results.skorGIS0; // Skor GIS 0  darjah/tingkatan 4
        rowNew13.getCell(53).value = results.skorGIS1; // Skor GIS 1  darjah/tingkatan 4
        rowNew13.getCell(54).value = results.skorGIS2; // Skor GIS 2  darjah/tingkatan 4
        rowNew13.getCell(55).value = results.skorGIS3; // Skor GIS 3  darjah/tingkatan 4
        rowNew13.commit();

        let rowNew14 = worksheet.getRow(27);
        rowNew14.getCell(2).value = results.skorPlakC; // darjah/tingkatan 4
        rowNew14.commit();

        let rowNew15 = worksheet.getRow(28);
        rowNew15.getCell(2).value = results.skorPlakE; // darjah/tingkatan 4
        rowNew15.commit();

        let rowNew16 = worksheet.getRow(28);
        rowNew16.getCell(30).value = results.perluFSGigiS; // darjah/tingkatan 4
        rowNew16.getCell(32).value = results.perluTampalanAntGdS; //   darjah/tingkatan 4
        rowNew16.getCell(33).value = results.perluTampalanAntGkS; //   darjah/tingkatan 4
        rowNew16.getCell(34).value = results.perluTampalanPosGdS; //   darjah/tingkatan 4
        rowNew16.getCell(35).value = results.perluTampalanPosGkS; //   darjah/tingkatan 4
        rowNew16.getCell(36).value = results.perluTampalanAmgGdS; //   darjah/tingkatan 4
        rowNew16.getCell(37).value = results.perluTampalanAmgGkS; //   darjah/tingkatan 4
        rowNew16.getCell(39).value = results.telahFSMuridS; //   darjah/tingkatan 4
        rowNew16.getCell(40).value = results.telahFSGigiS; //   darjah/tingkatan 4
        rowNew16.getCell(41).value = results.telahTampalanAntGdS; //   darjah/tingkatan 4
        rowNew16.getCell(42).value = results.telahTampalanAntGkS; //   darjah/tingkatan 4
        rowNew16.getCell(43).value = results.telahTampalanPosGdS; //   darjah/tingkatan 4
        rowNew16.getCell(44).value = results.telahTampalanPosGkS; //   darjah/tingkatan 4
        rowNew16.getCell(45).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 4
        rowNew16.getCell(46).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 4
        rowNew16.commit();

        // darjah/tingkatan 5
        let rowNew17 = worksheet.getRow(29);
        rowNew17.getCell(2).value = results.kedatanganEnggan; // Kedatangan  darjah/tingkatan 5
        rowNew17.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  darjah/tingkatan 5
        rowNew17.getCell(4).value = results.enrolmen; // Kedatangan  darjah/tingkatan 5
        rowNew17.getCell(5).value = results.kedatanganbaru; // Kedatangan  darjah/tingkatan 5
        rowNew17.getCell(6).value = results.kedatanganUlangan; // Kedatangan  darjah/tingkatan 5
        rowNew17.getCell(7).value = results.skorPlakA; // Skor Plak A darjah/tingkatan 5
        rowNew17.getCell(9).value = results.dStatusdfx; // d  darjah/tingkatan 5
        rowNew17.getCell(10).value = results.fStatusdfx; // f  darjah/tingkatan 5
        rowNew17.getCell(11).value = results.xStatusdfx; // x  darjah/tingkatan 5
        rowNew17.getCell(13).value = results.dStatusDMFX; // D  darjah/tingkatan 5
        rowNew17.getCell(14).value = results.mStatusDMFX; // M  darjah/tingkatan 5
        rowNew17.getCell(15).value = results.fStatusDMFX; // F  darjah/tingkatan 5
        rowNew17.getCell(16).value = results.xStatusDMFX; // X  darjah/tingkatan 5
        rowNew17.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 darjah/tingkatan 5
        rowNew17.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  darjah/tingkatan 5
        rowNew17.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  darjah/tingkatan 5
        rowNew17.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  darjah/tingkatan 5
        rowNew17.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   darjah/tingkatan 5
        rowNew17.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  darjah/tingkatan 5
        rowNew17.getCell(24).value = results.tpr; // Tidak perlu rawatan  darjah/tingkatan 5
        rowNew17.getCell(25).value = results.kecederaanGigiAnterior; // X  darjah/tingkatan 5
        rowNew17.getCell(26).value = results.cleftAda; // X  darjah/tingkatan 5
        rowNew17.getCell(27).value = results.cleftRujuk; // X  darjah/tingkatan 5
        rowNew17.getCell(29).value = results.perluFSMuridB; // X  darjah/tingkatan 5
        rowNew17.getCell(30).value = results.perluFSGigiB; // X  darjah/tingkatan 5
        rowNew17.getCell(31).value = results.perluFsBilGigiFailed; // X  darjah/tingkatan 5
        rowNew17.getCell(32).value = results.perluTampalanAntGdB; // X  darjah/tingkatan 5
        rowNew17.getCell(33).value = results.perluTampalanAntGkB; // X  darjah/tingkatan 5
        rowNew17.getCell(34).value = results.perluTampalanPosGdB; // X  darjah/tingkatan 5
        rowNew17.getCell(35).value = results.perluTampalanPosGkB; // X  darjah/tingkatan 5
        rowNew17.getCell(36).value = results.perluTampalanAmgGdB; // X  darjah/tingkatan 5
        rowNew17.getCell(37).value = results.perluTampalanAmgGkB; // X  darjah/tingkatan 5
        rowNew17.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  darjah/tingkatan 5
        rowNew17.getCell(40).value = results.telahFSGigiB; //   darjah/tingkatan 5
        rowNew17.getCell(41).value = results.telahTampalanAntGdB; // X  darjah/tingkatan 5
        rowNew17.getCell(42).value = results.telahTampalanAntGkB; // X  darjah/tingkatan 5
        rowNew17.getCell(43).value = results.telahTampalanPosGdB; // X  darjah/tingkatan 5
        rowNew17.getCell(44).value = results.telahTampalanPosGkB; // X  darjah/tingkatan 5
        rowNew17.getCell(45).value = results.telahTampalanAmgGdB; // X  darjah/tingkatan 5
        rowNew17.getCell(46).value = results.telahTampalanAmgGkB; // X  darjah/tingkatan 5
        rowNew17.getCell(48).value = results.cabutanGd; // Cabutan GD  darjah/tingkatan 5
        rowNew17.getCell(49).value = results.cabutanGk; // Cabutan GK  darjah/tingkatan 5
        rowNew17.getCell(50).value = results.penskaleran; // Penskaleran  darjah/tingkatan 5
        rowNew17.getCell(51).value = results.kesSelesai; // Kes selesai  darjah/tingkatan 5
        rowNew17.getCell(52).value = results.skorGIS0; // Skor GIS 0  darjah/tingkatan 5
        rowNew17.getCell(53).value = results.skorGIS1; // Skor GIS 1  darjah/tingkatan 5
        rowNew17.getCell(54).value = results.skorGIS2; // Skor GIS 2  darjah/tingkatan 5
        rowNew17.getCell(55).value = results.skorGIS3; // Skor GIS 3  darjah/tingkatan 5
        rowNew17.commit();

        let rowNew18 = worksheet.getRow(30);
        rowNew18.getCell(2).value = results.skorPlakC; // darjah/tingkatan 5
        rowNew18.commit();

        let rowNew19 = worksheet.getRow(31);
        rowNew19.getCell(2).value = results.skorPlakE; // darjah/tingkatan 5
        rowNew19.commit();

        let rowNew20 = worksheet.getRow(31);
        rowNew20.getCell(30).value = results.perluFSGigiS; // darjah/tingkatan 5
        rowNew20.getCell(32).value = results.perluTampalanAntGdS; //   darjah/tingkatan 5
        rowNew20.getCell(33).value = results.perluTampalanAntGkS; //   darjah/tingkatan 5
        rowNew20.getCell(34).value = results.perluTampalanPosGdS; //   darjah/tingkatan 5
        rowNew20.getCell(35).value = results.perluTampalanPosGkS; //   darjah/tingkatan 5
        rowNew20.getCell(36).value = results.perluTampalanAmgGdS; //   darjah/tingkatan 5
        rowNew20.getCell(37).value = results.perluTampalanAmgGkS; //   darjah/tingkatan 5
        rowNew20.getCell(39).value = results.telahFSMuridS; //   darjah/tingkatan 5
        rowNew20.getCell(40).value = results.telahFSGigiS; //   darjah/tingkatan 5
        rowNew20.getCell(41).value = results.telahTampalanAntGdS; //   darjah/tingkatan 5
        rowNew20.getCell(42).value = results.telahTampalanAntGkS; //   darjah/tingkatan 5
        rowNew20.getCell(43).value = results.telahTampalanPosGdS; //   darjah/tingkatan 5
        rowNew20.getCell(44).value = results.telahTampalanPosGkS; //   darjah/tingkatan 5
        rowNew20.getCell(45).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 5
        rowNew20.getCell(46).value = results.telahTampalanAmgGkS; //   darjah/tingkatan 5
        rowNew20.commit();

        // 6 /peralihan
        let rowNew21 = worksheet.getRow(32);
        rowNew21.getCell(2).value = results.kedatanganEnggan; // Kedatangan  6 /peralihan
        rowNew21.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  6 /peralihan
        rowNew21.getCell(4).value = results.enrolmen; // Kedatangan  6 /peralihan
        rowNew21.getCell(5).value = results.kedatanganbaru; // Kedatangan  6 /peralihan
        rowNew21.getCell(6).value = results.kedatanganUlangan; // Kedatangan  6 /peralihan
        rowNew21.getCell(7).value = results.skorPlakA; // Skor Plak A 6 /peralihan
        rowNew21.getCell(9).value = results.dStatusdfx; // d  6 /peralihan
        rowNew21.getCell(10).value = results.fStatusdfx; // f  6 /peralihan
        rowNew21.getCell(11).value = results.xStatusdfx; // x  6 /peralihan
        rowNew21.getCell(13).value = results.dStatusDMFX; // D  6 /peralihan
        rowNew21.getCell(14).value = results.mStatusDMFX; // M  6 /peralihan
        rowNew21.getCell(15).value = results.fStatusDMFX; // F  6 /peralihan
        rowNew21.getCell(16).value = results.xStatusDMFX; // X  6 /peralihan
        rowNew21.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 6 /peralihan
        rowNew21.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  6 /peralihan
        rowNew21.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  6 /peralihan
        rowNew21.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  6 /peralihan
        rowNew21.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   6 /peralihan
        rowNew21.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  6 /peralihan
        rowNew21.getCell(24).value = results.tpr; // Tidak perlu rawatan  6 /peralihan
        rowNew21.getCell(25).value = results.kecederaanGigiAnterior; // X  6 /peralihan
        rowNew21.getCell(26).value = results.cleftAda; // X  6 /peralihan
        rowNew21.getCell(27).value = results.cleftRujuk; // X  6 /peralihan
        rowNew21.getCell(29).value = results.perluFSMuridB; // X  6 /peralihan
        rowNew21.getCell(30).value = results.perluFSGigiB; // X  6 /peralihan
        rowNew21.getCell(31).value = results.perluFsBilGigiFailed; // X  6 /peralihan
        rowNew21.getCell(32).value = results.perluTampalanAntGdB; // X  6 /peralihan
        rowNew21.getCell(33).value = results.perluTampalanAntGkB; // X  6 /peralihan
        rowNew21.getCell(34).value = results.perluTampalanPosGdB; // X  6 /peralihan
        rowNew21.getCell(35).value = results.perluTampalanPosGkB; // X  6 /peralihan
        rowNew21.getCell(36).value = results.perluTampalanAmgGdB; // X  6 /peralihan
        rowNew21.getCell(37).value = results.perluTampalanAmgGkB; // X  6 /peralihan
        rowNew21.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  6 /peralihan
        rowNew21.getCell(40).value = results.telahFSGigiB; //   6 /peralihan
        rowNew21.getCell(41).value = results.telahTampalanAntGdB; // X  6 /peralihan
        rowNew21.getCell(42).value = results.telahTampalanAntGkB; // X  6 /peralihan
        rowNew21.getCell(43).value = results.telahTampalanPosGdB; // X  6 /peralihan
        rowNew21.getCell(44).value = results.telahTampalanPosGkB; // X  6 /peralihan
        rowNew21.getCell(45).value = results.telahTampalanAmgGdB; // X  6 /peralihan
        rowNew21.getCell(46).value = results.telahTampalanAmgGkB; // X  6 /peralihan
        rowNew21.getCell(48).value = results.cabutanGd; // Cabutan GD  6 /peralihan
        rowNew21.getCell(49).value = results.cabutanGk; // Cabutan GK  6 /peralihan
        rowNew21.getCell(50).value = results.penskaleran; // Penskaleran  6 /peralihan
        rowNew21.getCell(51).value = results.kesSelesai; // Kes selesai  6 /peralihan
        rowNew21.getCell(52).value = results.skorGIS0; // Skor GIS 0  6 /peralihan
        rowNew21.getCell(53).value = results.skorGIS1; // Skor GIS 1  6 /peralihan
        rowNew21.getCell(54).value = results.skorGIS2; // Skor GIS 2  6 /peralihan
        rowNew21.getCell(55).value = results.skorGIS3; // Skor GIS 3  6 /peralihan
        rowNew21.commit();

        let rowNew22 = worksheet.getRow(33);
        rowNew22.getCell(2).value = results.skorPlakC; // 6 /peralihan
        rowNew22.commit();

        let rowNew23 = worksheet.getRow(34);
        rowNew23.getCell(2).value = results.skorPlakE; // 6 /peralihan
        rowNew23.commit();

        let rowNew24 = worksheet.getRow(34);
        rowNew24.getCell(30).value = results.perluFSGigiS; // 6 /peralihan
        rowNew24.getCell(32).value = results.perluTampalanAntGdS; //   6 /peralihan
        rowNew24.getCell(33).value = results.perluTampalanAntGkS; //   6 /peralihan
        rowNew24.getCell(34).value = results.perluTampalanPosGdS; //   6 /peralihan
        rowNew24.getCell(35).value = results.perluTampalanPosGkS; //   6 /peralihan
        rowNew24.getCell(36).value = results.perluTampalanAmgGdS; //   6 /peralihan
        rowNew24.getCell(37).value = results.perluTampalanAmgGkS; //   6 /peralihan
        rowNew24.getCell(39).value = results.telahFSMuridS; //   6 /peralihan
        rowNew24.getCell(40).value = results.telahFSGigiS; //   6 /peralihan
        rowNew24.getCell(41).value = results.telahTampalanAntGdS; //   6 /peralihan
        rowNew24.getCell(42).value = results.telahTampalanAntGkS; //   6 /peralihan
        rowNew24.getCell(43).value = results.telahTampalanPosGdS; //   6 /peralihan
        rowNew24.getCell(44).value = results.telahTampalanPosGkS; //   6 /peralihan
        rowNew24.getCell(45).value = results.telahTampalanAmgGkS; //   6 /peralihan
        rowNew24.getCell(46).value = results.telahTampalanAmgGkS; //   6 /peralihan
        rowNew24.commit();

        // kki
        let rowNew25 = worksheet.getRow(32);
        rowNew25.getCell(2).value = results.kedatanganEnggan; // Kedatangan  kki
        rowNew25.getCell(3).value = results.kedatanganTidakHadir; // Kedatangan  kki
        rowNew25.getCell(4).value = results.enrolmen; // Kedatangan  kki
        rowNew25.getCell(5).value = results.kedatanganbaru; // Kedatangan  kki
        rowNew25.getCell(6).value = results.kedatanganUlangan; // Kedatangan  kki
        rowNew25.getCell(7).value = results.skorPlakA; // Skor Plak A kki
        rowNew25.getCell(9).value = results.dStatusdfx; // d  kki
        rowNew25.getCell(10).value = results.fStatusdfx; // f  kki
        rowNew25.getCell(11).value = results.xStatusdfx; // x  kki
        rowNew25.getCell(13).value = results.dStatusDMFX; // D  kki
        rowNew25.getCell(14).value = results.mStatusDMFX; // M  kki
        rowNew25.getCell(15).value = results.fStatusDMFX; // F  kki
        rowNew25.getCell(16).value = results.xStatusDMFX; // X  kki
        rowNew25.getCell(18).value = results.gigiKekalDMFXsamaAtauKurangDari3; // Status Gigi Kekal DMFX <= 3 kki
        rowNew25.getCell(19).value = results.totalStatusGigiKekalSamaKosong; // Status Gigi Kekal X+M = results.0  kki
        rowNew25.getCell(20).value = results.mbk; // Mulut Bebas Karies (MBK)  kki
        rowNew25.getCell(21).value = results.statusBebasKaries; // Status Gigi Kekal Bebas Karies (BK) DMFX = results.0  kki
        rowNew25.getCell(22).value = results.dfxEqualToZero; // dfx = results.0   kki
        rowNew25.getCell(23).value = results.mulutBebasGingivitis; // Mulut Bebas Gingivitis (MBG)  kki
        rowNew25.getCell(24).value = results.tpr; // Tidak perlu rawatan  kki
        rowNew25.getCell(25).value = results.kecederaanGigiAnterior; // X  kki
        rowNew25.getCell(26).value = results.cleftAda; // X  kki
        rowNew25.getCell(27).value = results.cleftRujuk; // X  kki
        rowNew25.getCell(29).value = results.perluFSMuridB; // X  kki
        rowNew25.getCell(30).value = results.perluFSGigiB; // X  kki
        rowNew25.getCell(31).value = results.perluFsBilGigiFailed; // X  kki
        rowNew25.getCell(32).value = results.perluTampalanAntGdB; // X  kki
        rowNew25.getCell(33).value = results.perluTampalanAntGkB; // X  kki
        rowNew25.getCell(34).value = results.perluTampalanPosGdB; // X  kki
        rowNew25.getCell(35).value = results.perluTampalanPosGkB; // X  kki
        rowNew25.getCell(36).value = results.perluTampalanAmgGdB; // X  kki
        rowNew25.getCell(37).value = results.perluTampalanAmgGkB; // X  kki
        rowNew25.getCell(39).value = results.telahFSMuridB; // telahFSMuridS  kki
        rowNew25.getCell(40).value = results.telahFSGigiB; //   kki
        rowNew25.getCell(41).value = results.telahTampalanAntGdB; // X  kki
        rowNew25.getCell(42).value = results.telahTampalanAntGkB; // X  kki
        rowNew25.getCell(43).value = results.telahTampalanPosGdB; // X  kki
        rowNew25.getCell(44).value = results.telahTampalanPosGkB; // X  kki
        rowNew25.getCell(45).value = results.telahTampalanAmgGdB; // X  kki
        rowNew25.getCell(46).value = results.telahTampalanAmgGkB; // X  kki
        rowNew25.getCell(48).value = results.cabutanGd; // Cabutan GD  kki
        rowNew25.getCell(49).value = results.cabutanGk; // Cabutan GK  kki
        rowNew25.getCell(50).value = results.penskaleran; // Penskaleran  kki
        rowNew25.getCell(51).value = results.kesSelesai; // Kes selesai  kki
        rowNew25.getCell(52).value = results.skorGIS0; // Skor GIS 0  kki
        rowNew25.getCell(53).value = results.skorGIS1; // Skor GIS 1  kki
        rowNew25.getCell(54).value = results.skorGIS2; // Skor GIS 2  kki
        rowNew25.getCell(55).value = results.skorGIS3; // Skor GIS 3  kki
        rowNew25.commit();

        let rowNew26 = worksheet.getRow(33);
        rowNew26.getCell(2).value = results.skorPlakC; // kki
        rowNew26.commit();

        let rowNew27 = worksheet.getRow(34);
        rowNew27.getCell(2).value = results.skorPlakE; // kki
        rowNew27.commit();

        let rowNew28 = worksheet.getRow(34);
        rowNew28.getCell(30).value = results.perluFSGigiS; // kki
        rowNew28.getCell(32).value = results.perluTampalanAntGdS; //   kki
        rowNew28.getCell(33).value = results.perluTampalanAntGkS; //   kki
        rowNew28.getCell(34).value = results.perluTampalanPosGdS; //   kki
        rowNew28.getCell(35).value = results.perluTampalanPosGkS; //   kki
        rowNew28.getCell(36).value = results.perluTampalanAmgGdS; //   kki
        rowNew28.getCell(37).value = results.perluTampalanAmgGkS; //   kki
        rowNew28.getCell(39).value = results.telahFSMuridS; //   kki
        rowNew28.getCell(40).value = results.telahFSGigiS; //   kki
        rowNew28.getCell(41).value = results.telahTampalanAntGdS; //   kki
        rowNew28.getCell(42).value = results.telahTampalanAntGkS; //   kki
        rowNew28.getCell(43).value = results.telahTampalanPosGdS; //   kki
        rowNew28.getCell(44).value = results.telahTampalanPosGkS; //   kki
        rowNew28.getCell(45).value = results.telahTampalanAmgGkS; //   kki
        rowNew28.getCell(46).value = results.telahTampalanAmgGkS; //   kki
        rowNew28.commit();

        // others
        let rowNew29 = worksheet.getRow(7);
        rowNew29.getCell(9).value = results.klinik; //
        rowNew29.commit();

        let rowNew30 = worksheet.getRow(8);
        rowNew30.getCell(9).value = results.sekolah; //
        rowNew30.commit();

        let rowNew31 = worksheet.getRow(9);
        rowNew31.getCell(9).value = results.jenisPerkhidmatanPergigian; //
        rowNew31.commit();

        let rowNew32 = worksheet.getRow(7);
        rowNew32.getCell(27).value = results.tarikhTempat; //
        rowNew32.commit();

        let rowNew33 = worksheet.getRow(8);
        rowNew33.getCell(27).value = results.bilHariProjek; //
        rowNew32.commit();

        let rowNew34 = worksheet.getRow(7);
        rowNew34.getCell(44).value = results.tarikhMula; //
        rowNew34.commit();

        let rowNew35 = worksheet.getRow(8);
        rowNew35.getCell(44).value = results.tarikhSelesai; //
        rowNew35.commit();

        let rowNew36 = worksheet.getRow(9);
        rowNew36.getCell(44).value = results.namaPetugas; //
        rowNew36.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PGS203.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPPIM05 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PPIM05.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PPIM05');

        // 5 tahun
        let rowNew = worksheet.getRow(12);
        rowNew.getCell(2).value = results.perokok; // bilanganperokoksemasa 5 tahun
        rowNew.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi 5 tahun
        rowNew.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date 5 tahun
        rowNew.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date 5 tahun
        rowNew.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date 5 tahun
        rowNew.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date 5 tahun
        rowNew.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling 5 tahun
        rowNew.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" 5 tahun
        rowNew.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" 5 tahun
        rowNew.commit();

        // 6 tahun
        let rowNew2 = worksheet.getRow(13);
        rowNew2.getCell(2).value = results.perokok; // bilanganperokoksemasa 6 tahun
        rowNew2.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi 6 tahun
        rowNew2.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date 6 tahun
        rowNew2.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date 6 tahun
        rowNew2.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date 6 tahun
        rowNew2.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date 6 tahun
        rowNew2.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling 6 tahun
        rowNew2.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" 6 tahun
        rowNew2.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" 6 tahun
        rowNew2.commit();

        //Tahun/ tingkatan 1
        let rowNew3 = worksheet.getRow(14);
        rowNew3.getCell(2).value = results.perokok; // bilanganperokoksemasa Tahun/Tingkatan1
        rowNew3.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Tahun/Tingkatan1
        rowNew3.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Tahun/Tingkatan1
        rowNew3.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Tahun/Tingkatan1
        rowNew3.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Tahun/Tingkatan1
        rowNew3.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Tahun/Tingkatan1
        rowNew3.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Tahun/Tingkatan1
        rowNew3.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Tahun/Tingkatan1
        rowNew3.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Tahun/Tingkatan1
        rowNew3.commit();

        //Tahun/ tingkatan 2
        let rowNew4 = worksheet.getRow(15);
        rowNew4.getCell(2).value = results.perokok; // bilanganperokoksemasa Tahun/ tingkatan 2
        rowNew4.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Tahun/ tingkatan 2
        rowNew4.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Tahun/ tingkatan 2
        rowNew4.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Tahun/ tingkatan 2
        rowNew4.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Tahun/ tingkatan 2
        rowNew4.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Tahun/ tingkatan 2
        rowNew4.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Tahun/ tingkatan 2
        rowNew4.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Tahun/ tingkatan 2
        rowNew4.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Tahun/ tingkatan 2
        rowNew4.commit();

        //Tahun/ tingkatan 3
        let rowNew5 = worksheet.getRow(16);
        rowNew5.getCell(2).value = results.perokok; // bilanganperokoksemasa Tahun/ tingkatan 3
        rowNew5.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Tahun/ tingkatan 3
        rowNew5.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Tahun/ tingkatan 3
        rowNew5.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Tahun/ tingkatan 3
        rowNew5.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Tahun/ tingkatan 3
        rowNew5.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Tahun/ tingkatan 3
        rowNew5.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Tahun/ tingkatan 3
        rowNew5.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Tahun/ tingkatan 3
        rowNew5.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Tahun/ tingkatan 3
        rowNew5.commit();

        //Tahun/ tingkatan 4
        let rowNew6 = worksheet.getRow(17);
        rowNew6.getCell(2).value = results.perokok; // bilanganperokoksemasa Tahun/ tingkatan 4
        rowNew6.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Tahun/ tingkatan 4
        rowNew6.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Tahun/ tingkatan 4
        rowNew6.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Tahun/ tingkatan 4
        rowNew6.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Tahun/ tingkatan 4
        rowNew6.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Tahun/ tingkatan 4
        rowNew6.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Tahun/ tingkatan 4
        rowNew6.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Tahun/ tingkatan 4
        rowNew6.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Tahun/ tingkatan 4
        rowNew6.commit();

        //Tahun/ tingkatan 5
        let rowNew7 = worksheet.getRow(18);
        rowNew7.getCell(2).value = results.perokok; // bilanganperokoksemasa Tahun/ tingkatan 5
        rowNew7.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Tahun/ tingkatan 5
        rowNew7.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Tahun/ tingkatan 5
        rowNew7.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Tahun/ tingkatan 5
        rowNew7.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Tahun/ tingkatan 5
        rowNew7.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Tahun/ tingkatan 5
        rowNew7.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Tahun/ tingkatan 5
        rowNew7.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Tahun/ tingkatan 5
        rowNew7.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Tahun/ tingkatan 5
        rowNew7.commit();

        //Tahun/ tingkatan 6
        let rowNew8 = worksheet.getRow(19);
        rowNew8.getCell(2).value = results.perokok; // bilanganperokoksemasa Tahun/ tingkatan 6
        rowNew8.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Tahun/ tingkatan 6
        rowNew8.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Tahun/ tingkatan 6
        rowNew8.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Tahun/ tingkatan 6
        rowNew8.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Tahun/ tingkatan 6
        rowNew8.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Tahun/ tingkatan 6
        rowNew8.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Tahun/ tingkatan 6
        rowNew8.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Tahun/ tingkatan 6
        rowNew8.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Tahun/ tingkatan 6
        rowNew8.commit();

        //Peralihan (SM)
        let rowNew9 = worksheet.getRow(20);
        rowNew9.getCell(2).value = results.perokok; // bilanganperokoksemasa Peralihan (SM)
        rowNew9.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi Peralihan (SM)
        rowNew9.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date Peralihan (SM)
        rowNew9.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date Peralihan (SM)
        rowNew9.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date Peralihan (SM)
        rowNew9.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date Peralihan (SM)
        rowNew9.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling Peralihan (SM)
        rowNew9.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" Peralihan (SM)
        rowNew9.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" Peralihan (SM)
        rowNew9.commit();

        //KKI (SR & SM)
        let rowNew10 = worksheet.getRow(21);
        rowNew10.getCell(2).value = results.perokok; // bilanganperokoksemasa KKI (SR & SM)
        rowNew10.getCell(3).value = results.sertaiIntervensi; // Bil. Perokok Menyertai Intervensi KKI (SR & SM)
        rowNew10.getCell(4).value = results.intervensi3WithQDate; // # perokok menyertai intervensi >3 ada quit date KKI (SR & SM)
        rowNew10.getCell(6).value = results.intervensi3NoQDate; // # perokok menyertai intervensi >3 tiada quit date KKI (SR & SM)
        rowNew10.getCell(8).value = results.intervensiLess3WithQDate; // # perokok menyertai intervensi <3 ada quit date KKI (SR & SM)
        rowNew10.getCell(10).value = results.intervensiLess3NoQDate; // # perokok menyertai intervensi <3 tiada quit date KKI (SR & SM)
        rowNew10.getCell(14).value = results.dirujukKaunseling; // # Perokok dirujuk ke guru kaunseling KKI (SR & SM)
        rowNew10.getCell(15).value = results.berhentiRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Berhenti" KKI (SR & SM)
        rowNew10.getCell(16).value = results.masihRokok6Bulan; // "Status berhenti merokok selepas 6 bulan Tidak Berhenti" KKI (SR & SM)
        rowNew10.commit();

        // others
        let rowNew11 = worksheet.getRow(5);
        rowNew11.getCell(2).value = results.tahun; //
        rowNew11.commit();

        let rowNew12 = worksheet.getRow(6);
        rowNew12.getCell(2).value = results.daerah; //
        rowNew12.commit();

        let rowNew13 = worksheet.getRow(7);
        rowNew13.getCell(2).value = results.klinik; //
        rowNew13.commit();

        let rowNew14 = worksheet.getRow(8);
        rowNew14.getCell(2).value = results.sekolah; //
        rowNew14.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PPIM05.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG206 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGS206.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PG206');

        //PG206
        //Bawah 1 tahun baru
        let rowNew1 = worksheet.getRow(16);

        rowNew1.getCell(3).value = results.kedatanganTahunSemasa; //C16      Bawah 1 tahun baru
        rowNew1.getCell(4).value = results.sapuanFluorida; //D16      Bawah 1 tahun baru
        rowNew1.getCell(5).value = results.prrJenis1; //E16      Bawah 1 tahun baru
        rowNew1.getCell(6).value = results.muridBaruFS; //F16      Bawah 1 tahun baru
        rowNew1.getCell(7).value = results.muridUlanganFS; //G16      Bawah 1 tahun baru
        rowNew1.getCell(8).value = results.gigiBaruFS; //H16      Bawah 1 tahun baru
        rowNew1.getCell(9).value = results.gigiUlanganFS; //I16      Bawah 1 tahun baru
        rowNew1.getCell(10).value = results.tampalanAntGdBaru; //J16      Bawah 1 tahun baru
        rowNew1.getCell(11).value = results.tampalanAntGdUlangan; //K16      Bawah 1 tahun baru
        rowNew1.getCell(12).value = results.tampalanAntGkBaru; //L16      Bawah 1 tahun baru
        rowNew1.getCell(13).value = results.tampalanAntGkUlangan; //M16      Bawah 1 tahun baru
        rowNew1.getCell(14).value = results.tampalanPostGdBaru; //N16      Bawah 1 tahun baru
        rowNew1.getCell(15).value = results.tampalanPostGdUlangan; //O16      Bawah 1 tahun baru
        rowNew1.getCell(16).value = results.tampalanPostGkBaru; //P16      Bawah 1 tahun baru
        rowNew1.getCell(17).value = results.tampalanPostGkUlangan; //Q16      Bawah 1 tahun baru
        rowNew1.getCell(18).value = results.tampalanPostAmgGdBaru; //R16      Bawah 1 tahun baru
        rowNew1.getCell(19).value = results.tampalanPostAmgGdUlangan; //S16      Bawah 1 tahun baru
        rowNew1.getCell(20).value = results.tampalanPostAmgGkBaru; //T16      Bawah 1 tahun baru
        rowNew1.getCell(21).value = results.tampalanPostAmgGkUlangan; //U16      Bawah 1 tahun baru
        rowNew1.getCell(22).value = results.jumlahTampalanBaru; //V16      Bawah 1 tahun baru
        rowNew1.getCell(23).value = results.jumlahTampalanUlangan; //W16      Bawah 1 tahun baru
        rowNew1.getCell(24).value = results.tampalanSementara; //X16      Bawah 1 tahun baru
        rowNew1.getCell(25).value = results.cabutanGd; //Y16      Bawah 1 tahun baru
        rowNew1.getCell(26).value = results.cabutanGk; //Z16      Bawah 1 tahun baru
        rowNew1.getCell(27).value = results.penskaleran; //AA16      Bawah 1 tahun baru
        rowNew1.getCell(28).value = results.kesSelesai; //AB16      Bawah 1 tahun baru
        rowNew1.getCell(29).value = results.rokokSaringNasihat; //AC16      Bawah 1 tahun baru
        rowNew1.getCell(30).value = results.rokokIntervensi; //AD16      Bawah 1 tahun baru
        rowNew1.commit();

        //PG206
        //Bawah 1 tahun ulangan
        let rowNew2 = worksheet.getRow(17);

        rowNew2.getCell(3).value = results.kedatanganTahunSemasa; //C17      Bawah 1 tahun ulangan
        rowNew2.getCell(4).value = results.sapuanFluorida; //D17      Bawah 1 tahun ulangan
        rowNew2.getCell(5).value = results.prrJenis1; //E17      Bawah 1 tahun ulangan
        rowNew2.getCell(6).value = results.muridBaruFS; //F17      Bawah 1 tahun ulangan
        rowNew2.getCell(7).value = results.muridUlanganFS; //G17      Bawah 1 tahun ulangan
        rowNew2.getCell(8).value = results.gigiBaruFS; //H17      Bawah 1 tahun ulangan
        rowNew2.getCell(9).value = results.gigiUlanganFS; //I17      Bawah 1 tahun ulangan
        rowNew2.getCell(10).value = results.tampalanAntGdBaru; //J17      Bawah 1 tahun ulangan
        rowNew2.getCell(11).value = results.tampalanAntGdUlangan; //K17      Bawah 1 tahun ulangan
        rowNew2.getCell(12).value = results.tampalanAntGkBaru; //L17      Bawah 1 tahun ulangan
        rowNew2.getCell(13).value = results.tampalanAntGkUlangan; //M17      Bawah 1 tahun ulangan
        rowNew2.getCell(14).value = results.tampalanPostGdBaru; //N17      Bawah 1 tahun ulangan
        rowNew2.getCell(15).value = results.tampalanPostGdUlangan; //O17      Bawah 1 tahun ulangan
        rowNew2.getCell(16).value = results.tampalanPostGkBaru; //P17      Bawah 1 tahun ulangan
        rowNew2.getCell(17).value = results.tampalanPostGkUlangan; //Q17      Bawah 1 tahun ulangan
        rowNew2.getCell(18).value = results.tampalanPostAmgGdBaru; //R17      Bawah 1 tahun ulangan
        rowNew2.getCell(19).value = results.tampalanPostAmgGdUlangan; //S17      Bawah 1 tahun ulangan
        rowNew2.getCell(20).value = results.tampalanPostAmgGkBaru; //T17      Bawah 1 tahun ulangan
        rowNew2.getCell(21).value = results.tampalanPostAmgGkUlangan; //U17      Bawah 1 tahun ulangan
        rowNew2.getCell(22).value = results.jumlahTampalanBaru; //V17      Bawah 1 tahun ulangan
        rowNew2.getCell(23).value = results.jumlahTampalanUlangan; //W17      Bawah 1 tahun ulangan
        rowNew2.getCell(24).value = results.tampalanSementara; //X17      Bawah 1 tahun ulangan
        rowNew2.getCell(25).value = results.cabutanGd; //Y17      Bawah 1 tahun ulangan
        rowNew2.getCell(26).value = results.cabutanGk; //Z17      Bawah 1 tahun ulangan
        rowNew2.getCell(27).value = results.penskaleran; //AA17      Bawah 1 tahun ulangan
        rowNew2.getCell(28).value = results.kesSelesai; //AB17      Bawah 1 tahun ulangan
        rowNew2.getCell(29).value = results.rokokSaringNasihat; //AC17      Bawah 1 tahun ulangan
        rowNew2.getCell(30).value = results.rokokIntervensi; //AD17      Bawah 1 tahun ulangan
        rowNew2.commit();

        //PG206
        // 1 hingga 4 tahun baru
        let rowNew3 = worksheet.getRow(18);

        rowNew3.getCell(3).value = results.kedatanganTahunSemasa; //C18      1 hingga 4 tahun baru
        rowNew3.getCell(4).value = results.sapuanFluorida; //D18      1 hingga 4 tahun baru
        rowNew3.getCell(5).value = results.prrJenis1; //E18      1 hingga 4 tahun baru
        rowNew3.getCell(6).value = results.muridBaruFS; //F18      1 hingga 4 tahun baru
        rowNew3.getCell(7).value = results.muridUlanganFS; //G18      1 hingga 4 tahun baru
        rowNew3.getCell(8).value = results.gigiBaruFS; //H18      1 hingga 4 tahun baru
        rowNew3.getCell(9).value = results.gigiUlanganFS; //I18      1 hingga 4 tahun baru
        rowNew3.getCell(10).value = results.tampalanAntGdBaru; //J18      1 hingga 4 tahun baru
        rowNew3.getCell(11).value = results.tampalanAntGdUlangan; //K18      1 hingga 4 tahun baru
        rowNew3.getCell(12).value = results.tampalanAntGkBaru; //L18      1 hingga 4 tahun baru
        rowNew3.getCell(13).value = results.tampalanAntGkUlangan; //M18      1 hingga 4 tahun baru
        rowNew3.getCell(14).value = results.tampalanPostGdBaru; //N18      1 hingga 4 tahun baru
        rowNew3.getCell(15).value = results.tampalanPostGdUlangan; //O18      1 hingga 4 tahun baru
        rowNew3.getCell(16).value = results.tampalanPostGkBaru; //P18      1 hingga 4 tahun baru
        rowNew3.getCell(17).value = results.tampalanPostGkUlangan; //Q18      1 hingga 4 tahun baru
        rowNew3.getCell(18).value = results.tampalanPostAmgGdBaru; //R18      1 hingga 4 tahun baru
        rowNew3.getCell(19).value = results.tampalanPostAmgGdUlangan; //S18      1 hingga 4 tahun baru
        rowNew3.getCell(20).value = results.tampalanPostAmgGkBaru; //T18      1 hingga 4 tahun baru
        rowNew3.getCell(21).value = results.tampalanPostAmgGkUlangan; //U18      1 hingga 4 tahun baru
        rowNew3.getCell(22).value = results.jumlahTampalanBaru; //V18      1 hingga 4 tahun baru
        rowNew3.getCell(23).value = results.jumlahTampalanUlangan; //W18      1 hingga 4 tahun baru
        rowNew3.getCell(24).value = results.tampalanSementara; //X18      1 hingga 4 tahun baru
        rowNew3.getCell(25).value = results.cabutanGd; //Y18      1 hingga 4 tahun baru
        rowNew3.getCell(26).value = results.cabutanGk; //Z18      1 hingga 4 tahun baru
        rowNew3.getCell(27).value = results.penskaleran; //AA18      1 hingga 4 tahun baru
        rowNew3.getCell(28).value = results.kesSelesai; //AB18      1 hingga 4 tahun baru
        rowNew3.getCell(29).value = results.rokokSaringNasihat; //AC18      1 hingga 4 tahun baru
        rowNew3.getCell(30).value = results.rokokIntervensi; //AD18      1 hingga 4 tahun baru
        rowNew3.commit();

        //PG206
        // 1 hingga 4 tahun ulangan
        let rowNew4 = worksheet.getRow(19);

        rowNew4.getCell(3).value = results.kedatanganTahunSemasa; //C19      Bawah 1 tahun
        rowNew4.getCell(4).value = results.sapuanFluorida; //D19      Bawah 1 tahun
        rowNew4.getCell(5).value = results.prrJenis1; //E19      Bawah 1 tahun
        rowNew4.getCell(6).value = results.muridBaruFS; //F19      Bawah 1 tahun
        rowNew4.getCell(7).value = results.muridUlanganFS; //G19      Bawah 1 tahun
        rowNew4.getCell(8).value = results.gigiBaruFS; //H19      Bawah 1 tahun
        rowNew4.getCell(9).value = results.gigiUlanganFS; //I19      Bawah 1 tahun
        rowNew4.getCell(10).value = results.tampalanAntGdBaru; //J19      Bawah 1 tahun
        rowNew4.getCell(11).value = results.tampalanAntGdUlangan; //K19      Bawah 1 tahun
        rowNew4.getCell(12).value = results.tampalanAntGkBaru; //L19      Bawah 1 tahun
        rowNew4.getCell(13).value = results.tampalanAntGkUlangan; //M19      Bawah 1 tahun
        rowNew4.getCell(14).value = results.tampalanPostGdBaru; //N19      Bawah 1 tahun
        rowNew4.getCell(15).value = results.tampalanPostGdUlangan; //O19      Bawah 1 tahun
        rowNew4.getCell(16).value = results.tampalanPostGkBaru; //P19      Bawah 1 tahun
        rowNew4.getCell(17).value = results.tampalanPostGkUlangan; //Q19      Bawah 1 tahun
        rowNew4.getCell(18).value = results.tampalanPostAmgGdBaru; //R19      Bawah 1 tahun
        rowNew4.getCell(19).value = results.tampalanPostAmgGdUlangan; //S19      Bawah 1 tahun
        rowNew4.getCell(20).value = results.tampalanPostAmgGkBaru; //T19      Bawah 1 tahun
        rowNew4.getCell(21).value = results.tampalanPostAmgGkUlangan; //U19      Bawah 1 tahun
        rowNew4.getCell(22).value = results.jumlahTampalanBaru; //V19      Bawah 1 tahun
        rowNew4.getCell(23).value = results.jumlahTampalanUlangan; //W19      Bawah 1 tahun
        rowNew4.getCell(24).value = results.tampalanSementara; //X19      Bawah 1 tahun
        rowNew4.getCell(25).value = results.cabutanGd; //Y19      Bawah 1 tahun
        rowNew4.getCell(26).value = results.cabutanGk; //Z19      Bawah 1 tahun
        rowNew4.getCell(27).value = results.penskaleran; //AA19      Bawah 1 tahun
        rowNew4.getCell(28).value = results.kesSelesai; //AB19      Bawah 1 tahun
        rowNew4.getCell(29).value = results.rokokSaringNasihat; //AC19      Bawah 1 tahun
        rowNew4.getCell(30).value = results.rokokIntervensi; //AD19      Bawah 1 tahun
        rowNew4.commit();

        //PG206
        // 5 hingga 6 tahun baru
        let rowNew5 = worksheet.getRow(20);

        rowNew5.getCell(3).value = results.kedatanganTahunSemasa; //C20      5 hingga 6 tahun
        rowNew5.getCell(4).value = results.sapuanFluorida; //D20      5 hingga 6 tahun
        rowNew5.getCell(5).value = results.prrJenis1; //E20      5 hingga 6 tahun
        rowNew5.getCell(6).value = results.muridBaruFS; //F20      5 hingga 6 tahun
        rowNew5.getCell(7).value = results.muridUlanganFS; //G20      5 hingga 6 tahun
        rowNew5.getCell(8).value = results.gigiBaruFS; //H20      5 hingga 6 tahun
        rowNew5.getCell(9).value = results.gigiUlanganFS; //I20      5 hingga 6 tahun
        rowNew5.getCell(10).value = results.tampalanAntGdBaru; //J20      5 hingga 6 tahun
        rowNew5.getCell(11).value = results.tampalanAntGdUlangan; //K20      5 hingga 6 tahun
        rowNew5.getCell(12).value = results.tampalanAntGkBaru; //L20      5 hingga 6 tahun
        rowNew5.getCell(13).value = results.tampalanAntGkUlangan; //M20      5 hingga 6 tahun
        rowNew5.getCell(14).value = results.tampalanPostGdBaru; //N20      5 hingga 6 tahun
        rowNew5.getCell(15).value = results.tampalanPostGdUlangan; //O20      5 hingga 6 tahun
        rowNew5.getCell(16).value = results.tampalanPostGkBaru; //P20      5 hingga 6 tahun
        rowNew5.getCell(17).value = results.tampalanPostGkUlangan; //Q20      5 hingga 6 tahun
        rowNew5.getCell(18).value = results.tampalanPostAmgGdBaru; //R20      5 hingga 6 tahun
        rowNew5.getCell(19).value = results.tampalanPostAmgGdUlangan; //S20      5 hingga 6 tahun
        rowNew5.getCell(20).value = results.tampalanPostAmgGkBaru; //T20      5 hingga 6 tahun
        rowNew5.getCell(21).value = results.tampalanPostAmgGkUlangan; //U20      5 hingga 6 tahun
        rowNew5.getCell(22).value = results.jumlahTampalanBaru; //V20      5 hingga 6 tahun
        rowNew5.getCell(23).value = results.jumlahTampalanUlangan; //W20      5 hingga 6 tahun
        rowNew5.getCell(24).value = results.tampalanSementara; //X20      5 hingga 6 tahun
        rowNew5.getCell(25).value = results.cabutanGd; //Y20      5 hingga 6 tahun
        rowNew5.getCell(26).value = results.cabutanGk; //Z20      5 hingga 6 tahun
        rowNew5.getCell(27).value = results.penskaleran; //AA20      5 hingga 6 tahun
        rowNew5.getCell(28).value = results.kesSelesai; //AB20      5 hingga 6 tahun
        rowNew5.getCell(29).value = results.rokokSaringNasihat; //AC20      5 hingga 6 tahun
        rowNew5.getCell(30).value = results.rokokIntervensi; //AD20      5 hingga 6 tahun
        rowNew5.commit();

        //PG206
        //Bawah 5 hingga 6 tahun ulangan
        let rowNew6 = worksheet.getRow(21);

        rowNew6.getCell(3).value = results.kedatanganTahunSemasa; //C21      5 hingga 6 tahun ulangan
        rowNew6.getCell(4).value = results.sapuanFluorida; //D21      5 hingga 6 tahun ulangan
        rowNew6.getCell(5).value = results.prrJenis1; //E21      5 hingga 6 tahun ulangan
        rowNew6.getCell(6).value = results.muridBaruFS; //F21      5 hingga 6 tahun ulangan
        rowNew6.getCell(7).value = results.muridUlanganFS; //G21      5 hingga 6 tahun ulangan
        rowNew6.getCell(8).value = results.gigiBaruFS; //H21      5 hingga 6 tahun ulangan
        rowNew6.getCell(9).value = results.gigiUlanganFS; //I21      5 hingga 6 tahun ulangan
        rowNew6.getCell(10).value = results.tampalanAntGdBaru; //J21      5 hingga 6 tahun ulangan
        rowNew6.getCell(11).value = results.tampalanAntGdUlangan; //K21      5 hingga 6 tahun ulangan
        rowNew6.getCell(12).value = results.tampalanAntGkBaru; //L21      5 hingga 6 tahun ulangan
        rowNew6.getCell(13).value = results.tampalanAntGkUlangan; //M21      5 hingga 6 tahun ulangan
        rowNew6.getCell(14).value = results.tampalanPostGdBaru; //N21      5 hingga 6 tahun ulangan
        rowNew6.getCell(15).value = results.tampalanPostGdUlangan; //O21      5 hingga 6 tahun ulangan
        rowNew6.getCell(16).value = results.tampalanPostGkBaru; //P21      5 hingga 6 tahun ulangan
        rowNew6.getCell(17).value = results.tampalanPostGkUlangan; //Q21      5 hingga 6 tahun ulangan
        rowNew6.getCell(18).value = results.tampalanPostAmgGdBaru; //R21      5 hingga 6 tahun ulangan
        rowNew6.getCell(19).value = results.tampalanPostAmgGdUlangan; //S21      5 hingga 6 tahun ulangan
        rowNew6.getCell(20).value = results.tampalanPostAmgGkBaru; //T21      5 hingga 6 tahun ulangan
        rowNew6.getCell(21).value = results.tampalanPostAmgGkUlangan; //U21      5 hingga 6 tahun ulangan
        rowNew6.getCell(22).value = results.jumlahTampalanBaru; //V21      5 hingga 6 tahun ulangan
        rowNew6.getCell(23).value = results.jumlahTampalanUlangan; //W21      5 hingga 6 tahun ulangan
        rowNew6.getCell(24).value = results.tampalanSementara; //X21      5 hingga 6 tahun ulangan
        rowNew6.getCell(25).value = results.cabutanGd; //Y21      5 hingga 6 tahun ulangan
        rowNew6.getCell(26).value = results.cabutanGk; //Z21      5 hingga 6 tahun ulangan
        rowNew6.getCell(27).value = results.penskaleran; //AA21      5 hingga 6 tahun ulangan
        rowNew6.getCell(28).value = results.kesSelesai; //AB21      5 hingga 6 tahun ulangan
        rowNew6.getCell(29).value = results.rokokSaringNasihat; //AC21      5 hingga 6 tahun ulangan
        rowNew6.getCell(30).value = results.rokokIntervensi; //AD21      5 hingga 6 tahun ulangan
        rowNew6.commit();

        //PG206
        //  7 hingga 9 tahun baru
        let rowNew7 = worksheet.getRow(22);

        rowNew7.getCell(3).value = results.kedatanganTahunSemasa; //C22      7 hingga 9 tahun baru
        rowNew7.getCell(4).value = results.sapuanFluorida; //D22      7 hingga 9 tahun baru
        rowNew7.getCell(5).value = results.prrJenis1; //E22      7 hingga 9 tahun baru
        rowNew7.getCell(6).value = results.muridBaruFS; //F22      7 hingga 9 tahun baru
        rowNew7.getCell(7).value = results.muridUlanganFS; //G22      7 hingga 9 tahun baru
        rowNew7.getCell(8).value = results.gigiBaruFS; //H22      7 hingga 9 tahun baru
        rowNew7.getCell(9).value = results.gigiUlanganFS; //I22      7 hingga 9 tahun baru
        rowNew7.getCell(10).value = results.tampalanAntGdBaru; //J22      7 hingga 9 tahun baru
        rowNew7.getCell(11).value = results.tampalanAntGdUlangan; //K22      7 hingga 9 tahun baru
        rowNew7.getCell(12).value = results.tampalanAntGkBaru; //L22      7 hingga 9 tahun baru
        rowNew7.getCell(13).value = results.tampalanAntGkUlangan; //M22      7 hingga 9 tahun baru
        rowNew7.getCell(14).value = results.tampalanPostGdBaru; //N22      7 hingga 9 tahun baru
        rowNew7.getCell(15).value = results.tampalanPostGdUlangan; //O22      7 hingga 9 tahun baru
        rowNew7.getCell(16).value = results.tampalanPostGkBaru; //P22      7 hingga 9 tahun baru
        rowNew7.getCell(17).value = results.tampalanPostGkUlangan; //Q22      7 hingga 9 tahun baru
        rowNew7.getCell(18).value = results.tampalanPostAmgGdBaru; //R22      7 hingga 9 tahun baru
        rowNew7.getCell(19).value = results.tampalanPostAmgGdUlangan; //S22      7 hingga 9 tahun baru
        rowNew7.getCell(20).value = results.tampalanPostAmgGkBaru; //T22      7 hingga 9 tahun baru
        rowNew7.getCell(21).value = results.tampalanPostAmgGkUlangan; //U22      7 hingga 9 tahun baru
        rowNew7.getCell(22).value = results.jumlahTampalanBaru; //V22      7 hingga 9 tahun baru
        rowNew7.getCell(23).value = results.jumlahTampalanUlangan; //W22      7 hingga 9 tahun baru
        rowNew7.getCell(24).value = results.tampalanSementara; //X22      7 hingga 9 tahun baru
        rowNew7.getCell(25).value = results.cabutanGd; //Y22      7 hingga 9 tahun baru
        rowNew7.getCell(26).value = results.cabutanGk; //Z22      7 hingga 9 tahun baru
        rowNew7.getCell(27).value = results.penskaleran; //AA22      7 hingga 9 tahun baru
        rowNew7.getCell(28).value = results.kesSelesai; //AB22      7 hingga 9 tahun baru
        rowNew7.getCell(29).value = results.rokokSaringNasihat; //AC22      7 hingga 9 tahun baru
        rowNew7.getCell(30).value = results.rokokIntervensi; //AD22      7 hingga 9 tahun baru
        rowNew7.commit();

        //PG206
        //  7 hingga 9 tahun ulangan
        let rowNew8 = worksheet.getRow(23);

        rowNew8.getCell(3).value = results.kedatanganTahunSemasa; //C23      7 hingga 9 tahun ulangan
        rowNew8.getCell(4).value = results.sapuanFluorida; //D23      7 hingga 9 tahun ulangan
        rowNew8.getCell(5).value = results.prrJenis1; //E23      7 hingga 9 tahun ulangan
        rowNew8.getCell(6).value = results.muridBaruFS; //F23      7 hingga 9 tahun ulangan
        rowNew8.getCell(7).value = results.muridUlanganFS; //G23      7 hingga 9 tahun ulangan
        rowNew8.getCell(8).value = results.gigiBaruFS; //H23      7 hingga 9 tahun ulangan
        rowNew8.getCell(9).value = results.gigiUlanganFS; //I23      7 hingga 9 tahun ulangan
        rowNew8.getCell(10).value = results.tampalanAntGdBaru; //J23      7 hingga 9 tahun ulangan
        rowNew8.getCell(11).value = results.tampalanAntGdUlangan; //K23      7 hingga 9 tahun ulangan
        rowNew8.getCell(12).value = results.tampalanAntGkBaru; //L23      7 hingga 9 tahun ulangan
        rowNew8.getCell(13).value = results.tampalanAntGkUlangan; //M23      7 hingga 9 tahun ulangan
        rowNew8.getCell(14).value = results.tampalanPostGdBaru; //N23      7 hingga 9 tahun ulangan
        rowNew8.getCell(15).value = results.tampalanPostGdUlangan; //O23      7 hingga 9 tahun ulangan
        rowNew8.getCell(16).value = results.tampalanPostGkBaru; //P23      7 hingga 9 tahun ulangan
        rowNew8.getCell(17).value = results.tampalanPostGkUlangan; //Q23      7 hingga 9 tahun ulangan
        rowNew8.getCell(18).value = results.tampalanPostAmgGdBaru; //R23      7 hingga 9 tahun ulangan
        rowNew8.getCell(19).value = results.tampalanPostAmgGdUlangan; //S23      7 hingga 9 tahun ulangan
        rowNew8.getCell(20).value = results.tampalanPostAmgGkBaru; //T23      7 hingga 9 tahun ulangan
        rowNew8.getCell(21).value = results.tampalanPostAmgGkUlangan; //U23      7 hingga 9 tahun ulangan
        rowNew8.getCell(22).value = results.jumlahTampalanBaru; //V23      7 hingga 9 tahun ulangan
        rowNew8.getCell(23).value = results.jumlahTampalanUlangan; //W23      7 hingga 9 tahun ulangan
        rowNew8.getCell(24).value = results.tampalanSementara; //X23      7 hingga 9 tahun ulangan
        rowNew8.getCell(25).value = results.cabutanGd; //Y23      7 hingga 9 tahun ulangan
        rowNew8.getCell(26).value = results.cabutanGk; //Z23      7 hingga 9 tahun ulangan
        rowNew8.getCell(27).value = results.penskaleran; //AA23      7 hingga 9 tahun ulangan
        rowNew8.getCell(28).value = results.kesSelesai; //AB23      7 hingga 9 tahun ulangan
        rowNew8.getCell(29).value = results.rokokSaringNasihat; //AC23      7 hingga 9 tahun ulangan
        rowNew8.getCell(30).value = results.rokokIntervensi; //AD23      7 hingga 9 tahun ulangan
        rowNew8.commit();

        //PG206
        //  10 hingga 12 tahun baru
        let rowNew9 = worksheet.getRow(24);

        rowNew9.getCell(3).value = results.kedatanganTahunSemasa; //C24      10 hingga 12 tahun baru
        rowNew9.getCell(4).value = results.sapuanFluorida; //D24      10 hingga 12 tahun baru
        rowNew9.getCell(5).value = results.prrJenis1; //E24      10 hingga 12 tahun baru
        rowNew9.getCell(6).value = results.muridBaruFS; //F24      10 hingga 12 tahun baru
        rowNew9.getCell(7).value = results.muridUlanganFS; //G24      10 hingga 12 tahun baru
        rowNew9.getCell(8).value = results.gigiBaruFS; //H24      10 hingga 12 tahun baru
        rowNew9.getCell(9).value = results.gigiUlanganFS; //I24      10 hingga 12 tahun baru
        rowNew9.getCell(10).value = results.tampalanAntGdBaru; //J24      10 hingga 12 tahun baru
        rowNew9.getCell(11).value = results.tampalanAntGdUlangan; //K24      10 hingga 12 tahun baru
        rowNew9.getCell(12).value = results.tampalanAntGkBaru; //L24      10 hingga 12 tahun baru
        rowNew9.getCell(13).value = results.tampalanAntGkUlangan; //M24      10 hingga 12 tahun baru
        rowNew9.getCell(14).value = results.tampalanPostGdBaru; //N24      10 hingga 12 tahun baru
        rowNew9.getCell(15).value = results.tampalanPostGdUlangan; //O24      10 hingga 12 tahun baru
        rowNew9.getCell(16).value = results.tampalanPostGkBaru; //P24      10 hingga 12 tahun baru
        rowNew9.getCell(17).value = results.tampalanPostGkUlangan; //Q24      10 hingga 12 tahun baru
        rowNew9.getCell(18).value = results.tampalanPostAmgGdBaru; //R24      10 hingga 12 tahun baru
        rowNew9.getCell(19).value = results.tampalanPostAmgGdUlangan; //S24      10 hingga 12 tahun baru
        rowNew9.getCell(20).value = results.tampalanPostAmgGkBaru; //T24      10 hingga 12 tahun baru
        rowNew9.getCell(21).value = results.tampalanPostAmgGkUlangan; //U24      10 hingga 12 tahun baru
        rowNew9.getCell(22).value = results.jumlahTampalanBaru; //V24      10 hingga 12 tahun baru
        rowNew9.getCell(23).value = results.jumlahTampalanUlangan; //W24      10 hingga 12 tahun baru
        rowNew9.getCell(24).value = results.tampalanSementara; //X24      10 hingga 12 tahun baru
        rowNew9.getCell(25).value = results.cabutanGd; //Y24      10 hingga 12 tahun baru
        rowNew9.getCell(26).value = results.cabutanGk; //Z24      10 hingga 12 tahun baru
        rowNew9.getCell(27).value = results.penskaleran; //AA24      10 hingga 12 tahun baru
        rowNew9.getCell(28).value = results.kesSelesai; //AB24      10 hingga 12 tahun baru
        rowNew9.getCell(29).value = results.rokokSaringNasihat; //AC24      10 hingga 12 tahun baru
        rowNew9.getCell(30).value = results.rokokIntervensi; //AD24      10 hingga 12 tahun baru
        rowNew9.commit();

        //PG206
        //  10 hingga 12 tahun ulangan
        let rowNew10 = worksheet.getRow(25);

        rowNew10.getCell(3).value = results.kedatanganTahunSemasa; //C25      10 hingga 12 tahun ulangan
        rowNew10.getCell(4).value = results.sapuanFluorida; //D25      10 hingga 12 tahun ulangan
        rowNew10.getCell(5).value = results.prrJenis1; //E25      10 hingga 12 tahun ulangan
        rowNew10.getCell(6).value = results.muridBaruFS; //F25      10 hingga 12 tahun ulangan
        rowNew10.getCell(7).value = results.muridUlanganFS; //G25      10 hingga 12 tahun ulangan
        rowNew10.getCell(8).value = results.gigiBaruFS; //H25      10 hingga 12 tahun ulangan
        rowNew10.getCell(9).value = results.gigiUlanganFS; //I25      10 hingga 12 tahun ulangan
        rowNew10.getCell(10).value = results.tampalanAntGdBaru; //J25      10 hingga 12 tahun ulangan
        rowNew10.getCell(11).value = results.tampalanAntGdUlangan; //K25      10 hingga 12 tahun ulangan
        rowNew10.getCell(12).value = results.tampalanAntGkBaru; //L25      10 hingga 12 tahun ulangan
        rowNew10.getCell(13).value = results.tampalanAntGkUlangan; //M25      10 hingga 12 tahun ulangan
        rowNew10.getCell(14).value = results.tampalanPostGdBaru; //N25      10 hingga 12 tahun ulangan
        rowNew10.getCell(15).value = results.tampalanPostGdUlangan; //O25      10 hingga 12 tahun ulangan
        rowNew10.getCell(16).value = results.tampalanPostGkBaru; //P25      10 hingga 12 tahun ulangan
        rowNew10.getCell(17).value = results.tampalanPostGkUlangan; //Q25      10 hingga 12 tahun ulangan
        rowNew10.getCell(18).value = results.tampalanPostAmgGdBaru; //R25      10 hingga 12 tahun ulangan
        rowNew10.getCell(19).value = results.tampalanPostAmgGdUlangan; //S25      10 hingga 12 tahun ulangan
        rowNew10.getCell(20).value = results.tampalanPostAmgGkBaru; //T25      10 hingga 12 tahun ulangan
        rowNew10.getCell(21).value = results.tampalanPostAmgGkUlangan; //U25      10 hingga 12 tahun ulangan
        rowNew10.getCell(22).value = results.jumlahTampalanBaru; //V25      10 hingga 12 tahun ulangan
        rowNew10.getCell(23).value = results.jumlahTampalanUlangan; //W25      10 hingga 12 tahun ulangan
        rowNew10.getCell(24).value = results.tampalanSementara; //X25      10 hingga 12 tahun ulangan
        rowNew10.getCell(25).value = results.cabutanGd; //Y25      10 hingga 12 tahun ulangan
        rowNew10.getCell(26).value = results.cabutanGk; //Z25      10 hingga 12 tahun ulangan
        rowNew10.getCell(27).value = results.penskaleran; //AA25      10 hingga 12 tahun ulangan
        rowNew10.getCell(28).value = results.kesSelesai; //AB25      10 hingga 12 tahun ulangan
        rowNew10.getCell(29).value = results.rokokSaringNasihat; //AC25      10 hingga 12 tahun ulangan
        rowNew10.getCell(30).value = results.rokokIntervensi; //AD25      10 hingga 12 tahun ulangan
        rowNew10.commit();

        //PG206
        //  13 hingga 14 tahun baru
        let rowNew11 = worksheet.getRow(26);

        rowNew11.getCell(3).value = results.kedatanganTahunSemasa; //C26      13 hingga 14 tahun baru
        rowNew11.getCell(4).value = results.sapuanFluorida; //D26      13 hingga 14 tahun baru
        rowNew11.getCell(5).value = results.prrJenis1; //E26      13 hingga 14 tahun baru
        rowNew11.getCell(6).value = results.muridBaruFS; //F26      13 hingga 14 tahun baru
        rowNew11.getCell(7).value = results.muridUlanganFS; //G26      13 hingga 14 tahun baru
        rowNew11.getCell(8).value = results.gigiBaruFS; //H26      13 hingga 14 tahun baru
        rowNew11.getCell(9).value = results.gigiUlanganFS; //I26      13 hingga 14 tahun baru
        rowNew11.getCell(10).value = results.tampalanAntGdBaru; //J26      13 hingga 14 tahun baru
        rowNew11.getCell(11).value = results.tampalanAntGdUlangan; //K26      13 hingga 14 tahun baru
        rowNew11.getCell(12).value = results.tampalanAntGkBaru; //L26      13 hingga 14 tahun baru
        rowNew11.getCell(13).value = results.tampalanAntGkUlangan; //M26      13 hingga 14 tahun baru
        rowNew11.getCell(14).value = results.tampalanPostGdBaru; //N26      13 hingga 14 tahun baru
        rowNew11.getCell(15).value = results.tampalanPostGdUlangan; //O26      13 hingga 14 tahun baru
        rowNew11.getCell(16).value = results.tampalanPostGkBaru; //P26      13 hingga 14 tahun baru
        rowNew11.getCell(17).value = results.tampalanPostGkUlangan; //Q26      13 hingga 14 tahun baru
        rowNew11.getCell(18).value = results.tampalanPostAmgGdBaru; //R26      13 hingga 14 tahun baru
        rowNew11.getCell(19).value = results.tampalanPostAmgGdUlangan; //S26      13 hingga 14 tahun baru
        rowNew11.getCell(20).value = results.tampalanPostAmgGkBaru; //T26      13 hingga 14 tahun baru
        rowNew11.getCell(21).value = results.tampalanPostAmgGkUlangan; //U26      13 hingga 14 tahun baru
        rowNew11.getCell(22).value = results.jumlahTampalanBaru; //V26      13 hingga 14 tahun baru
        rowNew11.getCell(23).value = results.jumlahTampalanUlangan; //W26      13 hingga 14 tahun baru
        rowNew11.getCell(24).value = results.tampalanSementara; //X26      13 hingga 14 tahun baru
        rowNew11.getCell(25).value = results.cabutanGd; //Y26      13 hingga 14 tahun baru
        rowNew11.getCell(26).value = results.cabutanGk; //Z26      13 hingga 14 tahun baru
        rowNew11.getCell(27).value = results.penskaleran; //AA26      13 hingga 14 tahun baru
        rowNew11.getCell(28).value = results.kesSelesai; //AB26      13 hingga 14 tahun baru
        rowNew11.getCell(29).value = results.rokokSaringNasihat; //AC26      13 hingga 14 tahun baru
        rowNew11.getCell(30).value = results.rokokIntervensi; //AD26      13 hingga 14 tahun baru
        rowNew11.commit();

        //PG206
        //  13 hingga 14 tahun ulangan
        let rowNew12 = worksheet.getRow(27);

        rowNew12.getCell(3).value = results.kedatanganTahunSemasa; //C27      13 hingga 14 tahun ulangan
        rowNew12.getCell(4).value = results.sapuanFluorida; //D27      13 hingga 14 tahun ulangan
        rowNew12.getCell(5).value = results.prrJenis1; //E27      13 hingga 14 tahun ulangan
        rowNew12.getCell(6).value = results.muridBaruFS; //F27      13 hingga 14 tahun ulangan
        rowNew12.getCell(7).value = results.muridUlanganFS; //G27      13 hingga 14 tahun ulangan
        rowNew12.getCell(8).value = results.gigiBaruFS; //H27      13 hingga 14 tahun ulangan
        rowNew12.getCell(9).value = results.gigiUlanganFS; //I27      13 hingga 14 tahun ulangan
        rowNew12.getCell(10).value = results.tampalanAntGdBaru; //J27      13 hingga 14 tahun ulangan
        rowNew12.getCell(11).value = results.tampalanAntGdUlangan; //K27      13 hingga 14 tahun ulangan
        rowNew12.getCell(12).value = results.tampalanAntGkBaru; //L27      13 hingga 14 tahun ulangan
        rowNew12.getCell(13).value = results.tampalanAntGkUlangan; //M27      13 hingga 14 tahun ulangan
        rowNew12.getCell(14).value = results.tampalanPostGdBaru; //N27      13 hingga 14 tahun ulangan
        rowNew12.getCell(15).value = results.tampalanPostGdUlangan; //O27      13 hingga 14 tahun ulangan
        rowNew12.getCell(16).value = results.tampalanPostGkBaru; //P27      13 hingga 14 tahun ulangan
        rowNew12.getCell(17).value = results.tampalanPostGkUlangan; //Q27      13 hingga 14 tahun ulangan
        rowNew12.getCell(18).value = results.tampalanPostAmgGdBaru; //R27      13 hingga 14 tahun ulangan
        rowNew12.getCell(19).value = results.tampalanPostAmgGdUlangan; //S27      13 hingga 14 tahun ulangan
        rowNew12.getCell(20).value = results.tampalanPostAmgGkBaru; //T27      13 hingga 14 tahun ulangan
        rowNew12.getCell(21).value = results.tampalanPostAmgGkUlangan; //U27      13 hingga 14 tahun ulangan
        rowNew12.getCell(22).value = results.jumlahTampalanBaru; //V27      13 hingga 14 tahun ulangan
        rowNew12.getCell(23).value = results.jumlahTampalanUlangan; //W27      13 hingga 14 tahun ulangan
        rowNew12.getCell(24).value = results.tampalanSementara; //X27      13 hingga 14 tahun ulangan
        rowNew12.getCell(25).value = results.cabutanGd; //Y27      13 hingga 14 tahun ulangan
        rowNew12.getCell(26).value = results.cabutanGk; //Z27      13 hingga 14 tahun ulangan
        rowNew12.getCell(27).value = results.penskaleran; //AA27      13 hingga 14 tahun ulangan
        rowNew12.getCell(28).value = results.kesSelesai; //AB27      13 hingga 14 tahun ulangan
        rowNew12.getCell(29).value = results.rokokSaringNasihat; //AC27      13 hingga 14 tahun ulangan
        rowNew12.getCell(30).value = results.rokokIntervensi; //AD27      13 hingga 14 tahun ulangan
        rowNew12.commit();

        //PG206
        //  15 hingga 17 tahun baru
        let rowNew13 = worksheet.getRow(28);

        rowNew13.getCell(3).value = results.kedatanganTahunSemasa; //C28      15 hingga 17 tahun baru
        rowNew13.getCell(4).value = results.sapuanFluorida; //D28      15 hingga 17 tahun baru
        rowNew13.getCell(5).value = results.prrJenis1; //E28      15 hingga 17 tahun baru
        rowNew13.getCell(6).value = results.muridBaruFS; //F28      15 hingga 17 tahun baru
        rowNew13.getCell(7).value = results.muridUlanganFS; //G28      15 hingga 17 tahun baru
        rowNew13.getCell(8).value = results.gigiBaruFS; //H28      15 hingga 17 tahun baru
        rowNew13.getCell(9).value = results.gigiUlanganFS; //I28      15 hingga 17 tahun baru
        rowNew13.getCell(10).value = results.tampalanAntGdBaru; //J28      15 hingga 17 tahun baru
        rowNew13.getCell(11).value = results.tampalanAntGdUlangan; //K28      15 hingga 17 tahun baru
        rowNew13.getCell(12).value = results.tampalanAntGkBaru; //L28      15 hingga 17 tahun baru
        rowNew13.getCell(13).value = results.tampalanAntGkUlangan; //M28      15 hingga 17 tahun baru
        rowNew13.getCell(14).value = results.tampalanPostGdBaru; //N28      15 hingga 17 tahun baru
        rowNew13.getCell(15).value = results.tampalanPostGdUlangan; //O28      15 hingga 17 tahun baru
        rowNew13.getCell(16).value = results.tampalanPostGkBaru; //P28      15 hingga 17 tahun baru
        rowNew13.getCell(17).value = results.tampalanPostGkUlangan; //Q28      15 hingga 17 tahun baru
        rowNew13.getCell(18).value = results.tampalanPostAmgGdBaru; //R28      15 hingga 17 tahun baru
        rowNew13.getCell(19).value = results.tampalanPostAmgGdUlangan; //S28      15 hingga 17 tahun baru
        rowNew13.getCell(20).value = results.tampalanPostAmgGkBaru; //T28      15 hingga 17 tahun baru
        rowNew13.getCell(21).value = results.tampalanPostAmgGkUlangan; //U28      15 hingga 17 tahun baru
        rowNew13.getCell(22).value = results.jumlahTampalanBaru; //V28      15 hingga 17 tahun baru
        rowNew13.getCell(23).value = results.jumlahTampalanUlangan; //W28      15 hingga 17 tahun baru
        rowNew13.getCell(24).value = results.tampalanSementara; //X28      15 hingga 17 tahun baru
        rowNew13.getCell(25).value = results.cabutanGd; //Y28      15 hingga 17 tahun baru
        rowNew13.getCell(26).value = results.cabutanGk; //Z28      15 hingga 17 tahun baru
        rowNew13.getCell(27).value = results.penskaleran; //AA28      15 hingga 17 tahun baru
        rowNew13.getCell(28).value = results.kesSelesai; //AB28      15 hingga 17 tahun baru
        rowNew13.getCell(29).value = results.rokokSaringNasihat; //AC28      15 hingga 17 tahun baru
        rowNew13.getCell(30).value = results.rokokIntervensi; //AD28      15 hingga 17 tahun baru
        rowNew13.commit();

        //PG206
        //  15 hingga 17 tahun ulangan
        let rowNew14 = worksheet.getRow(29);

        rowNew14.getCell(3).value = results.kedatanganTahunSemasa; //C29      15 hingga 17 tahun ulangan
        rowNew14.getCell(4).value = results.sapuanFluorida; //D29      15 hingga 17 tahun ulangan
        rowNew14.getCell(5).value = results.prrJenis1; //E29      15 hingga 17 tahun ulangan
        rowNew14.getCell(6).value = results.muridBaruFS; //F29      15 hingga 17 tahun ulangan
        rowNew14.getCell(7).value = results.muridUlanganFS; //G29      15 hingga 17 tahun ulangan
        rowNew14.getCell(8).value = results.gigiBaruFS; //H29      15 hingga 17 tahun ulangan
        rowNew14.getCell(9).value = results.gigiUlanganFS; //I29      15 hingga 17 tahun ulangan
        rowNew14.getCell(10).value = results.tampalanAntGdBaru; //J29      15 hingga 17 tahun ulangan
        rowNew14.getCell(11).value = results.tampalanAntGdUlangan; //K29      15 hingga 17 tahun ulangan
        rowNew14.getCell(12).value = results.tampalanAntGkBaru; //L29      15 hingga 17 tahun ulangan
        rowNew14.getCell(13).value = results.tampalanAntGkUlangan; //M29      15 hingga 17 tahun ulangan
        rowNew14.getCell(14).value = results.tampalanPostGdBaru; //N29      15 hingga 17 tahun ulangan
        rowNew14.getCell(15).value = results.tampalanPostGdUlangan; //O29      15 hingga 17 tahun ulangan
        rowNew14.getCell(16).value = results.tampalanPostGkBaru; //P29      15 hingga 17 tahun ulangan
        rowNew14.getCell(17).value = results.tampalanPostGkUlangan; //Q29      15 hingga 17 tahun ulangan
        rowNew14.getCell(18).value = results.tampalanPostAmgGdBaru; //R29      15 hingga 17 tahun ulangan
        rowNew14.getCell(19).value = results.tampalanPostAmgGdUlangan; //S29      15 hingga 17 tahun ulangan
        rowNew14.getCell(20).value = results.tampalanPostAmgGkBaru; //T29      15 hingga 17 tahun ulangan
        rowNew14.getCell(21).value = results.tampalanPostAmgGkUlangan; //U29      15 hingga 17 tahun ulangan
        rowNew14.getCell(22).value = results.jumlahTampalanBaru; //V29      15 hingga 17 tahun ulangan
        rowNew14.getCell(23).value = results.jumlahTampalanUlangan; //W29      15 hingga 17 tahun ulangan
        rowNew14.getCell(24).value = results.tampalanSementara; //X29      15 hingga 17 tahun ulangan
        rowNew14.getCell(25).value = results.cabutanGd; //Y29      15 hingga 17 tahun ulangan
        rowNew14.getCell(26).value = results.cabutanGk; //Z29      15 hingga 17 tahun ulangan
        rowNew14.getCell(27).value = results.penskaleran; //AA29      15 hingga 17 tahun ulangan
        rowNew14.getCell(28).value = results.kesSelesai; //AB29      15 hingga 17 tahun ulangan
        rowNew14.getCell(29).value = results.rokokSaringNasihat; //AC29      15 hingga 17 tahun ulangan
        rowNew14.getCell(30).value = results.rokokIntervensi; //AD29      15 hingga 17 tahun ulangan
        rowNew14.commit();

        //PG206
        //  Orang Kurang Upaya Baru
        let rowNew15 = worksheet.getRow(32);

        rowNew15.getCell(3).value = results.kedatanganTahunSemasa; //C28      Orang kurang upaya baru
        rowNew15.getCell(4).value = results.sapuanFluorida; //D28      Orang kurang upaya baru
        rowNew15.getCell(5).value = results.prrJenis1; //E28      Orang kurang upaya baru
        rowNew15.getCell(6).value = results.muridBaruFS; //F28      Orang kurang upaya baru
        rowNew15.getCell(7).value = results.muridUlanganFS; //G28      Orang kurang upaya baru
        rowNew15.getCell(8).value = results.gigiBaruFS; //H28      Orang kurang upaya baru
        rowNew15.getCell(9).value = results.gigiUlanganFS; //I28      Orang kurang upaya baru
        rowNew15.getCell(10).value = results.tampalanAntGdBaru; //J28      Orang kurang upaya baru
        rowNew15.getCell(11).value = results.tampalanAntGdUlangan; //K28      Orang kurang upaya baru
        rowNew15.getCell(12).value = results.tampalanAntGkBaru; //L28      Orang kurang upaya baru
        rowNew15.getCell(13).value = results.tampalanAntGkUlangan; //M28      Orang kurang upaya baru
        rowNew15.getCell(14).value = results.tampalanPostGdBaru; //N28      Orang kurang upaya baru
        rowNew15.getCell(15).value = results.tampalanPostGdUlangan; //O28      Orang kurang upaya baru
        rowNew15.getCell(16).value = results.tampalanPostGkBaru; //P28      Orang kurang upaya baru
        rowNew15.getCell(17).value = results.tampalanPostGkUlangan; //Q28      Orang kurang upaya baru
        rowNew15.getCell(18).value = results.tampalanPostAmgGdBaru; //R28      Orang kurang upaya baru
        rowNew15.getCell(19).value = results.tampalanPostAmgGdUlangan; //S28      Orang kurang upaya baru
        rowNew15.getCell(20).value = results.tampalanPostAmgGkBaru; //T28      Orang kurang upaya baru
        rowNew15.getCell(21).value = results.tampalanPostAmgGkUlangan; //U28      Orang kurang upaya baru
        rowNew15.getCell(22).value = results.jumlahTampalanBaru; //V28      Orang kurang upaya baru
        rowNew15.getCell(23).value = results.jumlahTampalanUlangan; //W28      Orang kurang upaya baru
        rowNew15.getCell(24).value = results.tampalanSementara; //X28      Orang kurang upaya baru
        rowNew15.getCell(25).value = results.cabutanGd; //Y28      Orang kurang upaya baru
        rowNew15.getCell(26).value = results.cabutanGk; //Z28      Orang kurang upaya baru
        rowNew15.getCell(27).value = results.penskaleran; //AA28      Orang kurang upaya baru
        rowNew15.getCell(28).value = results.kesSelesai; //AB28      Orang kurang upaya baru
        rowNew15.getCell(29).value = results.rokokSaringNasihat; //AC28      Orang kurang upaya baru
        rowNew15.getCell(30).value = results.rokokIntervensi; //AD28      Orang kurang upaya baru
        rowNew15.commit();

        //PG206
        //  Orang Kurang Upaya Ulangan
        let rowNew16 = worksheet.getRow(33);

        rowNew16.getCell(3).value = results.kedatanganTahunSemasa; //C33      Orang kurang upaya ulangan
        rowNew16.getCell(4).value = results.sapuanFluorida; //D33      Orang kurang upaya ulangan
        rowNew16.getCell(5).value = results.prrJenis1; //E33      Orang kurang upaya ulangan
        rowNew16.getCell(6).value = results.muridBaruFS; //F33      Orang kurang upaya ulangan
        rowNew16.getCell(7).value = results.muridUlanganFS; //G33      Orang kurang upaya ulangan
        rowNew16.getCell(8).value = results.gigiBaruFS; //H33      Orang kurang upaya ulangan
        rowNew16.getCell(9).value = results.gigiUlanganFS; //I33      Orang kurang upaya ulangan
        rowNew16.getCell(10).value = results.tampalanAntGdBaru; //J33      Orang kurang upaya ulangan
        rowNew16.getCell(11).value = results.tampalanAntGdUlangan; //K33      Orang kurang upaya ulangan
        rowNew16.getCell(12).value = results.tampalanAntGkBaru; //L33      Orang kurang upaya ulangan
        rowNew16.getCell(13).value = results.tampalanAntGkUlangan; //M33      Orang kurang upaya ulangan
        rowNew16.getCell(14).value = results.tampalanPostGdBaru; //N33      Orang kurang upaya ulangan
        rowNew16.getCell(15).value = results.tampalanPostGdUlangan; //O33      Orang kurang upaya ulangan
        rowNew16.getCell(16).value = results.tampalanPostGkBaru; //P33      Orang kurang upaya ulangan
        rowNew16.getCell(17).value = results.tampalanPostGkUlangan; //Q33      Orang kurang upaya ulangan
        rowNew16.getCell(18).value = results.tampalanPostAmgGdBaru; //R33      Orang kurang upaya ulangan
        rowNew16.getCell(19).value = results.tampalanPostAmgGdUlangan; //S33      Orang kurang upaya ulangan
        rowNew16.getCell(20).value = results.tampalanPostAmgGkBaru; //T33      Orang kurang upaya ulangan
        rowNew16.getCell(21).value = results.tampalanPostAmgGkUlangan; //U33      Orang kurang upaya ulangan
        rowNew16.getCell(22).value = results.jumlahTampalanBaru; //V33      Orang kurang upaya ulangan
        rowNew16.getCell(23).value = results.jumlahTampalanUlangan; //W33      Orang kurang upaya ulangan
        rowNew16.getCell(24).value = results.tampalanSementara; //X33      Orang kurang upaya ulangan
        rowNew16.getCell(25).value = results.cabutanGd; //Y33      Orang kurang upaya ulangan
        rowNew16.getCell(26).value = results.cabutanGk; //Z33      Orang kurang upaya ulangan
        rowNew16.getCell(27).value = results.penskaleran; //AA33      Orang kurang upaya ulangan
        rowNew16.getCell(33).value = results.kesSelesai; //AB33      Orang kurang upaya ulangan
        rowNew16.getCell(29).value = results.rokokSaringNasihat; //AC33      Orang kurang upaya ulangan
        rowNew16.getCell(30).value = results.rokokIntervensi; //AD33      Orang kurang upaya ulangan
        rowNew16.commit();

        //PG206
        //  Bukan warganegara Baru
        let rowNew17 = worksheet.getRow(34);

        rowNew17.getCell(3).value = results.kedatanganTahunSemasa; //C34      Bukan warganegara Baru
        rowNew17.getCell(4).value = results.sapuanFluorida; //D34      Bukan warganegara Baru
        rowNew17.getCell(5).value = results.prrJenis1; //E34      Bukan warganegara Baru
        rowNew17.getCell(6).value = results.muridBaruFS; //F34      Bukan warganegara Baru
        rowNew17.getCell(7).value = results.muridUlanganFS; //G34      Bukan warganegara Baru
        rowNew17.getCell(8).value = results.gigiBaruFS; //H34      Bukan warganegara Baru
        rowNew17.getCell(9).value = results.gigiUlanganFS; //I34      Bukan warganegara Baru
        rowNew17.getCell(10).value = results.tampalanAntGdBaru; //J34      Bukan warganegara Baru
        rowNew17.getCell(11).value = results.tampalanAntGdUlangan; //K34      Bukan warganegara Baru
        rowNew17.getCell(12).value = results.tampalanAntGkBaru; //L34      Bukan warganegara Baru
        rowNew17.getCell(13).value = results.tampalanAntGkUlangan; //M34      Bukan warganegara Baru
        rowNew17.getCell(14).value = results.tampalanPostGdBaru; //N34      Bukan warganegara Baru
        rowNew17.getCell(15).value = results.tampalanPostGdUlangan; //O34      Bukan warganegara Baru
        rowNew17.getCell(16).value = results.tampalanPostGkBaru; //P34      Bukan warganegara Baru
        rowNew17.getCell(17).value = results.tampalanPostGkUlangan; //Q34      Bukan warganegara Baru
        rowNew17.getCell(18).value = results.tampalanPostAmgGdBaru; //R34      Bukan warganegara Baru
        rowNew17.getCell(19).value = results.tampalanPostAmgGdUlangan; //S34      Bukan warganegara Baru
        rowNew17.getCell(20).value = results.tampalanPostAmgGkBaru; //T34      Bukan warganegara Baru
        rowNew17.getCell(21).value = results.tampalanPostAmgGkUlangan; //U34      Bukan warganegara Baru
        rowNew17.getCell(22).value = results.jumlahTampalanBaru; //V34      Bukan warganegara Baru
        rowNew17.getCell(23).value = results.jumlahTampalanUlangan; //W34      Bukan warganegara Baru
        rowNew17.getCell(24).value = results.tampalanSementara; //X34      Bukan warganegara Baru
        rowNew17.getCell(25).value = results.cabutanGd; //Y34      Bukan warganegara Baru
        rowNew17.getCell(26).value = results.cabutanGk; //Z34      Bukan warganegara Baru
        rowNew17.getCell(27).value = results.penskaleran; //AA34      Bukan warganegara Baru
        rowNew17.getCell(34).value = results.kesSelesai; //AB34      Bukan warganegara Baru
        rowNew17.getCell(29).value = results.rokokSaringNasihat; //AC34      Bukan warganegara Baru
        rowNew17.getCell(30).value = results.rokokIntervensi; //AD34      Bukan warganegara Baru
        rowNew17.commit();

        //PG206
        //  Bukan warganegara Ulangan
        let rowNew18 = worksheet.getRow(35);

        rowNew18.getCell(3).value = results.kedatanganTahunSemasa; //C34      Bukan warganegara Ulangan
        rowNew18.getCell(4).value = results.sapuanFluorida; //D34      Bukan warganegara Ulangan
        rowNew18.getCell(5).value = results.prrJenis1; //E34      Bukan warganegara Ulangan
        rowNew18.getCell(6).value = results.muridBaruFS; //F34      Bukan warganegara Ulangan
        rowNew18.getCell(7).value = results.muridUlanganFS; //G34      Bukan warganegara Ulangan
        rowNew18.getCell(8).value = results.gigiBaruFS; //H34      Bukan warganegara Ulangan
        rowNew18.getCell(9).value = results.gigiUlanganFS; //I34      Bukan warganegara Ulangan
        rowNew18.getCell(10).value = results.tampalanAntGdBaru; //J34      Bukan warganegara Ulangan
        rowNew18.getCell(11).value = results.tampalanAntGdUlangan; //K34      Bukan warganegara Ulangan
        rowNew18.getCell(12).value = results.tampalanAntGkBaru; //L34      Bukan warganegara Ulangan
        rowNew18.getCell(13).value = results.tampalanAntGkUlangan; //M34      Bukan warganegara Ulangan
        rowNew18.getCell(14).value = results.tampalanPostGdBaru; //N34      Bukan warganegara Ulangan
        rowNew18.getCell(15).value = results.tampalanPostGdUlangan; //O34      Bukan warganegara Ulangan
        rowNew18.getCell(16).value = results.tampalanPostGkBaru; //P34      Bukan warganegara Ulangan
        rowNew18.getCell(17).value = results.tampalanPostGkUlangan; //Q34      Bukan warganegara Ulangan
        rowNew18.getCell(18).value = results.tampalanPostAmgGdBaru; //R34      Bukan warganegara Ulangan
        rowNew18.getCell(19).value = results.tampalanPostAmgGdUlangan; //S34      Bukan warganegara Ulangan
        rowNew18.getCell(20).value = results.tampalanPostAmgGkBaru; //T34      Bukan warganegara Ulangan
        rowNew18.getCell(21).value = results.tampalanPostAmgGkUlangan; //U34      Bukan warganegara Ulangan
        rowNew18.getCell(22).value = results.jumlahTampalanBaru; //V34      Bukan warganegara Ulangan
        rowNew18.getCell(23).value = results.jumlahTampalanUlangan; //W34      Bukan warganegara Ulangan
        rowNew18.getCell(24).value = results.tampalanSementara; //X34      Bukan warganegara Ulangan
        rowNew18.getCell(25).value = results.cabutanGd; //Y34      Bukan warganegara Ulangan
        rowNew18.getCell(26).value = results.cabutanGk; //Z34      Bukan warganegara Ulangan
        rowNew18.getCell(27).value = results.penskaleran; //AA34      Bukan warganegara Ulangan
        rowNew18.getCell(34).value = results.kesSelesai; //AB34      Bukan warganegara Ulangan
        rowNew18.getCell(29).value = results.rokokSaringNasihat; //AC34      Bukan warganegara Ulangan
        rowNew18.getCell(30).value = results.rokokIntervensi; //AD34      Bukan warganegara Ulangan
        rowNew18.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PG206.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG207 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGS207.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PG207');

        //PG207
        //Bawah 1 tahun Baru
        let rowNew1 = worksheet.getRow(17);
        rowNew1.getCell(3).value = results.kedatanganTahunSemasa; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(4).value = results.sapuanFluorida; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(5).value = results.prrJenis1; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(6).value = results.muridBaruFS; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(7).value = results.muridSemulaFS; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(8).value = results.gigiBaruFS; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(9).value = results.gigiSemulaFS; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(10).value = results.tampalanAntGdBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(11).value = results.tampalanAntGdSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(12).value = results.tampalanAntGkBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(13).value = results.tampalanAntGkSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(14).value = results.tampalanPostGdBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(15).value = results.tampalanPostGdSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(16).value = results.tampalanPostGkBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(17).value = results.tampalanPostGkSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(18).value = results.tampalanPostAmgGdBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(19).value = results.tampalanPostAmgGdSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(20).value = results.tampalanPostAmgGkBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(21).value = results.tampalanPostAmgGkSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(22).value = results.inlayOnlayBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(23).value = results.inlayOnlaySemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(24).value = results.jumlahTampalanBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(25).value = results.jumlahTampalanSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(26).value = results.tampalanSementara; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(27).value = results.cabutanGd; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(28).value = results.cabutanGk; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(29).value = results.komplikasiSelepasCabutan; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(30).value = results.penskaleran; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(31).value = results.rawatanLain; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(32).value = results.rawatanEndo; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(33).value = results.rawatanOrtho; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(34).value = results.kesPerubatan; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(35).value = results.absesBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(36).value = results.AbsesSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(37).value = results.cabutanSurgical; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(38).value = results.fraktur; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(39).value = results.trauma; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(40).value = results.pembedahanKecilMulut; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(41).value = results.crownBridgeBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(42).value = results.crownBridgeSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(43).value = results.postCoreBaru; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(44).value = results.postCoreSemula; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(45).value = results.prosthodontikPenuhDentur; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(46).value = results.prosthodontikPenuhPesakit; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(47).value = results.prosthodontikSebahagianDentur; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(48).value = results.prosthodontikSebahagianPesakit; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(49).value = results.immediateDenture; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(50).value = results.pembaikanDenture; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(51).value = results.kesSelesai; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(52).value = results.xrayDiambil; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(53).value = results.pesakitDisaringOC; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(54).value = results.pesakitdirujukLesiMulut; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(55).value = results.pesakitDirujukTabiat; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(56).value = results.rokokSaringNasihat; //C17          Bawah 1 tahun Baru
        rowNew1.getCell(57).value = results.rokokIntervensi; //C17          Bawah 1 tahun Baru
        rowNew1.commit();

        //PG207
        //Bawah 1 tahun Semula
        let rowNew2 = worksheet.getRow(18);
        rowNew2.getCell(3).value = results.kedatanganTahunSemasa; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(4).value = results.sapuanFluorida; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(5).value = results.prrJenis1; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(6).value = results.muridBaruFS; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(7).value = results.muridSemulaFS; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(8).value = results.gigiBaruFS; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(9).value = results.gigiSemulaFS; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(10).value = results.tampalanAntGdBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(11).value = results.tampalanAntGdSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(12).value = results.tampalanAntGkBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(13).value = results.tampalanAntGkSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(14).value = results.tampalanPostGdBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(15).value = results.tampalanPostGdSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(16).value = results.tampalanPostGkBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(17).value = results.tampalanPostGkSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(18).value = results.tampalanPostAmgGdBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(19).value = results.tampalanPostAmgGdSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(20).value = results.tampalanPostAmgGkBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(21).value = results.tampalanPostAmgGkSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(22).value = results.inlayOnlayBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(23).value = results.inlayOnlaySemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(24).value = results.jumlahTampalanBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(25).value = results.jumlahTampalanSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(26).value = results.tampalanSementara; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(27).value = results.cabutanGd; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(28).value = results.cabutanGk; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(29).value = results.komplikasiSelepasCabutan; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(30).value = results.penskaleran; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(31).value = results.rawatanLain; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(32).value = results.rawatanEndo; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(33).value = results.rawatanOrtho; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(34).value = results.kesPerubatan; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(35).value = results.absesBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(36).value = results.AbsesSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(37).value = results.cabutanSurgical; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(38).value = results.fraktur; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(39).value = results.trauma; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(40).value = results.pembedahanKecilMulut; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(41).value = results.crownBridgeBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(42).value = results.crownBridgeSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(43).value = results.postCoreBaru; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(44).value = results.postCoreSemula; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(45).value = results.prosthodontikPenuhDentur; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(46).value = results.prosthodontikPenuhPesakit; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(47).value = results.prosthodontikSebahagianDentur; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(48).value = results.prosthodontikSebahagianPesakit; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(49).value = results.immediateDenture; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(50).value = results.pembaikanDenture; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(51).value = results.kesSelesai; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(52).value = results.xrayDiambil; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(53).value = results.pesakitDisaringOC; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(54).value = results.pesakitdirujukLesiMulut; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(55).value = results.pesakitDirujukTabiat; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(56).value = results.rokokSaringNasihat; //C18          Bawah 1 tahun Semula
        rowNew2.getCell(57).value = results.rokokIntervensi; //C18          Bawah 1 tahun Semula
        rowNew2.commit();

        //PG207
        //1 - 4 tahun baru
        let rowNew3 = worksheet.getRow(19);
        rowNew3.getCell(3).value = results.kedatanganTahunSemasa; //C19          1 - 4 tahun baru
        rowNew3.getCell(4).value = results.sapuanFluorida; //C19          1 - 4 tahun baru
        rowNew3.getCell(5).value = results.prrJenis1; //C19          1 - 4 tahun baru
        rowNew3.getCell(6).value = results.muridBaruFS; //C19          1 - 4 tahun baru
        rowNew3.getCell(7).value = results.muridSemulaFS; //C19          1 - 4 tahun baru
        rowNew3.getCell(8).value = results.gigiBaruFS; //C19          1 - 4 tahun baru
        rowNew3.getCell(9).value = results.gigiSemulaFS; //C19          1 - 4 tahun baru
        rowNew3.getCell(10).value = results.tampalanAntGdBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(11).value = results.tampalanAntGdSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(12).value = results.tampalanAntGkBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(13).value = results.tampalanAntGkSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(14).value = results.tampalanPostGdBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(15).value = results.tampalanPostGdSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(16).value = results.tampalanPostGkBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(17).value = results.tampalanPostGkSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(18).value = results.tampalanPostAmgGdBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(19).value = results.tampalanPostAmgGdSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(20).value = results.tampalanPostAmgGkBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(21).value = results.tampalanPostAmgGkSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(22).value = results.inlayOnlayBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(23).value = results.inlayOnlaySemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(24).value = results.jumlahTampalanBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(25).value = results.jumlahTampalanSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(26).value = results.tampalanSementara; //C19          1 - 4 tahun baru
        rowNew3.getCell(27).value = results.cabutanGd; //C19          1 - 4 tahun baru
        rowNew3.getCell(28).value = results.cabutanGk; //C19          1 - 4 tahun baru
        rowNew3.getCell(29).value = results.komplikasiSelepasCabutan; //C19          1 - 4 tahun baru
        rowNew3.getCell(30).value = results.penskaleran; //C19          1 - 4 tahun baru
        rowNew3.getCell(31).value = results.rawatanLain; //C19          1 - 4 tahun baru
        rowNew3.getCell(32).value = results.rawatanEndo; //C19          1 - 4 tahun baru
        rowNew3.getCell(33).value = results.rawatanOrtho; //C19          1 - 4 tahun baru
        rowNew3.getCell(34).value = results.kesPerubatan; //C19          1 - 4 tahun baru
        rowNew3.getCell(35).value = results.absesBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(36).value = results.AbsesSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(37).value = results.cabutanSurgical; //C19          1 - 4 tahun baru
        rowNew3.getCell(38).value = results.fraktur; //C19          1 - 4 tahun baru
        rowNew3.getCell(39).value = results.trauma; //C19          1 - 4 tahun baru
        rowNew3.getCell(40).value = results.pembedahanKecilMulut; //C19          1 - 4 tahun baru
        rowNew3.getCell(41).value = results.crownBridgeBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(42).value = results.crownBridgeSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(43).value = results.postCoreBaru; //C19          1 - 4 tahun baru
        rowNew3.getCell(44).value = results.postCoreSemula; //C19          1 - 4 tahun baru
        rowNew3.getCell(45).value = results.prosthodontikPenuhDentur; //C19          1 - 4 tahun baru
        rowNew3.getCell(46).value = results.prosthodontikPenuhPesakit; //C19          1 - 4 tahun baru
        rowNew3.getCell(47).value = results.prosthodontikSebahagianDentur; //C19          1 - 4 tahun baru
        rowNew3.getCell(48).value = results.prosthodontikSebahagianPesakit; //C19          1 - 4 tahun baru
        rowNew3.getCell(49).value = results.immediateDenture; //C19          1 - 4 tahun baru
        rowNew3.getCell(50).value = results.pembaikanDenture; //C19          1 - 4 tahun baru
        rowNew3.getCell(51).value = results.kesSelesai; //C19          1 - 4 tahun baru
        rowNew3.getCell(52).value = results.xrayDiambil; //C19          1 - 4 tahun baru
        rowNew3.getCell(53).value = results.pesakitDisaringOC; //C19          1 - 4 tahun baru
        rowNew3.getCell(54).value = results.pesakitdirujukLesiMulut; //C19          1 - 4 tahun baru
        rowNew3.getCell(55).value = results.pesakitDirujukTabiat; //C19          1 - 4 tahun baru
        rowNew3.getCell(56).value = results.rokokSaringNasihat; //C19          1 - 4 tahun baru
        rowNew3.getCell(57).value = results.rokokIntervensi; //C19          1 - 4 tahun baru
        rowNew3.commit();

        //PG207
        //1 - 4 tahun semula
        let rowNew4 = worksheet.getRow(20);
        rowNew4.getCell(3).value = results.kedatanganTahunSemasa; //C20          1 - 4 tahun semula
        rowNew4.getCell(4).value = results.sapuanFluorida; //C20          1 - 4 tahun semula
        rowNew4.getCell(5).value = results.prrJenis1; //C20          1 - 4 tahun semula
        rowNew4.getCell(6).value = results.muridBaruFS; //C20          1 - 4 tahun semula
        rowNew4.getCell(7).value = results.muridSemulaFS; //C20          1 - 4 tahun semula
        rowNew4.getCell(8).value = results.gigiBaruFS; //C20          1 - 4 tahun semula
        rowNew4.getCell(9).value = results.gigiSemulaFS; //C20          1 - 4 tahun semula
        rowNew4.getCell(10).value = results.tampalanAntGdBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(11).value = results.tampalanAntGdSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(12).value = results.tampalanAntGkBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(13).value = results.tampalanAntGkSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(14).value = results.tampalanPostGdBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(15).value = results.tampalanPostGdSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(16).value = results.tampalanPostGkBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(17).value = results.tampalanPostGkSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(18).value = results.tampalanPostAmgGdBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(19).value = results.tampalanPostAmgGdSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(20).value = results.tampalanPostAmgGkBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(21).value = results.tampalanPostAmgGkSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(22).value = results.inlayOnlayBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(23).value = results.inlayOnlaySemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(24).value = results.jumlahTampalanBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(25).value = results.jumlahTampalanSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(26).value = results.tampalanSementara; //C20          1 - 4 tahun semula
        rowNew4.getCell(27).value = results.cabutanGd; //C20          1 - 4 tahun semula
        rowNew4.getCell(28).value = results.cabutanGk; //C20          1 - 4 tahun semula
        rowNew4.getCell(29).value = results.komplikasiSelepasCabutan; //C20          1 - 4 tahun semula
        rowNew4.getCell(30).value = results.penskaleran; //C20          1 - 4 tahun semula
        rowNew4.getCell(31).value = results.rawatanLain; //C20          1 - 4 tahun semula
        rowNew4.getCell(32).value = results.rawatanEndo; //C20          1 - 4 tahun semula
        rowNew4.getCell(33).value = results.rawatanOrtho; //C20          1 - 4 tahun semula
        rowNew4.getCell(34).value = results.kesPerubatan; //C20          1 - 4 tahun semula
        rowNew4.getCell(35).value = results.absesBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(36).value = results.AbsesSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(37).value = results.cabutanSurgical; //C20          1 - 4 tahun semula
        rowNew4.getCell(38).value = results.fraktur; //C20          1 - 4 tahun semula
        rowNew4.getCell(39).value = results.trauma; //C20          1 - 4 tahun semula
        rowNew4.getCell(40).value = results.pembedahanKecilMulut; //C20          1 - 4 tahun semula
        rowNew4.getCell(41).value = results.crownBridgeBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(42).value = results.crownBridgeSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(43).value = results.postCoreBaru; //C20          1 - 4 tahun semula
        rowNew4.getCell(44).value = results.postCoreSemula; //C20          1 - 4 tahun semula
        rowNew4.getCell(45).value = results.prosthodontikPenuhDentur; //C20          1 - 4 tahun semula
        rowNew4.getCell(46).value = results.prosthodontikPenuhPesakit; //C20          1 - 4 tahun semula
        rowNew4.getCell(47).value = results.prosthodontikSebahagianDentur; //C20          1 - 4 tahun semula
        rowNew4.getCell(48).value = results.prosthodontikSebahagianPesakit; //C20          1 - 4 tahun semula
        rowNew4.getCell(49).value = results.immediateDenture; //C20          1 - 4 tahun semula
        rowNew4.getCell(50).value = results.pembaikanDenture; //C20          1 - 4 tahun semula
        rowNew4.getCell(51).value = results.kesSelesai; //C20          1 - 4 tahun semula
        rowNew4.getCell(52).value = results.xrayDiambil; //C20          1 - 4 tahun semula
        rowNew4.getCell(53).value = results.pesakitDisaringOC; //C20          1 - 4 tahun semula
        rowNew4.getCell(54).value = results.pesakitdirujukLesiMulut; //C20          1 - 4 tahun semula
        rowNew4.getCell(55).value = results.pesakitDirujukTabiat; //C20          1 - 4 tahun semula
        rowNew4.getCell(56).value = results.rokokSaringNasihat; //C20          1 - 4 tahun semula
        rowNew4.getCell(57).value = results.rokokIntervensi; //C20          1 - 4 tahun semula
        rowNew4.commit();

        //PG207
        //5 - 6 TAHUN baru
        let rowNew5 = worksheet.getRow(21);
        rowNew5.getCell(3).value = results.kedatanganTahunSemasa; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(4).value = results.sapuanFluorida; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(5).value = results.prrJenis1; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(6).value = results.muridBaruFS; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(7).value = results.muridSemulaFS; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(8).value = results.gigiBaruFS; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(9).value = results.gigiSemulaFS; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(10).value = results.tampalanAntGdBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(11).value = results.tampalanAntGdSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(12).value = results.tampalanAntGkBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(13).value = results.tampalanAntGkSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(14).value = results.tampalanPostGdBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(15).value = results.tampalanPostGdSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(16).value = results.tampalanPostGkBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(17).value = results.tampalanPostGkSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(18).value = results.tampalanPostAmgGdBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(19).value = results.tampalanPostAmgGdSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(20).value = results.tampalanPostAmgGkBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(21).value = results.tampalanPostAmgGkSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(22).value = results.inlayOnlayBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(23).value = results.inlayOnlaySemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(24).value = results.jumlahTampalanBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(25).value = results.jumlahTampalanSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(26).value = results.tampalanSementara; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(27).value = results.cabutanGd; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(28).value = results.cabutanGk; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(29).value = results.komplikasiSelepasCabutan; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(30).value = results.penskaleran; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(31).value = results.rawatanLain; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(32).value = results.rawatanEndo; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(33).value = results.rawatanOrtho; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(34).value = results.kesPerubatan; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(35).value = results.absesBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(36).value = results.AbsesSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(37).value = results.cabutanSurgical; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(38).value = results.fraktur; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(39).value = results.trauma; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(40).value = results.pembedahanKecilMulut; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(41).value = results.crownBridgeBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(42).value = results.crownBridgeSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(43).value = results.postCoreBaru; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(44).value = results.postCoreSemula; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(45).value = results.prosthodontikPenuhDentur; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(46).value = results.prosthodontikPenuhPesakit; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(47).value = results.prosthodontikSebahagianDentur; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(48).value = results.prosthodontikSebahagianPesakit; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(49).value = results.immediateDenture; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(50).value = results.pembaikanDenture; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(51).value = results.kesSelesai; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(52).value = results.xrayDiambil; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(53).value = results.pesakitDisaringOC; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(54).value = results.pesakitdirujukLesiMulut; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(55).value = results.pesakitDirujukTabiat; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(56).value = results.rokokSaringNasihat; //C21          5 - 6 TAHUN baru
        rowNew5.getCell(57).value = results.rokokIntervensi; //C21          5 - 6 TAHUN baru
        rowNew5.commit();

        //PG207
        //5 - 6 TAHUN semula
        let rowNew6 = worksheet.getRow(22);
        rowNew6.getCell(3).value = results.kedatanganTahunSemasa; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(4).value = results.sapuanFluorida; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(5).value = results.prrJenis1; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(6).value = results.muridBaruFS; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(7).value = results.muridSemulaFS; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(8).value = results.gigiBaruFS; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(9).value = results.gigiSemulaFS; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(10).value = results.tampalanAntGdBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(11).value = results.tampalanAntGdSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(12).value = results.tampalanAntGkBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(13).value = results.tampalanAntGkSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(14).value = results.tampalanPostGdBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(15).value = results.tampalanPostGdSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(16).value = results.tampalanPostGkBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(17).value = results.tampalanPostGkSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(18).value = results.tampalanPostAmgGdBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(19).value = results.tampalanPostAmgGdSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(20).value = results.tampalanPostAmgGkBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(21).value = results.tampalanPostAmgGkSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(22).value = results.inlayOnlayBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(23).value = results.inlayOnlaySemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(24).value = results.jumlahTampalanBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(25).value = results.jumlahTampalanSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(26).value = results.tampalanSementara; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(27).value = results.cabutanGd; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(28).value = results.cabutanGk; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(29).value = results.komplikasiSelepasCabutan; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(30).value = results.penskaleran; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(31).value = results.rawatanLain; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(32).value = results.rawatanEndo; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(33).value = results.rawatanOrtho; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(34).value = results.kesPerubatan; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(35).value = results.absesBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(36).value = results.AbsesSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(37).value = results.cabutanSurgical; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(38).value = results.fraktur; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(39).value = results.trauma; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(40).value = results.pembedahanKecilMulut; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(41).value = results.crownBridgeBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(42).value = results.crownBridgeSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(43).value = results.postCoreBaru; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(44).value = results.postCoreSemula; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(45).value = results.prosthodontikPenuhDentur; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(46).value = results.prosthodontikPenuhPesakit; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(47).value = results.prosthodontikSebahagianDentur; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(48).value = results.prosthodontikSebahagianPesakit; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(49).value = results.immediateDenture; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(50).value = results.pembaikanDenture; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(51).value = results.kesSelesai; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(52).value = results.xrayDiambil; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(53).value = results.pesakitDisaringOC; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(54).value = results.pesakitdirujukLesiMulut; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(55).value = results.pesakitDirujukTabiat; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(56).value = results.rokokSaringNasihat; //C22          5 - 6 TAHUN semula
        rowNew6.getCell(57).value = results.rokokIntervensi; //C22          5 - 6 TAHUN semula
        rowNew6.commit();

        //PG207
        //7 - 9 TAHUN baru
        let rowNew7 = worksheet.getRow(23);
        rowNew7.getCell(3).value = results.kedatanganTahunSemasa; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(4).value = results.sapuanFluorida; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(5).value = results.prrJenis1; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(6).value = results.muridBaruFS; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(7).value = results.muridSemulaFS; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(8).value = results.gigiBaruFS; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(9).value = results.gigiSemulaFS; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(10).value = results.tampalanAntGdBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(11).value = results.tampalanAntGdSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(12).value = results.tampalanAntGkBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(13).value = results.tampalanAntGkSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(14).value = results.tampalanPostGdBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(15).value = results.tampalanPostGdSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(16).value = results.tampalanPostGkBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(17).value = results.tampalanPostGkSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(18).value = results.tampalanPostAmgGdBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(19).value = results.tampalanPostAmgGdSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(20).value = results.tampalanPostAmgGkBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(21).value = results.tampalanPostAmgGkSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(22).value = results.inlayOnlayBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(23).value = results.inlayOnlaySemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(24).value = results.jumlahTampalanBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(25).value = results.jumlahTampalanSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(26).value = results.tampalanSementara; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(27).value = results.cabutanGd; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(28).value = results.cabutanGk; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(29).value = results.komplikasiSelepasCabutan; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(30).value = results.penskaleran; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(31).value = results.rawatanLain; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(32).value = results.rawatanEndo; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(33).value = results.rawatanOrtho; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(34).value = results.kesPerubatan; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(35).value = results.absesBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(36).value = results.AbsesSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(37).value = results.cabutanSurgical; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(38).value = results.fraktur; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(39).value = results.trauma; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(40).value = results.pembedahanKecilMulut; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(41).value = results.crownBridgeBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(42).value = results.crownBridgeSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(43).value = results.postCoreBaru; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(44).value = results.postCoreSemula; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(45).value = results.prosthodontikPenuhDentur; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(46).value = results.prosthodontikPenuhPesakit; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(47).value = results.prosthodontikSebahagianDentur; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(48).value = results.prosthodontikSebahagianPesakit; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(49).value = results.immediateDenture; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(50).value = results.pembaikanDenture; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(51).value = results.kesSelesai; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(52).value = results.xrayDiambil; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(53).value = results.pesakitDisaringOC; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(54).value = results.pesakitdirujukLesiMulut; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(55).value = results.pesakitDirujukTabiat; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(56).value = results.rokokSaringNasihat; //C23          7 - 9 TAHUN baru
        rowNew7.getCell(57).value = results.rokokIntervensi; //C23          7 - 9 TAHUN baru
        rowNew7.commit();

        //PG207
        //7 - 9 TAHUN semula
        let rowNew8 = worksheet.getRow(24);
        rowNew8.getCell(3).value = results.kedatanganTahunSemasa; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(4).value = results.sapuanFluorida; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(5).value = results.prrJenis1; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(6).value = results.muridBaruFS; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(7).value = results.muridSemulaFS; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(8).value = results.gigiBaruFS; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(9).value = results.gigiSemulaFS; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(10).value = results.tampalanAntGdBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(11).value = results.tampalanAntGdSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(12).value = results.tampalanAntGkBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(13).value = results.tampalanAntGkSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(14).value = results.tampalanPostGdBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(15).value = results.tampalanPostGdSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(16).value = results.tampalanPostGkBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(17).value = results.tampalanPostGkSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(18).value = results.tampalanPostAmgGdBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(19).value = results.tampalanPostAmgGdSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(20).value = results.tampalanPostAmgGkBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(21).value = results.tampalanPostAmgGkSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(22).value = results.inlayOnlayBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(23).value = results.inlayOnlaySemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(24).value = results.jumlahTampalanBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(25).value = results.jumlahTampalanSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(26).value = results.tampalanSementara; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(27).value = results.cabutanGd; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(28).value = results.cabutanGk; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(29).value = results.komplikasiSelepasCabutan; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(30).value = results.penskaleran; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(31).value = results.rawatanLain; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(32).value = results.rawatanEndo; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(33).value = results.rawatanOrtho; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(34).value = results.kesPerubatan; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(35).value = results.absesBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(36).value = results.AbsesSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(37).value = results.cabutanSurgical; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(38).value = results.fraktur; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(39).value = results.trauma; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(40).value = results.pembedahanKecilMulut; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(41).value = results.crownBridgeBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(42).value = results.crownBridgeSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(43).value = results.postCoreBaru; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(44).value = results.postCoreSemula; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(45).value = results.prosthodontikPenuhDentur; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(46).value = results.prosthodontikPenuhPesakit; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(47).value = results.prosthodontikSebahagianDentur; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(48).value = results.prosthodontikSebahagianPesakit; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(49).value = results.immediateDenture; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(50).value = results.pembaikanDenture; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(51).value = results.kesSelesai; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(52).value = results.xrayDiambil; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(53).value = results.pesakitDisaringOC; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(54).value = results.pesakitdirujukLesiMulut; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(55).value = results.pesakitDirujukTabiat; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(56).value = results.rokokSaringNasihat; //C24          7 - 9 TAHUN semula
        rowNew8.getCell(57).value = results.rokokIntervensi; //C24          7 - 9 TAHUN semula
        rowNew8.commit();

        //PG207
        //10- 12 TAHUN baru
        let rowNew9 = worksheet.getRow(25);
        rowNew9.getCell(3).value = results.kedatanganTahunSemasa; //C25          10- 12 TAHUN baru
        rowNew9.getCell(4).value = results.sapuanFluorida; //C25          10- 12 TAHUN baru
        rowNew9.getCell(5).value = results.prrJenis1; //C25          10- 12 TAHUN baru
        rowNew9.getCell(6).value = results.muridBaruFS; //C25          10- 12 TAHUN baru
        rowNew9.getCell(7).value = results.muridSemulaFS; //C25          10- 12 TAHUN baru
        rowNew9.getCell(8).value = results.gigiBaruFS; //C25          10- 12 TAHUN baru
        rowNew9.getCell(9).value = results.gigiSemulaFS; //C25          10- 12 TAHUN baru
        rowNew9.getCell(10).value = results.tampalanAntGdBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(11).value = results.tampalanAntGdSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(12).value = results.tampalanAntGkBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(13).value = results.tampalanAntGkSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(14).value = results.tampalanPostGdBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(15).value = results.tampalanPostGdSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(16).value = results.tampalanPostGkBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(17).value = results.tampalanPostGkSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(18).value = results.tampalanPostAmgGdBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(19).value = results.tampalanPostAmgGdSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(20).value = results.tampalanPostAmgGkBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(21).value = results.tampalanPostAmgGkSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(22).value = results.inlayOnlayBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(23).value = results.inlayOnlaySemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(24).value = results.jumlahTampalanBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(25).value = results.jumlahTampalanSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(26).value = results.tampalanSementara; //C25          10- 12 TAHUN baru
        rowNew9.getCell(27).value = results.cabutanGd; //C25          10- 12 TAHUN baru
        rowNew9.getCell(28).value = results.cabutanGk; //C25          10- 12 TAHUN baru
        rowNew9.getCell(29).value = results.komplikasiSelepasCabutan; //C25          10- 12 TAHUN baru
        rowNew9.getCell(30).value = results.penskaleran; //C25          10- 12 TAHUN baru
        rowNew9.getCell(31).value = results.rawatanLain; //C25          10- 12 TAHUN baru
        rowNew9.getCell(32).value = results.rawatanEndo; //C25          10- 12 TAHUN baru
        rowNew9.getCell(33).value = results.rawatanOrtho; //C25          10- 12 TAHUN baru
        rowNew9.getCell(34).value = results.kesPerubatan; //C25          10- 12 TAHUN baru
        rowNew9.getCell(35).value = results.absesBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(36).value = results.AbsesSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(37).value = results.cabutanSurgical; //C25          10- 12 TAHUN baru
        rowNew9.getCell(38).value = results.fraktur; //C25          10- 12 TAHUN baru
        rowNew9.getCell(39).value = results.trauma; //C25          10- 12 TAHUN baru
        rowNew9.getCell(40).value = results.pembedahanKecilMulut; //C25          10- 12 TAHUN baru
        rowNew9.getCell(41).value = results.crownBridgeBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(42).value = results.crownBridgeSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(43).value = results.postCoreBaru; //C25          10- 12 TAHUN baru
        rowNew9.getCell(44).value = results.postCoreSemula; //C25          10- 12 TAHUN baru
        rowNew9.getCell(45).value = results.prosthodontikPenuhDentur; //C25          10- 12 TAHUN baru
        rowNew9.getCell(46).value = results.prosthodontikPenuhPesakit; //C25          10- 12 TAHUN baru
        rowNew9.getCell(47).value = results.prosthodontikSebahagianDentur; //C25          10- 12 TAHUN baru
        rowNew9.getCell(48).value = results.prosthodontikSebahagianPesakit; //C25          10- 12 TAHUN baru
        rowNew9.getCell(49).value = results.immediateDenture; //C25          10- 12 TAHUN baru
        rowNew9.getCell(50).value = results.pembaikanDenture; //C25          10- 12 TAHUN baru
        rowNew9.getCell(51).value = results.kesSelesai; //C25          10- 12 TAHUN baru
        rowNew9.getCell(52).value = results.xrayDiambil; //C25          10- 12 TAHUN baru
        rowNew9.getCell(53).value = results.pesakitDisaringOC; //C25          10- 12 TAHUN baru
        rowNew9.getCell(54).value = results.pesakitdirujukLesiMulut; //C25          10- 12 TAHUN baru
        rowNew9.getCell(55).value = results.pesakitDirujukTabiat; //C25          10- 12 TAHUN baru
        rowNew9.getCell(56).value = results.rokokSaringNasihat; //C25          10- 12 TAHUN baru
        rowNew9.getCell(57).value = results.rokokIntervensi; //C25          10- 12 TAHUN baru
        rowNew9.commit();

        //PG207
        //10- 12 TAHUN semula
        let rowNew10 = worksheet.getRow(26);
        rowNew10.getCell(3).value = results.kedatanganTahunSemasa; //C26          10- 12 TAHUN semula
        rowNew10.getCell(4).value = results.sapuanFluorida; //C26          10- 12 TAHUN semula
        rowNew10.getCell(5).value = results.prrJenis1; //C26          10- 12 TAHUN semula
        rowNew10.getCell(6).value = results.muridBaruFS; //C26          10- 12 TAHUN semula
        rowNew10.getCell(7).value = results.muridSemulaFS; //C26          10- 12 TAHUN semula
        rowNew10.getCell(8).value = results.gigiBaruFS; //C26          10- 12 TAHUN semula
        rowNew10.getCell(9).value = results.gigiSemulaFS; //C26          10- 12 TAHUN semula
        rowNew10.getCell(10).value = results.tampalanAntGdBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(11).value = results.tampalanAntGdSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(12).value = results.tampalanAntGkBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(13).value = results.tampalanAntGkSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(14).value = results.tampalanPostGdBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(15).value = results.tampalanPostGdSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(16).value = results.tampalanPostGkBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(17).value = results.tampalanPostGkSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(18).value = results.tampalanPostAmgGdBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(19).value = results.tampalanPostAmgGdSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(20).value = results.tampalanPostAmgGkBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(21).value = results.tampalanPostAmgGkSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(22).value = results.inlayOnlayBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(23).value = results.inlayOnlaySemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(24).value = results.jumlahTampalanBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(25).value = results.jumlahTampalanSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(26).value = results.tampalanSementara; //C26          10- 12 TAHUN semula
        rowNew10.getCell(27).value = results.cabutanGd; //C26          10- 12 TAHUN semula
        rowNew10.getCell(28).value = results.cabutanGk; //C26          10- 12 TAHUN semula
        rowNew10.getCell(29).value = results.komplikasiSelepasCabutan; //C26          10- 12 TAHUN semula
        rowNew10.getCell(30).value = results.penskaleran; //C26          10- 12 TAHUN semula
        rowNew10.getCell(31).value = results.rawatanLain; //C26          10- 12 TAHUN semula
        rowNew10.getCell(32).value = results.rawatanEndo; //C26          10- 12 TAHUN semula
        rowNew10.getCell(33).value = results.rawatanOrtho; //C26          10- 12 TAHUN semula
        rowNew10.getCell(34).value = results.kesPerubatan; //C26          10- 12 TAHUN semula
        rowNew10.getCell(35).value = results.absesBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(36).value = results.AbsesSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(37).value = results.cabutanSurgical; //C26          10- 12 TAHUN semula
        rowNew10.getCell(38).value = results.fraktur; //C26          10- 12 TAHUN semula
        rowNew10.getCell(39).value = results.trauma; //C26          10- 12 TAHUN semula
        rowNew10.getCell(40).value = results.pembedahanKecilMulut; //C26          10- 12 TAHUN semula
        rowNew10.getCell(41).value = results.crownBridgeBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(42).value = results.crownBridgeSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(43).value = results.postCoreBaru; //C26          10- 12 TAHUN semula
        rowNew10.getCell(44).value = results.postCoreSemula; //C26          10- 12 TAHUN semula
        rowNew10.getCell(45).value = results.prosthodontikPenuhDentur; //C26          10- 12 TAHUN semula
        rowNew10.getCell(46).value = results.prosthodontikPenuhPesakit; //C26          10- 12 TAHUN semula
        rowNew10.getCell(47).value = results.prosthodontikSebahagianDentur; //C26          10- 12 TAHUN semula
        rowNew10.getCell(48).value = results.prosthodontikSebahagianPesakit; //C26          10- 12 TAHUN semula
        rowNew10.getCell(49).value = results.immediateDenture; //C26          10- 12 TAHUN semula
        rowNew10.getCell(50).value = results.pembaikanDenture; //C26          10- 12 TAHUN semula
        rowNew10.getCell(51).value = results.kesSelesai; //C26          10- 12 TAHUN semula
        rowNew10.getCell(52).value = results.xrayDiambil; //C26          10- 12 TAHUN semula
        rowNew10.getCell(53).value = results.pesakitDisaringOC; //C26          10- 12 TAHUN semula
        rowNew10.getCell(54).value = results.pesakitdirujukLesiMulut; //C26          10- 12 TAHUN semula
        rowNew10.getCell(55).value = results.pesakitDirujukTabiat; //C26          10- 12 TAHUN semula
        rowNew10.getCell(56).value = results.rokokSaringNasihat; //C26          10- 12 TAHUN semula
        rowNew10.getCell(57).value = results.rokokIntervensi; //C26          10- 12 TAHUN semula
        rowNew10.commit();

        //PG207
        //13- 14 TAHUN baru
        let rowNew11 = worksheet.getRow(27);
        rowNew11.getCell(3).value = results.kedatanganTahunSemasa; //C27          13- 14 TAHUN baru
        rowNew11.getCell(4).value = results.sapuanFluorida; //C27          13- 14 TAHUN baru
        rowNew11.getCell(5).value = results.prrJenis1; //C27          13- 14 TAHUN baru
        rowNew11.getCell(6).value = results.muridBaruFS; //C27          13- 14 TAHUN baru
        rowNew11.getCell(7).value = results.muridSemulaFS; //C27          13- 14 TAHUN baru
        rowNew11.getCell(8).value = results.gigiBaruFS; //C27          13- 14 TAHUN baru
        rowNew11.getCell(9).value = results.gigiSemulaFS; //C27          13- 14 TAHUN baru
        rowNew11.getCell(10).value = results.tampalanAntGdBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(11).value = results.tampalanAntGdSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(12).value = results.tampalanAntGkBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(13).value = results.tampalanAntGkSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(14).value = results.tampalanPostGdBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(15).value = results.tampalanPostGdSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(16).value = results.tampalanPostGkBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(17).value = results.tampalanPostGkSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(18).value = results.tampalanPostAmgGdBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(19).value = results.tampalanPostAmgGdSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(20).value = results.tampalanPostAmgGkBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(21).value = results.tampalanPostAmgGkSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(22).value = results.inlayOnlayBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(23).value = results.inlayOnlaySemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(24).value = results.jumlahTampalanBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(25).value = results.jumlahTampalanSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(26).value = results.tampalanSementara; //C27          13- 14 TAHUN baru
        rowNew11.getCell(27).value = results.cabutanGd; //C27          13- 14 TAHUN baru
        rowNew11.getCell(28).value = results.cabutanGk; //C27          13- 14 TAHUN baru
        rowNew11.getCell(29).value = results.komplikasiSelepasCabutan; //C27          13- 14 TAHUN baru
        rowNew11.getCell(30).value = results.penskaleran; //C27          13- 14 TAHUN baru
        rowNew11.getCell(31).value = results.rawatanLain; //C27          13- 14 TAHUN baru
        rowNew11.getCell(32).value = results.rawatanEndo; //C27          13- 14 TAHUN baru
        rowNew11.getCell(33).value = results.rawatanOrtho; //C27          13- 14 TAHUN baru
        rowNew11.getCell(34).value = results.kesPerubatan; //C27          13- 14 TAHUN baru
        rowNew11.getCell(35).value = results.absesBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(36).value = results.AbsesSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(37).value = results.cabutanSurgical; //C27          13- 14 TAHUN baru
        rowNew11.getCell(38).value = results.fraktur; //C27          13- 14 TAHUN baru
        rowNew11.getCell(39).value = results.trauma; //C27          13- 14 TAHUN baru
        rowNew11.getCell(40).value = results.pembedahanKecilMulut; //C27          13- 14 TAHUN baru
        rowNew11.getCell(41).value = results.crownBridgeBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(42).value = results.crownBridgeSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(43).value = results.postCoreBaru; //C27          13- 14 TAHUN baru
        rowNew11.getCell(44).value = results.postCoreSemula; //C27          13- 14 TAHUN baru
        rowNew11.getCell(45).value = results.prosthodontikPenuhDentur; //C27          13- 14 TAHUN baru
        rowNew11.getCell(46).value = results.prosthodontikPenuhPesakit; //C27          13- 14 TAHUN baru
        rowNew11.getCell(47).value = results.prosthodontikSebahagianDentur; //C27          13- 14 TAHUN baru
        rowNew11.getCell(48).value = results.prosthodontikSebahagianPesakit; //C27          13- 14 TAHUN baru
        rowNew11.getCell(49).value = results.immediateDenture; //C27          13- 14 TAHUN baru
        rowNew11.getCell(50).value = results.pembaikanDenture; //C27          13- 14 TAHUN baru
        rowNew11.getCell(51).value = results.kesSelesai; //C27          13- 14 TAHUN baru
        rowNew11.getCell(52).value = results.xrayDiambil; //C27          13- 14 TAHUN baru
        rowNew11.getCell(53).value = results.pesakitDisaringOC; //C27          13- 14 TAHUN baru
        rowNew11.getCell(54).value = results.pesakitdirujukLesiMulut; //C27          13- 14 TAHUN baru
        rowNew11.getCell(55).value = results.pesakitDirujukTabiat; //C27          13- 14 TAHUN baru
        rowNew11.getCell(56).value = results.rokokSaringNasihat; //C27          13- 14 TAHUN baru
        rowNew11.getCell(57).value = results.rokokIntervensi; //C27          13- 14 TAHUN baru
        rowNew11.commit();

        //PG207
        //13- 14 TAHUN semula
        let rowNew12 = worksheet.getRow(28);
        rowNew12.getCell(3).value = results.kedatanganTahunSemasa; //C28          13- 14 TAHUN semula
        rowNew12.getCell(4).value = results.sapuanFluorida; //C28          13- 14 TAHUN semula
        rowNew12.getCell(5).value = results.prrJenis1; //C28          13- 14 TAHUN semula
        rowNew12.getCell(6).value = results.muridBaruFS; //C28          13- 14 TAHUN semula
        rowNew12.getCell(7).value = results.muridSemulaFS; //C28          13- 14 TAHUN semula
        rowNew12.getCell(8).value = results.gigiBaruFS; //C28          13- 14 TAHUN semula
        rowNew12.getCell(9).value = results.gigiSemulaFS; //C28          13- 14 TAHUN semula
        rowNew12.getCell(10).value = results.tampalanAntGdBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(11).value = results.tampalanAntGdSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(12).value = results.tampalanAntGkBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(13).value = results.tampalanAntGkSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(14).value = results.tampalanPostGdBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(15).value = results.tampalanPostGdSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(16).value = results.tampalanPostGkBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(17).value = results.tampalanPostGkSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(18).value = results.tampalanPostAmgGdBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(19).value = results.tampalanPostAmgGdSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(20).value = results.tampalanPostAmgGkBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(21).value = results.tampalanPostAmgGkSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(22).value = results.inlayOnlayBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(23).value = results.inlayOnlaySemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(24).value = results.jumlahTampalanBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(25).value = results.jumlahTampalanSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(26).value = results.tampalanSementara; //C28          13- 14 TAHUN semula
        rowNew12.getCell(27).value = results.cabutanGd; //C28          13- 14 TAHUN semula
        rowNew12.getCell(28).value = results.cabutanGk; //C28          13- 14 TAHUN semula
        rowNew12.getCell(29).value = results.komplikasiSelepasCabutan; //C28          13- 14 TAHUN semula
        rowNew12.getCell(30).value = results.penskaleran; //C28          13- 14 TAHUN semula
        rowNew12.getCell(31).value = results.rawatanLain; //C28          13- 14 TAHUN semula
        rowNew12.getCell(32).value = results.rawatanEndo; //C28          13- 14 TAHUN semula
        rowNew12.getCell(33).value = results.rawatanOrtho; //C28          13- 14 TAHUN semula
        rowNew12.getCell(34).value = results.kesPerubatan; //C28          13- 14 TAHUN semula
        rowNew12.getCell(35).value = results.absesBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(36).value = results.AbsesSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(37).value = results.cabutanSurgical; //C28          13- 14 TAHUN semula
        rowNew12.getCell(38).value = results.fraktur; //C28          13- 14 TAHUN semula
        rowNew12.getCell(39).value = results.trauma; //C28          13- 14 TAHUN semula
        rowNew12.getCell(40).value = results.pembedahanKecilMulut; //C28          13- 14 TAHUN semula
        rowNew12.getCell(41).value = results.crownBridgeBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(42).value = results.crownBridgeSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(43).value = results.postCoreBaru; //C28          13- 14 TAHUN semula
        rowNew12.getCell(44).value = results.postCoreSemula; //C28          13- 14 TAHUN semula
        rowNew12.getCell(45).value = results.prosthodontikPenuhDentur; //C28          13- 14 TAHUN semula
        rowNew12.getCell(46).value = results.prosthodontikPenuhPesakit; //C28          13- 14 TAHUN semula
        rowNew12.getCell(47).value = results.prosthodontikSebahagianDentur; //C28          13- 14 TAHUN semula
        rowNew12.getCell(48).value = results.prosthodontikSebahagianPesakit; //C28          13- 14 TAHUN semula
        rowNew12.getCell(49).value = results.immediateDenture; //C28          13- 14 TAHUN semula
        rowNew12.getCell(50).value = results.pembaikanDenture; //C28          13- 14 TAHUN semula
        rowNew12.getCell(51).value = results.kesSelesai; //C28          13- 14 TAHUN semula
        rowNew12.getCell(52).value = results.xrayDiambil; //C28          13- 14 TAHUN semula
        rowNew12.getCell(53).value = results.pesakitDisaringOC; //C28          13- 14 TAHUN semula
        rowNew12.getCell(54).value = results.pesakitdirujukLesiMulut; //C28          13- 14 TAHUN semula
        rowNew12.getCell(55).value = results.pesakitDirujukTabiat; //C28          13- 14 TAHUN semula
        rowNew12.getCell(56).value = results.rokokSaringNasihat; //C28          13- 14 TAHUN semula
        rowNew12.getCell(57).value = results.rokokIntervensi; //C28          13- 14 TAHUN semula
        rowNew12.commit();

        //PG207
        //15- 17 TAHUN baru
        let rowNew13 = worksheet.getRow(29);
        rowNew13.getCell(3).value = results.kedatanganTahunSemasa; //C29          15- 17 TAHUN baru
        rowNew13.getCell(4).value = results.sapuanFluorida; //C29          15- 17 TAHUN baru
        rowNew13.getCell(5).value = results.prrJenis1; //C29          15- 17 TAHUN baru
        rowNew13.getCell(6).value = results.muridBaruFS; //C29          15- 17 TAHUN baru
        rowNew13.getCell(7).value = results.muridSemulaFS; //C29          15- 17 TAHUN baru
        rowNew13.getCell(8).value = results.gigiBaruFS; //C29          15- 17 TAHUN baru
        rowNew13.getCell(9).value = results.gigiSemulaFS; //C29          15- 17 TAHUN baru
        rowNew13.getCell(10).value = results.tampalanAntGdBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(11).value = results.tampalanAntGdSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(12).value = results.tampalanAntGkBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(13).value = results.tampalanAntGkSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(14).value = results.tampalanPostGdBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(15).value = results.tampalanPostGdSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(16).value = results.tampalanPostGkBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(17).value = results.tampalanPostGkSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(18).value = results.tampalanPostAmgGdBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(19).value = results.tampalanPostAmgGdSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(20).value = results.tampalanPostAmgGkBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(21).value = results.tampalanPostAmgGkSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(22).value = results.inlayOnlayBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(23).value = results.inlayOnlaySemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(24).value = results.jumlahTampalanBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(25).value = results.jumlahTampalanSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(26).value = results.tampalanSementara; //C29          15- 17 TAHUN baru
        rowNew13.getCell(27).value = results.cabutanGd; //C29          15- 17 TAHUN baru
        rowNew13.getCell(28).value = results.cabutanGk; //C29          15- 17 TAHUN baru
        rowNew13.getCell(29).value = results.komplikasiSelepasCabutan; //C29          15- 17 TAHUN baru
        rowNew13.getCell(30).value = results.penskaleran; //C29          15- 17 TAHUN baru
        rowNew13.getCell(31).value = results.rawatanLain; //C29          15- 17 TAHUN baru
        rowNew13.getCell(32).value = results.rawatanEndo; //C29          15- 17 TAHUN baru
        rowNew13.getCell(33).value = results.rawatanOrtho; //C29          15- 17 TAHUN baru
        rowNew13.getCell(34).value = results.kesPerubatan; //C29          15- 17 TAHUN baru
        rowNew13.getCell(35).value = results.absesBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(36).value = results.AbsesSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(37).value = results.cabutanSurgical; //C29          15- 17 TAHUN baru
        rowNew13.getCell(38).value = results.fraktur; //C29          15- 17 TAHUN baru
        rowNew13.getCell(39).value = results.trauma; //C29          15- 17 TAHUN baru
        rowNew13.getCell(40).value = results.pembedahanKecilMulut; //C29          15- 17 TAHUN baru
        rowNew13.getCell(41).value = results.crownBridgeBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(42).value = results.crownBridgeSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(43).value = results.postCoreBaru; //C29          15- 17 TAHUN baru
        rowNew13.getCell(44).value = results.postCoreSemula; //C29          15- 17 TAHUN baru
        rowNew13.getCell(45).value = results.prosthodontikPenuhDentur; //C29          15- 17 TAHUN baru
        rowNew13.getCell(46).value = results.prosthodontikPenuhPesakit; //C29          15- 17 TAHUN baru
        rowNew13.getCell(47).value = results.prosthodontikSebahagianDentur; //C29          15- 17 TAHUN baru
        rowNew13.getCell(48).value = results.prosthodontikSebahagianPesakit; //C29          15- 17 TAHUN baru
        rowNew13.getCell(49).value = results.immediateDenture; //C29          15- 17 TAHUN baru
        rowNew13.getCell(50).value = results.pembaikanDenture; //C29          15- 17 TAHUN baru
        rowNew13.getCell(51).value = results.kesSelesai; //C29          15- 17 TAHUN baru
        rowNew13.getCell(52).value = results.xrayDiambil; //C29          15- 17 TAHUN baru
        rowNew13.getCell(53).value = results.pesakitDisaringOC; //C29          15- 17 TAHUN baru
        rowNew13.getCell(54).value = results.pesakitdirujukLesiMulut; //C29          15- 17 TAHUN baru
        rowNew13.getCell(55).value = results.pesakitDirujukTabiat; //C29          15- 17 TAHUN baru
        rowNew13.getCell(56).value = results.rokokSaringNasihat; //C29          15- 17 TAHUN baru
        rowNew13.getCell(57).value = results.rokokIntervensi; //C29          15- 17 TAHUN baru
        rowNew13.commit();

        //PG207
        //15- 17 TAHUN ulangan
        let rowNew14 = worksheet.getRow(30);
        rowNew14.getCell(3).value = results.kedatanganTahunSemasa; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(4).value = results.sapuanFluorida; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(5).value = results.prrJenis1; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(6).value = results.muridBaruFS; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(7).value = results.muridSemulaFS; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(8).value = results.gigiBaruFS; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(9).value = results.gigiSemulaFS; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(10).value = results.tampalanAntGdBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(11).value = results.tampalanAntGdSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(12).value = results.tampalanAntGkBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(13).value = results.tampalanAntGkSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(14).value = results.tampalanPostGdBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(15).value = results.tampalanPostGdSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(16).value = results.tampalanPostGkBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(17).value = results.tampalanPostGkSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(18).value = results.tampalanPostAmgGdBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(19).value = results.tampalanPostAmgGdSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(20).value = results.tampalanPostAmgGkBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(21).value = results.tampalanPostAmgGkSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(22).value = results.inlayOnlayBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(23).value = results.inlayOnlaySemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(24).value = results.jumlahTampalanBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(25).value = results.jumlahTampalanSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(26).value = results.tampalanSementara; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(27).value = results.cabutanGd; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(28).value = results.cabutanGk; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(29).value = results.komplikasiSelepasCabutan; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(30).value = results.penskaleran; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(31).value = results.rawatanLain; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(32).value = results.rawatanEndo; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(33).value = results.rawatanOrtho; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(34).value = results.kesPerubatan; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(35).value = results.absesBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(36).value = results.AbsesSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(37).value = results.cabutanSurgical; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(38).value = results.fraktur; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(39).value = results.trauma; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(40).value = results.pembedahanKecilMulut; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(41).value = results.crownBridgeBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(42).value = results.crownBridgeSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(43).value = results.postCoreBaru; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(44).value = results.postCoreSemula; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(45).value = results.prosthodontikPenuhDentur; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(46).value = results.prosthodontikPenuhPesakit; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(47).value = results.prosthodontikSebahagianDentur; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(48).value = results.prosthodontikSebahagianPesakit; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(49).value = results.immediateDenture; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(50).value = results.pembaikanDenture; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(51).value = results.kesSelesai; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(52).value = results.xrayDiambil; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(53).value = results.pesakitDisaringOC; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(54).value = results.pesakitdirujukLesiMulut; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(55).value = results.pesakitDirujukTabiat; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(56).value = results.rokokSaringNasihat; //C30          15- 17 TAHUN ulangan
        rowNew14.getCell(57).value = results.rokokIntervensi; //C30          15- 17 TAHUN ulangan
        rowNew14.commit();

        //PG207
        //18- 19 TAHUN baru
        let rowNew15 = worksheet.getRow(31);
        rowNew15.getCell(3).value = results.kedatanganTahunSemasa; //C31          18- 19 TAHUN baru
        rowNew15.getCell(4).value = results.sapuanFluorida; //C31          18- 19 TAHUN baru
        rowNew15.getCell(5).value = results.prrJenis1; //C31          18- 19 TAHUN baru
        rowNew15.getCell(6).value = results.muridBaruFS; //C31          18- 19 TAHUN baru
        rowNew15.getCell(7).value = results.muridSemulaFS; //C31          18- 19 TAHUN baru
        rowNew15.getCell(8).value = results.gigiBaruFS; //C31          18- 19 TAHUN baru
        rowNew15.getCell(9).value = results.gigiSemulaFS; //C31          18- 19 TAHUN baru
        rowNew15.getCell(10).value = results.tampalanAntGdBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(11).value = results.tampalanAntGdSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(12).value = results.tampalanAntGkBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(13).value = results.tampalanAntGkSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(14).value = results.tampalanPostGdBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(15).value = results.tampalanPostGdSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(16).value = results.tampalanPostGkBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(17).value = results.tampalanPostGkSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(18).value = results.tampalanPostAmgGdBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(19).value = results.tampalanPostAmgGdSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(20).value = results.tampalanPostAmgGkBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(21).value = results.tampalanPostAmgGkSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(22).value = results.inlayOnlayBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(23).value = results.inlayOnlaySemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(24).value = results.jumlahTampalanBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(25).value = results.jumlahTampalanSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(26).value = results.tampalanSementara; //C31          18- 19 TAHUN baru
        rowNew15.getCell(27).value = results.cabutanGd; //C31          18- 19 TAHUN baru
        rowNew15.getCell(28).value = results.cabutanGk; //C31          18- 19 TAHUN baru
        rowNew15.getCell(29).value = results.komplikasiSelepasCabutan; //C31          18- 19 TAHUN baru
        rowNew15.getCell(30).value = results.penskaleran; //C31          18- 19 TAHUN baru
        rowNew15.getCell(31).value = results.rawatanLain; //C31          18- 19 TAHUN baru
        rowNew15.getCell(32).value = results.rawatanEndo; //C31          18- 19 TAHUN baru
        rowNew15.getCell(33).value = results.rawatanOrtho; //C31          18- 19 TAHUN baru
        rowNew15.getCell(34).value = results.kesPerubatan; //C31          18- 19 TAHUN baru
        rowNew15.getCell(35).value = results.absesBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(36).value = results.AbsesSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(37).value = results.cabutanSurgical; //C31          18- 19 TAHUN baru
        rowNew15.getCell(38).value = results.fraktur; //C31          18- 19 TAHUN baru
        rowNew15.getCell(39).value = results.trauma; //C31          18- 19 TAHUN baru
        rowNew15.getCell(40).value = results.pembedahanKecilMulut; //C31          18- 19 TAHUN baru
        rowNew15.getCell(41).value = results.crownBridgeBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(42).value = results.crownBridgeSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(43).value = results.postCoreBaru; //C31          18- 19 TAHUN baru
        rowNew15.getCell(44).value = results.postCoreSemula; //C31          18- 19 TAHUN baru
        rowNew15.getCell(45).value = results.prosthodontikPenuhDentur; //C31          18- 19 TAHUN baru
        rowNew15.getCell(46).value = results.prosthodontikPenuhPesakit; //C31          18- 19 TAHUN baru
        rowNew15.getCell(47).value = results.prosthodontikSebahagianDentur; //C31          18- 19 TAHUN baru
        rowNew15.getCell(48).value = results.prosthodontikSebahagianPesakit; //C31          18- 19 TAHUN baru
        rowNew15.getCell(49).value = results.immediateDenture; //C31          18- 19 TAHUN baru
        rowNew15.getCell(50).value = results.pembaikanDenture; //C31          18- 19 TAHUN baru
        rowNew15.getCell(51).value = results.kesSelesai; //C31          18- 19 TAHUN baru
        rowNew15.getCell(52).value = results.xrayDiambil; //C31          18- 19 TAHUN baru
        rowNew15.getCell(53).value = results.pesakitDisaringOC; //C31          18- 19 TAHUN baru
        rowNew15.getCell(54).value = results.pesakitdirujukLesiMulut; //C31          18- 19 TAHUN baru
        rowNew15.getCell(55).value = results.pesakitDirujukTabiat; //C31          18- 19 TAHUN baru
        rowNew15.getCell(56).value = results.rokokSaringNasihat; //C31          18- 19 TAHUN baru
        rowNew15.getCell(57).value = results.rokokIntervensi; //C31          18- 19 TAHUN baru
        rowNew15.commit();

        //PG207
        //18- 19 TAHUN ulangan
        let rowNew16 = worksheet.getRow(32);
        rowNew16.getCell(3).value = results.kedatanganTahunSemasa; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(4).value = results.sapuanFluorida; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(5).value = results.prrJenis1; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(6).value = results.muridBaruFS; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(7).value = results.muridSemulaFS; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(8).value = results.gigiBaruFS; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(9).value = results.gigiSemulaFS; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(10).value = results.tampalanAntGdBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(11).value = results.tampalanAntGdSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(12).value = results.tampalanAntGkBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(13).value = results.tampalanAntGkSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(14).value = results.tampalanPostGdBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(15).value = results.tampalanPostGdSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(16).value = results.tampalanPostGkBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(17).value = results.tampalanPostGkSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(18).value = results.tampalanPostAmgGdBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(19).value = results.tampalanPostAmgGdSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(20).value = results.tampalanPostAmgGkBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(21).value = results.tampalanPostAmgGkSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(22).value = results.inlayOnlayBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(23).value = results.inlayOnlaySemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(24).value = results.jumlahTampalanBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(25).value = results.jumlahTampalanSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(26).value = results.tampalanSementara; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(27).value = results.cabutanGd; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(28).value = results.cabutanGk; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(29).value = results.komplikasiSelepasCabutan; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(30).value = results.penskaleran; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(31).value = results.rawatanLain; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(32).value = results.rawatanEndo; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(33).value = results.rawatanOrtho; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(34).value = results.kesPerubatan; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(35).value = results.absesBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(36).value = results.AbsesSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(37).value = results.cabutanSurgical; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(38).value = results.fraktur; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(39).value = results.trauma; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(40).value = results.pembedahanKecilMulut; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(41).value = results.crownBridgeBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(42).value = results.crownBridgeSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(43).value = results.postCoreBaru; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(44).value = results.postCoreSemula; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(45).value = results.prosthodontikPenuhDentur; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(46).value = results.prosthodontikPenuhPesakit; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(47).value = results.prosthodontikSebahagianDentur; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(48).value = results.prosthodontikSebahagianPesakit; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(49).value = results.immediateDenture; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(50).value = results.pembaikanDenture; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(51).value = results.kesSelesai; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(52).value = results.xrayDiambil; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(53).value = results.pesakitDisaringOC; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(54).value = results.pesakitdirujukLesiMulut; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(55).value = results.pesakitDirujukTabiat; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(56).value = results.rokokSaringNasihat; //C32          18- 19 TAHUN ulangan
        rowNew16.getCell(57).value = results.rokokIntervensi; //C32          18- 19 TAHUN ulangan
        rowNew16.commit();

        //PG207
        //20- 29 TAHUN baru
        let rowNew17 = worksheet.getRow(33);
        rowNew17.getCell(3).value = results.kedatanganTahunSemasa; //C33          20- 29 TAHUN baru
        rowNew17.getCell(4).value = results.sapuanFluorida; //C33          20- 29 TAHUN baru
        rowNew17.getCell(5).value = results.prrJenis1; //C33          20- 29 TAHUN baru
        rowNew17.getCell(6).value = results.muridBaruFS; //C33          20- 29 TAHUN baru
        rowNew17.getCell(7).value = results.muridSemulaFS; //C33          20- 29 TAHUN baru
        rowNew17.getCell(8).value = results.gigiBaruFS; //C33          20- 29 TAHUN baru
        rowNew17.getCell(9).value = results.gigiSemulaFS; //C33          20- 29 TAHUN baru
        rowNew17.getCell(10).value = results.tampalanAntGdBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(11).value = results.tampalanAntGdSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(12).value = results.tampalanAntGkBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(13).value = results.tampalanAntGkSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(14).value = results.tampalanPostGdBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(15).value = results.tampalanPostGdSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(16).value = results.tampalanPostGkBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(17).value = results.tampalanPostGkSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(18).value = results.tampalanPostAmgGdBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(19).value = results.tampalanPostAmgGdSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(20).value = results.tampalanPostAmgGkBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(21).value = results.tampalanPostAmgGkSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(22).value = results.inlayOnlayBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(23).value = results.inlayOnlaySemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(24).value = results.jumlahTampalanBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(25).value = results.jumlahTampalanSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(26).value = results.tampalanSementara; //C33          20- 29 TAHUN baru
        rowNew17.getCell(27).value = results.cabutanGd; //C33          20- 29 TAHUN baru
        rowNew17.getCell(28).value = results.cabutanGk; //C33          20- 29 TAHUN baru
        rowNew17.getCell(29).value = results.komplikasiSelepasCabutan; //C33          20- 29 TAHUN baru
        rowNew17.getCell(30).value = results.penskaleran; //C33          20- 29 TAHUN baru
        rowNew17.getCell(31).value = results.rawatanLain; //C33          20- 29 TAHUN baru
        rowNew17.getCell(32).value = results.rawatanEndo; //C33          20- 29 TAHUN baru
        rowNew17.getCell(33).value = results.rawatanOrtho; //C33          20- 29 TAHUN baru
        rowNew17.getCell(34).value = results.kesPerubatan; //C33          20- 29 TAHUN baru
        rowNew17.getCell(35).value = results.absesBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(36).value = results.AbsesSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(37).value = results.cabutanSurgical; //C33          20- 29 TAHUN baru
        rowNew17.getCell(38).value = results.fraktur; //C33          20- 29 TAHUN baru
        rowNew17.getCell(39).value = results.trauma; //C33          20- 29 TAHUN baru
        rowNew17.getCell(40).value = results.pembedahanKecilMulut; //C33          20- 29 TAHUN baru
        rowNew17.getCell(41).value = results.crownBridgeBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(42).value = results.crownBridgeSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(43).value = results.postCoreBaru; //C33          20- 29 TAHUN baru
        rowNew17.getCell(44).value = results.postCoreSemula; //C33          20- 29 TAHUN baru
        rowNew17.getCell(45).value = results.prosthodontikPenuhDentur; //C33          20- 29 TAHUN baru
        rowNew17.getCell(46).value = results.prosthodontikPenuhPesakit; //C33          20- 29 TAHUN baru
        rowNew17.getCell(47).value = results.prosthodontikSebahagianDentur; //C33          20- 29 TAHUN baru
        rowNew17.getCell(48).value = results.prosthodontikSebahagianPesakit; //C33          20- 29 TAHUN baru
        rowNew17.getCell(49).value = results.immediateDenture; //C33          20- 29 TAHUN baru
        rowNew17.getCell(50).value = results.pembaikanDenture; //C33          20- 29 TAHUN baru
        rowNew17.getCell(51).value = results.kesSelesai; //C33          20- 29 TAHUN baru
        rowNew17.getCell(52).value = results.xrayDiambil; //C33          20- 29 TAHUN baru
        rowNew17.getCell(53).value = results.pesakitDisaringOC; //C33          20- 29 TAHUN baru
        rowNew17.getCell(54).value = results.pesakitdirujukLesiMulut; //C33          20- 29 TAHUN baru
        rowNew17.getCell(55).value = results.pesakitDirujukTabiat; //C33          20- 29 TAHUN baru
        rowNew17.getCell(56).value = results.rokokSaringNasihat; //C33          20- 29 TAHUN baru
        rowNew17.getCell(57).value = results.rokokIntervensi; //C33          20- 29 TAHUN baru
        rowNew17.commit();

        //PG207
        //20- 29 TAHUN ulangan
        let rowNew18 = worksheet.getRow(34);
        rowNew18.getCell(3).value = results.kedatanganTahunSemasa; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(4).value = results.sapuanFluorida; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(5).value = results.prrJenis1; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(6).value = results.muridBaruFS; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(7).value = results.muridSemulaFS; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(8).value = results.gigiBaruFS; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(9).value = results.gigiSemulaFS; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(10).value = results.tampalanAntGdBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(11).value = results.tampalanAntGdSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(12).value = results.tampalanAntGkBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(13).value = results.tampalanAntGkSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(14).value = results.tampalanPostGdBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(15).value = results.tampalanPostGdSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(16).value = results.tampalanPostGkBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(17).value = results.tampalanPostGkSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(18).value = results.tampalanPostAmgGdBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(19).value = results.tampalanPostAmgGdSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(20).value = results.tampalanPostAmgGkBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(21).value = results.tampalanPostAmgGkSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(22).value = results.inlayOnlayBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(23).value = results.inlayOnlaySemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(24).value = results.jumlahTampalanBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(25).value = results.jumlahTampalanSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(26).value = results.tampalanSementara; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(27).value = results.cabutanGd; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(28).value = results.cabutanGk; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(29).value = results.komplikasiSelepasCabutan; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(30).value = results.penskaleran; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(31).value = results.rawatanLain; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(32).value = results.rawatanEndo; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(33).value = results.rawatanOrtho; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(34).value = results.kesPerubatan; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(35).value = results.absesBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(36).value = results.AbsesSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(37).value = results.cabutanSurgical; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(38).value = results.fraktur; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(39).value = results.trauma; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(40).value = results.pembedahanKecilMulut; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(41).value = results.crownBridgeBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(42).value = results.crownBridgeSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(43).value = results.postCoreBaru; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(44).value = results.postCoreSemula; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(45).value = results.prosthodontikPenuhDentur; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(46).value = results.prosthodontikPenuhPesakit; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(47).value = results.prosthodontikSebahagianDentur; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(48).value = results.prosthodontikSebahagianPesakit; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(49).value = results.immediateDenture; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(50).value = results.pembaikanDenture; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(51).value = results.kesSelesai; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(52).value = results.xrayDiambil; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(53).value = results.pesakitDisaringOC; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(54).value = results.pesakitdirujukLesiMulut; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(55).value = results.pesakitDirujukTabiat; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(56).value = results.rokokSaringNasihat; //C34          20- 29 TAHUN ulangan
        rowNew18.getCell(57).value = results.rokokIntervensi; //C34          20- 29 TAHUN ulangan
        rowNew18.commit();

        //PG207
        //30- 49 TAHUN baru
        let rowNew19 = worksheet.getRow(35);
        rowNew19.getCell(3).value = results.kedatanganTahunSemasa; //C35          30- 49 TAHUN baru
        rowNew19.getCell(4).value = results.sapuanFluorida; //C35          30- 49 TAHUN baru
        rowNew19.getCell(5).value = results.prrJenis1; //C35          30- 49 TAHUN baru
        rowNew19.getCell(6).value = results.muridBaruFS; //C35          30- 49 TAHUN baru
        rowNew19.getCell(7).value = results.muridSemulaFS; //C35          30- 49 TAHUN baru
        rowNew19.getCell(8).value = results.gigiBaruFS; //C35          30- 49 TAHUN baru
        rowNew19.getCell(9).value = results.gigiSemulaFS; //C35          30- 49 TAHUN baru
        rowNew19.getCell(10).value = results.tampalanAntGdBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(11).value = results.tampalanAntGdSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(12).value = results.tampalanAntGkBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(13).value = results.tampalanAntGkSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(14).value = results.tampalanPostGdBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(15).value = results.tampalanPostGdSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(16).value = results.tampalanPostGkBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(17).value = results.tampalanPostGkSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(18).value = results.tampalanPostAmgGdBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(19).value = results.tampalanPostAmgGdSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(20).value = results.tampalanPostAmgGkBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(21).value = results.tampalanPostAmgGkSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(22).value = results.inlayOnlayBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(23).value = results.inlayOnlaySemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(24).value = results.jumlahTampalanBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(25).value = results.jumlahTampalanSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(26).value = results.tampalanSementara; //C35          30- 49 TAHUN baru
        rowNew19.getCell(27).value = results.cabutanGd; //C35          30- 49 TAHUN baru
        rowNew19.getCell(28).value = results.cabutanGk; //C35          30- 49 TAHUN baru
        rowNew19.getCell(29).value = results.komplikasiSelepasCabutan; //C35          30- 49 TAHUN baru
        rowNew19.getCell(30).value = results.penskaleran; //C35          30- 49 TAHUN baru
        rowNew19.getCell(31).value = results.rawatanLain; //C35          30- 49 TAHUN baru
        rowNew19.getCell(32).value = results.rawatanEndo; //C35          30- 49 TAHUN baru
        rowNew19.getCell(33).value = results.rawatanOrtho; //C35          30- 49 TAHUN baru
        rowNew19.getCell(34).value = results.kesPerubatan; //C35          30- 49 TAHUN baru
        rowNew19.getCell(35).value = results.absesBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(36).value = results.AbsesSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(37).value = results.cabutanSurgical; //C35          30- 49 TAHUN baru
        rowNew19.getCell(38).value = results.fraktur; //C35          30- 49 TAHUN baru
        rowNew19.getCell(39).value = results.trauma; //C35          30- 49 TAHUN baru
        rowNew19.getCell(40).value = results.pembedahanKecilMulut; //C35          30- 49 TAHUN baru
        rowNew19.getCell(41).value = results.crownBridgeBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(42).value = results.crownBridgeSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(43).value = results.postCoreBaru; //C35          30- 49 TAHUN baru
        rowNew19.getCell(44).value = results.postCoreSemula; //C35          30- 49 TAHUN baru
        rowNew19.getCell(45).value = results.prosthodontikPenuhDentur; //C35          30- 49 TAHUN baru
        rowNew19.getCell(46).value = results.prosthodontikPenuhPesakit; //C35          30- 49 TAHUN baru
        rowNew19.getCell(47).value = results.prosthodontikSebahagianDentur; //C35          30- 49 TAHUN baru
        rowNew19.getCell(48).value = results.prosthodontikSebahagianPesakit; //C35          30- 49 TAHUN baru
        rowNew19.getCell(49).value = results.immediateDenture; //C35          30- 49 TAHUN baru
        rowNew19.getCell(50).value = results.pembaikanDenture; //C35          30- 49 TAHUN baru
        rowNew19.getCell(51).value = results.kesSelesai; //C35          30- 49 TAHUN baru
        rowNew19.getCell(52).value = results.xrayDiambil; //C35          30- 49 TAHUN baru
        rowNew19.getCell(53).value = results.pesakitDisaringOC; //C35          30- 49 TAHUN baru
        rowNew19.getCell(54).value = results.pesakitdirujukLesiMulut; //C35          30- 49 TAHUN baru
        rowNew19.getCell(55).value = results.pesakitDirujukTabiat; //C35          30- 49 TAHUN baru
        rowNew19.getCell(56).value = results.rokokSaringNasihat; //C35          30- 49 TAHUN baru
        rowNew19.getCell(57).value = results.rokokIntervensi; //C35          30- 49 TAHUN baru
        rowNew19.commit();

        //PG207
        //30- 49 TAHUN ulangan
        let rowNew20 = worksheet.getRow(36);
        rowNew20.getCell(3).value = results.kedatanganTahunSemasa; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(4).value = results.sapuanFluorida; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(5).value = results.prrJenis1; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(6).value = results.muridBaruFS; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(7).value = results.muridSemulaFS; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(8).value = results.gigiBaruFS; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(9).value = results.gigiSemulaFS; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(10).value = results.tampalanAntGdBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(11).value = results.tampalanAntGdSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(12).value = results.tampalanAntGkBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(13).value = results.tampalanAntGkSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(14).value = results.tampalanPostGdBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(15).value = results.tampalanPostGdSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(16).value = results.tampalanPostGkBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(17).value = results.tampalanPostGkSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(18).value = results.tampalanPostAmgGdBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(19).value = results.tampalanPostAmgGdSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(20).value = results.tampalanPostAmgGkBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(21).value = results.tampalanPostAmgGkSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(22).value = results.inlayOnlayBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(23).value = results.inlayOnlaySemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(24).value = results.jumlahTampalanBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(25).value = results.jumlahTampalanSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(26).value = results.tampalanSementara; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(27).value = results.cabutanGd; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(28).value = results.cabutanGk; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(29).value = results.komplikasiSelepasCabutan; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(30).value = results.penskaleran; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(31).value = results.rawatanLain; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(32).value = results.rawatanEndo; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(33).value = results.rawatanOrtho; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(34).value = results.kesPerubatan; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(35).value = results.absesBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(36).value = results.AbsesSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(37).value = results.cabutanSurgical; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(38).value = results.fraktur; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(39).value = results.trauma; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(40).value = results.pembedahanKecilMulut; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(41).value = results.crownBridgeBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(42).value = results.crownBridgeSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(43).value = results.postCoreBaru; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(44).value = results.postCoreSemula; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(45).value = results.prosthodontikPenuhDentur; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(46).value = results.prosthodontikPenuhPesakit; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(47).value = results.prosthodontikSebahagianDentur; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(48).value = results.prosthodontikSebahagianPesakit; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(49).value = results.immediateDenture; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(50).value = results.pembaikanDenture; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(51).value = results.kesSelesai; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(52).value = results.xrayDiambil; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(53).value = results.pesakitDisaringOC; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(54).value = results.pesakitdirujukLesiMulut; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(55).value = results.pesakitDirujukTabiat; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(56).value = results.rokokSaringNasihat; //C36          30- 49 TAHUN ulangan
        rowNew20.getCell(57).value = results.rokokIntervensi; //C36          30- 49 TAHUN ulangan
        rowNew20.commit();

        //PG207
        //50- 59 TAHUN baru
        let rowNew21 = worksheet.getRow(37);
        rowNew21.getCell(3).value = results.kedatanganTahunSemasa; //C37          50- 59 TAHUN baru
        rowNew21.getCell(4).value = results.sapuanFluorida; //C37          50- 59 TAHUN baru
        rowNew21.getCell(5).value = results.prrJenis1; //C37          50- 59 TAHUN baru
        rowNew21.getCell(6).value = results.muridBaruFS; //C37          50- 59 TAHUN baru
        rowNew21.getCell(7).value = results.muridSemulaFS; //C37          50- 59 TAHUN baru
        rowNew21.getCell(8).value = results.gigiBaruFS; //C37          50- 59 TAHUN baru
        rowNew21.getCell(9).value = results.gigiSemulaFS; //C37          50- 59 TAHUN baru
        rowNew21.getCell(10).value = results.tampalanAntGdBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(11).value = results.tampalanAntGdSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(12).value = results.tampalanAntGkBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(13).value = results.tampalanAntGkSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(14).value = results.tampalanPostGdBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(15).value = results.tampalanPostGdSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(16).value = results.tampalanPostGkBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(17).value = results.tampalanPostGkSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(18).value = results.tampalanPostAmgGdBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(19).value = results.tampalanPostAmgGdSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(20).value = results.tampalanPostAmgGkBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(21).value = results.tampalanPostAmgGkSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(22).value = results.inlayOnlayBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(23).value = results.inlayOnlaySemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(24).value = results.jumlahTampalanBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(25).value = results.jumlahTampalanSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(26).value = results.tampalanSementara; //C37          50- 59 TAHUN baru
        rowNew21.getCell(27).value = results.cabutanGd; //C37          50- 59 TAHUN baru
        rowNew21.getCell(28).value = results.cabutanGk; //C37          50- 59 TAHUN baru
        rowNew21.getCell(29).value = results.komplikasiSelepasCabutan; //C37          50- 59 TAHUN baru
        rowNew21.getCell(30).value = results.penskaleran; //C37          50- 59 TAHUN baru
        rowNew21.getCell(31).value = results.rawatanLain; //C37          50- 59 TAHUN baru
        rowNew21.getCell(32).value = results.rawatanEndo; //C37          50- 59 TAHUN baru
        rowNew21.getCell(33).value = results.rawatanOrtho; //C37          50- 59 TAHUN baru
        rowNew21.getCell(34).value = results.kesPerubatan; //C37          50- 59 TAHUN baru
        rowNew21.getCell(35).value = results.absesBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(36).value = results.AbsesSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(37).value = results.cabutanSurgical; //C37          50- 59 TAHUN baru
        rowNew21.getCell(38).value = results.fraktur; //C37          50- 59 TAHUN baru
        rowNew21.getCell(39).value = results.trauma; //C37          50- 59 TAHUN baru
        rowNew21.getCell(40).value = results.pembedahanKecilMulut; //C37          50- 59 TAHUN baru
        rowNew21.getCell(41).value = results.crownBridgeBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(42).value = results.crownBridgeSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(43).value = results.postCoreBaru; //C37          50- 59 TAHUN baru
        rowNew21.getCell(44).value = results.postCoreSemula; //C37          50- 59 TAHUN baru
        rowNew21.getCell(45).value = results.prosthodontikPenuhDentur; //C37          50- 59 TAHUN baru
        rowNew21.getCell(46).value = results.prosthodontikPenuhPesakit; //C37          50- 59 TAHUN baru
        rowNew21.getCell(47).value = results.prosthodontikSebahagianDentur; //C37          50- 59 TAHUN baru
        rowNew21.getCell(48).value = results.prosthodontikSebahagianPesakit; //C37          50- 59 TAHUN baru
        rowNew21.getCell(49).value = results.immediateDenture; //C37          50- 59 TAHUN baru
        rowNew21.getCell(50).value = results.pembaikanDenture; //C37          50- 59 TAHUN baru
        rowNew21.getCell(51).value = results.kesSelesai; //C37          50- 59 TAHUN baru
        rowNew21.getCell(52).value = results.xrayDiambil; //C37          50- 59 TAHUN baru
        rowNew21.getCell(53).value = results.pesakitDisaringOC; //C37          50- 59 TAHUN baru
        rowNew21.getCell(54).value = results.pesakitdirujukLesiMulut; //C37          50- 59 TAHUN baru
        rowNew21.getCell(55).value = results.pesakitDirujukTabiat; //C37          50- 59 TAHUN baru
        rowNew21.getCell(56).value = results.rokokSaringNasihat; //C37          50- 59 TAHUN baru
        rowNew21.getCell(57).value = results.rokokIntervensi; //C37          50- 59 TAHUN baru
        rowNew21.commit();

        //PG207
        //50- 59 TAHUN ulangan
        let rowNew22 = worksheet.getRow(38);
        rowNew22.getCell(3).value = results.kedatanganTahunSemasa; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(4).value = results.sapuanFluorida; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(5).value = results.prrJenis1; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(6).value = results.muridBaruFS; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(7).value = results.muridSemulaFS; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(8).value = results.gigiBaruFS; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(9).value = results.gigiSemulaFS; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(10).value = results.tampalanAntGdBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(11).value = results.tampalanAntGdSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(12).value = results.tampalanAntGkBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(13).value = results.tampalanAntGkSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(14).value = results.tampalanPostGdBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(15).value = results.tampalanPostGdSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(16).value = results.tampalanPostGkBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(17).value = results.tampalanPostGkSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(18).value = results.tampalanPostAmgGdBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(19).value = results.tampalanPostAmgGdSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(20).value = results.tampalanPostAmgGkBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(21).value = results.tampalanPostAmgGkSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(22).value = results.inlayOnlayBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(23).value = results.inlayOnlaySemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(24).value = results.jumlahTampalanBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(25).value = results.jumlahTampalanSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(26).value = results.tampalanSementara; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(27).value = results.cabutanGd; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(28).value = results.cabutanGk; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(29).value = results.komplikasiSelepasCabutan; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(30).value = results.penskaleran; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(31).value = results.rawatanLain; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(32).value = results.rawatanEndo; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(33).value = results.rawatanOrtho; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(34).value = results.kesPerubatan; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(35).value = results.absesBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(36).value = results.AbsesSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(37).value = results.cabutanSurgical; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(38).value = results.fraktur; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(39).value = results.trauma; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(40).value = results.pembedahanKecilMulut; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(41).value = results.crownBridgeBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(42).value = results.crownBridgeSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(43).value = results.postCoreBaru; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(44).value = results.postCoreSemula; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(45).value = results.prosthodontikPenuhDentur; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(46).value = results.prosthodontikPenuhPesakit; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(47).value = results.prosthodontikSebahagianDentur; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(48).value = results.prosthodontikSebahagianPesakit; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(49).value = results.immediateDenture; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(50).value = results.pembaikanDenture; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(51).value = results.kesSelesai; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(52).value = results.xrayDiambil; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(53).value = results.pesakitDisaringOC; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(54).value = results.pesakitdirujukLesiMulut; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(55).value = results.pesakitDirujukTabiat; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(56).value = results.rokokSaringNasihat; //C38          50- 59 TAHUN ulangan
        rowNew22.getCell(57).value = results.rokokIntervensi; //C38          50- 59 TAHUN ulangan
        rowNew22.commit();

        //PG207
        //60 TAHUN DAN KE ATAS baru
        let rowNew23 = worksheet.getRow(29);
        rowNew23.getCell(3).value = results.kedatanganTahunSemasa; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(4).value = results.sapuanFluorida; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(5).value = results.prrJenis1; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(6).value = results.muridBaruFS; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(7).value = results.muridSemulaFS; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(8).value = results.gigiBaruFS; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(9).value = results.gigiSemulaFS; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(10).value = results.tampalanAntGdBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(11).value = results.tampalanAntGdSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(12).value = results.tampalanAntGkBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(13).value = results.tampalanAntGkSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(14).value = results.tampalanPostGdBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(15).value = results.tampalanPostGdSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(16).value = results.tampalanPostGkBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(17).value = results.tampalanPostGkSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(18).value = results.tampalanPostAmgGdBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(19).value = results.tampalanPostAmgGdSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(20).value = results.tampalanPostAmgGkBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(21).value = results.tampalanPostAmgGkSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(22).value = results.inlayOnlayBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(23).value = results.inlayOnlaySemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(24).value = results.jumlahTampalanBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(25).value = results.jumlahTampalanSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(26).value = results.tampalanSementara; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(27).value = results.cabutanGd; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(28).value = results.cabutanGk; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(29).value = results.komplikasiSelepasCabutan; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(30).value = results.penskaleran; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(31).value = results.rawatanLain; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(32).value = results.rawatanEndo; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(33).value = results.rawatanOrtho; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(34).value = results.kesPerubatan; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(35).value = results.absesBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(36).value = results.AbsesSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(37).value = results.cabutanSurgical; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(38).value = results.fraktur; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(39).value = results.trauma; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(40).value = results.pembedahanKecilMulut; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(41).value = results.crownBridgeBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(42).value = results.crownBridgeSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(43).value = results.postCoreBaru; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(44).value = results.postCoreSemula; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(45).value = results.prosthodontikPenuhDentur; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(46).value = results.prosthodontikPenuhPesakit; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(47).value = results.prosthodontikSebahagianDentur; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(48).value = results.prosthodontikSebahagianPesakit; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(49).value = results.immediateDenture; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(50).value = results.pembaikanDenture; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(51).value = results.kesSelesai; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(52).value = results.xrayDiambil; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(53).value = results.pesakitDisaringOC; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(54).value = results.pesakitdirujukLesiMulut; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(55).value = results.pesakitDirujukTabiat; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(56).value = results.rokokSaringNasihat; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.getCell(57).value = results.rokokIntervensi; //C29          60 TAHUN DAN KE ATAS baru
        rowNew23.commit();

        //PG207
        //60 TAHUN DAN KE ATAS semula
        let rowNew24 = worksheet.getRow(30);
        rowNew24.getCell(3).value = results.kedatanganTahunSemasa; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(4).value = results.sapuanFluorida; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(5).value = results.prrJenis1; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(6).value = results.muridBaruFS; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(7).value = results.muridSemulaFS; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(8).value = results.gigiBaruFS; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(9).value = results.gigiSemulaFS; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(10).value = results.tampalanAntGdBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(11).value = results.tampalanAntGdSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(12).value = results.tampalanAntGkBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(13).value = results.tampalanAntGkSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(14).value = results.tampalanPostGdBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(15).value = results.tampalanPostGdSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(16).value = results.tampalanPostGkBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(17).value = results.tampalanPostGkSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(18).value = results.tampalanPostAmgGdBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(19).value = results.tampalanPostAmgGdSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(20).value = results.tampalanPostAmgGkBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(21).value = results.tampalanPostAmgGkSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(22).value = results.inlayOnlayBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(23).value = results.inlayOnlaySemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(24).value = results.jumlahTampalanBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(25).value = results.jumlahTampalanSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(26).value = results.tampalanSementara; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(27).value = results.cabutanGd; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(28).value = results.cabutanGk; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(29).value = results.komplikasiSelepasCabutan; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(30).value = results.penskaleran; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(31).value = results.rawatanLain; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(32).value = results.rawatanEndo; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(33).value = results.rawatanOrtho; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(34).value = results.kesPerubatan; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(35).value = results.absesBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(36).value = results.AbsesSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(37).value = results.cabutanSurgical; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(38).value = results.fraktur; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(39).value = results.trauma; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(40).value = results.pembedahanKecilMulut; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(41).value = results.crownBridgeBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(42).value = results.crownBridgeSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(43).value = results.postCoreBaru; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(44).value = results.postCoreSemula; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(45).value = results.prosthodontikPenuhDentur; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(46).value = results.prosthodontikPenuhPesakit; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(47).value = results.prosthodontikSebahagianDentur; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(48).value = results.prosthodontikSebahagianPesakit; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(49).value = results.immediateDenture; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(50).value = results.pembaikanDenture; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(51).value = results.kesSelesai; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(52).value = results.xrayDiambil; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(53).value = results.pesakitDisaringOC; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(54).value = results.pesakitdirujukLesiMulut; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(55).value = results.pesakitDirujukTabiat; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(56).value = results.rokokSaringNasihat; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.getCell(57).value = results.rokokIntervensi; //C30          60 TAHUN DAN KE ATAS semula
        rowNew24.commit();

        //PG207
        //Ibu mengandung baru
        let rowNew25 = worksheet.getRow(43);
        rowNew25.getCell(3).value = results.kedatanganTahunSemasa; //C43          Ibu mengandung baru
        rowNew25.getCell(4).value = results.sapuanFluorida; //C43          Ibu mengandung baru
        rowNew25.getCell(5).value = results.prrJenis1; //C43          Ibu mengandung baru
        rowNew25.getCell(6).value = results.muridBaruFS; //C43          Ibu mengandung baru
        rowNew25.getCell(7).value = results.muridSemulaFS; //C43          Ibu mengandung baru
        rowNew25.getCell(8).value = results.gigiBaruFS; //C43          Ibu mengandung baru
        rowNew25.getCell(9).value = results.gigiSemulaFS; //C43          Ibu mengandung baru
        rowNew25.getCell(10).value = results.tampalanAntGdBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(11).value = results.tampalanAntGdSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(12).value = results.tampalanAntGkBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(13).value = results.tampalanAntGkSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(14).value = results.tampalanPostGdBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(15).value = results.tampalanPostGdSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(16).value = results.tampalanPostGkBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(17).value = results.tampalanPostGkSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(18).value = results.tampalanPostAmgGdBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(19).value = results.tampalanPostAmgGdSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(20).value = results.tampalanPostAmgGkBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(21).value = results.tampalanPostAmgGkSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(22).value = results.inlayOnlayBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(23).value = results.inlayOnlaySemula; //C43          Ibu mengandung baru
        rowNew25.getCell(24).value = results.jumlahTampalanBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(25).value = results.jumlahTampalanSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(26).value = results.tampalanSementara; //C43          Ibu mengandung baru
        rowNew25.getCell(27).value = results.cabutanGd; //C43          Ibu mengandung baru
        rowNew25.getCell(28).value = results.cabutanGk; //C43          Ibu mengandung baru
        rowNew25.getCell(29).value = results.komplikasiSelepasCabutan; //C43          Ibu mengandung baru
        rowNew25.getCell(30).value = results.penskaleran; //C43          Ibu mengandung baru
        rowNew25.getCell(31).value = results.rawatanLain; //C43          Ibu mengandung baru
        rowNew25.getCell(32).value = results.rawatanEndo; //C43          Ibu mengandung baru
        rowNew25.getCell(33).value = results.rawatanOrtho; //C43          Ibu mengandung baru
        rowNew25.getCell(34).value = results.kesPerubatan; //C43          Ibu mengandung baru
        rowNew25.getCell(35).value = results.absesBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(36).value = results.AbsesSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(37).value = results.cabutanSurgical; //C43          Ibu mengandung baru
        rowNew25.getCell(38).value = results.fraktur; //C43          Ibu mengandung baru
        rowNew25.getCell(39).value = results.trauma; //C43          Ibu mengandung baru
        rowNew25.getCell(40).value = results.pembedahanKecilMulut; //C43          Ibu mengandung baru
        rowNew25.getCell(41).value = results.crownBridgeBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(42).value = results.crownBridgeSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(43).value = results.postCoreBaru; //C43          Ibu mengandung baru
        rowNew25.getCell(44).value = results.postCoreSemula; //C43          Ibu mengandung baru
        rowNew25.getCell(45).value = results.prosthodontikPenuhDentur; //C43          Ibu mengandung baru
        rowNew25.getCell(46).value = results.prosthodontikPenuhPesakit; //C43          Ibu mengandung baru
        rowNew25.getCell(47).value = results.prosthodontikSebahagianDentur; //C43          Ibu mengandung baru
        rowNew25.getCell(48).value = results.prosthodontikSebahagianPesakit; //C43          Ibu mengandung baru
        rowNew25.getCell(49).value = results.immediateDenture; //C43          Ibu mengandung baru
        rowNew25.getCell(50).value = results.pembaikanDenture; //C43          Ibu mengandung baru
        rowNew25.getCell(51).value = results.kesSelesai; //C43          Ibu mengandung baru
        rowNew25.getCell(52).value = results.xrayDiambil; //C43          Ibu mengandung baru
        rowNew25.getCell(53).value = results.pesakitDisaringOC; //C43          Ibu mengandung baru
        rowNew25.getCell(54).value = results.pesakitdirujukLesiMulut; //C43          Ibu mengandung baru
        rowNew25.getCell(55).value = results.pesakitDirujukTabiat; //C43          Ibu mengandung baru
        rowNew25.getCell(56).value = results.rokokSaringNasihat; //C43          Ibu mengandung baru
        rowNew25.getCell(57).value = results.rokokIntervensi; //C43          Ibu mengandung baru
        rowNew25.commit();

        //PG207
        //Ibu mengandung semula
        let rowNew26 = worksheet.getRow(44);
        rowNew26.getCell(3).value = results.kedatanganTahunSemasa; //C44          Ibu mengandung semula
        rowNew26.getCell(4).value = results.sapuanFluorida; //C44          Ibu mengandung semula
        rowNew26.getCell(5).value = results.prrJenis1; //C44          Ibu mengandung semula
        rowNew26.getCell(6).value = results.muridBaruFS; //C44          Ibu mengandung semula
        rowNew26.getCell(7).value = results.muridSemulaFS; //C44          Ibu mengandung semula
        rowNew26.getCell(8).value = results.gigiBaruFS; //C44          Ibu mengandung semula
        rowNew26.getCell(9).value = results.gigiSemulaFS; //C44          Ibu mengandung semula
        rowNew26.getCell(10).value = results.tampalanAntGdBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(11).value = results.tampalanAntGdSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(12).value = results.tampalanAntGkBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(13).value = results.tampalanAntGkSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(14).value = results.tampalanPostGdBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(15).value = results.tampalanPostGdSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(16).value = results.tampalanPostGkBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(17).value = results.tampalanPostGkSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(18).value = results.tampalanPostAmgGdBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(19).value = results.tampalanPostAmgGdSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(20).value = results.tampalanPostAmgGkBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(21).value = results.tampalanPostAmgGkSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(22).value = results.inlayOnlayBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(23).value = results.inlayOnlaySemula; //C44          Ibu mengandung semula
        rowNew26.getCell(24).value = results.jumlahTampalanBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(25).value = results.jumlahTampalanSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(26).value = results.tampalanSementara; //C44          Ibu mengandung semula
        rowNew26.getCell(27).value = results.cabutanGd; //C44          Ibu mengandung semula
        rowNew26.getCell(28).value = results.cabutanGk; //C44          Ibu mengandung semula
        rowNew26.getCell(29).value = results.komplikasiSelepasCabutan; //C44          Ibu mengandung semula
        rowNew26.getCell(30).value = results.penskaleran; //C44          Ibu mengandung semula
        rowNew26.getCell(31).value = results.rawatanLain; //C44          Ibu mengandung semula
        rowNew26.getCell(32).value = results.rawatanEndo; //C44          Ibu mengandung semula
        rowNew26.getCell(33).value = results.rawatanOrtho; //C44          Ibu mengandung semula
        rowNew26.getCell(34).value = results.kesPerubatan; //C44          Ibu mengandung semula
        rowNew26.getCell(35).value = results.absesBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(36).value = results.AbsesSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(37).value = results.cabutanSurgical; //C44          Ibu mengandung semula
        rowNew26.getCell(38).value = results.fraktur; //C44          Ibu mengandung semula
        rowNew26.getCell(39).value = results.trauma; //C44          Ibu mengandung semula
        rowNew26.getCell(40).value = results.pembedahanKecilMulut; //C44          Ibu mengandung semula
        rowNew26.getCell(41).value = results.crownBridgeBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(42).value = results.crownBridgeSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(43).value = results.postCoreBaru; //C44          Ibu mengandung semula
        rowNew26.getCell(44).value = results.postCoreSemula; //C44          Ibu mengandung semula
        rowNew26.getCell(45).value = results.prosthodontikPenuhDentur; //C44          Ibu mengandung semula
        rowNew26.getCell(46).value = results.prosthodontikPenuhPesakit; //C44          Ibu mengandung semula
        rowNew26.getCell(47).value = results.prosthodontikSebahagianDentur; //C44          Ibu mengandung semula
        rowNew26.getCell(48).value = results.prosthodontikSebahagianPesakit; //C44          Ibu mengandung semula
        rowNew26.getCell(49).value = results.immediateDenture; //C44          Ibu mengandung semula
        rowNew26.getCell(50).value = results.pembaikanDenture; //C44          Ibu mengandung semula
        rowNew26.getCell(51).value = results.kesSelesai; //C44          Ibu mengandung semula
        rowNew26.getCell(52).value = results.xrayDiambil; //C44          Ibu mengandung semula
        rowNew26.getCell(53).value = results.pesakitDisaringOC; //C44          Ibu mengandung semula
        rowNew26.getCell(54).value = results.pesakitdirujukLesiMulut; //C44          Ibu mengandung semula
        rowNew26.getCell(55).value = results.pesakitDirujukTabiat; //C44          Ibu mengandung semula
        rowNew26.getCell(56).value = results.rokokSaringNasihat; //C44          Ibu mengandung semula
        rowNew26.getCell(57).value = results.rokokIntervensi; //C44          Ibu mengandung semula
        rowNew26.commit();

        //PG207
        //Orang Kurang Upaya Baru
        let rowNew27 = worksheet.getRow(45);
        rowNew27.getCell(3).value = results.kedatanganTahunSemasa; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(4).value = results.sapuanFluorida; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(5).value = results.prrJenis1; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(6).value = results.muridBaruFS; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(7).value = results.muridSemulaFS; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(8).value = results.gigiBaruFS; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(9).value = results.gigiSemulaFS; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(10).value = results.tampalanAntGdBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(11).value = results.tampalanAntGdSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(12).value = results.tampalanAntGkBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(13).value = results.tampalanAntGkSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(14).value = results.tampalanPostGdBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(15).value = results.tampalanPostGdSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(16).value = results.tampalanPostGkBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(17).value = results.tampalanPostGkSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(18).value = results.tampalanPostAmgGdBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(19).value = results.tampalanPostAmgGdSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(20).value = results.tampalanPostAmgGkBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(21).value = results.tampalanPostAmgGkSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(22).value = results.inlayOnlayBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(23).value = results.inlayOnlaySemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(24).value = results.jumlahTampalanBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(25).value = results.jumlahTampalanSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(26).value = results.tampalanSementara; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(27).value = results.cabutanGd; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(28).value = results.cabutanGk; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(29).value = results.komplikasiSelepasCabutan; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(30).value = results.penskaleran; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(31).value = results.rawatanLain; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(32).value = results.rawatanEndo; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(33).value = results.rawatanOrtho; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(34).value = results.kesPerubatan; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(35).value = results.absesBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(36).value = results.AbsesSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(37).value = results.cabutanSurgical; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(38).value = results.fraktur; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(39).value = results.trauma; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(40).value = results.pembedahanKecilMulut; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(41).value = results.crownBridgeBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(42).value = results.crownBridgeSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(43).value = results.postCoreBaru; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(44).value = results.postCoreSemula; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(45).value = results.prosthodontikPenuhDentur; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(46).value = results.prosthodontikPenuhPesakit; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(47).value = results.prosthodontikSebahagianDentur; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(48).value = results.prosthodontikSebahagianPesakit; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(49).value = results.immediateDenture; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(50).value = results.pembaikanDenture; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(51).value = results.kesSelesai; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(52).value = results.xrayDiambil; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(53).value = results.pesakitDisaringOC; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(54).value = results.pesakitdirujukLesiMulut; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(55).value = results.pesakitDirujukTabiat; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(56).value = results.rokokSaringNasihat; //C45          Orang Kurang Upaya Baru
        rowNew27.getCell(57).value = results.rokokIntervensi; //C45          Orang Kurang Upaya Baru
        rowNew27.commit();

        //PG207
        //Orang Kurang Upaya Ulangan
        let rowNew28 = worksheet.getRow(46);
        rowNew28.getCell(3).value = results.kedatanganTahunSemasa; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(4).value = results.sapuanFluorida; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(5).value = results.prrJenis1; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(6).value = results.muridBaruFS; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(7).value = results.muridSemulaFS; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(8).value = results.gigiBaruFS; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(9).value = results.gigiSemulaFS; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(10).value = results.tampalanAntGdBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(11).value = results.tampalanAntGdSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(12).value = results.tampalanAntGkBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(13).value = results.tampalanAntGkSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(14).value = results.tampalanPostGdBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(15).value = results.tampalanPostGdSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(16).value = results.tampalanPostGkBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(17).value = results.tampalanPostGkSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(18).value = results.tampalanPostAmgGdBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(19).value = results.tampalanPostAmgGdSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(20).value = results.tampalanPostAmgGkBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(21).value = results.tampalanPostAmgGkSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(22).value = results.inlayOnlayBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(23).value = results.inlayOnlaySemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(24).value = results.jumlahTampalanBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(25).value = results.jumlahTampalanSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(26).value = results.tampalanSementara; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(27).value = results.cabutanGd; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(28).value = results.cabutanGk; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(29).value = results.komplikasiSelepasCabutan; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(30).value = results.penskaleran; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(31).value = results.rawatanLain; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(32).value = results.rawatanEndo; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(33).value = results.rawatanOrtho; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(34).value = results.kesPerubatan; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(35).value = results.absesBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(36).value = results.AbsesSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(37).value = results.cabutanSurgical; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(38).value = results.fraktur; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(39).value = results.trauma; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(40).value = results.pembedahanKecilMulut; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(41).value = results.crownBridgeBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(42).value = results.crownBridgeSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(43).value = results.postCoreBaru; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(44).value = results.postCoreSemula; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(45).value = results.prosthodontikPenuhDentur; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(46).value = results.prosthodontikPenuhPesakit; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(47).value = results.prosthodontikSebahagianDentur; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(48).value = results.prosthodontikSebahagianPesakit; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(49).value = results.immediateDenture; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(50).value = results.pembaikanDenture; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(51).value = results.kesSelesai; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(52).value = results.xrayDiambil; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(53).value = results.pesakitDisaringOC; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(54).value = results.pesakitdirujukLesiMulut; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(55).value = results.pesakitDirujukTabiat; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(56).value = results.rokokSaringNasihat; //C46          Orang Kurang Upaya Ulangan
        rowNew28.getCell(57).value = results.rokokIntervensi; //C46          Orang Kurang Upaya Ulangan
        rowNew28.commit();

        //PG207
        //Bukan Warganegara Baru
        let rowNew29 = worksheet.getRow(47);
        rowNew29.getCell(3).value = results.kedatanganTahunSemasa; //C47          Bukan Warganegara Baru
        rowNew29.getCell(4).value = results.sapuanFluorida; //C47          Bukan Warganegara Baru
        rowNew29.getCell(5).value = results.prrJenis1; //C47          Bukan Warganegara Baru
        rowNew29.getCell(6).value = results.muridBaruFS; //C47          Bukan Warganegara Baru
        rowNew29.getCell(7).value = results.muridSemulaFS; //C47          Bukan Warganegara Baru
        rowNew29.getCell(8).value = results.gigiBaruFS; //C47          Bukan Warganegara Baru
        rowNew29.getCell(9).value = results.gigiSemulaFS; //C47          Bukan Warganegara Baru
        rowNew29.getCell(10).value = results.tampalanAntGdBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(11).value = results.tampalanAntGdSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(12).value = results.tampalanAntGkBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(13).value = results.tampalanAntGkSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(14).value = results.tampalanPostGdBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(15).value = results.tampalanPostGdSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(16).value = results.tampalanPostGkBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(17).value = results.tampalanPostGkSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(18).value = results.tampalanPostAmgGdBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(19).value = results.tampalanPostAmgGdSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(20).value = results.tampalanPostAmgGkBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(21).value = results.tampalanPostAmgGkSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(22).value = results.inlayOnlayBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(23).value = results.inlayOnlaySemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(24).value = results.jumlahTampalanBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(25).value = results.jumlahTampalanSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(26).value = results.tampalanSementara; //C47          Bukan Warganegara Baru
        rowNew29.getCell(27).value = results.cabutanGd; //C47          Bukan Warganegara Baru
        rowNew29.getCell(28).value = results.cabutanGk; //C47          Bukan Warganegara Baru
        rowNew29.getCell(29).value = results.komplikasiSelepasCabutan; //C47          Bukan Warganegara Baru
        rowNew29.getCell(30).value = results.penskaleran; //C47          Bukan Warganegara Baru
        rowNew29.getCell(31).value = results.rawatanLain; //C47          Bukan Warganegara Baru
        rowNew29.getCell(32).value = results.rawatanEndo; //C47          Bukan Warganegara Baru
        rowNew29.getCell(33).value = results.rawatanOrtho; //C47          Bukan Warganegara Baru
        rowNew29.getCell(34).value = results.kesPerubatan; //C47          Bukan Warganegara Baru
        rowNew29.getCell(35).value = results.absesBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(36).value = results.AbsesSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(37).value = results.cabutanSurgical; //C47          Bukan Warganegara Baru
        rowNew29.getCell(38).value = results.fraktur; //C47          Bukan Warganegara Baru
        rowNew29.getCell(39).value = results.trauma; //C47          Bukan Warganegara Baru
        rowNew29.getCell(40).value = results.pembedahanKecilMulut; //C47          Bukan Warganegara Baru
        rowNew29.getCell(41).value = results.crownBridgeBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(42).value = results.crownBridgeSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(43).value = results.postCoreBaru; //C47          Bukan Warganegara Baru
        rowNew29.getCell(44).value = results.postCoreSemula; //C47          Bukan Warganegara Baru
        rowNew29.getCell(45).value = results.prosthodontikPenuhDentur; //C47          Bukan Warganegara Baru
        rowNew29.getCell(46).value = results.prosthodontikPenuhPesakit; //C47          Bukan Warganegara Baru
        rowNew29.getCell(47).value = results.prosthodontikSebahagianDentur; //C47          Bukan Warganegara Baru
        rowNew29.getCell(48).value = results.prosthodontikSebahagianPesakit; //C47          Bukan Warganegara Baru
        rowNew29.getCell(49).value = results.immediateDenture; //C47          Bukan Warganegara Baru
        rowNew29.getCell(50).value = results.pembaikanDenture; //C47          Bukan Warganegara Baru
        rowNew29.getCell(51).value = results.kesSelesai; //C47          Bukan Warganegara Baru
        rowNew29.getCell(52).value = results.xrayDiambil; //C47          Bukan Warganegara Baru
        rowNew29.getCell(53).value = results.pesakitDisaringOC; //C47          Bukan Warganegara Baru
        rowNew29.getCell(54).value = results.pesakitdirujukLesiMulut; //C47          Bukan Warganegara Baru
        rowNew29.getCell(55).value = results.pesakitDirujukTabiat; //C47          Bukan Warganegara Baru
        rowNew29.getCell(56).value = results.rokokSaringNasihat; //C47          Bukan Warganegara Baru
        rowNew29.getCell(57).value = results.rokokIntervensi; //C47          Bukan Warganegara Baru
        rowNew29.commit();

        //PG207
        //Bukan Warganegara Ulangan
        let rowNew30 = worksheet.getRow(48);
        rowNew30.getCell(3).value = results.kedatanganTahunSemasa; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(4).value = results.sapuanFluorida; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(5).value = results.prrJenis1; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(6).value = results.muridBaruFS; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(7).value = results.muridSemulaFS; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(8).value = results.gigiBaruFS; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(9).value = results.gigiSemulaFS; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(10).value = results.tampalanAntGdBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(11).value = results.tampalanAntGdSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(12).value = results.tampalanAntGkBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(13).value = results.tampalanAntGkSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(14).value = results.tampalanPostGdBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(15).value = results.tampalanPostGdSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(16).value = results.tampalanPostGkBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(17).value = results.tampalanPostGkSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(18).value = results.tampalanPostAmgGdBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(19).value = results.tampalanPostAmgGdSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(20).value = results.tampalanPostAmgGkBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(21).value = results.tampalanPostAmgGkSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(22).value = results.inlayOnlayBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(23).value = results.inlayOnlaySemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(24).value = results.jumlahTampalanBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(25).value = results.jumlahTampalanSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(26).value = results.tampalanSementara; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(27).value = results.cabutanGd; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(28).value = results.cabutanGk; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(29).value = results.komplikasiSelepasCabutan; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(30).value = results.penskaleran; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(31).value = results.rawatanLain; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(32).value = results.rawatanEndo; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(33).value = results.rawatanOrtho; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(34).value = results.kesPerubatan; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(35).value = results.absesBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(36).value = results.AbsesSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(37).value = results.cabutanSurgical; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(38).value = results.fraktur; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(39).value = results.trauma; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(40).value = results.pembedahanKecilMulut; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(41).value = results.crownBridgeBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(42).value = results.crownBridgeSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(43).value = results.postCoreBaru; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(44).value = results.postCoreSemula; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(45).value = results.prosthodontikPenuhDentur; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(46).value = results.prosthodontikPenuhPesakit; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(47).value = results.prosthodontikSebahagianDentur; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(48).value = results.prosthodontikSebahagianPesakit; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(49).value = results.immediateDenture; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(50).value = results.pembaikanDenture; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(51).value = results.kesSelesai; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(52).value = results.xrayDiambil; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(53).value = results.pesakitDisaringOC; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(54).value = results.pesakitdirujukLesiMulut; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(55).value = results.pesakitDirujukTabiat; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(56).value = results.rokokSaringNasihat; //C48          Bukan Warganegara Ulangan
        rowNew30.getCell(57).value = results.rokokIntervensi; //C48          Bukan Warganegara Ulangan
        rowNew30.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PG207.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG211 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGS211.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PG211');

        //PG211

        //Kategori bawah 1 Tahun (baru)
        let rowNew = worksheet.getRow(13);
        rowNew.getCell(3).value = results.kedatanganTahunSemasa; //C13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(4).value = results.lelaki; //D13	Kategori bawah 1 Tahun (baru)
        rowNew.getCell(5).value = results.perempuan; //E13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(6).value = results.melayu; //F13	Kategori bawah 1 Tahun (baru)
        rowNew.getCell(7).value = results.cina; //G13	Kategori bawah 1 Tahun (baru)
        rowNew.getCell(8).value = results.india; //H13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(9).value = results.bajau; //I13	Kategori bawah 1 Tahun (baru)
        rowNew.getCell(10).value = results.dusun; //J13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(11).value = results.kadazan; //K13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(12).value = results.murut; //L13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(13).value = results.bumiputeraSabahLain; //M13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(14).value = results.melanau; //N13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(15).value = results.kedayan; //O13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(16).value = results.iban; //P13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(17).value = results.bidayuh; //Q13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(18).value = results.bumiputeraSarawakLain; //R13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(19).value = results.orangAsliSemenanjung; //S13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(20).value = results.lainLainKaum; //T13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(21).value = results.bukanWarganegara; //U13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(22).value = results.ibuMengandung; //V13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(23).value = results.bersekolah; //W13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(24).value = results.orangKurangUpaya; //X13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(25).value = results.pesaraKerajaan; //Y13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(26).value = results.pesaraATM; //Z13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(27).value = results.rujukanDalaman; //AA13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(30).value = results.rujukanHospKerajaan; //AD13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(31).value = results.rujukanSwasta; //AE13 Kategori bawah 1 Tahun (baru)
        rowNew.getCell(32).value = results.rujukanLainLain; //AF13 Kategori bawah 1 Tahun (baru)
        rowNew.commit();

        //Kategori bawah 1 Tahun (ulangan)
        let rowNew2 = worksheet.getRow(14);
        rowNew2.getCell(3).value = results.kedatanganTahunSemasa; //C14	Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(4).value = results.lelaki; //D14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(5).value = results.perempuan; //E14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(6).value = results.melayu; //F14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(7).value = results.cina; //G14	Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(8).value = results.india; //H14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(9).value = results.bajau; //I14	Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(10).value = results.dusun; //J14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(11).value = results.kadazan; //K14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(12).value = results.murut; //L14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(13).value = results.bumiputeraSabahLain; //M14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(14).value = results.melanau; //N14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(15).value = results.kedayan; //O14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(16).value = results.iban; //P14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(17).value = results.bidayuh; //Q14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(18).value = results.bumiputeraSarawakLain; //R14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(19).value = results.orangAsliSemenanjung; //S14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(20).value = results.lainLainKaum; //T14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(21).value = results.bukanWarganegara; //U14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(22).value = results.ibuMengandung; //V14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(23).value = results.bersekolah; //W14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(24).value = results.orangKurangUpaya; //X14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(25).value = results.pesaraKerajaan; //Y14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(26).value = results.pesaraATM; //Z14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(27).value = results.rujukanDalaman; //AA14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(30).value = results.rujukanHospKerajaan; //AD14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(31).value = results.rujukanSwasta; //AE14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.getCell(32).value = results.rujukanLainLain; //AF14 Kategori bawah 1 Tahun (ulangan)
        rowNew2.commit();

        //Kategori Umur 1 hingga 4 Tahun (Baru)
        let rowNew3 = worksheet.getRow(15);
        rowNew3.getCell(3).value = results.kedatanganTahunSemasa; //C15	Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(4).value = results.lelaki; //D15	Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(5).value = results.perempuan; //E15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(6).value = results.melayu; //F15	Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(7).value = results.cina; //G15	Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(8).value = results.india; //H15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(9).value = results.bajau; //I15	Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(10).value = results.dusun; //J15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(11).value = results.kadazan; //K15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(12).value = results.murut; //L15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(13).value = results.bumiputeraSabahLain; //M15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(14).value = results.melanau; //N15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(15).value = results.kedayan; //O15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(16).value = results.iban; //P15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(17).value = results.bidayuh; //Q15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(18).value = results.bumiputeraSarawakLain; //R15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(19).value = results.orangAsliSemenanjung; //S15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(20).value = results.lainLainKaum; //T15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(21).value = results.bukanWarganegara; //U15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(22).value = results.ibuMengandung; //V15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(23).value = results.bersekolah; //W15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(24).value = results.orangKurangUpaya; //X15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(25).value = results.pesaraKerajaan; //Y15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(26).value = results.pesaraATM; //Z15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(27).value = results.rujukanDalaman; //AA15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(30).value = results.rujukanHospKerajaan; //AD15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(31).value = results.rujukanSwasta; //AE15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.getCell(32).value = results.rujukanLainLain; //AF15 Kategori Umur 1 hingga 4 Tahun (Baru)
        rowNew3.commit();

        //Kategori Umur 1 hingga 4 Tahun (Ulangan)
        let rowNew4 = worksheet.getRow(16);
        rowNew4.getCell(3).value = results.kedatanganTahunSemasa; //C16	Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(4).value = results.lelaki; //D16	Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(5).value = results.perempuan; //E16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(6).value = results.melayu; //F16	Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(7).value = results.cina; //G16	Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(8).value = results.india; //H16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(9).value = results.bajau; //I16	Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(10).value = results.dusun; //J16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(11).value = results.kadazan; //K16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(12).value = results.murut; //L16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(13).value = results.bumiputeraSabahLain; //M16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(14).value = results.melanau; //N16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(15).value = results.kedayan; //O16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(16).value = results.iban; //P16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(17).value = results.bidayuh; //Q16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(18).value = results.bumiputeraSarawakLain; //R16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(19).value = results.orangAsliSemenanjung; //S16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(20).value = results.lainLainKaum; //T16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(21).value = results.bukanWarganegara; //U16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(22).value = results.ibuMengandung; //V16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(23).value = results.bersekolah; //W16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(24).value = results.orangKurangUpaya; //X16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(25).value = results.pesaraKerajaan; //Y16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(26).value = results.pesaraATM; //Z16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(27).value = results.rujukanDalaman; //AA16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(30).value = results.rujukanHospKerajaan; //AD16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(31).value = results.rujukanSwasta; //AE16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.getCell(32).value = results.rujukanLainLain; //AF16 Kategori Umur 1 hingga 4 Tahun (Ulangan)
        rowNew4.commit();

        //Kategori Umur 5 hingga 6 Tahun (Baru)
        let rowNew5 = worksheet.getRow(17);
        rowNew5.getCell(3).value = results.kedatanganTahunSemasa; //C17	Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(4).value = results.lelaki; //D17	Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(5).value = results.perempuan; //E17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(6).value = results.melayu; //F17	Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(7).value = results.cina; //G17	Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(8).value = results.india; //H17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(9).value = results.bajau; //I17	Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(10).value = results.dusun; //J17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(11).value = results.kadazan; //K17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(12).value = results.murut; //L17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(13).value = results.bumiputeraSabahLain; //M17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(14).value = results.melanau; //N17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(15).value = results.kedayan; //O17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(16).value = results.iban; //P17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(17).value = results.bidayuh; //Q17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(18).value = results.bumiputeraSarawakLain; //R17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(19).value = results.orangAsliSemenanjung; //S17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(20).value = results.lainLainKaum; //T17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(21).value = results.bukanWarganegara; //U17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(22).value = results.ibuMengandung; //V17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(23).value = results.bersekolah; //W17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(24).value = results.orangKurangUpaya; //X17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(25).value = results.pesaraKerajaan; //Y17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(26).value = results.pesaraATM; //Z17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(27).value = results.rujukanDalaman; //AA17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(30).value = results.rujukanHospKerajaan; //AD17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(31).value = results.rujukanSwasta; //AE17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.getCell(32).value = results.rujukanLainLain; //AF17 Kategori Umur 5 hingga 6 Tahun (Baru)
        rowNew5.commit();

        //Kategori Umur 5 hingga 6 Tahun (Ulangan)
        let rowNew6 = worksheet.getRow(18);
        rowNew6.getCell(3).value = results.kedatanganTahunSemasa; //C18	Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(4).value = results.lelaki; //D18	Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(5).value = results.perempuan; //E18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(6).value = results.melayu; //F18	Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(7).value = results.cina; //G18	Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(8).value = results.india; //H18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(9).value = results.bajau; //I18	Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(10).value = results.dusun; //J18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(11).value = results.kadazan; //K18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(12).value = results.murut; //L18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(13).value = results.bumiputeraSabahLain; //M18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(14).value = results.melanau; //N18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(15).value = results.kedayan; //O18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(16).value = results.iban; //P18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(17).value = results.bidayuh; //Q18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(18).value = results.bumiputeraSarawakLain; //R18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(19).value = results.orangAsliSemenanjung; //S18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(20).value = results.lainLainKaum; //T18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(21).value = results.bukanWarganegara; //U18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(22).value = results.ibuMengandung; //V18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(23).value = results.bersekolah; //W18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(24).value = results.orangKurangUpaya; //X18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(25).value = results.pesaraKerajaan; //Y18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(26).value = results.pesaraATM; //Z18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(27).value = results.rujukanDalaman; //AA18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(30).value = results.rujukanHospKerajaan; //AD18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(31).value = results.rujukanSwasta; //AE18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.getCell(32).value = results.rujukanLainLain; //AF18 Kategori Umur 5 hingga 6 Tahun (Ulangan)
        rowNew6.commit();

        //Kategori Umur 7 hingga 9 Tahun (Baru)
        let rowNew7 = worksheet.getRow(19);
        rowNew7.getCell(3).value = results.kedatanganTahunSemasa; //C19	Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(4).value = results.lelaki; //D19	Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(5).value = results.perempuan; //E19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(6).value = results.melayu; //F19	Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(7).value = results.cina; //G19	Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(8).value = results.india; //H19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(9).value = results.bajau; //I19	Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(10).value = results.dusun; //J19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(11).value = results.kadazan; //K19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(12).value = results.murut; //L19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(13).value = results.bumiputeraSabahLain; //M19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(14).value = results.melanau; //N19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(15).value = results.kedayan; //O19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(16).value = results.iban; //P19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(17).value = results.bidayuh; //Q19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(18).value = results.bumiputeraSarawakLain; //R19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(19).value = results.orangAsliSemenanjung; //S19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(20).value = results.lainLainKaum; //T19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(21).value = results.bukanWarganegara; //U19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(22).value = results.ibuMengandung; //V19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(23).value = results.bersekolah; //W19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(24).value = results.orangKurangUpaya; //X19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(25).value = results.pesaraKerajaan; //Y19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(26).value = results.pesaraATM; //Z19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(27).value = results.rujukanDalaman; //AA19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(30).value = results.rujukanHospKerajaan; //AD19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(31).value = results.rujukanSwasta; //AE19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.getCell(32).value = results.rujukanLainLain; //AF19 Kategori Umur 7 hingga 9 Tahun (Baru)
        rowNew7.commit();

        //Kategori Umur 7 hingga 9 Tahun (Ulangan)
        let rowNew8 = worksheet.getRow(20);
        rowNew8.getCell(3).value = results.kedatanganTahunSemasa; //C20	Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(4).value = results.lelaki; //D20	Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(5).value = results.perempuan; //E20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(6).value = results.melayu; //F20	Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(7).value = results.cina; //G20	Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(8).value = results.india; //H20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(9).value = results.bajau; //I20	Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(10).value = results.dusun; //J20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(11).value = results.kadazan; //K20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(12).value = results.murut; //L20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(13).value = results.bumiputeraSabahLain; //M20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(14).value = results.melanau; //N20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(15).value = results.kedayan; //O20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(16).value = results.iban; //P20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(17).value = results.bidayuh; //Q20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(18).value = results.bumiputeraSarawakLain; //R20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(19).value = results.orangAsliSemenanjung; //S20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(20).value = results.lainLainKaum; //T20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(21).value = results.bukanWarganegara; //U20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(22).value = results.ibuMengandung; //V20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(23).value = results.bersekolah; //W20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(24).value = results.orangKurangUpaya; //X20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(25).value = results.pesaraKerajaan; //Y20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(26).value = results.pesaraATM; //Z20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(27).value = results.rujukanDalaman; //AA20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(30).value = results.rujukanHospKerajaan; //AD20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(31).value = results.rujukanSwasta; //AE20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.getCell(32).value = results.rujukanLainLain; //AF20 Kategori Umur 7 hingga 9 Tahun (Ulangan)
        rowNew8.commit();

        //Kategori Umur 10 hingga 12 Tahun (Baru)
        let rowNew9 = worksheet.getRow(21);
        rowNew9.getCell(3).value = results.kedatanganTahunSemasa; //C21	Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(4).value = results.lelaki; //D21	Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(5).value = results.perempuan; //E21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(6).value = results.melayu; //F21	Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(7).value = results.cina; //G21	Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(8).value = results.india; //H21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(9).value = results.bajau; //I21	Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(10).value = results.dusun; //J21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(11).value = results.kadazan; //K21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(12).value = results.murut; //L21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(13).value = results.bumiputeraSabahLain; //M21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(14).value = results.melanau; //N21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(15).value = results.kedayan; //O21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(16).value = results.iban; //P21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(17).value = results.bidayuh; //Q21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(18).value = results.bumiputeraSarawakLain; //R21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(19).value = results.orangAsliSemenanjung; //S21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(20).value = results.lainLainKaum; //T21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(21).value = results.bukanWarganegara; //U21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(22).value = results.ibuMengandung; //V21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(23).value = results.bersekolah; //W21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(24).value = results.orangKurangUpaya; //X21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(25).value = results.pesaraKerajaan; //Y21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(26).value = results.pesaraATM; //Z21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(27).value = results.rujukanDalaman; //AA21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(30).value = results.rujukanHospKerajaan; //AD21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(31).value = results.rujukanSwasta; //AE21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.getCell(32).value = results.rujukanLainLain; //AF21 Kategori Umur 10 hingga 12 Tahun (Baru)
        rowNew9.commit();

        //Kategori Umur 10 hingga 12 Tahun (Ulangan)
        let rowNew10 = worksheet.getRow(22);
        rowNew10.getCell(3).value = results.kedatanganTahunSemasa; //C22	Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(4).value = results.lelaki; //D22	Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(5).value = results.perempuan; //E22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(6).value = results.melayu; //F22	Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(7).value = results.cina; //G22	Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(8).value = results.india; //H22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(9).value = results.bajau; //I22	Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(10).value = results.dusun; //J22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(11).value = results.kadazan; //K22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(12).value = results.murut; //L22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(13).value = results.bumiputeraSabahLain; //M22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(14).value = results.melanau; //N22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(15).value = results.kedayan; //O22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(16).value = results.iban; //P22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(17).value = results.bidayuh; //Q22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(18).value = results.bumiputeraSarawakLain; //R22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(19).value = results.orangAsliSemenanjung; //S22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(20).value = results.lainLainKaum; //T22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(21).value = results.bukanWarganegara; //U22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(22).value = results.ibuMengandung; //V22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(23).value = results.bersekolah; //W22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(24).value = results.orangKurangUpaya; //X22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(25).value = results.pesaraKerajaan; //Y22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(26).value = results.pesaraATM; //Z22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(27).value = results.rujukanDalaman; //AA22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(30).value = results.rujukanHospKerajaan; //AD22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(31).value = results.rujukanSwasta; //AE22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.getCell(32).value = results.rujukanLainLain; //AF22 Kategori Umur 10 hingga 12 Tahun (Ulangan)
        rowNew10.commit();

        //Kategori Umur 13 hingga 14 Tahun (Baru)
        let rowNew11 = worksheet.getRow(23);
        rowNew11.getCell(3).value = results.kedatanganTahunSemasa; //C23	Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(4).value = results.lelaki; //D23	Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(5).value = results.perempuan; //E23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(6).value = results.melayu; //F23	Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(7).value = results.cina; //G23	Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(8).value = results.india; //H23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(9).value = results.bajau; //I23	Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(10).value = results.dusun; //J23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(11).value = results.kadazan; //K23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(12).value = results.murut; //L23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(13).value = results.bumiputeraSabahLain; //M23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(14).value = results.melanau; //N23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(15).value = results.kedayan; //O23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(16).value = results.iban; //P23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(17).value = results.bidayuh; //Q23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(18).value = results.bumiputeraSarawakLain; //R23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(19).value = results.orangAsliSemenanjung; //S23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(20).value = results.lainLainKaum; //T23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(21).value = results.bukanWarganegara; //U23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(22).value = results.ibuMengandung; //V23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(23).value = results.bersekolah; //W23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(24).value = results.orangKurangUpaya; //X23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(25).value = results.pesaraKerajaan; //Y23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(26).value = results.pesaraATM; //Z23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(27).value = results.rujukanDalaman; //AA23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(30).value = results.rujukanHospKerajaan; //AD23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(31).value = results.rujukanSwasta; //AE23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.getCell(32).value = results.rujukanLainLain; //AF23 Kategori Umur 13 hingga 14 Tahun (Baru)
        rowNew11.commit();

        //Kategori Umur 13 hingga 14 Tahun (Ulangan)
        let rowNew12 = worksheet.getRow(24);
        rowNew12.getCell(3).value = results.kedatanganTahunSemasa; //C24	Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(4).value = results.lelaki; //D24	Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(5).value = results.perempuan; //E24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(6).value = results.melayu; //F24	Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(7).value = results.cina; //G24	Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(8).value = results.india; //H24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(9).value = results.bajau; //I24	Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(10).value = results.dusun; //J24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(11).value = results.kadazan; //K24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(12).value = results.murut; //L24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(13).value = results.bumiputeraSabahLain; //M24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(14).value = results.melanau; //N24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(15).value = results.kedayan; //O24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(16).value = results.iban; //P24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(17).value = results.bidayuh; //Q24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(18).value = results.bumiputeraSarawakLain; //R24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(19).value = results.orangAsliSemenanjung; //S24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(20).value = results.lainLainKaum; //T24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(21).value = results.bukanWarganegara; //U24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(22).value = results.ibuMengandung; //V24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(23).value = results.bersekolah; //W24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(24).value = results.orangKurangUpaya; //X24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(25).value = results.pesaraKerajaan; //Y24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(26).value = results.pesaraATM; //Z24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(27).value = results.rujukanDalaman; //AA24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(30).value = results.rujukanHospKerajaan; //AD24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(31).value = results.rujukanSwasta; //AE24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.getCell(32).value = results.rujukanLainLain; //AF24 Kategori Umur 13 hingga 14 Tahun (Ulangan)
        rowNew12.commit();

        //Kategori Umur 15 hingga 17 Tahun (Baru)
        let rowNew13 = worksheet.getRow(25);
        rowNew13.getCell(3).value = results.kedatanganTahunSemasa; //C25	Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(4).value = results.lelaki; //D25	Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(5).value = results.perempuan; //E25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(6).value = results.melayu; //F25	Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(7).value = results.cina; //G25	Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(8).value = results.india; //H25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(9).value = results.bajau; //I25	Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(10).value = results.dusun; //J25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(11).value = results.kadazan; //K25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(12).value = results.murut; //L25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(13).value = results.bumiputeraSabahLain; //M25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(14).value = results.melanau; //N25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(15).value = results.kedayan; //O25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(16).value = results.iban; //P25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(17).value = results.bidayuh; //Q25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(18).value = results.bumiputeraSarawakLain; //R25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(19).value = results.orangAsliSemenanjung; //S25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(20).value = results.lainLainKaum; //T25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(21).value = results.bukanWarganegara; //U25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(22).value = results.ibuMengandung; //V25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(23).value = results.bersekolah; //W25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(24).value = results.orangKurangUpaya; //X25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(25).value = results.pesaraKerajaan; //Y25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(26).value = results.pesaraATM; //Z25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(27).value = results.rujukanDalaman; //AA25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(30).value = results.rujukanHospKerajaan; //AD25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(31).value = results.rujukanSwasta; //AE25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.getCell(32).value = results.rujukanLainLain; //AF25 Kategori Umur 15 hingga 17 Tahun (Baru)
        rowNew13.commit();

        //Kategori Umur 15 hingga 17 Tahun (Ulangan)
        let rowNew14 = worksheet.getRow(26);
        rowNew14.getCell(3).value = results.kedatanganTahunSemasa; //C26	Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(4).value = results.lelaki; //D26	Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(5).value = results.perempuan; //E26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(6).value = results.melayu; //F26	Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(7).value = results.cina; //G26	Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(8).value = results.india; //H26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(9).value = results.bajau; //I26	Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(10).value = results.dusun; //J26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(11).value = results.kadazan; //K26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(12).value = results.murut; //L26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(13).value = results.bumiputeraSabahLain; //M26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(14).value = results.melanau; //N26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(15).value = results.kedayan; //O26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(16).value = results.iban; //P26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(17).value = results.bidayuh; //Q26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(18).value = results.bumiputeraSarawakLain; //R26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(19).value = results.orangAsliSemenanjung; //S26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(20).value = results.lainLainKaum; //T26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(21).value = results.bukanWarganegara; //U26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(22).value = results.ibuMengandung; //V26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(23).value = results.bersekolah; //W26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(24).value = results.orangKurangUpaya; //X26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(25).value = results.pesaraKerajaan; //Y26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(26).value = results.pesaraATM; //Z26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(27).value = results.rujukanDalaman; //AA26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(30).value = results.rujukanHospKerajaan; //AD26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(31).value = results.rujukanSwasta; //AE26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.getCell(32).value = results.rujukanLainLain; //AF26 Kategori Umur 15 hingga 17 Tahun (Ulangan)
        rowNew14.commit();

        //Kategori Umur 18 hingga 19 Tahun (Baru)
        let rowNew15 = worksheet.getRow(27);
        rowNew15.getCell(3).value = results.kedatanganTahunSemasa; //C27	Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(4).value = results.lelaki; //D27	Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(5).value = results.perempuan; //E27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(6).value = results.melayu; //F27	Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(7).value = results.cina; //G27	Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(8).value = results.india; //H27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(9).value = results.bajau; //I27	Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(10).value = results.dusun; //J27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(11).value = results.kadazan; //K27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(12).value = results.murut; //L27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(13).value = results.bumiputeraSabahLain; //M27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(14).value = results.melanau; //N27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(15).value = results.kedayan; //O27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(16).value = results.iban; //P27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(17).value = results.bidayuh; //Q27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(18).value = results.bumiputeraSarawakLain; //R27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(19).value = results.orangAsliSemenanjung; //S27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(20).value = results.lainLainKaum; //T27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(21).value = results.bukanWarganegara; //U27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(22).value = results.ibuMengandung; //V27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(23).value = results.bersekolah; //W27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(24).value = results.orangKurangUpaya; //X27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(25).value = results.pesaraKerajaan; //Y27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(26).value = results.pesaraATM; //Z27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(27).value = results.rujukanDalaman; //AA27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(30).value = results.rujukanHospKerajaan; //AD27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(31).value = results.rujukanSwasta; //AE27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.getCell(32).value = results.rujukanLainLain; //AF27 Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew15.commit();

        // Kategori Umur 18 hingga 19 Tahun (Ulangan)
        let rowNew16 = worksheet.getRow(28);
        rowNew16.getCell(3).value = results.kedatanganTahunSemasa; //C28	Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(4).value = results.lelaki; //D28	Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(5).value = results.perempuan; //E28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(6).value = results.melayu; //F28	Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(7).value = results.cina; //G28	Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(8).value = results.india; //H28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(9).value = results.bajau; //I28	Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(10).value = results.dusun; //J28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(11).value = results.kadazan; //K28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(12).value = results.murut; //L28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(13).value = results.bumiputeraSabahLain; //M28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(14).value = results.melanau; //N28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(15).value = results.kedayan; //O28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(16).value = results.iban; //P28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(17).value = results.bidayuh; //Q28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(18).value = results.bumiputeraSarawakLain; //R28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(19).value = results.orangAsliSemenanjung; //S28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(20).value = results.lainLainKaum; //T28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(21).value = results.bukanWarganegara; //U28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(22).value = results.ibuMengandung; //V28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(23).value = results.bersekolah; //W28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(24).value = results.orangKurangUpaya; //X28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(25).value = results.pesaraKerajaan; //Y28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(26).value = results.pesaraATM; //Z28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(27).value = results.rujukanDalaman; //AA28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(30).value = results.rujukanHospKerajaan; //AD28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(31).value = results.rujukanSwasta; //AE28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.getCell(32).value = results.rujukanLainLain; //AF28 Kategori Umur 18 hingga 19 Tahun (Ulangan)
        rowNew16.commit();

        // Kategori Umur 20 hingga 29 Tahun (Baru)
        let rowNew17 = worksheet.getRow(29);
        rowNew17.getCell(3).value = results.kedatanganTahunSemasa; //C29	Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(4).value = results.lelaki; //D29	Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(5).value = results.perempuan; //E29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(6).value = results.melayu; //F29	Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(7).value = results.cina; //G29	Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(8).value = results.india; //H29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(9).value = results.bajau; //I29	Kategori Umur 18 hingga 19 Tahun (Baru)
        rowNew17.getCell(10).value = results.dusun; //J29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(11).value = results.kadazan; //K29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(12).value = results.murut; //L29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(13).value = results.bumiputeraSabahLain; //M29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(14).value = results.melanau; //N29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(15).value = results.kedayan; //O29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(16).value = results.iban; //P29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(17).value = results.bidayuh; //Q29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(18).value = results.bumiputeraSarawakLain; //R29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(19).value = results.orangAsliSemenanjung; //S29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(20).value = results.lainLainKaum; //T29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(21).value = results.bukanWarganegara; //U29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(22).value = results.ibuMengandung; //V29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(23).value = results.bersekolah; //W29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(24).value = results.orangKurangUpaya; //X29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(25).value = results.pesaraKerajaan; //Y29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(26).value = results.pesaraATM; //Z29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(27).value = results.rujukanDalaman; //AA29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(30).value = results.rujukanHospKerajaan; //AD29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(31).value = results.rujukanSwasta; //AE29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.getCell(32).value = results.rujukanLainLain; //AF29 Kategori Umur 20 hingga 29 Tahun (Baru)
        rowNew17.commit();

        // Kategori Umur 20 hingga 29 Tahun (Ulangan)
        let rowNew18 = worksheet.getRow(30);
        rowNew18.getCell(3).value = results.kedatanganTahunSemasa; //C30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(4).value = results.lelaki; //D30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(5).value = results.perempuan; //E30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(6).value = results.melayu; //F30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(7).value = results.cina; //G30	Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(8).value = results.india; //H30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(9).value = results.bajau; //I30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(10).value = results.dusun; //J30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(11).value = results.kadazan; //K30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(12).value = results.murut; //L30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(13).value = results.bumiputeraSabahLain; //M30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(14).value = results.melanau; //N30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(15).value = results.kedayan; //O30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(16).value = results.iban; //P30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(17).value = results.bidayuh; //Q30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(18).value = results.bumiputeraSarawakLain; //R30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(19).value = results.orangAsliSemenanjung; //S30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(20).value = results.lainLainKaum; //T30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(21).value = results.bukanWarganegara; //U30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(22).value = results.ibuMengandung; //V30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(23).value = results.bersekolah; //W30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(24).value = results.orangKurangUpaya; //X30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(25).value = results.pesaraKerajaan; //Y30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(26).value = results.pesaraATM; //Z30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(27).value = results.rujukanDalaman; //AA30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(30).value = results.rujukanHospKerajaan; //AD30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(31).value = results.rujukanSwasta; //AE30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.getCell(32).value = results.rujukanLainLain; //AF30 Kategori Umur 20 hingga 29 Tahun (Ulangan)
        rowNew18.commit();

        // Kategori Umur 30 hingga 39 Tahun (Baru)
        let rowNew19 = worksheet.getRow(31);
        rowNew19.getCell(3).value = results.kedatanganTahunSemasa; //C31	Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(4).value = results.lelaki; //D31	Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(5).value = results.perempuan; //E31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(6).value = results.melayu; //F31	Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(7).value = results.cina; //G31	Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(8).value = results.india; //H31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(9).value = results.bajau; //I31	Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(10).value = results.dusun; //J31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(11).value = results.kadazan; //K31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(12).value = results.murut; //L31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(13).value = results.bumiputeraSabahLain; //M31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(14).value = results.melanau; //N31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(15).value = results.kedayan; //O31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(16).value = results.iban; //P31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(17).value = results.bidayuh; //Q31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(18).value = results.bumiputeraSarawakLain; //R31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(19).value = results.orangAsliSemenanjung; //S31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(20).value = results.lainLainKaum; //T31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(21).value = results.bukanWarganegara; //U31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(22).value = results.ibuMengandung; //V31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(23).value = results.bersekolah; //W31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(24).value = results.orangKurangUpaya; //X31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(25).value = results.pesaraKerajaan; //Y31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(26).value = results.pesaraATM; //Z31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(27).value = results.rujukanDalaman; //AA31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(30).value = results.rujukanHospKerajaan; //AD31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(31).value = results.rujukanSwasta; //AE31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.getCell(32).value = results.rujukanLainLain; //AF31 Kategori Umur 30 hingga 39 Tahun (Baru)
        rowNew19.commit();

        // Kategori Umur 30 hingga 39 Tahun (Ulangan)
        let rowNew20 = worksheet.getRow(32);
        rowNew20.getCell(3).value = results.kedatanganTahunSemasa; //C32	Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(4).value = results.lelaki; //D32	Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(5).value = results.perempuan; //E32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(6).value = results.melayu; //F32	Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(7).value = results.cina; //G32	Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(8).value = results.india; //H32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(9).value = results.bajau; //I32	Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(10).value = results.dusun; //J32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(11).value = results.kadazan; //K32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(12).value = results.murut; //L32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(13).value = results.bumiputeraSabahLain; //M32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(14).value = results.melanau; //N32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(15).value = results.kedayan; //O32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(16).value = results.iban; //P32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(17).value = results.bidayuh; //Q32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(18).value = results.bumiputeraSarawakLain; //R32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(19).value = results.orangAsliSemenanjung; //S32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(20).value = results.lainLainKaum; //T32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(21).value = results.bukanWarganegara; //U32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(22).value = results.ibuMengandung; //V32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(23).value = results.bersekolah; //W32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(24).value = results.orangKurangUpaya; //X32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(25).value = results.pesaraKerajaan; //Y32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(26).value = results.pesaraATM; //Z32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(27).value = results.rujukanDalaman; //AA32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(30).value = results.rujukanHospKerajaan; //AD32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(31).value = results.rujukanSwasta; //AE32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.getCell(32).value = results.rujukanLainLain; //AF32 Kategori Umur 30 hingga 39 Tahun (Ulangan)
        rowNew20.commit();

        // Kategori Umur 40 hingga 49 Tahun (Baru)
        let rowNew21 = worksheet.getRow(33);
        rowNew21.getCell(3).value = results.kedatanganTahunSemasa; //C33	Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(4).value = results.lelaki; //D33	Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(5).value = results.perempuan; //E33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(6).value = results.melayu; //F33	Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(7).value = results.cina; //G33	Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(8).value = results.india; //H33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(9).value = results.bajau; //I33	Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(10).value = results.dusun; //J33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(11).value = results.kadazan; //K33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(12).value = results.murut; //L33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(13).value = results.bumiputeraSabahLain; //M33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(14).value = results.melanau; //N33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(15).value = results.kedayan; //O33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(16).value = results.iban; //P33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(17).value = results.bidayuh; //Q33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(18).value = results.bumiputeraSarawakLain; //R33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(19).value = results.orangAsliSemenanjung; //S33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(20).value = results.lainLainKaum; //T33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(21).value = results.bukanWarganegara; //U33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(22).value = results.ibuMengandung; //V33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(23).value = results.bersekolah; //W33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(24).value = results.orangKurangUpaya; //X33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(25).value = results.pesaraKerajaan; //Y33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(26).value = results.pesaraATM; //Z33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(27).value = results.rujukanDalaman; //AA33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(30).value = results.rujukanHospKerajaan; //AD33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(31).value = results.rujukanSwasta; //AE33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.getCell(32).value = results.rujukanLainLain; //AF33 Kategori Umur 40 hingga 49 Tahun (Baru)
        rowNew21.commit();

        // Kategori Umur 40 hingga 49 Tahun (Ulangan)
        let rowNew22 = worksheet.getRow(34);
        rowNew22.getCell(3).value = results.kedatanganTahunSemasa; //C34	Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(4).value = results.lelaki; //D34	Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(5).value = results.perempuan; //E34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(6).value = results.melayu; //F34	Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(7).value = results.cina; //G34	Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(8).value = results.india; //H34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(9).value = results.bajau; //I34	Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(10).value = results.dusun; //J34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(11).value = results.kadazan; //K34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(12).value = results.murut; //L34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(13).value = results.bumiputeraSabahLain; //M34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(14).value = results.melanau; //N34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(15).value = results.kedayan; //O34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(16).value = results.iban; //P34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(17).value = results.bidayuh; //Q34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(18).value = results.bumiputeraSarawakLain; //R34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(19).value = results.orangAsliSemenanjung; //S34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(20).value = results.lainLainKaum; //T34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(21).value = results.bukanWarganegara; //U34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(22).value = results.ibuMengandung; //V34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(23).value = results.bersekolah; //W34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(24).value = results.orangKurangUpaya; //X34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(25).value = results.pesaraKerajaan; //Y34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(26).value = results.pesaraATM; //Z34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(27).value = results.rujukanDalaman; //AA34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(30).value = results.rujukanHospKerajaan; //AD34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(31).value = results.rujukanSwasta; //AE34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.getCell(32).value = results.rujukanLainLain; //AF34 Kategori Umur 40 hingga 49 Tahun (Ulangan)
        rowNew22.commit();

        // Kategori Umur 50 hingga 59 Tahun (Baru)
        let rowNew23 = worksheet.getRow(35);
        rowNew23.getCell(3).value = results.kedatanganTahunSemasa; //C35	Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(4).value = results.lelaki; //D35	Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(5).value = results.perempuan; //E35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(6).value = results.melayu; //F35	Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(7).value = results.cina; //G35	Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(8).value = results.india; //H35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(9).value = results.bajau; //I35	Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(10).value = results.dusun; //J35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(11).value = results.kadazan; //K35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(12).value = results.murut; //L35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(13).value = results.bumiputeraSabahLain; //M35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(14).value = results.melanau; //N35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(15).value = results.kedayan; //O35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(16).value = results.iban; //P35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(17).value = results.bidayuh; //Q35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(18).value = results.bumiputeraSarawakLain; //R35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(19).value = results.orangAsliSemenanjung; //S35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(20).value = results.lainLainKaum; //T35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(21).value = results.bukanWarganegara; //U35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(22).value = results.ibuMengandung; //V35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(23).value = results.bersekolah; //W35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(24).value = results.orangKurangUpaya; //X35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(25).value = results.pesaraKerajaan; //Y35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(26).value = results.pesaraATM; //Z35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(27).value = results.rujukanDalaman; //AA35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(30).value = results.rujukanHospKerajaan; //AD35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(31).value = results.rujukanSwasta; //AE35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.getCell(32).value = results.rujukanLainLain; //AF35 Kategori Umur 50 hingga 59 Tahun (Baru)
        rowNew23.commit();

        // Kategori Umur 50 hingga 59 Tahun (Ulangan)
        let rowNew24 = worksheet.getRow(36);
        rowNew24.getCell(3).value = results.kedatanganTahunSemasa; //C36	Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(4).value = results.lelaki; //D36	Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(5).value = results.perempuan; //E36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(6).value = results.melayu; //F36	Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(7).value = results.cina; //G36	Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(8).value = results.india; //H36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(9).value = results.bajau; //I36	Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(10).value = results.dusun; //J36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(11).value = results.kadazan; //K36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(12).value = results.murut; //L36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(13).value = results.bumiputeraSabahLain; //M36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(14).value = results.melanau; //N36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(15).value = results.kedayan; //O36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(16).value = results.iban; //P36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(17).value = results.bidayuh; //Q36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(18).value = results.bumiputeraSarawakLain; //R36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(19).value = results.orangAsliSemenanjung; //S36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(20).value = results.lainLainKaum; //T36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(21).value = results.bukanWarganegara; //U36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(22).value = results.ibuMengandung; //V36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(23).value = results.bersekolah; //W36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(24).value = results.orangKurangUpaya; //X36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(25).value = results.pesaraKerajaan; //Y36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(26).value = results.pesaraATM; //Z36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(27).value = results.rujukanDalaman; //AA36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(30).value = results.rujukanHospKerajaan; //AD36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(31).value = results.rujukanSwasta; //AE36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.getCell(32).value = results.rujukanLainLain; //AF36 Kategori Umur 50 hingga 59 Tahun (Ulangan)
        rowNew24.commit();

        // Kategori Umur 60 Tahun (Baru)
        let rowNew25 = worksheet.getRow(37);
        rowNew25.getCell(3).value = results.kedatanganTahunSemasa; //C37	Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(4).value = results.lelaki; //D37	Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(5).value = results.perempuan; //E37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(6).value = results.melayu; //F37	Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(7).value = results.cina; //G37	Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(8).value = results.india; //H37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(9).value = results.bajau; //I37	Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(10).value = results.dusun; //J37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(11).value = results.kadazan; //K37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(12).value = results.murut; //L37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(13).value = results.bumiputeraSabahLain; //M37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(14).value = results.melanau; //N37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(15).value = results.kedayan; //O37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(16).value = results.iban; //P37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(17).value = results.bidayuh; //Q37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(18).value = results.bumiputeraSarawakLain; //R37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(19).value = results.orangAsliSemenanjung; //S37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(20).value = results.lainLainKaum; //T37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(21).value = results.bukanWarganegara; //U37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(22).value = results.ibuMengandung; //V37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(23).value = results.bersekolah; //W37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(24).value = results.orangKurangUpaya; //X37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(25).value = results.pesaraKerajaan; //Y37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(26).value = results.pesaraATM; //Z37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(27).value = results.rujukanDalaman; //AA37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(30).value = results.rujukanHospKerajaan; //AD37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(31).value = results.rujukanSwasta; //AE37 Kategori Umur 60 Tahun (Baru)
        rowNew25.getCell(32).value = results.rujukanLainLain; //AF37 Kategori Umur 60 Tahun (Baru)
        rowNew25.commit();

        // Kategori Umur 60 Tahun (Ulangan)
        let rowNew26 = worksheet.getRow(38);
        rowNew26.getCell(3).value = results.kedatanganTahunSemasa; //C38	Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(4).value = results.lelaki; //D38	Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(5).value = results.perempuan; //E38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(6).value = results.melayu; //F38	Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(7).value = results.cina; //G38	Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(8).value = results.india; //H38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(9).value = results.bajau; //I38	Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(10).value = results.dusun; //J38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(11).value = results.kadazan; //K38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(12).value = results.murut; //L38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(13).value = results.bumiputeraSabahLain; //M38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(14).value = results.melanau; //N38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(15).value = results.kedayan; //O38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(16).value = results.iban; //P38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(17).value = results.bidayuh; //Q38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(18).value = results.bumiputeraSarawakLain; //R38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(19).value = results.orangAsliSemenanjung; //S38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(20).value = results.lainLainKaum; //T38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(21).value = results.bukanWarganegara; //U38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(22).value = results.ibuMengandung; //V38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(23).value = results.bersekolah; //W38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(24).value = results.orangKurangUpaya; //X38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(25).value = results.pesaraKerajaan; //Y38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(26).value = results.pesaraATM; //Z38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(27).value = results.rujukanDalaman; //AA38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(30).value = results.rujukanHospKerajaan; //AD38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(31).value = results.rujukanSwasta; //AE38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.getCell(32).value = results.rujukanLainLain; //AF38 Kategori Umur 60 Tahun (Ulangan)
        rowNew26.commit();

        // Kategori Umur 61 hingga 64 Tahun (Baru)
        let rowNew27 = worksheet.getRow(39);
        rowNew27.getCell(3).value = results.kedatanganTahunSemasa; //C39	Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(4).value = results.lelaki; //D39	Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(5).value = results.perempuan; //E39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(6).value = results.melayu; //F39	Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(7).value = results.cina; //G39	Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(8).value = results.india; //H39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(9).value = results.bajau; //I39	Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(10).value = results.dusun; //J39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(11).value = results.kadazan; //K39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(12).value = results.murut; //L39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(13).value = results.bumiputeraSabahLain; //M39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(14).value = results.melanau; //N39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(15).value = results.kedayan; //O39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(16).value = results.iban; //P39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(17).value = results.bidayuh; //Q39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(18).value = results.bumiputeraSarawakLain; //R39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(19).value = results.orangAsliSemenanjung; //S39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(20).value = results.lainLainKaum; //T39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(21).value = results.bukanWarganegara; //U39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(22).value = results.ibuMengandung; //V39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(23).value = results.bersekolah; //W39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(24).value = results.orangKurangUpaya; //X39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(25).value = results.pesaraKerajaan; //Y39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(26).value = results.pesaraATM; //Z39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(27).value = results.rujukanDalaman; //AA39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(30).value = results.rujukanHospKerajaan; //AD39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(31).value = results.rujukanSwasta; //AE39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.getCell(32).value = results.rujukanLainLain; //AF39 Kategori Umur 61 hingga 64 Tahun (Baru)
        rowNew27.commit();

        // Kategori Umur 61 hingga 64 Tahun (Ulangan)
        let rowNew28 = worksheet.getRow(40);
        rowNew28.getCell(3).value = results.kedatanganTahunSemasa; //C40	Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(4).value = results.lelaki; //D40	Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(5).value = results.perempuan; //E40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(6).value = results.melayu; //F40	Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(7).value = results.cina; //G40	Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(8).value = results.india; //H40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(9).value = results.bajau; //I40	Kategori Umur 60 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(10).value = results.dusun; //J40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(11).value = results.kadazan; //K40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(12).value = results.murut; //L40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(13).value = results.bumiputeraSabahLain; //M40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(14).value = results.melanau; //N40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(15).value = results.kedayan; //O40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(16).value = results.iban; //P40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(17).value = results.bidayuh; //Q40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(18).value = results.bumiputeraSarawakLain; //R40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(19).value = results.orangAsliSemenanjung; //S40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(20).value = results.lainLainKaum; //T40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(21).value = results.bukanWarganegara; //U40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(22).value = results.ibuMengandung; //V40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(23).value = results.bersekolah; //W40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(24).value = results.orangKurangUpaya; //X40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(25).value = results.pesaraKerajaan; //Y40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(26).value = results.pesaraATM; //Z40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(27).value = results.rujukanDalaman; //AA40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(30).value = results.rujukanHospKerajaan; //AD40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(31).value = results.rujukanSwasta; //AE40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.getCell(32).value = results.rujukanLainLain; //AF40 Kategori Umur 61 hingga 64 Tahun (Ulangan)
        rowNew28.commit();

        // Kategori Umur 65 tahun (Baru)
        let rowNew29 = worksheet.getRow(41);
        rowNew29.getCell(3).value = results.kedatanganTahunSemasa; //C41	Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(4).value = results.lelaki; //D41	Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(5).value = results.perempuan; //E41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(6).value = results.melayu; //F41	Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(7).value = results.cina; //G41	Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(8).value = results.india; //H41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(9).value = results.bajau; //I41	Kategori Umur 65 Tahun (Baru)
        rowNew29.getCell(10).value = results.dusun; //J41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(11).value = results.kadazan; //K41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(12).value = results.murut; //L41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(13).value = results.bumiputeraSabahLain; //M41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(14).value = results.melanau; //N41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(15).value = results.kedayan; //O41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(16).value = results.iban; //P41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(17).value = results.bidayuh; //Q41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(18).value = results.bumiputeraSarawakLain; //R41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(19).value = results.orangAsliSemenanjung; //S41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(20).value = results.lainLainKaum; //T41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(21).value = results.bukanWarganegara; //U41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(22).value = results.ibuMengandung; //V41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(23).value = results.bersekolah; //W41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(24).value = results.orangKurangUpaya; //X41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(25).value = results.pesaraKerajaan; //Y41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(26).value = results.pesaraATM; //Z41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(27).value = results.rujukanDalaman; //AA41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(30).value = results.rujukanHospKerajaan; //AD41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(31).value = results.rujukanSwasta; //AE41 Kategori Umur 65 tahun (Baru)
        rowNew29.getCell(32).value = results.rujukanLainLain; //AF41 Kategori Umur 65 tahun (Baru)
        rowNew29.commit();

        // Kategori Umur 65 tahun (Ulangan)
        let rowNew30 = worksheet.getRow(42);
        rowNew30.getCell(3).value = results.kedatanganTahunSemasa; //C42	Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(4).value = results.lelaki; //D42	Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(5).value = results.perempuan; //E42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(6).value = results.melayu; //F42	Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(7).value = results.cina; //G42	Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(8).value = results.india; //H42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(9).value = results.bajau; //I42	Kategori Umur 65 Tahun (Ulangan)
        rowNew30.getCell(10).value = results.dusun; //J42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(11).value = results.kadazan; //K42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(12).value = results.murut; //L42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(13).value = results.bumiputeraSabahLain; //M42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(14).value = results.melanau; //N42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(15).value = results.kedayan; //O42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(16).value = results.iban; //P42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(17).value = results.bidayuh; //Q42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(18).value = results.bumiputeraSarawakLain; //R42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(19).value = results.orangAsliSemenanjung; //S42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(20).value = results.lainLainKaum; //T42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(21).value = results.bukanWarganegara; //U42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(22).value = results.ibuMengandung; //V42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(23).value = results.bersekolah; //W42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(24).value = results.orangKurangUpaya; //X42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(25).value = results.pesaraKerajaan; //Y42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(26).value = results.pesaraATM; //Z42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(27).value = results.rujukanDalaman; //AA42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(30).value = results.rujukanHospKerajaan; //AD42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(31).value = results.rujukanSwasta; //AE42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.getCell(32).value = results.rujukanLainLain; //AF42 Kategori Umur 65 tahun (Ulangan)
        rowNew30.commit();

        // Kategori Umur 66 hingga 69 Tahun (Baru)
        let rowNew31 = worksheet.getRow(43);
        rowNew31.getCell(3).value = results.kedatanganTahunSemasa; //C43	Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(4).value = results.lelaki; //D43	Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(5).value = results.perempuan; //E43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(6).value = results.melayu; //F43	Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(7).value = results.cina; //G43	Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(8).value = results.india; //H43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(9).value = results.bajau; //I43	Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(10).value = results.dusun; //J43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(11).value = results.kadazan; //K43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(12).value = results.murut; //L43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(13).value = results.bumiputeraSabahLain; //M43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(14).value = results.melanau; //N43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(15).value = results.kedayan; //O43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(16).value = results.iban; //P43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(17).value = results.bidayuh; //Q43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(18).value = results.bumiputeraSarawakLain; //R43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(19).value = results.orangAsliSemenanjung; //S43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(20).value = results.lainLainKaum; //T43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(21).value = results.bukanWarganegara; //U43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(22).value = results.ibuMengandung; //V43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(23).value = results.bersekolah; //W43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(24).value = results.orangKurangUpaya; //X43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(25).value = results.pesaraKerajaan; //Y43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(26).value = results.pesaraATM; //Z43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(27).value = results.rujukanDalaman; //AA43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(30).value = results.rujukanHospKerajaan; //AD43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(31).value = results.rujukanSwasta; //AE43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.getCell(32).value = results.rujukanLainLain; //AF43 Kategori Umur 66 hingga 69 Tahun (Baru)
        rowNew31.commit();

        // Kategori Umur 66 hingga 69 Tahun (Ulangan)
        let rowNew32 = worksheet.getRow(44);
        rowNew32.getCell(3).value = results.kedatanganTahunSemasa; //C44	Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(4).value = results.lelaki; //D44	Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(5).value = results.perempuan; //E44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(6).value = results.melayu; //F44	Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(7).value = results.cina; //G44	Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(8).value = results.india; //H44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(9).value = results.bajau; //I44	Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(10).value = results.dusun; //J44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(11).value = results.kadazan; //K44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(12).value = results.murut; //L44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(13).value = results.bumiputeraSabahLain; //M44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(14).value = results.melanau; //N44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(15).value = results.kedayan; //O44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(16).value = results.iban; //P44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(17).value = results.bidayuh; //Q44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(18).value = results.bumiputeraSarawakLain; //R44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(19).value = results.orangAsliSemenanjung; //S44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(20).value = results.lainLainKaum; //T44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(21).value = results.bukanWarganegara; //U44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(22).value = results.ibuMengandung; //V44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(23).value = results.bersekolah; //W44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(24).value = results.orangKurangUpaya; //X44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(25).value = results.pesaraKerajaan; //Y44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(26).value = results.pesaraATM; //Z44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(27).value = results.rujukanDalaman; //AA44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(30).value = results.rujukanHospKerajaan; //AD44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(31).value = results.rujukanSwasta; //AE44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.getCell(32).value = results.rujukanLainLain; //AF44 Kategori Umur 66 hingga 69 Tahun (Ulangan)
        rowNew32.commit();

        // Kategori Umur 70 hingga 74 Tahun (Baru)
        let rowNew33 = worksheet.getRow(45);
        rowNew33.getCell(3).value = results.kedatanganTahunSemasa; //C45	Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(4).value = results.lelaki; //D45	Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(5).value = results.perempuan; //E45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(6).value = results.melayu; //F45	Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(7).value = results.cina; //G45	Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(8).value = results.india; //H45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(9).value = results.bajau; //I45	Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(10).value = results.dusun; //J45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(11).value = results.kadazan; //K45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(12).value = results.murut; //L45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(13).value = results.bumiputeraSabahLain; //M45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(14).value = results.melanau; //N45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(15).value = results.kedayan; //O45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(16).value = results.iban; //P45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(17).value = results.bidayuh; //Q45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(18).value = results.bumiputeraSarawakLain; //R45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(19).value = results.orangAsliSemenanjung; //S45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(20).value = results.lainLainKaum; //T45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(21).value = results.bukanWarganegara; //U45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(22).value = results.ibuMengandung; //V45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(23).value = results.bersekolah; //W45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(24).value = results.orangKurangUpaya; //X45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(25).value = results.pesaraKerajaan; //Y45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(26).value = results.pesaraATM; //Z45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(27).value = results.rujukanDalaman; //AA45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(30).value = results.rujukanHospKerajaan; //AD45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(31).value = results.rujukanSwasta; //AE45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.getCell(32).value = results.rujukanLainLain; //AF45 Kategori Umur 70 hingga 74 Tahun (Baru)
        rowNew33.commit();

        // Kategori Umur 70 hingga 74 Tahun (Ulangan)
        let rowNew34 = worksheet.getRow(46);
        rowNew34.getCell(3).value = results.kedatanganTahunSemasa; //C46	Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(4).value = results.lelaki; //D46	Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(5).value = results.perempuan; //E46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(6).value = results.melayu; //F46	Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(7).value = results.cina; //G46	Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(8).value = results.india; //H46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(9).value = results.bajau; //I46	Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(10).value = results.dusun; //J46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(11).value = results.kadazan; //K46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(12).value = results.murut; //L46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(13).value = results.bumiputeraSabahLain; //M46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(14).value = results.melanau; //N46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(15).value = results.kedayan; //O46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(16).value = results.iban; //P46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(17).value = results.bidayuh; //Q46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(18).value = results.bumiputeraSarawakLain; //R46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(19).value = results.orangAsliSemenanjung; //S46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(20).value = results.lainLainKaum; //T46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(21).value = results.bukanWarganegara; //U46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(22).value = results.ibuMengandung; //V46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(23).value = results.bersekolah; //W46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(24).value = results.orangKurangUpaya; //X46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(25).value = results.pesaraKerajaan; //Y46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(26).value = results.pesaraATM; //Z46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(27).value = results.rujukanDalaman; //AA46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(30).value = results.rujukanHospKerajaan; //AD46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(31).value = results.rujukanSwasta; //AE46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.getCell(32).value = results.rujukanLainLain; //AF46 Kategori Umur 70 hingga 74 Tahun (Ulangan)
        rowNew34.commit();

        // Kategori Umur 75 tahun atau lebih (Baru)
        let rowNew35 = worksheet.getRow(47);
        rowNew35.getCell(3).value = results.kedatanganTahunSemasa; //C47	Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(4).value = results.lelaki; //D47	Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(5).value = results.perempuan; //E47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(6).value = results.melayu; //F47	Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(7).value = results.cina; //G47	Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(8).value = results.india; //H47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(9).value = results.bajau; //I47	Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(10).value = results.dusun; //J47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(11).value = results.kadazan; //K47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(12).value = results.murut; //L47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(13).value = results.bumiputeraSabahLain; //M47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(14).value = results.melanau; //N47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(15).value = results.kedayan; //O47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(16).value = results.iban; //P47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(17).value = results.bidayuh; //Q47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(18).value = results.bumiputeraSarawakLain; //R47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(19).value = results.orangAsliSemenanjung; //S47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(20).value = results.lainLainKaum; //T47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(21).value = results.bukanWarganegara; //U47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(22).value = results.ibuMengandung; //V47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(23).value = results.bersekolah; //W47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(24).value = results.orangKurangUpaya; //X47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(25).value = results.pesaraKerajaan; //Y47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(26).value = results.pesaraATM; //Z47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(27).value = results.rujukanDalaman; //AA47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(30).value = results.rujukanHospKerajaan; //AD47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(31).value = results.rujukanSwasta; //AE47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.getCell(32).value = results.rujukanLainLain; //AF47 Kategori Umur 75 tahun atau lebih (Baru)
        rowNew35.commit();

        // Kategori Umur 75 tahun atau lebih (Ulangan)
        let rowNew36 = worksheet.getRow(48);
        rowNew36.getCell(3).value = results.kedatanganTahunSemasa; //C48	Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(4).value = results.lelaki; //D48	Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(5).value = results.perempuan; //E48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(6).value = results.melayu; //F48	Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(7).value = results.cina; //G48	Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(8).value = results.india; //H48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(9).value = results.bajau; //I48	Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(10).value = results.dusun; //J48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(11).value = results.kadazan; //K48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(12).value = results.murut; //L48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(13).value = results.bumiputeraSabahLain; //M48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(14).value = results.melanau; //N48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(15).value = results.kedayan; //O48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(16).value = results.iban; //P48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(17).value = results.bidayuh; //Q48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(18).value = results.bumiputeraSarawakLain; //R48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(19).value = results.orangAsliSemenanjung; //S48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(20).value = results.lainLainKaum; //T48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(21).value = results.bukanWarganegara; //U48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(22).value = results.ibuMengandung; //V48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(23).value = results.bersekolah; //W48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(24).value = results.orangKurangUpaya; //X48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(25).value = results.pesaraKerajaan; //Y48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(26).value = results.pesaraATM; //Z48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(27).value = results.rujukanDalaman; //AA48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(28).value = results.rujukanKlinikGigiKerajaan; //AB48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(29).value = results.rujukanKlinikKesihatanKerajaan; //AC48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(30).value = results.rujukanHospKerajaan; //AD48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(31).value = results.rujukanSwasta; //AE48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.getCell(32).value = results.rujukanLainLain; //AF48 Kategori Umur 75 tahun atau lebih (Ulangan)
        rowNew36.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PG211.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG214 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PGS214.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PG214');

        //PG214
        //Kategori Umur 60 Tahun
        let rowNew = worksheet.getRow(13);
        rowNew.getCell(3).value = results.melayu; //C13	Kategori Umur 60 Tahun
        rowNew.getCell(4).value = results.cina; //D13	Kategori Umur 60 Tahun
        rowNew.getCell(5).value = results.india; //E13	Kategori Umur 60 Tahun
        rowNew.getCell(6).value = results.bajau; //F13	Kategori Umur 60 Tahun
        rowNew.getCell(7).value = results.dusun; //G13	Kategori Umur 60 Tahun
        rowNew.getCell(8).value = results.kadazan; //H13 Kategori Umur 60 Tahun
        rowNew.getCell(9).value = results.murut; //I13	Kategori Umur 60 Tahun
        rowNew.getCell(10).value = results.bumiputeraSabahLain; //J13 Kategori Umur 60 Tahun
        rowNew.getCell(11).value = results.melanau; //K13 Kategori Umur 60 Tahun
        rowNew.getCell(12).value = results.kedayan; //L13 Kategori Umur 60 Tahun
        rowNew.getCell(13).value = results.iban; //M13 Kategori Umur 60 Tahun
        rowNew.getCell(14).value = results.bidayuh; //N13 Kategori Umur 60 Tahun
        rowNew.getCell(15).value = results.bumiputeraSarawakLain; //O13 Kategori Umur 60 Tahun
        rowNew.getCell(16).value = results.orangAsliSemenanjung; //P13 Kategori Umur 60 Tahun
        rowNew.getCell(17).value = results.lainLainKaum; //Q13 Kategori Umur 60 Tahun
        rowNew.getCell(18).value = results.bukanWarganegara; //R13 Kategori Umur 60 Tahun
        rowNew.getCell(19).value = results.lelaki; //S13 Kategori Umur 60 Tahun
        rowNew.getCell(20).value = results.perempuan; //T13 Kategori Umur 60 Tahun
        rowNew.getCell(21).value = results.edentulous; //U13 Kategori Umur 60 Tahun
        rowNew.getCell(22).value = results.gigiSamaAtauLebihDari20Batang; //V13 Kategori Umur 60 Tahun
        rowNew.getCell(23).value = results.gigiKurangDari20Batang; //W13 Kategori Umur 60 Tahun
        rowNew.getCell(24).value = results.bilGigi; //W13 Kategori Umur 60 Tahun
        rowNew.commit();

        //Kategori Umur 61 hingga 64 Tahun

        let rowNew2 = worksheet.getRow(14);
        rowNew2.getCell(3).value = results.melayu; //C14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(4).value = results.cina; //D14	Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(5).value = results.india; //E14	Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(6).value = results.bajau; //F14	Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(7).value = results.dusun; //G14	Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(8).value = results.kadazan; //H14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(9).value = results.murut; //I14	Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(10).value = results.bumiputeraSabahLain; //J14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(11).value = results.melanau; //K14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(12).value = results.kedayan; //L14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(13).value = results.iban; //M14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(14).value = results.bidayuh; //N14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(15).value = results.bumiputeraSarawakLain; //O14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(16).value = results.orangAsliSemenanjung; //P14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(17).value = results.lainLainKaum; //Q14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(18).value = results.bukanWarganegara; //R14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(19).value = results.lelaki; //S14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(20).value = results.perempuan; //T14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(21).value = results.edentulous; //U14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(22).value = results.gigiSamaAtauLebihDari20Batang; //V14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(23).value = results.gigiKurangDari20Batang; //W14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.getCell(24).value = results.bilGigi; //W14 Kategori Umur 61 hingga 64 Tahun
        rowNew2.commit();

        //Kategori Umur 65 tahun

        let rowNew3 = worksheet.getRow(15);
        rowNew3.getCell(3).value = results.melayu; //C15 Kategori Umur 65 Tahun
        rowNew3.getCell(4).value = results.cina; //D15	Kategori Umur 65 Tahun
        rowNew3.getCell(5).value = results.india; //E15	Kategori Umur 65 Tahun
        rowNew3.getCell(6).value = results.bajau; //F15	Kategori Umur 65 Tahun
        rowNew3.getCell(7).value = results.dusun; //G15	Kategori Umur 65 Tahun
        rowNew3.getCell(8).value = results.kadazan; //H15 Kategori Umur 65 Tahun
        rowNew3.getCell(9).value = results.murut; //I15	Kategori Umur 65 Tahun
        rowNew3.getCell(10).value = results.bumiputeraSabahLain; //J15 Kategori Umur 65 Tahun
        rowNew3.getCell(11).value = results.melanau; //K15 Kategori Umur 65 Tahun
        rowNew3.getCell(12).value = results.kedayan; //L15 Kategori Umur 65 Tahun
        rowNew3.getCell(13).value = results.iban; //M15 Kategori Umur 65 Tahun
        rowNew3.getCell(14).value = results.bidayuh; //N15 Kategori Umur 65 Tahun
        rowNew3.getCell(15).value = results.bumiputeraSarawakLain; //O15 Kategori Umur 65 Tahun
        rowNew3.getCell(16).value = results.orangAsliSemenanjung; //P15 Kategori Umur 65 Tahun
        rowNew3.getCell(17).value = results.lainLainKaum; //Q15 Kategori Umur 65 Tahun
        rowNew3.getCell(18).value = results.bukanWarganegara; //R15 Kategori Umur 65 Tahun
        rowNew3.getCell(19).value = results.lelaki; //S15 Kategori Umur 65 Tahun
        rowNew3.getCell(20).value = results.perempuan; //T15 Kategori Umur 65 Tahun
        rowNew3.getCell(21).value = results.edentulous; //U15 Kategori Umur 65 Tahun
        rowNew3.getCell(22).value = results.gigiSamaAtauLebihDari20Batang; //V15 Kategori Umur 65 Tahun
        rowNew3.getCell(23).value = results.gigiKurangDari20Batang; //W15 Kategori Umur 65 Tahun
        rowNew3.getCell(24).value = results.bilGigi; //W15 Kategori Umur 65 Tahun
        rowNew3.commit();

        //Kategori Umur 66 hingga 69 Tahun
        let rowNew4 = worksheet.getRow(16);
        rowNew4.getCell(3).value = results.melayu; //C16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(4).value = results.cina; //D16	Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(5).value = results.india; //E16	Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(6).value = results.bajau; //F16	Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(7).value = results.dusun; //G16	Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(8).value = results.kadazan; //H16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(9).value = results.murut; //I16	Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(10).value = results.bumiputeraSabahLain; //J16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(11).value = results.melanau; //K16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(12).value = results.kedayan; //L16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(13).value = results.iban; //M16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(14).value = results.bidayuh; //N16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(15).value = results.bumiputeraSarawakLain; //O16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(16).value = results.orangAsliSemenanjung; //P16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(17).value = results.lainLainKaum; //Q16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(18).value = results.bukanWarganegara; //R16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(19).value = results.lelaki; //S16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(20).value = results.perempuan; //T16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(21).value = results.edentulous; //U16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(22).value = results.gigiSamaAtauLebihDari20Batang; //V16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(23).value = results.gigiKurangDari20Batang; //W16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.getCell(24).value = results.bilGigi; //W16 Kategori Umur 66 hingga 69 Tahun
        rowNew4.commit();

        //Kategori Umur 70 hingga 74 Tahun

        let rowNew5 = worksheet.getRow(17);
        rowNew5.getCell(3).value = results.melayu; //C17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(4).value = results.cina; //D17	Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(5).value = results.india; //E17	Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(6).value = results.bajau; //F17	Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(7).value = results.dusun; //G17	Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(8).value = results.kadazan; //H17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(9).value = results.murut; //I17	Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(10).value = results.bumiputeraSabahLain; //J17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(11).value = results.melanau; //K17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(12).value = results.kedayan; //L17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(13).value = results.iban; //M17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(14).value = results.bidayuh; //N17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(15).value = results.bumiputeraSarawakLain; //O17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(16).value = results.orangAsliSemenanjung; //P17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(17).value = results.lainLainKaum; //Q17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(18).value = results.bukanWarganegara; //R17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(19).value = results.lelaki; //S17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(20).value = results.perempuan; //T17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(21).value = results.edentulous; //U17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(22).value = results.gigiSamaAtauLebihDari20Batang; //V17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(23).value = results.gigiKurangDari20Batang; //W17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.getCell(24).value = results.bilGigi; //W17 Kategori Umur 70 hingga 74 Tahun
        rowNew5.commit();

        //Kategori Umur 75 tahun atau lebih

        let rowNew6 = worksheet.getRow(18);
        rowNew6.getCell(3).value = results.melayu; //C18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(4).value = results.cina; //D18	Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(5).value = results.india; //E18	Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(6).value = results.bajau; //F18	Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(7).value = results.dusun; //G18	Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(8).value = results.kadazan; //H18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(9).value = results.murut; //I18	Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(10).value = results.bumiputeraSabahLain; //J18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(11).value = results.melanau; //K18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(12).value = results.kedayan; //L18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(13).value = results.iban; //M18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(14).value = results.bidayuh; //N18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(15).value = results.bumiputeraSarawakLain; //O18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(16).value = results.orangAsliSemenanjung; //P18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(17).value = results.lainLainKaum; //Q18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(18).value = results.bukanWarganegara; //R18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(19).value = results.lelaki; //S18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(20).value = results.perempuan; //T18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(21).value = results.edentulous; //U18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(22).value = results.gigiSamaAtauLebihDari20Batang; //V18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(23).value = results.gigiKurangDari20Batang; //W18 Kategori Umur 75 tahun atau lebih
        rowNew6.getCell(24).value = results.bilGigi; //W18 Kategori Umur 75 tahun atau lebih
        rowNew6.commit();

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PG214.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};

exports.createPG201 = function (req, res) {
  async.parallel(
    {
      negeri: function (callback) {
        Tadika.countDocuments({ kedatanganBaru: 1 }, callback);
      },
      jumlahSRnegeri: function (callback) {
        Tadika.countDocuments({ kedatanganUlangan: 1 }, callback);
      },
      jumlahEnrolmenSR: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusD: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      jumlahSRterlibatMMI: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusM: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      tahun: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusF: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      sekolah: function (callback) {
        Tadika.countDocuments(
          { statusGigidesidusX: { $gte: 1 }, kedatanganBaru: 1 },
          callback
        );
      },
      klinik: function (callback) {
        Tadika.countDocuments(
          {
            statusGigidesidusD: '0',
            statusGigidesidusM: '0',
            statusGigidesidusF: '0',
            statusGigidesidusX: 0,
            kedatanganBaru: 1,
          },
          callback
        );
      },
    },
    async function (err, results) {
      console.log(results);
      try {
        let filename = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'PG201A.xlsx'
        );
        let workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filename);
        let worksheet = workbook.getWorksheet('PG201A');
        
        //PG201
        // Reten Sekolah (Darjah 1)
      	let rowNew = worksheet.getRow(17);
	      rowNew.getCell(2) .value = kedatanganEnggan; //B17 Kedatangan enggan (Darjah 1)
	      rowNew.getCell(3) .value = kedatanganTidakHadir; //C17 Kedatangan Tidak Hadir (Darjah 1)
	      rowNew.getCell(4) .value = enrolmen; //D17 Kedatangan enrolmen (Darjah 1)
	      rowNew.getCell(5) .value = kedatanganBaru; //E17 Kedatangan baru (Darjah 1)
	      rowNew.getCell(6) .value = kedatanganUlangan; //F17 Kedatangan ulangan (Darjah 1)
	      rowNew.getCell(8) .value = skorPlakA; //H17 Kebersihan Mulut Skor A (Darjah 1)
	      rowNew.getCell(9) .value = dStatusdfx; //I17 Karies Gigi Desidus (d) (Darjah 1) 
	      rowNew.getCell(10) .value = fStatusdfx; //J17 Telah Ditampal Gigi Desidus (f) (Darjah 1) 
	      rowNew.getCell(11) .value = xStatusdfx; //K17 Gigi Desidus Perlu Ditampal (x) (Darjah 1) 
	      rowNew.getCell(13) .value = dStatusDMFX; //M17 Karies Gigi Kekal (D) (Darjah 1) 
	      rowNew.getCell(14) .value = mStatusDMFX; //N17 Gigi Kekal Telah Hilang (M) (Darjah 1) 
	      rowNew.getCell(15) .value = fStatusDMFX; //O17 Gigi Kekal Telah Ditampal (F) (Darjah 1) 
	      rowNew.getCell(16) .value = xStatusDMFX; //P17 Gigi Kekal Telah Dicabut (X) (Darjah 1)
	      rowNew.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R17 Status Gigi Kekal DMFX <= 3 (Darjah 1) 
	      rowNew.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S17 Status Gigi Kekal X+M = 0  (Darjah 1) 
	      rowNew.getCell(20) .value = mbk; //T17 Mulut Bebas Karies (MBK) (Darjah 1) 
	      rowNew.getCell(21) .value = statusBebasKaries; //U17 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (Darjah 1)
	      rowNew.getCell(22) .value = dfxEqualToZero; //V17 dfx=0 (Darjah 1) 
	      rowNew.getCell(23) .value = mulutBebasGingivitis; //W17 Mulut Bebas Gingivitis (MBG) (Darjah 1) 
	      rowNew.getCell(24) .value = tprICDAS; //X17 TPR (Darjah 1) 
	      rowNew.getCell(25) .value = kecederaanGigiAnterior; //Y17 Kecederaan gigi Anterior (Darjah 1) 
	      rowNew.getCell(26) .value = cleftAda; //Z17 cleft Ada (Darjah 1) 
	      rowNew.getCell(27) .value = cleftRujuk; //AA17 cleft Rujuk (Darjah 1) 
	      rowNew.getCell(29) .value = perluFSMuridB; //AC17 Bil. Murid Baru perlu Fisur Sealan (Darjah 1) 
	      rowNew.getCell(30) .value = perluFSGigiB; //AD17 Bil. Gigi Baru perlu Fisur Sealan (Darjah 1) 
	      rowNew.getCell(31) .value = perluFsBilGigiFailed; //AE17 Bilangan Gigi 'Failed' Semula FS (Darjah 1) 
	      rowNew.getCell(32) .value = perluTampalanAntGdB; //AF17 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 1) 
	      rowNew.getCell(33) .value = perluTampalanAntGkB; //AG17 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 1) 
	      rowNew.getCell(34) .value = perluTampalanPosGdB; //AH17 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 1) 
	      rowNew.getCell(35) .value = perluTampalanPosGkB; //AI17 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 1) 
	      rowNew.getCell(36) .value = perluTampalanAmgGdB; //AJ17 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 1) 
	      rowNew.getCell(37) .value = perluTampalanAmgGkB; //AK17 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 1) 
	      rowNew.getCell(39) .value = telahFSMuridB; //AM17 Bil. Murid B Telah Menerima Fisur Sealan (Darjah 1) 
	      rowNew.getCell(40) .value = telahFSGigiB; //AN17 Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 1) 
	      rowNew.getCell(41) .value = telahTampalanAntGdB; //AO17 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 1) 
	      rowNew.getCell(42) .value = telahTampalanAntGkB; //AP17 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 1) 
	      rowNew.getCell(43) .value = telahTampalanPosGdB; //AQ17 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 1) 
	      rowNew.getCell(44) .value = telahTampalanPosGkB; //AR17 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 1) 
	      rowNew.getCell(45) .value = telahTampalanAmgGdB; //AS17 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 1) 
	      rowNew.getCell(46) .value = telahTampalanAmgGkB; //AT17 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 1) 
	      rowNew.getCell(48) .value = cabutanGd; // AV17 Gigi Desidus Dicabut (Darjah 1)
	      rowNew.getCell(49) .value = cabutanGk; // AW17 Gigi Kekal Dicabut (Darjah 1) 
	      rowNew.getCell(50) .value = penskaleran; // AX17 Penskelaran (Darjah 1) 
	      rowNew.getCell(51) .value = caseCompleted; // AY17 Kes Selesai (Darjah 1) 
	      rowNew.getCell(52) .value = skorGIS0; // AZ17 GIS SKOR 0 (Darjah 1) 
	      rowNew.getCell(53) .value = skorGIS1; // BA17 GIS SKOR 1 (Darjah 1) 
	      rowNew.getCell(54) .value = skorGIS2; // BB17 GIS SKOR 2 (Darjah 1) 
	      rowNew.getCell(55) .value = skorGIS3; // BC17 GIS SKOR 3 (Darjah 1) 

        let rowNew2 = worksheet.getRow(18);
	      rowNew2.getCell(8) .value = skorPlakC; //H18 Kebersihan Mulut Skor C (Darjah 1)

      	let rowNew3 = worksheet.getRow(19);
	      rowNew3.getCell(8) .value = skorPlakE; //H19 Kebersihan Mulut Skor E (Darjah 1)
	      rowNew3.getCell(30) .value = perluFSGigiS; //AD19 Bil. Gigi Semula perlu Fisur Sealan (Darjah 1) 
	      rowNew3.getCell(32) .value = perluTampalanAntGdS; //AF19 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 1) 
	      rowNew3.getCell(33) .value = perluTampalanAntGkS; //AG19 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 1) 
	      rowNew3.getCell(34) .value = perluTampalanPosGdS; //AH19 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 1) 
	      rowNew3.getCell(35) .value = perluTampalanPosGkS; //AI19 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 1) 
	      rowNew3.getCell(36) .value = perluTampalanAmgGdS; //AJ19 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 1) 
	      rowNew3.getCell(37) .value = perluTampalanAmgGkS; //AK19 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 1) 
	      rowNew3.getCell(39) .value = telahFSMuridS; //AM19 Bil. Murid S Telah Menerima Fisur Sealan (Darjah 1) 
	      rowNew3.getCell(40) .value = telahFSGigiS; //AN19 Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 1) 
	      rowNew3.getCell(41) .value = telahTampalanAntGdS; //AO19 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 1) 
	      rowNew3.getCell(42) .value = telahTampalanAntGkS; //AP19 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 1) 
	      rowNew3.getCell(43) .value = telahTampalanPosGdS; //AQ19 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 1) 
        rowNew3.getCell(44) .value = telahTampalanPosGkS; //AR19 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 1)
	      rowNew3.getCell(45) .value = telahTampalanAmgGdS; //AS19 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 1) 
	      rowNew3.getCell(46) .value = telahTampalanAmgGkS; //AT19 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 1) 

        // Reten Sekolah (Darjah 2)

	      let rowNew4 = worksheet.getRow(20);
	      rowNew4.getCell(2) .value = kedatanganEnggan; //B20 Kedatangan enggan (Darjah 2)
	      rowNew4.getCell(3) .value = kedatanganTidakHadir; //C20 Kedatangan Tidak Hadir (Darjah 2)
	      rowNew4.getCell(4) .value = enrolmen; //D20 Kedatangan enrolmen (Darjah 2)
	      rowNew4.getCell(5) .value = kedatanganBaru; //E20 Kedatangan baru (Darjah 2)
	      rowNew4.getCell(6) .value = kedatanganUlangan; //F20 Kedatangan ulangan (Darjah 2)
	      rowNew4.getCell(8) .value = skorPlakA; //H20 Kebersihan Mulut Skor A (Darjah 2)
	      rowNew4.getCell(9) .value = dStatusdfx; //I20 Karies Gigi Desidus (d) (Darjah 2) 
	      rowNew4.getCell(10) .value = fStatusdfx; //J20 Telah Ditampal Gigi Desidus (f) (Darjah 2) 
	      rowNew4.getCell(11) .value = xStatusdfx; //K20 Gigi Desidus Perlu Ditampal (x) (Darjah 2) 
	      rowNew4.getCell(13) .value = dStatusDMFX; //M20 Karies Gigi Kekal (D) (Darjah 2) 
	      rowNew4.getCell(14) .value = mStatusDMFX; //N20 Gigi Kekal Telah Hilang (M) (Darjah 2) 
	      rowNew4.getCell(15) .value = fStatusDMFX; //O20 Gigi Kekal Telah Ditampal (F) (Darjah 2) 
	      rowNew4.getCell(16) .value = xStatusDMFX; //P20 Gigi Kekal Telah Dicabut (X) (Darjah 2)
	      rowNew4.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R20 Status Gigi Kekal DMFX <= 3 (Darjah 2) 
	      rowNew4.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S20 Status Gigi Kekal X+M = 0  (Darjah 2) 
	      rowNew4.getCell(20) .value = mbk; //T20 Mulut Bebas Karies (MBK) (Darjah 2) 
	      rowNew4.getCell(21) .value = statusBebasKaries; //U20 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (Darjah 2)
	      rowNew4.getCell(22) .value = dfxEqualToZero; //V20 dfx=0 (Darjah 2) 
	      rowNew4.getCell(23) .value = mulutBebasGingivitis; //W20 Mulut Bebas Gingivitis (MBG) (Darjah 2) 
	      rowNew4.getCell(24) .value = tprICDAS; //X20 TPR (Darjah 2) 
	      rowNew4.getCell(25) .value = kecederaanGigiAnterior; //Y20 Kecederaan gigi Anterior (Darjah 2) 
	      rowNew4.getCell(26) .value = cleftAda; //Z20 cleft Ada (Darjah 2) 
	      rowNew4.getCell(27) .value = cleftRujuk; //AA20 cleft Rujuk (Darjah 2) 
	      rowNew4.getCell(29) .value = perluFSMuridB; //AC20 Bil. Murid Baru perlu Fisur Sealan (Darjah 2) 
	      rowNew4.getCell(30) .value = perluFSGigiB; //AD20 Bil. Gigi Baru perlu Fisur Sealan (Darjah 2) 
	      rowNew4.getCell(31) .value = perluFsBilGigiFailed; //AE20 Bilangan Gigi 'Failed' Semula FS (Darjah 2) 
	      rowNew4.getCell(32) .value = perluTampalanAntGdB; //AF20 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 2) 
	      rowNew4.getCell(33) .value = perluTampalanAntGkB; //AG20 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 2) 
	      rowNew4.getCell(34) .value = perluTampalanPosGdB; //AH20 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 2) 
	      rowNew4.getCell(35) .value = perluTampalanPosGkB; //AI20 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 2) 
	      rowNew4.getCell(36) .value = perluTampalanAmgGdB; //AJ20 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 2) 
	      rowNew4.getCell(37) .value = perluTampalanAmgGkB; //AK20 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 2) 
	      rowNew4.getCell(39) .value = telahFSMuridB; //AM20 Bil. Murid B Telah Menerima Fisur Sealan (Darjah 2) 
	      rowNew4.getCell(40) .value = telahFSGigiB; //AN20 Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 2) 
	      rowNew4.getCell(41) .value = telahTampalanAntGdB; //AO20 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 2) 
	      rowNew4.getCell(42) .value = telahTampalanAntGkB; //AP20 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 2) 
	      rowNew4.getCell(43) .value = telahTampalanPosGdB; //AQ20 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 2) 
	      rowNew4.getCell(44) .value = telahTampalanPosGkB; //AR20 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 2) 
	      rowNew4.getCell(45) .value = telahTampalanAmgGdB; //AS20 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 2) 
	      rowNew4.getCell(46) .value = telahTampalanAmgGkB; //AT20 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 2) 
	      rowNew4.getCell(48) .value = cabutanGd; // AV20 Gigi Desidus Dicabut (Darjah 2)
	      rowNew4.getCell(49) .value = cabutanGk; // AW20 Gigi Kekal Dicabut (Darjah 2) 
	      rowNew4.getCell(50) .value = penskaleran; // AX20 Penskelaran (Darjah 2) 
	      rowNew4.getCell(51) .value = caseCompleted; // AY20 Kes Selesai (Darjah 2) 
	      rowNew4.getCell(52) .value = skorGIS0; // AZ20 GIS SKOR 0 (Darjah 2) 
	      rowNew4.getCell(53) .value = skorGIS1; // BA20 GIS SKOR 1 (Darjah 2) 
	      rowNew4.getCell(54) .value = skorGIS2; // BB20 GIS SKOR 2 (Darjah 2) 
	      rowNew4.getCell(55) .value = skorGIS3; // BC20 GIS SKOR 3 (Darjah 2) 

      	let rowNew5 = worksheet.getRow(21);
	      rowNew5.getCell(8) .value = skorPlakC; //H21 Kebersihan Mulut Skor C (Darjah 2)

      	let rowNew6 = worksheet.getRow(22);
	      rowNew6.getCell(8) .value = skorPlakE; //H22 Kebersihan Mulut Skor E (Darjah 2)
	      rowNew6.getCell(30) .value = perluFSGigiS; //AD22 Bil. Gigi Semula perlu Fisur Sealan (Darjah 2) 
	      rowNew6.getCell(32) .value = perluTampalanAntGdS; //AF22 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 2) 
	      rowNew6.getCell(33) .value = perluTampalanAntGkS; //AG22 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 2) 
	      rowNew6.getCell(34) .value = perluTampalanPosGdS; //AH22 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 2) 
	      rowNew6.getCell(35) .value = perluTampalanPosGkS; //AI22 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 2) 
	      rowNew6.getCell(36) .value = perluTampalanAmgGdS; //AJ22 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 2) 
	      rowNew6.getCell(37) .value = perluTampalanAmgGkS; //AK22 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 2) 
	      rowNew6.getCell(39) .value = telahFSMuridS; //AM22 Bil. Murid S Telah Menerima Fisur Sealan (Darjah 2) 
	      rowNew6.getCell(40) .value = telahFSGigiS; //AN22 Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 2) 
	      rowNew6.getCell(41) .value = telahTampalanAntGdS; //AO22 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 2) 
	      rowNew6.getCell(42) .value = telahTampalanAntGkS; //AP22 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 2) 
	      rowNew6.getCell(43) .value = telahTampalanPosGdS; //AQ22 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 2) 
	      rowNew6.getCell(44) .value = telahTampalanPosGkS; //AR22 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 2)
	      rowNew6.getCell(45) .value = telahTampalanAmgGdS; //AS22 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 2) 
	      rowNew6.getCell(46) .value = telahTampalanAmgGkS; //AT22 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 2) 

        // Reten Sekolah (Darjah 3)

      	let rowNew7 = worksheet.getRow(23);
	      rowNew7.getCell(2) .value = kedatanganEnggan; //B23 Kedatangan enggan (Darjah 3)
	      rowNew7.getCell(3) .value = kedatanganTidakHadir; //C23 Kedatangan Tidak Hadir (Darjah 3)
	      rowNew7.getCell(4) .value = enrolmen; //D23 Kedatangan enrolmen (Darjah 3)
	      rowNew7.getCell(5) .value = kedatanganBaru; //E23 Kedatangan baru (Darjah 3)
	      rowNew7.getCell(6) .value = kedatanganUlangan; //F23 Kedatangan ulangan (Darjah 3)
	      rowNew7.getCell(8) .value = skorPlakA; //H23 Kebersihan Mulut Skor A (Darjah 3)
	      rowNew7.getCell(9) .value = dStatusdfx; //I23 Karies Gigi Desidus (d) (Darjah 3) 
	      rowNew7.getCell(10) .value = fStatusdfx; //J23 Telah Ditampal Gigi Desidus (f) (Darjah 3) 
	      rowNew7.getCell(11) .value = xStatusdfx; //K23 Gigi Desidus Perlu Ditampal (x) (Darjah 3) 
	      rowNew7.getCell(13) .value = dStatusDMFX; //M23 Karies Gigi Kekal (D) (Darjah 3) 
	      rowNew7.getCell(14) .value = mStatusDMFX; //N23 Gigi Kekal Telah Hilang (M) (Darjah 3) 
	      rowNew7.getCell(15) .value = fStatusDMFX; //O23 Gigi Kekal Telah Ditampal (F) (Darjah 3) 
	      rowNew7.getCell(16) .value = xStatusDMFX; //P23 Gigi Kekal Telah Dicabut (X) (Darjah 3)
	      rowNew7.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R23 Status Gigi Kekal DMFX <= 3 (Darjah 3) 
	      rowNew7.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S23 Status Gigi Kekal X+M = 0  (Darjah 3) 
	      rowNew7.getCell(20) .value = mbk; //T23 Mulut Bebas Karies (MBK) (Darjah 3) 
	      rowNew7.getCell(21) .value = statusBebasKaries; //U23 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (Darjah 3)
	      rowNew7.getCell(22) .value = dfxEqualToZero; //V23 dfx=0 (Darjah 3) 
	      rowNew7.getCell(23) .value = mulutBebasGingivitis; //W23 Mulut Bebas Gingivitis (MBG) (Darjah 3) 
	      rowNew7.getCell(24) .value = tprICDAS; //X23 TPR (Darjah 3) 
	      rowNew7.getCell(25) .value = kecederaanGigiAnterior; //Y23 Kecederaan gigi Anterior (Darjah 3) 
	      rowNew7.getCell(26) .value = cleftAda; //Z23 cleft Ada (Darjah 3) 
	      rowNew7.getCell(27) .value = cleftRujuk; //AA23 cleft Rujuk (Darjah 3) 
	      rowNew7.getCell(29) .value = perluFSMuridB; //AC23 Bil. Murid Baru perlu Fisur Sealan (Darjah 3) 
	      rowNew7.getCell(30) .value = perluFSGigiB; //AD23 Bil. Gigi Baru perlu Fisur Sealan (Darjah 3) 
	      rowNew7.getCell(31) .value = perluFsBilGigiFailed; //AE23 Bilangan Gigi 'Failed' Semula FS (Darjah 3) 
	      rowNew7.getCell(32) .value = perluTampalanAntGdB; //AF23 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 3) 
	      rowNew7.getCell(33) .value = perluTampalanAntGkB; //AG23 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 3) 
	      rowNew7.getCell(34) .value = perluTampalanPosGdB; //AH23 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 3) 
	      rowNew7.getCell(35) .value = perluTampalanPosGkB; //AI23 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 3) 
	      rowNew7.getCell(36) .value = perluTampalanAmgGdB; //AJ23 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 3) 
	      rowNew7.getCell(37) .value = perluTampalanAmgGkB; //AK23 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 3) 
	      rowNew7.getCell(39) .value = telahFSMuridB; //AM23 Bil. Murid B Telah Menerima Fisur Sealan (Darjah 3) 
	      rowNew7.getCell(40) .value = telahFSGigiB; //AN23 Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 3) 
	      rowNew7.getCell(41) .value = telahTampalanAntGdB; //AO23 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 3) 
	      rowNew7.getCell(42) .value = telahTampalanAntGkB; //AP23 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 3) 
	      rowNew7.getCell(43) .value = telahTampalanPosGdB; //AQ23 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 3) 
	      rowNew7.getCell(44) .value = telahTampalanPosGkB; //AR23 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 3) 
	      rowNew7.getCell(45) .value = telahTampalanAmgGdB; //AS23 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 3) 
	      rowNew7.getCell(46) .value = telahTampalanAmgGkB; //AT23 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 3) 
	      rowNew7.getCell(48) .value = cabutanGd; // AV23 Gigi Desidus Dicabut (Darjah 3)
	      rowNew7.getCell(49) .value = cabutanGk; // AW23 Gigi Kekal Dicabut (Darjah 3) 
	      rowNew7.getCell(50) .value = penskaleran; // AX23 Penskelaran (Darjah 3) 
	      rowNew7.getCell(51) .value = caseCompleted; // AY23 Kes Selesai (Darjah 3) 
	      rowNew7.getCell(52) .value = skorGIS0; // AZ23 GIS SKOR 0 (Darjah 3) 
	      rowNew7.getCell(53) .value = skorGIS1; // BA23 GIS SKOR 1 (Darjah 3) 
	      rowNew7.getCell(54) .value = skorGIS2; // BB23 GIS SKOR 2 (Darjah 3) 
	      rowNew7.getCell(55) .value = skorGIS3; // BC23 GIS SKOR 3 (Darjah 3)

	      let rowNew8 = worksheet.getRow(24);
	      rowNew8.getCell(8) .value = skorPlakC; //H24 Kebersihan Mulut Skor C (Darjah 3)

        let rowNew9 = worksheet.getRow(25);
        rowNew9.getCell(8) .value = skorPlakE; //H25 Kebersihan Mulut Skor E (Darjah 3)
        rowNew9.getCell(30) .value = perluFSGigiS; //AD25 Bil. Gigi Semula perlu Fisur Sealan (Darjah 3) 
        rowNew9.getCell(32) .value = perluTampalanAntGdS; //AF25 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 3) 
        rowNew9.getCell(33) .value = perluTampalanAntGkS; //AG25 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 3) 
        rowNew9.getCell(34) .value = perluTampalanPosGdS; //AH25 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 3) 
        rowNew9.getCell(35) .value = perluTampalanPosGkS; //AI25 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 3) 
        rowNew9.getCell(36) .value = perluTampalanAmgGdS; //AJ25 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 3) 
        rowNew9.getCell(37) .value = perluTampalanAmgGkS; //AK25 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 3) 
        rowNew9.getCell(39) .value = telahFSMuridS; //AM25 Bil. Murid S Telah Menerima Fisur Sealan (Darjah 3) 
        rowNew9.getCell(40) .value = telahFSGigiS; //AN25 Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 3) 
        rowNew9.getCell(41) .value = telahTampalanAntGdS; //AO25 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 3) 
        rowNew9.getCell(42) .value = telahTampalanAntGkS; //AP25 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 3) 
        rowNew9.getCell(43) .value = telahTampalanPosGdS; //AQ25 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 3) 
        rowNew9.getCell(44) .value = telahTampalanPosGkS; //AR25 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 3)
        rowNew9.getCell(45) .value = telahTampalanAmgGdS; //AS25 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 3) 
        rowNew9.getCell(46) .value = telahTampalanAmgGkS; //AT25 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 3)

        // Reten Sekolah (Darjah 4)

        let rowNew10 = worksheet.getRow(26);
        rowNew10.getCell(2) .value = kedatanganEnggan; //B26 Kedatangan enggan (Darjah 4)
        rowNew10.getCell(3) .value = kedatanganTidakHadir; //C26 Kedatangan Tidak Hadir (Darjah 4)
        rowNew10.getCell(4) .value = enrolmen; //D26 Kedatangan enrolmen (Darjah 4)
        rowNew10.getCell(5) .value = kedatanganBaru; //E26 Kedatangan baru (Darjah 4)
        rowNew10.getCell(6) .value = kedatanganUlangan; //F26 Kedatangan ulangan (Darjah 4)
        rowNew10.getCell(8) .value = skorPlakA; //H26 Kebersihan Mulut Skor A (Darjah 4)
        rowNew10.getCell(9) .value = dStatusdfx; //I26 Karies Gigi Desidus (d) (Darjah 4) 
        rowNew10.getCell(10) .value = fStatusdfx; //J26 Telah Ditampal Gigi Desidus (f) (Darjah 4) 
        rowNew10.getCell(11) .value = xStatusdfx; //K26 Gigi Desidus Perlu Ditampal (x) (Darjah 4) 
        rowNew10.getCell(13) .value = dStatusDMFX; //M26 Karies Gigi Kekal (D) (Darjah 4) 
        rowNew10.getCell(14) .value = mStatusDMFX; //N26 Gigi Kekal Telah Hilang (M) (Darjah 4) 
        rowNew10.getCell(15) .value = fStatusDMFX; //O26 Gigi Kekal Telah Ditampal (F) (Darjah 4) 
        rowNew10.getCell(16) .value = xStatusDMFX; //P26 Gigi Kekal Telah Dicabut (X) (Darjah 4)
        rowNew10.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R26 Status Gigi Kekal DMFX <= 3 (Darjah 4) 
        rowNew10.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S26 Status Gigi Kekal X+M = 0  (Darjah 4) 
        rowNew10.getCell(20) .value = mbk; //T26 Mulut Bebas Karies (MBK) (Darjah 4) 
        rowNew10.getCell(21) .value = statusBebasKaries; //U26 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (Darjah 4)
        rowNew10.getCell(22) .value = dfxEqualToZero; //V26 dfx=0 (Darjah 4) 
        rowNew10.getCell(23) .value = mulutBebasGingivitis; //W26 Mulut Bebas Gingivitis (MBG) (Darjah 4) 
        rowNew10.getCell(24) .value = tprICDAS; //X26 TPR (Darjah 4) 
        rowNew10.getCell(25) .value = kecederaanGigiAnterior; //Y26 Kecederaan gigi Anterior (Darjah 4) 
        rowNew10.getCell(26) .value = cleftAda; //Z26 cleft Ada (Darjah 4) 
        rowNew10.getCell(27) .value = cleftRujuk; //AA26 cleft Rujuk (Darjah 4) 
        rowNew10.getCell(29) .value = perluFSMuridB; //AC26 Bil. Murid Baru perlu Fisur Sealan (Darjah 4) 
        rowNew10.getCell(30) .value = perluFSGigiB; //AD26 Bil. Gigi Baru perlu Fisur Sealan (Darjah 4) 
        rowNew10.getCell(31) .value = perluFsBilGigiFailed; //AE26 Bilangan Gigi 'Failed' Semula FS (Darjah 4) 
        rowNew10.getCell(32) .value = perluTampalanAntGdB; //AF26 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 4) 
        rowNew10.getCell(33) .value = perluTampalanAntGkB; //AG26 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 4) 
        rowNew10.getCell(34) .value = perluTampalanPosGdB; //AH26 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 4) 
        rowNew10.getCell(35) .value = perluTampalanPosGkB; //AI26 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 4) 
        rowNew10.getCell(36) .value = perluTampalanAmgGdB; //AJ26 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 4) 
        rowNew10.getCell(37) .value = perluTampalanAmgGkB; //AK26 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 4) 
        rowNew10.getCell(39) .value = telahFSMuridB; //AM26 Bil. Murid B Telah Menerima Fisur Sealan (Darjah 4) 
        rowNew10.getCell(40) .value = telahFSGigiB; //AN26 Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 4) 
        rowNew10.getCell(41) .value = telahTampalanAntGdB; //AO26 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 4) 
        rowNew10.getCell(42) .value = telahTampalanAntGkB; //AP26 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 4) 
        rowNew10.getCell(43) .value = telahTampalanPosGdB; //AQ26 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 4) 
        rowNew10.getCell(44) .value = telahTampalanPosGkB; //AR26 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 4) 
        rowNew10.getCell(45) .value = telahTampalanAmgGdB; //AS26 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 4) 
        rowNew10.getCell(46) .value = telahTampalanAmgGkB; //AT26 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 4) 
        rowNew10.getCell(48) .value = cabutanGd; // AV26 Gigi Desidus Dicabut (Darjah 4)
        rowNew10.getCell(49) .value = cabutanGk; // AW26 Gigi Kekal Dicabut (Darjah 4) 
        rowNew10.getCell(50) .value = penskaleran; // AX26 Penskelaran (Darjah 4) 
        rowNew10.getCell(51) .value = caseCompleted; // AY26 Kes Selesai (Darjah 4) 
        rowNew10.getCell(52) .value = skorGIS0; // AZ26 GIS SKOR 0 (Darjah 4) 
        rowNew10.getCell(53) .value = skorGIS1; // BA26 GIS SKOR 1 (Darjah 4) 
        rowNew10.getCell(54) .value = skorGIS2; // BB26 GIS SKOR 2 (Darjah 4) 
        rowNew10.getCell(55) .value = skorGIS3; // BC26 GIS SKOR 3 (Darjah 4)

        let rowNew11 = worksheet.getRow(27);
        rowNew11.getCell(8) .value = skorPlakC; //H27 Kebersihan Mulut Skor C (Darjah 4)

        let rowNew12 = worksheet.getRow(28);
        rowNew12.getCell(8) .value = skorPlakE; //H28 Kebersihan Mulut Skor E (Darjah 4)
        rowNew12.getCell(30) .value = perluFSGigiS; //AD28 Bil. Gigi Semula perlu Fisur Sealan (Darjah 4) 
        rowNew12.getCell(32) .value = perluTampalanAntGdS; //AF28 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 4) 
        rowNew12.getCell(33) .value = perluTampalanAntGkS; //AG28 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 4) 
        rowNew12.getCell(34) .value = perluTampalanPosGdS; //AH28 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 4) 
        rowNew12.getCell(35) .value = perluTampalanPosGkS; //AI28 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 4) 
        rowNew12.getCell(36) .value = perluTampalanAmgGdS; //AJ28 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 4) 
        rowNew12.getCell(37) .value = perluTampalanAmgGkS; //AK28 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 4) 
        rowNew12.getCell(39) .value = telahFSMuridS; //AM28 Bil. Murid S Telah Menerima Fisur Sealan (Darjah 4) 
        rowNew12.getCell(40) .value = telahFSGigiS; //AN28 Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 4) 
        rowNew12.getCell(41) .value = telahTampalanAntGdS; //AO28 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 4) 
        rowNew12.getCell(42) .value = telahTampalanAntGkS; //AP28 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 4) 
        rowNew12.getCell(43) .value = telahTampalanPosGdS; //AQ28 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 4) 
        rowNew12.getCell(44) .value = telahTampalanPosGkS; //AR28 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 4)
        rowNew12.getCell(45) .value = telahTampalanAmgGdS; //AS28 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 4) 
        rowNew12.getCell(46) .value = telahTampalanAmgGkS; //AT28 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 4)

        // Reten Sekolah (Darjah 5)

        let rowNew13 = worksheet.getRow(29);
        rowNew13.getCell(2) .value = kedatanganEnggan; //B29 Kedatangan enggan (Darjah 5)
        rowNew13.getCell(3) .value = kedatanganTidakHadir; //C29 Kedatangan Tidak Hadir (Darjah 5)
        rowNew13.getCell(4) .value = enrolmen; //D29 Kedatangan enrolmen (Darjah 5)
        rowNew13.getCell(5) .value = kedatanganBaru; //E29 Kedatangan baru (Darjah 5)
        rowNew13.getCell(6) .value = kedatanganUlangan; //F29 Kedatangan ulangan (Darjah 5)
        rowNew13.getCell(8) .value = skorPlakA; //H29 Kebersihan Mulut Skor A (Darjah 5)
        rowNew13.getCell(9) .value = dStatusdfx; //I29 Karies Gigi Desidus (d) (Darjah 5) 
        rowNew13.getCell(10) .value = fStatusdfx; //J29 Telah Ditampal Gigi Desidus (f) (Darjah 5) 
        rowNew13.getCell(11) .value = xStatusdfx; //K29 Gigi Desidus Perlu Ditampal (x) (Darjah 5) 
        rowNew13.getCell(13) .value = dStatusDMFX; //M29 Karies Gigi Kekal (D) (Darjah 5) 
        rowNew13.getCell(14) .value = mStatusDMFX; //N29 Gigi Kekal Telah Hilang (M) (Darjah 5) 
        rowNew13.getCell(15) .value = fStatusDMFX; //O29 Gigi Kekal Telah Ditampal (F) (Darjah 5) 
        rowNew13.getCell(16) .value = xStatusDMFX; //P29 Gigi Kekal Telah Dicabut (X) (Darjah 5)
        rowNew13.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R29 Status Gigi Kekal DMFX <= 3 (Darjah 5) 
        rowNew13.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S29 Status Gigi Kekal X+M = 0  (Darjah 5) 
        rowNew13.getCell(20) .value = mbk; //T29 Mulut Bebas Karies (MBK) (Darjah 5) 
        rowNew13.getCell(21) .value = statusBebasKaries; //U29 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (Darjah 5)
        rowNew13.getCell(22) .value = dfxEqualToZero; //V29 dfx=0 (Darjah 5) 
        rowNew13.getCell(23) .value = mulutBebasGingivitis; //W29 Mulut Bebas Gingivitis (MBG) (Darjah 5) 
        rowNew13.getCell(24) .value = tprICDAS; //X29 TPR (Darjah 5) 
        rowNew13.getCell(25) .value = kecederaanGigiAnterior; //Y29 Kecederaan gigi Anterior (Darjah 5) 
        rowNew13.getCell(26) .value = cleftAda; //Z29 cleft Ada (Darjah 5) 
        rowNew13.getCell(27) .value = cleftRujuk; //AA29 cleft Rujuk (Darjah 5) 
        rowNew13.getCell(29) .value = perluFSMuridB; //AC29 Bil. Murid Baru perlu Fisur Sealan (Darjah 5) 
        rowNew13.getCell(30) .value = perluFSGigiB; //AD29 Bil. Gigi Baru perlu Fisur Sealan (Darjah 5) 
        rowNew13.getCell(31) .value = perluFsBilGigiFailed; //AE29 Bilangan Gigi 'Failed' Semula FS (Darjah 5) 
        rowNew13.getCell(32) .value = perluTampalanAntGdB; //AF29 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 5) 
        rowNew13.getCell(33) .value = perluTampalanAntGkB; //AG29 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 5) 
        rowNew13.getCell(34) .value = perluTampalanPosGdB; //AH29 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 5) 
        rowNew13.getCell(35) .value = perluTampalanPosGkB; //AI29 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 5) 
        rowNew13.getCell(36) .value = perluTampalanAmgGdB; //AJ29 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 5) 
        rowNew13.getCell(37) .value = perluTampalanAmgGkB; //AK29 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 5) 
        rowNew13.getCell(39) .value = telahFSMuridB; //AM29 Bil. Murid B Telah Menerima Fisur Sealan (Darjah 5) 
        rowNew13.getCell(40) .value = telahFSGigiB; //AN29 Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 5) 
        rowNew13.getCell(41) .value = telahTampalanAntGdB; //AO29 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 5) 
        rowNew13.getCell(42) .value = telahTampalanAntGkB; //AP29 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 5) 
        rowNew13.getCell(43) .value = telahTampalanPosGdB; //AQ29 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 5) 
        rowNew13.getCell(44) .value = telahTampalanPosGkB; //AR29 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 5) 
        rowNew13.getCell(45) .value = telahTampalanAmgGdB; //AS29 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 5) 
        rowNew13.getCell(46) .value = telahTampalanAmgGkB; //AT29 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 5) 
        rowNew13.getCell(48) .value = cabutanGd; // AV29 Gigi Desidus Dicabut (Darjah 5)
        rowNew13.getCell(49) .value = cabutanGk; // AW29 Gigi Kekal Dicabut (Darjah 5) 
        rowNew13.getCell(50) .value = penskaleran; // AX29 Penskelaran (Darjah 5) 
        rowNew13.getCell(51) .value = caseCompleted; // AY29 Kes Selesai (Darjah 5) 
        rowNew13.getCell(52) .value = skorGIS0; // AZ29 GIS SKOR 0 (Darjah 5) 
        rowNew13.getCell(53) .value = skorGIS1; // BA29 GIS SKOR 1 (Darjah 5) 
        rowNew13.getCell(54) .value = skorGIS2; // BB29 GIS SKOR 2 (Darjah 5) 
        rowNew13.getCell(55) .value = skorGIS3; // BC29 GIS SKOR 3 (Darjah 5)

        let rowNew14 = worksheet.getRow(30);
        rowNew14.getCell(8) .value = skorPlakC; //H30 Kebersihan Mulut Skor C (Darjah 5)

        let rowNew15 = worksheet.getRow(31);
        rowNew15.getCell(8) .value = skorPlakE; //H31 Kebersihan Mulut Skor E (Darjah 5)
        rowNew15.getCell(30) .value = perluFSGigiS; //AD31 Bil. Gigi Semula perlu Fisur Sealan (Darjah 5) 
        rowNew15.getCell(32) .value = perluTampalanAntGdS; //AF31 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 5) 
        rowNew15.getCell(33) .value = perluTampalanAntGkS; //AG31 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 5) 
        rowNew15.getCell(34) .value = perluTampalanPosGdS; //AH31 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 5) 
        rowNew15.getCell(35) .value = perluTampalanPosGkS; //AI31 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 5) 
        rowNew15.getCell(36) .value = perluTampalanAmgGdS; //AJ31 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 5) 
        rowNew15.getCell(37) .value = perluTampalanAmgGkS; //AK31 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 5) 
        rowNew15.getCell(39) .value = telahFSMuridS; //AM31 Bil. Murid S Telah Menerima Fisur Sealan (Darjah 5) 
        rowNew15.getCell(40) .value = telahFSGigiS; //AN31 Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 5) 
        rowNew15.getCell(41) .value = telahTampalanAntGdS; //AO31 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 5) 
        rowNew15.getCell(42) .value = telahTampalanAntGkS; //AP31 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 5) 
        rowNew15.getCell(43) .value = telahTampalanPosGdS; //AQ31 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 5) 
        rowNew15.getCell(44) .value = telahTampalanPosGkS; //AR31 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 5)
        rowNew15.getCell(45) .value = telahTampalanAmgGdS; //AS31 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 5) 
        rowNew15.getCell(46) .value = telahTampalanAmgGkS; //AT31 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 5)

        // Reten Sekolah (Darjah 6 OR Peralihan)

        let rowNew16 = worksheet.getRow(32);
        rowNew16.getCell(2) .value = kedatanganEnggan; //B32 Kedatangan enggan (Darjah 6 OR Peralihan)
        rowNew16.getCell(3) .value = kedatanganTidakHadir; //C32 Kedatangan Tidak Hadir (Darjah 6 OR Peralihan)
        rowNew16.getCell(4) .value = enrolmen; //D32 Kedatangan enrolmen (Darjah 6 OR Peralihan)
        rowNew16.getCell(5) .value = kedatanganBaru; //E32 Kedatangan baru (Darjah 6 OR Peralihan)
        rowNew16.getCell(6) .value = kedatanganUlangan; //F32 Kedatangan ulangan (Darjah 6 OR Peralihan)
        rowNew16.getCell(8) .value = skorPlakA; //H32 Kebersihan Mulut Skor A (Darjah 6 OR Peralihan)
        rowNew16.getCell(9) .value = dStatusdfx; //I32 Karies Gigi Desidus (d) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(10) .value = fStatusdfx; //J32 Telah Ditampal Gigi Desidus (f) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(11) .value = xStatusdfx; //K32 Gigi Desidus Perlu Ditampal (x) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(13) .value = dStatusDMFX; //M32 Karies Gigi Kekal (D) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(14) .value = mStatusDMFX; //N32 Gigi Kekal Telah Hilang (M) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(15) .value = fStatusDMFX; //O32 Gigi Kekal Telah Ditampal (F) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(16) .value = xStatusDMFX; //P32 Gigi Kekal Telah Dicabut (X) (Darjah 6 OR Peralihan)
        rowNew16.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R32 Status Gigi Kekal DMFX <= 3 (Darjah 6 OR Peralihan) 
        rowNew16.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S32 Status Gigi Kekal X+M = 0  (Darjah 6 OR Peralihan) 
        rowNew16.getCell(20) .value = mbk; //T32 Mulut Bebas Karies (MBK) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(21) .value = statusBebasKaries; //U32 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (Darjah 6 OR Peralihan)
        rowNew16.getCell(22) .value = dfxEqualToZero; //V32 dfx=0 (Darjah 6 OR Peralihan) 
        rowNew16.getCell(23) .value = mulutBebasGingivitis; //W32 Mulut Bebas Gingivitis (MBG) (Darjah 6 OR Peralihan) 
        rowNew16.getCell(24) .value = tprICDAS; //X32 TPR (Darjah 6 OR Peralihan) 
        rowNew16.getCell(25) .value = kecederaanGigiAnterior; //Y32 Kecederaan gigi Anterior (Darjah 6 OR Peralihan) 
        rowNew16.getCell(26) .value = cleftAda; //Z32 cleft Ada (Darjah 6 OR Peralihan) 
        rowNew16.getCell(27) .value = cleftRujuk; //AA32 cleft Rujuk (Darjah 6 OR Peralihan) 
        rowNew16.getCell(29) .value = perluFSMuridB; //AC32 Bil. Murid Baru perlu Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew16.getCell(30) .value = perluFSGigiB; //AD32 Bil. Gigi Baru perlu Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew16.getCell(31) .value = perluFsBilGigiFailed; //AE32 Bilangan Gigi 'Failed' Semula FS (Darjah 6 OR Peralihan) 
        rowNew16.getCell(32) .value = perluTampalanAntGdB; //AF32 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(33) .value = perluTampalanAntGkB; //AG32 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(34) .value = perluTampalanPosGdB; //AH32 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(35) .value = perluTampalanPosGkB; //AI32 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(36) .value = perluTampalanAmgGdB; //AJ32 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(37) .value = perluTampalanAmgGkB; //AK32 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(39) .value = telahFSMuridB; //AM32 Bil. Murid B Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew16.getCell(40) .value = telahFSGigiB; //AN32 Bil. Gigi B Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew16.getCell(41) .value = telahTampalanAntGdB; //AO32 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(42) .value = telahTampalanAntGkB; //AP32 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(43) .value = telahTampalanPosGdB; //AQ32 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(44) .value = telahTampalanPosGkB; //AR32 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(45) .value = telahTampalanAmgGdB; //AS32 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(46) .value = telahTampalanAmgGkB; //AT32 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (Darjah 6 OR Peralihan) 
        rowNew16.getCell(48) .value = cabutanGd; // AV32 Gigi Desidus Dicabut (Darjah 6 OR Peralihan)
        rowNew16.getCell(49) .value = cabutanGk; // AW32 Gigi Kekal Dicabut (Darjah 6 OR Peralihan) 
        rowNew16.getCell(50) .value = penskaleran; // AX32 Penskelaran (Darjah 6 OR Peralihan) 
        rowNew16.getCell(51) .value = caseCompleted; // AY32 Kes Selesai (Darjah 6 OR Peralihan) 
        rowNew16.getCell(52) .value = skorGIS0; // AZ32 GIS SKOR 0 (Darjah 6 OR Peralihan) 
        rowNew16.getCell(53) .value = skorGIS1; // BA32 GIS SKOR 1 (Darjah 6 OR Peralihan) 
        rowNew16.getCell(54) .value = skorGIS2; // BB32 GIS SKOR 2 (Darjah 6 OR Peralihan) 
        rowNew16.getCell(55) .value = skorGIS3; // BC32 GIS SKOR 3 (Darjah 6 OR Peralihan)

        let rowNew17 = worksheet.getRow(33);
        rowNew17.getCell(8) .value = skorPlakC; //H33 Kebersihan Mulut Skor C (Darjah 6 OR Peralihan)

        let rowNew18 = worksheet.getRow(34);
        rowNew18.getCell(8) .value = skorPlakE; //H34 Kebersihan Mulut Skor E (Darjah 6 OR Peralihan)
        rowNew18.getCell(30) .value = perluFSGigiS; //AD34 Bil. Gigi Semula perlu Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew18.getCell(32) .value = perluTampalanAntGdS; //AF34 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(33) .value = perluTampalanAntGkS; //AG34 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(34) .value = perluTampalanPosGdS; //AH34 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(35) .value = perluTampalanPosGkS; //AI34 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(36) .value = perluTampalanAmgGdS; //AJ34 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(37) .value = perluTampalanAmgGkS; //AK34 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(39) .value = telahFSMuridS; //AM34 Bil. Murid S Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew18.getCell(40) .value = telahFSGigiS; //AN34 Bil. Gigi S Telah Menerima Fisur Sealan (Darjah 6 OR Peralihan) 
        rowNew18.getCell(41) .value = telahTampalanAntGdS; //AO34 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(42) .value = telahTampalanAntGkS; //AP34 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(43) .value = telahTampalanPosGdS; //AQ34 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(44) .value = telahTampalanPosGkS; //AR34 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (Darjah 6 OR Peralihan)
        rowNew18.getCell(45) .value = telahTampalanAmgGdS; //AS34 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (Darjah 6 OR Peralihan) 
        rowNew18.getCell(46) .value = telahTampalanAmgGkS; //AT34 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (Darjah 6 OR Peralihan)

        //RETEN KKI

        let rowNew19 = worksheet.getRow(35);
        rowNew19.getCell(2) .value = kedatanganEnggan; //B35 Kedatangan enggan (KKI)
        rowNew19.getCell(3) .value = kedatanganTidakHadir; //C35 Kedatangan Tidak Hadir (KKI)
        rowNew19.getCell(4) .value = enrolmen; //D35 Kedatangan enrolmen (KKI)
        rowNew19.getCell(5) .value = kedatanganBaru; //E35 Kedatangan baru (KKI)
        rowNew19.getCell(6) .value = kedatanganUlangan; //F35 Kedatangan ulangan (KKI)
        rowNew19.getCell(8) .value = skorPlakA; //H35 Kebersihan Mulut Skor A (KKI)
        rowNew19.getCell(9) .value = dStatusdfx; //I35 Karies Gigi Desidus (d) (KKI) 
        rowNew19.getCell(10) .value = fStatusdfx; //J35 Telah Ditampal Gigi Desidus (f) (KKI) 
        rowNew19.getCell(11) .value = xStatusdfx; //K35 Gigi Desidus Perlu Ditampal (x) (KKI) 
        rowNew19.getCell(13) .value = dStatusDMFX; //M35 Karies Gigi Kekal (D) (KKI) 
        rowNew19.getCell(14) .value = mStatusDMFX; //N35 Gigi Kekal Telah Hilang (M) (KKI) 
        rowNew19.getCell(15) .value = fStatusDMFX; //O35 Gigi Kekal Telah Ditampal (F) (KKI) 
        rowNew19.getCell(16) .value = xStatusDMFX; //P35 Gigi Kekal Telah Dicabut (X) (KKI)
        rowNew19.getCell(18) .value = gigiKekalDMFXsamaAtauKurangDari3; //R35 Status Gigi Kekal DMFX <= 3 (KKI) 
        rowNew19.getCell(19) .value = totalStatusGigiKekalSamaKosong; //S35 Status Gigi Kekal X+M = 0  (KKI) 
        rowNew19.getCell(20) .value = mbk; //T35 Mulut Bebas Karies (MBK) (KKI) 
        rowNew19.getCell(21) .value = statusBebasKaries; //U35 Status Gigi Kekal Bebas Karies (BK) DMFX = 0 (KKI)
        rowNew19.getCell(22) .value = dfxEqualToZero; //V35 dfx=0 (KKI) 
        rowNew19.getCell(23) .value = mulutBebasGingivitis; //W35 Mulut Bebas Gingivitis (MBG) (KKI) 
        rowNew19.getCell(24) .value = tprICDAS; //X35 TPR (KKI) 
        rowNew19.getCell(25) .value = kecederaanGigiAnterior; //Y35 Kecederaan gigi Anterior (KKI) 
        rowNew19.getCell(26) .value = cleftAda; //Z35 cleft Ada (KKI) 
        rowNew19.getCell(27) .value = cleftRujuk; //AA35 cleft Rujuk (KKI) 
        rowNew19.getCell(29) .value = perluFSMuridB; //AC35 Bil. Murid Baru perlu Fisur Sealan (KKI) 
        rowNew19.getCell(30) .value = perluFSGigiB; //AD35 Bil. Gigi Baru perlu Fisur Sealan (KKI) 
        rowNew19.getCell(31) .value = perluFsBilGigiFailed; //AE35 Bilangan Gigi 'Failed' Semula FS (KKI) 
        rowNew19.getCell(32) .value = perluTampalanAntGdB; //AF35 Perlu Tampalan Anterior Sewarna Gigi Decidus Baru (KKI) 
        rowNew19.getCell(33) .value = perluTampalanAntGkB; //AG35 Perlu Tampalan Anterior Sewarna Gigi Kekal Baru (KKI) 
        rowNew19.getCell(34) .value = perluTampalanPosGdB; //AH35 Perlu Tampalan Posterior Sewarna Gigi Decidus Baru (KKI) 
        rowNew19.getCell(35) .value = perluTampalanPosGkB; //AI35 Perlu Tampalan Posterior Sewarna Gigi Kekal Baru (KKI) 
        rowNew19.getCell(36) .value = perluTampalanAmgGdB; //AJ35 Perlu Tampalan Posterior Amalgam Gigi Decidus Baru (KKI) 
        rowNew19.getCell(37) .value = perluTampalanAmgGkB; //AK35 Perlu Tampalan Posterior Amalgam Gigi Kekal Baru (KKI) 
        rowNew19.getCell(39) .value = telahFSMuridB; //AM35 Bil. Murid B Telah Menerima Fisur Sealan (KKI) 
        rowNew19.getCell(40) .value = telahFSGigiB; //AN35 Bil. Gigi B Telah Menerima Fisur Sealan (KKI) 
        rowNew19.getCell(41) .value = telahTampalanAntGdB; //AO35 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Baru (KKI) 
        rowNew19.getCell(42) .value = telahTampalanAntGkB; //AP35 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Baru (KKI) 
        rowNew19.getCell(43) .value = telahTampalanPosGdB; //AQ35 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Baru (KKI) 
        rowNew19.getCell(44) .value = telahTampalanPosGkB; //AR35 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Baru (KKI) 
        rowNew19.getCell(45) .value = telahTampalanAmgGdB; //AS35 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Baru (KKI) 
        rowNew19.getCell(46) .value = telahTampalanAmgGkB; //AT35 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Baru (KKI) 
        rowNew19.getCell(48) .value = cabutanGd; // AV35 Gigi Desidus Dicabut (KKI)
        rowNew19.getCell(49) .value = cabutanGk; // AW35 Gigi Kekal Dicabut (KKI) 
        rowNew19.getCell(50) .value = penskaleran; // AX35 Penskelaran (KKI) 
        rowNew19.getCell(51) .value = caseCompleted; // AY35 Kes Selesai (KKI) 
        rowNew19.getCell(52) .value = skorGIS0; // AZ35 GIS SKOR 0 (KKI) 
        rowNew19.getCell(53) .value = skorGIS1; // BA35 GIS SKOR 1 (KKI) 
        rowNew19.getCell(54) .value = skorGIS2; // BB35 GIS SKOR 2 (KKI) 
        rowNew19.getCell(55) .value = skorGIS3; // BC35 GIS SKOR 3 (KKI)

        let rowNew20 = worksheet.getRow(36);
        rowNew20.getCell(8) .value = skorPlakC; //H36 Kebersihan Mulut Skor C (KKI)

        let rowNew21 = worksheet.getRow(37);
        rowNew21.getCell(8) .value = skorPlakE; //H37 Kebersihan Mulut Skor E (KKI)
        rowNew21.getCell(30) .value = perluFSGigiS; //AD37 Bil. Gigi Semula perlu Fisur Sealan (KKI) 
        rowNew21.getCell(32) .value = perluTampalanAntGdS; //AF37 Perlu Tampalan Anterior Sewarna Gigi Decidus Semula (KKI) 
        rowNew21.getCell(33) .value = perluTampalanAntGkS; //AG37 Perlu Tampalan Anterior Sewarna Gigi Kekal Semula (KKI) 
        rowNew21.getCell(34) .value = perluTampalanPosGdS; //AH37 Perlu Tampalan Posterior Sewarna Gigi Decidus Semula (KKI) 
        rowNew21.getCell(35) .value = perluTampalanPosGkS; //AI37 Perlu Tampalan Posterior Sewarna Gigi Kekal Semula (KKI) 
        rowNew21.getCell(36) .value = perluTampalanAmgGdS; //AJ37 Perlu Tampalan Posterior Amalgam Gigi Decidus Semula (KKI) 
        rowNew21.getCell(37) .value = perluTampalanAmgGkS; //AK37 Perlu Tampalan Posterior Amalgam Gigi Kekal Semula (KKI) 
        rowNew21.getCell(39) .value = telahFSMuridS; //AM37 Bil. Murid S Telah Menerima Fisur Sealan (KKI) 
        rowNew21.getCell(40) .value = telahFSGigiS; //AN37 Bil. Gigi S Telah Menerima Fisur Sealan (KKI) 
        rowNew21.getCell(41) .value = telahTampalanAntGdS; //AO37 Telah Dibuat Tampalan Anterior Sewarna Gigi Decidus Semula (KKI) 
        rowNew21.getCell(42) .value = telahTampalanAntGkS; //AP37 Telah Dibuat Tampalan Anterior Sewarna Gigi Kekal Semula (KKI) 
        rowNew21.getCell(43) .value = telahTampalanPosGdS; //AQ37 Telah Dibuat Tampalan Posterior Sewarna Gigi Decidus Semula (KKI) 
        rowNew21.getCell(44) .value = telahTampalanPosGkS; //AR37 Telah Dibuat Tampalan Posterior Sewarna Gigi Kekal Semula (KKI)
        rowNew21.getCell(45) .value = telahTampalanAmgGdS; //AS37 Telah Dibuat Tampalan Posterior Amalgam Gigi Decidus Semula (KKI) 
        rowNew21.getCell(46) .value = telahTampalanAmgGkS; //AT37 Telah Dibuat Tampalan Posterior Amalgam Gigi Kekal Semula (KKI)

        let newfile = path.join(
          __dirname,
          '..',
          'public',
          'exports',
          'test-PG201A.xlsx'
        );

        // Write the file
        await workbook.xlsx.writeFile(newfile);

        setTimeout(function () {
          fs.unlinkSync(newfile); // delete this file after 30 seconds
        }, 30000);
        setTimeout(function () {
          return res.download(newfile); // delete this file after 30 seconds
        }, 3000);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
  );
};
