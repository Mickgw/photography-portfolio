import React from "react";
import { Paragraph } from "../Paragraph/Paragraph";

interface IntroTextProps {
    year: string;
    title: string;
    subtitle: string;
    description: string;
}

export const IntroText = ({
    year,
    title,
    subtitle,
    description,
}: IntroTextProps) => {
    return (
        <section className="container py-44">
            <div className="mb-24 max-w-3xl">
                <p className="text-[26px] text-black opacity-30 font-normal">
                    {year}
                </p>
                <h2 className="leading-[1.05] -ml-[6px] ">{title}</h2>
            </div>

            <div className="mb-12">
                <h4 className="font-normal text-highlight">{subtitle}</h4>
                <div className="w-full h-[1px] bg-slate-300"></div>
            </div>

            <div className="flex items-end justify-end text-highlight">
                <Paragraph text={description} />
            </div>
        </section>
    );
};
