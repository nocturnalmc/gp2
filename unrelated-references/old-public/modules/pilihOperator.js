const token = localStorage.getItem('token');

// -------------------------------Operator---------------------

const pilihNamaOperatorDOM = document.getElementById('pilih-operator');
const reliefYaTidakDOM = document.getElementById('relief-ya-tidak');
const submitNamaOperatorDOM = document.getElementById('submit-nama-operator');
reliefYaTidakDOM.checked = false;

const reqOperator = async () => {
    try {
        const { data: { operators } } = await axios.get('/api/v1/pilih/operator', { headers: { Authorization: `Bearer ${token}` } });
        displayOperator(operators);
        function displayOperator(operators) {
            let displayOperator = operators.map(function (singlePerson) {
                return `<option value="${singlePerson.nama}">${singlePerson.nama}</option>`;
            });
            displayOperator = displayOperator.join('');
            pilihNamaOperatorDOM.innerHTML = displayOperator;
        }

        reliefYaTidakDOM.addEventListener('click', function() {
            const reliefYaTidak = reliefYaTidakDOM.checked;
            const namaOperator = pilihNamaOperatorDOM.value;
            submitNamaOperatorDOM.addEventListener('click', function() {
                if (reliefYaTidak === true) {
                    localStorage.setItem('namaOperator', namaOperator);
                    window.location.href= '/modules/pilihFasiliti.html';
                }
                if (reliefYaTidak === false) {
                    localStorage.setItem('namaOperator', namaOperator);
                    window.location.href = '/modules/dashboard.html';
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
};

reqOperator();

const reliefYaTidak = reliefYaTidakDOM.checked;
submitNamaOperatorDOM.addEventListener('click', function() {
    const namaOperator = pilihNamaOperatorDOM.value;
    if (reliefYaTidak === false) {
        localStorage.setItem('namaOperator', namaOperator);
        window.location.href = '/modules/dashboard.html';
    }
});