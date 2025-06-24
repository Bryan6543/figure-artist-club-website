import logo from "../assets/logo.svg";
// import smlogo from "../assets/sm-logo.svg";
import burger from "../assets/burger.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="lg:absolute flex justify-between w-full p-7 m lg:items-start text-sm">
      <Link className="hover:text-red-500" to={"/"}>
        <img className="w-30 lg:inline" src={logo} alt="Logo" />
      </Link>

      <div className="pt-3 lg:hidden">
        <a href="tel:+94717640479">
          <svg
            class="h-9 w-9 pb-1 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884a1.75 1.75 0 01.97-2.087l2.527-1.01a1.75 1.75 0 012.042.563l1.184 1.64a1.75 1.75 0 01-.174 2.245L7.78 8.417a10.451 10.451 0 004.803 4.803l1.182-1.774a1.75 1.75 0 012.246-.174l1.639 1.184a1.75 1.75 0 01.562 2.042l-1.01 2.527a1.75 1.75 0 01-2.087.97c-3.256-.94-6.08-3.27-8.016-5.206-1.936-1.936-4.267-4.76-5.206-8.016z" />
          </svg>
          Call Us
        </a>
      </div>

      <div className="hidden lg:flex gap-10 items-center">
        <a href="#events_section" className="hover:text-red-500">
          {" "}
          Events
        </a>

        <a href="#membership_section" className="hover:text-red-500">
          {" "}
          Membership
        </a>

        <a href="" className="bg-[var(--logo-red)] p-3 rounded-lg">
          {" "}
          +94 7646 35985
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
