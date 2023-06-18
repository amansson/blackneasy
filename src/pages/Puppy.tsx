import { useState } from "react";
import PuppyContent from "../components/PuppyContent";
import Timeline from "../components/Timeline";

const Puppy = () => {
    const [puppySelect, setPuppySelect] = useState<string>(
        "puppies_easy_kastor_1"
    );

    const onSelect = (item: string) => {
        setPuppySelect(item);
    };

    return (
        <section className="mt-5">
            <Timeline select={onSelect} />

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
        </section>
    );
};

export default Puppy;
