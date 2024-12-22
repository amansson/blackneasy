import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

const Christmas = () => {
    return (
        // <Image
        //     cloudName="blackneasy"
        //     publicId="christmas"
        //     className={"center-image"}
        // >
        //     <Transformation height="500" />
        // </Image>
        <AdvancedImage
            className="mx-auto"
            cldImg={
                new CloudinaryImage("christmas", {
                    cloudName: "blackneasy",
                })
            }
        />
    );
};

export default Christmas;
