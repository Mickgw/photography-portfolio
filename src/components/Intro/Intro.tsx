import React from "react";
import { ScrollOpacityText } from "../ScrollOpacityText/ScrollOpacityText";

interface IntroProps {
    welcomeText: string;
    mainText: string;
}

export const Intro = ({ welcomeText, mainText }: IntroProps) => {
    return (
        <section className="container flex gap-44 py-44">
            <div className="w-1/3 text-[22px] font-light max-w-[350px] h-max">
                <p className="leading-[1.4]">{welcomeText}</p>
            </div>
            <div className="w-2/3">
                <ScrollOpacityText className="font-light text-xl xl:text-[30px] gap-x-[5px] xl:gap-x-[7px] gap-y-[10px] xl:gap-y-[15px] pr-8 md:pr-0">
                    {mainText}
                </ScrollOpacityText>
            </div>
        </section>
    );
};
