import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SpinningCircularTextArrow from "./SpinningCircularTextArrow";

interface HomeHeroProps {
    image?: any;
}

const HomeHero = ({ image }: HomeHeroProps) => {
    const parallaxTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const parallaxImage = useRef() as React.RefObject<HTMLImageElement | null>;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline.to(parallaxImage.current, {
            yPercent: 30,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxTrigger.current,
                start: "top 0%",
                end: "bottom 0%",
                scrub: true,
            },
        });
    });
    return (
        <section
            ref={parallaxTrigger}
            id="section-hero"
            className="cursor-pointer h-[650px] md:max-h-[600px] lg:h-[750px] xl:h-screen lg:min-h-screen relative overflow-hidden mb-32"
        >
            <SpinningCircularTextArrow
                className="w-[165px] h-[165px] absolute right-14 bottom-14 z-20"
                globeClassName="w-[65px] h-[65px]"
            />

            <div className="absolute z-10 bottom-0 w-full h-[150px] opacity-40 bg-gradient-to-t from-black to-transparent"></div>
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
                className="w-full h-full inset-0 overflow-hidden absolute"
            >
                <Image
                    ref={parallaxImage}
                    src={image}
                    alt="hero image"
                    fill
                    priority
                    className="object-cover object-[50%_10%]"
                />
            </motion.div>
        </section>
    );
};

export default HomeHero;
