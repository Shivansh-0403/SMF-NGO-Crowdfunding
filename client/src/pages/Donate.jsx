import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Donate() {
    const ngo = useSelector(state => state.ngo.ngo);
    const user = useSelector(state => state.user.user);

    const navigate = useNavigate()

    const [data, setData] = useState({
        add1: "",
        add2: "",
        city: "",
        amount: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleDonate = async (e) => {
        e.preventDefault();
        try {
            // Fetch Razorpay key
            const { data: { key } } = await axios.get("http://localhost:3000/api/payment/getkey");
    
            // Create an order in the backend
            const { data: { order } } = await axios.post("http://localhost:3000/api/payment/checkout", { amount: data.amount });
    
            // Razorpay options
            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: ngo.name,
                description: "Donation",
                image: ngo.logo,
                order_id: order.id,
                callback_url: "http://localhost:3000/api/payment/paymentverification",
                prefill: {
                    name: ngo.name,
                    email: ngo.email,
                    contact: ngo.contact
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    color: "#121212"
                }
            };
    
            // Open Razorpay checkout
            const razor = new window.Razorpay(options);
            razor.open();
            razor.close();

            if (order.status === 'created') navigate('/payment-success')
            else navigate('payment-failure')
        } catch (error) {
            console.error("Error during donation process:", error.message || error);
        }
    }

    return (
        <section className="flex items-center justify-center h-[85vh] bg-white dark:bg-gray-900">
            {/* Left Section with Image */}
            <div className="flex-1 hidden md:flex items-center justify-center bg-cover bg-center">
                <div className="bg-white dark:bg-gray-900 bg-opacity-40 w-full h-full flex flex-col gap-5 items-center justify-center">
                    <img src={ngo.logo} alt="Logo" className="w-1/5 h-auto rounded-lg" />
                    <div className="flex flex-col gap-5 text-center dark:bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200">{ngo.name}</h3>
                        <div className='flex gap-4'>
                            <a href={ngo.website}>
                                <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" >
                                    Website Link
                                </button>
                            </a>
                            <Link to='/details'>
                                <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" >
                                    Show Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[2px] h-[75%] bg-gray-300 dark:bg-gray-700 mx-4"></div>

            {/* Right Section with Form */}
            <div className="flex-1 flex items-center justify-center p-6">
                <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-6">Billing Details</h2>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg text-gray-700 dark:text-gray-300">{user.name}</h3>
                        <h3 className="text-lg text-gray-700 dark:text-gray-300">{user.email}</h3>
                    </div>

                    <div className="relative flex flex-col gap-4 mt-6">
                        <input
                            type="text"
                            name="add1"
                            id="add1"
                            placeholder="Address Line 1"
                            value={data.add1}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />

                        <input
                            type="text"
                            name="add2"
                            id="add2"
                            placeholder="Address Line 2"
                            value={data.add2}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />

                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                            value={data.city}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />

                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder="Enter Donation Amount"
                            value={data.amount}
                            onChange={handleChange}
                            className="w-full py-3 px-5 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            onClick={handleDonate}
                            className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Donate
                        </button>

                        {/* <div className="mt-4 text-center">
                            <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already have an account?
                            </Link>
                        </div> */}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Donate