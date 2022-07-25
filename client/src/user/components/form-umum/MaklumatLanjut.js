function MaklumatLanjut(props) {
  return (
    <>
      <div className='p-2'>
        <span className='flex bg-user3 p-2 w-full col-span-2'>
          <p className='ml-3 text-xl font-semibold'>maklumat lanjut</p>
        </span>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 mb-3 w-full'>
          <article className='flex justify-center border border-userBlack pl-3 p-2 rounded-md'>
            <div className='flex items-center flex-row pl-5 '>
              <p className='font-semibold'>kedatangan</p>
            </div>
            <div className='flex items-center flex-row pl-5 '>
              <input
                required
                type='radio'
                name='kedatangan'
                id='baru-kedatangan'
                value='baru-kedatangan'
                checked={props.kedatangan === 'baru-kedatangan' ? true : false}
                onChange={(e) => {
                  props.setKedatangan(e.target.value);
                }}
                className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label htmlFor='baru-kedatangan' className='m-2 text-sm font-m'>
                baru
              </label>
            </div>
            <div className='flex items-center flex-row pl-5 '>
              <input
                required
                type='radio'
                name='kedatangan'
                id='ulangan-kedatangan'
                value='ulangan-kedatangan'
                checked={
                  props.kedatangan === 'ulangan-kedatangan' ? true : false
                }
                onChange={(e) => {
                  props.setKedatangan(e.target.value);
                }}
                className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label
                htmlFor='ulangan-kedatangan'
                className='m-2 text-sm font-m'
              >
                ulangan
              </label>
              <br />
              <div>
                <input
                  type='date'
                  required
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                  onChange={(e) => {
                    props.setTarikhKedatangan = e.target.value;
                  }}
                />
              </div>
            </div>
          </article>
          <div className='row-span-4 border border-userBlack pl-3 p-2 rounded-md'>
            <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
              <div>
                <p className='font-semibold'>fasiliti taska / tadika </p>
                <select
                  name='fasiliti-taska-tadika'
                  id='fasiliti-taska-tadika'
                  value={props.fasilitiTaskaTadika}
                  onChange={(e) => {
                    props.setFasilitiTaskaTadika(e.target.value);
                  }}
                >
                  <option value=''>Pilih</option>
                  <option value='taska'>Taska</option>
                  <option value='tadika'>Tadika</option>
                </select>
              </div>
              {/* buang className ni nnti */}
              <div className='overflow-x-auto'>
                <select
                  name='jenis-taska-tadika'
                  id='jenis-taska-tadika'
                  value={props.jenisTaskaTadika}
                  onChange={(e) => {
                    props.setJenisTaskaTadika(e.target.value);
                  }}
                >
                  <option value=''>Pilih</option>
                  <option value='taska'>KEMAS </option>
                  <option value='tadika'>Perpaduan </option>
                  <option value='taska'>Lain-lain</option>
                  <option value='tadika'>Swasta</option>
                </select>
                <br />
                <input
                  type='checkbox'
                  id='kelas-toddler'
                  name='kelas-toddler'
                  value='kelas-toddler'
                  checked={props.kelasToddler}
                  onChange={() => {
                    props.setKelasToddler(!props.kelasToddler);
                  }}
                  className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                />
                <label htmlFor='kelas-toddler' className='ml-2 text-sm font-m'>
                  Kelas toddler
                </label>
              </div>
            </article>
            <p className='font-semibold'>nama fasiliti</p>
            <select
              name='nama-fasiliti-taska-tadika'
              id='nama-fasiliti-taska-tadika'
              value={props.namaFasilitiTaskaTadika}
              onChange={(e) => {
                props.setNamaFasilitiTaskaTadika(e.target.value);
              }}
              className='w-11/12'
            >
              <option value=''>Pilih</option>
              <option value='taska perak'>Taska Perak</option>
              <option value='tadika emas'>Tadika Emas</option>
            </select>
            <div className='flex items-center flex-row pl-5 '>
              <label
                htmlFor='enrolmen-taska-tadika'
                className='m-2 text-sm font-m'
              >
                enrolmen
              </label>
              <input
                required
                type='checkbox'
                id='enrolmen-taska-tadika'
                name='enrolmen-taska-tadika'
                value='enrolmen-taska-tadika'
                checked={props.enrolmenTaskaTadika}
                onChange={() => {
                  props.setEnrolmenTaskaTadika(!props.enrolmenTaskaTadika);
                }}
                className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
            </div>
            <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
              <h4 className='flex flex-row items-center pl-5 font-bold col-span-2'>
                kedatangan taska / tadika
              </h4>
              <div className='grid grid-rows-2 col-span-2 lg:col-span-1'>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='kedatangan-taska-tadika'
                    id='baru-kedatangan-taska-tadika'
                    value='baru-kedatangan-taska-tadika'
                    checked={
                      props.kedatanganTaskaTadika ===
                      'baru-kedatangan-taska-tadika'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setKedatanganTaskaTadika(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='baru-kedatangan-taska-tadika'
                    className='m-2 text-sm font-m'
                  >
                    baru
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    required
                    type='radio'
                    name='kedatangan-taska-tadika'
                    id='ulangan-kedatangan-taska-tadika'
                    value='ulangan-kedatangan-taska-tadika'
                    checked={
                      props.kedatanganTaskaTadika ===
                      'ulangan-kedatangan-taska-tadika'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setKedatanganTaskaTadika(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ulangan-kedatangan-taska-tadika'
                    className='m-2 text-sm font-m'
                  >
                    ulangan
                  </label>
                </div>
              </div>
              <div className='grid grid-rows-2'>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='enggan-taska-tadika'
                    id='enggan-taska-tadika'
                    value='enggan-taska-tadika'
                    checked={props.engganTaskaTadika}
                    onChange={() => {
                      props.setEngganTaskaTadika(!props.engganTaskaTadika);
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='enggan-taska-tadika'
                    className='m-2 text-sm font-m'
                  >
                    enggan
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tidak-hadir-taska-tadika'
                    id='tidak-hadir-taska-tadika'
                    value='tidak-hadir-taska-tadika'
                    checked={props.tidakHadirTaskaTadika}
                    onChange={() => {
                      props.setTidakHadirTaskaTadika(
                        !props.tidakHadirTaskaTadika
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='tidak-hadir-taska-tadika'
                    className='m-2 text-sm font-m'
                  >
                    tidak hadir
                  </label>
                </div>
              </div>
              <div className=' outline outline-1 outline-userBlack grid grid-rows-3 col-start-2'>
                <h4 className=' font-bold flex items-center flex-row px-2 text-clip'>
                  pemeriksaan
                </h4>
                <div className='flex items-center flex-row px-2'>
                  <input
                    type='radio'
                    name='pemeriksaan-taska-tadika'
                    id='ada-pemeriksaan-taska-tadika'
                    value='ada-pemeriksaan-taska-tadika'
                    checked={
                      props.pemeriksaanTaskaTadika ===
                      'ada-pemeriksaan-taska-tadika'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setPemeriksaanTaskaTadika(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ada-pemeriksaan-taska-tadika'
                    className='m-2 text-sm font-m'
                  >
                    ada
                  </label>
                </div>
                <div className='flex items-center flex-row px-2'>
                  <input
                    type='radio'
                    name='pemeriksaan-taska-tadika'
                    id='tiada-pemeriksaan-taska-tadika'
                    value='tiada-pemeriksaan-taska-tadika'
                    checked={
                      props.pemeriksaanTaskaTadika ===
                      'tiada-pemeriksaan-taska-tadika'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setPemeriksaanTaskaTadika(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tiada-pemeriksaan-taska-tadika'
                    className='m-2 text-sm font-m'
                  >
                    tiada
                  </label>
                </div>
              </div>
            </article>
          </div>
          {/* <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
            <div>
              <p className='font-semibold'>ibu mengandung</p>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='ya-tidak-ibu-mengandung'
                  id='ya-ibu-mengandung'
                  value='ya-ibu-mengandung'
                  checked={
                    props.yaTidakIbuMengandung === 'ya-ibu-mengandung'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setYaTidakIbuMengandung(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='ya-ibu-mengandung'
                  className='m-2 text-sm font-m'
                >
                  ya
                </label>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='ya-tidak-ibu-mengandung'
                  id='tidak-ibu-mengandung'
                  value='tidak-ibu-mengandung'
                  checked={
                    props.yaTidakIbuMengandung === 'tidak-ibu-mengandung'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setYaTidakIbuMengandung(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='tidak-ibu-mengandung'
                  className='m-2 text-sm font-m'
                >
                  tidak
                </label>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='baru-ulangan-ibu-mengandung'
                  id='baru-ibu-mengandung'
                  value='baru-ibu-mengandung'
                  checked={
                    props.baruUlanganIbuMengandung === 'baru-ibu-mengandung'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setBaruUlanganIbuMengandung(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='baru-ibu-mengandung'
                  className='m-2 text-sm font-m'
                >
                  baru
                </label>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='baru-ulangan-ibu-mengandung'
                  id='ulangan-ibu-mengandung'
                  value='ulangan-ibu-mengandung'
                  checked={
                    props.baruUlanganIbuMengandung === 'ulangan-ibu-mengandung'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setBaruUlanganIbuMengandung(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='ulangan-ibu-mengandung'
                  className='m-2 text-sm font-m'
                >
                  ulangan
                </label>
              </div>
            </div>
          </article> */}
          <article className='grid justify-center border border-userBlack pl-3 p-2 rounded-md'>
            <div className='flex'>
              <div className='flex items-center flex-row pl-5 '>
                <p className='font-semibold'>kedatangan KEPP</p>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='kedatangan-kepp'
                  id='baru-kedatangan-kepp'
                  value='baru-kedatangan-kepp'
                  checked={
                    props.kedatanganKepp === 'baru-kedatangan-kepp'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setKedatanganKepp(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='baru-kedatangan-kepp'
                  className='m-2 text-sm font-m'
                >
                  baru
                </label>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='kedatangan-kepp'
                  id='ulangan-kedatangan-kepp'
                  value='ulangan-kedatangan-kepp'
                  checked={
                    props.kedatanganKepp === 'ulangan-kedatangan-kepp'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setKedatanganKepp(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='ulangan-kedatangan-kepp'
                  className='m-2 text-sm font-m'
                >
                  ulangan
                </label>
              </div>
            </div>
            <div
              className={`${
                props.kedatanganKepp === 'baru-kedatangan-kepp'
                  ? 'visible'
                  : 'hidden'
              } flex items-center flex-row pl-5`}
            >
              <label htmlFor='tarikh-rujukan' className='m-2 text-sm font-m'>
                tarikh rujukan
              </label>
              <input
                type='date'
                name='tarikh-rujukan-kepp'
                id='tarikh-rujukan-kepp'
                value={props.tarikhRujukanKepp}
                onChange={(e) => {
                  props.setTarikhRujukanKepp(e.target.value);
                }}
                className='outline outline-1 outline-userBlack m-2 text-sm font-m'
              />
            </div>
            <div
              className={`${
                props.kedatanganKepp === 'ulangan-kedatangan-kepp'
                  ? 'visible'
                  : 'hidden'
              } flex items-center flex-row pl-5`}
            >
              <label htmlFor='tarikh-rujukan' className='m-2 text-sm font-m'>
                tarikh perundingan pertama
              </label>
              <input
                type='date'
                name='tarikh-rujukan-kepp'
                id='tarikh-rujukan-kepp'
                value={props.tarikhRundinganPertama}
                onChange={(e) => {
                  props.setTarikhRundinganPertama(e.target.value);
                }}
                className='outline outline-1 outline-userBlack m-2 text-sm font-m'
              />
            </div>
            <div
              className={`${
                props.kedatanganKepp === 'ulangan-kedatangan-kepp'
                  ? 'visible'
                  : 'hidden'
              } flex items-center flex-row pl-5`}
            >
              <label
                htmlFor='tarikh-mula-rawatan'
                className='m-2 text-sm font-m'
              >
                tarikh mula rawatan
              </label>
              <input
                type='date'
                name='tarikh-mula-rawatan-kepp'
                id='tarikh-mula-rawatan-kepp'
                value={props.tarikhMulaRawatanKepp}
                onChange={(e) => {
                  props.setTarikhMulaRawatanKepp(e.target.value);
                }}
                className='outline outline-1 outline-userBlack m-2 text-sm font-m'
              />
            </div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
            <p className='font-semibold col-span-2'>penyampaian perkhidmatan</p>
            <div className='flex items-center flex-row pl-5 '>
              <input
                required
                type='checkbox'
                id='kp-bergerak-maklumat-lanjut-umum'
                name='kp-bergerak-maklumat-lanjut-umum'
                checked={props.kpBergerakMaklumatLanjutUmum ? true : false}
                onChange={() => {
                  props.setKpBergerakMaklumatLanjutUmum(
                    !props.kpBergerakMaklumatLanjutUmum
                  );
                }}
                className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label
                htmlFor='kp-bergerak-maklumat-lanjut-umum'
                className='m-2 text-sm font-m'
              >
                KP bergerak
              </label>
              <select
                name='label-kp-bergerak-maklumat-lanjut-umum'
                id='label-kp-bergerak-maklumat-lanjut-umum'
                value={props.labelKpBergerakMaklumatLanjutUmum}
                onChange={() => {
                  props.setLabelKpBergerakMaklumatLanjutUmum(
                    !props.labelKpBergerakMaklumatLanjutUmum
                  );
                }}
              >
                <option value=''>Label</option>
                <option value='apa??'>Apa?</option>
              </select>
            </div>
            <div className='flex items-center flex-row pl-5 '>
              <input
                required
                type='checkbox'
                id='pasukan-pergigian-bergerak-maklumat-lanjut-umum'
                name='pasukan-pergigian-bergerak-maklumat-lanjut-umum'
                checked={
                  props.pasukanPergigianBergerakMaklumatLanjutUmum
                    ? true
                    : false
                }
                onChange={() => {
                  props.setPasukanPergigianBergerakMaklumatLanjutUmum(
                    !props.pasukanPergigianBergerakMaklumatLanjutUmum
                  );
                }}
                className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label
                htmlFor='pasukan-pergigian-bergerak-maklumat-lanjut-umum'
                className='m-2 text-sm font-m'
              >
                pasukan pergigian bergerak
              </label>
            </div>
            <div className='flex items-center flex-row pl-5 '>
              <input
                required
                type='checkbox'
                id='makmal-pergigian-bergerak-maklumat-lanjut-umum'
                name='makmal-pergigian-bergerak-maklumat-lanjut-umum'
                checked={
                  props.makmalPergigianBergerakMaklumatLanjutUmum ? true : false
                }
                onChange={() => {
                  props.setMakmalPergigianBergerakMaklumatLanjutUmum(
                    !props.makmalPergigianBergerakMaklumatLanjutUmum
                  );
                }}
                className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label
                htmlFor='makmal-pergigian-bergerak-maklumat-lanjut-umum'
                className='m-2 text-sm font-m'
              >
                makmal pergigian bergerak
              </label>
              <select
                name='label-makmal-pergigian-bergerak-maklumat-lanjut-umum'
                id='label-makmal-pergigian-bergerak-maklumat-lanjut-umum'
                value={props.labelMakmalPergigianBergerakMaklumatLanjutUmum}
                onChange={(e) => {
                  props.setLabelMakmalPergigianBergerakMaklumatLanjutUmum(
                    e.target.value
                  );
                }}
              >
                <option value=''>Label</option>
                <option value='apa??'>Apa?</option>
              </select>
            </div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
            <div>
              <p className='font-semibold'>KG angkat</p>
            </div>
            <div className='grid'>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='kg-angkat'
                  id='komuniti-kg-angkat'
                  value='komuniti-kg-angkat'
                  checked={
                    props.kgAngkat === 'komuniti-kg-angkat' ? true : false
                  }
                  onChange={(e) => {
                    props.setKgAngkat(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='komuniti-kg-angkat'
                  className='m-2 text-sm font-m'
                >
                  komuniti
                </label>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='kg-angkat'
                  id='lawatan-ke-rumah-kg-angkat'
                  value='lawatan-ke-rumah-kg-angkat'
                  checked={
                    props.kgAngkat === 'lawatan-ke-rumah-kg-angkat'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setKgAngkat(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='lawatan-ke-rumah-kg-angkat'
                  className='m-2 text-sm font-m'
                >
                  lawatan ke rumah
                </label>
              </div>
            </div>
          </article>
          <div className='row-span-3'>
            <article className='grid grid-cols-3 border border-userBlack pl-3 p-2 rounded-md'>
              <div>
                <p className='font-semibold'>
                  institusi pengajian tinggi / kolej
                </p>
              </div>
              <div className='grid'>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='ipg-institusi-pengajian-tinggi-kolej'
                    value='ipg-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'ipg-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ipg-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    IPG
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='kolej-komuniti-institusi-pengajian-tinggi-kolej'
                    value='kolej-komuniti-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'kolej-komuniti-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='kolej-komuniti-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    kolej komuniti
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='politeknik-institusi-pengajian-tinggi-kolej'
                    value='politeknik-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'politeknik-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='politeknik-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    politeknik
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='institut-latihan-kerajaan-institusi-pengajian-tinggi-kolej'
                    value='institut-latihan-kerajaan-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'institut-latihan-kerajaan-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='institut-latihan-kerajaan-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    institut latihan kerajaan
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='giatmara-institusi-pengajian-tinggi-kolej'
                    value='giatmara-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'giatmara-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='giatmara-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    giatmara
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='ipta-institusi-pengajian-tinggi-kolej'
                    value='ipta-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'ipta-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ipta-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    IPTA
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <input
                    required
                    type='radio'
                    name='institusi-pengajian-tinggi-kolej'
                    id='ipts-institusi-pengajian-tinggi-kolej'
                    value='ipts-institusi-pengajian-tinggi-kolej'
                    checked={
                      props.institusiPengajianTinggiKolej ===
                      'ipts-institusi-pengajian-tinggi-kolej'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ipts-institusi-pengajian-tinggi-kolej'
                    className='m-2 text-sm font-m'
                  >
                    IPTS
                  </label>
                </div>
              </div>
              <div className='grid justify-start'>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='ipg-institusi-pengajian-tinggi-kolej'
                    id='ipg-institusi-pengajian-tinggi-kolej'
                    value={props.ipgInstitusiPengajianTinggiKolej}
                    onChange={(e) => {
                      props.setIpgInstitusiPengajianTinggiKolej(e.target.value);
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='kolej-komuniti-institusi-pengajian-tinggi-kolej'
                    id='kolej-komuniti-institusi-pengajian-tinggi-kolej'
                    value={props.kolejKomunitiInstitusiPengajianTinggiKolej}
                    onChange={(e) => {
                      props.setKolejKomunitiInstitusiPengajianTinggiKolej(
                        e.target.value
                      );
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='politeknik-institusi-pengajian-tinggi-kolej'
                    id='politeknik-institusi-pengajian-tinggi-kolej'
                    value={props.politeknikInstitusiPengajianTinggiKolej}
                    onChange={(e) => {
                      props.setPoliteknikInstitusiPengajianTinggiKolej(
                        e.target.value
                      );
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='institut-latihan-kerajaan-institusi-pengajian-tinggi-kolej'
                    id='institut-latihan-kerajaan-institusi-pengajian-tinggi-kolej'
                    value={
                      props.institutLatihanKerajaanInstitusiPengajianTinggiKolej
                    }
                    onChange={(e) => {
                      props.setInstitutLatihanKerajaanInstitusiPengajianTinggiKolej(
                        e.target.value
                      );
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='giatmara-institusi-pengajian-tinggi-kolej'
                    id='giatmara-institusi-pengajian-tinggi-kolej'
                    value={props.giatmaraInstitusiPengajianTinggiKolej}
                    onChange={(e) => {
                      props.setGiatmaraInstitusiPengajianTinggiKolej(
                        e.target.value
                      );
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='ipta-institusi-pengajian-tinggi-kolej'
                    id='ipta-institusi-pengajian-tinggi-kolej'
                    value={props.iptaInstitusiPengajianTinggiKolej}
                    onChange={(e) => {
                      props.setIptaInstitusiPengajianTinggiKolej(
                        e.target.value
                      );
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5 '>
                  <select
                    name='ipts-institusi-pengajian-tinggi-kolej'
                    id='ipts-institusi-pengajian-tinggi-kolej'
                    value={props.iptsInstitusiPengajianTinggiKolej}
                    onChange={(e) => {
                      props.setIptsInstitusiPengajianTinggiKolej(
                        e.target.value
                      );
                    }}
                    className='ml-5'
                  >
                    <option value=''>Label</option>
                    <option value='apa??'>Apa?</option>
                  </select>
                </div>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <label
                  htmlFor='enrolmen-institusi-pengajian-tinggi-kolej'
                  className='m-2 text-sm font-m'
                >
                  enrolmen
                </label>
                <input
                  required
                  type='checkbox'
                  id='enrolmen-institusi-pengajian-tinggi-kolej'
                  name='enrolmen-institusi-pengajian-tinggi-kolej'
                  value='enrolmen-institusi-pengajian-tinggi-kolej'
                  checked={props.enrolmenInstitusiPengajianTinggiKolej}
                  onChange={() => {
                    props.setEnrolmenInstitusiPengajianTinggiKolej(
                      !props.enrolmenInstitusiPengajianTinggiKolej
                    );
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
              </div>
            </article>
          </div>
          <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
            <div>
              <p className='font-semibold'>institusi OKU</p>
            </div>
            <div className='grid'>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='institusi-oku'
                  id='pdk-institusi-oku'
                  value='pdk-institusi-oku'
                  checked={
                    props.institusiOku === 'pdk-institusi-oku' ? true : false
                  }
                  onChange={(e) => {
                    props.setInstitusiOku(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='pdk-institusi-oku'
                  className='m-2 text-sm font-m'
                >
                  PDK
                </label>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='institusi-oku'
                  id='non-pdk-institusi-oku'
                  value='non-pdk-institusi-oku'
                  checked={
                    props.institusiOku === 'non-pdk-institusi-oku'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setInstitusiOku(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='non-pdk-institusi-oku'
                  className='m-2 text-sm font-m'
                >
                  non - PDK
                </label>
              </div>
            </div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
            <div>
              <p className='font-semibold'>institusi warga emas</p>
            </div>
            <div className='grid'>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='institusi-warga-emas'
                  id='kerajaan-institusi-warga-emas'
                  value='kerajaan-institusi-warga-emas'
                  checked={
                    props.institusiWargaEmas === 'kerajaan-institusi-warga-emas'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setInstitusiWargaEmas(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='kerajaan-institusi-warga-emas'
                  className='m-2 text-sm font-m'
                >
                  kerajaan
                </label>
                <select
                  name='kerajaan-institusi-warga-emas'
                  id='kerajaan-institusi-warga-emas'
                  value={props.kerajaanInstitusiWargaEmas}
                  onChange={(e) => {
                    props.setKerajaanInstitusiWargaEmas(e.target.value);
                  }}
                  className='ml-3'
                >
                  <option value=''>Label</option>
                  <option value='apa??'>Apa?</option>
                </select>
              </div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='institusi-warga-emas'
                  id='swasta-institusi-warga-emas'
                  value='swasta-institusi-warga-emas'
                  checked={
                    props.institusiWargaEmas === 'swasta-institusi-warga-emas'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setInstitusiWargaEmas(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='swasta-institusi-warga-emas'
                  className='m-2 text-sm font-m'
                >
                  swasta
                </label>
                <select
                  name='swasta-institusi-warga-emas'
                  id='swasta-institusi-warga-emas'
                  value={props.swastaInstitusiWargaEmas}
                  onChange={(e) => {
                    props.setSwastaInstitusiWargaEmas(e.target.value);
                  }}
                  className='ml-5'
                >
                  <option value=''>Label</option>
                  <option value='apa??'>Apa?</option>
                </select>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default MaklumatLanjut;
