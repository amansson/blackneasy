import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import Animal from "./pages/Animal.tsx";
import Home from "./pages/Home.tsx";
import Photo from "./pages/Photo.tsx";
import About from "./pages/About.tsx";
import Meetup from "./pages/Meetup.tsx";
import Puppy from "./pages/Puppy.tsx";
import Certificate from "./pages/Certificate.tsx";
import Navbar from "./components/Navbar.tsx";
import Litter from "./pages/Litter.tsx";
import Footer from "./components/Footer.tsx";

export const NavbarWrapper = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/blackneasy/",
                element: <About />,
            },
            {
                path: "/blackneasy/animal",
                element: <Animal />,
            },
            {
                path: "/blackneasy/photo",
                element: <Photo />,
            },
            {
                path: "/blackneasy/about",
                element: <About />,
            },
            {
                path: "/blackneasy/meetup",
                element: <Meetup />,
            },
            {
                path: "/blackneasy/puppy",
                element: <Puppy />,
            },
            {
                path: "/blackneasy/certificate",
                element: <Certificate />,
            },
            {
                path: "/blackneasy/litter",
                element: <Litter />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>
);
