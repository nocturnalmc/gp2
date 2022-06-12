import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalAdminAppContext } from '../context/adminAppContext';

function AdminLoginForm() {
  const [idPengguna, setIdPengguna] = useState('');
  const [kataLaluan, setKataLaluan] = useState('');

  const { setUserName } = useGlobalAdminAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(idPengguna);
    navigate('/admin/landing');
  };

  return (
    <>
      <h3 className='text-xl font-semibold mt-10'>sila masukkan kata laluan</h3>
      <form onSubmit={handleSubmit}>
        <input
          className='mt-5 appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-xl'
          type='text'
          placeholder='ID Pengguna'
          value={idPengguna}
          onChange={(e) => setIdPengguna(e.target.value)}
          required
        />
        <br />
        <input
          className='mt-5 appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-xl'
          type='password'
          placeholder='Kata Laluan'
          value={kataLaluan}
          onChange={(e) => setKataLaluan(e.target.value)}
          required
        />
        <br />
        <p
          className='max-w-max mx-auto mt-10 mb-3 text-xs text-user6 underline hover:cursor-pointer'
          // onClick={() => setIsForgotPassword(true)}
        >
          lupa kata laluan
        </p>
        <button
          type='submit'
          className='capitalize bg-user5 text-userWhite rounded-md shadow-xl p-2 hover:bg-user6 transition-all'
        >
          log masuk
        </button>
      </form>
    </>
  );
}

export default AdminLoginForm;
