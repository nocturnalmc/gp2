window.addEventListener('DOMContentLoaded', function(){
    // tadika
    pendaftaranTadika();
    pemeriksaanAwalTadika();

    // sekolah
    pendaftaranSekolah();
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
});
btnCategorySekolah.addEventListener('click', function(){
    btnCategorySekolah.classList.toggle('btn-active');
    btnCategoryTadika.classList.remove('btn-active');
    btnCategoryYoungAdult.classList.remove('btn-active');
    showHideSekolah();
    hideTadika();
});
btnCategoryYoungAdult.addEventListener('click', function(){
    btnCategoryYoungAdult.classList.toggle('btn-active');
    btnCategoryTadika.classList.remove('btn-active');
    btnCategorySekolah.classList.remove('btn-active');
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
    if (perluDibuatHeader.style.display === 'block'){
        perluDibuatHeader.style.display = 'none';
    } else {
        perluDibuatHeader.style.display = 'block';
    }

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-tadika');
    if (penyataAkhir1Header.style.display === 'block'){
        penyataAkhir1Header.style.display = 'none';
    } else {
        penyataAkhir1Header.style.display = 'block';
    }

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-tadika');
    if (penyataAkhir2Header.style.display === 'block'){
        penyataAkhir2Header.style.display = 'none';
    } else {
        penyataAkhir2Header.style.display = 'block';
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
    perluDibuatHeader.style.display = 'none';

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-tadika');
    penyataAkhir1Header.style.display = 'none';

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-tadika');
    penyataAkhir2Header.style.display = 'none';
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
    if (pemeriksaanAwalHeader.style.display === 'block'){
        pemeriksaanAwalHeader.style.display = 'none';
    } else {
        pemeriksaanAwalHeader.style.display = 'block';
    }

    const perluDibuatHeader = document.querySelector('.perlu-dibuat-header-sekolah');
    if (perluDibuatHeader.style.display === 'block'){
        perluDibuatHeader.style.display = 'none';
    } else {
        perluDibuatHeader.style.display = 'block';
    }

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-sekolah');
    if (penyataAkhir1Header.style.display === 'block'){
        penyataAkhir1Header.style.display = 'none';
    } else {
        penyataAkhir1Header.style.display = 'block';
    }

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-sekolah');
    if (penyataAkhir2Header.style.display === 'block'){
        penyataAkhir2Header.style.display = 'none';
    } else {
        penyataAkhir2Header.style.display = 'block';
    }

    const kotakHeader = document.querySelector('.kotak-header-sekolah');
    if (kotakHeader.style.display === 'block'){
        kotakHeader.style.display = 'none';
    } else {
        kotakHeader.style.display = 'block';
    }
}

function hideSekolah(){
    const pendaftaranHeader = document.querySelector('.pendaftaran-header-sekolah');
    const formPendaftaran = document.querySelector('.form-pendaftaran-sekolah');
    pendaftaranHeader.style.display = 'none';
    formPendaftaran.style.display = 'none';

    const pemeriksaanAwalHeader = document.querySelector('.pemeriksaan-awal-header-sekolah');
    pemeriksaanAwalHeader.style.display = 'none';

    const perluDibuatHeader = document.querySelector('.perlu-dibuat-header-sekolah');
    perluDibuatHeader.style.display = 'none';

    const penyataAkhir1Header = document.querySelector('.penyata-akhir-1-header-sekolah');
    penyataAkhir1Header.style.display = 'none';

    const penyataAkhir2Header = document.querySelector('.penyata-akhir-2-header-sekolah');
    penyataAkhir2Header.style.display = 'none';

    const kotakHeader = document.querySelector('.kotak-header-sekolah');
    kotakHeader.style.display = 'none';
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

        const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus');
        const statusGigiDesidus = document.querySelector('.status-gigi-desidus');
        statusGigiDesidus.innerHTML = `<p>Klik butang di atas jika ada gigi desidus</p>`;
        btnAdaTiadaGigiDesidus.textContent = 'Tiada';
        btnAdaTiadaGigiDesidus.classList.remove('ada');
        btnAdaTiadaGigiDesidus.classList.add('tiada');

        const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal');
        const statusGigiKekal = document.querySelector('.status-gigi-kekal');
        statusGigiKekal.innerHTML = `<p>Klik butang di atas jika ada gigi kekal</p>`;
        btnAdaTiadaGigiKekal.textContent = 'Tiada';
        btnAdaTiadaGigiKekal.classList.remove('ada');
        btnAdaTiadaGigiKekal.classList.add('tiada');
        // close perlu dibuat
        
        // close penyata akhir 1

        // close penyata akhir 2

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

        // close penyata akhir 1

        // close penyata akhir 2

    });
    
    const btnAdaTiadaGigiDesidus = document.querySelector('.btn-status-gigi-desidus');
    const statusGigiDesidus = document.querySelector('.status-gigi-desidus');

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

    const btnAdaTiadaGigiKekal = document.querySelector('.btn-status-gigi-kekal');
    const statusGigiKekal = document.querySelector('.status-gigi-kekal');

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

// sekolah header
function pendaftaranSekolah(){
    const btnPendaftaran = document.querySelector('.pendaftaran-header-sekolah');
    const formPendaftaran = document.querySelector('.form-pendaftaran-sekolah');
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
    });
}