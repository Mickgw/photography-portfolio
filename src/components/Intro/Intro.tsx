import React from "react";
import { ScrollOpacityText } from "../ScrollOpacityText/ScrollOpacityText";

interface IntroProps {
    welcomeText: string;
    mainText: string;
}

export const Intro = ({ welcomeText, mainText }: IntroProps) => {
    return (
        <section className="container flex gap-44 py-44">
            <div className="w-1/3 text-[22px] font-normal max-w-[350px] h-max">
                <p className="leading-[1.4]">{welcomeText}</p>
            </div>
            <div className="w-2/3">
                <ScrollOpacityText className="font-normal text-xl xl:text-[30px] gap-x-[5px] xl:gap-x-[7px] gap-y-[6px] xl:gap-y-[7px] pr-8 md:pr-0">
                    {mainText}
                </ScrollOpacityText>
                {/* <p className="text-3xl font-normal leading-[1.4]">{mainText}</p> */}
            </div>
        </section>
    );
};
