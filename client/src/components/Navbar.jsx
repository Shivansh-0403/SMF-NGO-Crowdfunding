import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser, setLoginStatus } from '../features/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = useSelector(state => state.user.userLoggedIn);  // Assuming the user is logged in initially
    const [isDropdownVisible, setDropdownVisible] = useState('hidden');
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // if (isLoggedIn === false){
        //     document.getElementById("user-button").addEventListener('mousedown', () => {
        //         navigate('/login');
        //     })
        // }
        // else {
        //     document.getElementById("user-button").addEventListener('mousedown', () => {
        //         setDropdownVisible(isDropdownVisible === 'hidden' ? '' : 'hidden')
        //     })
        // }

        const userButton = document.getElementById("user-button");

        const handleClick = () => {
            if (!isLoggedIn) {
                navigate('/login');
            } else {
                setDropdownVisible(isDropdownVisible === 'hidden' ? '' : 'hidden');
            }
        };

        userButton.addEventListener('mousedown', handleClick);

        // Cleanup function to remove the event listener
        return () => {
            userButton.removeEventListener('mousedown', handleClick);
        };
    }, [isLoggedIn, navigate, isDropdownVisible])

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setDropdownVisible('hidden');
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/logout`);
            console.log(response);
            
            const storeUser = {
                name: "",
                email: "",
            };

            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")

            dispatch(setUser(storeUser));
            dispatch(setLoginStatus(false));
            navigate("/");
        } catch (error) {
            console.error("Error: ", error);
            window.alert(error.message || "Logout failed. Please try again.");
        }
    }

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img
                                className="w-auto h-6 sm:h-7"
                                src="https://merakiui.com/images/full-logo.svg"
                                alt="Logo"
                            />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link
                                to="/"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                About
                            </Link>
                            <Link
                                to="/listings"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Browse NGOs
                            </Link>
                            <Link
                                to="/register-ngo"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Register NGO
                            </Link>
                            <Link
                                to="/listings"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Donate
                            </Link>
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button
                                id='user-button'
                                ref={buttonRef}
                                // onClick={handleClick}
                                type="button"
                                className="flex items-center focus:outline-none"
                                aria-label="toggle profile dropdown"
                            >
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        className="object-cover w-full h-full"
                                        alt="avatar"
                                    />
                                </div>
                            </button>

                            <div
                                ref={dropdownRef}
                                id="user-dropdown"
                                className={`absolute right-0 z-20 w-56 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 ${isDropdownVisible}`}
                                style={{ top: '100%' }}  // This moves the dropdown below the button
                            >
                                <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="jane avatar" />
                                    <div className="mx-1">
                                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p>
                                    </div>
                                </a>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <a href="#" className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12H9V14H15V12Z" fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7ZM7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6Z" fill="currentColor"></path>
                                    </svg>

                                    <span className="mx-1">Your Transactions</span>
                                </a>

                                <a href="#" onClick={handleLogout}
                                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7 2C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2H7ZM6 5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5ZM8 6H10V18H8V6ZM16 6H14V18H16V6Z" fill="currentColor"></path>
                                    </svg>

                                    <span className="mx-1">Sign out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
