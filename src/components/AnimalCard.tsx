import { FC, ReactElement } from "react";

type AnimalProps = {
    name: string;
    ras: string;
    image: string;
};

const AnimalCard: FC<AnimalProps> = ({ name, ras, image }): ReactElement => {
    console.log("hej");
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-neutral-100 dark:bg-gray-900 dark:text-gray-50">
            <img
                src={image}
                alt="Profile image"
                className="object-cover object-center w-full rounded-md aspect-video dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-slate-600 dark:text-violet-400">
                    {ras}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
        </div>
    );
};

export default AnimalCard;
