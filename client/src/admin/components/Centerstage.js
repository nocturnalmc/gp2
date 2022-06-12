function AdminCenterStageLoggedIn() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-admin4"></div>
      <div className="absolute inset-10 top-44 -z-10 bg-adminWhite text-center justify-center items-center outline outline-1 outline-adminBlack rounded-md shadow-xl capitalize">
        <div className="h-full p-5 overflow-y-auto">
          <div className="justify-center items-center text-xl font-semibold mt-10 space-y-5">
            <h1>selamat datang admin!</h1>
            <p>sila pilih fungsi di sidebar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCenterStageLoggedIn;
