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
        <div className="px-4">
            <button
                onClick={handleMother}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
            >
                <AdvancedImage
                    className="object-cover rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    cldImg={
                        new CloudinaryImage(image, {
                            cloudName: "blackneasy",
                        })
                    }
                />

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 uppercase">
                        {race}
                    </p>
                </div>
            </button>
        </div>
    );
};

export default LitterMom;
