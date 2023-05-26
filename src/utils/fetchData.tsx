const fetchImageData = async (
    litter: string | string[]
): Promise<ImageDataType[]> => {
    try {
        const entries = Array.isArray(litter) ? litter : [litter];

        const promises = entries.map(async (entry) => {
            const response = await fetch(
                `https://res.cloudinary.com/blackneasy/image/list/${entry}.json`
            );
            const data = await response.json();
            if (response.ok) {
                return data.resources;
            } else {
                console.error("Failed to fetch image data:", data);
                return [];
            }
        });

        const imageData = await Promise.all(promises);
        const combinedData = imageData.reduce(
            (acc, curr) => acc.concat(curr),
            []
        );
        return combinedData;
    } catch (error) {
        console.error("Error fetching image data:", error);
        return [];
    }
};

export const fetchData = async (
    setData: React.Dispatch<React.SetStateAction<ImageDataType[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    breed: string
) => {
    try {
        const data = await fetchImageData(breed);
        setData(data);
    } finally {
        setLoading(false);
    }
};
