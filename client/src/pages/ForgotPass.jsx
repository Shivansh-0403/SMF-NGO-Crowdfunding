import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPass() {
  const [mail, setMail] = React.useState()
  const navigate = useNavigate()
  const handleForgot = async (e) => {
    e.preventDefault()
    try {
      const reqBody = {
        email: mail
      }

      const response = await axios.post('/api/user/forgot-password', reqBody)

      console.log(response);
      window.alert("Mail has been sent succesfully")
    } catch (error) {
      console.log(error);
    }
    navigate('/login')
  }
  return (
    <div className="flex items-center justify-center h-screen dark:bg-slate-900">
      <div className="w-full max-w-sm mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
          </div>

          <h3 className="my-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Forgot Password</h3>

          {/* <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p> */}

          <div className="w-full my-4">
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address"
              name="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)} />
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={handleForgot} >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ForgotPass