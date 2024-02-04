import React, { useEffect, useRef } from "react";
import { Paragraph } from "../Paragraph/Paragraph";
import { ArrowRight } from "../svgs/ArrowRight";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SpinningCircularGlobe from "../SpinningCircularTextGlobe";
import { ArrowDownLeft } from "../svgs/ArrowDownLeft";
import { useGSAP } from "@gsap/react";

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
    const arrowDesktop = useRef() as React.RefObject<HTMLImageElement>;
    const arrowTriggerResponsive =
        useRef() as React.RefObject<HTMLImageElement>;
    const arrowResponsive = useRef() as React.RefObject<HTMLImageElement>;
    const spinningTextGlobeDesktop =
        useRef() as React.RefObject<HTMLDivElement>;
    const spinningTextGlobeResponsive =
        useRef() as React.RefObject<HTMLDivElement>;
    const mainWrapperTrigger = useRef() as React.RefObject<HTMLDivElement>;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timelineDesktop = gsap.timeline();
        let timelineMobile = gsap.timeline();

        timelineDesktop
            .fromTo(
                arrowDesktop.current,
                {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                },
                {
                    y: 40,
                    rotate: 90,
                    scale: 1.2,
                    scrollTrigger: {
                        trigger: arrowTrigger.current,
                        start: "bottom bottom",
                        end: "center center",
                        scrub: true,
                    },
                }
            )

            .fromTo(
                spinningTextGlobeDesktop.current,
                {
                    top: "100px",
                },
                {
                    top: "-100px",
                    scrollTrigger: {
                        trigger: mainWrapperTrigger.current,
                        start: "top-=300 center",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

        timelineMobile
            .fromTo(
                arrowResponsive.current,
                {
                    y: -25,
                    rotate: 90,
                    scale: 1,
                },
                {
                    y: 25,
                    rotate: 0,
                    scale: 1.2,
                    scrollTrigger: {
                        trigger: arrowTriggerResponsive.current,
                        start: "bottom bottom",
                        end: "center center",
                        scrub: true,
                    },
                }
            )

            .fromTo(
                spinningTextGlobeResponsive.current,
                {
                    y: 30,
                },
                {
                    y: -30,
                    scrollTrigger: {
                        trigger: arrowTriggerResponsive.current,
                        start: "top-=200 center",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
    });

    return (
        <section
            ref={mainWrapperTrigger}
            id="section-intro-text"
            className="container pt-32"
        >
            <div className="lg:mb-24 relative">
                <div className="w-4/5 sm:w-2/3 lg:w-1/2 max-w-3xl">
                    {year && (
                        <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black opacity-30 font-normal">
                            {year}
                        </p>
                    )}

                    {title && (
                        <h2 className="-ml-[4px] lg:-ml-[6px] tracking-tight">
                            {title}
                        </h2>
                    )}
                </div>

                <div
                    ref={spinningTextGlobeDesktop}
                    className="hidden lg:block absolute top-6 right-14"
                >
                    <SpinningCircularGlobe
                        className="  w-[180px] h-[180px]"
                        globeClassName="w-[55px] h-[55px]"
                    />
                </div>
            </div>

            <div
                ref={arrowTriggerResponsive}
                className="w-full flex items-center lg:hidden justify-between relative py-14"
            >
                <div
                    ref={spinningTextGlobeResponsive}
                    className="block lg:hidden"
                >
                    <SpinningCircularGlobe
                        className=" w-[130px] sm:w-[150px] h-[130px] sm:h-[150px]"
                        globeClassName="w-[45px] h-[45px]"
                    />
                </div>

                <div ref={arrowResponsive}>
                    <ArrowDownLeft className="w-[45px] xl:w-[58px] md:h-[45px] xl:h-[58px] text-highlight" />
                </div>
            </div>

            <div className="mb-10 lg:mb-16">
                {subtitle && (
                    <h4 className="text-hightlight mb-2 font-normal text-semi-expanded">
                        {subtitle}
                    </h4>
                )}

                <div className="w-full h-[1px] bg-slate-200"></div>
            </div>

            {description && (
                <div
                    ref={arrowTrigger}
                    className="relative lg:flex lg:items-end lg:justify-end text-highlight pr-4 md:pr-6 xl:pr-10"
                >
                    <Paragraph className="w-full md:w-1/2 max-w-3xl font-normal text-xl xl:text-[26px] gap-x-[5px] xl:gap-x-[7px] gap-y-[6px] xl:gap-y-[7px] pr-8 md:pr-0">
                        {description}
                    </Paragraph>

                    <div
                        ref={arrowDesktop}
                        className="hidden lg:block absolute left-2 xl:left-4 bottom-2s xl:bottom-4"
                    >
                        <ArrowRight className="w-[45px] xl:w-[60px] md:h-[45px] xl:h-[60px] text-highlight" />
                    </div>
                </div>
            )}
        </section>
    );
};
