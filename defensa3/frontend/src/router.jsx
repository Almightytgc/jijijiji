import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./signup";
import { Login } from "./login";
import { Logueao } from "./logueado";

export const PagesRouter = createBrowserRouter([
    {
        path: "/",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/home",
        element: <Logueao />
    }
])