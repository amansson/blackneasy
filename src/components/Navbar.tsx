import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Djur", href: "/animal" },
    { name: "MH och HD", href: "/certificate" },
    { name: "Valpar", href: "/puppy" },
    { name: "Kullar", href: "/litter" },
    { name: "Om mig", href: "/about" },
    { name: "Foto", href: "/photo" },
    { name: "Kennel träff", href: "/meetup" },
];

export default function Example() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="bg-neutral-900 text-white h-8 px-8 flex justify-between">
                <div className="flex">
                    <BsFillTelephoneFill
                        className={"mt-2 ml-2 text-gray-500"}
                    />
                    <span className="pt-1.5 pl-3 text-sm">0706-170833</span>
                </div>
                <div className=" bg-gray-600 w-8">
                    <FaFacebookF className={"mt-2 ml-2"} />
                </div>
            </div>
            <nav className="flex flex-wrap items-center justify-between w-full h-20 px-4 p-0 m-0 text-neutral-900 bg-white shadow-md uppercase font-serif">
                <div className="flex">
                    <img
                        className="block h-12 w-auto md:hidden"
                        src="./assets/logo.png"
                        alt="Your Company"
                    />
                    <img
                        className="hidden h-12 w-auto md:block"
                        src="./assets/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="font-bold pt-4 md:pt-3 lg:pt-2 pl-2 lg:text-2xl md:text-lg sm:text-md">
                        Black and Easy
                    </h2>
                </div>

                <button
                    type="button"
                    className="pt-4 text-base text-gray-700 lg:flex:justify-between:pt-0"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <ImCross
                            className="h-6 w-6 cursor-pointer lg:hidden block"
                            aria-hidden="true"
                        />
                    ) : (
                        <GiHamburgerMenu
                            className="h-6 w-6 cursor-pointer lg:hidden block"
                            aria-hidden="true"
                        />
                    )}
                </button>

                <div
                    className={
                        isMobileMenuOpen
                            ? "w-full lg:flex lg:items-center lg:w-auto z-50"
                            : "hidden w-full lg:flex lg:items-center lg:w-auto"
                    }
                >
                    <ul className="text-gray-700 md:flex md:justify-between bg-white text-md font-light">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-amber-300 text-white"
                                        : "hover:bg-amber-300 text-neutral-900"
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <li className="m-0 h-20 px-2 hover:bg-amber-300 pt-7">
                                    {item.name}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
