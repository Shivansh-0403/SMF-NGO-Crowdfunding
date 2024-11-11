import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ngo_Details from './pages/Ngo_Details'
import Ngo_List from './pages/Ngo_List'
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import ResetPassword from './pages/ResetPassword'
import RegisterNgo from './pages/RegisterNgo'
import { useSelector } from 'react-redux'
import About from './pages/About'
import Profile from './pages/Profile'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_BACKEND_URL);

function App() {
  const token = useSelector(state => state.user.userLoggedIn);
  // const [clientSecret, setClientSecret] = useState("");
  // const [dpmCheckerLink, setDpmCheckerLink] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClientSecret(data.clientSecret);
  //       // [DEV] For demo purposes only
  //       setDpmCheckerLink(data.dpmCheckerLink);
  //     });
  // }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#1623d4',
      colorText: '#000000',
    },
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = 'auto';
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/listings' element={<Ngo_List />} ></Route>
        <Route path='/details' element={<Ngo_Details />} ></Route>
        <Route path='/about' element={<About />} ></Route>

        {/* {token && <Route path='/register-ngo' element={<RegisterNgo />}></Route>} */}
        <Route path="/register-ngo" element={<Navigate replace to="/login" />} />

        {/* {token && <Route path='/donate' element={<Donate />}></Route>} */}
        <Route path="/donate" element={<Navigate replace to="/login" />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />

        {token && <Route path='/profile' element={<Profile />}></Route>}
        <Route path="/profile" element={<Navigate replace to="/login" />} />

        {/* {clientSecret && (
          <Elements options={{clientSecret, appearance, loader}} stripe={stripePromise}>
            <Routes>
              <Route path="/checkout" element={<CheckoutForm dpmCheckerLink={dpmCheckerLink}/>} />
              <Route path="/complete" element={<CompletePage />} />
            </Routes>
          </Elements>
        )} */}
      </Routes>
      <Footer />
    </>
  )
}

export default App