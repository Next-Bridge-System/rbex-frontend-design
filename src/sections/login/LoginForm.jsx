import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  return (
    <section className="relative pb-12 px-4 sm:px-6 lg:px-16 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold font-roboto text-[#141414] mb-3">Log in</h1>
        <p className="text-[#8F8F8F] text-sm font-roboto mb-8">Provide Your Details to Log in</p>
        
        <form className="space-y-6">
          <div className='flex flex-row justify-between space-x-4'>
            <div className="flex-1">
              <label htmlFor="email" className="text-sm font-medium font-roboto text-[#4C4C4C] mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border text-sm border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="password" className="text-sm font-roboto font-medium text-[#4C4C4C] mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border text-sm border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot Password?</a>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-[50%] justify-center flex mx-auto bg-[#B5151E] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Log in
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't Have an Account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500"
            onClick={()=>{
              navigate('/sign-up')
              window.scrollTo(0,0);
            }}
          >Sign Up</a>
        </p>
      </div>
    </section>
  )
}

export default LoginForm