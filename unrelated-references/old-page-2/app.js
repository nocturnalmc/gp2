window.addEventListener('DOMContentLoaded', function(){
    // tadika
    pendaftaranTadika();
    pemeriksaanAwalTadika();
    perluDibuatTadika();
    penyataAkhir1Tadika();
    penyataAkhir2Tadika();

    // sekolah
    pendaftaranSekolah();
    pemeriksaanAwalSekolah();
    perluDibuatSekolah();
    penyataAkhir1Sekolah();
    penyataAkhir2Sekolah();
    kotakSekolah();

    // ya
    pendaftaranYoungAdult();
    statusKesihatanMulutYoungAdult();
    rawatanYoungAdult();
    
});

// button category -----------------------------------------------------------
const btnCategoryTadika = document.querySelector('.btn-category.tadika');
const btnCategorySekolah = document.querySelector('.btn-category.sekolah');
const btnCategoryYoungAdult = document.querySelector('.btn-category.young-adult');

btnCategoryTadika.addEventListener('click', function(){
    btnCategoryTadika.classList.toggle('btn-active');
    btnCategorySekolah.classList.remove('btn-active');
    btnCategoryYoungAdult.classList.remove('btn-active');
    showHideTadika();
    hideSekolah();
    hideYoungAdult();
});
btnCategorySekolah.addEventListener('click', function(){
    btnCategorySekolah.classList.toggle('btn-active');
    btnCategoryTadika.classList.remove('btn-active');
    btnCategoryYoungAdult.classList.remove('btn-active');
    showHideSekolah();
    hideTadika();
    hideYoungAdult();
});
btnCategoryYoungAdult.addEventListener('click', function(){
    btnCategoryYoungAdult.classList.toggle('btn-active');
    btnCategoryTadika.classList.remove('btn-active');
    btnCategorySekolah.classList.remove('btn-active');
    showHideYoungAdult();
    hideTadika();
    hideSekolah();
});

// function on form ---------------------------------------------------------
// tadika form
function showHideTadika(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-tadika');
    const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
    if (pendaftaranHeader.style.display === 'block'){
        pendaftaranHeader.style.display = 'none';
    } else {
        pendaftaranHeader.style.display = 'block';
    }

    if (formPendaftaran.style.display === 'flex'){
        formPendaftaran.style.display = 'none';
    } else {
        formPendaftaran.style.display = 'flex';
    }

    const pemeriksaanAwalHeader = document.querySelector('.pemeriksaan-awal-header-tadika');
    const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
    if (pemeriksaanAwalHeader.style.display === 'block'){
        pemeriksaanAwalHeader.style.display = 'none';
    } else {
        pemeriksaanAwalHeader.style.display = 'block';
    }

    if (formPemeriksaanAwal.style.display === 'flex'){
        formPemeriksaanAwal.style.display = 'none';
    } else {
        formPemeriksaanAwal.style.display = 'flex';
    }

    const perluDibuatHeader = document.querySelector('.perlu-dibuat-header-tadika');
    const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
    if (perluDibuatHeader.style.display === 'block'){
        perluDibuatHeader.style.display = 'none';
    } else {
        perluDibuatHeader.style.display = 'block';
    }

    if (formPerluDibuat.style.display === 'flex'){
        formPerluDibuat.style.display = 'none';
    } else {
        formPerluDibuat.style.display = 'flex';
    }

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-tadika');
    const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
    if (penyataAkhir1Header.style.display === 'block'){
        penyataAkhir1Header.style.display = 'none';
    } else {
        penyataAkhir1Header.style.display = 'block';
    }

    if (formPenyataAkhir1.style.display === 'flex'){
        formPenyataAkhir1.style.display = 'none';
    } else {
        formPenyataAkhir1.style.display = 'flex';
    }

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-tadika');
    const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
    if (penyataAkhir2Header.style.display === 'block'){
        penyataAkhir2Header.style.display = 'none';
    } else {
        penyataAkhir2Header.style.display = 'block';
    }

    if (formPenyataAkhir2.style.display === 'flex'){
        formPenyataAkhir2.style.display = 'none';
    } else {
        formPenyataAkhir2.style.display = 'flex';
    }
}

function hideTadika(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-tadika');
    const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
    pendaftaranHeader.style.display = 'none';
    formPendaftaran.style.display = 'none';

    const pemeriksaanAwalHeader = document.querySelector('.pemeriksaan-awal-header-tadika');
    const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
    pemeriksaanAwalHeader.style.display = 'none';
    formPemeriksaanAwal.style.display = 'none';

    const perluDibuatHeader = document.querySelector('.perlu-dibuat-header-tadika');
    const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
    perluDibuatHeader.style.display = 'none';
    formPerluDibuat.style.display = 'none';

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-tadika');
    const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
    penyataAkhir1Header.style.display = 'none';
    formPenyataAkhir1.style.display = 'none';

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-tadika');
    const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
    penyataAkhir2Header.style.display = 'none';
    formPenyataAkhir2.style.display = 'none';
}

// sekolah form
function showHideSekolah(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-sekolah');
    const formPendaftaran = document.querySelector('.form-pendaftaran-sekolah');
    if (pendaftaranHeader.style.display === 'block'){
        pendaftaranHeader.style.display = 'none';
    } else {
        pendaftaranHeader.style.display = 'block';
    }

    if (formPendaftaran.style.display === 'flex'){
        formPendaftaran.style.display = 'none';
    } else {
        formPendaftaran.style.display = 'flex';
    }

    const pemeriksaanAwalHeader = document.querySelector('.pemeriksaan-awal-header-sekolah');
    const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-sekolah');
    if (pemeriksaanAwalHeader.style.display === 'block'){
        pemeriksaanAwalHeader.style.display = 'none';
    } else {
        pemeriksaanAwalHeader.style.display = 'block';
    }

    if (formPemeriksaanAwal.style.display === 'flex'){
        formPemeriksaanAwal.style.display = 'none';
    } else {
        formPemeriksaanAwal.style.display = 'flex';
    }

    const perluDibuatHeader = document.querySelector('.perlu-dibuat-header-sekolah');
    const formPerluDibuat = document.querySelector('.form-perlu-dibuat-sekolah');
    if (perluDibuatHeader.style.display === 'block'){
        perluDibuatHeader.style.display = 'none';
    } else {
        perluDibuatHeader.style.display = 'block';
    }

    if (formPerluDibuat.style.display === 'flex'){
        formPerluDibuat.style.display = 'none';
    } else {
        formPerluDibuat.style.display = 'flex';
    }

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-sekolah');
    const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-sekolah');
    if (penyataAkhir1Header.style.display === 'block'){
        penyataAkhir1Header.style.display = 'none';
    } else {
        penyataAkhir1Header.style.display = 'block';
    }

    if (formPenyataAkhir1.style.display === 'flex'){
        formPenyataAkhir1.style.display = 'none';
    } else {
        formPenyataAkhir1.style.display = 'flex';
    }

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-sekolah');
    const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-sekolah');
    if (penyataAkhir2Header.style.display === 'block'){
        penyataAkhir2Header.style.display = 'none';
    } else {
        penyataAkhir2Header.style.display = 'block';
    }

    if (formPenyataAkhir2.style.display === 'flex'){
        formPenyataAkhir2.style.display = 'none';
    } else {
        formPenyataAkhir2.style.display = 'flex';
    }

    const kotakHeader = document.querySelector('.kotak-header-sekolah');
    const formKotak = document.querySelector('.form-kotak-sekolah');
    if (kotakHeader.style.display === 'block'){
        kotakHeader.style.display = 'none';
    } else {
        kotakHeader.style.display = 'block';
    }

    if (formKotak.style.display === 'flex'){
        formKotak.style.display = 'none';
    } else {
        formKotak.style.display = 'flex';
    }
}

function hideSekolah(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-sekolah');
    const formPendaftaran = document.querySelector('.form-pendaftaran-sekolah');
    pendaftaranHeader.style.display = 'none';
    formPendaftaran.style.display = 'none';

    const pemeriksaanAwalHeader = document.querySelector('.pemeriksaan-awal-header-sekolah');
    const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-sekolah');
    pemeriksaanAwalHeader.style.display = 'none';
    formPemeriksaanAwal.style.display = 'none';

    const perluDibuatHeader = document.querySelector('.perlu-dibuat-header-sekolah');
    const formPerluDibuat = document.querySelector('.form-perlu-dibuat-sekolah');
    perluDibuatHeader.style.display = 'none';
    formPerluDibuat.style.display = 'none';

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-sekolah');
    const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-sekolah');
    penyataAkhir1Header.style.display = 'none';
    formPenyataAkhir1.style.display = 'none';

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-sekolah');
    const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-sekolah')
    penyataAkhir2Header.style.display = 'none';
    formPenyataAkhir2.style.display = 'none';

    const kotakHeader = document.querySelector('.kotak-header-sekolah');
    const formKotak = document.querySelector('.form-kotak-sekolah');
    kotakHeader.style.display = 'none';
    formKotak.style.display = 'none';
}

// youngadult form
function showHideYoungAdult(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-ya');
    const formPendaftaran = document.querySelector('.form-pendaftaran-ya');
    if (pendaftaranHeader.style.display === 'block'){
        pendaftaranHeader.style.display = 'none';
    } else {
        pendaftaranHeader.style.display = 'block';
    }

    if (formPendaftaran.style.display === 'flex'){
        formPendaftaran.style.display = 'none';
    } else {
        formPendaftaran.style.display = 'flex';
    }

    const statusKesihatanMulutHeader = document.querySelector('.status-kesihatan-mulut-header-ya');
    const formstatusKesihatanMulut = document.querySelector('.form-status-kesihatan-mulut-ya');
    if (statusKesihatanMulutHeader.style.display === 'block'){
        statusKesihatanMulutHeader.style.display = 'none';
    } else {
        statusKesihatanMulutHeader.style.display = 'block';
    }

    if (formstatusKesihatanMulut.style.display === 'flex'){
        formstatusKesihatanMulut.style.display = 'none';
    } else {
        formstatusKesihatanMulut.style.display = 'flex';
    }

    const rawatanHeader = document.querySelector('.rawatan-header-ya');
    const formRawatanHeader = document.querySelector('.form-rawatan-ya');
    if (rawatanHeader.style.display === 'block'){
        rawatanHeader.style.display = 'none';
    } else {
        rawatanHeader.style.display = 'block';
    }

    if (formRawatanHeader.style.display === 'flex'){
        formRawatanHeader.style.display = 'none';
    } else {
        formRawatanHeader.style.display = 'flex';
    }
}

function hideYoungAdult(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-ya');
    const formPendaftaran = document.querySelector('.form-pendaftaran-ya');
    pendaftaranHeader.style.display = 'none';
    formPendaftaran.style.display = 'none';

    const statusKesihatanMulutHeader = document.querySelector('.status-kesihatan-mulut-header-ya');
    const formstatusKesihatanMulut = document.querySelector('.form-status-kesihatan-mulut-ya');
    statusKesihatanMulutHeader.style.display = 'none';
    formstatusKesihatanMulut.style.display = 'none';

    const rawatanHeader = document.querySelector('.rawatan-header-ya');
    const formRawatanHeader = document.querySelector('.form-rawatan-ya');
    rawatanHeader.style.display = 'none';
    formRawatanHeader.style.display = 'none';
}

// function on header at DOMContentLoaded --------------------------------------
// tadika header
function pendaftaranTadika(){
    const btnPendaftaran = document.querySelector('.pendaftaran-header-tadika');
    const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
    const iconPlusPendaftaran = '<i class="fas fa-plus"></i> Pendaftaran';
    const iconMinusPendaftaran = '<i class="fas fa-minus"></i> Pendaftaran';

    btnPendaftaran.addEventListener('click', function(){
        if (formPendaftaran.classList.contains('close')) {
            formPendaftaran.classList.remove('close');
            btnPendaftaran.innerHTML = iconMinusPendaftaran;
        } else {
            formPendaftaran.classList.add('close');
            btnPendaftaran.innerHTML = iconPlusPendaftaran;
        }
        // to close other form when opening this form ----------
        // close pemeriksaan awal
        const btnPemeriksaanAwalTadika = document.querySelector('.pemeriksaan-awal-header-tadika');
        const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
        btnPemeriksaanAwalTadika.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwal.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-tadika');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-tadika');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-tadika');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-tadika');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuat = document.querySelector('.perlu-dibuat-header-tadika');
        const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
        btnPerluDibuat.innerHTML = '<i class="fas fa-plus"></i> Perlu Dibuat';
        formPerluDibuat.classList.add('close');
        // close penyata akhir 1
        const btnPenyataAkhir1 = document.querySelector('.penyata-akhir-1-header-tadika');
        const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
        btnPenyataAkhir1.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 1';
        formPenyataAkhir1.classList.add('close');

        // close penyata akhir 2
        const btnPenyataAkhir2 = document.querySelector('.penyata-akhir-2-header-tadika');
        const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
        btnPenyataAkhir2.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 2';
        formPenyataAkhir2.classList.add('close');

    });
}

function pemeriksaanAwalTadika(){
    const btnPemeriksaanAwalTadika = document.querySelector('.pemeriksaan-awal-header-tadika');
    const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
    const iconPlusPemeriksaanAwal = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
    const iconMinusPemeriksaanAwal = '<i class="fas fa-minus"></i> Pemeriksaan Awal';

    btnPemeriksaanAwalTadika.addEventListener('click', function(){
        if (formPemeriksaanAwal.classList.contains('close')) {
            formPemeriksaanAwal.classList.remove('close');
            btnPemeriksaanAwalTadika.innerHTML = iconMinusPemeriksaanAwal;
        } else {
            formPemeriksaanAwal.classList.add('close');
            btnPemeriksaanAwalTadika.innerHTML = iconPlusPemeriksaanAwal;
            // change status gigi desidus to 'tiada'
            statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
            btnAdaTiadaGigiDesidus.textContent = 'Tiada';
            btnAdaTiadaGigiDesidus.classList.remove('ada');
            btnAdaTiadaGigiDesidus.classList.add('tiada');
            //change status gigi kekal to 'tiada'
            statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
            btnAdaTiadaGigiKekal.textContent = 'Tiada';
            btnAdaTiadaGigiKekal.classList.remove('ada');
            btnAdaTiadaGigiKekal.classList.add('tiada');
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaran = document.querySelector('.pendaftaran-header-tadika');
        const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
        btnPendaftaran.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaran.classList.add('close');
        // close perlu dibuat
        const btnPerluDibuat = document.querySelector('.perlu-dibuat-header-tadika');
        const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
        btnPerluDibuat.innerHTML = '<i class="fas fa-plus"></i> Perlu Dibuat';
        formPerluDibuat.classList.add('close');

        // close penyata akhir 1
        const btnPenyataAkhir1 = document.querySelector('.penyata-akhir-1-header-tadika');
        const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
        btnPenyataAkhir1.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 1';
        formPenyataAkhir1.classList.add('close');

        // close penyata akhir 2
        const btnPenyataAkhir2 = document.querySelector('.penyata-akhir-2-header-tadika');
        const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
        btnPenyataAkhir2.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 2';
        formPenyataAkhir2.classList.add('close');

    });
    
    const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-tadika');
    const statusGigiDesidus = document.querySelector('.status-gigi-desidus-tadika');

    btnAdaTiadaGigiDesidus.addEventListener('click', function(){
        if (btnAdaTiadaGigiDesidus.classList.contains('tiada')){
            statusGigiDesidus.innerHTML = ` <br>
                                            <label for="decay-desidus-pemeriksaan-awal-tadika">d</label>
                                            <input type="number" id="decay-desidus-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="missing-desidus-pemeriksaan-awal-tadika">m</label>
                                            <input type="number" id="missing-desidus-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="filled-desidus-pemeriksaan-awal-tadika">f</label>
                                            <input type="number" id="filled-desidus-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="for-extraction-desidus-pemeriksaan-awal-tadika">x</label>
                                            <input type="number" id="for-extraction-desidus-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">`;
            btnAdaTiadaGigiDesidus.textContent = 'Ada';
            btnAdaTiadaGigiDesidus.classList.remove('tiada');
            btnAdaTiadaGigiDesidus.classList.add('ada');
        } else {
            statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
            btnAdaTiadaGigiDesidus.textContent = 'Tiada';
            btnAdaTiadaGigiDesidus.classList.remove('ada');
            btnAdaTiadaGigiDesidus.classList.add('tiada');
        }
    });

    const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-tadika');
    const statusGigiKekal = document.querySelector('.status-gigi-kekal-tadika');

    btnAdaTiadaGigiKekal.addEventListener('click', function(){
        if (btnAdaTiadaGigiKekal.classList.contains('tiada')){
            statusGigiKekal.innerHTML = `   <br>
                                            <label for="decay-kekal-pemeriksaan-awal-tadika">D</label>
                                            <input type="number" id="decay-kekal-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="missing-kekal-pemeriksaan-awal-tadika">M</label>
                                            <input type="number" id="missing-kekal-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="filled-kekal-pemeriksaan-awal-tadika">F</label>
                                            <input type="number" id="filled-kekal-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="for-extraction-kekal-pemeriksaan-awal-tadika">X</label>
                                            <input type="number" id="for-extraction-kekal-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">
                                            <label for="e-kekal-pemeriksaan-awal-tadika">E</label>
                                            <input type="number" id="e-kekal-pemeriksaan-awal-tadika" class="number-input-pemeriksaan-awal-tadika">`;
            btnAdaTiadaGigiKekal.textContent = 'Ada';
            btnAdaTiadaGigiKekal.classList.remove('tiada');
            btnAdaTiadaGigiKekal.classList.add('ada');
        } else {
            statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
            btnAdaTiadaGigiKekal.textContent = 'Tiada';
            btnAdaTiadaGigiKekal.classList.remove('ada');
            btnAdaTiadaGigiKekal.classList.add('tiada');
        }
    });
}
function perluDibuatTadika(){
    const btnPerluDibuat = document.querySelector('.perlu-dibuat-header-tadika');
    const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
    const iconPlusPerluDibuat = '<i class="fas fa-plus"></i> Perlu Dibuat';
    const iconMinusPerluDibuat = '<i class="fas fa-minus"></i> Perlu Dibuat';

    btnPerluDibuat.addEventListener('click', function(){
        if (formPerluDibuat.classList.contains('close')) {
            formPerluDibuat.classList.remove('close');
            btnPerluDibuat.innerHTML = iconMinusPerluDibuat;
        } else {
            formPerluDibuat.classList.add('close');
            btnPerluDibuat.innerHTML = iconPlusPerluDibuat;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaran = document.querySelector('.pendaftaran-header-tadika');
        const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
        btnPendaftaran.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaran.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalTadika = document.querySelector('.pemeriksaan-awal-header-tadika');
        const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
        btnPemeriksaanAwalTadika.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwal.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-tadika');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-tadika');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-tadika');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-tadika');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close penyata akhir 1
        const btnPenyataAkhir1 = document.querySelector('.penyata-akhir-1-header-tadika');
        const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
        btnPenyataAkhir1.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 1';
        formPenyataAkhir1.classList.add('close');

        // close penyata akhir 2
        const btnPenyataAkhir2 = document.querySelector('.penyata-akhir-2-header-tadika');
        const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
        btnPenyataAkhir2.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 2';
        formPenyataAkhir2.classList.add('close');

    });
}
function penyataAkhir1Tadika(){
    const btnPenyataAkhir1 = document.querySelector('.penyata-akhir-1-header-tadika');
    const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
    const iconPlusPenyataAkhir1 = '<i class="fas fa-plus"></i> Penyata Akhir 1';
    const iconMinusPenyataAkhir1 = '<i class="fas fa-minus"></i> Penyata Akhir 1';

    btnPenyataAkhir1.addEventListener('click', function(){
        if (formPenyataAkhir1.classList.contains('close')) {
            formPenyataAkhir1.classList.remove('close');
            btnPenyataAkhir1.innerHTML = iconMinusPenyataAkhir1;
        } else {
            formPenyataAkhir1.classList.add('close');
            btnPenyataAkhir1.innerHTML = iconPlusPenyataAkhir1;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaran = document.querySelector('.pendaftaran-header-tadika');
        const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
        btnPendaftaran.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaran.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalTadika = document.querySelector('.pemeriksaan-awal-header-tadika');
        const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
        btnPemeriksaanAwalTadika.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwal.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-tadika');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-tadika');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-tadika');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-tadika');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuat = document.querySelector('.perlu-dibuat-header-tadika');
        const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
        btnPerluDibuat.innerHTML = '<i class="fas fa-plus"></i> Perlu Dibuat';
        formPerluDibuat.classList.add('close');

        // close penyata akhir 2
        const btnPenyataAkhir2 = document.querySelector('.penyata-akhir-2-header-tadika');
        const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
        btnPenyataAkhir2.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 2';
        formPenyataAkhir2.classList.add('close');

    });
}
function penyataAkhir2Tadika(){
    const btnPenyataAkhir2 = document.querySelector('.penyata-akhir-2-header-tadika');
    const formPenyataAkhir2 = document.querySelector('.form-penyata-akhir-2-tadika');
    const iconPlusPenyataAkhir2 = '<i class="fas fa-plus"></i> Penyata Akhir 2';
    const iconMinusPenyataAkhir2 = '<i class="fas fa-minus"></i> Penyata Akhir 2';

    btnPenyataAkhir2.addEventListener('click', function(){
        if (formPenyataAkhir2.classList.contains('close')) {
            formPenyataAkhir2.classList.remove('close');
            btnPenyataAkhir2.innerHTML = iconMinusPenyataAkhir2;
        } else {
            formPenyataAkhir2.classList.add('close');
            btnPenyataAkhir2.innerHTML = iconPlusPenyataAkhir2;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaran = document.querySelector('.pendaftaran-header-tadika');
        const formPendaftaran = document.querySelector('.form-pendaftaran-tadika');
        btnPendaftaran.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaran.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalTadika = document.querySelector('.pemeriksaan-awal-header-tadika');
        const formPemeriksaanAwal = document.querySelector('.form-pemeriksaan-awal-tadika');
        btnPemeriksaanAwalTadika.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwal.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-tadika');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-tadika');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-tadika');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-tadika');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuat = document.querySelector('.perlu-dibuat-header-tadika');
        const formPerluDibuat = document.querySelector('.form-perlu-dibuat-tadika');
        btnPerluDibuat.innerHTML = '<i class="fas fa-plus"></i> Perlu Dibuat';
        formPerluDibuat.classList.add('close');

        // close penyata akhir 1
        const btnPenyataAkhir1 = document.querySelector('.penyata-akhir-1-header-tadika');
        const formPenyataAkhir1 = document.querySelector('.form-penyata-akhir-1-tadika');
        btnPenyataAkhir1.innerHTML = '<i class="fas fa-plus"></i> Penyata Akhir 1';
        formPenyataAkhir1.classList.add('close');

    });
}

// sekolah header
function pendaftaranSekolah(){
    const btnPendaftaranSekolah = document.querySelector('.pendaftaran-header-sekolah');
    const formPendaftaranSekolah = document.querySelector('.form-pendaftaran-sekolah');
    const iconPlusPendaftaran = '<i class="fas fa-plus"></i> Pendaftaran';
    const iconMinusPendaftaran = '<i class="fas fa-minus"></i> Pendaftaran';

    btnPendaftaranSekolah.addEventListener('click', function(){
        if (formPendaftaranSekolah.classList.contains('close')) {
            formPendaftaranSekolah.classList.remove('close');
            btnPendaftaranSekolah.innerHTML = iconMinusPendaftaran;
        } else {
            formPendaftaranSekolah.classList.add('close');
            btnPendaftaranSekolah.innerHTML = iconPlusPendaftaran;
        }
        // to close other form when opening this form ----------
        // close pemeriksaan awal
        const btnPemeriksaanAwalSekolah = document.querySelector('.pemeriksaan-awal-header-sekolah');
        const formPemeriksaanAwalSekolah = document.querySelector('.form-pemeriksaan-awal-sekolah');
        btnPemeriksaanAwalSekolah.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwalSekolah.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-sekolah');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-sekolah');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-sekolah');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-sekolah');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuatSekolah = document.querySelector('.perlu-dibuat-header-sekolah');
        const formPerluDibuatSekolah = document.querySelector('.form-perlu-dibuat-sekolah');
        btnPerluDibuatSekolah.innerHTML = '<i class="fas fa-plus"></i> Perlu dibuat';
        formPerluDibuatSekolah.classList.add('close');
        // close penyata akhir 1
        const btnPenyataAkhir1Sekolah = document.querySelector('.penyata-akhir-1-header-sekolah');
        const formPenyataAkhir1Sekolah = document.querySelector('.form-penyata-akhir-1-sekolah');
        btnPenyataAkhir1Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 1';
        formPenyataAkhir1Sekolah.classList.add('close');
        // close penyata akhir 2
        const btnPenyataAkhir2Sekolah = document.querySelector('.penyata-akhir-2-header-sekolah');
        const formPenyataAkhir2Sekolah = document.querySelector('.form-penyata-akhir-2-sekolah');
        btnPenyataAkhir2Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 2';
        formPenyataAkhir2Sekolah.classList.add('close');
        // close kotak
        const btnKotakSekolah = document.querySelector('.kotak-header-sekolah');
        const formKotakSekolah = document.querySelector('.form-kotak-sekolah');
        btnKotakSekolah.innerHTML = '<i class="fas fa-plus"></i> Kotak';
        formKotakSekolah.classList.add('close');
    });
}

function pemeriksaanAwalSekolah(){
    const btnPemeriksaanAwalSekolah = document.querySelector('.pemeriksaan-awal-header-sekolah');
    const formPemeriksaanAwalSekolah = document.querySelector('.form-pemeriksaan-awal-sekolah');
    const iconPlusPemeriksaanAwal = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
    const iconMinusPemeriksaanAwal = '<i class="fas fa-minus"></i> Pemeriksaan Awal';

    btnPemeriksaanAwalSekolah.addEventListener('click', function(){
        if (formPemeriksaanAwalSekolah.classList.contains('close')) {
            formPemeriksaanAwalSekolah.classList.remove('close');
            btnPemeriksaanAwalSekolah.innerHTML = iconMinusPemeriksaanAwal;
        } else {
            formPemeriksaanAwalSekolah.classList.add('close');
            btnPemeriksaanAwalSekolah.innerHTML = iconPlusPemeriksaanAwal;
            // change status gigi desidus to 'tiada'
            statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
            btnAdaTiadaGigiDesidus.textContent = 'Tiada';
            btnAdaTiadaGigiDesidus.classList.remove('ada');
            btnAdaTiadaGigiDesidus.classList.add('tiada');
            //change status gigi kekal to 'tiada'
            statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
            btnAdaTiadaGigiKekal.textContent = 'Tiada';
            btnAdaTiadaGigiKekal.classList.remove('ada');
            btnAdaTiadaGigiKekal.classList.add('tiada');
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaranSekolah = document.querySelector('.pendaftaran-header-sekolah');
        const formPendaftaranSekolah = document.querySelector('.form-pendaftaran-sekolah');
        btnPendaftaranSekolah.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaranSekolah.classList.add('close');
        // close perlu dibuat
        const btnPerluDibuatSekolah = document.querySelector('.perlu-dibuat-header-sekolah');
        const formPerluDibuatSekolah = document.querySelector('.form-perlu-dibuat-sekolah');
        btnPerluDibuatSekolah.innerHTML = '<i class="fas fa-plus"></i> Perlu dibuat';
        formPerluDibuatSekolah.classList.add('close');
        // close penyata akhir 1
        const btnPenyataAkhir1Sekolah = document.querySelector('.penyata-akhir-1-header-sekolah');
        const formPenyataAkhir1Sekolah = document.querySelector('.form-penyata-akhir-1-sekolah');
        btnPenyataAkhir1Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 1';
        formPenyataAkhir1Sekolah.classList.add('close');
        // close penyata akhir 2
        const btnPenyataAkhir2Sekolah = document.querySelector('.penyata-akhir-2-header-sekolah');
        const formPenyataAkhir2Sekolah = document.querySelector('.form-penyata-akhir-2-sekolah');
        btnPenyataAkhir2Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 2';
        formPenyataAkhir2Sekolah.classList.add('close');
        // close kotak
        const btnKotakSekolah = document.querySelector('.kotak-header-sekolah');
        const formKotakSekolah = document.querySelector('.form-kotak-sekolah');
        btnKotakSekolah.innerHTML = '<i class="fas fa-plus"></i> Kotak';
        formKotakSekolah.classList.add('close');
    });
    
    const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-sekolah');
    const statusGigiDesidus = document.querySelector('.status-gigi-desidus-sekolah');

    btnAdaTiadaGigiDesidus.addEventListener('click', function(){
        if (btnAdaTiadaGigiDesidus.classList.contains('tiada')){
            statusGigiDesidus.innerHTML = ` <br>
                                            <label for="decay-desidus-pemeriksaan-awal-sekolah">d</label>
                                            <input type="number" id="decay-desidus-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="missing-desidus-pemeriksaan-awal-sekolah">m</label>
                                            <input type="number" id="missing-desidus-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="filled-desidus-pemeriksaan-awal-sekolah">f</label>
                                            <input type="number" id="filled-desidus-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="for-extraction-desidus-pemeriksaan-awal-sekolah">x</label>
                                            <input type="number" id="for-extraction-desidus-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">`;
            btnAdaTiadaGigiDesidus.textContent = 'Ada';
            btnAdaTiadaGigiDesidus.classList.remove('tiada');
            btnAdaTiadaGigiDesidus.classList.add('ada');
        } else {
            statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
            btnAdaTiadaGigiDesidus.textContent = 'Tiada';
            btnAdaTiadaGigiDesidus.classList.remove('ada');
            btnAdaTiadaGigiDesidus.classList.add('tiada');
        }
    });

    const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-sekolah');
    const statusGigiKekal = document.querySelector('.status-gigi-kekal-sekolah');

    btnAdaTiadaGigiKekal.addEventListener('click', function(){
        if (btnAdaTiadaGigiKekal.classList.contains('tiada')){
            statusGigiKekal.innerHTML = `   <br>
                                            <label for="decay-kekal-pemeriksaan-awal-sekolah">D</label>
                                            <input type="number" id="decay-kekal-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="missing-kekal-pemeriksaan-awal-sekolah">M</label>
                                            <input type="number" id="missing-kekal-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="filled-kekal-pemeriksaan-awal-sekolah">F</label>
                                            <input type="number" id="filled-kekal-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="for-extraction-kekal-pemeriksaan-awal-sekolah">X</label>
                                            <input type="number" id="for-extraction-kekal-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">
                                            <label for="e-kekal-pemeriksaan-awal-sekolah">E</label>
                                            <input type="number" id="e-kekal-pemeriksaan-awal-sekolah" class="number-input-pemeriksaan-awal-sekolah">`;
            btnAdaTiadaGigiKekal.textContent = 'Ada';
            btnAdaTiadaGigiKekal.classList.remove('tiada');
            btnAdaTiadaGigiKekal.classList.add('ada');
        } else {
            statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
            btnAdaTiadaGigiKekal.textContent = 'Tiada';
            btnAdaTiadaGigiKekal.classList.remove('ada');
            btnAdaTiadaGigiKekal.classList.add('tiada');
        }
    });
}

function perluDibuatSekolah(){
    const btnPerluDibuatSekolah = document.querySelector('.perlu-dibuat-header-sekolah');
    const formPerluDibuatSekolah = document.querySelector('.form-perlu-dibuat-sekolah');
    const iconPlusPerluDibuat = '<i class="fas fa-plus"></i> Perlu dibuat';
    const iconMinusPerluDibuat = '<i class="fas fa-minus"></i> Perlu dibuat';

    btnPerluDibuatSekolah.addEventListener('click', function(){
        if (formPerluDibuatSekolah.classList.contains('close')) {
            formPerluDibuatSekolah.classList.remove('close');
            btnPerluDibuatSekolah.innerHTML = iconMinusPerluDibuat;
        } else {
            formPerluDibuatSekolah.classList.add('close');
            btnPerluDibuatSekolah.innerHTML = iconPlusPerluDibuat;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaranSekolah = document.querySelector('.pendaftaran-header-sekolah');
        const formPendaftaranSekolah = document.querySelector('.form-pendaftaran-sekolah');
        btnPendaftaranSekolah.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaranSekolah.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalSekolah = document.querySelector('.pemeriksaan-awal-header-sekolah');
        const formPemeriksaanAwalSekolah = document.querySelector('.form-pemeriksaan-awal-sekolah');
        btnPemeriksaanAwalSekolah.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwalSekolah.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-sekolah');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-sekolah');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-sekolah');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-sekolah');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close penyata akhir 1
        const btnPenyataAkhir1Sekolah = document.querySelector('.penyata-akhir-1-header-sekolah');
        const formPenyataAkhir1Sekolah = document.querySelector('.form-penyata-akhir-1-sekolah');
        btnPenyataAkhir1Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 1';
        formPenyataAkhir1Sekolah.classList.add('close');
        // close penyata akhir 2
        const btnPenyataAkhir2Sekolah = document.querySelector('.penyata-akhir-2-header-sekolah');
        const formPenyataAkhir2Sekolah = document.querySelector('.form-penyata-akhir-2-sekolah');
        btnPenyataAkhir2Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 2';
        formPenyataAkhir2Sekolah.classList.add('close');
        // close kotak
        const btnKotakSekolah = document.querySelector('.kotak-header-sekolah');
        const formKotakSekolah = document.querySelector('.form-kotak-sekolah');
        btnKotakSekolah.innerHTML = '<i class="fas fa-plus"></i> Kotak';
        formKotakSekolah.classList.add('close');
    });
}

function penyataAkhir1Sekolah(){
    const btnPenyataAkhir1Sekolah = document.querySelector('.penyata-akhir-1-header-sekolah');
    const formPenyataAkhir1Sekolah = document.querySelector('.form-penyata-akhir-1-sekolah');
    const iconPlusPenyataAkhir1 = '<i class="fas fa-plus"></i> Penyata akhir 1';
    const iconMinusPenyataAkhir1 = '<i class="fas fa-minus"></i> Penyata akhir 1';

    btnPenyataAkhir1Sekolah.addEventListener('click', function(){
        if (formPenyataAkhir1Sekolah.classList.contains('close')) {
            formPenyataAkhir1Sekolah.classList.remove('close');
            btnPenyataAkhir1Sekolah.innerHTML = iconMinusPenyataAkhir1;
        } else {
            formPenyataAkhir1Sekolah.classList.add('close');
            btnPenyataAkhir1Sekolah.innerHTML = iconPlusPenyataAkhir1;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaranSekolah = document.querySelector('.pendaftaran-header-sekolah');
        const formPendaftaranSekolah = document.querySelector('.form-pendaftaran-sekolah');
        btnPendaftaranSekolah.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaranSekolah.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalSekolah = document.querySelector('.pemeriksaan-awal-header-sekolah');
        const formPemeriksaanAwalSekolah = document.querySelector('.form-pemeriksaan-awal-sekolah');
        btnPemeriksaanAwalSekolah.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwalSekolah.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-sekolah');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-sekolah');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-sekolah');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-sekolah');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuatSekolah = document.querySelector('.perlu-dibuat-header-sekolah');
        const formPerluDibuatSekolah = document.querySelector('.form-perlu-dibuat-sekolah');
        btnPerluDibuatSekolah.innerHTML = '<i class="fas fa-plus"></i> Perlu dibuat';
        formPerluDibuatSekolah.classList.add('close');
        // close penyata akhir 2
        const btnPenyataAkhir2Sekolah = document.querySelector('.penyata-akhir-2-header-sekolah');
        const formPenyataAkhir2Sekolah = document.querySelector('.form-penyata-akhir-2-sekolah');
        btnPenyataAkhir2Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 2';
        formPenyataAkhir2Sekolah.classList.add('close');
        // close kotak
        const btnKotakSekolah = document.querySelector('.kotak-header-sekolah');
        const formKotakSekolah = document.querySelector('.form-kotak-sekolah');
        btnKotakSekolah.innerHTML = '<i class="fas fa-plus"></i> Kotak';
        formKotakSekolah.classList.add('close');
    });
}

function penyataAkhir2Sekolah(){
    const btnPenyataAkhir2Sekolah = document.querySelector('.penyata-akhir-2-header-sekolah');
    const formPenyataAkhir2Sekolah = document.querySelector('.form-penyata-akhir-2-sekolah');
    const iconPlusPenyataAkhir2 = '<i class="fas fa-plus"></i> Penyata akhir 2';
    const iconMinusPenyataAkhir2 = '<i class="fas fa-minus"></i> Penyata akhir 2';

    btnPenyataAkhir2Sekolah.addEventListener('click', function(){
        if (formPenyataAkhir2Sekolah.classList.contains('close')) {
            formPenyataAkhir2Sekolah.classList.remove('close');
            btnPenyataAkhir2Sekolah.innerHTML = iconMinusPenyataAkhir2;
        } else {
            formPenyataAkhir2Sekolah.classList.add('close');
            btnPenyataAkhir2Sekolah.innerHTML = iconPlusPenyataAkhir2;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaranSekolah = document.querySelector('.pendaftaran-header-sekolah');
        const formPendaftaranSekolah = document.querySelector('.form-pendaftaran-sekolah');
        btnPendaftaranSekolah.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaranSekolah.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalSekolah = document.querySelector('.pemeriksaan-awal-header-sekolah');
        const formPemeriksaanAwalSekolah = document.querySelector('.form-pemeriksaan-awal-sekolah');
        btnPemeriksaanAwalSekolah.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwalSekolah.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-sekolah');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-sekolah');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-sekolah');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-sekolah');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuatSekolah = document.querySelector('.perlu-dibuat-header-sekolah');
        const formPerluDibuatSekolah = document.querySelector('.form-perlu-dibuat-sekolah');
        btnPerluDibuatSekolah.innerHTML = '<i class="fas fa-plus"></i> Perlu dibuat';
        formPerluDibuatSekolah.classList.add('close');
        // close penyata akhir 1
        const btnPenyataAkhir1Sekolah = document.querySelector('.penyata-akhir-1-header-sekolah');
        const formPenyataAkhir1Sekolah = document.querySelector('.form-penyata-akhir-1-sekolah');
        btnPenyataAkhir1Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 1';
        formPenyataAkhir1Sekolah.classList.add('close');
        // close kotak
        const btnKotakSekolah = document.querySelector('.kotak-header-sekolah');
        const formKotakSekolah = document.querySelector('.form-kotak-sekolah');
        btnKotakSekolah.innerHTML = '<i class="fas fa-plus"></i> Kotak';
        formKotakSekolah.classList.add('close');
    });
}

function kotakSekolah(){
    const btnKotakSekolah = document.querySelector('.kotak-header-sekolah');
    const formKotakSekolah = document.querySelector('.form-kotak-sekolah');
    const iconPlusKotak = '<i class="fas fa-plus"></i> Kotak';
    const iconMinusKotak = '<i class="fas fa-minus"></i> Kotak';

    btnKotakSekolah.addEventListener('click', function(){
        if (formKotakSekolah.classList.contains('close')) {
            formKotakSekolah.classList.remove('close');
            btnKotakSekolah.innerHTML = iconMinusKotak;
        } else {
            formKotakSekolah.classList.add('close');
            btnKotakSekolah.innerHTML = iconPlusKotak;
        }
        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaranSekolah = document.querySelector('.pendaftaran-header-sekolah');
        const formPendaftaranSekolah = document.querySelector('.form-pendaftaran-sekolah');
        btnPendaftaranSekolah.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaranSekolah.classList.add('close');
        // close pemeriksaan awal
        const btnPemeriksaanAwalSekolah = document.querySelector('.pemeriksaan-awal-header-sekolah');
        const formPemeriksaanAwalSekolah = document.querySelector('.form-pemeriksaan-awal-sekolah');
        btnPemeriksaanAwalSekolah.innerHTML = '<i class="fas fa-plus"></i> Pemeriksaan Awal';
        formPemeriksaanAwalSekolah.classList.add('close');

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus-sekolah');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus-sekolah');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal-sekolah');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal-sekolah');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        const btnPerluDibuatSekolah = document.querySelector('.perlu-dibuat-header-sekolah');
        const formPerluDibuatSekolah = document.querySelector('.form-perlu-dibuat-sekolah');
        btnPerluDibuatSekolah.innerHTML = '<i class="fas fa-plus"></i> Perlu dibuat';
        formPerluDibuatSekolah.classList.add('close');
        // close penyata akhir 1
        const btnPenyataAkhir1Sekolah = document.querySelector('.penyata-akhir-1-header-sekolah');
        const formPenyataAkhir1Sekolah = document.querySelector('.form-penyata-akhir-1-sekolah');
        btnPenyataAkhir1Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 1';
        formPenyataAkhir1Sekolah.classList.add('close');
        // close penyata akhir 2
        const btnPenyataAkhir2Sekolah = document.querySelector('.penyata-akhir-2-header-sekolah');
        const formPenyataAkhir2Sekolah = document.querySelector('.form-penyata-akhir-2-sekolah');
        btnPenyataAkhir2Sekolah.innerHTML = '<i class="fas fa-plus"></i> Penyata akhir 2';
        formPenyataAkhir2Sekolah.classList.add('close');
    });   
}

// young adult header
function pendaftaranYoungAdult(){
    const btnPendaftaran = document.querySelector('.pendaftaran-header-ya');
    const formPendaftaran = document.querySelector('.form-pendaftaran-ya');
    const iconPlusPendaftaran = '<i class="fas fa-plus"></i> Pendaftaran';
    const iconMinusPendaftaran = '<i class="fas fa-minus"></i> Pendaftaran';

    btnPendaftaran.addEventListener('click', function(){
        if (formPendaftaran.classList.contains('close')) {
            formPendaftaran.classList.remove('close');
            btnPendaftaran.innerHTML = iconMinusPendaftaran;
        } else {
            formPendaftaran.classList.add('close');
            btnPendaftaran.innerHTML = iconPlusPendaftaran;
        }
    
        // to close other form when opening this form ----------
        // close statusKesihatanMulutYoungAdult
        const btnStatusKesihatanMulutYoungAdult = document.querySelector('.status-kesihatan-mulut-header-ya');
        const formStatusKesihatanMulut = document.querySelector('.form-status-kesihatan-mulut-ya');
        btnStatusKesihatanMulutYoungAdult.innerHTML = '<i class="fas fa-plus"></i> Status Kesihatan Mulut';
        formStatusKesihatanMulut.classList.add('close');
        // close rawatan
        const btnRawatan = document.querySelector('.rawatan-header-ya');
        const formRawatan = document.querySelector('.form-rawatan-ya');
        btnRawatan.innerHTML = '<i class="fas fa-plus"></i> Rawatan';
        formRawatan.classList.add('close');
    });
}

function statusKesihatanMulutYoungAdult(){
    const btnStatusKesihatanMulutYoungAdult = document.querySelector('.status-kesihatan-mulut-header-ya');
    const formStatusKesihatanMulut = document.querySelector('.form-status-kesihatan-mulut-ya');
    const iconPlusStatusKesihatanMulut = '<i class="fas fa-plus"></i> Status Kesihatan Mulut';
    const iconMinusStatusKesihatanMulut = '<i class="fas fa-minus"></i> Status Kesihatan Mulut';

    btnStatusKesihatanMulutYoungAdult.addEventListener('click', function(){
        if (formStatusKesihatanMulut.classList.contains('close')) {
            formStatusKesihatanMulut.classList.remove('close');
            btnStatusKesihatanMulutYoungAdult.innerHTML = iconMinusStatusKesihatanMulut;
        } else {
            formStatusKesihatanMulut.classList.add('close');
            btnStatusKesihatanMulutYoungAdult.innerHTML = iconPlusStatusKesihatanMulut;
        }

        // to close other form when opening this form ----------
        // close pendaftaran
        const btnPendaftaran = document.querySelector('.pendaftaran-header-ya');
        const formPendaftaran = document.querySelector('.form-pendaftaran-ya');
        btnPendaftaran.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaran.classList.add('close');
        // close rawatan
        const btnRawatan = document.querySelector('.rawatan-header-ya');
        const formRawatan = document.querySelector('.form-rawatan-ya');
        btnRawatan.innerHTML = '<i class="fas fa-plus"></i> Rawatan';
        formRawatan.classList.add('close');
    });
}

function rawatanYoungAdult(){
    const btnRawatan = document.querySelector('.rawatan-header-ya');
    const formRawatan = document.querySelector('.form-rawatan-ya');
    const iconPlusRawatan = '<i class="fas fa-plus"></i> Rawatan';
    const iconMinusRawatan = '<i class="fas fa-minus"></i> Rawatan';

    btnRawatan.addEventListener('click', function(){
        if (formRawatan.classList.contains('close')) {
            formRawatan.classList.remove('close');
            btnRawatan.innerHTML = iconMinusRawatan;
        } else {
            formRawatan.classList.add('close');
            btnRawatan.innerHTML = iconPlusRawatan;
        }
    
        // to close other form when opening this form ----------
        // close statusKesihatanMulutYoungAdult
        const btnStatusKesihatanMulutYoungAdult = document.querySelector('.status-kesihatan-mulut-header-ya');
        const formStatusKesihatanMulut = document.querySelector('.form-status-kesihatan-mulut-ya');
        btnStatusKesihatanMulutYoungAdult.innerHTML = '<i class="fas fa-plus"></i> Status Kesihatan Mulut';
        formStatusKesihatanMulut.classList.add('close');
        // close pendaftaran
        const btnPendaftaran = document.querySelector('.pendaftaran-header-ya');
        const formPendaftaran = document.querySelector('.form-pendaftaran-ya');
        btnPendaftaran.innerHTML = '<i class="fas fa-plus"></i> Pendaftaran';
        formPendaftaran.classList.add('close');

    });
}