export default function PenyataAkhir1(props) {
  return (
    <>
      <div className='p-2'>
        <div className='grid grid-cols-2'>
          <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
            <p className='ml-3 text-xl font-semibold'>Penyata Akhir 1</p>
          </span>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
            <div className='grid gap-2'>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Fisur Sealan
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  jumlah gigi kekal dibuat FS
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-dibuat-fs'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='number'
                    name='baru-jumlah-gigi-kekal-dibuat-fs'
                    id='baru-jumlah-gigi-kekal-dibuat-fs'
                    value={props.baruJumlahGigiKekalDibuatFs}
                    onChange={(e) => {
                      props.setBaruJumlahGigiKekalDibuatFs(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-kekal-dibuat-fs'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='number'
                    name='semula-jumlah-gigi-kekal-dibuat-fs'
                    id='semula-jumlah-gigi-kekal-dibuat-fs'
                    value={props.semulaJumlahGigiKekalDibuatFs}
                    onChange={(e) => {
                      props.setSemulaJumlahGigiKekalDibuatFs(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                {props.sumDibuatFs > 16 && (
                  <p className='col-span-2 text-user6 font-semibold'>
                    jumlah baru & semula FS tidak boleh melebihi 16
                  </p>
                )}
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Fluoride Varnish
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  jumlah gigi kekal diberi FV
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-diberi-fv'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='number'
                    name='baru-jumlah-gigi-kekal-diberi-fv'
                    id='baru-jumlah-gigi-kekal-diberi-fv'
                    value={props.baruJumlahGigiKekalDiberiFv}
                    onChange={(e) => {
                      props.setBaruJumlahGigiKekalDiberiFv(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-kekal-diberi-fv'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='number'
                    name='semula-jumlah-gigi-kekal-diberi-fv'
                    id='semula-jumlah-gigi-kekal-diberi-fv'
                    value={props.semulaJumlahGigiKekalDiberiFv}
                    onChange={(e) => {
                      props.setSemulaJumlahGigiKekalDiberiFv(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                {props.sumDiberiFv > 16 && (
                  <p className='col-span-2 text-user6 font-semibold'>
                    jumlah baru & semula FV tidak boleh melebihi 16
                  </p>
                )}
              </article>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  PRR Jenis 1
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  jumlah gigi kekal diberi PRR Jenis 1
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-kekal-diberi-prr-jenis-1'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='number'
                    name='baru-jumlah-gigi-kekal-diberi-prr-jenis-1'
                    id='baru-jumlah-gigi-kekal-diberi-prr-jenis-1'
                    value={props.baruJumlahGigiKekalDiberiPrrJenis1}
                    onChange={(e) => {
                      props.setBaruJumlahGigiKekalDiberiPrrJenis1(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-kekal-diberi-prr-jenis-1'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='number'
                    name='semula-jumlah-gigi-kekal-diberi-prr-jenis-1'
                    id='semula-jumlah-gigi-kekal-diberi-prr-jenis-1'
                    value={props.semulaJumlahGigiKekalDiberiPrrJenis1}
                    onChange={(e) => {
                      props.setSemulaJumlahGigiKekalDiberiPrrJenis1(
                        e.target.value
                      );
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                {props.sumDiberiPrr > 16 && (
                  <p className='col-span-2 text-user6 font-semibold'>
                    jumlah baru & semula PRR tidak boleh melebihi 16
                  </p>
                )}
              </article>
            </div>
            <div className='row-start-2 lg:row-start-1 col-start-1 lg:col-start-2'>
              <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Silver Diamine Fluoride
                </h4>
                <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                  Jumlah gigi yang diberi SDF:
                </p>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='baru-jumlah-gigi-yang-diberi-sdf'
                    className='text-sm font-m'
                  >
                    Baru
                  </label>
                  <input
                    type='number'
                    name='baru-jumlah-gigi-yang-diberi-sdf'
                    id='baru-jumlah-gigi-yang-diberi-sdf'
                    value={props.baruJumlahGigiYangDiberiSdf}
                    onChange={(e) => {
                      props.setBaruJumlahGigiYangDiberiSdf(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
                <div className='flex flex-row items-center pl-5'>
                  <label
                    htmlFor='semula-jumlah-gigi-yang-diberi-sdf'
                    className='text-sm font-m'
                  >
                    Semula
                  </label>
                  <input
                    type='number'
                    name='semula-jumlah-gigi-yang-diberi-sdf'
                    id='semula-jumlah-gigi-yang-diberi-sdf'
                    value={props.semulaJumlahGigiYangDiberiSdf}
                    onChange={(e) => {
                      props.setSemulaJumlahGigiYangDiberiSdf(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    min='0'
                    max='16'
                    required
                  />
                </div>
              </article>
            </div>
            <div className='grid'>
              <article className='border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Jumlah Tampalan Dibuat
                </h4>
                <div className='grid grid-rows-2 gap-2'>
                  <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                    <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                      Anterior Sewarna
                    </h4>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gd-baru-anterior-sewarna-jumlah-tampalan-dibuat'
                        id='gd-baru-anterior-sewarna-jumlah-tampalan-dibuat'
                        value={props.gdBaruAnteriorSewarnaJumlahTampalanDibuat}
                        onChange={(e) => {
                          props.setGdBaruAnteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-baru-anterior-sewarna-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gd-semula-anterior-sewarna-jumlah-tampalan-dibuat'
                        id='gd-semula-anterior-sewarna-jumlah-tampalan-dibuat'
                        value={
                          props.gdSemulaAnteriorSewarnaJumlahTampalanDibuat
                        }
                        onChange={(e) => {
                          props.setGdSemulaAnteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-semula-anterior-sewarna-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Semula
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gk-baru-anterior-sewarna-jumlah-tampalan-dibuat'
                        id='gk-baru-anterior-sewarna-jumlah-tampalan-dibuat'
                        value={props.gkBaruAnteriorSewarnaJumlahTampalanDibuat}
                        onChange={(e) => {
                          props.setGkBaruAnteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-baru-anterior-sewarna-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gk-semula-anterior-sewarna-jumlah-tampalan-dibuat'
                        id='gk-semula-anterior-sewarna-jumlah-tampalan-dibuat'
                        value={
                          props.gkSemulaAnteriorSewarnaJumlahTampalanDibuat
                        }
                        onChange={(e) => {
                          props.setGkSemulaAnteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-semula-anterior-sewarna-jumlah-tampalan-dibuat'
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
                        type='number'
                        name='gd-baru-posterior-sewarna-jumlah-tampalan-dibuat'
                        id='gd-baru-posterior-sewarna-jumlah-tampalan-dibuat'
                        value={props.gdBaruPosteriorSewarnaJumlahTampalanDibuat}
                        onChange={(e) => {
                          props.setGdBaruPosteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-baru-posterior-sewarna-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gd-semula-posterior-sewarna-jumlah-tampalan-dibuat'
                        id='gd-semula-posterior-sewarna-jumlah-tampalan-dibuat'
                        value={
                          props.gdSemulaPosteriorSewarnaJumlahTampalanDibuat
                        }
                        onChange={(e) => {
                          props.setGdSemulaPosteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-semula-posterior-sewarna-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Semula
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gk-baru-posterior-sewarna-jumlah-tampalan-dibuat'
                        id='gk-baru-posterior-sewarna-jumlah-tampalan-dibuat'
                        value={props.gkBaruPosteriorSewarnaJumlahTampalanDibuat}
                        onChange={(e) => {
                          props.setGkBaruPosteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-baru-posterior-sewarna-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gk-semula-posterior-sewarna-jumlah-tampalan-dibuat'
                        id='gk-semula-posterior-sewarna-jumlah-tampalan-dibuat'
                        value={
                          props.gkSemulaPosteriorSewarnaJumlahTampalanDibuat
                        }
                        onChange={(e) => {
                          props.setGkSemulaPosteriorSewarnaJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-semula-posterior-sewarna-jumlah-tampalan-dibuat'
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
                        type='number'
                        name='gd-baru-posterior-amalgam-jumlah-tampalan-dibuat'
                        id='gd-baru-posterior-amalgam-jumlah-tampalan-dibuat'
                        value={props.gdBaruPosteriorAmalgamJumlahTampalanDibuat}
                        onChange={(e) => {
                          props.setGdBaruPosteriorAmalgamJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-baru-posterior-amalgam-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gd-semula-posterior-amalgam-jumlah-tampalan-dibuat'
                        id='gd-semula-posterior-amalgam-jumlah-tampalan-dibuat'
                        value={
                          props.gdSemulaPosteriorAmalgamJumlahTampalanDibuat
                        }
                        onChange={(e) => {
                          props.setGdSemulaPosteriorAmalgamJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gd-semula-posterior-amalgam-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GD Semula
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gk-baru-posterior-amalgam-jumlah-tampalan-dibuat'
                        id='gk-baru-posterior-amalgam-jumlah-tampalan-dibuat'
                        value={props.gkBaruPosteriorAmalgamJumlahTampalanDibuat}
                        onChange={(e) => {
                          props.setGkBaruPosteriorAmalgamJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-baru-posterior-amalgam-jumlah-tampalan-dibuat'
                        className='text-sm font-m ml-2 m-1'
                      >
                        GK Baru
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5'>
                      <input
                        type='number'
                        name='gk-semula-posterior-amalgam-jumlah-tampalan-dibuat'
                        id='gk-semula-posterior-amalgam-jumlah-tampalan-dibuat'
                        value={
                          props.gkSemulaPosteriorAmalgamJumlahTampalanDibuat
                        }
                        onChange={(e) => {
                          props.setGkSemulaPosteriorAmalgamJumlahTampalanDibuat(
                            e.target.value
                          );
                        }}
                        className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                      />
                      <label
                        htmlFor='gk-semula-posterior-amalgam-jumlah-tampalan-dibuat'
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
