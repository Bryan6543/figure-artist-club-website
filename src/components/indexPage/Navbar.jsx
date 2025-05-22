import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-2 flex justify-between w-full p-7 items-start text-sm">
      <img src={logo} alt="Logo" />
      <div className="flex gap-10 items-center">
        <Link className="hover:text-red-500" to={"/"}>Web Store</Link>
        <Link className="hover:text-red-500" to={"/coaching"}>Coaching</Link>
        <Link className="hover:text-red-500" to={"/membership"}>Membership</Link>
        <Link className="hover:text-red-500" to={"/aboutus"}>About Us</Link>
        <Link to={"/"} className="bg-[var(--logo-red)] p-3 rounded-lg">
          +94 7646 35985
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


// fixed top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white z-50