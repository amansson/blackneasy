import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { useEffect, useState } from "react";

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

    if (loading === true) {
        return <div>Loading data </div>;
    }

    return (
        <>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
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
            <div className="columns-4">
                {filteredData.map((image: any) => {
                    return (
                        <figure
                            key={image.public_id}
                            className="rounded-lg p-4 break-inside"
                        >
                            <AdvancedImage
                                className="rounded-lg shadow-xl hover:shadow-2xl"
                                cldImg={
                                    new CloudinaryImage(image.public_id, {
                                        cloudName: "blackneasy",
                                    })
                                }
                            />
                            <figcaption className="text-lg -mt-16 text-white px-4">
                                <div className="flex justify-between">
                                    <div>
                                        <h1>{image.context.custom.caption}</h1>
                                    </div>
                                    <div className="flex justify-around">
                                        <div className=" text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-3xl text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">
                                            {image.context.custom.Category}
                                        </div>
                                        <div className=" text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-3xl text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">
                                            {image.context.custom.type}
                                        </div>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </>
    );
};

export default Certificate;
