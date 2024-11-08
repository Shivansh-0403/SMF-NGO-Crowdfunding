import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo_dark from "../images/smf_dark2.png"

function ResetPassword() {
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const navigate = useNavigate()
  const { id, token } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password !== confirmPassword) {
        throw new Error("Password don't match")
      }

      const reqBody = {
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/reset-password/${id}/${token}`, reqBody)
      if (!response) {
        throw new Error("Failed..")
      }
      console.log(response);
      window.alert("Password reset successful")
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen dark:bg-slate-900">
      <div className="w-full max-w-sm mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img className="w-32" src={logo_dark} alt="SMF Logo" />
          </div>

          <h3 className="my-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Forgot Password</h3>

          {/* <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p> */}

          <div className="w-full my-4">
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" aria-label="Email Address"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          </div>

          <div className="w-full my-4">
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" aria-label="Email Address"
              name="confirm" id="confirm" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={handleSubmit} >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword