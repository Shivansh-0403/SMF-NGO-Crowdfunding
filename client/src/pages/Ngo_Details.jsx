import React, { useEffect, useState } from 'react'
import Details from '../components/Details'
import Ngo_Header from '../components/Ngo_Header'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Ngo_Details() {
    const ngo_id = useSelector(state => state.ngo.ngo._id)
    const [ngo, setNgo] = useState({});
    // const body = { _id: ngo_id }
    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("hello");
                console.log(ngo_id);
                const response = await axios.get(`/api/ngo/list-details/${ngo_id}`);
                const result = response.data;
                // console.log(result);
                setNgo(result.data);
                // console.log(result.data);
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