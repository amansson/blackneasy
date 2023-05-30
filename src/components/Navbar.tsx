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
            <nav className="bg-gray-800 uppercase">
                <div className="mx-auto px-4 lg:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <ImCross
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <GiHamburgerMenu
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center md:justify-between md:items-stretch">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-8 w-auto"
                                    src="./assets/logo.png"
                                    alt="Your Company"
                                />
                                <h2 className="text-white">Black and Easy</h2>
                            </div>
                            <div className="hidden sm:ml-6 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-gray-700 text-white p-2 rounded-xl"
                                                    : "text-gray-300 hover:bg-gray-500 hover:text-white p-2 rounded-xl font-medium line"
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={
                                        "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }
                                    onClick={() => toggleMobileMenu()}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
