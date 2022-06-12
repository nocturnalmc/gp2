import { useGlobalUserAppContext } from '../context/userAppContext';

function UserHeaderLoggedIn() {
  const { username, navigate } = useGlobalUserAppContext();

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className='absolute top-14 right-5 flex w-auto h-10 items-center justify-center capitalize text-userWhite text-xs'>
      <img
        className='w-full h-full aspect-square rounded-full shadow-xl outline outline-1 outline-user4'
        src='https://miro.medium.com/max/1400/1*X7n_UtdTaFoY4wZ4VIS7Dw.jpeg'
        alt='logo'
      />
      <div className='m-3 space-y-1'>
        <p className='w-32'>
          <b>user : </b>
          {username}
        </p>
        <p className='w-32'>
          <b>klinik pergigian : </b>klinik pergigian alor janggus
        </p>
      </div>
      <button
        type='button'
        className='mt-5 mb-5 p-1 text-user2 bg-user3 hover:bg-opacity-80 rounded-sm shadow-xl outline outline-1 outline-user4 transition-all'
        onClick={logout}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default UserHeaderLoggedIn;
