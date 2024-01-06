import React from 'react';
import { useAuth } from "../Utils/AuthContext";
import {auth} from '../Utils/Firebase';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    console.log("logout clickkkeddd....")
    await signout(auth);
    navigate('/');
  }
  return (
    <div className="absolute flex justify-between z-10 w-full">
        <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
      <button onClick={handleLogOut} className="px-4 py-2 bg-blue-500 text-white">LogOut</button>
    </div>
  )
}
