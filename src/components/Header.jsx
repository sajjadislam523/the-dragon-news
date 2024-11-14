import logo from "../assets/logo/logo.png";
import moment from "moment";

const Header = () => {
    return (
        <div className="py-8">
            <div className="flex flex-col items-center justify-center gap-4">
                <img className="w-[350px]" src={logo} alt="" />
                <p className=" text-[#706F6F] font-normal text-sm">
                    Journalism Without Fear or Favour
                </p>
                <p className="text-lg font-medium ">
                    <span className="text-[#403F3F]">
                        {moment().format("dddd, ")}
                    </span>
                    <span className="text-[#706F6F]">
                        {moment().format("MMMM Do YYYY")}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Header;
