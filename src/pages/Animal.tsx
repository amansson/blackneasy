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
        <div className="flex flex-wrap gap-4">
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
        </div>
    );
};

export default Animal;
