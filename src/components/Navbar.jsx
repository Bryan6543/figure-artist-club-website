import logo from "../assets/logo.svg";
// import smlogo from "../assets/sm-logo.svg";
import burger from "../assets/burger.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="lg:absolute flex justify-between w-full p-7 m lg:items-start text-sm">
      <img className="w-30 lg:inline" src={logo} alt="Logo" />
      {/* <img className="lg:hidden" src={smlogo} alt="Logo" /> */}

      {/* <img className="lg:hidden" src={burger} alt="Logo" /> */}

      <div className="hidden lg:flex gap-10 items-center">
        {/* <Link className="hover:text-red-500" to={"/membership"}> */}
        <a href="#events_section" className="hover:text-red-500">
          {" "}
          Events
        </a>
        {/* </Link> */}
        {/* <Link className="hover:text-red-500" to={"/aboutus"}> */}
        <a href="#membership_section" className="hover:text-red-500">
          {" "}
          Membership
        </a>
        {/* </Link> */}
        {/* <Link to={"/"} > */}
        <a href="" className="bg-[var(--logo-red)] p-3 rounded-lg">
          {" "}
          +94 7646 35985
        </a>
        {/* </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
