import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h1 className="mb-3 font-semibold">Login With</h1>
            <div className="flex flex-col items-center gap-2">
                <button className="flex items-center justify-center w-full gap-2 py-2 text-blue-500 transition-colors ease-in-out border border-blue-500 rounded-lg hover:bg-blue-200">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="flex items-center justify-center w-full gap-2 py-2 transition-colors ease-in-out border-2 rounded-lg hover:bg-gray-200">
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
