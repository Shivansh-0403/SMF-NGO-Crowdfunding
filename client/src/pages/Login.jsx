import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setLoginStatus } from '../features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import logo_dark from "../images/smf_dark2.png"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, userData);
            const { user, accessToken, refreshToken } = response.data;

            console.log(accessToken);
    
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const storeUser = {
                name: user.name,
                email: user.email,
                contact: user.contact
            };
    
            dispatch(setUser(storeUser));
            dispatch(setLoginStatus(true));
            navigate("/");
        } catch (error) {
            console.error("Error: ", error);
            window.alert(error.message || "Login failed. Please try again.");
        }
        setUserData({ email: "", password: "" });
    };
    return (
        <div className="flex items-center justify-center h-[85vh] dark:bg-slate-900">
            <div className="w-full max-w-sm mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-32" src={logo_dark} alt="SMF Logo" />
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-400 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={handleChange} />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 dark:text-gray-400 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password"
                            name="password"
                            id="password"
                            value={userData.password}
                            onChange={handleChange} />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <Link to="/forgot-password" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>

                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            onClick={handleLogin} >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Dont have an account? </span>

                    <Link to="/register" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
