import { FC, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import ImageModal from "./ImageModal";

type LitterCardProps = {
    name: string;
    gender: string;
    placement: string;
    image: string;
};

const LitterCard: FC<LitterCardProps> = ({
    name,
    gender,
    placement,
    image,
}) => {
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage("");
    };

    return (
        <div className="rounded-md shadow-md mb-4">
            <AdvancedImage
                cldImg={
                    new CloudinaryImage(image, {
                        cloudName: "blackneasy",
                    })
                }
                className="rounded-t-lg cursor-pointer"
                onClick={() => openModal(image)}
            />
            {selectedImage && (
                <ImageModal imageUrl={selectedImage} onClose={closeModal} />
            )}

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                        {name}
                    </h2>
                    <p className="uppercase font-semibold">{gender}</p>
                    <p>{placement}</p>
                </div>
            </div>
        </div>
    );
};

export default LitterCard;
