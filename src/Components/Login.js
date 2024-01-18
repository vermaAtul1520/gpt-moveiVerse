import React, { useEffect, useRef, useState } from 'react'
import { Header } from './Header'
import { loginvalidate, signUpvalidate } from '../Utils/FormValidate'
import { useAuth } from "../Utils/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile} from "firebase/auth";
import {useDispatch} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../Utils/userSlice'
import { auth } from '../Utils/Firebase';

export const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isError, setIsError] = useState(null);

    const { signin,signup } = useAuth();
    const disPatch= useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    useEffect(() => {
        if(isError?.length){
            toast(isError,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [isError])

    const toogleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const handleSubmit = async () => {
        let Email = email?.current?.value;
        let Password = password?.current?.value;
        let Name = name?.current?.value;
        if (isSignIn) {
            let error = loginvalidate(Email,Password);

            if (error?.length) {
                setIsError(error);
                return;
            } 

            await signin(Email,Password)
                    .then((userInfo) => {
                        // const currentUser = userInfo.user
                    })
                    .catch((error) => {
                        // console.log(error);
                        setIsError(error);
                        setIsSignIn(!isSignIn);
                    })
        }
        else {
            let error = signUpvalidate(Name,Email,Password)
            if (error?.length) {
                setIsError(error);
                return;
            }

            await signup(Email, Password,Name)
                .then((userInfo) => {
                    const user = userInfo.user;
                    updateProfile(user, {
                        displayName: Name, 
                        // photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        disPatch(addUser({ uid, email, displayName: displayName }));
                    })
                })
                .catch((error) => {
                    setIsError(error);
                })
        }
    }

    return (
        <div className='h-screen'>
            <Header />
            
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-[90%] md:w-3/12 bg-black text-white mt-36 mx-auto right-0 left-0 p-12 bg-opacity-90">
                <h1 className="font-bold text-2xl my-2">{isSignIn ? 'Sign-In' : 'Sign-Up'}</h1>
                {!isSignIn &&
                    <input
                        ref={name}
                        type='text'
                        placeholder='Name'
                        className="my-2 p-3 w-full bg-gray-700">
                    </input>}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email adress'
                    className="my-2 p-3 w-full bg-gray-700">
                </input>
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className="my-2 p-3 w-full bg-gray-700">
                </input>
                <button onClick={handleSubmit} className="p-4 my-3 bg-red-700 w-full">{isSignIn ? 'Sign-In' : 'Sign-Up'}</button>
                <p className="cursor-pointer" onClick={toogleSignIn}>
                    {isSignIn ? 'New user ? Sign Up now' : 'Already registered ? Sign In now'}
                </p>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </form>
        </div>
    )
}
