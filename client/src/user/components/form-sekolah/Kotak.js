import { useState } from 'react';

export default function Kotak() {
  return (
    <>
      <div className='p-2'>
        <div className='grid grid-cols-2'>
          <button className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Kotak</p>
          </button>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
            <div className='grid gap-2 auto-rows-min'>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  status merokok
                </h4>
                <select
                  name='statusM'
                  id='statusM'
                  className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                >
                  <option value=''></option>
                  <option value='perokokSemasa'>Perokok Semasa</option>
                  <option value='bekasPerokok'>Bekas Perokok</option>
                  <option value='perokokPasif'>Perokok Pasif</option>
                  <option value='bukanPerokok'>Bukan Perokok</option>
                </select>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  jenis rokok
                </h4>
                <select
                  name='jenisR'
                  id='jenisR'
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
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tarikh intervensi merokok
                </h4>
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 1:
                </p>
                <input
                  type='date'
                  name='tarikh1'
                  id='tarikh1'
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 2:
                </p>
                <input
                  type='date'
                  name='tarikh2'
                  id='tarikh2'
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 3:
                </p>
                <input
                  type='date'
                  name='tarikh3'
                  id='tarikh3'
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
                <p className='flex items-center justify-center text-m font-m'>
                  Sesi 4:
                </p>
                <input
                  type='date'
                  name='tarikh4'
                  id='tarikh4'
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                />
              </article>
            </div>
            <div className='grid gap-2'>
              <article className='grid grid-cols-1 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 '>
                  status selepas intervensi
                </h4>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='adaQ'
                    id='adaQ'
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label htmlFor='adaQ' className='m-2 text-sm font-m'>
                    ada quit date
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tiadaQ'
                    id='tiadaQ'
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label htmlFor='tiadaQ' className='m-2 text-sm font-m'>
                    tiada quit date
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='rujukG'
                    id='rujukG'
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label htmlFor='rujukG' className='m-2 text-sm font-m'>
                    rujuk guru kaunseling
                  </label>
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tarikh quit date
                </h4>
                <input
                  type='date'
                  name='tarikhQ'
                  id='tarikhQ'
                  className='outline outline-1 outline-userBlack m-2 text-sm font-m ml-3'
                />
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  status selepas 6 bulan
                </h4>
                <select
                  name='statusU'
                  id='statusU'
                  className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                >
                  <option value='berhenti'>berhenti merokok</option>
                  <option value='tidakberhenti'>keep on smokin' bro</option>
                </select>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}