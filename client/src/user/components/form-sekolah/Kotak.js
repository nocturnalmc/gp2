export default function Kotak(props) {
  return (
    <>
      <div className='p-2'>
        <div className='grid grid-cols-2'>
          <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Kotak</p>
          </span>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
            <div className='grid gap-2 auto-rows-min'>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  status merokok<span className='text-user6'>*</span>
                </h4>
                <select
                  required
                  name='statusM'
                  id='statusM'
                  value={props.statusM}
                  onChange={(e) => {
                    props.setStatusM(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                >
                  <option value=''></option>
                  <option value='perokokSemasa'>Perokok Semasa</option>
                  <option value='bekasPerokok'>Bekas Perokok</option>
                  <option value='perokokPasif'>Perokok Pasif</option>
                  <option selected value='bukanPerokok'>
                    Bukan Perokok
                  </option>
                </select>
              </article>
              <article
                className={`${
                  props.statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  jenis rokok<span className='text-user6'>*</span>
                </h4>
                <select
                  required={props.statusM == 'perokokSemasa' ? true : false}
                  name='jenisR'
                  id='jenisR'
                  value={props.jenisR}
                  onChange={(e) => {
                    props.setJenisR(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                >
                  <option value=''></option>
                  <option value='rokokB'>Rokok Biasa</option>
                  <option value='elektronik'>Elektronik</option>
                  <option value='shisha'>Shisha</option>
                  <option value='lain2'>Lain-lain</option>
                </select>
              </article>
            </div>
            <div>
              <article
                className={`${
                  props.statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tarikh intervensi merokok
                </h4>
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 1:<span className='text-user6'>*</span>
                </p>
                <input
                  required={props.statusM == 'perokokSemasa' ? true : false}
                  type='date'
                  name='tarikh1'
                  id='tarikh1'
                  value={props.tarikh1}
                  onChange={(e) => {
                    props.setTarikh1(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 2:
                </p>
                <input
                  type='date'
                  name='tarikh2'
                  id='tarikh2'
                  value={props.tarikh2}
                  onChange={(e) => {
                    props.setTarikh2(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 3:
                </p>
                <input
                  type='date'
                  name='tarikh3'
                  id='tarikh3'
                  value={props.tarikh3}
                  onChange={(e) => {
                    props.setTarikh3(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 4:
                </p>
                <input
                  type='date'
                  name='tarikh4'
                  id='tarikh4'
                  value={props.tarikh4}
                  onChange={(e) => {
                    props.setTarikh4(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
              </article>
            </div>
            <div className='grid gap-2'>
              <article
                className={`${
                  props.statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5'>
                  status selepas intervensi
                </h4>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    required
                    type='radio'
                    name='ada-tiada-q'
                    id='ada-q'
                    value='ada-q'
                    checked={props.adaTiadaQ === 'ada-q' ? true : false}
                    onChange={(e) => {
                      props.setAdaTiadaQ(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label htmlFor='ada-q' className='m-2 text-sm font-m'>
                    ada quit date
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    required
                    type='radio'
                    name='ada-tiada-q'
                    id='tiada-q'
                    value='tiada-q'
                    checked={props.adaTiadaQ === 'tiada-q' ? true : false}
                    onChange={(e) => {
                      props.setAdaTiadaQ(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label htmlFor='tiada-q' className='m-2 text-sm font-m'>
                    tiada quit date
                  </label>
                </div>
                <p className='flex flex-row pl-5 text-sm font-m'>
                  dirujuk kepada guru kaunseling
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    required
                    type='radio'
                    name='rujuk-guru-kaunseling'
                    id='ya-rujuk-guru-kaunseling'
                    value='ya-rujuk-guru-kaunseling'
                    checked={
                      props.rujukGuruKaunseling === 'ya-rujuk-guru-kaunseling'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setRujukGuruKaunseling(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-rujuk-guru-kaunseling'
                    className='m-2 text-sm font-m'
                  >
                    Ya
                  </label>
                  <input
                    required
                    type='radio'
                    name='rujuk-guru-kaunseling'
                    id='tidak-rujuk-guru-kaunseling'
                    value='tidak-rujuk-guru-kaunseling'
                    checked={
                      props.rujukGuruKaunseling ===
                      'tidak-rujuk-guru-kaunseling'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setRujukGuruKaunseling(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-rujuk-guru-kaunseling'
                    className='m-2 text-sm font-m'
                  >
                    Tidak
                  </label>
                </div>
              </article>
              <article
                className={`${
                  props.statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tarikh quit date
                </h4>
                <input
                  type='date'
                  name='tarikhQ'
                  id='tarikhQ'
                  value={props.tarikhQ}
                  onChange={(e) => {
                    props.setTarikhQ(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m ml-3'
                />
              </article>
              <article
                className={`${
                  props.statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  status selepas 6 bulan
                </h4>
                <select
                  name='status-selepas-6-bulan-kotak'
                  id='status-selepas-6-bulan-kotak'
                  value={props.statusSelepas6Bulan}
                  onChange={(e) => {
                    props.setStatusSelepas6Bulan(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                >
                  <option value=''></option>
                  <option value='berhenti'>berhenti merokok</option>
                  <option value='tidakberhenti'>tidak berhenti merokok</option>
                </select>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
