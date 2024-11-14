import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-10">
            <SocialLogin />
            <FindUs />
        </div>
    );
};

export default RightNavbar;
