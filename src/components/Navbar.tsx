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
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <XMarkIcon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Bars3Icon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
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
    );
}
