import { useRef, useState } from "react"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../assets/firebase";

import Header from "./Header"
import { checkValidateData ,checkValidateName} from "../assets/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../assets/userSlice";

const Login = () => {
 
const [isSignInForm,setIsSignInForm]=useState(true);
const [errormsg,setErrormsg]=useState(null);
const toggle=()=>{
  setIsSignInForm(!isSignInForm);
};

const navigate=useNavigate();
const dispatch=useDispatch();

const email=useRef(null);
const password=useRef(null);
const name=useRef(null);

const handlebtnClick=()=>{
  //validate the form data
  let message=checkValidateData(
    email.current.value,
    password.current.value
  ); 
  
  if(!isSignInForm){
    message=checkValidateData(
      email.current.value,
      password.current.value) || 
      checkValidateName(name.current.value);
  }
  setErrormsg(message);
  if (message) return;

  //logic
  if(!isSignInForm){
    createUserWithEmailAndPassword(
      auth, 
      email.current.value,
      password.current.value
    )
    .then((userCredential) => {
      
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, 
        photoURL: "https://media.licdn.com/dms/image/D5635AQFws_rprlg32g/profile-framedphoto-shrink_100_100/0/1708486910821?e=1709632800&v=beta&t=r4eC5ue1KbgIVd_aM39BZI1A4tkERuxK0LiU4_W6TpY"
      })
      .then(() => {
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser(
        { uid:uid,
          email:email,
          name:displayName,
          photoURL:photoURL}
        ));
        navigate("/browse");
        
      }).catch((error) => {
        setErrormsg(error);
        
      });
      console.log("User created successfully: ", user);
      navigate("/browse");
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrormsg(errorMessage+"-"+errorCode);
      
    });
  
  }else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log( "Logged In User :", user);
      navigate("/browse");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrormsg(errorMessage);
    });
  
  }

}


  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="bg"
        />
      </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 text-white rounded-sm'>
          <h1 className="font-bold text-4xl py-6">
            {isSignInForm?  "Sign In" : "Sign Up"}
          </h1>
          {
          !isSignInForm &&
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-gray-600"  
          />
          }
          <input
            ref={email}
            type="text" 
            placeholder="Email" 
            className="p-4 my-4 w-full rounded-md bg-gray-600" />
          <input 
            ref={password}
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

          <p className="text-red-600 text-xl px-2">{errormsg}</p>


          <button 
            className="py-4 my-4 bg-red-600 rounded-md w-full"
            onClick={handlebtnClick}>
            {isSignInForm?  "Sign In" : "Sign Up"}
          </button>
          <p className="py-3">{isSignInForm?  "New to netflix? " : "Already registered? "}
            <span className="py-4 font-bold cursor-pointer" onClick={toggle}>
              {isSignInForm?  "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      
    </div>
  )
}

export default Login