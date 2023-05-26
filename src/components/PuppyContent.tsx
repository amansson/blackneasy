import { FC, ReactElement, useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fetchData } from "../utils/fetchData";
import Loading from "./Loading";

type puppyProps = {
    puppy: string;
};

const PuppyContent: FC<puppyProps> = ({ puppy }): ReactElement => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);

    useEffect(() => {
        fetchData(setImageData, setLoading, puppy);
    }, [puppy]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="masonry sm:masonry-sm md:masonry-md xl:masonry-xl">
            {imageData.map((image: ImageDataType) => {
                return (
                    <div
                        key={image.public_id}
                        className="rounded-lg p-4 break-inside"
                    >
                        <AdvancedImage
                            className="h-auto max-w-full rounded-lg shadow-md"
                            cldImg={
                                new CloudinaryImage(image.public_id, {
                                    cloudName: "blackneasy",
                                })
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PuppyContent;
