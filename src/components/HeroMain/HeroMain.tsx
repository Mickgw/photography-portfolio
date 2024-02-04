import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SpinningCircularTextArrow from "./SpinningCircularTextArrow";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "../svgs/ArrowDownRight";

interface HomeHeroProps {
    image?: any;
}

const HeroMain = ({ image }: HomeHeroProps) => {
    const parallaxTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const parallaxImage = useRef() as React.RefObject<HTMLImageElement | null>;
    const spinningMarqueeArrow = useRef() as React.RefObject<HTMLDivElement>;
    const overlay = useRef() as React.RefObject<HTMLDivElement>;
    const arrowDownRight = useRef() as React.RefObject<HTMLDivElement>;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxTrigger.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        timeline
            .to(parallaxImage.current, {
                yPercent: 30,
                scale: 1.1,
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

            .to(spinningMarqueeArrow.current, {
                bottom: "150px",
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxTrigger.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            .to(arrowDownRight.current, {
                rotate: 90,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxTrigger.current,
                    start: "top top",
                    end: "bottom top",
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
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{
                    scale: 1,
                    transition: {
                        delay: 0.4,
                        duration: 1.7,
                        ease: [0.76, 0, 0.24, 1],
                    },
                }}
                className="w-full h-full inset-0 overflow-hidden absolute z-10"
            >
                <Image
                    ref={parallaxImage}
                    src={image}
                    alt="hero image"
                    fill
                    quality={100}
                    priority
                    className="object-cover object-[50%_50%]"
                />
            </motion.div>

            {/* Z-20 */}
            <div
                ref={overlay}
                className="bg-black/40 absolute w-full h-full inset-0 z-20"
            ></div>

            {/* Z-30 */}
            <div
                ref={spinningMarqueeArrow}
                className="absolute right-4 md:right-8 lg:right-12 xl:right-16 bottom-14 z-30"
            >
                <SpinningCircularTextArrow
                    className="w-[140px] h-[140px] "
                    globeClassName="w-[53px] h-[53px]"
                />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -mt-40 left-4 md:left-8 lg:left-12 xl:left-16 z-30">
                <div
                    ref={arrowDownRight}
                    className="absolute z-30 -top-32 left-0"
                >
                    <ArrowDownRight className=" w-[50px] h-[50px] text-white" />
                </div>
                <p className="text-white text-2xl text-expanded mb-4">
                    some photo's by
                </p>
                <h1 className="hero-main-title text-white leading-[1] text-expanded !text-8xl -ml-1">
                    Mick Waanders
                </h1>
            </div>
        </section>
    );
};

export default HeroMain;
