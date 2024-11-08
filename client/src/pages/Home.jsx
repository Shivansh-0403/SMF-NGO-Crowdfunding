import { useRef, useEffect } from 'react'
import Header from '../components/Main_Header'
// import Topngo from '../components/Topngo'
import About from './About'
import Goals from '../components/Goals'
import { useSelector, useDispatch } from 'react-redux'
// import { setScrollTarget, clearScrollTarget } from '../features/scrollSlice';

function Home() {
    const aboutRef = useRef(null);

    // const targetSection = useSelector(state => state.scroll.targetSection);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (targetSection === 'aboutSection' && aboutRef.current) {
    //         aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    //         dispatch(clearScrollTarget());
    //     }
    // }, [targetSection, dispatch]);

    return (
        <div>
            <Header></Header>
            <About ref={aboutRef}></About>
            <Goals></Goals>
            {/* <Topngo></Topngo> */}
        </div>
    )
}

export default Home