import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav className="relative z-10 bg-admin5 text-adminWhite h-10"> */}
      <ul>
        <li>{/* <Link to="/">Home</Link> */}</li>
        <li>{/* <Link to="/loggedin">LoggedIn</Link> */}</li>
        {/* <li>
            <Link to="/hadith">Hadith</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/radio">Radio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
      </ul>
      {/* </nav> */}
      <Outlet />
    </>
  );
};

export default Layout;
