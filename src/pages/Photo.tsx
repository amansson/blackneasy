import { fetchData } from "../utils/fetchData";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { useEffect, useState } from "react";

const PhotoCollage = () => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);

    useEffect(() => {
        fetchData(setImageData, setLoading, "gallery");
    }, []);

    if (loading === true) {
        return <div>Loading data </div>;
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

export default PhotoCollage;
