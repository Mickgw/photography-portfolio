import { useContext, useRef, useState } from "react";
import { FeaturedAlbumCardProps } from "../lib/props";
import { ImageComponent } from "./ImageComponent";
import Link from "next/link";
import { CursorContext } from "@/components/Cursor/context/CursorContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const FeaturedAlbumCard = ({
    slug,
    contents,
}: FeaturedAlbumCardProps) => {
    if (!slug && !contents) return null;

    const parallaxTrigger = useRef<HTMLDivElement>(null);
    const parallaxImage = useRef<HTMLDivElement>(null);
    const { cursorChangeHandler } = useContext(CursorContext);

    const getAspectRatio = () => {
        let aspectRatio = "";

        switch (contents?.thumbnailAspectRatio) {
            case "video":
                aspectRatio = "16/9";
                break;
            case "portret":
                aspectRatio = "5/7";
                break;
            case "square":
                aspectRatio = "1/1";
                break;
            default:
                aspectRatio = "1/1";
                break;
        }

        return aspectRatio;
    };

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let scrollTriggerTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxTrigger.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        scrollTriggerTimeline.to(parallaxImage.current, {
            yPercent: 15,
            ease: "none",
        });
    }, []);

    const linkTagClass = `featured-album-card group w-full max-h-[700px] 2xl:max-h-[900px]  ${
        contents?.thumbnailAspectRatio === "portret"
            ? "flex flex-col md:mx-auto"
            : ""
    } `;

    return (
        <div
            ref={parallaxTrigger}
            className="aspect-video-card-wrapper flex items-center md:justify-center"
        >
            {slug && (
                <Link
                    href={`/albums/${slug}`}
                    className={linkTagClass}
                    style={{ aspectRatio: getAspectRatio() }}
                >
                    {contents?.featuredAlbumThumbnail && (
                        <div
                            className="w-full h-full relative overflow-hidden rounded-md lg:rounded-xl mb-2"
                            onMouseEnter={() =>
                                cursorChangeHandler(`featuredAlbumCardHover`)
                            }
                            onMouseLeave={() => cursorChangeHandler("")}
                        >
                            <div className="hidden md:block w-full h-full absolute inset-0">
                                <ImageComponent
                                    src={contents?.featuredAlbumThumbnail}
                                    alt={contents?.title}
                                    objectPosition={contents?.objectPosition}
                                />
                            </div>

                            <div
                                ref={parallaxImage}
                                className="parallax-container block md:hidden w-full h-full absolute inset-0"
                            >
                                <ImageComponent
                                    src={contents?.featuredAlbumThumbnail}
                                    alt={contents?.title}
                                    objectPosition={contents?.objectPosition}
                                    className="scale-[1.25]"
                                />
                            </div>

                            <div className="categories_ z-20 absolute left-2 sm:left-4 top-2 sm:top-4 flex flex-wrap items-center gap-2">
                                {contents?.categories?.map(
                                    (category: string, index: number) => (
                                        <label
                                            key={index}
                                            className="h-fit py-1 text-[11px] xl:text-[12px] first-letter:uppercase text-semi-expanded font-normal px-4 rounded-full bg-gradient-to-r from-black/10 to-white/30 backdrop-blur-3xl text-white"
                                        >
                                            {category}
                                        </label>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    <div className="content-wrapper w-full flex justify-between items-center flex-wrap gap-4">
                        {contents?.title && (
                            <h3 className="text-[20px] sm:text-[22px] lg:text-[28px] leading-[1]">
                                {contents?.title}
                            </h3>
                        )}

                        {contents?.year && (
                            <h3 className="font-medium h-fit text-[16px] sm:text-[18px] lg:text-[22px] text-lightgray leading-[1]">
                                {contents?.year}
                            </h3>
                        )}
                    </div>
                </Link>
            )}
        </div>
    );
};
