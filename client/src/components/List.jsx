import axios from 'axios';
import React, { useEffect, useState } from 'react';
import default_img from "../assets/home_icon.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNgoDetails } from '../features/ngoSlice';

function List() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ngo, setNgo] = useState()
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/list-ngos`);
                const result = response.data;
                console.log(result);
                setData(result.data);
                // console.log(result.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData(); // Call the fetchData function as soon as the component mounts
    }, []);

    const handleClick = (item) => {
        // e.preventDefault();
        setNgo(item);
        dispatch(setNgoDetails(item));
        navigate("/details");
    }

    return (
        <div className="bg-gray-900 flex justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((item, index) => (
                    <div key={index} className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        {/* <div
                            className="w-1/3 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${item.logo})`,
                                height: '150px'
                            }}
                        ></div> */}
                        <img src={item.logo !== "" ? item.logo : default_img} alt="" className="w-1/33 bg-cover bg-center h-1/2 m-auto" />
                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{item.name}</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.city}</p>
                            <div>
                                {/* {data.map((ngo) => ( */}
                                    {/* // <div key={ngo._id} className="ngo-card"> */}
                                        <div className="flex mt-2 items-center">
                                            {/* Display full stars */}
                                            {[...Array(Math.floor(item.rating))].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                                </svg>
                                            ))}
                                            {/* Display empty stars */}
                                            {[...Array(5 - Math.ceil(item.rating))].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 text-gray-500 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                                </svg>
                                            ))}
                                        </div>
                                    {/* </div> */}
                                {/* ))} */}
                            </div>

                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{item.price}</h1>
                                <button onClick={() => handleClick(item)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                    Show Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
