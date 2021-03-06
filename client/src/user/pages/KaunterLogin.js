import { useState } from 'react';

import { useGlobalUserAppContext } from '../context/userAppContext';

import UserHeader from '../components/UserHeader';
import UserFooter from '../components/UserFooter';

function KaunterLogin() {
  const { loginErrorMessage, isLoginError, loginKaunter } =
    useGlobalUserAppContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginKaunter({ username, password });
  };

  return (
    <>
      <UserHeader />
      <div className='absolute inset-0 -z-10 flex bg-user5 text-center justify-center items-center capitalize'>
        <div className='w-1/2 h-[25rem] mt-20 mb-5 bg-userWhite outline outline-1 outline-userBlack rounded-md shadow-xl'>
          <div>
            <h3 className='text-xl font-semibold mt-20'>
              sila masukkan ID kaunter
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                className='mt-5 appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-xl'
                type='text'
                placeholder='ID Kaunter'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                className='mt-5 appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-xl'
                type='password'
                placeholder='Kata Laluan'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              {isLoginError && (
                <p className='max-w-max mx-auto mt-5 text-sm text-user6'>
                  {loginErrorMessage}
                </p>
              )}
              <button
                type='submit'
                className='mt-7 capitalize bg-user3 text-userWhite rounded-md shadow-xl p-2 hover:bg-user1 transition-all'
              >
                log masuk
              </button>
            </form>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
}

export default KaunterLogin;
