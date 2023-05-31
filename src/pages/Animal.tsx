import { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";

const Animal = () => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);

    useEffect(() => {
        fetchData(setImageData, setLoading, ["dog", "cat"]);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="mt-5 mx-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {imageData.map((image) => {
                return (
                    <AnimalCard
                        name={image.context.custom.caption}
                        ras={image.context.custom.breed}
                        image={image.public_id}
                        key={image.public_id}
                    />
                );
            })}
        </section>
    );
};

export default Animal;
