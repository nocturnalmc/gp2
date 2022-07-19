import { useGlobalUserAppContext } from '../context/userAppContext';

function UserHeader() {
  const { kaunterToken } = useGlobalUserAppContext();

  return (
    <div className='absolute top-0 left-0 right-0 flex items-center h-28 bg-user2 text-userWhite font-sans capitalize justify-center'>
      <div className='grid grid-rows-[50px_10px_10px] gap-1 text-center'>
        <img
          className='w-full h-full'
          src='https://upload.wikimedia.org/wikipedia/commons/9/94/Jata_MalaysiaV2.svg'
          alt='missing jata negara'
        />
        <p className='uppercase text-[0.65rem]'>
          kementerian kesihatan malaysia
        </p>
        <p className='uppercase text-[0.65rem]'>program kesihatan pergigian</p>
      </div>
      <div className='grid grid-rows-2 text-2xl font-bold pl-10 text-center'>
        <h1 className={!kaunterToken && 'row-span-2'}>sistem gi-Ret 2.0</h1>
        {kaunterToken && <h1>KAUNTER</h1>}
      </div>
    </div>
  );
}

export default UserHeader;
