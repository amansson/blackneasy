import { useEffect, useState } from "react";
import LitterCard from "../components/LitterCard";
import LitterMom from "../components/LitterMom";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";

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
    const [loading, setLoading] = useState<boolean>(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);
    const [litterMother, setLitterMother] = useState<string[]>([]);

    const fetchImageData = async (litter: string[]) => {
        try {
            const promises = litter.map(async (entry) => {
                const response = await fetch(
                    `https://res.cloudinary.com/blackneasy/image/list/${entry}.json`
                );
                const data = await response.json();
                if (response.ok) {
                    return data.resources;
                } else {
                    console.error("Failed to fetch image data:", data);
                    return [];
                }
            });

            const imageData = await Promise.all(promises);
            const combinedData = imageData.reduce(
                (acc, curr) => acc.concat(curr),
                []
            );
            setImageData(combinedData);
        } catch (error) {
            console.error("Error fetching image data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleMother = (mother: string) => {
        const extractedArray =
            littersMotherData.find((obj) => Object.keys(obj)[0] === mother)?.[
                mother
            ] || [];
        setLitterMother(extractedArray);
    };

    useEffect(() => {
        fetchImageData(litterMother);
    }, [litterMother]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <section className="container flex flex-col-4 justify-betweem">
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

            <section className="">
                <div className="container flex flex-col items-center justify-center p-4 sm:p-10">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        Kullar
                    </p>
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
                        Kastor och Easy
                    </h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-24">
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
                </div>
            </section>
        </>
    );
};

export default Litter;
