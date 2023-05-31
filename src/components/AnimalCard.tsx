import { FC, ReactElement } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

type AnimalProps = {
    name: string;
    ras: string;
    image: string;
};

const AnimalCard: FC<AnimalProps> = ({ name, ras, image }): ReactElement => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "blackneasy",
        },
    });

    return (
        <div className="rounded-md shadow-md">
            <AdvancedImage
                cldImg={cld.image(image)}
                className="object-cover object-center w-full rounded-t-md h-72"
            />

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                        {name}
                    </h2>
                    <p className="">{ras}</p>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;
