import React, { useState } from "react";
import { Link } from "react-router-dom";

const DonateLanding = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log("Searching for:", searchTerm);
        // You would typically redirect to search results or filter NGOs here
    };

    return (
        <div className="bg-gray-50 min-h-screen dark:bg-gray-900">
            {/* Hero Section with Image and Slogan */}
            <section className="relative">
                <div className="w-full h-96 overflow-hidden">
                    <img
                        src="/api/placeholder/1200/500"
                        alt="People helping in community"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Your Generosity Changes Lives
                            </h1>
                            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                                Every donation makes a difference. Find and support causes you care about.
                            </p>
                            <Link
                                to="/donate/featured"
                                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg mr-4"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Find NGOs to Support
                        </h2>
                        <form onSubmit={handleSearchSubmit} className="mb-6">
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="flex-grow">
                                    <input
                                        type="text"
                                        placeholder="Search by name or location..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
                        Browse by Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Link Cards */}
                        {[
                            { title: "Education", path: "/donate/category/education", icon: "🎓" },
                            { title: "Healthcare", path: "/donate/category/healthcare", icon: "🏥" },
                            { title: "Environment", path: "/donate/category/environment", icon: "🌱" },
                            { title: "Disaster Relief", path: "/donate/category/disaster-relief", icon: "🆘" },
                            { title: "Animal Welfare", path: "/donate/category/animal-welfare", icon: "🐾" },
                            { title: "Community Development", path: "/donate/category/community", icon: "🏘️" },
                        ].map((category, index) => (
                            <Link
                                key={index}
                                to={category.path}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center"
                            >
                                <span className="text-4xl mb-4">{category.icon}</span>
                                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Support {category.title.toLowerCase()} initiatives
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured NGOs Section */}
            <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Featured Organizations
                        </h2>
                        <Link
                            to="/donate/all"
                            className="text-red-600 hover:text-red-700 font-medium dark:text-red-400"
                        >
                            View All
                        </Link>
                    </div>

                    {/* This would be a component displaying featured NGOs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Placeholder for featured NGOs */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={`/api/placeholder/400/200`}
                                    alt="NGO thumbnail"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        Featured Organization {item}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
                                        Short description of the organization and their mission.
                                    </p>
                                    <Link
                                        to={`/donate/ngo/${item}`}
                                        className="text-red-600 hover:text-red-700 font-medium dark:text-red-400"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonateLanding;