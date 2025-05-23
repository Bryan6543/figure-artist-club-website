import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-2 flex justify-between w-full p-7 items-start text-sm">
      <img src={logo} alt="Logo" />
      <div className="flex gap-10 items-center">
        <Link className="hover:text-red-500" to={"/"}>Our Vibe</Link>
        <Link className="hover:text-red-500" to={"/coaching"}>Our Team</Link>
        <Link className="hover:text-red-500" to={"/membership"}>Events</Link>
        <Link className="hover:text-red-500" to={"/aboutus"}>Membership</Link>
        <Link to={"/"} className="bg-[var(--logo-red)] p-3 rounded-lg">
          +94 7646 35985
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
