import React, { useState } from 'react'
import { Header } from './Header'
export const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toogleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='Logo' />
            </div>
            <form className="absolute w-3/12 bg-black text-white mt-36 mx-auto right-0 left-0 p-12 bg-opacity-90">
                <h1 className="font-bold text-2xl my-2">{isSignIn?'Sign-In' : 'Sign-Up'}</h1>
                {!isSignIn && <input type='text' placeholder='Name' className="my-2 p-3 w-full bg-gray-700"></input>}
                <input type='text' placeholder='Email adress' className="my-2 p-3 w-full bg-gray-700"></input>
                <input type='password' placeholder='Password' className="my-2 p-3 w-full bg-gray-700"></input>
                <button className="p-4 my-3 bg-red-700 w-full">{isSignIn?'Sign-In' : 'Sign-Up'}</button>
                <p className="cursor-pointer" onClick={toogleSignIn}>
                    {isSignIn?'New user ? Sign Up now':'Already registered ? Sign In now'}
                </p>
            </form>
        </div>
    )
}
