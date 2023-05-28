import { FC, ReactElement, useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import Loading from "./Loading";
import { ImageDataType } from "../utils/types";

type meetupProps = {
    meetup: string;
};

const MeetupContent: FC<meetupProps> = ({ meetup }): ReactElement => {
    const [loading, setLoading] = useState(true);
    const [imageData, setImageData] = useState<ImageDataType[]>([]);

    useEffect(() => {
        fetchData(setImageData, setLoading, meetup);
    }, [meetup]);

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
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default MeetupContent;
