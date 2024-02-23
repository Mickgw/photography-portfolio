import React from "react";
import { ArrowRight } from "../svgs/ArrowRight";
import { ScrollText } from "../ScrollText/ScrollText";

interface ScrollTitleWithYearProps {
    title: string;
    year: string;
}

export const ScrollTitleWithYear = ({
    title,
    year,
}: ScrollTitleWithYearProps) => {
    return (
        <div className="py-0 relative">
            {/* {year && (
                <div className="container flex items-center justify-start">
                    <h2 className="absolute -z-10 top-1/2 -translate-y-1/2 w-fit text-[330px] text-right leading-[1] text-lightgray font-bold tracking-[-15px]">
                        {year}
                    </h2>
                </div>
            )} */}

            <ScrollText text={title} />
        </div>
    );
};
