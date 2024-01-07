import React, {useEffect} from 'react';
import { useAuth } from "../Utils/AuthContext";
import {auth} from '../Utils/Firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {userData} from "../Utils/userSlice"
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'

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
    <div className="absolute flex justify-between z-10 w-full">
      <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
      {user && <button onClick={handleLogOut} className="px-4 py-2 bg-blue-500 text-white">LogOut</button>}
    </div>
  )
}
