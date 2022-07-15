const params = window.location.search;
const id = new URLSearchParams(params).get('id');

const namaPelajarDOM = document.getElementById('nama-pelajar');
const kelasDOM = document.getElementById('kelas');
const sekolahDOM = document.getElementById('nama-sekolah');

const loadingTextDOM = document.querySelector('.loading-text');
const formAlertDOM = document.querySelector('.form-alert');
const btnModifyDOM = document.querySelector('.modify');

const namaPendaftaranSekolahDOM = document.getElementById('nama-pendaftaran-sekolah');
const umurPendaftaranSekolahDOM = document.getElementById('umur-pendaftaran-sekolah');
const kelasPendaftaranSekolahDOM = document.getElementById('kelas-pendaftaran-sekolah');
const namaSekolahPendaftaranSekolahDOM = document.getElementById('nama-sekolah-pendaftaran-Sekolah');

const showPersonSekolah = async () => {
    loadingTextDOM.style.display = 'block';
    try {
        const { data: { sekolah } } = await axios.get(`/api/v1/sekolah/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        namaPelajarDOM.textContent = `Nama pelajar : ${sekolah.namaPendaftaranSekolah}`;
        kelasDOM.textContent = `Kelas : ${sekolah.kelasPendaftaranSekolah}`;
        sekolahDOM.textContent = `Sekolah : ${sekolah.namaSekolahPendaftaranSekolah}`;
        
        namaPendaftaranSekolahDOM.value = sekolah.namaPendaftaranSekolah;
        umurPendaftaranSekolahDOM.value = sekolah.umurPendaftaranSekolah;
        kelasPendaftaranSekolahDOM.value = sekolah.kelasPendaftaranSekolah;
        // namaSekolahPendaftaranSekolahDOM.value = sekolah.namaSekolahPendaftaranSekolah;
    } catch (error) {
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = error.response.data.msg;
        console.log(error);
    }
    loadingTextDOM.style.display = 'none';
};

showPersonSekolah();

btnModifyDOM.addEventListener('click', async () => {
    loadingTextDOM.style.display = 'block';
    namaPelajarDOM.textContent = '';
    kelasDOM.textContent = '';
    sekolahDOM.textContent = '';
    try {
        const namaPendaftaranSekolah = namaPendaftaranSekolahDOM.value;
        const umurPendaftaranSekolah = umurPendaftaranSekolahDOM.value;
        const kelasPendaftaranSekolah = kelasPendaftaranSekolahDOM.value;
        // const namaSekolahPendaftaranSekolah = namaSekolahPendaftaranSekolahDOM.value;

        const { data: { sekolah } } = await axios.patch(`/api/v1/sekolah/${id}`, { namaPendaftaranSekolah,
            umurPendaftaranSekolah,
            kelasPendaftaranSekolah,
            namaSekolahPendaftaranSekolah }, { headers: { Authorization: `Bearer ${token}` } });

        // reassign back the updated value
        namaPelajarDOM.textContent = `Nama pelajar : ${sekolah.namaPendaftaranSekolah}`;
        kelasDOM.textContent = `Kelas : ${sekolah.kelasPendaftaranSekolah}`;
        sekolahDOM.textContent = `Sekolah : ${sekolah.namaSekolahPendaftaranSekolah}`;
        
        namaPendaftaranSekolahDOM.value = sekolah.namaPendaftaranSekolah;
        umurPendaftaranSekolahDOM.value = sekolah.umurPendaftaranSekolah;
        kelasPendaftaranSekolahDOM.value = sekolah.kelasPendaftaranSekolah;
        // namaSekolahPendaftaranSekolahDOM.value = sekolah.namaSekolahPendaftaranSekolah;
        // --------------------------------

        formAlertDOM.style.display = 'block';
        formAlertDOM.classList.add('text-success');
        formAlertDOM.textContent = 'Success, data updated';
    } catch (error) {
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = 'Please fill all data correctly';
    }
    loadingTextDOM.style.display = 'none';
    setTimeout(() => {
        formAlertDOM.style.display = 'none';
        formAlertDOM.classList.remove('text-success');
    }, 3000);
});