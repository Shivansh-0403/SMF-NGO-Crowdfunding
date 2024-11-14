import React, { useState } from 'react';
import header_img from "../assets/sewa_parmo_dharm.jpg"
import { Link } from 'react-router-dom';
const Main_Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900">
            <div className="container px-6 pt-16 py-2 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg  m-auto">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                                Seva Mein Funds <br /> NGO{' '}
                                <span className="text-blue-500">Crowdfunding Platform</span>
                            </h1>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                At SMF, we are trying to promote the good work of NGOs, support and encourage them
                                with your support.
                            </p>
                            <Link to="/donate">
                                <button className="w-full px-5 py-2 mt-6 text-lg font-medium tracking-wider text-white transition-colors duration-300 transform bg-blue-700 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    Donate
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex w-full mt-6 lg:mt-0 lg:w-1/4 m-auto">
                        <img
                            className="rounded-full"
                            src={header_img}
                            alt="Catalogue-pana"
                        />
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
            </div>
        </header>
    );
};

export default Main_Header;
