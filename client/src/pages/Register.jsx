import React from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const [userData, setUserData] = React.useState({
        email: "",
        name: "",
        password: ""
    })

    // const [file, setFile] = React.useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleRegister = async (e) => {
        e.preventDefault()
        // dispatch(register(userData))
        // console.log("axaca");

        try {
            const formData = new FormData();
            // formData.append('username', userData.username);
            formData.append('email', userData.email);
            formData.append('name', userData.name);
            formData.append('password', userData.password);
            // formData.append('avatar', file);
            console.log(formData);
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, userData);
                // , {
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
                // }
            // )
            console.log(response);
            if (!response.data) {
                console.log("HELLO");
                throw response.message
            }
            window.alert(response.data.message)
            navigate("/login")
        } catch (error) {
            console.log("Error: ", error);
            window.alert(error.response.data.message || "Something went wrong")
        }
        setUserData({ name: "", email: "", password: "" })
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <a href="/register" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            sign up
                        </a>
                    </div>

                    <div className="relative flex items-center mt-8 flex-col gap-5">
                        <input
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text"
                            name="email"
                            id="email"
                            placeholder='Enter your email id'
                            value={userData.email}
                            onChange={handleChange} />

                        <input
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text"
                            name="name"
                            id="name"
                            placeholder='Enter your name'
                            value={userData.name}
                            onChange={handleChange} />

                        <input
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="password"
                            name="password"
                            id="password"
                            placeholder='Enter Your password'
                            value={userData.password}
                            onChange={handleChange} />

                        {/* <input
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="file"
                            name="avatar"
                            id="avatar"
                            onChange={(e) => setFile(e.target.files[0])} /> */}
                    </div>

                    {/* Other form fields */}

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        onClick={handleRegister} >
                            Sign Up
                        </button>

                        <div className="mt-6 text-center">
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
