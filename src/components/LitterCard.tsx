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
        <div className="rounded-md shadow-md mb-4">
            <AdvancedImage
                cldImg={
                    new CloudinaryImage(image, {
                        cloudName: "blackneasy",
                    })
                }
                className="rounded-t-lg"
            />

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
