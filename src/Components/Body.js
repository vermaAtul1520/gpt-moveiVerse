import React, { useEffect } from 'react'
import { Login } from './Login'
import { Browse } from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const Body = () => {
    const disPatch= useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user innnn", user)
                disPatch(addUser(user))
            } else {
                console.log("user outttt", user)
                disPatch(removeUser());
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter}>
                <Login />
                <Browse />
            </RouterProvider>
        </div>
    )
}
