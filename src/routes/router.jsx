import { createBrowserRouter } from "react-router-dom";
import TodoApp, { loader as rootLoader } from "../pages/home/TodoApp";
import Register from "../pages/auth/Register";
import Login from "../pages/log/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <TodoApp />,
        loader: rootLoader
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },

])