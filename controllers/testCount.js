const fs = require('fs');
const path = require('path');
const async = require('async');
const Excel = require('exceljs');
const Sekolah = require('../models/Sekolah');

exports.testFunction = function (req, res) {
  async.parallel(
    {
      resultPGS203: function (callback) {
        Sekolah.aggregate(
          [
            { $match: {} },
            {
              $group: {
                _id: '$createdByDaerah',
                jumlahKedatanganBaru: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'baru-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahKedatanganUlangan: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'ulangan-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahd: {
                  $sum: { $dAdaGigiDesidus: 1 },
                },
                jumlahf: {
                  $sum: { $fAdaGigiDesidus: 1 },
                },
                jumlahx: {
                  $sum: { $xAdaGigiDesidus: 1 },
                },
                jumlahD: {
                  $sum: { $dAdaGigiKekal: 1 },
                },
                jumlahM: {
                  $sum: { $mAdaGigiKekal: 1 },
                },
                jumlahF: {
                  $sum: { $fAdaGigiKekal: 1 },
                },
                jumlahX: {
                  $sum: { $xAdaGigiKekal: 1 },
                },
                jumlahMBK: {
                  $sum: {
                    $cond: [
                      {
                        $and: [{ $eq: ['$dAdaGigiDesidus', '0'] }],
                      },
                      1,
                      0,
                    ],
                  },
                },
                dfxEqualToZero: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiDesidus', '0'] },
                          { $eq: ['$xAdaGigiDesidus', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                statusBebasKaries: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                totalStatusGigiKekalSamaKosong: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                gigiKekalDMFXsamaAtauKurangDari1: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                gigiKekalDMFXsamaAtauKurangDari2: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                eMoreThanZero: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                statusBebasKariesTapiElebihDariSatu: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$eAdaGigiKekal', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                kecederaanGigiAnterior: {
                  $sum: { $kecederaanGigiAnteriorTrauma: 0 },
                },
                jumlahTPR: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiKekal', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                          { $eq: ['$eAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                skorGIS0: {
                  $sum: { $skorGisMulutOralHygiene: 0 },
                },
                skorGIS1: {
                  $sum: { $skorGisMulutOralHygiene: 1 },
                },
                skorGIS2: {
                  $sum: { $skorGisMulutOralHygiene: 2 },
                },
                skorGIS3: {
                  $sum: { $skorGisMulutOralHygiene: 3 },
                },
                perluFvMurid: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFv', '0'] },
                          { $gt: ['$semulaJumlahGigiKekalPerluFv', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluPRR1Murid: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluPrrJenis1', '0'] },
                          {
                            $gt: ['$semulaJumlahGigiKekalPerluPrrJenis1', '0'],
                          },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluFSMuridB: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFs', '0'] },
                          {
                            $gt: ['$semulaJumlahGigiKekalPerluFs', '0'],
                          },
                          {
                            $eq: [
                              '$baruUlanganKedatanganPendaftaran',
                              'baru-kedatangan-pendaftaran',
                            ],
                          },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluFSMuridS: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFs', '0'] },
                          {
                            $gt: ['$semulaJumlahGigiKekalPerluFs', '0'],
                          },
                          {
                            $eq: [
                              '$baruUlanganKedatanganPendaftaran',
                              'ulangan-kedatangan-pendaftaran',
                            ],
                          },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluFSGigiB: {
                  $sum: { $gt: ['$baruJumlahGigiKekalPerluFs', '0'] },
                },
                perluFSGigiS: {
                  $sum: { $gt: ['$semulaJumlahGigiKekalPerluFs', '0'] },
                },
                perluTampalanAntGdB: {
                  $sum: {
                    $gt: [
                      '$baruGDAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAntGdS: {
                  $sum: {
                    $gt: [
                      '$semulaGDAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAntGkB: {
                  $sum: {
                    $gt: [
                      '$baruGKAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAntGkS: {
                  $sum: {
                    $gt: [
                      '$semulaGKAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGdB: {
                  $sum: {
                    $gt: [
                      '$baruGDPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGdS: {
                  $sum: {
                    $gt: [
                      '$semulaGDPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGkB: {
                  $sum: {
                    $gt: [
                      '$baruGKPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGkS: {
                  $sum: {
                    $gt: [
                      '$semulaGKPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGdB: {
                  $sum: {
                    $gt: [
                      '$baruGDPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGdS: {
                  $sum: {
                    $gt: [
                      '$semulaGDPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGkB: {
                  $sum: {
                    $gt: [
                      '$baruGKPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGkS: {
                  $sum: {
                    $gt: [
                      '$semulaGKPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                telahFvMurid: {
                  $sum: {
                    $and: [
                      { $gt: ['$baruJumlahGigiKekalDiberiFv', '0'] },
                      { $gt: ['$semulaJumlahGigiKekalDiberiFv', '0'] },
                    ],
                  },
                },
                telahPRR1Murid: {
                  $sum: {
                    $and: [
                      { $gt: ['$baruJumlahGigiKekalDiberiPrrJenis1', '0'] },
                      { $gt: ['$semulaJumlahGigiKekalDiberiPrrJenis1', '0'] },
                    ],
                  },
                },
                telahFSMuridB: {
                  $sum: { $gt: ['$baruJumlahGigiKekalDibuatFs', '0'] },
                },
                telahFSMuridS: {
                  $sum: { $gt: ['$semulaJumlahGigiKekalDibuatFs', '0'] },
                },
                telahTampalanAntGdB: {
                  $sum: {
                    $gt: ['$gdBaruAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAntGdS: {
                  $sum: {
                    $gt: ['$gdSemulaAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAntGkB: {
                  $sum: {
                    $gt: ['$gkBaruAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAntGkS: {
                  $sum: {
                    $gt: ['$gkSemulaAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGdB: {
                  $sum: {
                    $gt: ['$gdBaruPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGdS: {
                  $sum: {
                    $gt: ['$gdSemulaPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGkB: {
                  $sum: {
                    $gt: ['$gkBaruPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGkS: {
                  $sum: {
                    $gt: ['$gkSemulaPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGdB: {
                  $sum: {
                    $gt: ['$gdBaruPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGdS: {
                  $sum: {
                    $gt: ['$gdSemulaPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGkB: {
                  $sum: {
                    $gt: ['$gkBaruPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGkS: {
                  $sum: {
                    $gt: ['$gkSemulaPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                cabutanGd: {
                  $sum: { $cabutDesidusPenyataAkhir2: 1 },
                },
                cabutanGk: {
                  $sum: { $cabutKekalPenyataAkhir2: 1 },
                },
                penskaleran: {
                  $sum: { $penskaleranPenyataAkhir2: 1 },
                },
                caseCompleted: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$kesSelesaiPenyataAkhir2', true],
                      },
                      1,
                      0,
                    ],
                  },
                },
              },
            },
          ],
          callback
        );
      },
      // break line to add more aggregate. please add this break line if you are using multiple aggregate
      resultBEGIN: function (callback) {
        Sekolah.aggregate(
          [
            { $match: {} },
            {
              $group: {
                _id: '$createdByKp',
                pesakitBaru: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'baru-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                // ambil dari fasilitis
                jumlahFasiliti: {
                  $sum: {
                    $cond: [{ $eq: ['$pasukanPergigianBergerak', true] }, 1, 0],
                  },
                },
                // ambil dari fasilitis
                jumlahFasilitiLaksanakanBEGIN: {
                  $sum: {
                    $cond: [{ $eq: ['$pasukanPergigianBergerak', true] }, 1, 0],
                  },
                },
                // ambil dari langit
                lowCRA: {
                  $sum: {
                    $cond: [{ $eq: ['$pasukanPergigianBergerak', true] }, 1, 0],
                  },
                },
                // ambil dari langit
                moderateCRA: {
                  $sum: {
                    $cond: [{ $eq: ['$pasukanPergigianBergerak', true] }, 1, 0],
                  },
                },
                // ambil dari langit
                highCRA: {
                  $sum: {
                    $cond: [{ $eq: ['$pasukanPergigianBergerak', true] }, 1, 0],
                  },
                },
                jumlahKKlaksanakanBEGIN: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2',
                          true,
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
              },
            },
          ],
          callback
        );
      },
      // break line to add more aggregate. please add this break line if you are using multiple aggregate
      resultPG201A: function (callback) {
        Sekolah.aggregate(
          [
            { $match: {} },
            {
              $group: {
                _id: '$createdByDaerah',
                engganKedatanganPendaftaran: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$engganKedatanganPendaftaran', true],
                      },
                      1,
                      0,
                    ],
                  },
                },
                kedatanganTidakHadir: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$tidakHadirKedatanganPendaftaran', true],
                      },
                      1,
                      0,
                    ],
                  },
                },
                // ambil dari fasilitis
                enrolmen: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$tidakHadirKedatanganPendaftaran', true],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahKedatanganBaru: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'baru-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahKedatanganUlangan: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'ulangan-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                skorPlakA: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$kebersihanMulutOralHygiene', 'A'],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahd: {
                  $sum: { $dAdaGigiDesidus: 1 },
                },
                jumlahf: {
                  $sum: { $fAdaGigiDesidus: 1 },
                },
                jumlahx: {
                  $sum: { $xAdaGigiDesidus: 1 },
                },
                jumlahE: {
                  $sum: { $eAdaGigiKekal: 1 },
                },
                jumlahD: {
                  $sum: { $dAdaGigiKekal: 1 },
                },
                jumlahM: {
                  $sum: { $mAdaGigiKekal: 1 },
                },
                jumlahF: {
                  $sum: { $fAdaGigiKekal: 1 },
                },
                jumlahX: {
                  $sum: { $xAdaGigiKekal: 1 },
                },
                gigiKekalDMFXsamaAtauKurangDari3: {
                  $sum: {
                    $cond: [
                      {
                        $sum: [{ $dAdaGigiKekal: 1 }],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahMBK: {
                  $sum: {
                    $cond: [
                      {
                        $and: [{ $eq: ['$dAdaGigiDesidus', '0'] }],
                      },
                      1,
                      0,
                    ],
                  },
                },
                dfxEqualToZero: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiDesidus', '0'] },
                          { $eq: ['$xAdaGigiDesidus', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                statusBebasKaries: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                totalStatusGigiKekalSamaKosong: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                gigiKekalDMFXsamaAtauKurangDari1: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                gigiKekalDMFXsamaAtauKurangDari2: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                eMoreThanZero: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiDesidus', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                statusBebasKariesTapiElebihDariSatu: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$eAdaGigiKekal', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                kecederaanGigiAnterior: {
                  $sum: { $kecederaanGigiAnteriorTrauma: 0 },
                },
                jumlahTPR: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $eq: ['$dAdaGigiKekal', '0'] },
                          { $eq: ['$mAdaGigiKekal', '0'] },
                          { $eq: ['$fAdaGigiKekal', '0'] },
                          { $eq: ['$xAdaGigiKekal', '0'] },
                          { $eq: ['$eAdaGigiKekal', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                skorGIS0: {
                  $sum: { $skorGisMulutOralHygiene: 0 },
                },
                skorGIS1: {
                  $sum: { $skorGisMulutOralHygiene: 1 },
                },
                skorGIS2: {
                  $sum: { $skorGisMulutOralHygiene: 2 },
                },
                skorGIS3: {
                  $sum: { $skorGisMulutOralHygiene: 3 },
                },
                perluFvMurid: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFv', '0'] },
                          { $gt: ['$semulaJumlahGigiKekalPerluFv', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluPRR1Murid: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluPrrJenis1', '0'] },
                          {
                            $gt: ['$semulaJumlahGigiKekalPerluPrrJenis1', '0'],
                          },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluFSMuridB: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFs', '0'] },
                          {
                            $gt: ['$semulaJumlahGigiKekalPerluFs', '0'],
                          },
                          {
                            $eq: [
                              '$baruUlanganKedatanganPendaftaran',
                              'baru-kedatangan-pendaftaran',
                            ],
                          },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluFSMuridS: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFs', '0'] },
                          {
                            $gt: ['$semulaJumlahGigiKekalPerluFs', '0'],
                          },
                          {
                            $eq: [
                              '$baruUlanganKedatanganPendaftaran',
                              'ulangan-kedatangan-pendaftaran',
                            ],
                          },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                perluFSGigiB: {
                  $sum: { $gt: ['$baruJumlahGigiKekalPerluFs', '0'] },
                },
                perluFSGigiS: {
                  $sum: { $gt: ['$semulaJumlahGigiKekalPerluFs', '0'] },
                },
                perluTampalanAntGdB: {
                  $sum: {
                    $gt: [
                      '$baruGDAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAntGdS: {
                  $sum: {
                    $gt: [
                      '$semulaGDAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAntGkB: {
                  $sum: {
                    $gt: [
                      '$baruGKAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAntGkS: {
                  $sum: {
                    $gt: [
                      '$semulaGKAnteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGdB: {
                  $sum: {
                    $gt: [
                      '$baruGDPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGdS: {
                  $sum: {
                    $gt: [
                      '$semulaGDPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGkB: {
                  $sum: {
                    $gt: [
                      '$baruGKPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanPosGkS: {
                  $sum: {
                    $gt: [
                      '$semulaGKPosteriorSewarnaJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGdB: {
                  $sum: {
                    $gt: [
                      '$baruGDPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGdS: {
                  $sum: {
                    $gt: [
                      '$semulaGDPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGkB: {
                  $sum: {
                    $gt: [
                      '$baruGKPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                perluTampalanAmgGkS: {
                  $sum: {
                    $gt: [
                      '$semulaGKPosteriorAmalgamJumlahTampalanDiperlukan',
                      '0',
                    ],
                  },
                },
                telahFvMurid: {
                  $sum: {
                    $and: [
                      { $gt: ['$baruJumlahGigiKekalDiberiFv', '0'] },
                      { $gt: ['$semulaJumlahGigiKekalDiberiFv', '0'] },
                    ],
                  },
                },
                telahPRR1Murid: {
                  $sum: {
                    $and: [
                      { $gt: ['$baruJumlahGigiKekalDiberiPrrJenis1', '0'] },
                      { $gt: ['$semulaJumlahGigiKekalDiberiPrrJenis1', '0'] },
                    ],
                  },
                },
                telahFSMuridB: {
                  $sum: { $gt: ['$baruJumlahGigiKekalDibuatFs', '0'] },
                },
                telahFSMuridS: {
                  $sum: { $gt: ['$semulaJumlahGigiKekalDibuatFs', '0'] },
                },
                telahTampalanAntGdB: {
                  $sum: {
                    $gt: ['$gdBaruAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAntGdS: {
                  $sum: {
                    $gt: ['$gdSemulaAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAntGkB: {
                  $sum: {
                    $gt: ['$gkBaruAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAntGkS: {
                  $sum: {
                    $gt: ['$gkSemulaAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGdB: {
                  $sum: {
                    $gt: ['$gdBaruPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGdS: {
                  $sum: {
                    $gt: ['$gdSemulaPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGkB: {
                  $sum: {
                    $gt: ['$gkBaruPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanPosGkS: {
                  $sum: {
                    $gt: ['$gkSemulaPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGdB: {
                  $sum: {
                    $gt: ['$gdBaruPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGdS: {
                  $sum: {
                    $gt: ['$gdSemulaPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGkB: {
                  $sum: {
                    $gt: ['$gkBaruPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                telahTampalanAmgGkS: {
                  $sum: {
                    $gt: ['$gkSemulaPosteriorAmalgamJumlahTampalanDibuat', '0'],
                  },
                },
                cabutanGd: {
                  $sum: { $cabutDesidusPenyataAkhir2: 1 },
                },
                cabutanGk: {
                  $sum: { $cabutKekalPenyataAkhir2: 1 },
                },
                penskaleran: {
                  $sum: { $penskaleranPenyataAkhir2: 1 },
                },
                caseCompleted: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$kesSelesaiPenyataAkhir2', true],
                      },
                      1,
                      0,
                    ],
                  },
                },
              },
            },
          ],
          callback
        );
      },
      // break line to add more aggregate. please add this break line if you are using multiple aggregate
      resultTOD: function (callback) {
        Sekolah.aggregate(
          [
            { $match: {} },
            {
              $group: {
                _id: '$createdByDaerah',
                jumlahBaru: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'baru-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahUlangan: {
                  $sum: {
                    $cond: [
                      {
                        $eq: [
                          '$baruUlanganKedatanganPendaftaran',
                          'ulangan-kedatangan-pendaftaran',
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahd: {
                  $sum: { $dAdaGigiDesidus: 1 },
                },
                jumlahm: {
                  $sum: { $mAdaGigiDesidus: 1 },
                },
                jumlahf: {
                  $sum: { $fAdaGigiDesidus: 1 },
                },
                jumlahx: {
                  $sum: { $xAdaGigiDesidus: 1 },
                },
                jumlahSpA: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$kebersihanMulutOralHygiene', 'A'],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpC: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$kebersihanMulutOralHygiene', 'C'],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahSpE: {
                  $sum: {
                    $cond: [
                      {
                        $eq: ['$kebersihanMulutOralHygiene', 'E'],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahTisuKeras: {
                  $sum: { $tisuKerasTrauma: 1 },
                },
                jumlahTisuLembut: {
                  $sum: { $tisuLembutTrauma: 1 },
                },
                jumlahPerluFV: {
                  $sum: {
                    $cond: [
                      {
                        $and: [
                          { $gt: ['$baruJumlahGigiKekalPerluFv', '0'] },
                          { $gt: ['$semulaJumlahGigiKekalPerluFv', '0'] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahTelahFVB: {
                  $sum: {
                    $and: [{ $gt: ['$baruJumlahGigiKekalDiberiFv', '0'] }],
                  },
                },
                jumlahTelahFVS: {
                  $sum: {
                    $cond: [
                      {
                        $and: [{ $gt: ['$semulaJumlahGigiKekalPerluFv', '0'] }],
                      },
                      1,
                      0,
                    ],
                  },
                },
                jumlahTelahTampalAntB: {
                  $sum: {
                    $gt: ['$gdBaruAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                jumlahTelahTampalAntS: {
                  $sum: {
                    $gt: ['$gdSemulaAnteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                jumlahTelahTampalPosB: {
                  $sum: {
                    $gt: ['$gdBaruPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                jumlahTelahTampalPosS: {
                  $sum: {
                    $gt: ['$gdSemulaPosteriorSewarnaJumlahTampalanDibuat', '0'],
                  },
                },
                cabutanGd: {
                  $sum: { $cabutDesidusPenyataAkhir2: 1 },
                },
                jumlahAbses: {
                  $sum: { $absesPenyataAkhir2: 1 },
                },
                jumlahPulpotomi: {
                  $sum: { $pulpotomiPenyataAkhir2: 1 },
                },
                jumlahCTod: {
                  $sum: { $ceramahPromosiPenyataAkhir2: 1 },
                },
                jumlahCPar: {
                  $sum: { $ceramahPromosiPenyataAkhir2: 1 },
                },
                jumlahLMG: {
                  $sum: { $lmgPromosiPenyataAkhir2: 1 },
                },
                // kena kira
                jumlahCRAlow: {
                  $sum: { $lmgPromosiPenyataAkhir2: 1 },
                },
                jumlahCRAmid: {
                  $sum: { $lmgPromosiPenyataAkhir2: 1 },
                },
                jumlahCRAhi: {
                  $sum: { $lmgPromosiPenyataAkhir2: 1 },
                },
                // end kita
              },
            },
          ],
          callback
        );
      },
      // break line to add more aggregate. please add this break line if you are using multiple aggregate
    },
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Error when getting Taska',
          error: err,
        });
      }
      console.log(results);
      return res.json(results);
    }
  );
};

exports.getDetails = async function (req, res) {
  console.log(req.query);
  let newfile = path.join(
    __dirname,
    '..',
    'public',
    'exports',
    req.query.jenisReten + '.xlsx'
  );
  const file = fs.readFileSync(path.resolve(process.cwd(), newfile));
  res.setHeader('Content-Type', 'application/vnd.ms-excel');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${req.query.jenisReten}.xlsx"`
  );
  res.send(file);
};
