import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaGoogle } from "react-icons/fa";



{/* <Skeleton /> // Simple, single-line loading skeleton
<Skeleton count={5} /> // Five-line loading skeleton */}
function Login() {
  return (
    <div className=''>
      {/* Uncomment the following line if you want to show a loading spinner
      {loading && <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>} */}
      
      <Header/>
             
      <div className="max-w-sm sm:max-w-md m-auto py-10 px-8 sm:py-16 sm:px-16 rounded-md shadow-md my-20">
        <form action="">
          <h3 className="text-xl font-bold mb-6 text-black text-center">Sign In</h3>

          <input 
            type="email" 
            className=" shadow-md block w-full py-3.5 px-5 bg-slate-100 focus:bg-slate-100 rounded focus:outline-0 focus:ring-0 placeholder:text-[#878787]" 
            placeholder="Email or phone number"
          />

          <input 
            type="password" 
            className="shadow-md block w-full mt-4 py-3.5 px-5 bg-slate-100 focus:bg-slate-100 rounded focus:outline-0 focus:ring-0 placeholder:text-[#8c8c8c]" 
            placeholder="Password"
          />
<div className='flex gap-3'>
          <input 
            type="submit" 
            value="Sign In" 
            className="py-3.5 mt-8 bg-black text-white border-2 border-black text-center block w-full rounded hover:cursor-pointer font-bold text-sm hover:bg-white hover:text-black hover:border-2 hover:border-black" 
          />


           <input 
            type="submit" 
            value="Sign In with Google" 
            className="py-3.5 mt-8 bg-black text-white border-2 border-black text-center block w-full rounded hover:cursor-pointer font-bold text-sm hover:bg-white hover:text-black hover:border-2 hover:border-black" 
          />
          

</div>


          {/* <div className="flex justify-between pt-2 text-sm text-gray-400">
            <div>
              <input 
                type="checkbox" 
                id="me" 
                className="rounded checked:bg-gray-500 focus:ring-0" 
              />
              <label htmlFor="me" className="ml-0.5">Remember me</label>
            </div>
            <div>
              <a href="#" className="hover:underline">Need help?</a>
            </div>
          </div> */}

          <div className="pt-3 text-gray-500 text-center mt-2">
            New User? 
            <a href="#" className="hover:underline hover:cursor-pointer font-semibold ml-2 text-black">Sign up now</a>.
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  )
}

export default Login
