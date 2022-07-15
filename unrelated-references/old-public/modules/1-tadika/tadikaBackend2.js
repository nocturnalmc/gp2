const formAlertDOM = document.querySelector('.form-alert');
const btnSaveDOM = document.querySelector('.save');

// penyata akhir 1 tadika
// FISUR SELAN
const baruJumlahGigiTelahDibuatFSPenyataAkhirDOM = document.getElementById('baru-jumlah-gigi-telah-dibuat-fs-penyata-akhir-1-tadika');
const semulaJumlahGigiTelahDibuatFSPenyataAkhirDOM = document.getElementById('semula-jumlah-gigi-telah-dibuat-fs-penyata-akhir-1-tadika');
// FV TODD
const sesiFvPerludiBuatSATUPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-1-penyata-akhir-1-tadika');
const sesiFvPerludiBuatDUAPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-2-penyata-akhir-1-tadika');
const sesiFvPerludiBuatTIGAPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-3-penyata-akhir-1-tadika');
const sesiFvPerludiBuatEMPATPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-4-penyata-akhir-1-tadika');
// FV PRASEKOLAH
const baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM = document.getElementById('baru-jumlah-gigi-telah-dibuat-fv-penyata-akhir-1-tadika');
const semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM = document.getElementById('semula-jumlah-gigi-telah-dibuat-fv-penyata-akhir-1-tadika');
// PRR JENIS 1
const baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM = document.getElementById('baru-jumlah-gigi-telah-dibuat-prr-penyata-akhir-1-tadika');
const semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM = document.getElementById('semula-jumlah-gigi-telah-dibuat-prr-penyata-akhir-1-tadika');
// JUMLAH TAMPALAN TELAH DILAKUKAN
// GD ANTERIOR SEWARNA
const gdBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-baru-anterior-sewarna-penyata-akhir-1-tadika');
const gdSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-semula-anterior-sewarna-penyata-akhir-1-tadika');
// GK ANT SEWARNA
const gkBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-baru-anterior-sewarna-penyata-akhir-1-tadika');
const gkSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-semula-anterior-sewarna-penyata-akhir-1-tadika');
// GD POST SEWARNA
const gdBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-baru-posterior-sewarna-penyata-akhir-1-tadika');
const gdSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-semula-posterior-sewarna-penyata-akhir-1-tadika');
//GK POST SEWARNA
const gkBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-baru-posterior-sewarna-penyata-akhir-1-tadika');
const gkSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-semula-posterior-sewarna-penyata-akhir-1-tadika');
// GD POST AMALGAM
const gdBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gd-baru-posterior-amalgam-penyata-akhir-1-tadika');
const gdSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gd-semula-posterior-amalgam-penyata-akhir-1-tadika');
// GK POST AMALGAM
const gkBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gk-baru-posterior-amalgam-penyata-akhir-1-tadika');
const gkSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gk-semula-posterior-amalgam-penyata-akhir-1-tadika');
// PENYATA AKHIR 2
//CABUTAN
const desidusJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM = document.getElementById('desidus-jumlah-gigi-telah-dicabut-penyata-akhir-2-tadika');
const kekalJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM = document.getElementById('kekal-jumlah-gigi-telah-dicabut-penyata-akhir-2-tadika');
//TAMPALANSEMENTARA
const jumlahGigiTampalanSementaraPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-gigi-tampalan-sementara-penyata-akhir-2-tadika');
//RAWATAN LAIN
const jumlahPulpotomiRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-pulpotomi-rawatan-lain-penyata-akhir-2-tadika');
const jumlahEndodontikRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-endodontik-rawatan-lain-penyata-akhir-2-tadika');
const jumlahAbsesRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-abses-rawatan-lain-penyata-akhir-2-tadika');
const kesSelesaiRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('kes-selesai-rawatan-lain-penyata-akhir-2-tadika');
const kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadikaDOM = document.getElementById('kes-selesai-icdas-rawatan-lain-penyata-akhir-2-tadika');
const rujukRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('rujuk-rawatan-lain-penyata-akhir-2-tadika');
const penskaleranRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('penskaleran-rawatan-lain-penyata-akhir-2-tadika');
//PROMOSI
const ceramahPromosiPenyataAkhirDUATadikaDOM = document.getElementById('ceramah-promosi-penyata-akhir-2-tadika');
const lmgPromosiPenyataAkhirDUATadikaDOM = document.getElementById('lmg-promosi-penyata-akhir-2-tadika');
//BEGIN
const yaMelaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM = document.getElementById('ya-melaksanakan-aktiviti-begin-penyata-akhir-2-tadika');
const tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM = document.getElementById('tidak-melaksanakan-aktiviti-begin-penyata-akhir-2-tadika');
//AG
const aGuidancePenyataAkhirDUATadikaDOM = document.getElementById('a-guidance-penyata-akhir-2-tadika');
const jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-15-17-ag-penyata-akhir-2-tadika');
const jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-18-19-ag-penyata-akhir-2-tadika');
const jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-20-29-ag-penyata-akhir-2-tadika');
const jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-30-49-ag-penyata-akhir-2-tadika');
const jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-50-59-ag-penyata-akhir-2-tadika');
const jumlahEnamPuluhAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-60-ag-penyata-akhir-2-tadika');
//CATATAN
const catatanPenyataAkhirDUATadikaDOM = document.getElementById('catatan-penyata-akhir-2-tadika');


btnSaveDOM.addEventListener('click', async () => {
    //PENYATA AKHIR 1
    // FISUR SELAN
    const baruJumlahGigiTelahDibuatFSPenyataAkhir = baruJumlahGigiTelahDibuatFSPenyataAkhirDOM.value;
    const semulaJumlahGigiTelahDibuatFSPenyataAkhir = semulaJumlahGigiTelahDibuatFSPenyataAkhirDOM.value;
    // FV TODD
    const sesiFvPerludiBuatSATUPenyataAkhirSatuTadika = sesiFvPerludiBuatSATUPenyataAkhirSatuTadikaDOM.value;
    const sesiFvPerludiBuatDUAPenyataAkhirSatuTadika = sesiFvPerludiBuatDUAPenyataAkhirSatuTadikaDOM.value;
    const sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika = sesiFvPerludiBuatTIGAPenyataAkhirSatuTadikaDOM.value;
    const sesiFvPerludiBuatEMPATPenyataAkhirSatuTadika = sesiFvPerludiBuatEMPATPenyataAkhirSatuTadikaDOM.value;
    // FV PRASEKOLAH
    const baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika = baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value;
    const semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika = semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value;
    // PRR JENIS 1
    const baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika = baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value;
    const semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika = semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value;
    // GD ANT SEWARNA
    const gdBaruAnteriorSewarnaPenyataAkhirSATUTadika = gdBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gdSemulaAnteriorSewarnaPenyataAkhirSATUTadika = gdSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GK ANT SEWARNA
    const gkBaruAnteriorSewarnaPenyataAkhirSATUTadika = gkBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gkSemulaAnteriorSewarnaPenyataAkhirSATUTadika = gkSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GD POST SEWARNA
    const gdBaruPosteriorSewarnaPenyataAkhirSATUTadika = gdBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gdSemulaPosteriorSewarnaPenyataAkhirSATUTadika = gdSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GK POST SEWARNA
    const gkBaruPosteriorSewarnaPenyataAkhirSATUTadika = gkBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gkSemulaPosteriorSewarnaPenyataAkhirSATUTadika = gkSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GD POST AMALGAM
    const gdBaruPosteriorAmalgamPenyataAkhirSATUTadika = gdBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    const gdSemulaPosteriorAmalgamPenyataAkhirSATUTadika = gdSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    // GK POST AMALGAM
    const gkBaruPosteriorAmalgamPenyataAkhirSATUTadika = gkBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    const gkSemulaPosteriorAmalgamPenyataAkhirSATUTadika = gkSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    //PENYATA AKHIR2
    //CABUTAN
    const desidusJumlahGigiTelahDicabutPenyataAkhirDUATadika = desidusJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value;
    const kekalJumlahGigiTelahDicabutPenyataAkhirDUATadika = kekalJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value;
    //TAMPALAN SEMENTARA
    const jumlahGigiTampalanSementaraPenyataAkhirDUATadika = jumlahGigiTampalanSementaraPenyataAkhirDUATadikaDOM.value;
    //RAWATAN LAIN
    const jumlahPulpotomiRawatanLainPenyataAkhirDUATadika = jumlahPulpotomiRawatanLainPenyataAkhirDUATadikaDOM.value;
    const jumlahEndodontikRawatanLainPenyataAkhirDUATadika = jumlahEndodontikRawatanLainPenyataAkhirDUATadikaDOM.value;
    const jumlahAbsesRawatanLainPenyataAkhirDUATadika = jumlahAbsesRawatanLainPenyataAkhirDUATadikaDOM.value;
    const kesSelesaiRawatanLainPenyataAkhirDUATadika = kesSelesaiRawatanLainPenyataAkhirDUATadikaDOM.value;
    const kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadika = kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadikaDOM.value;
    const rujukRawatanLainPenyataAkhirDUATadika = rujukRawatanLainPenyataAkhirDUATadikaDOM.value;
    const penskaleranRawatanLainPenyataAkhirDUATadika = penskaleranRawatanLainPenyataAkhirDUATadikaDOM.value;
    //PROMOSI
    const ceramahPromosiPenyataAkhirDUATadika = ceramahPromosiPenyataAkhirDUATadikaDOM.value;
    const lmgPromosiPenyataAkhirDUATadika = lmgPromosiPenyataAkhirDUATadikaDOM.value;
    //BEGIN
    const yaMelaksanakanAktivitiBeginPenyataAkhirDUATadika = yaMelaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM.value;
    const tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadika = tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM.value;
    //AG
    const aGuidancePenyataAkhirDUATadika = aGuidancePenyataAkhirDUATadikaDOM.value;
    const jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika = jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadikaDOM.value;
    const jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika = jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadikaDOM.value;
    const jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika = jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value;
    const jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika = jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadikaDOM.value;
    const jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika = jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value;
    const jumlahEnamPuluhAGPenyataAkhirDUATadika = jumlahEnamPuluhAGPenyataAkhirDUATadikaDOM.value;
    //CATATAN
    const catatanPenyataAkhirDUATadika = catatanPenyataAkhirDUATadikaDOM.value;
    
    try {
        await axios.post('/api/v1/tadika', { 
            //PENYATA AKHIR 1
            baruJumlahGigiTelahDibuatFSPenyataAkhir,
            semulaJumlahGigiTelahDibuatFSPenyataAkhir,
            sesiFvPerludiBuatSATUPenyataAkhirSatuTadika,
            sesiFvPerludiBuatDUAPenyataAkhirSatuTadika,
            sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika,
            sesiFvPerludiBuatEMPATPenyataAkhirSatuTadika,
            // FV PRASEKOLAH
            baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika,
            semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika,
            // PRR JENIS 1
            baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika,
            semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika,
            // GD ANT SEWARNA
            gdBaruAnteriorSewarnaPenyataAkhirSATUTadika,
            gdSemulaAnteriorSewarnaPenyataAkhirSATUTadika,
            // GK ANT SEWARNA
            gkBaruAnteriorSewarnaPenyataAkhirSATUTadika,
            gkSemulaAnteriorSewarnaPenyataAkhirSATUTadika,
            // GD POST SEWARNA
            gdBaruPosteriorSewarnaPenyataAkhirSATUTadika,
            gdSemulaPosteriorSewarnaPenyataAkhirSATUTadika,
            // GK POST SEWARNA
            gkBaruPosteriorSewarnaPenyataAkhirSATUTadika,
            gkSemulaPosteriorSewarnaPenyataAkhirSATUTadika,
            // GD POST AMALGAM
            gdBaruPosteriorAmalgamPenyataAkhirSATUTadika,
            gdSemulaPosteriorAmalgamPenyataAkhirSATUTadika,
            // GK POST AMALAM
            gkBaruPosteriorAmalgamPenyataAkhirSATUTadika,
            gkSemulaPosteriorAmalgamPenyataAkhirSATUTadika,
            //CABUTAN
            desidusJumlahGigiTelahDicabutPenyataAkhirDUATadika,
            kekalJumlahGigiTelahDicabutPenyataAkhirDUATadika,
            //TAMPALAN SEMENTARA
            jumlahGigiTampalanSementaraPenyataAkhirDUATadika,
            //RAWATAN LAIN
            jumlahPulpotomiRawatanLainPenyataAkhirDUATadika,
            jumlahEndodontikRawatanLainPenyataAkhirDUATadika,
            jumlahAbsesRawatanLainPenyataAkhirDUATadika,
            kesSelesaiRawatanLainPenyataAkhirDUATadika,
            kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadika,
            rujukRawatanLainPenyataAkhirDUATadika,
            penskaleranRawatanLainPenyataAkhirDUATadika,
            //PROMOSI
            ceramahPromosiPenyataAkhirDUATadika,
            lmgPromosiPenyataAkhirDUATadika,
            //BEGIN
            yaMelaksanakanAktivitiBeginPenyataAkhirDUATadika,
            tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadika,
            //AG
            aGuidancePenyataAkhirDUATadika,
            jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika,
            jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika,
            jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika,
            jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika,
            jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika,
            jumlahEnamPuluhAGPenyataAkhirDUATadika,
            //CATATAN
            catatanPenyataAkhirDUATadika,
         }, { headers: { Authorization: `Bearer ${token}` } });
        
        // clearing all value after creating person
        //PENYATA AKHIR 1
        // FS
        baruJumlahGigiTelahDibuatFSPenyataAkhirDOM.value = '';
        semulaJumlahGigiTelahDibuatFSPenyataAkhirDOM.value = '';
        // FV TODD
        sesiFvPerludiBuatSATUPenyataAkhirSatuTadikaDOM.value = '';
        sesiFvPerludiBuatDUAPenyataAkhirSatuTadikaDOM.value = '';
        sesiFvPerludiBuatTIGAPenyataAkhirSatuTadikaDOM.value = '';
        sesiFvPerludiBuatEMPATPenyataAkhirSatuTadikaDOM.value = '';
        // FV PRASEKOLAH
        baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value = '';
        semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value = '';
        // PRR 1
        baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value = '';
        semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value = '';
        // GD ANT SEWARNA
        gdBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gdSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        // GK ANT SEWARNA
        gkBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gkSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        // GD POST SEWARNA
        gdBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gdSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        //GK POST SEWARNA
        gkBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gkSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        //GD POST AMALGAM
        gdBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        gdSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        //GK POST AMALGAM
        gkBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        gkSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        // PENYATA AKHIR 2
        //CABUTAN
        desidusJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value = '';
        kekalJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value = '';
        //TAMPALAN SEMENTARA
        jumlahGigiTampalanSementaraPenyataAkhirDUATadikaDOM.value = '';
        //RAWATAN LAIN
        jumlahPulpotomiRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        jumlahEndodontikRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        jumlahAbsesRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        kesSelesaiRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadikaDOM.value = '';
        rujukRawatanLainPenyataAkhirDUATadikaDOM = '';
        penskaleranRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        //PROMOSI
        ceramahPromosiPenyataAkhirDUATadikaDOM.value = '';
        lmgPromosiPenyataAkhirDUATadikaDOM.value = '';
        //BEGIN
        yaMelaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM.value = '';
        tidakMelaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM.value = '';
        //AG
        aGuidancePenyataAkhirDUATadikaDOM.value = '';
        jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahEnamPuluhAGPenyataAkhirDUATadikaDOM.value = '';
        //CATATAN
        catatanPenyataAkhirDUATadikaDOM.value = '';

        // kelasPendaftaranTadikaDOM.value = '';
        // namaTaskaTadikaPendaftaranTadikaDOM.value = '';
        // ----------------------------------------

        formAlertDOM.style.display = 'block';
        formAlertDOM.classList.add('text-success');
        formAlertDOM.textContent = 'Success, data added';
    } catch (error) {
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = 'Please fill all data correctly';
    }
    setTimeout(() => {
        formAlertDOM.style.display = 'none';
        formAlertDOM.classList.remove('text-success');
    }, 3000);
});