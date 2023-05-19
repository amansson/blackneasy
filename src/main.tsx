import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import Animal from "./pages/Animal.tsx";
import Home from "./pages/Home.tsx";
import Photo from "./pages/Photo.tsx";
import About from "./pages/About.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/animal",
        element: <Animal />,
    },
    {
        path: "/photo",
        element: <Photo />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <div className="container mx-auto mt-6">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>
);