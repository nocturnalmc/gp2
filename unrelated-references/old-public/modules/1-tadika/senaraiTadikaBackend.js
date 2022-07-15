const loadingTextDOM = document.querySelector('.loading-text');
const namaTaskaTadikaCurrentSelectedDOM = document.querySelector('.nama-taska-tadika-current-selected');
const btnSenaraiTadikaContainerDOM = document.querySelector('.btn-senarai-tadika-container')
const namaPersonTadikaContainerDOM = document.querySelector('.nama-person-tadika-container');

const showAllPersonTadika = async () => {
    loadingTextDOM.style.display = 'block';
    try {
        const { data: { tadikas } } = await axios.get('/api/v1/tadika', { headers: { Authorization: `Bearer ${token}` } });

        if (tadikas.length < 1) {
            loadingTextDOM.style.display = 'none';
            namaTaskaTadikaCurrentSelectedDOM.style.display = 'block';
            namaTaskaTadikaCurrentSelectedDOM.textContent = 'tiada taska / tadika yang dilawati';
            return;
        }

        displaySinglePersonTadika(tadikas);
        displayTaskaTadikaButton();
        function displaySinglePersonTadika(tadikas) {
            let displaySinglePerson = tadikas.map(function (singlePerson) {
                return `<div class="single-nama-person-tadika-container">
                            <p class="nama-person">${singlePerson.namaPendaftaranTadika}</p>
                            <p class="kelas-person">${singlePerson.kelasPendaftaranTadika}</p>
                            <div class="person-tadika-edit-delete">
                                <a href="./edit-tadika.html?id=${singlePerson._id}"  class="edit-link-person-tadika">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button class="btn-delete-person-tadika" data-id="${singlePerson._id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>`;
            });
            displaySinglePerson = displaySinglePerson.join('');
          
            namaPersonTadikaContainerDOM.innerHTML = displaySinglePerson;
            namaTaskaTadikaCurrentSelectedDOM.style.display = 'block';
            namaTaskaTadikaCurrentSelectedDOM.textContent = 'semua pelajar di taska / tadika yang dilawati';
        }

        function displayTaskaTadikaButton() {
            const namaTaskaTadika = tadikas.reduce(
                function (values, singlePerson) {
                    if (!values.includes(singlePerson.namaTaskaTadikaPendaftaranTadika)) {
                        values.push(singlePerson.namaTaskaTadikaPendaftaranTadika);
                    }
                    return values;
                }, ['SEMUA PELAJAR']);
            const taskaTadikaBtn = namaTaskaTadika.map(function (namaTaskaTadikaPendaftaranTadika) {
                return `<button class="btn-category filter-btn-taska-tadika btn-active" data-id="${namaTaskaTadikaPendaftaranTadika}">
                            ${namaTaskaTadikaPendaftaranTadika}
                        </button>`;
            }).join('');

            btnSenaraiTadikaContainerDOM.innerHTML = taskaTadikaBtn;
            const filterTaskaTadikaBtn = btnSenaraiTadikaContainerDOM.querySelectorAll('.filter-btn-taska-tadika');
          
            filterTaskaTadikaBtn.forEach(function (btn) {
                btn.addEventListener('click', function (e) {
                    const namaTaskaTadikaPendaftaranTadika = e.currentTarget.dataset.id;
                    const tadikasTaskaTadika = tadikas.filter(function (taskaTadika) {
                        if (taskaTadika.namaTaskaTadikaPendaftaranTadika === namaTaskaTadikaPendaftaranTadika) {
                            return taskaTadika;
                        }
                    });
                    if (namaTaskaTadikaPendaftaranTadika === 'SEMUA PELAJAR') {
                        displaySinglePersonTadika(tadikas);
                        namaTaskaTadikaCurrentSelectedDOM.textContent = 'semua pelajar di taska / tadika yang dilawati';
                    } else {
                        displaySinglePersonTadika(tadikasTaskaTadika);
                        namaTaskaTadikaCurrentSelectedDOM.textContent = namaTaskaTadikaPendaftaranTadika;
                    }
                });
            });
        }

        // download button send route to generate reten
        const filterTaskaTadikaBtn = btnSenaraiTadikaContainerDOM.querySelectorAll('.filter-btn-taska-tadika');
        filterTaskaTadikaBtn.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                let namaTaskaTadikaPendaftaranTadika = e.currentTarget.dataset.id;
                const btnDownloadDOM = document.querySelector('.download-to-generate');
                btnDownloadDOM.value = namaTaskaTadikaPendaftaranTadika;
            });
        });
    } catch (error) {
        namaTaskaTadikaCurrentSelectedDOM.textContent = 'error';
    }
    loadingTextDOM.style.display = 'none';
};

showAllPersonTadika();

namaPersonTadikaContainerDOM.addEventListener('click', async (e) => {
    const el = e.target;
    if (el.parentElement.classList.contains('btn-delete-person-tadika')) {
        loadingTextDOM.style.display = 'block';
        const id = el.parentElement.dataset.id;
        try {
            await axios.delete(`/api/v1/tadika/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    loadingTextDOM.style.display = 'none';
});

// open and close find modal
const btnFindDOM = document.querySelector('.find');
const findModalOverlayDOM = document.querySelector('.find-modal-overlay');
const findModalBtnCloseDOM = document.querySelector('.find-modal-btn-close');

btnFindDOM.addEventListener('click', function() {
    findModalOverlayDOM.classList.add('open-modal');
});
findModalBtnCloseDOM.addEventListener('click', function() {
    findModalOverlayDOM.classList.remove('open-modal');
});

// search pelajar inside find modal
const findModalInputNamaDOM = document.querySelector('.find-modal-input-nama');
const findModalBtnFindDOM = document.querySelector('.find-modal-btn-find');
const findModalLoadingTextDOM = document.querySelector('.find-modal-loading-text');
const findModalNamaPersonTadikaContainerDOM = document.querySelector('.find-modal-nama-person-tadika-container');

findModalBtnFindDOM.addEventListener('click', async () => {
    findModalLoadingTextDOM.style.display = 'block';
    try {
        const findModalInputNama = findModalInputNamaDOM.value.toUpperCase();
        const { data: { tadika } } = await axios.get(`/api/v1/query/tadika?namaPendaftaranTadika=${findModalInputNama}`, { headers: { Authorization: `Bearer ${token}` } });

        // if search query is empty
        if (findModalInputNama === '') {
            findModalLoadingTextDOM.style.display = 'none';
            findModalNamaPersonTadikaContainerDOM.innerHTML = `<div class="single-nama-person-tadika-container">
                                                                <p class="nama-person">No person found</p>
                                                                <p class="kelas-person"></p>
                                                                <div class="person-tadika-edit-delete">
                                                                </div>
                                                            </div>`;
            return;
        }

        // if search query return nothing
        if (tadika.length < 1) {
            findModalLoadingTextDOM.style.display = 'none';
            findModalNamaPersonTadikaContainerDOM.innerHTML = `<div class="single-nama-person-tadika-container">
                                                                <p class="nama-person">No person found</p>
                                                                <p class="kelas-person"></p>
                                                                <div class="person-tadika-edit-delete">
                                                                </div>
                                                            </div>`;
            return;
        }
        
        // show warning if return multiple result of same name
        if (tadika.length > 1) {
            alert('There are multiple results. Please check carefully');
        }

        displaySinglePersonTadika(tadika);
        function displaySinglePersonTadika(tadika) {
            let displaySinglePerson = tadika.map(function (singlePerson) {
                return `<div class="single-nama-person-tadika-container">
                            <p class="nama-person">${singlePerson.namaPendaftaranTadika}</p>
                            <p class="kelas-person">${singlePerson.kelasPendaftaranTadika}</p>
                            <div class="person-tadika-edit-delete">
                                <a href="./edit-tadika.html?id=${singlePerson._id}"  class="edit-link-person-tadika">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button class="btn-delete-person-tadika" data-id="${singlePerson._id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>`;
            });
            displaySinglePerson = displaySinglePerson.join('');
          
            findModalNamaPersonTadikaContainerDOM.innerHTML = displaySinglePerson;
        }

        findModalInputNamaDOM.value = '';
    } catch (error) {
        findModalNamaPersonTadikaContainerDOM.innerHTML = `<div class="single-nama-person-tadika-container">
                                                            <p class="nama-person">Error</p>
                                                            <p class="kelas-person"></p>
                                                            <div class="person-tadika-edit-delete">
                                                            </div>
                                                        </div>`;
    }
    findModalLoadingTextDOM.style.display = 'none';
});

findModalNamaPersonTadikaContainerDOM.addEventListener('click', async (e) => {
    const el = e.target;
    if (el.parentElement.classList.contains('btn-delete-person-tadika')) {
        findModalLoadingTextDOM.style.display = 'block';
        const id = el.parentElement.dataset.id;
        try {
            await axios.delete(`/api/v1/tadika/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    findModalLoadingTextDOM.style.display = 'none';
});