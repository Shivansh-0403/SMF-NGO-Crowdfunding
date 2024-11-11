import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import default_img from "../assets/home_icon.png"
import { useNavigate } from 'react-router-dom'
import { setNgoDetails } from '../features/ngoSlice';

function Profile() {
    const user = useSelector(state => state.user.user)
    const [userNgos, setUserNgos] = useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/list-ngos/${user.email}`);
                const result = response.data;
                console.log(result);
                setUserNgos(result.data);
                // console.log(result.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    const handleClick = (element) => {
        // e.preventDefault();
        console.log(element);
        dispatch(setNgoDetails(element));
        navigate("/details");
    }

    const handlePwdChange = (e) => {
        e.preventDefault();

    }

    return (
        <div className='grid grid-cols-[40%_60%] my-10'>
            <div className='text-gray-300 m-auto text-center'>
                <h1 className='text-2xl mb-2'>{user.name}</h1>
                <h2 className='text-xl mb-4'>{user.email}</h2>
                <button onClick={handlePwdChange} className="px-2 py-1 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                    Change Password
                </button>
            </div>
            <div>
                <div className='text-gray-300 text-center text-2xl mb-5'>Your Registered NGOs</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto w-[75%]">
                    {userNgos.map((ngo, index) => (
                        <div key={index} className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img src={ngo.logo !== "" ? ngo.logo : default_img} alt="" className="w-20 h-20 rounded-md ml-4 bg-cover bg-center m-auto object-cover" />
                            <div className="w-2/3 p-4 md:p-4 flex flex-col gap-2 justify-between">
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">{ngo.name}</h1>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{ngo.city}</p>
                                <div>
                                    <div className="flex items-center">
                                        {/* Display full stars */}
                                        {[...Array(Math.floor(ngo.rating))].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                            </svg>
                                        ))}
                                        {/* Display empty stars */}
                                        {[...Array(5 - Math.ceil(ngo.rating))].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-gray-500 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between mt-2 item-center">
                                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{ngo.price}</h1>
                                    <button onClick={() => handleClick(ngo)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                        Show Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile