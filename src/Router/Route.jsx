import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/Root/RootLayout";
import Home from "../Pages/Home/Home";
import LoginLayout from "../Pages/Login/LoginLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
               path: 'login',
               Component: LoginLayout 
            }
        ]
    }
])