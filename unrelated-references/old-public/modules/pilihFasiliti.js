const token = localStorage.getItem('token');

// -------------------------------Fasiliti--------------------

const pilihNamaFasilitiDOM = document.getElementById('pilih-fasiliti');
const submitNamaFasilitiDOM = document.getElementById('submit-nama-fasiliti');

const reqFasiliti = async () => {
    try {
        const { data: { fasilitis } } = await axios.get('/api/v1/pilih/fasiliti', { headers: { Authorization: `Bearer ${token}` } });
        console.log(fasilitis);
        displayFasiliti(fasilitis);
        function displayFasiliti(fasilitis) {
            let displayFasiliti = fasilitis.map(function (singleKlinik) {
                return `<option value="${singleKlinik.nama}">${singleKlinik.nama}</option>`;
            });
            displayFasiliti = displayFasiliti.join('');
            pilihNamaFasilitiDOM.innerHTML = displayFasiliti;
        }
    } catch (error) {
        console.log(error);
    }
};

reqFasiliti();

submitNamaFasilitiDOM.addEventListener('click', function() {
    const namaFasiliti = pilihNamaFasilitiDOM.value;
    localStorage.setItem('namaFasiliti', namaFasiliti);
    window.location.href = '/modules/dashboard.html';
});