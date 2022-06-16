export default function PerluDibuat(props) {
  return (
    <>
      <div className='p-2'>
        <div className='grid grid-cols-2'>
          <button className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Perlu Dibuat</p>
          </button>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
            <div className='grid gap-2'>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Fisur Sealan
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  jumlah gigi kekal perlu FS
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-perlu-fs'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='text'
                    name='baru-jumlah-gigi-kekal-perlu-fs'
                    id='baru-jumlah-gigi-kekal-perlu-fs'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-kekal-perlu-fs'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='text'
                    name='semula-jumlah-gigi-kekal-perlu-fs'
                    id='semula-jumlah-gigi-kekal-perlu-fs'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
                <div className='flex flex-row items-center pl-5 col-span-2'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-perlu-fs'
                    className='text-sm font-m'
                  >
                    Jumlah gigi FS gagal
                  </label>
                  <input
                    type='text'
                    name='baru-jumlah-gigi-kekal-perlu-fs'
                    id='baru-jumlah-gigi-kekal-perlu-fs'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Fluoride Varnish
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  jumlah gigi kekal perlu FV
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-perlu-fv'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='text'
                    name='baru-jumlah-gigi-kekal-perlu-fv'
                    id='baru-jumlah-gigi-kekal-perlu-fv'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-kekal-perlu-fv'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='text'
                    name='semula-jumlah-gigi-kekal-perlu-fv'
                    id='semula-jumlah-gigi-kekal-perlu-fv'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  PRR Jenis 1
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  jumlah gigi kekal perlu PRR Jenis 1
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-perlu-prr-jenis-1'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='text'
                    name='baru-jumlah-gigi-kekal-perlu-prr-jenis-1'
                    id='baru-jumlah-gigi-kekal-perlu-prr-jenis-1'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-kekal-perlu-prr-jenis-1'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='text'
                    name='semula-jumlah-gigi-kekal-perlu-prr-jenis-1'
                    id='semula-jumlah-gigi-kekal-perlu-prr-jenis-1'
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                  />
                </div>
              </article>
            </div>
            <div>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Silver Diamine Fluoride
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  Perlu Sapuan
                </p>
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    name='silver-diamine-fluoride-perlu-sapuan'
                    id='ya-silver-diamine-fluoride-perlu-sapuan'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='ya-silver-diamine-fluoride-perlu-sapuan'
                    className='m-2 text-sm font-m'
                  >
                    Ya
                  </label>
                  <input
                    type='radio'
                    name='silver-diamine-fluoride-perlu-sapuan'
                    id='tidak-silver-diamine-fluoride-perlu-sapuan'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tidak-silver-diamine-fluoride-perlu-sapuan'
                    className='m-2 text-sm font-m'
                  >
                    Tidak
                  </label>
                </div>
              </article>
            </div>
            <div className='grid'>
              <article className='border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Jumlah Tampalan Diperlukan
                </h4>
                <div className='grid grid-rows-2 gap-2'>
                  <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                    <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                      Anterior Sewarna
                    </h4>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gd-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gd-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gd-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gd-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Semula
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gk-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gk-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gk-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gk-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Semula
                      </label>
                    </div>
                  </article>
                  <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                    <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                      Posterior Sewarna
                    </h4>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gd-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gd-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gd-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gd-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Semula
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gk-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gk-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gk-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                        id='gk-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Semula
                      </label>
                    </div>
                  </article>
                  <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                    <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                      Posterior Amalgam
                    </h4>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gd-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                        id='gd-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gd-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                        id='gd-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Semula
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gk-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                        id='gk-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='text'
                        name='gk-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                        id='gk-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Semula
                      </label>
                    </div>
                  </article>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}