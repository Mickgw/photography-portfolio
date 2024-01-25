import React from "react";
import { CircularTextScroll } from "../svgs/CircularTextScroll";
import { ArrowDown } from "../svgs/ArrowDown";

interface SpinningCircularTextProps {
    className?: string;
    circularTextClassName?: string;
    globeClassName?: string;
}

const SpinningCircularTextArrow = ({
    className,
    circularTextClassName,
    globeClassName,
}: SpinningCircularTextProps) => {
    return (
        <div className={`${className ? className : "w-[170px] h-[170px]"}`}>
            <div className="wrapper_ relative w-full h-full">
                <CircularTextScroll
                    className={`spinning-circular-text relative text-white w-full h-full ${
                        circularTextClassName ? circularTextClassName : ""
                    }`}
                />
                <ArrowDown
                    className={`text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 ${
                        globeClassName ? globeClassName : ""
                    }`}
                />
            </div>
        </div>
    );
};

export default SpinningCircularTextArrow;
