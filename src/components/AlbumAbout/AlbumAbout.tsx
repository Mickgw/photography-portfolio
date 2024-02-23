import React from "react";
import { ScrollOpacityText } from "../ScrollOpacityText/ScrollOpacityText";

interface AlbumAboutProps {
    textLeft: string;
    textRight: string;
}

export const AlbumAbout = ({ textLeft, textRight }: AlbumAboutProps) => {
    return (
        <div className="container flex flex-col xl:flex-row gap-10 xl:gap-24 py-16 sm:py-24 md:py-32 lg:py-36 xl:py-44 relative">
            {textLeft && (
                <div className="w-9/10 xl:w-[55%] max-w-[850px]">
                    <ScrollOpacityText className="text-2xl gap-x-[5px] xl:gap-x-[7px] gap-y-[10px] md:gap-y-[12px] lg:gap-y-[16px] textpadding">
                        {textLeft}
                    </ScrollOpacityText>
                </div>
            )}

            {textRight && (
                <p className="w-9/10 xl:w-[45%] max-w-[850px] font-normal text-[13px] md:text-[16px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] textpadding xl:!pr-0">
                    {textRight}
                </p>
            )}
        </div>
    );
};
