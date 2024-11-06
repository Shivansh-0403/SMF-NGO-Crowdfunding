import React from 'react';
import { Link } from 'react-router-dom'
// import logo_light from "../images/smf_light.png"
import logo_dark from "../images/smf_dark2.png"

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 mt-6">
            <div className="container px-6 py-8 mx-auto">
                {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}
                <div className="flex flex-col items-center text-center">
                    {/* <a href="#"> */}
                        <img
                            className="w-56"
                            src={logo_dark}
                            alt="Logo"
                        />
                    {/* </a> */}

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <Link
                            to="/"
                            className="mx-4 text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Home"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="mx-4 text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="About"
                        >
                            About
                        </Link>

                        <Link
                            to="/ngo-listings"
                            className="mx-4 text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Teams"
                        >
                            Browse NGOs
                        </Link>

                        <Link
                            to="/donate"
                            className="mx-4 text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Privacy"
                        >
                            Donate
                        </Link>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        © Copyright 2024. All Rights Reserved.
                    </p>

                    <div className="flex -mx-2">
                        <a
                            href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook"
                        >
                            <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2.04C6.47 2.04 2.04 6.47 2.04 12C2.04 16.84 5.66 20.87 10.31 21.82V14.89H7.9V12H10.31V9.74C10.31 7.35 11.78 5.98 13.94 5.98C14.95 5.98 15.99 6.17 15.99 6.17V8.53H14.82C13.66 8.53 13.3 9.27 13.3 10.03V12H15.88L15.46 14.89H13.3V21.82C17.94 20.87 21.56 16.84 21.56 12C21.56 6.47 17.13 2.04 12 2.04Z"></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github"
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.026 2C7.13295 1.99937 2.99974 5.80835 2.87978 10.6827C2.79285 14.1868 4.95137 17.262 8.20577 18.525C8.70577 18.617 8.9 18.297 8.9 18.022C8.9 17.775 8.891 17.065 8.891 16.307C6.726 16.751 6.23 15.553 6.08 15.1C5.975 14.825 5.529 13.953 5.205 13.767C4.935 13.617 4.526 13.108 5.195 13.097C5.814 13.086 6.264 13.671 6.414 13.925C7.114 15.129 8.205 14.822 8.705 14.647C8.796 14.15 9.008 13.797 9.244 13.598C7.524 13.4 5.726 12.617 5.726 9.672C5.726 8.775 6.064 8.005 6.617 7.408C6.526 7.21 6.217 6.302 6.705 5.067C7.505 4.847 8.9 5.978 8.9 5.978C9.663 5.753 10.477 5.641 11.292 5.649C12.107 5.641 12.921 5.753 13.685 5.978C13.685 5.978 15.08 4.847 15.879 5.067C16.367 6.302 16.058 7.21 15.966 7.408C16.52 8.005 16.858 8.775 16.858 9.672C16.858 12.624 15.059 13.4 13.339 13.598C13.653 13.859 13.915 14.327 13.915 15.025C13.915 16.1 13.905 17.525 13.905 18.022C13.905 18.297 14.099 18.622 14.607 18.524C17.861 17.26 20.019 14.184 19.932 10.6827C19.811 5.80835 15.677 1.99937 10.784 2H10.026H10.026Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
