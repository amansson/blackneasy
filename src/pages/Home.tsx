import { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import { ImageDataType } from "../utils/types";
import { BsFillHeartFill } from "react-icons/bs";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);
    const [imageData2, setImageData2] = useState<ImageDataType[]>([]);

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
            <div className="shadow-lg rounded-lg grid">
                <div className="col-span-4">
                    <h1 className="text-5xl font-semibold text-center text-slate-700">
                        Kimya
                        <BsFillHeartFill
                            className="inline h-12 w-12 ml-2 mb-2"
                            aria-hidden="true"
                            color="red"
                        />{" "}
                        Dreamboy
                    </h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center text-slate-600">
                        Valpar väntas början av Juni (Groenendael / Tervueren)
                    </p>
                </div>
                <div className="col-span-2 mb-4 flex">
                    <AdvancedImage
                        cldImg={cld.image("profile/Kimya_profile_2")}
                        className="image w-5/6"
                    />
                    <AdvancedImage
                        cldImg={cld.image("profile/Dreamboy_profile")}
                        className="image w-5/6"
                    />
                </div>

                <div className="col-span-4 masonry sm:masonry-sm md:masonry-md xl:masonry-xl">
                    {imageData.map((image: ImageDataType) => {
                        return (
                            <div
                                key={image.public_id}
                                className="rounded-lg break-inside pb-4"
                            >
                                <AdvancedImage
                                    className="image"
                                    cldImg={cld.image(image.public_id)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="masonry sm:masonry-sm md:masonry-md xl:masonry-xl">
                {imageData2.map((image: ImageDataType) => {
                    return (
                        <div
                            key={image.public_id}
                            className="rounded-lg p-4 break-inside w-full"
                        >
                            <AdvancedImage
                                className="rounded-lg shadow-xl hover:shadow-2xl"
                                cldImg={cld.image(image.public_id)}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
