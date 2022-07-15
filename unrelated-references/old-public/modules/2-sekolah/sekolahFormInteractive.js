window.addEventListener('DOMContentLoaded', function(){
    // sekolah
    pendaftaranSekolah();
    pemeriksaanAwalSekolah();
    perluDibuatSekolah();
    penyataAkhir1Sekolah();
    penyataAkhir2Sekolah();
    kotakSekolah(); 
});

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