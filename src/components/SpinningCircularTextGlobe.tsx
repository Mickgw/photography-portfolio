import React from "react";
import { CircularText } from "./svgs/CircularText";
import { Globe } from "./svgs/Globe";

interface SpinningCircularTextProps {
    className?: string;
    circularTextClassName?: string;
    globeClassName?: string;
}

const SpinningCircularTextGlobe = ({
    className,
    circularTextClassName,
    globeClassName,
}: SpinningCircularTextProps) => {
    return (
        <div className={`${className ? className : "w-[170px] h-[170px]"}`}>
            <div className="wrapper_ relative w-full h-full">
                <CircularText
                    className={`spinning-circular-text relative text-white w-full h-full ${
                        circularTextClassName ? circularTextClassName : ""
                    }`}
                />
                <Globe
                    className={`text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 ${
                        globeClassName ? globeClassName : ""
                    }`}
                />
            </div>
        </div>
    );
};

export default SpinningCircularTextGlobe;
