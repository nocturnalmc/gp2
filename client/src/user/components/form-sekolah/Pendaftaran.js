import { useEffect } from 'react';

export default function Pendaftaran(props) {
  useEffect(() => {
    if (props.adaTiadaPemeriksaanPendaftaran === 'tiada-pemeriksaan') {
      props.setBaruUlanganKedatanganPendaftaran('');
    }
  }, [props.adaTiadaPemeriksaanPendaftaran]);

  return (
    <>
      <div className='p-2'>
        <div className='grid grid-cols-2'>
          <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Pendaftaran</p>
          </span>
          <p className='text-user6 text-left'>* required</p>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
            <article className='grid grid-cols-2 gap-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md'>
              <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                Penyampaian Perkhidmatan Sekolah
              </h4>
              <div className='flex flex-row items-center pl-5 col-span-2'>
                <select
                  required
                  name='statik-bergerak'
                  id='statik-bergerak'
                  value={props.statikBergerak}
                  onChange={(e) => {
                    props.setStatikBergerak(e.target.value);
                  }}
                >
                  <option value=''>Sila pilih</option>
                  <option value='klinik-pergigian-statik'>
                    Klinik Pergigian Statik
                  </option>
                  <option value='pasukan-pergigian-bergerak'>
                    Pasukan Pergigian Bergerak
                  </option>
                </select>
                <span className='text-user6'>*</span>
              </div>
              <div
                className={`${
                  props.statikBergerak === 'pasukan-pergigian-bergerak'
                    ? 'visible'
                    : 'hidden'
                } flex flex-row items-center pl-5`}
              >
                <input
                  type='checkbox'
                  name='kp-bergerak'
                  id='kp-bergerak'
                  checked={props.kpBergerak}
                  onChange={() => {
                    props.setKpBergerak(!props.kpBergerak);
                  }}
                  className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                />
                <label htmlFor='kp-bergerak' className='ml-2 text-sm font-m'>
                  KP Bergerak
                </label>
              </div>
              <div
                className={`${
                  !props.kpBergerak && 'hidden'
                } flex flex-row items-center pl-5`}
              >
                <select
                  required={props.kpBergerak && true}
                  name='plate-no'
                  id='plate-no'
                  value={props.plateNo}
                  onChange={(e) => {
                    props.setPlateNo(e.target.value);
                  }}
                  className='outline outline-1 outline-userBlack w-auto text-sm font-m'
                >
                  <option value=''>Plate No</option>
                  <option value='1'>1</option>
                </select>
                {props.kpBergerak && <span className='text-user6'>*</span>}
              </div>
            </article>
            <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
              <h4 className='flex flex-row items-center pl-5 font-bold col-span-2'>
                Kedatangan<span className='text-user6'>*</span>
              </h4>
              {props.adaTiadaPemeriksaanPendaftaran !== 'tiada-pemeriksaan' && (
                <div className='grid grid-rows-2 col-span-2 lg:col-span-1'>
                  <div className='flex items-center flex-row pl-5 '>
                    <input
                      required
                      type='radio'
                      name='kedatangan'
                      id='baru-kedatangan-pendaftaran'
                      value='baru-kedatangan-pendaftaran'
                      checked={
                        props.baruUlanganKedatanganPendaftaran ===
                        'baru-kedatangan-pendaftaran'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        props.setBaruUlanganKedatanganPendaftaran(
                          e.target.value
                        );
                      }}
                      className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='baru-kedatangan-pendaftaran'
                      className='m-2 text-sm font-m'
                    >
                      Baru
                    </label>
                  </div>
                  <div className='flex items-center flex-row pl-5'>
                    <input
                      required
                      type='radio'
                      name='kedatangan'
                      id='ulangan-kedatangan-pendaftaran'
                      value='ulangan-kedatangan-pendaftaran'
                      checked={
                        props.baruUlanganKedatanganPendaftaran ===
                        'ulangan-kedatangan-pendaftaran'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        props.setBaruUlanganKedatanganPendaftaran(
                          e.target.value
                        );
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='ulangan-kedatangan-pendaftaran'
                      className='m-2 text-sm font-m'
                    >
                      Ulangan
                    </label>
                  </div>
                </div>
              )}
              <div className='grid grid-rows-2'>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='enggan-kedatangan'
                    id='enggan-kedatangan'
                    checked={props.engganKedatanganPendaftaran}
                    onChange={() => {
                      props.setEngganKedatanganPendaftaran(
                        !props.engganKedatanganPendaftaran
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='enggan-kedatangan'
                    className='m-2 text-sm font-m'
                  >
                    Enggan
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tidak-hadir-kedatangan'
                    id='tidak-hadir-kedatangan'
                    checked={props.tidakHadirKedatanganPendaftaran}
                    onChange={() => {
                      props.setTidakHadirKedatanganPendaftaran(
                        !props.tidakHadirKedatanganPendaftaran
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='tidak-hadir-kedatangan'
                    className='m-2 text-sm font-m'
                  >
                    Tidak Hadir
                  </label>
                </div>
              </div>
              <div
                className={`${
                  props.engganKedatanganPendaftaran ||
                  props.tidakHadirKedatanganPendaftaran ||
                  'hidden'
                } outline outline-1 outline-userBlack grid grid-rows-3 col-start-2`}
              >
                <h4 className=' font-bold flex items-center flex-row px-2 text-clip'>
                  Pemeriksaan<span className='text-user6'>*</span>
                </h4>
                <div className='flex items-center flex-row px-2'>
                  <input
                    required={
                      props.engganKedatanganPendaftaran ||
                      props.tidakHadirKedatanganPendaftaran
                        ? true
                        : false
                    }
                    type='radio'
                    name='pemeriksaan'
                    id='ada-pemeriksaan'
                    value='ada-pemeriksaan'
                    checked={
                      props.adaTiadaPemeriksaanPendaftaran === 'ada-pemeriksaan'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setAdaTiadaPemeriksaanPendaftaran(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ada-pemeriksaan'
                    className='m-2 text-sm font-m'
                  >
                    Ada
                  </label>
                </div>
                <div className='flex items-center flex-row px-2'>
                  <input
                    required={
                      props.engganKedatanganPendaftaran ||
                      props.tidakHadirKedatanganPendaftaran
                        ? true
                        : false
                    }
                    type='radio'
                    name='pemeriksaan'
                    id='tiada-pemeriksaan'
                    value='tiada-pemeriksaan'
                    checked={
                      props.adaTiadaPemeriksaanPendaftaran ===
                      'tiada-pemeriksaan'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setAdaTiadaPemeriksaanPendaftaran(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tiada-pemeriksaan'
                    className='m-2 text-sm font-m'
                  >
                    Tiada
                  </label>
                </div>
              </div>
            </article>
            <article className='grid grid-cols-2 border border-userBlack pl-5 rounded-md'>
              <h4 className='font-bold flex flex-row items-center pl-5 col-span-2'>
                Risiko Sekolah (PERSiS)<span className='text-user6'>*</span>
              </h4>
              <div className='flex items-center flex-row pl-5'>
                <input
                  required
                  type='radio'
                  name='risiko-sekolah'
                  id='tinggi-risiko-sekolah'
                  value='tinggi-risiko-sekolah'
                  checked={
                    props.tinggiRendahRisikoSekolahPendaftaran ===
                    'tinggi-risiko-sekolah'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setTinggiRendahRisikoSekolahPendaftaran(
                      e.target.value
                    );
                  }}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='tinggi-risiko-sekolah'
                  className='m-2 text-sm font-m'
                >
                  Tinggi
                </label>
              </div>
              <div className='flex items-center flex-row pl-5'>
                <input
                  required
                  type='radio'
                  name='risiko-sekolah'
                  id='rendah-risiko-sekolah'
                  value='rendah-risiko-sekolah'
                  checked={
                    props.tinggiRendahRisikoSekolahPendaftaran ===
                    'rendah-risiko-sekolah'
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    props.setTinggiRendahRisikoSekolahPendaftaran(
                      e.target.value
                    );
                  }}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='rendah-risiko-sekolah'
                  className='m-2 text-sm font-m'
                >
                  Rendah
                </label>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}
