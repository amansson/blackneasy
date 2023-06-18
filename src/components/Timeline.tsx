import { FC } from "react";
import { BsFillHeartFill } from "react-icons/bs";

type TimelineProps = {
    select: (select: string) => void;
};

const Timeline: FC<TimelineProps> = ({ select }) => {
    return (
        <div className="shadow-sm mx-2 md:flex md:justify-center">
            <button
                type="button"
                className="button md:rounded-l-lg"
                onClick={() => select("puppies_easy_kastor_1")}
            >
                Easy
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Kastor
            </button>
            <button
                type="button"
                className="button"
                onClick={() => select("puppies_vimsa_zkrutt")}
            >
                Vimsa
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Zkrutt
            </button>
            <button
                type="button"
                className="button"
                onClick={() => select("puppies_shantis_zkrutt")}
            >
                Shantis
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Zkrutt
            </button>
            <button
                type="button"
                className="button"
                onClick={() => select("puppies_vimsa_kazan")}
            >
                Vimsa
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Kazan
            </button>
            <button
                type="button"
                className="button"
                onClick={() => select("puppies_tiffy")}
            >
                Tiffy
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Feyer
            </button>
            <button
                type="button"
                className="button"
                onClick={() => select("puppies_jixie_proffen")}
            >
                Jixie
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Proffen
            </button>
            <button
                type="button"
                className="button md:rounded-r-md"
                onClick={() => select("puppies_shantis_kazan")}
            >
                Shantis
                <BsFillHeartFill
                    className="inline h-4 w-4 mx-2"
                    aria-hidden="true"
                    color="red"
                />
                Kazan
            </button>
        </div>
    );
};

export default Timeline;
