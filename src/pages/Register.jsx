import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } =
        useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");

        const navigate = useNavigate;

        if (name.length < 5) {
            setError({ ...error, name: "Must be more than 5 characters" });
            return;
        }

        const photoURL = form.get("photoURL");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) => {
                        console.err(err);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-md">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>
                    {error.name && (
                        <label className="text-xs label text-rose-500">
                            {error.name}
                        </label>
                    )}
                    <div className="form-control">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="acceptedTerms"
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                required
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Accept{" "}
                                <a
                                    href="#"
                                    className="text-indigo-600 underline"
                                >
                                    Terms & Conditions
                                </a>
                            </span>
                        </label>
                    </div>
                    <div className="form-control">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                        >
                            Register
                        </button>
                    </div>
                    <p className="text-sm text-center text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/auth/login"
                            className="font-medium text-red-500 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
