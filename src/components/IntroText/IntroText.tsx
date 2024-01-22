import React, { useEffect, useRef } from "react";
import { Paragraph } from "../Paragraph/Paragraph";
import { CircularText } from "../svgs/CircularText";
import { Globe } from "../svgs/Globe";
import { ArrowRight } from "../svgs/ArrowRight";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SpinningCircularText from "../SpinningCircularText";
import { ArrowDownLeft } from "../svgs/ArrowDownLeft";

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
    const arrowTrigger = useRef() as React.RefObject<HTMLImageElement>;
    const arrow = useRef() as React.RefObject<HTMLImageElement>;

    const arrowTriggerResponsive =
        useRef() as React.RefObject<HTMLImageElement>;
    const arrowResponsive = useRef() as React.RefObject<HTMLImageElement>;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timelineDesktop = gsap.timeline();
        let timelineMobile = gsap.timeline();

        timelineDesktop.fromTo(
            arrow.current,
            {
                rotate: 0,
                scale: 1,
            },
            {
                rotate: 90,
                scale: 1.2,
                scrollTrigger: {
                    trigger: arrowTrigger.current,
                    start: "bottom bottom",
                    end: "center center",
                    scrub: true,
                },
            }
        );

        timelineMobile.fromTo(
            arrowResponsive.current,
            {
                rotate: 90,
                scale: 1,
            },
            {
                rotate: 0,
                scale: 1.2,
                scrollTrigger: {
                    trigger: arrowTriggerResponsive.current,
                    start: "bottom bottom",
                    end: "center center",
                    scrub: true,
                },
            }
        );
    });

    return (
        <section className="">
            <div className="lg:mb-24 relative">
                <div className="w-4/5 sm:w-2/3 lg:w-1/2 max-w-3xl">
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black opacity-30 font-normal">
                        {year}
                    </p>
                    <h2 className="-ml-[4px] lg:-ml-[6px] tracking-tight">
                        {title}
                    </h2>
                </div>

                <SpinningCircularText
                    className="hidden lg:block absolute top-6 right-14 w-[180px] h-[180px]"
                    globeClassName="w-[55px] h-[55px]"
                />
            </div>

            <div
                ref={arrowTriggerResponsive}
                className="w-full flex items-center lg:hidden justify-between relative py-14"
            >
                <SpinningCircularText
                    className="block lg:hidden w-[130px] sm:w-[150px] h-[130px] sm:h-[150px]"
                    globeClassName="w-[45px] h-[45px]"
                />

                <div ref={arrowResponsive}>
                    <ArrowDownLeft className="w-[45px] xl:w-[64px] md:h-[45px] xl:h-[64px] text-highlight" />
                </div>
            </div>

            <div className="mb-8 lg:mb-12">
                <h4 className="text-highlight ">{subtitle}</h4>
                <div className="w-full h-[1px] bg-slate-300"></div>
            </div>

            <div
                ref={arrowTrigger}
                className="relative lg:flex lg:items-end lg:justify-end text-highlight pr-4 md:pr-6 xl:pr-10"
            >
                <Paragraph className="w-full md:w-1/2 max-w-3xl text-xl xl:text-2xl font-normal gap-x-[5px] xl:gap-x-[7px] gap-y-[6px] xl:gap-y-[7px] pr-8 md:pr-0">
                    {description}
                </Paragraph>

                <div
                    ref={arrow}
                    className="hidden lg:block absolute left-2 xl:left-4 bottom-2s xl:bottom-4"
                >
                    <ArrowRight className="w-[45px] xl:w-[64px] md:h-[45px] xl:h-[64px] text-highlight" />
                </div>
            </div>
        </section>
    );
};
