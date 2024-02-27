import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../assets/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Login from  './Login';
import Browse from './Browse';
import {addUser, removeUser} from '../assets/userSlice';


const Body = () => {

  const dispatch=useDispatch();
  

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },

  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUser(
        { uid:uid,
          email:email,
          name:displayName,
          photoURL:photoURL}
        ));
        
      }
      else {
        dispatch(removeUser()); 
      }

    });
  },[])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body