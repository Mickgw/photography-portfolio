import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { TextMarquee } from "../Marquee/TextMarquee";

interface HeroProps {
    title?: string;
    image?: any;
    objectPositionHero?: string;
}

const HeroSecondary = ({ title, image, objectPositionHero }: HeroProps) => {
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
            className="h-[650px] md:max-h-[600px] lg:h-[750px] xl:h-screen lg:min-h-screen relative overflow-hidden"
        >
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
                    style={{
                        objectPosition: objectPositionHero
                            ? objectPositionHero
                            : "center",
                    }}
                />
            </motion.div>

            {title && (
                <motion.div
                    className="absolute bottom-0 lg:bottom-3 w-full overflow-hidden z-20"
                    initial={{ y: 250, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,

                        transition: {
                            delay: 0.6,
                            duration: 1.3,
                            ease: [0.33, 1, 0.68, 1],
                        },
                    }}
                >
                    <TextMarquee
                        text={title}
                        textColor="#ffffff"
                        gap={50}
                        speed={0.03}
                        initialDirection="right"
                        className="lg:-mt-10 text-10xl"
                    />
                </motion.div>
            )}
        </section>
    );
};

export default HeroSecondary;
