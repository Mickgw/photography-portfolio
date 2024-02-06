import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SpinningCircularTextArrow from "./SpinningCircularTextArrow";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "../svgs/ArrowDownRight";

interface HomeHeroProps {
    image?: any;
}

const HeroMain = ({ image }: HomeHeroProps) => {
    const parallaxTrigger = useRef<HTMLDivElement>(null);

    const parallaxImage = useRef() as React.RefObject<HTMLImageElement | null>;
    const spinningMarqueeArrow = useRef<HTMLDivElement>(null);
    const overlay = useRef<HTMLDivElement>(null);
    const arrowDownRight = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline
            .fromTo(
                parallaxImage.current,
                {
                    scale: 1.5,
                    objectPosition: "50% 0%",
                },
                {
                    scale: 1,
                    objectPosition: "50% 100%",
                    duration: 2,
                    delay: 0.75,
                    ease: "power4.out",
                }
            )

            .fromTo(
                heroTextRef.current,
                {
                    y: 400,
                },
                {
                    y: 0,
                    duration: 1.4,
                    ease: "power4.out",
                },
                "-=1.9"
            )

            .fromTo(
                spinningMarqueeArrow.current,
                {
                    y: 400,
                },
                {
                    y: 0,
                    duration: 1.4,
                    ease: "power4.out",
                },
                "-=1.9"
            );

        let scrollTriggerTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxTrigger.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        scrollTriggerTimeline
            .to(parallaxImage.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxTrigger.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            .fromTo(
                overlay.current,
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxTrigger.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            )

            .to(".arrow-down", {
                rotate: 45,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxTrigger.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            .to(arrowDownRight.current, {
                rotate: 45,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxTrigger.current,
                    start: "top top",
                    end: "bottom-=300 top",
                    scrub: true,
                },
            });
    }, []);

    return (
        <section
            ref={parallaxTrigger}
            id="section-hero"
            className="h-[650px] md:max-h-[600px] lg:h-[750px] xl:h-screen lg:min-h-screen relative overflow-hidden mb-32"
        >
            {/* Z-10 */}
            <div className="w-full h-full inset-0 overflow-hidden absolute z-10">
                <Image
                    ref={parallaxImage}
                    src={image}
                    alt="hero image"
                    fill
                    quality={100}
                    priority
                    className="object-cover"
                />
            </div>

            {/* Z-20 */}
            <div
                ref={overlay}
                className="bg-gradient-to-t from-black/80 to-transparent absolute w-full h-[500px] bottom-0 z-20"
            ></div>

            {/* Z-30 */}
            <div
                ref={spinningMarqueeArrow}
                className="absolute right-4 md:right-8 lg:right-12 xl:right-16 bottom-12 z-30"
            >
                <SpinningCircularTextArrow
                    className="w-[150px] h-[150px] "
                    arrowClassName="w-[60px] h-[60px]"
                />
            </div>

            {/* Z-30 */}
            <div
                ref={heroTextRef}
                className="absolute bottom-12 -mt-28 left-4 md:left-8 lg:left-12 xl:left-16 z-30"
            >
                <div
                    ref={arrowDownRight}
                    className="absolute z-30 -top-24 left-0"
                >
                    <ArrowDownRight className=" w-[50px] h-[50px] text-white" />
                </div>
                <p className="text-white text-2xl text-expanded mb-4">
                    some photo's by
                </p>
                <h1 className="text-white  leading-[.8] overflow-hidden relative text-expanded 2xl:font-semibold !text-8xl 2xl:!text-10xl -ml-1">
                    Mick Waanders
                </h1>
            </div>
        </section>
    );
};

export default HeroMain;
