import { useEffect, useState } from "react";
import LitterCard from "../components/LitterCard";
import LitterMom from "../components/LitterMom";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";
import { fetchData } from "../utils/fetchData";

type LitterMotherType = {
    [key: string]: string[];
};

const littersMotherData: LitterMotherType[] = [
    { easy: ["easy3", "easy2", "easy1"] },
    { vimsa: ["brood_vimsa_3", "brood_vimsa_2", "brood_vimsa_1"] },
    { jixie: ["jixie1"] },
    { shantis: ["shantis2", "shantis1"] },
];

const litterMoms = [
    {
        name: "Easy",
        race: "groenendael",
        image: "profile/Easy_profile",
        mother: "easy",
    },
    {
        name: "Vimsa",
        race: "groenendael",
        image: "profile/Vimsa_profile",
        mother: "vimsa",
    },
    {
        name: "Jixie",
        race: "tervuerense",
        image: "profile/Jixie_profile",
        mother: "jixie",
    },
    {
        name: "Shantis",
        race: "groenendael",
        image: "profile/Shantis_profile",
        mother: "shantis",
    },
];

const Litter = () => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);
    const [litterMother, setLitterMother] = useState<string[]>(
        littersMotherData[0].easy
    );

    useEffect(() => {
        fetchData(setImageData, setLoading, litterMother);
    }, [litterMother]);

    if (loading) {
        return <Loading />;
    }

    const handleMother = (mother: string) => {
        const extractedArray =
            littersMotherData.find((obj) => Object.keys(obj)[0] === mother)?.[
                mother
            ] || [];
        setLitterMother(extractedArray);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <section className="flex flex-wrap gap-4 justify-center mt-5">
                {litterMoms.map(({ name, race, image, mother }) => (
                    <LitterMom
                        key={mother}
                        name={name}
                        race={race}
                        image={image}
                        sendData={handleMother}
                        mother={mother}
                    />
                ))}
            </section>

            <section>
                <div className="flex flex-col items-center justify-center p-4">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        Kullar
                    </p>
                    <h1 className="text-4xl font-bold leading-none text-center">
                        Kastor och Easy
                    </h1>
                </div>
                <div className="mt-6 mx-4 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
                    {imageData.map((image: ImageDataType) => {
                        return (
                            <LitterCard
                                key={image.public_id}
                                name={image.context.custom.caption}
                                gender={image.context.custom.gender}
                                placement={image.context.custom.location}
                                image={image.public_id}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Litter;
