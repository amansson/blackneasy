import { FC } from "react";
import { BsCalendarCheck } from "react-icons/bs";

type TimelineProps = {
    name: string;
    date: string;
    description?: string;
};

const Timeline: FC<TimelineProps> = ({ name, date, description }) => {
    return (
        <div className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full ring-0 ring-white  sm:ring-8 shrink-0">
                    <BsCalendarCheck className="h-6 w-6 text-blue-500" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                    {date}
                </time>
                <p className="text-base font-normal text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Timeline;
