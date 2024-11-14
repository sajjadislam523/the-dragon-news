import { NavLink } from "react-router-dom";
import user from "../assets/icons/user.png";

const Navbar = () => {
    const links = (
        <div className="flex items-center gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/carrier">Carrier</NavLink>
        </div>
    );
    return (
        <div className="flex items-center justify-between my-4">
            <div className="w-32"></div>
            <div>{links}</div>
            <div className="flex items-center gap-4">
                <img className="w-8" src={user} alt="" />
                <button className="bg-[#403F3F] text-white px-5 py-1">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
