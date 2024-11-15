import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/icons/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <div className="flex items-center gap-4">
            <NavLink className="hover:underline" to="/">
                Home
            </NavLink>
            <NavLink className="hover:underline" to="/about">
                About
            </NavLink>
            <NavLink className="hover:underline" to="/carrier">
                Carrier
            </NavLink>
        </div>
    );
    return (
        <div className="flex items-center justify-between my-4">
            <div className="w-32">{user && user.email}</div>
            <div>{links}</div>
            <div className="flex items-center gap-4">
                <img className="w-8 rounded-full" src={userImg} alt="" />
                {user && user?.email ? (
                    <button
                        onClick={logOut}
                        className="bg-[#403F3F] text-white px-5 py-1"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/auth/login"
                        className="bg-[#403F3F] text-white px-5 py-1"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
