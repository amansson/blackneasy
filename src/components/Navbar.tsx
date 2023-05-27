import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

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
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700bg-white">
            <div className="flex">
                <img
                    className="block h-8 w-auto md:hidden"
                    src="./assets/logo.png"
                    alt="Your Company"
                />
                <img
                    className="hidden h-8 w-auto md:block"
                    src="./assets/logo.png"
                    alt="Your Company"
                />
                <h2>Black and Easy</h2>
            </div>

            <button
                type="button"
                className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? (
                    <XMarkIcon
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        aria-hidden="true"
                    />
                ) : (
                    <Bars3Icon
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        aria-hidden="true"
                    />
                )}
            </button>

            <div
                className={
                    isMobileMenuOpen
                        ? "w-full md:flex md:items-center md:w-auto"
                        : "hidden w-full md:flex md:items-center md:w-auto"
                }
            >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    {navigation.map((item) => (
                        <li>
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    isActive
                                        ? "md:p-4 py-2 block border-purple-400 border-b-4"
                                        : "md:p-4 py-2 block hover:text-purple-400"
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
