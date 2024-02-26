import { useState } from "react"
import Header from "./Header"


const Login = () => {
 
const [isSignInForm,setIsSignInForm]=useState(true);
const toggle=()=>{
  setIsSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="bg"
        />
      </div>
        <form className='w-3/12 absolute p-12 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 text-white rounded-sm'>
          <h1 className="font-bold text-4xl py-6">
            {isSignInForm?  "Sign In" : "Sign Up"}
          </h1>
          {
          !isSignInForm &&
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-gray-600"  
          />
          }
          <input  
            type="text" 
            placeholder="Email" 
            className="p-4 my-4 w-full rounded-md bg-gray-600" />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full rounded-md bg-gray-600 " />
          {
          !isSignInForm &&
          <input
            type="password"
            placeholder="Re-write Password"
            className="p-4 my-4 w-full rounded-md bg-gray-600"  
          />
          }

          <button className="py-4 my-4 bg-red-600 rounded-md w-full">{isSignInForm?  "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggle}>
          {isSignInForm?  "New to netflix? Sign Up Now" : "Already registered? Sign In Now"}
            
          </p>
        </form>
      
    </div>
  )
}

export default Login