const token = localStorage.getItem('token');
const namaOperator = localStorage.getItem('namaOperator');
const namaFasiliti = localStorage.getItem('namaFasiliti');

window.addEventListener('pageshow', function (event) {
    const historyTraversal = event.persisted;
    if (historyTraversal) {
        window.location.reload();
    }
});

async function dataIdentity() {
    const { data } = await axios.get('/api/v1/dashboard', { headers: { Authorization: `Bearer ${token}` } });
    return data;
}

const onPageLoad = async () => {
    const usernameKpDOM = document.querySelector('.username-kp');
    try {
        const identity = await dataIdentity();
        if (!namaFasiliti) {
            usernameKpDOM.innerHTML = `<p class="kp"><b>Klinik</b> : ${identity.kp}</p>`
        }
        if (namaFasiliti) {
            usernameKpDOM.innerHTML = `<p class="kp"><b>Klinik</b> : ${identity.kp}</p>
                                        <p class="kp">You relief ${namaFasiliti}</p>`;
        }
    } catch (error) {
        usernameKpDOM.innerHTML = `<h4>${error.response.data.msg}</h4>`;
        const currentUrl = window.location.href;
        const splittedUrl = currentUrl.split('/');
        const newUrl = 'http://' + splittedUrl[2];
        window.location.replace(newUrl);
    }
};

onPageLoad();