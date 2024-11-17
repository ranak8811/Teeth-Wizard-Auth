import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="min-h-[70px] px-4 bg-blue-700 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">TEETH WIZARD</div>
      <div className="space-x-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/allTreatments"}>All Treatments</NavLink>
        <NavLink to={"/myAppointments"}>My Appointments</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </div>

      <div>
        <NavLink to={"/login"}>
          <button className="btn btn-primary">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
