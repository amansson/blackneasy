import { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";
import ImageModal from "../components/ImageModal";
import Christmas from "../components/Christmas";

const Home = () => {
    const [loading, setLoading] = useState(true);
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
        fetchData(setImageData2, setLoading, "home");
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Christmas />
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
