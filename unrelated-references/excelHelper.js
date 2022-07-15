const fs = require('fs');
const moment = require('moment');
const path = require('path');
const Excel = require('exceljs');

exports.prepareDocumentLaporan = async function() {
    try {
    const YearNow = moment().format('YYYY');
    let filename = path.join(__dirname, "..", "public", "exports", "blank.xlsx");
    let workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filename);
    let worksheet = workbook.getWorksheet('Sheet1');
    let rowNew = worksheet.getRow(1);
    rowNew.getCell(1).value = `LAPORAN DATA SEMUA TADIKA YANG ADA BAGI TAHUN ${YearNow}.`;
    let rowNew2 = worksheet.getRow(5);
    let rowNew3 = worksheet.getRow(6);
    let rowNew4 = worksheet.getRow(7);
    let rowNew5 = worksheet.getRow(8);
    let rowNew6 = worksheet.getRow(9);
    let rowNew7 = worksheet.getRow(12);
    rowNew2.getCell(1).value = 'JUMLAH TADIKA';
    rowNew3.getCell(1).value = 'NAMA TADIKA YANG ADA';
    rowNew4.getCell(1).value = 'JUMLAH PELAJAR YANG ADA';
    rowNew5.getCell(1).value = 'JUMLAH KP YANG TERLIBAT';
    rowNew6.getCell(1).value = 'NAMA KP YANG TERLIBAT';
    rowNew2.commit();
    rowNew3.commit();
    rowNew4.commit();
    rowNew5.commit();
    rowNew6.commit();
    rowNew7.commit();
    delete rowNew, rowNew2, rowNew3, rowNew4, rowNew5, rowNew6, rowNew7;
    let newfile = path.join(__dirname, "..", "public", "exports", "blank-template.xlsx");
    await workbook.xlsx.writeFile(newfile);
    console.log('done preparing document');
    setTimeout(function () {
        fs.unlinkSync(newfile); // delete this file after 30 seconds
      }, 30000)
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
};

exports.tryNew = async function(req, res) {
    let filename = path.join(__dirname, "..", "public", "exports", "CRA.xlsx");
    let workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filename);
    let worksheet = workbook.getWorksheet('Sheet1');
    let row = worksheet.getRow(3);
    console.log('done getting row');
    row.getCell(1).value = 'alhamdulillah';
    row.getCell(2).value = 'subhanAllah';
    row.getCell(3).value = 'Allahuakbar';
    row.commit();
    const dateTime = moment().format('YYYYMMDDhhmmss');
    let newfile = path.join(__dirname, "..", "public", "exports", "CRA-" + dateTime + ".xlsx");
    await workbook.xlsx.writeFile(newfile);
    setTimeout(function () {
      fs.unlinkSync(newfile); // delete this file after 10 seconds
    }, 10000)
    res.download(newfile);
};