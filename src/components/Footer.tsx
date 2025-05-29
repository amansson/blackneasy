import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    function getImageUrl() {
        return new URL("../../assets/logo.png", import.meta.url).href;
    }

    return (
        <div className="pt-16 mx-auto">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 px-16">
                <div className="sm:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img
                            className="block h-8 w-auto"
                            src={getImageUrl()}
                            alt="Your Company"
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Black and Easy
                        </span>
                    </a>
                    <div className="mt-6 lg:max-w-md">
                        <p className="text-sm text-gray-800">
                            En bra groenendal eller terveuren har allt,
                            arbetsvilja, stabil mentalitet och en sund exteriör
                            som följer rasstandarden. Rasen passar till lite av
                            varje.
                        </p>
                        <p className="mt-4 text-sm text-gray-800">
                            Vill du vara aktiv och ha kul med din hund så hänger
                            en belgare alltid med och tackar aldrig nej.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Namn:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Marie-Louise
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            0706-170833
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:stadning@hotmail.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            stadning@hotmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-2">
                        <a href="/">
                            <FaFacebookSquare size={"2em"} />
                        </a>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        Clicka på ikonen för sociala medier
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-6 pb-8 border-t lg:flex-row px-16">
                <p className="text-sm text-gray-600">
                    © Copyright 2025 Black and Easy.
                </p>
            </div>
        </div>
    );
};

export default Footer;
