import FetchData from "../utils/fetchData";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

const PhotoCollage = () => {
    const imageData: any = FetchData(
        "https://res.cloudinary.com/blackneasy/image/list/gallery.json"
    );
    if (!imageData.response) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="masonry sm:masonry-sm md:masonry-md xl:masonry-xl">
            {imageData.response.resources.map((image: any, index: number) => {
                return (
                    <div className="rounded-lg p-4 break-inside">
                        <AdvancedImage
                            className="h-auto max-w-full rounded-lg shadow-md"
                            key={image.public_id}
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

export default PhotoCollage;
