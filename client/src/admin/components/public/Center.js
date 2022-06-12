import AdminLoginForm from "./LoginForm";

function PublicCenterStage() {
  return (
    <div className="absolute inset-0 -z-10 flex bg-admin4 text-center justify-center items-center capitalize">
      <div className="w-1/2 h-[25rem] mt-20 mb-5 bg-adminWhite outline outline-1 outline-userBlack rounded-md shadow-xl">
        {/* <AdminLoginForm /> */}
      </div>
    </div>
  );
}

export default PublicCenterStage;
