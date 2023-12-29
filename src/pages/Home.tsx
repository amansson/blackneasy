import { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";
import HeroPuppy from "../components/HeroPuppy";
import ImageModal from "../components/ImageModal";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);
    const [imageData2, setImageData2] = useState<ImageDataType[]>([]);
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

    useEffect(() => {
        fetchData(setImageData, setLoading, "breed_kimya_dreamboy");
        fetchData(setImageData2, setLoading, "home");
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <HeroPuppy
                nameMother={"Kimya"}
                nameFather={"Dreamboy"}
                imageMother={"profile/Kimya_profile_2"}
                imageFather={"profile/Dreamboy_profile"}
                text={
                    "Kimya parad Väntar valpar mars 2024 - Leverans klara maj."
                }
                images={imageData}
            />

            <div className="masonry-md xl:masonry-xl">
                {imageData2.map((image: ImageDataType) => {
                    return (
                        <div
                            key={image.public_id}
                            className="rounded-lg p-4 break-inside w-full"
                        >
                            <AdvancedImage
                                className="rounded-lg shadow-xl hover:shadow-2xl"
                                cldImg={cld.image(image.public_id)}
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
        </>
    );
};

export default Home;
