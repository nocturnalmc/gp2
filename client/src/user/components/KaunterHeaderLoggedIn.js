function KaunterHeaderLoggedIn({ namaKlinik, logout }) {
  return (
    <div className='absolute top-10 right-5 flex w-auto h-10 items-center justify-center capitalize text-kaunterWhite text-xs'>
      <div className='m-3 space-y-1 text-right pr-2'>
        <p className='w-96 text-sm leading-3'>
          <b>kaunter : </b>
          {namaKlinik}
        </p>
      </div>
      <button
        type='button'
        className='mt-5 mb-5 p-1 text-user2 bg-kaunter3 hover:bg-opacity-80 rounded-sm shadow-xl outline outline-1 outline-kaunter4 transition-all'
        onClick={logout}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default KaunterHeaderLoggedIn;
