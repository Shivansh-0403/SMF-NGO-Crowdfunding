import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import default_img from "../assets/home_icon.png"
import { useNavigate } from 'react-router-dom'
import { setNgoDetails } from '../features/ngoSlice';

function Transactions() {
    // const user = useSelector(state => state.user.user)
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    const [userTransactions, setUserTransactions] = useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        else {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/payment/user-transactions/${user.email}`);
                    const result = response.data;
                    console.log(result);
                    setUserTransactions(result.data);
                    // console.log(result.data);
                } catch (err) {
                    console.log(err.message);
                }
            };
    
            fetchData();
        }
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
                <div className='text-gray-300 text-center text-2xl mb-5'>Transaction History</div>
                <dl className="divide-y divide-gray-100 text-md bg-white dark:bg-gray-900 rounded-lg overflow-hidden">    
                    {userTransactions.map((txn, index) => (
                        // index % 2 == 0 ?
                            <div key={index} className="flex justify-evenly p-3 w-[75%] even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4 rounded-lg m-auto">
                                <dt className="font-medium text-gray-900 dark:text-gray-100">${txn.amount}</dt>
                                <dt className="text-gray-700 dark:text-gray-300 sm:col-span-2">{txn.ngo.name}</dt>
                                <dt className="text-gray-700 dark:text-gray-300 sm:col-span-2">{txn.razorpay_payment_id}</dt>
                                <dt className="text-gray-700 dark:text-gray-300 sm:col-span-2">{txn.payment_status}</dt>
                            </div>
                            // :
                            // <div key={index} className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                            //     <dt className="font-medium text-gray-900 dark:text-gray-100">Owner</dt>
                            //     <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2"></dd>
                            // </div>
                        )
                    )}
                </dl>
            </div>
        </div>
    )
}

export default Transactions