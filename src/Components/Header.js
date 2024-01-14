import React, {useEffect} from 'react';
import { useAuth } from "../Utils/AuthContext";
import {auth} from '../Utils/Firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {userData} from "../Utils/userSlice"
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice';
import {NETFLIX_LOG} from '../Utils/Constant'

export const Header = () => {
  const { signout } = useAuth();
  const disPatch= useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userData);

  useEffect(() => {
     const unsubcribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            disPatch(addUser({ uid, email, displayName:displayName }));
            navigate("/browse")
        } else {
            disPatch(removeUser());
            navigate("/")
        }
    });

    return ()=> unsubcribe();
}, [])

  const handleLogOut = async () => {
    await signout(auth);
  }
  return (
    <div className="absolute top-0 z-10 w-full bg-gradient-to-b from-black to-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img className="w-40" src={NETFLIX_LOG} alt="Logo" />
            <span className="text-lg font-semibold">Your App Name</span>
        </div>
        {user && <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Logout</button>}
      </div>
    </div>
  )
}
