import { FC, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { ImageDataType } from "../utils/types";
import ImageModal from "./ImageModal";

type heroProps = {
    nameMother: string;
    nameFather: string;
    imageMother: string;
    imageFather: string;
    text: string;
    images: ImageDataType[];
};

const HeroPuppy: FC<heroProps> = ({
    nameMother,
    nameFather,
    imageMother,
    imageFather,
    text,
    images,
}) => {
    const [selectedImage, setSelectedImage] = useState("");
    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage("");
    };

    const cld = new Cloudinary({
        cloud: {
            cloudName: "blackneasy",
        },
    });

    return (
        <>
            <section className="bg-stone-200 text-stone-800 mb-6 py-6">
                <div className="container mx-auto flex flex-wrap text-center">
                    <div className="mx-auto mb-4 pl-2 lg:w-1/2 lg:pt-10 lg:pl-0 xl:pt-24">
                        <div className="flex justify-around items-center mb-6 px-4 lg:px-12 lg:mb-4 xl:px-32">
                            <h1 className="text-4xl font-bold lg:text-5xl">
                                {nameMother}
                            </h1>
                            <div className="">
                                <BsFillHeartFill
                                    className="inline h-12 w-12 mx-4"
                                    aria-hidden="true"
                                    color="red"
                                />{" "}
                            </div>
                            <h1 className="text-4xl font-bold lg:text-5xl">
                                {nameFather}
                            </h1>
                        </div>
                        <div>
                            <p className="text-xl mb-6 lg:mb-10">{text}</p>
                            <button className="bg-stone-800 text-white py-2 px-4 rounded cursor-default text-md md:text-lg">
                                Telefon: 0706-170833
                            </button>
                        </div>
                    </div>
                    <div className="w-full mb-8 lg:w-1/2">
                        <div className="flex flex-wrap items-center">
                            <div className="w-1/2 p-2">
                                <AdvancedImage
                                    cldImg={cld.image(imageMother)}
                                    className="image aspect-square"
                                />
                            </div>
                            <div className="w-1/2 p-2">
                                <AdvancedImage
                                    cldImg={cld.image(imageFather)}
                                    className="image aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-2">
                        <div className="columns-3 gap-2 md:gap-3 lg:columns-4">
                            {images.map((image: ImageDataType) => {
                                return (
                                    <div key={image.public_id}>
                                        <AdvancedImage
                                            className="image mb-2 md:mb-3"
                                            cldImg={cld.image(image.public_id)}
                                            onClick={() =>
                                                openModal(image.public_id)
                                            }
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroPuppy;
