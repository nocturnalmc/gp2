import PropTypes from "prop-types";
import { useState } from "react";
import PublicHeader from "../public/Header";
import axios from "axios";

async function loginUser(credentials) {
  const tokenized = await axios.post(
    "http://localhost:5000/api/v1/superadmin/login",
    credentials
  );
  return tokenized.data;
}

export default function AdminLoginForm({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    console.log(token);
  };

  return (
    <>
      <PublicHeader />
      <div className="absolute inset-0 -z-10 flex bg-admin4 text-center justify-center items-center capitalize">
        <div className="w-1/2 h-[25rem] mt-20 mb-5 bg-adminWhite outline outline-1 outline-userBlack rounded-md shadow-xl">
          <div className="login-wrapper">
            <h3 className="text-xl font-semibold mt-10">
              sila masukkan kata laluan
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                className="mt-5 appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-admin1 focus:outline-none rounded-md shadow-xl"
                type="text"
                placeholder="ID Pengguna"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <br />
              <input
                className="mt-5 appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-admin1 focus:outline-none rounded-md shadow-xl"
                type="password"
                placeholder="Kata Laluan"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <div className="mt-5 text-xs text-admin6 underline">
                <a href="#lupa-kata-laluan">lupa kata laluan</a>
              </div>
              <br />
              <button
                type="submit"
                className="capitalize bg-admin3 text-adminWhite rounded-md shadow-xl p-2 hover:bg-admin1 transition-all"
              >
                log masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

AdminLoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
// export default AdminLoginForm;
