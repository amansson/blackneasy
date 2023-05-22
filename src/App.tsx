import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import Animal from "./pages/Animal.tsx";
import Home from "./pages/Home.tsx";
import Photo from "./pages/Photo.tsx";
import About from "./pages/About.tsx";
import Meetup from "./pages/Meetup.tsx";
import Puppy from "./pages/Puppy.tsx";
import Certificate from "./pages/Certificate.tsx";
import Navbar from "./components/Navbar.tsx";

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
    {
        path: "/meetup",
        element: <Meetup />,
    },
    {
        path: "/puppy",
        element: <Puppy />,
    },
    {
        path: "/certificate",
        element: <Certificate />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Navbar />
        <div className="container mx-auto mt-6">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>
);
