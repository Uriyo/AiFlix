import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {addUser, removeUser} from '../assets/userSlice';
import {auth} from '../assets/firebase';
import {useSelector } from "react-redux";
import { logoURL } from "../assets/constans";
//import { removeUser } from "../assets/userSlice";




const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //const dispatch=useDispatch();
  const user=useSelector(store=>store.user);

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUser(
        { uid:uid,
          email:email,
          name:displayName,
          photoURL:photoURL}
        ));
        navigate('/browse');
      }
      else {
        dispatch(removeUser()); 
        navigate('/');

      }
    });
      //this will unsubscribe whenn component unmount
    return ()=>unsubscribe();
  },[])


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // dispatch(removeUser());
      // navigate("/")
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44"
      src={logoURL} alt="logo"
      />
      {user && (
      <div className="flex p-2">
        <img 
        className="w-12 h-12" 
        src={user.photoURL} />
        <button 
          onClick={handleSignOut} 
          className="font-bold text-white p-2  rounded-sm">
            (Sign Out)
        </button>
      </div>
      )}

      
    </div>
  )
}

export default Header