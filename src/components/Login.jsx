import { useRef, useState } from "react"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../assets/firebase";

import Header from "./Header"
import { checkValidateData ,checkValidateName} from "../assets/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../assets/userSlice";
import { bgURL,userAvtar } from "../assets/constans";

const Login = () => {
 
const [isSignInForm,setIsSignInForm]=useState(true);
const [errormsg,setErrormsg]=useState(null);
const toggle=()=>{
  setIsSignInForm(!isSignInForm);
};


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
        photoURL: userAvtar
      })
      .then(() => {
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser(
        { uid:uid,
          email:email,
          name:displayName,
          photoURL:photoURL}
        ));
        
      }).catch((error) => {
        setErrormsg(error);
        
      });
      console.log("User created successfully: ", user);
      
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
        <img src={bgURL}
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