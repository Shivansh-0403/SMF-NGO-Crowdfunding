import React, { useRef } from 'react'
import Header from '../components/Main_Header'
import Topngo from '../components/Topngo'
import About from './About'
import Goals from '../components/Goals'

function Home() {
    const aboutRef = useRef(null);

    // const scrollToAbout = () => {
    //     aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div>
            <Header></Header>
            <About aboutRef={aboutRef}></About>
            <Goals></Goals>
            {/* <Topngo></Topngo> */}
        </div>
    )
}

export default Home