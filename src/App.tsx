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
            <div className="my-10">
                <Outlet />
            </div>
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
                path: "/",
                element: <Home />,
            },
            {
                path: "animal",
                element: <Animal />,
            },
            {
                path: "photo",
                element: <Photo />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "meetup",
                element: <Meetup />,
            },
            {
                path: "puppy",
                element: <Puppy />,
            },
            {
                path: "certificate",
                element: <Certificate />,
            },
            {
                path: "litter",
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
