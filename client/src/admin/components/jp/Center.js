import JPData from "./Data";

function JPCenter() {
  function JPStage() {
    return (
      <>
        <div className="absolute inset-0 -z-10 bg-admin4"></div>
        <div className="absolute inset-10 top-44 -z-10 bg-adminWhite text-center justify-center items-center outline outline-1 outline-adminBlack rounded-md shadow-xl capitalize">
          <div className="h-full p-5 overflow-y-auto">
            <JPData />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <JPStage />
    </>
  );
}

export default JPCenter;
