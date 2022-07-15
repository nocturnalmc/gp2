const formAlertDOM = document.querySelector('.form-alert');
const btnSaveDOM = document.querySelector('.save');

const namaPendaftaranSekolahDOM = document.getElementById('nama-pendaftaran-sekolah');
const umurPendaftaranSekolahDOM = document.getElementById('umur-pendaftaran-sekolah');
const kelasPendaftaranSekolahDOM = document.getElementById('kelas-pendaftaran-sekolah');
const namaSekolahPendaftaranSekolahDOM = document.getElementById('nama-sekolah-pendaftaran-sekolah');

btnSave.addEventListener('click', async () => {
    const namaPendaftaranSekolah = namaPendaftaranSekolahDOM.value;
    const umurPendaftaranSekolah = umurPendaftaranSekolahDOM.value;
    const kelasPendaftaranSekolah = kelasPendaftaranSekolahDOM.value;
    const namaSekolahPendaftaranSekolah = namaSekolahPendaftaranSekolahDOM.value;
    try {
        await axios.post('/api/v1/sekolah', { namaPendaftaranSekolah,
            umurPendaftaranSekolah,
            kelasPendaftaranSekolah,
            namaSekolahPendaftaranSekolah }, { headers: { Authorization: `Bearer ${token}` } });
 
        // clearing all value after creating person
        namaPendaftaranSekolahDOM.value = '';
        umurPendaftaranSekolahDOM.value = '';
        // kelasPendaftaranSekolahDOM.value = '';
        // namaSekolahPendaftaranSekolahDOM.value = '';
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