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
                  name='statusMUmum'
                  id='statusMUmum'
                  value={props.statusMUmum}
                  onChange={(e) => {
                    props.setStatusMUmum(e.target.value);
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
                  props.statusMUmum == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  jenis rokok<span className='text-user6'>*</span>
                </h4>
                <select
                  required={props.statusMUmum == 'perokokSemasa' ? true : false}
                  name='jenisRUmum'
                  id='jenisRUmum'
                  value={props.jenisRUmum}
                  onChange={(e) => {
                    props.setJenisRUmum(e.target.value);
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
                  props.statusMUmum == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tarikh intervensi merokok
                </h4>
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 1:<span className='text-user6'>*</span>
                </p>
                <input
                  required={props.statusMUmum == 'perokokSemasa' ? true : false}
                  type='date'
                  name='tarikh1Umum'
                  id='tarikh1Umum'
                  value={props.tarikh1Umum}
                  onChange={(e) => {
                    props.setTarikh1Umum(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 2:
                </p>
                <input
                  type='date'
                  name='tarikh2Umum'
                  id='tarikh2Umum'
                  value={props.tarikh2Umum}
                  onChange={(e) => {
                    props.setTarikh2Umum(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 3:
                </p>
                <input
                  type='date'
                  name='tarikh3Umum'
                  id='tarikh3Umum'
                  value={props.tarikh3Umum}
                  onChange={(e) => {
                    props.setTarikh3Umum(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 4:
                </p>
                <input
                  type='date'
                  name='tarikh4Umum'
                  id='tarikh4Umum'
                  value={props.tarikh4Umum}
                  onChange={(e) => {
                    props.setTarikh4Umum(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
              </article>
            </div>
            <div className='grid gap-2'>
              <article
                className={`${
                  props.statusMUmum == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 '>
                  status selepas intervensi
                </h4>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='adaQUmum'
                    id='adaQUmum'
                    checked={props.adaQUmum}
                    onChange={() => {
                      props.setAdaQUmum(!props.adaQUmum);
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label htmlFor='adaQUmum' className='m-2 text-sm font-m'>
                    ada quit date
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tiadaQUmum'
                    id='tiadaQUmum'
                    checked={props.tiadaQUmum}
                    onChange={() => {
                      props.setTiadaQUmum(!props.tiadaQUmum);
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label htmlFor='tiadaQUmum' className='m-2 text-sm font-m'>
                    tiada quit date
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='rujukGUmum'
                    id='rujukGUmum'
                    checked={props.rujukGUmum}
                    onChange={() => {
                      props.setRujukGUmum(!props.rujukGUmum);
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label htmlFor='rujukGUmum' className='m-2 text-sm font-m'>
                    rujuk guru kaunseling
                  </label>
                </div>
              </article>
              <article
                className={`${
                  props.statusMUmum == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tarikh quit date
                </h4>
                <input
                  type='date'
                  name='tarikhQUmum'
                  id='tarikhQUmum'
                  value={props.tarikhQUmum}
                  onChange={(e) => {
                    props.setTarikhQUmum(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m ml-3'
                />
              </article>
              <article
                className={`${
                  props.statusMUmum == 'perokokSemasa' ? 'visible' : 'hidden'
                } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
              >
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  status selepas 6 bulan
                </h4>
                <select
                  name='status-selepas-6-bulan-kotakUmum'
                  id='status-selepas-6-bulan-kotakUmum'
                  value={props.statusSelepas6BulanUmum}
                  onChange={(e) => {
                    props.setStatusSelepas6BulanUmum(e.target.value);
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
