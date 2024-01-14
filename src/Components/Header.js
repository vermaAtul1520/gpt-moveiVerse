import React, { useEffect } from 'react';
import { useAuth } from "../Utils/AuthContext";
import { auth } from '../Utils/Firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { userData } from "../Utils/userSlice"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice';
import { NETFLIX_LOG } from '../Utils/Constant'
import { toggleGptSearchView } from '../Utils/gptSlice';
import { SUPPORTED_LANG } from '../Utils/LangContant';
import { setLanguage } from '../Utils/ConfigSlice'

export const Header = () => {
  const { signout } = useAuth();
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userData);
  const showGpt = useSelector(store => store?.gpt?.showGptSearch)

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        disPatch(addUser({ uid, email, displayName: displayName }));
        navigate("/browse")
      } else {
        disPatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubcribe();
  }, [])

  const handleLogOut = async () => {
    await signout(auth);
  }

  const handleGptSearchClick = () => {
    disPatch(toggleGptSearchView());
  }

  const handleLanguage = (e) => {
    disPatch(setLanguage(e.target.value))
  }

  return (
    <div className="absolute top-0 z-10 w-full bg-gradient-to-b from-black to-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-40" src={NETFLIX_LOG} alt="Logo" />
        {user &&
          <div className="flex items-center">
            {showGpt && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguage}>
              {SUPPORTED_LANG?.map((obj) => (
                <option
                  key={obj?.identifier}
                  value={obj?.identifier}
                >{obj?.name}</option>)
              )}
            </select>}
            <button onClick={handleGptSearchClick} className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded">{showGpt ? 'HomePage' : 'Gpt Search'} </button>
            <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded ml-2">Logout</button>
            {/* <span className="text-lg font-semibold">Your App Name</span> */}
          </div>}
      </div>
    </div>
  )
}
