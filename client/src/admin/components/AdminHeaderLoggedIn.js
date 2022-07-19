import { useGlobalAdminAppContext } from '../context/adminAppContext';

function AdminHeaderLoggedIn({ user, daerah }) {
  const { navigate, catchAxiosErrorAndLogout } = useGlobalAdminAppContext();

  return (
    <div className='absolute top-0 left-0 right-0 flex flew-wrap items-center justify-center h-40 bg-admin2 text-adminWhite font-sans capitalize'>
      <div className='flex flex-wrap items-center shrink'>
        <div className='grid grid-rows-[70px_15px_15px] text-center p-10'>
          <img
            className='w-full h-full'
            src='https://upload.wikimedia.org/wikipedia/commons/9/94/Jata_MalaysiaV2.svg'
            alt='missing jata negara'
          />
          <p className='uppercase text-xs'>kementerian kesihatan malaysia</p>
          <p className='uppercase text-xs'>program kesihatan pergigian</p>
        </div>
        <div className='text-4xl font-bold flex-wrap'>
          <h1>admin sistem gi-Ret PSY 2.0</h1>
        </div>
        <div className='admin-header-logged-in-container'>
          <div className='absolute top-14 right-5 flex w-auto h-10 items-center justify-center capitalize text-userWhite text-xs z'>
            <img
              className='w-10 h-10 aspect-square rounded-full shadow-xl outline outline-1 outline-admin4'
              src='https://1.bp.blogspot.com/-Nx8gwxIE8lY/WQ3oDqCov-I/AAAAAAAABOo/qPrUlx8Qjs4sezUqF4qTdOLA5Dk67cEdwCLcB/s640/rubick%2B%2528Dota%2B2%2529.jpg'
              alt='logo'
            />
            <div className='m-3 space-y-1'>
              <p className='w-32'>
                <b>User: </b>
                {user}
              </p>
              <p className='w-32'>
                <b>Daerah: </b>
                {daerah}
              </p>
            </div>
            <button
              type='button'
              className='mt-5 mb-5 p-1 text-admin2 bg-admin3 hover:bg-opacity-80 rounded-sm shadow-xl outline outline-1 outline-admin4 transition-all'
              onClick={() => {
                catchAxiosErrorAndLogout();
                navigate('/admin');
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeaderLoggedIn;
