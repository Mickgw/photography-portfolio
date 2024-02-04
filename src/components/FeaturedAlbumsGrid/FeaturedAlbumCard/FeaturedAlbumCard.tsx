import { useContext, useState } from "react";
import { FeaturedAlbumCardProps } from "../lib/props";
import { ImageComponent } from "./ImageComponent";
import Link from "next/link";
import { CursorContext } from "@/components/Cursor/context/CursorContext";
import Cursor from "@/components/Cursor/Cursor";

export const FeaturedAlbumCard = ({
    slug,
    contents,
}: FeaturedAlbumCardProps) => {
    if (!slug && !contents) return null;

    const { cursorChangeHandler } = useContext(CursorContext);
    const linkTagClass = `w-full ${
        contents?.thumbnailAspectRatio === "portret"
            ? "max-h-[800px] max-w-[600px] flex flex-col mx-auto"
            : ""
    } `;

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

    return (
        <div className="aspect-video-card-wrapper flex items-center justify-center group">
            {slug && (
                <Link
                    href={`/albums/${slug}`}
                    className={linkTagClass}
                    style={{ aspectRatio: getAspectRatio() }}
                >
                    {contents?.featuredAlbumThumbnail && (
                        <div
                            className="w-full h-full relative overflow-hidden rounded-md mb-3"
                            onMouseEnter={() =>
                                cursorChangeHandler(`featuredAlbumCardHover`)
                            }
                            onMouseLeave={() => cursorChangeHandler("")}
                        >
                            <ImageComponent
                                src={contents?.featuredAlbumThumbnail}
                                alt={contents?.title}
                                objectPosition={contents?.objectPosition}
                            />

                            <div className="categories_ z-20 absolute left-4 top-4 flex flex-wrap items-center gap-2">
                                {contents?.categories?.map(
                                    (category: string, index: number) => (
                                        <label
                                            key={index}
                                            className="py-1 text-[14px] first-letter:uppercase text-semi-expanded font-normal px-4 rounded-full bg-black/30 backdrop-blur-xl text-white"
                                        >
                                            {category}
                                        </label>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    <div className="content-wrapper w-full flex justify-between gap-8 group-hover:-translate-y-[3px] transition-transform duration-500 ease-in-out">
                        {contents?.title && (
                            <h3 className="text-[22px] font-bold">
                                {contents?.title}
                            </h3>
                        )}

                        {contents?.year && (
                            <h3 className="h-fit text-[14px] leading-[1] text-white bg-black py-2.5 px-6 rounded-full text-semi-expanded">
                                {contents?.year}
                            </h3>
                        )}
                    </div>
                </Link>
            )}
        </div>
    );
};
