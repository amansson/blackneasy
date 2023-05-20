import { useState } from "react";
import PuppyContent from "../components/PuppyContent";
import Timeline from "../components/Timeline";

const Puppy = () => {
    const [puppySelect, setPuppySelect] = useState<string>(
        "puppies_easy_kastor_1"
    );

    return (
        <>
            <div className="items-center sm:flex my-10 ml-5">
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_easy_kastor_1")}
                >
                    <Timeline
                        name={"Easy och Kastor"}
                        date={"20 November 2015"}
                    />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_vimsa_zkrutt")}
                >
                    <Timeline name={"Vimsa och Zkrutt"} date={"2016-01-12"} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_shantis_zkrutt")}
                >
                    <Timeline name={"Shantis och Zkrutt"} date={"2016-01-12"} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_vimsa_kazan")}
                >
                    <Timeline name={"Vimsa och Kazan"} date={"2016-01-12"} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_tiffy")}
                >
                    <Timeline name={"Tiffy och Hane"} date={"2016-01-12"} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_jixie_proffen")}
                >
                    <Timeline name={"Jixie och Proffen"} date={"2016-01-12"} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setPuppySelect("puppies_shantis_kazan")}
                >
                    <Timeline name={"Shantis och Kazan"} date={"2016-01-12"} />
                </div>
            </div>

            {puppySelect === "puppies_easy_kastor_1" ? (
                <PuppyContent puppy={"puppies_easy_kastor_1"} />
            ) : (
                ""
            )}
            {puppySelect === "puppies_vimsa_zkrutt" ? (
                <PuppyContent puppy={"puppies_vimsa_zkrutt"} />
            ) : (
                ""
            )}
            {puppySelect === "puppies_shantis_zkrutt" ? (
                <PuppyContent puppy={"puppies_shantis_zkrutt"} />
            ) : (
                ""
            )}
            {puppySelect === "puppies_vimsa_kazan" ? (
                <PuppyContent puppy={"puppies_vimsa_kazan"} />
            ) : (
                ""
            )}
            {puppySelect === "puppies_tiffy" ? (
                <PuppyContent puppy={"puppies_tiffy"} />
            ) : (
                ""
            )}
            {puppySelect === "puppies_jixie_proffen" ? (
                <PuppyContent puppy={"puppies_jixie_proffen"} />
            ) : (
                ""
            )}
            {puppySelect === "puppies_shantis_kazan" ? (
                <PuppyContent puppy={"puppies_shantis_kazan"} />
            ) : (
                ""
            )}
        </>
    );
};

export default Puppy;
