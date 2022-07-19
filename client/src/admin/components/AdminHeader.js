function AdminHeader() {
  return (
    <div className='absolute top-0 left-0 right-0 flex items-center justify-center h-40 bg-admin2 text-adminWhite font-sans capitalize'>
      <div className='grid grid-rows-[70px_15px_15px] text-center p-10'>
        <img
          className='w-full h-full'
          src='https://upload.wikimedia.org/wikipedia/commons/9/94/Jata_MalaysiaV2.svg'
          alt='missing jata negara'
        />
        <p className='uppercase text-xs'>kementerian kesihatan malaysia</p>
        <p className='uppercase text-xs'>program kesihatan pergigian</p>
      </div>
      <div className='text-4xl font-bold'>
        <h1>admin sistem gi-Ret PSY 2.0</h1>
      </div>
      <div className='admin-header-logged-in-container'></div>
    </div>
  );
}

export default AdminHeader;
