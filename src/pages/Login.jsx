import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { logIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                setUser(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-md">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                    Login your account
                </h2>
                <div className="divider"></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-primary-300"
                            required
                            name="email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-primary-300"
                            required
                            name="password"
                        />
                        {error.login && (
                            <p className="text-xs text-red-500">
                                {error.login}
                            </p>
                        )}
                        <label className="label">
                            <Link className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    <button className="w-full py-2 mb-4 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900">
                        Login
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/auth/register"
                            className="font-medium text-red-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
