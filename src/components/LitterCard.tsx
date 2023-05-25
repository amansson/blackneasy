import { FC } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

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
    return (
        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
            <AdvancedImage
                className="self-center flex-shrink-0 -mt-24 bg-center bg-cover rounded-full bg-gray-500"
                cldImg={
                    new CloudinaryImage(image, {
                        cloudName: "blackneasy",
                    })
                }
            />

            <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">{name}</p>
                <p>{gender}</p>
                <p>{placement}</p>
            </div>
        </div>
    );
};

export default LitterCard;
