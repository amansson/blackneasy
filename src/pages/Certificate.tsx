import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";

const Certificate = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [certificateData, setCertificateData] = useState<ImageDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchImageData = async () => {
        try {
            const response = await fetch(
                "https://res.cloudinary.com/blackneasy/image/list/certificate.json"
            );
            const data = await response.json();
            if (response.ok) {
                setCertificateData(data.resources);
            } else {
                console.error("Failed to fetch image data:", data);
            }
        } catch (error) {
            console.error("Error fetching image data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImageData();
    }, []);

    const handleToggleCategory = (category: string) => {
        if (categories.includes(category)) {
            setCategories((prevCategories) =>
                prevCategories.filter((cat) => cat !== category)
            );
        } else {
            setCategories((prevCategories) => [...prevCategories, category]);
        }
    };

    const filteredData =
        categories.length === 0
            ? certificateData
            : certificateData.filter((image) =>
                  categories.includes(image.context.custom.Category)
              );

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="mt-5">
            <div className="flex items-center justify-center">
                <button
                    onClick={() => setCategories([])}
                    type="button"
                    className={
                        categories.length === 0
                            ? "category-button category-button-active"
                            : "category-button"
                    }
                >
                    All
                </button>
                <button
                    onClick={() => handleToggleCategory("MH")}
                    type="button"
                    className={`category-button ${
                        categories.includes("MH")
                            ? "category-button-active"
                            : ""
                    }`}
                >
                    MH
                </button>
                <button
                    onClick={() => handleToggleCategory("HD")}
                    type="button"
                    className={`category-button ${
                        categories.includes("HD")
                            ? "category-button-active"
                            : ""
                    }`}
                >
                    HD
                </button>
                <button
                    onClick={() => handleToggleCategory("Blackneasy")}
                    type="button"
                    className={`category-button ${
                        categories.includes("Blackneasy")
                            ? "category-button-active"
                            : ""
                    }`}
                >
                    Black and Easy
                </button>
            </div>
            <div className="mx-2 columns-2 gap-2 md:columns-3 md:gap-3 lg:columns-4 lg:gap-4">
                {filteredData.map((image: ImageDataType) => {
                    return (
                        <div
                            key={image.public_id}
                            className="rounded-lg mb-2 overflow-hidden relative"
                        >
                            <div className="bg-black/75">
                                <AdvancedImage
                                    className="image object-cover aspect-video mix-blend-overlay"
                                    cldImg={
                                        new CloudinaryImage(image.public_id, {
                                            cloudName: "blackneasy",
                                        })
                                    }
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center">
                                    <h1 className="text-center text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:font-medium">
                                        {image.context.custom.caption}
                                    </h1>
                                    <div className="absolute bottom-0 left-0 w-full flex justify-center mb-3">
                                        <span className="bg-gray-800 text-gray-200 text-xs font-medium mr-3 px-2.5 py-0.5 rounded md:text-base md:font-normal">
                                            {image.context.custom.Category}
                                        </span>
                                        <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded md:text-base md:font-normal">
                                            {image.context.custom.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Certificate;
