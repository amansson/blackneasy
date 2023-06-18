import { useState } from "react";
import MeetupContent from "../components/MeetupContent";

const Meetup = () => {
    const [tabContent, setTabContent] = useState<string>("meetup1");

    return (
        <section className="mx-5">
            <ul className="flex flex-wrap mt-5 font-medium text-center text-gray-500 border-b border-gray-200">
                <li className="mr-2">
                    <a
                        onClick={() => setTabContent("meetup1")}
                        aria-current="page"
                        className={`tab-button ${
                            tabContent === "meetup1" && "tab-button-active"
                        }`}
                    >
                        Träff 1
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        onClick={() => setTabContent("meetup2")}
                        className={`tab-button ${
                            tabContent === "meetup2" && "tab-button-active"
                        }`}
                    >
                        Träff 2
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        onClick={() => setTabContent("meetup3")}
                        className={`tab-button ${
                            tabContent === "meetup3" && "tab-button-active"
                        }`}
                    >
                        Träff 3
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        onClick={() => setTabContent("meetup4")}
                        className={`tab-button ${
                            tabContent === "meetup4" && "tab-button-active"
                        }`}
                    >
                        Träff 4
                    </a>
                </li>
            </ul>
            <div>
                {tabContent === "meetup1" ? (
                    <MeetupContent meetup={"meetup1"} />
                ) : (
                    ""
                )}
                {tabContent === "meetup2" ? (
                    <MeetupContent meetup={"meetup2"} />
                ) : (
                    ""
                )}
                {tabContent === "meetup3" ? (
                    <MeetupContent meetup={"meetup3"} />
                ) : (
                    ""
                )}
                {tabContent === "meetup4" ? (
                    <MeetupContent meetup={"meetup4"} />
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};

export default Meetup;
