import React, { useEffect, useState } from 'react'
import Details from '../components/Details'
import Ngo_Header from '../components/Ngo_Header'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setNgoDetails } from '../features/ngoSlice'

function Ngo_Details() {
    const ngo_id = useSelector(state => state.ngo.ngo._id)
    const [ngo, setNgo] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("hello");
                console.log(ngo_id);
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/list-details/${ngo_id}`);
                const result = response.data;
                setNgo(result.data);
                // console.log(result.data);
                dispatch(setNgoDetails(result.data));
                // console.log(ngo);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData(); // Call the fetchData function as soon as the component mounts
    }, []);

    return (
        <div>
            <Ngo_Header 
                logo={ngo.logo}
                name={ngo.name}
            >
            </Ngo_Header>
            <Details 
                data={ngo}
            ></Details>
        </div>
    )
}

export default Ngo_Details