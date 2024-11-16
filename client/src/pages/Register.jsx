import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import logo_dark from "../images/smf_dark2.png";
import img from "../images/mission2.jpeg"

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState({
        email: "",
        name: "",
        contact: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, userData);
            if (!response.data) throw response.message;
            window.alert(response.data.message);
            navigate("/login");
        } catch (error) {
            console.log("Error: ", error);
            window.alert(error.response?.data?.message || "Something went wrong");
        }
        setUserData({ name: "", email: "", contact: "", password: "" });
    };

    return (
        <section className="flex items-center justify-center h-[85vh] bg-white dark:bg-gray-900">
            {/* Left Section with Image */}
            <div className="flex-1 hidden md:flex items-center justify-center bg-cover bg-center">
                <div className="bg-white dark:bg-gray-900 bg-opacity-40 w-full h-full flex items-center justify-center">
                    <img src={img} alt="Logo" className="w-1/3 h-auto rounded-lg" />
                </div>
            </div>

            <div className="w-[2px] h-[75%] bg-gray-300 dark:bg-gray-700 mx-4"></div>

            {/* Right Section with Form */}
            <div className="flex-1 flex items-center justify-center p-6">
                <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-6">Sign Up</h2>
                    </div>

                    <div className="relative flex flex-col gap-4 mt-6">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={userData.email}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />

                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            value={userData.name}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />

<input
                            type="text"
                            name="contact"
                            id="contact"
                            placeholder="Enter your contact details"
                            value={userData.contact}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={userData.password}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            onClick={handleRegister}
                            className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Sign Up
                        </button>

                        <div className="mt-4 text-center">
                            <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
