import React, { useContext, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FeaturedAlbumCard } from "./FeaturedAlbumCard/FeaturedAlbumCard";
import Cursor from "../Cursor/Cursor";
import { CursorContext } from "../Cursor/context/CursorContext";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FeaturedAlbumsGridCursor } from "./FeaturedAlbumsGridCursor";

export const FeaturedAlbumsGrid = ({ featuredAlbums }: any) => {
    const featuredAlbumsGrid = useRef<HTMLDivElement>(null);
    const gridWrapperTrigger = useRef<HTMLDivElement>(null);
    const scrollContainerLeft = useRef<HTMLDivElement>(null);
    const scrollContainerRight = useRef<HTMLDivElement>(null);

    const parentIsInView = useInView(featuredAlbumsGrid);

    const evenIndexedAlbums = featuredAlbums.filter(
        (_: any, index: number) => index % 2 === 0
    );
    const oddIndexedAlbums = featuredAlbums.filter(
        (_: any, index: number) => index % 2 !== 0
    );

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        let breakpoint = gsap.matchMedia();
        const scrollTriggerConfig = {
            trigger: gridWrapperTrigger.current || "#gridWrapperTrigger",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        };

        let timelineScrollContainerLeft = gsap.timeline({
            scrollTrigger: {
                ...scrollTriggerConfig,
            },
        });

        let timelineScrollContainerRight = gsap.timeline({
            scrollTrigger: {
                ...scrollTriggerConfig,
            },
        });

        breakpoint.add("(min-width: 768px)", () => {
            timelineScrollContainerLeft.to(scrollContainerLeft.current, {
                y: -50,
            });

            timelineScrollContainerRight.to(scrollContainerRight.current, {
                y: 50,
            });
        });

        breakpoint.add("(min-width: 1024px)", () => {
            timelineScrollContainerLeft.to(scrollContainerLeft.current, {
                y: -100,
            });

            timelineScrollContainerRight.to(scrollContainerRight.current, {
                y: 100,
            });
        });
    }, []);

    return (
        <section ref={featuredAlbumsGrid} className="container py-22 lg:py-44">
            {parentIsInView && <FeaturedAlbumsGridCursor />}

            <div
                id="gridWrapperTrigger"
                ref={gridWrapperTrigger}
                className="test grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pb-10 md:pb-44"
            >
                <div
                    ref={scrollContainerLeft}
                    className="scroll-container-left w-full flex flex-col gap-12 md:gap-14 lg:gap-20"
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
                <div
                    ref={scrollContainerRight}
                    className="scroll-container-right w-full flex flex-col gap-12 md:gap-14 lg:gap-20"
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
            </div>
        </section>
    );
};
