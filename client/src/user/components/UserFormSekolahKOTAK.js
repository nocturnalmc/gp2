import { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { useGlobalUserAppContext } from '../context/userAppContext';

function UserFormSekolahKOTAK() {
  const {
    userToken,
    username,
    navigate,
    catchAxiosErrorAndLogout,
    useParams,
    toast,
  } = useGlobalUserAppContext();

  const { personSekolahId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [singlePersonSekolah, setSinglePersonSekolah] = useState([]);

  const createdByUsername = username;
  const [tarikh1, setTarikh1] = useState('');
  const [adaTiadaQTarikh1, setAdaTiadaQTarikh1] = useState('');
  const [tarikh2, setTarikh2] = useState('');
  const [adaTiadaQTarikh2, setAdaTiadaQTarikh2] = useState('');
  const [tarikh3, setTarikh3] = useState('');
  const [adaTiadaQTarikh3, setAdaTiadaQTarikh3] = useState('');
  const [tarikh4, setTarikh4] = useState('');
  const [adaTiadaQTarikh4, setAdaTiadaQTarikh4] = useState('');
  const [rujukGuruKaunseling, setRujukGuruKaunseling] = useState('');
  const [tarikhQ, setTarikhQ] = useState('');
  const [statusSelepas6Bulan, setStatusSelepas6Bulan] = useState('');

  //reset value
  useEffect(() => {
    if (adaTiadaQTarikh1 === 'ada-q-tarikh1') {
      setTarikh2('');
      setAdaTiadaQTarikh2('');
      setTarikh3('');
      setAdaTiadaQTarikh3('');
      setTarikh4('');
      setAdaTiadaQTarikh4('');
    }
    if (adaTiadaQTarikh2 === 'ada-q-tarikh2') {
      setTarikh3('');
      setAdaTiadaQTarikh3('');
      setTarikh4('');
      setAdaTiadaQTarikh4('');
    }
    if (adaTiadaQTarikh3 === 'ada-q-tarikh3') {
      setTarikh4('');
      setAdaTiadaQTarikh4('');
    }
  }, [adaTiadaQTarikh1, adaTiadaQTarikh2, adaTiadaQTarikh3]);

  return (
    <>
      <div className='h-full max-h-min 2xl:h-3/4 p-1 px-10 grid gap-2'>
        <article className='outline outline-1 outline-userBlack grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-2'>
          <div>
            <div className='text-l font-bold flex flex-row pl-5 p-2'>
              <h1>MAKLUMAT AM PESAKIT</h1>
              <FaInfoCircle
                className='m-1 text-lg'
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
            </div>
            {isShown && (
              <div className='z-100 absolute float-right box-border outline outline-1 outline-userBlack left-72 p-5 bg-userWhite '>
                <div className='flex flex-row'>
                  <h2 className='font-semibold'>NAMA :</h2>
                  <p className='ml-1'>stone cold</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>NO IC :</h2>
                  <p className='ml-1'>123456121234</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>JANTINA :</h2>
                  <p className='ml-1'>perempuan</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>TARIKH LAHIR :</h2>
                  <p className='ml-1'>2/12/2022</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>WARGANEGARA :</h2>
                  <p className='ml-1'>malaysia</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>BANGSA :</h2>
                  <p className='ml-1'>pan-asia</p>
                </div>
              </div>
            )}
            <div className='flex flex-row pl-5'>
              <h2 className='font-semibold text-xs'>NAMA :</h2>
              <p className='ml-1 text-xs'>stone cold</p>
            </div>
          </div>
          <div className='md:pt-10'>
            <div className='text-s flex flex-row pl-5'>
              <h2 className='font-semibold text-xs'>NAMA SEKOLAH :</h2>
              <p className='ml-1 text-xs'>sk hogwart</p>
            </div>
          </div>
          <div className='lg:pt-10'>
            <div className='text-s flex flex-row pl-5'>
              <h2 className='font-semibold text-xs'>KELAS :</h2>
              <p className='ml-1 text-xs'>2 amal</p>
            </div>
          </div>
        </article>
        <div className='grid h-full overflow-scroll gap-2'>
          <form>
            <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
              <p className='ml-3 text-xl font-semibold'>KOTAK</p>
            </span>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 mb-3 w-full col-span-2'>
              <div className='col-span-2'>
                <article
                  className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'
                  // className={`${
                  //   statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                  // } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
                >
                  <h4 className='font-bold flex flex-row pl-5 col-span-3'>
                    tarikh intervensi merokok
                  </h4>
                  <p className='flex items-center justify-center text-m font-m'>
                    Sesi 1:<span className='text-user6'>*</span>
                  </p>
                  <input
                    // required={statusM == 'perokokSemasa' ? true : false}
                    type='date'
                    name='tarikh1'
                    id='tarikh1'
                    value={tarikh1}
                    onChange={(e) => {
                      setTarikh1(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                  />
                  <div className='flex items-center flex-row pl-5'>
                    <input
                      // required={statusM == 'perokokSemasa' ? true : false}
                      type='radio'
                      name='ada-tiada-q-tarikh1'
                      id='ada-q-tarikh1'
                      value='ada-q-tarikh1'
                      checked={
                        adaTiadaQTarikh1 === 'ada-q-tarikh1' ? true : false
                      }
                      onChange={(e) => {
                        setAdaTiadaQTarikh1(e.target.value);
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='ada-q-tarikh1'
                      className='m-2 text-sm font-m'
                    >
                      ada quit date
                    </label>
                    <input
                      // required={statusM == 'perokokSemasa' ? true : false}
                      type='radio'
                      name='ada-tiada-q-tarikh1'
                      id='tiada-q-tarikh1'
                      value='tiada-q-tarikh1'
                      checked={
                        adaTiadaQTarikh1 === 'tiada-q-tarikh1' ? true : false
                      }
                      onChange={(e) => {
                        setAdaTiadaQTarikh1(e.target.value);
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='tiada-q-tarikh1'
                      className='m-2 text-sm font-m'
                    >
                      tiada quit date
                    </label>
                  </div>
                  {adaTiadaQTarikh1 === 'tiada-q-tarikh1' && (
                    <p className='flex items-center justify-center text-m font-m'>
                      Sesi 2:
                    </p>
                  )}
                  {adaTiadaQTarikh1 === 'tiada-q-tarikh1' && (
                    <input
                      required={
                        adaTiadaQTarikh1 == 'tiada-q-tarikh1' ? true : false
                      }
                      type='date'
                      name='tarikh2'
                      id='tarikh2'
                      value={tarikh2}
                      onChange={(e) => {
                        setTarikh2(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                    />
                  )}
                  {adaTiadaQTarikh1 === 'tiada-q-tarikh1' && (
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        required={
                          adaTiadaQTarikh1 == 'tiada-q-tarikh1' ? true : false
                        }
                        type='radio'
                        name='ada-tiada-q-tarikh2'
                        id='ada-q-tarikh2'
                        value='ada-q-tarikh2'
                        checked={
                          adaTiadaQTarikh2 === 'ada-q-tarikh2' ? true : false
                        }
                        onChange={(e) => {
                          setAdaTiadaQTarikh2(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='ada-q-tarikh2'
                        className='m-2 text-sm font-m'
                      >
                        ada quit date
                      </label>
                      <input
                        // required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ada-tiada-q-tarikh2'
                        id='tiada-q-tarikh2'
                        value='tiada-q-tarikh2'
                        checked={
                          adaTiadaQTarikh2 === 'tiada-q-tarikh2' ? true : false
                        }
                        onChange={(e) => {
                          setAdaTiadaQTarikh2(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tiada-q-tarikh2'
                        className='m-2 text-sm font-m'
                      >
                        tiada quit date
                      </label>
                    </div>
                  )}
                  {adaTiadaQTarikh2 === 'tiada-q-tarikh2' && (
                    <p className='flex items-center justify-center text-m font-m'>
                      Sesi 3:
                    </p>
                  )}
                  {adaTiadaQTarikh2 === 'tiada-q-tarikh2' && (
                    <input
                      type='date'
                      name='tarikh3'
                      id='tarikh3'
                      value={tarikh3}
                      onChange={(e) => {
                        setTarikh3(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                    />
                  )}
                  {adaTiadaQTarikh2 === 'tiada-q-tarikh2' && (
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        // required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ada-tiada-q-tarikh3'
                        id='ada-q-tarikh3'
                        value='ada-q-tarikh3'
                        checked={
                          adaTiadaQTarikh3 === 'ada-q-tarikh3' ? true : false
                        }
                        onChange={(e) => {
                          setAdaTiadaQTarikh3(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='ada-q-tarikh3'
                        className='m-2 text-sm font-m'
                      >
                        ada quit date
                      </label>
                      <input
                        // required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ada-tiada-q-tarikh3'
                        id='tiada-q-tarikh3'
                        value='tiada-q-tarikh3'
                        checked={
                          adaTiadaQTarikh3 === 'tiada-q-tarikh3' ? true : false
                        }
                        onChange={(e) => {
                          setAdaTiadaQTarikh3(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tiada-q-tarikh3'
                        className='m-2 text-sm font-m'
                      >
                        tiada quit date
                      </label>
                    </div>
                  )}
                  {adaTiadaQTarikh3 === 'tiada-q-tarikh3' && (
                    <p className='flex items-center justify-center text-m font-m'>
                      Sesi 4:
                    </p>
                  )}
                  {adaTiadaQTarikh3 === 'tiada-q-tarikh3' && (
                    <input
                      type='date'
                      name='tarikh4'
                      id='tarikh4'
                      value={tarikh4}
                      onChange={(e) => {
                        setTarikh4(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                    />
                  )}
                  {adaTiadaQTarikh3 === 'tiada-q-tarikh3' && (
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        // required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ada-tiada-q-tarikh4'
                        id='ada-q-tarikh4'
                        value='ada-q-tarikh4'
                        checked={
                          adaTiadaQTarikh4 === 'ada-q-tarikh4' ? true : false
                        }
                        onChange={(e) => {
                          setAdaTiadaQTarikh4(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='ada-q-tarikh4'
                        className='m-2 text-sm font-m'
                      >
                        ada quit date
                      </label>
                      <input
                        // required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ada-tiada-q-tarikh4'
                        id='tiada-q-tarikh4'
                        value='tiada-q-tarikh4'
                        checked={
                          adaTiadaQTarikh4 === 'tiada-q-tarikh4' ? true : false
                        }
                        onChange={(e) => {
                          setAdaTiadaQTarikh4(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tiada-q-tarikh4'
                        className='m-2 text-sm font-m'
                      >
                        tiada quit date
                      </label>
                    </div>
                  )}
                </article>
              </div>
              {adaTiadaQTarikh4 === 'tiada-q-tarikh4' && (
                <article
                  className='grid gap-2 border border-userBlack pl-3 p-2 rounded-md'
                  // className={`${
                  //   statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                  // } grid gap-2 border border-userBlack pl-3 p-2 rounded-md`}
                >
                  <h4 className='font-bold flex flex-row pl-5'>
                    status selepas intervensi
                  </h4>
                  <p className='flex flex-row pl-5 text-sm font-m'>
                    dirujuk kepada guru kaunseling
                  </p>
                  <div className='flex items-center justify-center'>
                    <input
                      // required={statusM == 'perokokSemasa' ? true : false}
                      type='radio'
                      name='rujuk-guru-kaunseling'
                      id='ya-rujuk-guru-kaunseling'
                      value='ya-rujuk-guru-kaunseling'
                      checked={
                        rujukGuruKaunseling === 'ya-rujuk-guru-kaunseling'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setRujukGuruKaunseling(e.target.value);
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
                      // required={statusM == 'perokokSemasa' ? true : false}
                      type='radio'
                      name='rujuk-guru-kaunseling'
                      id='tidak-rujuk-guru-kaunseling'
                      value='tidak-rujuk-guru-kaunseling'
                      checked={
                        rujukGuruKaunseling === 'tidak-rujuk-guru-kaunseling'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setRujukGuruKaunseling(e.target.value);
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
              )}
              {adaTiadaQTarikh1 === 'ada-q-tarikh1' ||
              adaTiadaQTarikh2 === 'ada-q-tarikh2' ||
              adaTiadaQTarikh3 === 'ada-q-tarikh3' ||
              adaTiadaQTarikh4 === 'ada-q-tarikh4' ? (
                <article
                  className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'
                  // className={`${
                  //   statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                  // } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
                >
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    tarikh quit date
                  </h4>
                  <input
                    type='date'
                    name='tarikhQ'
                    id='tarikhQ'
                    value={tarikhQ}
                    onChange={(e) => {
                      setTarikhQ(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack m-2 text-sm font-m ml-3'
                  />
                </article>
              ) : null}
              {adaTiadaQTarikh1 === 'ada-q-tarikh1' ||
              adaTiadaQTarikh2 === 'ada-q-tarikh2' ||
              adaTiadaQTarikh3 === 'ada-q-tarikh3' ||
              adaTiadaQTarikh4 === 'ada-q-tarikh4' ? (
                <article
                  className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'
                  // className={`${
                  //   statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                  // } grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md`}
                >
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    status selepas 6 bulan
                  </h4>
                  <select
                    name='status-selepas-6-bulan-kotak'
                    id='status-selepas-6-bulan-kotak'
                    value={statusSelepas6Bulan}
                    onChange={(e) => {
                      setStatusSelepas6Bulan(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                  >
                    <option value=''></option>
                    <option value='berhenti'>berhenti merokok</option>
                    <option value='tidakberhenti'>
                      tidak berhenti merokok
                    </option>
                  </select>
                </article>
              ) : null}
            </section>
            <div className='grid grid-cols-1 md:grid-cols-3 col-start-1 lg:col-start-2 gap-2 col-span-1 md:col-span-2 hover:cursor-pointer'>
              <span
                onClick={() => {
                  navigate(-1);
                }}
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'
              >
                kembali
              </span>
              <input
                type='reset'
                value='reset'
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all hover:cursor-pointer'
              />
              <button
                type='submit'
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'
              >
                hantar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserFormSekolahKOTAK;
