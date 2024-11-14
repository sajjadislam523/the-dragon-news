import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                    Login your account
                </h2>
                <div className="divider"></div>
                <form>
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
