import React from "react";
import { Link } from "react-router-dom";

const Ngo_Header = (props) => {
    return (
        <header className="bg-white shadow-sm dark:bg-gray-900 pt-4">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        {props.logo && (
                            <img
                                className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md"
                                src={props.logo}
                                alt={`${props.name} logo`}
                            />
                        )}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center md:text-left">
                            {props.name}
                        </h2>
                    </div>
                    
                    <Link
                        to="/donate"
                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        Donate Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Ngo_Header;