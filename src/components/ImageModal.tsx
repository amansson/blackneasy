import React, { FC } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ImageModalProps = {
    imageUrl: string;
    onClose: () => void;
};

const ImageModal: FC<ImageModalProps> = ({ imageUrl, onClose }) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            onClick={handleOverlayClick}
        >
            <div className="relative p-4 bg-white rounded-xl">
                <AdvancedImage
                    className="lg:max-w-4xl mx-auto h-auto rounded-lg"
                    cldImg={
                        new CloudinaryImage(imageUrl, {
                            cloudName: "blackneasy",
                        })
                    }
                />
                <div className="absolute top-2 right-2 m-4">
                    <XMarkIcon
                        className="h-8 w-8 bg-black text-white flex items-center justify-center cursor-pointer"
                        aria-hidden="true"
                        onClick={onClose}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
