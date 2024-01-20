import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { TextMarquee } from "../Marquee/TextMarquee";

interface HeroProps {
    title?: string;
    image?: any;
}

const Hero = ({ title, image }: HeroProps) => {
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
        <section>
            <section
                ref={parallaxTrigger}
                className="single-album-hero h-[650px] md:max-h-[600px] lg:h-[750px] xl:h-screen lg:min-h-screen relative overflow-hidden"
            >
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

                {title && (
                    <motion.div
                        className="absolute bottom-0 lg:bottom-3 w-full overflow-hidden"
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
                            initialDirection="right"
                            className="lg:-mt-10 text-10xl"
                        />
                    </motion.div>
                )}
            </section>
        </section>
    );
};

export default Hero;
