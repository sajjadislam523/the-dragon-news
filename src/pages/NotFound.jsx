import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-lg p-8 text-center bg-white rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-700">
                    Oops! Page not found.
                </p>
                <p className="mt-2 text-gray-600">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>

                <div className="mt-6">
                    <Link
                        to="/"
                        className="px-6 py-2 text-white transition-all duration-300 bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
                    >
                        Go Back Home
                    </Link>
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-500">
                        If you believe this is an error, please contact support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
