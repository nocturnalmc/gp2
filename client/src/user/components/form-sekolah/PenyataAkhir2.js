export default function PenyataAkhir2(props) {
  return (
    <>
      <div className='p-2'>
        <div className='grid grid-cols-2'>
          <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Penyata Akhir 2</p>
          </span>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 mb-3 w-full col-span-2'>
            <div className='grid gap-2 auto-rows-min'>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  cabutan
                </h4>
                <p className='flex items-center flex-row pl-5 text-m font-m col-span-2'>
                  gigi telah dicabut
                </p>
                <div className='flex items-center justify-center'>
                  <p className='text-sm font-m'>Desidus: </p>
                  <input
                    type='number'
                    name='cabut-desidus-penyata-akhir-2'
                    id='cabut-desidus-penyata-akhir-2'
                    value={props.cabutDesidusPenyataAkhir2}
                    onChange={(e) => {
                      props.setCabutDesidusPenyataAkhir2(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-1 text-sm font-m'
                    min='0'
                    max='20'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <p className='text-sm font-m'>Kekal: </p>
                  <input
                    type='number'
                    name='cabut-kekal-penyata-akhir-2'
                    id='cabut-kekal-penyata-akhir-2'
                    value={props.cabutKekalPenyataAkhir2}
                    onChange={(e) => {
                      props.setCabutKekalPenyataAkhir2(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-1 text-sm font-m'
                    min='0'
                    max='32'
                  />
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  tampalan sementara
                </h4>
                <div className='flex items-center flex-row pl-5 col-span-2'>
                  <p className='text-sm font-m'>jumlah tampalan sementara: </p>
                  <input
                    type='number'
                    name='jumlah-tampalan-sementara-penyata-akhir-2'
                    id='jumlah-tampalan-sementara-penyata-akhir-2'
                    value={props.jumlahTampalanSementaraPenyataAkhir2}
                    onChange={(e) => {
                      props.setJumlahTampalanSementaraPenyataAkhir2(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  rawatan lain yang telah dilakukan
                </h4>
                <div className='grid grid-cols-1 lg:grid-cols-3 col-span-2'>
                  <div className='flex items-center flex-row pl-5'>
                    <p className='text-sm font-m'>pulpotomi: </p>
                    <input
                      type='number'
                      name='pulpotomi-penyata-akhir-2'
                      id='pulpotomi-penyata-akhir-2'
                      value={props.pulpotomiPenyataAkhir2}
                      onChange={(e) => {
                        props.setPulpotomiPenyataAkhir2(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                      min='0'
                      max='20'
                    />
                  </div>
                  <div className='flex items-center flex-row pl-5'>
                    <p className='text-sm font-m'>endodontik: </p>
                    <input
                      type='number'
                      name='endodontik-penyata-akhir-2'
                      id='endodontik-penyata-akhir-2'
                      value={props.endodontikPenyataAkhir2}
                      onChange={(e) => {
                        props.setEndodontikPenyataAkhir2(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                      min='0'
                      max='32'
                    />
                  </div>
                  <div className='flex items-center flex-row pl-5'>
                    <p className='text-sm font-m'>abses: </p>
                    <input
                      type='number'
                      name='abses-penyata-akhir-2'
                      id='abses-penyata-akhir-2'
                      value={props.absesPenyataAkhir2}
                      onChange={(e) => {
                        props.setAbsesPenyataAkhir2(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                      min='0'
                      max='1'
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <input
                    type='number'
                    name='penskaleran-penyata-akhir-2'
                    id='penskaleran-penyata-akhir-2'
                    value={props.penskaleranPenyataAkhir2}
                    onChange={(e) => {
                      props.setPenskaleranPenyataAkhir2(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                  />
                  <p className='mx-2 text-sm font-m'>Penskaleran</p>
                </div>
              </article>
              <article className='grid grid-cols-1gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5'>status rawatan</h4>
                <div className='flex flex-row items-center pl-5 m-2'>
                  <input
                    type='checkbox'
                    name='kes-selesai-penyata-akhir-2'
                    id='kes-selesai-penyata-akhir-2'
                    checked={props.kesSelesaiPenyataAkhir2}
                    onChange={() => {
                      props.setKesSelesaiPenyataAkhir2(
                        !props.kesSelesaiPenyataAkhir2
                      );
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label
                    htmlFor='kes-selesai-penyata-akhir-2'
                    className='mx-2 text-sm font-m'
                  >
                    kes selesai
                  </label>
                </div>
                <div
                  className={`${
                    !props.kesSelesaiPenyataAkhir2 && 'hidden'
                  } flex flex-row items-center pl-5 m-2`}
                >
                  <input
                    type='checkbox'
                    name='kes-selesai-icdas-penyata-akhir-2'
                    id='kes-selesai-icdas-penyata-akhir-2'
                    checked={props.kesSelesaiIcdasPenyataAkhir2}
                    onChange={() => {
                      props.setKesSelesaiIcdasPenyataAkhir2(
                        !props.kesSelesaiIcdasPenyataAkhir2
                      );
                    }}
                    className='ml-7 w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label
                    htmlFor='kes-selesai-icdas-penyata-akhir-2'
                    className='mx-2 text-sm font-m'
                  >
                    kes selesai ICDAS
                  </label>
                </div>
                <div className='flex flex-row items-center pl-5 m-2'>
                  <input
                    type='checkbox'
                    name='rujuk-penyata-akhir-2'
                    id='rujuk-penyata-akhir-2'
                    checked={props.rujukPenyataAkhir2}
                    onChange={() => {
                      props.setRujukPenyataAkhir2(!props.rujukPenyataAkhir2);
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label
                    htmlFor='rujuk-penyata-akhir-2'
                    className='mx-2 text-sm font-m'
                  >
                    rujuk
                  </label>
                </div>
              </article>
            </div>
            <div className='grid gap-2 auto-rows-min'>
              <article className='grid gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5'>promosi</h4>
                <article className='grid grid-cols-1 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    menyertai
                  </h4>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-row items-center pl-5'>
                      <p className='text-sm font-m'>Ceramah: </p>
                      <select
                        name='ceramah-promosi-penyata-akhir-2'
                        id='ceramah-promosi-penyata-akhir-2'
                        value={props.ceramahPromosiPenyataAkhir2}
                        onChange={(e) => {
                          props.setCeramahPromosiPenyataAkhir2(e.target.value);
                        }}
                        className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                      >
                        <option value=''></option>
                        <option value='tiada'>Tiada</option>
                        <option value='baru'>Baru</option>
                        <option value='ulangan'>Ulangan</option>
                      </select>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <p className='text-sm font-m'>LMG: </p>
                      <select
                        name='lmg-promosi-penyata-akhir-2'
                        id='lmg-promosi-penyata-akhir-2'
                        value={props.lmgPromosiPenyataAkhir2}
                        onChange={(e) => {
                          props.setLmgPromosiPenyataAkhir2(e.target.value);
                        }}
                        className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                      >
                        <option value=''></option>
                        <option value='tiada'>Tiada</option>
                        <option value='baru'>Baru</option>
                        <option value='ulangan'>Ulangan</option>
                      </select>
                    </div>
                  </div>
                </article>
                <article className='grid grid-cols-1 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5'>
                    melaksanakan aktiviti begin
                  </h4>
                  <div className='flex items-center justify-evenly'>
                    <div>
                      <input
                        type='radio'
                        name='melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        id='ya-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        value='ya-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        checked={
                          props.yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2 ===
                          'ya-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          props.setYaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2(
                            e.target.value
                          );
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                        required
                      />
                      <label
                        htmlFor='ya-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        className='m-2 text-sm font-m'
                      >
                        Ya
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        id='tidak-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        value='tidak-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        checked={
                          props.yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2 ===
                          'tidak-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          props.setYaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2(
                            e.target.value
                          );
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tidak-melaksanakan-aktiviti-begin-promosi-penyata-akhir-2'
                        className='m-2 text-sm font-m'
                      >
                        Tidak
                      </label>
                    </div>
                  </div>
                </article>
                <article className='grid grid-cols-1 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5'>
                    nasihat pergigian individu
                  </h4>
                  <div className='grid grid-cols-1'>
                    <div className='flex items-center flex-row pl-5'>
                      <label
                        htmlFor='plak-gigi-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        className='m-2 text-sm font-m'
                      >
                        plak gigi
                      </label>
                      <input
                        type='checkbox'
                        name='plak-gigi-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        id='plak-gigi-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        checked={
                          props.plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2
                        }
                        onChange={() => {
                          props.setPlakGigiNasihatPergigianIndividuPromosiPenyataAkhir2(
                            !props.plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2
                          );
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                    </div>
                    <div className='flex items-center flex-row pl-5'>
                      <label
                        htmlFor='diet-pemakanan-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        className='m-2 text-sm font-m'
                      >
                        diet pemakanan
                      </label>
                      <input
                        type='checkbox'
                        name='diet-pemakanan-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        id='diet-pemakanan-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        checked={
                          props.dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2
                        }
                        onChange={() => {
                          props.setDietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2(
                            !props.dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2
                          );
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                    </div>
                    <div className='flex items-center flex-row pl-5'>
                      <label
                        htmlFor='penjagaan-kesihatan-mulut-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        className='m-2 text-sm font-m'
                      >
                        penjagaan kesihatan mulut
                      </label>
                      <input
                        type='checkbox'
                        name='penjagaan-kesihatan-mulut-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        id='penjagaan-kesihatan-mulut-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        checked={
                          props.penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2
                        }
                        onChange={() => {
                          props.setPenjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2(
                            !props.penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2
                          );
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                    </div>
                    <div className='flex items-center flex-row pl-5'>
                      <label
                        htmlFor='kanser-mulut-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        className='m-2 text-sm font-m'
                      >
                        kanser mulut
                      </label>
                      <input
                        type='checkbox'
                        name='kanser-mulut-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        id='kanser-mulut-nasihat-pergigian-individu-promosi-penyata-akhir-2'
                        checked={
                          props.kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2
                        }
                        onChange={() => {
                          props.setKanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2(
                            !props.kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2
                          );
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                    </div>
                  </div>
                </article>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
