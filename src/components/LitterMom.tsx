import { FC } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

type LitterMomProps = {
    name: string;
    race: string;
    image: string;
    sendData: (mother: string) => void;
    mother: string;
};

const LitterMom: FC<LitterMomProps> = ({
    name,
    race,
    image,
    sendData,
    mother,
}) => {
    const handleMother = () => {
        sendData(mother);
    };

    return (
        <button onClick={handleMother} className="w-60">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="w-1/3">
                    <AdvancedImage
                        className="h-16 object-cover"
                        cldImg={
                            new CloudinaryImage(image, {
                                cloudName: "blackneasy",
                            })
                        }
                    />
                </div>

                <div className="w-2/3">
                    <h5 className="font-bold text-gray-900">{name}</h5>
                    <p className="font-normal text-gray-700 uppercase">
                        {race}
                    </p>
                </div>
            </div>
        </button>
    );
};

export default LitterMom;
