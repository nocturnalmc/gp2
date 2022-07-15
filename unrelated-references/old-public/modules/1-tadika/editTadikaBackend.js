const params = window.location.search;
const id = new URLSearchParams(params).get('id');

const namaPelajarDOM = document.getElementById('nama-pelajar');
const kelasDOM = document.getElementById('kelas');
const taskaTadikaDOM = document.getElementById('nama-taska/tadika');

const loadingTextDOM = document.querySelector('.loading-text');
const formAlertDOM = document.querySelector('.form-alert');
const btnModifyDOM = document.querySelector('.modify');

const namaPendaftaranTadikaDOM = document.getElementById('nama-pendaftaran-tadika');
const umurPendaftaranTadikaDOM = document.getElementById('umur-pendaftaran-tadika');
const kelasPendaftaranTadikaDOM = document.getElementById('kelas-pendaftaran-tadika');
const namaTaskaTadikaPendaftaranTadikaDOM = document.getElementById('nama-taska/tadika-pendaftaran-tadika');

const showPersonTadika = async () => {
    loadingTextDOM.style.display = 'block';
    try {
        const { data: { tadika } } = await axios.get(`/api/v1/tadika/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        namaPelajarDOM.textContent = `Nama pelajar : ${tadika.namaPendaftaranTadika}`;
        kelasDOM.textContent = `Kelas : ${tadika.kelasPendaftaranTadika}`;
        taskaTadikaDOM.textContent = `Tadika : ${tadika.namaTaskaTadikaPendaftaranTadika}`;
        
        namaPendaftaranTadikaDOM.value = tadika.namaPendaftaranTadika;
        umurPendaftaranTadikaDOM.value = tadika.umurPendaftaranTadika;
        kelasPendaftaranTadikaDOM.value = tadika.kelasPendaftaranTadika;
        namaTaskaTadikaPendaftaranTadikaDOM.value = tadika.namaTaskaTadikaPendaftaranTadika;
    } catch (error) {
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = error.response.data.msg;
    }
    loadingTextDOM.style.display = 'none';
};

showPersonTadika();

btnModifyDOM.addEventListener('click', async () => {
    loadingTextDOM.style.display = 'block';
    namaPelajarDOM.textContent = '';
    kelasDOM.textContent = '';
    taskaTadikaDOM.textContent = '';
    try {
        const namaPendaftaranTadika = namaPendaftaranTadikaDOM.value;
        const umurPendaftaranTadika = umurPendaftaranTadikaDOM.value;
        const kelasPendaftaranTadika = kelasPendaftaranTadikaDOM.value;
        const namaTaskaTadikaPendaftaranTadika = namaTaskaTadikaPendaftaranTadikaDOM.value;

        const { data: { tadika } } = await axios.patch(`/api/v1/tadika/${id}`, { namaPendaftaranTadika,
            umurPendaftaranTadika,
            kelasPendaftaranTadika,
            namaTaskaTadikaPendaftaranTadika }, { headers: { Authorization: `Bearer ${token}` } });

        // reassign back the updated value
        namaPelajarDOM.textContent = `Nama pelajar : ${tadika.namaPendaftaranTadika}`;
        kelasDOM.textContent = `Kelas : ${tadika.kelasPendaftaranTadika}`;
        taskaTadikaDOM.textContent = `Tadika : ${tadika.namaTaskaTadikaPendaftaranTadika}`;
        
        namaPendaftaranTadikaDOM.value = tadika.namaPendaftaranTadika;
        umurPendaftaranTadikaDOM.value = tadika.umurPendaftaranTadika;
        kelasPendaftaranTadikaDOM.value = tadika.kelasPendaftaranTadika;
        namaTaskaTadikaPendaftaranTadikaDOM.value = tadika.namaTaskaTadikaPendaftaranTadika;
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