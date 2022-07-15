window.addEventListener('pageshow', function (event) {
    const historyTraversal = event.persisted;
    if (historyTraversal) {
        window.location.reload();
    }
});

const onPageLoad = async () => {
    const welcomeUsernameDOM = document.querySelector('.welcome-username');
    const token = localStorage.getItem('token');
    try {
        const { data } = await axios.get('/api/v1/dashboard', { headers: { Authorization: `Bearer ${token}` } });
        welcomeUsernameDOM.innerHTML = `<h4>selamat datang ${data.kp}</h4><p>sila pilih kategori reten :</p>`;
    } catch (error) {
        welcomeUsernameDOM.innerHTML = `<h4>${error.response.data.msg}</h4>`;
        const currentUrl = window.location.href;
        const splittedUrl = currentUrl.split('/');
        const newUrl = 'http://' + splittedUrl[2];
        window.location.replace(newUrl);
    }
};

onPageLoad();

const logOutBtnDOM = document.querySelector('.logout');
logOutBtnDOM.addEventListener('click', function() {
    localStorage.removeItem('token');
    localStorage.removeItem('namaOperator');
    localStorage.removeItem('namaFasiliti');
});