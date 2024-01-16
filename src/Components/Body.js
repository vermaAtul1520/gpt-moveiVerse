import React from 'react'
import { Login } from './Login'
import { Browse } from './Browse'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { BG_CSS } from '../Utils/Constant';

export const Body = () => {

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

    return (
        <div className={BG_CSS}>
            <RouterProvider router={appRouter}>
                <Login />
                <Browse />
            </RouterProvider>
        </div>
    )
}
