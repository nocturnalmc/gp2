export default function Pemeriksaan(props) {
  return (
    <>
      <div className='p-2'>
        <div className=' grid grid-cols-2'>
          <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Pemeriksaan</p>
          </span>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
            <div className='grid gap-2 auto-rows-min'>
              <article className='grid grid-cols-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md '>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Cleft Lip/Palate
                </h4>
                <div className='flex flex-row items-center pl-5 pt-1'>
                  <input
                    type='checkbox'
                    name='ada-cleft-lip-pemeriksaan-umum'
                    id='ada-cleft-lip-pemeriksaan-umum'
                    checked={props.adaCleftLipPemeriksaanUmum}
                    onChange={() => {
                      props.setAdaCleftLipPemeriksaanUmum(
                        !props.adaCleftLipPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label
                    htmlFor='ada-cleft-lip-pemeriksaan-umum'
                    className='mx-2 text-sm font-m'
                  >
                    Ada
                  </label>
                </div>
                <div className='flex flex-row items-center pl-5 pt-1'>
                  <input
                    type='checkbox'
                    name='rujuk-cleft-lip-palate-pemeriksaan-umum'
                    id='rujuk-cleft-lip-palate-pemeriksaan-umum'
                    checked={props.rujukCleftLipPemeriksaanUmum}
                    onChange={() => {
                      props.setRujukCleftLipPemeriksaanUmum(
                        !props.rujukCleftLipPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='rujuk-cleft-lip-palate-pemeriksaan-umum'
                    className='mx-2 text-sm font-m'
                  >
                    Rujuk
                  </label>
                </div>
              </article>
              <article className='row-span-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5'>Status denture</h4>
                <div className='grid grid-rows-2 gap-2 auto-rows-min'>
                  <article className='grid grid-cols-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md'>
                    <h4 className='font-semibold'>
                      Sedia Ada?<span className='text-user6'>*</span>
                    </h4>
                    <div className='flex items-center justify-center'>
                      <input
                        required
                        type='radio'
                        name='sedia-ada-status-denture-pemeriksaan-umum'
                        id='ya-sedia-ada-status-denture-pemeriksaan-umum'
                        value='ya-sedia-ada-status-denture-pemeriksaan-umum'
                        checked={
                          props.yaTidakSediaAdaStatusDenturePemeriksaanUmum ===
                          'ya-sedia-ada-status-denture-pemeriksaan-umum'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          props.setYaTidakSediaAdaStatusDenturePemeriksaanUmum(
                            e.target.value
                          );
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='ya-sedia-ada-status-denture-pemeriksaan-umum'
                        className='m-2 text-sm font-m'
                      >
                        Ya
                      </label>
                      <input
                        required
                        type='radio'
                        name='sedia-ada-status-denture-pemeriksaan-umum'
                        id='tidak-sedia-ada-status-denture-pemeriksaan-umum'
                        value='tidak-sedia-ada-status-denture-pemeriksaan-umum'
                        checked={
                          props.yaTidakSediaAdaStatusDenturePemeriksaanUmum ===
                          'tidak-sedia-ada-status-denture-pemeriksaan-umum'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          props.setYaTidakSediaAdaStatusDenturePemeriksaanUmum(
                            e.target.value
                          );
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tidak-sedia-ada-status-denture-pemeriksaan-umum'
                        className='m-2 text-sm font-m'
                      >
                        Tidak
                      </label>
                    </div>
                    {props.yaTidakSediaAdaStatusDenturePemeriksaanUmum ===
                      'ya-sedia-ada-status-denture-pemeriksaan-umum' && (
                      <div className='flex items-center flex-row pl-5'>
                        <label className='m-2 text-sm font-m'>Atas</label>
                      </div>
                    )}
                    {props.yaTidakSediaAdaStatusDenturePemeriksaanUmum ===
                      'ya-sedia-ada-status-denture-pemeriksaan-umum' && (
                      <div className='grid grid-cols-2'>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-atas-sedia-ada-denture-pemeriksaan-umum'
                            id='separa-atas-sedia-ada-denture-pemeriksaan-umum'
                            value='separa-atas-sedia-ada-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhAtasSediaAdaDenturePemeriksaanUmum ===
                              'separa-atas-sedia-ada-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhAtasSediaAdaDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='separa-atas-sedia-ada-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Separa
                          </label>
                        </div>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-atas-sedia-ada-denture-pemeriksaan-umum'
                            id='penuh-atas-sedia-ada-denture-pemeriksaan-umum'
                            value='penuh-atas-sedia-ada-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhAtasSediaAdaDenturePemeriksaanUmum ===
                              'penuh-atas-sedia-ada-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhAtasSediaAdaDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='penuh-atas-sedia-ada-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Penuh
                          </label>
                        </div>
                      </div>
                    )}
                    {props.yaTidakSediaAdaStatusDenturePemeriksaanUmum ===
                      'ya-sedia-ada-status-denture-pemeriksaan-umum' && (
                      <div className='flex items-center flex-row pl-5'>
                        <label className='m-2 text-sm font-m'>Bawah</label>
                      </div>
                    )}
                    {props.yaTidakSediaAdaStatusDenturePemeriksaanUmum ===
                      'ya-sedia-ada-status-denture-pemeriksaan-umum' && (
                      <div className='grid grid-cols-2'>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-bawah-sedia-ada-denture-pemeriksaan-umum'
                            id='separa-bawah-sedia-ada-denture-pemeriksaan-umum'
                            value='separa-bawah-sedia-ada-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhBawahSediaAdaDenturePemeriksaanUmum ===
                              'separa-bawah-sedia-ada-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhBawahSediaAdaDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='separa-bawah-sedia-ada-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Separa
                          </label>
                        </div>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-bawah-sedia-ada-denture-pemeriksaan-umum'
                            id='penuh-bawah-sedia-ada-denture-pemeriksaan-umum'
                            value='penuh-bawah-sedia-ada-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhBawahSediaAdaDenturePemeriksaanUmum ===
                              'penuh-bawah-sedia-ada-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhBawahSediaAdaDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='penuh-bawah-sedia-ada-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Penuh
                          </label>
                        </div>
                      </div>
                    )}
                  </article>
                  <article className='grid grid-cols-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md'>
                    <h4 className='font-semibold'>
                      Perlu<span className='text-user6'>*</span>
                    </h4>
                    <div className='flex items-center justify-center'>
                      <input
                        required
                        type='radio'
                        name='perlu-status-denture-pemeriksaan-umum'
                        id='ya-perlu-status-denture-pemeriksaan-umum'
                        value='ya-perlu-status-denture-pemeriksaan-umum'
                        checked={
                          props.yaTidakPerluStatusDenturePemeriksaanUmum ===
                          'ya-perlu-status-denture-pemeriksaan-umum'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          props.setYaTidakPerluStatusDenturePemeriksaanUmum(
                            e.target.value
                          );
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='ya-perlu-status-denture-pemeriksaan-umum'
                        className='m-2 text-sm font-m'
                      >
                        Ya
                      </label>
                      <input
                        required
                        type='radio'
                        name='perlu-status-denture-pemeriksaan-umum'
                        id='tidak-perlu-status-denture-pemeriksaan-umum'
                        value='tidak-perlu-status-denture-pemeriksaan-umum'
                        checked={
                          props.yaTidakPerluStatusDenturePemeriksaanUmum ===
                          'tidak-perlu-status-denture-pemeriksaan-umum'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          props.setYaTidakPerluStatusDenturePemeriksaanUmum(
                            e.target.value
                          );
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tidak-perlu-status-denture-pemeriksaan-umum'
                        className='m-2 text-sm font-m'
                      >
                        Tidak
                      </label>
                    </div>
                    {props.yaTidakPerluStatusDenturePemeriksaanUmum ===
                      'ya-perlu-status-denture-pemeriksaan-umum' && (
                      <div className='flex items-center flex-row pl-5'>
                        <label
                          htmlFor='atas-perlu-denture-pemeriksaan-umum'
                          className='m-2 text-sm font-m'
                        >
                          Atas
                        </label>
                      </div>
                    )}
                    {props.yaTidakPerluStatusDenturePemeriksaanUmum ===
                      'ya-perlu-status-denture-pemeriksaan-umum' && (
                      <div className='grid grid-cols-2'>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-atas-perlu-denture-pemeriksaan-umum'
                            id='separa-atas-perlu-denture-pemeriksaan-umum'
                            value='separa-atas-perlu-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhAtasPerluDenturePemeriksaanUmum ===
                              'separa-atas-perlu-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhAtasPerluDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='separa-atas-perlu-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Separa
                          </label>
                        </div>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-atas-perlu-denture-pemeriksaan-umum'
                            id='penuh-atas-perlu-denture-pemeriksaan-umum'
                            value='penuh-atas-perlu-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhAtasPerluDenturePemeriksaanUmum ===
                              'penuh-atas-perlu-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhAtasPerluDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='penuh-atas-perlu-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Penuh
                          </label>
                        </div>
                      </div>
                    )}
                    {props.yaTidakPerluStatusDenturePemeriksaanUmum ===
                      'ya-perlu-status-denture-pemeriksaan-umum' && (
                      <div className='flex items-center flex-row pl-5'>
                        <label className='m-2 text-sm font-m'>Bawah</label>
                      </div>
                    )}
                    {props.yaTidakPerluStatusDenturePemeriksaanUmum ===
                      'ya-perlu-status-denture-pemeriksaan-umum' && (
                      <div className='grid grid-cols-2'>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-bawah-perlu-denture-pemeriksaan-umum'
                            id='separa-bawah-perlu-denture-pemeriksaan-umum'
                            value='separa-bawah-perlu-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhBawahPerluDenturePemeriksaanUmum ===
                              'separa-bawah-perlu-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhBawahPerluDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='separa-bawah-perlu-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Separa
                          </label>
                        </div>
                        <div className='flex items-center justify-center'>
                          <input
                            type='radio'
                            name='separa-penuh-bawah-perlu-denture-pemeriksaan-umum'
                            id='penuh-bawah-perlu-denture-pemeriksaan-umum'
                            value='penuh-bawah-perlu-denture-pemeriksaan-umum'
                            checked={
                              props.separaPenuhBawahPerluDenturePemeriksaanUmum ===
                              'penuh-bawah-perlu-denture-pemeriksaan-umum'
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              props.setSeparaPenuhBawahPerluDenturePemeriksaanUmum(
                                e.target.value
                              );
                            }}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                          />
                          <label
                            htmlFor='penuh-bawah-perlu-denture-pemeriksaan-umum'
                            className='m-2 text-sm font-m'
                          >
                            Penuh
                          </label>
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              </article>
              <article className='grid grid-cols-1 xl:grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-1 xl:col-span-2'>
                  Trauma
                </h4>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tooth-surface-loss-pemeriksaan-umum'
                    id='tooth-surface-loss-pemeriksaan-umum'
                    checked={props.toothSurfaceLossTraumaPemeriksaanUmum}
                    onChange={() => {
                      props.setToothSurfaceLossTraumaPemeriksaanUmum(
                        !props.toothSurfaceLossTraumaPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='tooth-surface-loss-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Tooth Surface Loss
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='kecederaan-gigi-anterior-pemeriksaan-umum'
                    id='kecederaan-gigi-anterior-pemeriksaan-umum'
                    checked={props.kecederaanGigiAnteriorTraumaPemeriksaanUmum}
                    onChange={() => {
                      props.setKecederaanGigiAnteriorTraumaPemeriksaanUmum(
                        !props.kecederaanGigiAnteriorTraumaPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='kecederaan-gigi-anterior-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Kecederaan Gigi Anterior
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tisu-lembut-pemeriksaan-umum'
                    id='tisu-lembut-pemeriksaan-umum'
                    checked={props.tisuLembutTraumaPemeriksaanUmum}
                    onChange={() => {
                      props.setTisuLembutTraumaPemeriksaanUmum(
                        !props.tisuLembutTraumaPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='tisu-lembut-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Tisu Lembut
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    type='checkbox'
                    name='tisu-keras-pemeriksaan-umum'
                    id='tisu-keras-pemeriksaan-umum'
                    checked={props.tisuKerasTraumaPemeriksaanUmum}
                    onChange={() => {
                      props.setTisuKerasTraumaPemeriksaanUmum(
                        !props.tisuKerasTraumaPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                  />
                  <label
                    htmlFor='tisu-keras-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Tisu Keras
                  </label>
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Fluoride Varnish
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  Perlu Sapuan<span className='text-user6'>*</span>
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    required
                    type='radio'
                    name='fv-perlu-sapuan-pemeriksaan-umum'
                    id='ya-fv-perlu-sapuan-pemeriksaan-umum'
                    value='ya-fv-perlu-sapuan-pemeriksaan-umum'
                    checked={
                      props.fvPerluSapuanPemeriksaanUmum ===
                      'ya-fv-perlu-sapuan-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setFvPerluSapuanPemeriksaanUmum(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-fv-perlu-sapuan-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Ya
                  </label>
                  <input
                    required
                    type='radio'
                    name='fv-perlu-sapuan-pemeriksaan-umum'
                    id='tidak-fv-perlu-sapuan-pemeriksaan-umum'
                    value='tidak-fv-perlu-sapuan-pemeriksaan-umum'
                    checked={
                      props.fvPerluSapuanPemeriksaanUmum ===
                      'tidak-fv-perlu-sapuan-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setFvPerluSapuanPemeriksaanUmum(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-fv-perlu-sapuan-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Tidak
                  </label>
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Silver Diamine Fluoride
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  Perlu Sapuan<span className='text-user6'>*</span>
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    required
                    type='radio'
                    name='silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    id='ya-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    value='ya-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    checked={
                      props.yaTidakSilverDiamineFluoridePerluSapuanPemeriksaanUmum ===
                      'ya-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setYaTidakSilverDiamineFluoridePerluSapuanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Ya
                  </label>
                  <input
                    required
                    type='radio'
                    name='silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    id='tidak-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    value='tidak-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    checked={
                      props.yaTidakSilverDiamineFluoridePerluSapuanPemeriksaanUmum ===
                      'tidak-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setYaTidakSilverDiamineFluoridePerluSapuanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-silver-diamine-fluoride-perlu-sapuan-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Tidak
                  </label>
                </div>
              </article>
            </div>
            <div className='grid gap-2 auto-rows-min row-start-2 lg:row-start-1 col-start-1 lg:col-start-2'>
              <article className='grid grid-cols-1 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5'>Oral Hygiene</h4>
                <div className='flex items-center '>
                  <p className='flex flex-row pl-5 text-sm font-m '>
                    Kebersihan Mulut<span className='text-user6'>*</span>
                  </p>
                  <select
                    required
                    name='kebersihan-mulut-pemeriksaan-umum'
                    id='kebersihan-mulut-pemeriksaan-umum'
                    value={props.kebersihanMulutOralHygienePemeriksaanUmum}
                    onChange={(e) => {
                      props.setKebersihanMulutOralHygienePemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  >
                    <option value=''></option>
                    <option value='A'>A</option>
                    <option value='C'>C</option>
                    <option value='E'>E</option>
                  </select>
                </div>
                <div
                  className={`${
                    props.umur < 15 && 'hidden'
                  } flex items-center flex-row pl-5`}
                >
                  <p className='text-sm font-m'>
                    BPE Skor:
                    <span className='text-user6'>*</span>
                  </p>
                  <select
                    required={props.umur < 15 ? false : true}
                    name='skor-bpe-pemeriksaan-umum'
                    id='skor-bpe-pemeriksaan-umum'
                    value={props.skorBpeOralHygienePemeriksaanUmum}
                    onChange={(e) => {
                      props.setSkorBpeOralHygienePemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                  >
                    <option value=''></option>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <p className='text-sm font-m'>
                    GIS Skor:
                    <span className='text-user6'>*</span>
                  </p>
                  <select
                    required
                    name='skor-gis-pemeriksaan-umum'
                    id='skor-gis-pemeriksaan-umum'
                    value={props.skorGisMulutOralHygienePemeriksaanUmum}
                    onChange={(e) => {
                      props.setSkorGisMulutOralHygienePemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                  >
                    <option value=''></option>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </div>
              </article>
              <article className=' border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5'>
                  Status Gigi Desidus<span className='text-user6'>*</span>
                </h4>
                <div className='grid grid-cols-2'>
                  {/* <div className='flex items-center flex-row pl-5 col-span-2'>
                    <span
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m bg-user1 text-userWhite hover:cursor-pointer'
                      onClick={(e) =>
                        !statusGigiDecidus
                          ? setStatusGigiDecidus(true)
                          : setStatusGigiDecidus(false)
                      }
                    >
                      {statusGigiDecidus ? 'Ada' : 'Tiada'}
                    </span>
                    <p className='text-xs font-m whitespace-normal'>
                      {statusGigiDecidus
                        ? 'Klik sekali lagi jika tiada data'
                        : 'Klik butang jika ada gigi desidus'}
                    </p>
                  </div> */}
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m lowercase'>d: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='20'
                      type='number'
                      name='d-ada-status-gigi-desidus-pemeriksaan-umum'
                      id='d-ada-status-gigi-desidus-pemeriksaan-umum'
                      value={props.dAdaGigiDesidusPemeriksaanUmum}
                      onChange={(e) => {
                        props.setDAdaGigiDesidusPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m lowercase'>m: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='20'
                      type='number'
                      name='m-ada-status-gigi-desidus-pemeriksaan-umum'
                      id='m-ada-status-gigi-desidus-pemeriksaan-umum'
                      value={props.mAdaGigiDesidusPemeriksaanUmum}
                      onChange={(e) => {
                        props.setMAdaGigiDesidusPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m lowercase'>f: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='20'
                      type='number'
                      name='f-ada-status-gigi-desidus-pemeriksaan-umum'
                      id='f-ada-status-gigi-desidus-pemeriksaan-umum'
                      value={props.fAdaGigiDesidusPemeriksaanUmum}
                      onChange={(e) => {
                        props.setFAdaGigiDesidusPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m lowercase'>e: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='20'
                      type='number'
                      name='e-ada-status-gigi-desidus-pemeriksaan-umum'
                      id='e-ada-status-gigi-desidus-pemeriksaan-umum'
                      value={props.eAdaGigiDesidusPemeriksaanUmum}
                      onChange={(e) => {
                        props.setEAdaGigiDesidusPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m lowercase'>x: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='20'
                      type='number'
                      name='x-ada-status-gigi-desidus-pemeriksaan-umum'
                      id='x-ada-status-gigi-desidus-pemeriksaan-umum'
                      value={props.xAdaGigiDesidusPemeriksaanUmum}
                      onChange={(e) => {
                        props.setXAdaGigiDesidusPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </div>
              </article>
              <article className='border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5'>
                  Status Gigi Kekal<span className='text-user6'>*</span>
                </h4>
                <div className='grid grid-cols-2'>
                  {/* <div className='flex items-center flex-row pl-5 col-span-2'>
                    <span
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m bg-user1 text-userWhite hover:cursor-pointer'
                      onClick={(e) =>
                        !statusGigiKekal
                          ? setStatusGigiKekal(true)
                          : setStatusGigiKekal(false)
                      }
                    >
                      {statusGigiKekal ? 'Ada' : 'Tiada'}
                    </span>
                    <p className='text-xs font-m whitespace-normal'>
                      {statusGigiKekal
                        ? 'Klik sekali lagi jika tiada data'
                        : 'Klik butang jika ada gigi kekal'}
                    </p>
                  </div> */}
                  <div className='flex flex-row items-center  pl-5'>
                    <p className='text-sm font-m '>D: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='32'
                      type='number'
                      name='d-ada-status-gigi-kekal-pemeriksaan-umum'
                      id='d-ada-status-gigi-kekal-pemeriksaan-umum'
                      value={props.dAdaGigiKekalPemeriksaanUmum}
                      onChange={(e) => {
                        props.setDAdaGigiKekalPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m '>M: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='32'
                      type='number'
                      name='m-ada-status-gigi-kekal-pemeriksaan-umum'
                      id='m-ada-status-gigi-kekal-pemeriksaan-umum'
                      value={props.mAdaGigiKekalPemeriksaanUmum}
                      onChange={(e) => {
                        props.setMAdaGigiKekalPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m '>F: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='32'
                      type='number'
                      name='f-ada-status-gigi-kekal-pemeriksaan-umum'
                      id='f-ada-status-gigi-kekal-pemeriksaan-umum'
                      value={props.fAdaGigiKekalPemeriksaanUmum}
                      onChange={(e) => {
                        props.setFAdaGigiKekalPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m '>E: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='32'
                      type='number'
                      name='e-ada-status-gigi-kekal-pemeriksaan-umum'
                      id='e-ada-status-gigi-kekal-pemeriksaan-umum'
                      value={props.eAdaGigiKekalPemeriksaanUmum}
                      onChange={(e) => {
                        props.setEAdaGigiKekalPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <p className='text-sm font-m '>X: </p>
                    <span className='text-user6'>*</span>
                    <input
                      required
                      min='0'
                      max='32'
                      type='number'
                      name='x-ada-status-gigi-kekal-pemeriksaan-umum'
                      id='x-ada-status-gigi-kekal-pemeriksaan-umum'
                      value={props.xAdaGigiKekalPemeriksaanUmum}
                      onChange={(e) => {
                        props.setXAdaGigiKekalPemeriksaanUmum(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </div>
              </article>
              <article className='border border-userBlack pl-3 p-2 rounded-md'>
                <div className='grid grid-cols-1'>
                  <h4 className='font-bold flex flex-row pl-5'>
                    Risiko Karies
                  </h4>
                  <div className='flex flex-row'>
                    <p className='flex items-center flex-row pl-5'>
                      Jumlah Faktor Risiko:
                    </p>
                    <select
                      name='jumlah-faktor-risiko-pemeriksaan-umum'
                      id='jumlah-faktor-risiko-pemeriksaan-umum'
                      value={props.jumlahFaktorRisikoPemeriksaanUmum}
                      onChange={(e) => {
                        props.setJumlahFaktorRisikoPemeriksaanUmum(
                          e.target.value
                        );
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    >
                      <option value=''></option>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                    </select>
                  </div>
                  {/* <div className='grid grid-cols-3 gap-1'>
                    <p
                      className={`${
                        props.jumlahFaktorRisiko < 3 &&
                        props.dAdaGigiKekal === 0 &&
                        props.dAdaGigiDesidus === 0
                          ? 'bg-user7'
                          : null
                      } outline outline-1 outline-userBlack w-30 m-1 text-sm font-m`}
                    >
                      Rendah
                    </p>
                    <p
                      className={`${
                        (props.jumlahFaktorRisiko >= 3 &&
                          props.dAdaGigiKekal === 0 &&
                          props.dAdaGigiDesidus === 0) ||
                        (props.jumlahFaktorRisiko <= 2 &&
                          props.eAdaGigiKekal >= 1) ||
                        (props.jumlahFaktorRisiko === 0 &&
                          props.dAdaGigiKekal >= 1 &&
                          props.dAdaGigiDesidus >= 1)
                          ? 'bg-user8'
                          : null
                      } outline outline-1 outline-userBlack w-30 m-1 text-sm font-m`}
                    >
                      Sederhana
                    </p>
                    <p
                      className={`${
                        props.jumlahFaktorRisiko >= 3 &&
                        props.eAdaGigiKekal >= 1
                          ? 'bg-user9'
                          : null
                      } outline outline-1 outline-userBlack w-30 m-1 text-sm font-m`}
                    >
                      Tinggi
                    </p>
                  </div> */}
                </div>
              </article>
              <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  warga emas
                </h4>
                <p className='flex items-center justify-center text-sm font-m '>
                  edentulous:
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    required
                    type='radio'
                    name='edentulous-warga-emas-pemeriksaan-umum'
                    id='ya-edentulous-warga-emas-pemeriksaan-umum'
                    value='ya-edentulous-warga-emas-pemeriksaan-umum'
                    checked={
                      props.edentulousWargaEmasPemeriksaanUmum ===
                      'ya-edentulous-warga-emas-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setEdentulousWargaEmasPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-edentulous-warga-emas-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Ya
                  </label>
                  <input
                    required
                    type='radio'
                    name='edentulous-warga-emas-pemeriksaan-umum'
                    id='tidak-edentulous-warga-emas-pemeriksaan-umum'
                    value='tidak-edentulous-warga-emas-pemeriksaan-umum'
                    checked={
                      props.edentulousWargaEmasPemeriksaanUmum ===
                      'tidak-edentulous-warga-emas-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setEdentulousWargaEmasPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-edentulous-warga-emas-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    Tidak
                  </label>
                </div>
                <p className='flex items-center justify-center text-sm font-m '>
                  mempunyai ≥ 20 gigi:
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    name='mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    id='ya-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    value='ya-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    checked={
                      props.mempunyai20GigiEdentulousWargaEmasPemeriksaanUmum ===
                      'ya-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setMempunyai20GigiEdentulousWargaEmasPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    ya
                  </label>
                  <input
                    type='radio'
                    name='mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    id='tidak-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    value='tidak-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    checked={
                      props.mempunyai20GigiEdentulousWargaEmasPemeriksaanUmum ===
                      'tidak-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setMempunyai20GigiEdentulousWargaEmasPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    tidak
                  </label>
                </div>
                <div className='flex flex-row pl-5 items-center col-span-2'>
                  <p className='text-sm font-m '>bilangan gigi: </p>
                  <input
                    min='0'
                    max='20'
                    type='number'
                    name='bilangan-gigi-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    id='bilangan-gigi-mempunyai-20-gigi-edentulous-warga-emas-pemeriksaan-umum'
                    value={
                      props.bilanganGigiMempunyai20GigiEdentulousWargaEmasPemeriksaanUmum
                    }
                    onChange={(e) => {
                      props.setBilanganGigiMempunyai20GigiEdentulousWargaEmasPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
              </article>
            </div>
            <div className='grid gap-2 auto-rows-min'>
              <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Program Kanser Mulut
                </h4>
                <p className='flex items-center justify-center text-sm font-m '>
                  disaring:
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    name='disaring-program-kanser-mulut-pemeriksaan-umum'
                    id='ya-disaring-program-kanser-mulut-pemeriksaan-umum'
                    value='ya-disaring-program-kanser-mulut-pemeriksaan-umum'
                    checked={
                      props.disaringProgramKanserMulutPemeriksaanUmum ===
                      'ya-disaring-program-kanser-mulut-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setDisaringProgramKanserMulutPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-disaring-program-kanser-mulut-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    ya
                  </label>
                  <input
                    type='radio'
                    name='disaring-program-kanser-mulut-pemeriksaan-umum'
                    id='tidak-disaring-program-kanser-mulut-pemeriksaan-umum'
                    value='tidak-disaring-program-kanser-mulut-pemeriksaan-umum'
                    checked={
                      props.disaringProgramKanserMulutPemeriksaanUmum ===
                      'tidak-disaring-program-kanser-mulut-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setDisaringProgramKanserMulutPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-disaring-program-kanser-mulut-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    tidak
                  </label>
                </div>
                <p className='flex items-center justify-center text-sm font-m '>
                  dirujuk:
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    name='dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    id='ya-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    value='ya-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    checked={
                      props.dirujukProgramKanserMulutPemeriksaanUmum ===
                      'ya-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setDirujukProgramKanserMulutPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    ya
                  </label>
                  <input
                    type='radio'
                    name='dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    id='tidak-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    value='tidak-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    checked={
                      props.dirujukProgramKanserMulutPemeriksaanUmum ===
                      'tidak-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setDirujukProgramKanserMulutPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-dirujuk-program-kanser-mulut-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    tidak
                  </label>
                </div>
                <div className='flex flex-row items-center pl-5 pt-1 col-span-2'>
                  <input
                    type='checkbox'
                    name='lesi-mulut-pemeriksaan-umum'
                    id='lesi-mulut-pemeriksaan-umum'
                    checked={props.lesiMulutPemeriksaanUmum}
                    onChange={() => {
                      props.setLesiMulutPemeriksaanUmum(
                        !props.lesiMulutPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label
                    htmlFor='lesi-mulut-pemeriksaan-umum'
                    className='mx-2 text-sm font-m'
                  >
                    lesi mulut
                  </label>
                </div>
                <div className='flex flex-row items-center pl-5 pt-1 col-span-2'>
                  <input
                    type='checkbox'
                    name='tabiat-berisiko-tinggi-pemeriksaan-umum'
                    id='tabiat-berisiko-tinggi-pemeriksaan-umum'
                    checked={props.tabiatBerisikoTinggiPemeriksaanUmum}
                    onChange={() => {
                      props.setTabiatBerisikoTinggiPemeriksaanUmum(
                        !props.tabiatBerisikoTinggiPemeriksaanUmum
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label
                    htmlFor='tabiat-berisiko-tinggi-pemeriksaan-umum'
                    className='mx-2 text-sm font-m'
                  >
                    tabiat berisiko tinggi
                  </label>
                </div>
              </article>
              <article className='grid grid-cols-1 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-semibold flex flex-row pl-3'>
                  kes endodontik diperlukan
                </h4>
                <div className='flex flex-row items-center pl-3'>
                  <label
                    htmlFor='jumlah-anterior-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='text-sm font-m m-1'
                  >
                    anterior :
                  </label>
                  <input
                    type='number'
                    name='jumlah-anterior-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='jumlah-anterior-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value={
                      props.jumlahAnteriorKesEndodontikDiperlukanPemeriksaanUmum
                    }
                    onChange={(e) => {
                      props.setJumlahAnteriorKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 text-sm font-m ml-3'
                  />
                </div>
                <div className='flex flex-row items-center pl-3'>
                  <label
                    htmlFor='jumlah-premolar-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='text-sm font-m m-1'
                  >
                    premolar :
                  </label>
                  <input
                    type='number'
                    name='jumlah-premolar-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='jumlah-premolar-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value={
                      props.jumlahPremolarKesEndodontikDiperlukanPemeriksaanUmum
                    }
                    onChange={(e) => {
                      props.setJumlahPremolarKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 text-sm font-m ml-3'
                  />
                </div>
                <div className='flex flex-row items-center pl-3'>
                  <label
                    htmlFor='jumlah-molar-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='text-sm font-m m-1'
                  >
                    molar :
                  </label>
                  <input
                    type='number'
                    name='jumlah-molar-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='jumlah-molar-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value={
                      props.jumlahMolarKesEndodontikDiperlukanPemeriksaanUmum
                    }
                    onChange={(e) => {
                      props.setJumlahMolarKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 text-sm font-m ml-3'
                  />
                </div>
                <div className='flex flex-row items-center pl-3'>
                  <label
                    htmlFor='rawatan-semula-endodontik-dari-primer-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='text-sm font-m m-1'
                  >
                    rawatan semula endodontik dari primer :
                  </label>
                  <input
                    type='number'
                    name='rawatan-semula-endodontik-dari-primer-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='rawatan-semula-endodontik-dari-primer-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value={
                      props.rawatanSemulaEndodontikDariPrimerKesEndodontikDiperlukanPemeriksaanUmum
                    }
                    onChange={(e) => {
                      props.setRawatanSemulaEndodontikDariPrimerKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 text-sm font-m ml-3'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <p className='flex items-center justify-center text-sm font-m mr-3'>
                    perlu rawatan lain
                  </p>
                  <input
                    type='radio'
                    name='rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='ya-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value='ya-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    checked={
                      props.rawatanLainKesEndodontikDiperlukanPemeriksaanUmum ===
                      'ya-disaring-program-kanser-mulut-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setRawatanLainKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    ya
                  </label>
                  <input
                    type='radio'
                    name='rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='tidak-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value='tidak-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    checked={
                      props.rawatanLainKesEndodontikDiperlukanPemeriksaanUmum ===
                      'tidak-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      props.setRawatanLainKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-rawatan-lain-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='m-2 text-sm font-m'
                  >
                    tidak
                  </label>
                </div>
                <div className='flex flex-row items-center pl-3'>
                  <label
                    htmlFor='cabutan-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='text-sm font-m m-1'
                  >
                    cabutan :
                  </label>
                  <input
                    type='number'
                    name='cabutan-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='cabutan-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value={props.cabutanKesEndodontikDiperlukanPemeriksaanUmum}
                    onChange={(e) => {
                      props.setCabutanKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 text-sm font-m ml-3'
                  />
                </div>
                <div className='flex flex-row items-center pl-3'>
                  <label
                    htmlFor='tampalan-kes-endodontik-diperlukan-pemeriksaan-umum'
                    className='text-sm font-m m-1'
                  >
                    tampalan :
                  </label>
                  <input
                    type='number'
                    name='tampalan-kes-endodontik-diperlukan-pemeriksaan-umum'
                    id='tampalan-kes-endodontik-diperlukan-pemeriksaan-umum'
                    value={props.tampalanKesEndodontikDiperlukanPemeriksaanUmum}
                    onChange={(e) => {
                      props.setTampalanKesEndodontikDiperlukanPemeriksaanUmum(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 text-sm font-m ml-3'
                  />
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
