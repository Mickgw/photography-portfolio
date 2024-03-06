import { getIndex } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AlbumsArchiveContext } from "@/context/AlbumsArchiveContext";

interface PortretAlbumPreviewProps {
    album: any;
    index: number;
}

export const PortretAlbumPreview = ({
    album,
    index,
}: PortretAlbumPreviewProps) => {
    if (!album) return null;

    const { activeCategory } = useContext(AlbumsArchiveContext);
    const content = album?.contents;
    const imageObjectPosition = content?.featuredAlbumThumb?.object_position
        ? album?.featuredAlbumThumb?.object_position
        : "center";

    const parallaxContainer = useRef<HTMLDivElement | null>(null);
    const parallaxImage = useRef<HTMLImageElement | null>(null);
    const parallaxAmount = 150;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline.to(parallaxImage.current, {
            y: parallaxAmount,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxContainer?.current,
                pin: false,
                scrub: true,
                invalidateOnRefresh: true,
            },
        });
    });

    return (
        <Link href={`albums/${album?.slug}`}>
            <div className="w-full aspect-[9/12] sm:aspect-[9/13] lg:aspect-[9/14] relative overflow-hidden">
                <div className="w-full h-full" ref={parallaxContainer}>
                    <div
                        className="absolute inset-x-0 w-full"
                        style={{
                            height: `calc(100% + ${parallaxAmount}px)`,
                            top: -parallaxAmount,
                        }}
                        ref={parallaxImage}
                    >
                        <div className="w-full h-full relative">
                            {content?.featuredAlbumThumb?.url && (
                                <Image
                                    src={content?.featuredAlbumThumb?.url}
                                    alt={content?.mainTitle}
                                    fill
                                    quality={100}
                                    sizes="(max-width: 640px) 90vw, 45vw"
                                    className="object-cover"
                                    style={{
                                        objectPosition: imageObjectPosition,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {!content?.featuredAlbumThumb?.url && (
                    <div className="absolute inset-0 w-full h-full bg-lightgray flex items-center justify-center">
                        <h1 className="text-[40px] font-bold text-center">
                            Image not found
                        </h1>
                    </div>
                )}

                <h2></h2>

                <h2 className="absolute right-3 bottom-3 tracking-[-5px] text-white/30 text-10xl font-bold leading-[.8]">
                    {getIndex(index)}
                </h2>
            </div>
        </Link>
    );
};
