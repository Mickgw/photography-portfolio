import React, { useContext, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FeaturedAlbumCard } from "./FeaturedAlbumCard/FeaturedAlbumCard";
import Cursor from "../Cursor/Cursor";
import { CursorContext } from "../Cursor/context/CursorContext";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "../svgs/ArrowUpRight";
import { ParallaxElement } from "../ParallaxElement/ParallaxElement";
import { TextMarquee } from "../Marquee/TextMarquee";

export const FeaturedAlbumsGrid = ({ featuredAlbums }: any) => {
    const gridWrapperTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const scrollContainerLeft = useRef() as React.RefObject<HTMLDivElement>;
    const scrollContainerRight = useRef() as React.RefObject<HTMLDivElement>;
    const { cursorType } = useContext(CursorContext);

    const evenIndexedAlbums = featuredAlbums.filter(
        (_: any, index: number) => index % 2 === 0
    );
    const oddIndexedAlbums = featuredAlbums.filter(
        (_: any, index: number) => index % 2 !== 0
    );

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: gridWrapperTrigger.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        timeline
            .to(scrollContainerLeft.current, {
                y: 75,
                ease: "none",
            })

            .to(scrollContainerRight.current, {
                y: -75,
                ease: "none",
            });
    }, []);

    return (
        <section className="container py-22 lg:py-44">
            <h2 className="mb-4">Albums</h2>
            <div className="divider w-full h-[1px] bg-slate-200 mb-20" />

            <div className="max-w-[2300px] mx-auto">
                <Cursor
                    name="featuredAlbumCardHoverCursor"
                    width={100}
                    height={100}
                    zIndex={100}
                    easingDuration={2}
                >
                    <AnimatePresence>
                        {cursorType === "featuredAlbumCardHover" && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                exit={{
                                    scale: 0,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                className="w-full h-full bg-white/[.15] backdrop-blur-2xl text-white overflow-hidden rounded-full"
                            />
                        )}
                    </AnimatePresence>
                </Cursor>

                <Cursor
                    name="featuredAlbumCardHoverCursor"
                    width={100}
                    height={100}
                    zIndex={100}
                    easingDuration={1.8}
                >
                    <AnimatePresence>
                        {cursorType === "featuredAlbumCardHover" && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                exit={{
                                    scale: 0,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                className="w-full h-full flex items-center justify-center text-white"
                            >
                                view
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Cursor>

                <div
                    ref={gridWrapperTrigger}
                    className="grid grid-cols-2 gap-20"
                >
                    <div
                        ref={scrollContainerLeft}
                        className="scroll-container-left w-full flex flex-col gap-20"
                    >
                        {oddIndexedAlbums?.map((album: any, index: number) => {
                            return (
                                <FeaturedAlbumCard
                                    key={index}
                                    slug={album?.albumFileNameForSlug}
                                    contents={album?.albumContents}
                                />
                            );
                        })}
                    </div>
                    <div
                        ref={scrollContainerRight}
                        className="scroll-container-right w-full flex flex-col gap-20"
                    >
                        {evenIndexedAlbums?.map((album: any, index: number) => {
                            return (
                                <FeaturedAlbumCard
                                    key={index}
                                    slug={album?.albumFileNameForSlug}
                                    contents={album?.albumContents}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
