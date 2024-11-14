import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="mb-3 font-semibold">Find Us</h2>

            <div className="flex join join-vertical *:bg-base-100">
                <button className="justify-start btn join-item">
                    <FaFacebook className="text-blue-700" />
                    Facebook
                </button>
                <button className="justify-start btn join-item">
                    <FaTwitter className="text-blue-400" /> Twitter
                </button>
                <button className="justify-start btn join-item">
                    <FaInstagram />
                    Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;
