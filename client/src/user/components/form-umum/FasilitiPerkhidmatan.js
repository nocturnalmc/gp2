function FasilitiPerkhidmatan(props) {
  return (
    <>
      <div className='p-2'>
        <span className='flex bg-user3 p-2 w-full'>
          <p className='ml-3 text-xl font-semibold'>fasiliti perkhidmatan</p>
        </span>
        <section className='grid grid-cols-1 gap-2 mt-3 mb-3 w-full'>
          <article className='grid grid-cols-1 md:grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
            <div>
              <div className='flex items-center flex-row pl-5 '>
                <input
                  required
                  type='radio'
                  name='jenis-fasiliti'
                  id='klinik-pergigian'
                  value='klinik-pergigian'
                  checked={
                    props.jenisFasiliti == 'klinik-pergigian' ? true : false
                  }
                  onChange={(e) => {
                    props.setJenisFasiliti(e.target.value);
                  }}
                  className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='klinik-pergigian'
                  className='m-2 text-sm font-m'
                >
                  klinik pergigian
                </label>
              </div>
              <div className='flex items-center flex-row pl-12'>
                <input
                  type='checkbox'
                  id='kepp'
                  name='kepp'
                  checked={props.kepp}
                  onChange={() => {
                    props.setKepp(!props.kepp);
                  }}
                  className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                />
                <label htmlFor='kepp' className='ml-2 text-sm font-m'>
                  KEPP
                </label>
              </div>
              <div className='flex items-center flex-row pl-5'>
                <input
                  required
                  type='radio'
                  name='jenis-fasiliti'
                  id='kk-kd'
                  value='kk-kd'
                  checked={props.jenisFasiliti == 'kk-kd' ? true : false}
                  onChange={(e) => {
                    props.setJenisFasiliti(e.target.value);
                  }}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label htmlFor='kk-kd' className='m-2 text-sm font-m'>
                  klinik kesihatan / klinik desa
                </label>
              </div>
              <div className='flex items-center flex-row pl-5'>
                <input
                  required
                  type='radio'
                  name='jenis-fasiliti'
                  id='taska-tadika'
                  value='taska-tadika'
                  checked={props.jenisFasiliti == 'taska-tadika' ? true : false}
                  onChange={(e) => {
                    props.setJenisFasiliti(e.target.value);
                  }}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label htmlFor='taska-tadika' className='m-2 text-sm font-m'>
                  taska / tadika
                </label>
              </div>
              <div className='flex items-center flex-row pl-5'>
                <input
                  required
                  type='radio'
                  name='jenis-fasiliti'
                  id='ipt-kolej'
                  value='ipt-kolej'
                  checked={props.jenisFasiliti == 'ipt-kolej' ? true : false}
                  onChange={(e) => {
                    props.setJenisFasiliti(e.target.value);
                  }}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label htmlFor='ipt-kolej' className='m-2 text-sm font-m'>
                  institusi pengajian tinggi / kolej
                </label>
              </div>
            </div>
            <div>
              <div className='flex items-center flex-row pl-5'>
                <input
                  required
                  type='radio'
                  name='jenis-fasiliti'
                  id='program-komuniti'
                  value='program-komuniti'
                  checked={
                    props.jenisFasiliti == 'program-komuniti' ? true : false
                  }
                  onChange={(e) => {
                    props.setJenisFasiliti(e.target.value);
                  }}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='program-komuniti'
                  className='m-2 text-sm font-m'
                >
                  program komuniti
                </label>
              </div>
              <div className='grid grid-cols-2'>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='orang-asli'
                    value='orang-asli'
                    checked={
                      props.jenisProgramKomuniti == 'orang-asli' ? true : false
                    }
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label htmlFor='orang-asli' className='m-2 text-sm font-m'>
                    orang asli
                  </label>
                </div>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='kampung-angkat'
                    value='kampung-angkat'
                    checked={
                      props.jenisProgramKomuniti == 'kampung-angkat'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='kampung-angkat'
                    className='m-2 text-sm font-m'
                  >
                    kampung angkat
                  </label>
                </div>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='ppr'
                    value='ppr'
                    checked={props.jenisProgramKomuniti == 'ppr' ? true : false}
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label htmlFor='ppr' className='m-2 text-sm font-m'>
                    PPR
                  </label>
                </div>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='projek-komuniti-lain'
                    value='projek-komuniti-lain'
                    checked={
                      props.jenisProgramKomuniti == 'projek-komuniti-lain'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='projek-komuniti-lain'
                    className='m-2 text-sm font-m'
                  >
                    projek komuniti lain
                  </label>
                </div>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='institusi-warga-emas'
                    value='institusi-warga-emas'
                    checked={
                      props.jenisProgramKomuniti == 'institusi-warga-emas'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='institusi-warga-emas'
                    className='m-2 text-sm font-m'
                  >
                    institusi warga emas
                  </label>
                </div>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='rtc'
                    value='rtc'
                    checked={props.jenisProgramKomuniti == 'rtc' ? true : false}
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label htmlFor='rtc' className='m-2 text-sm font-m'>
                    RTC (kelantan sahaja)
                  </label>
                </div>
                <div className='flex items-center flex-row pl-12'>
                  <input
                    required
                    type='radio'
                    name='jenis-program-komuniti'
                    id='institusi-oku'
                    value='institusi-oku'
                    checked={
                      props.jenisProgramKomuniti == 'institusi-oku'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setJenisProgramKomuniti(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label htmlFor='institusi-oku' className='m-2 text-sm font-m'>
                    institusi OKU
                  </label>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default FasilitiPerkhidmatan;
