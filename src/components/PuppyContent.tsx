import { FC, ReactElement, useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fetchData } from "../utils/fetchData";
import Loading from "./Loading";
import { ImageDataType } from "../utils/types";
import ImageModal from "./ImageModal";

type puppyProps = {
    puppy: string;
};

const PuppyContent: FC<puppyProps> = ({ puppy }): ReactElement => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage("");
    };

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
                            className="image"
                            cldImg={
                                new CloudinaryImage(image.public_id, {
                                    cloudName: "blackneasy",
                                })
                            }
                            onClick={() => openModal(image.public_id)}
                        />
                        {selectedImage && (
                            <ImageModal
                                imageUrl={selectedImage}
                                onClose={closeModal}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default PuppyContent;
