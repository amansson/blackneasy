import AnimalCard from "../components/AnimalCard";

const animals = [
    {
        name: "Kimya",
        ras: "Groenendael",
        image: "https://source.unsplash.com/random/300x600/?1",
    },
    {
        name: "Leda",
        ras: "Groenendael",
        image: "https://source.unsplash.com/random/500x500/?1",
    },
    {
        name: "Vimsa",
        ras: "Groenendael",
        image: "https://source.unsplash.com/random/800x400/?1",
    },
    {
        name: "Nasse",
        ras: "Groenendael",
        image: "https://source.unsplash.com/random/500x500/?1",
    },
];

const Animal = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {animals.map((element) => {
                return (
                    <AnimalCard
                        name={element.name}
                        ras={element.ras}
                        image={element.image}
                    />
                );
            })}
        </div>
    );
};

export default Animal;
