import { getIndex } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

interface ListAlbumPreviewProps {
    album: any;
    index: number;
    setActiveHoverItem: React.Dispatch<React.SetStateAction<string>>;
}

export const ListAlbumPreview = ({
    album,
    index,
    setActiveHoverItem,
}: ListAlbumPreviewProps) => {
    if (!album) return null;

    const content = album?.contents;

    return (
        <Link
            href={`albums/${album?.slug}`}
            onMouseEnter={() => setActiveHoverItem(`list-item-${index}`)}
            onMouseLeave={() => setActiveHoverItem("")}
            className="grid grid-cols-5 border-b border-bordercolor py-8 group"
        >
            <div className="col-span-1">
                <h2 className="text-9xl font-bold text-lightgray tracking-[-5px] leading-[.8] group-hover:brightness-[.85] transition-all duration-500 ease-in-out">
                    {getIndex(index)}
                </h2>
            </div>
            <div className="col-span-3 max-w-[650px]">
                {content?.mainTitle && (
                    <h2 className="text-5xl font-medium leading-[1.1] mb-4">
                        {content?.heroTitle}
                    </h2>
                )}

                {content?.categories && (
                    <div className="flex flex-wrap gap-2">
                        {content?.categories.map(
                            (category: any, index: number) => (
                                <label
                                    key={index}
                                    className="border-bordercolor bg-white text-primary first-letter:uppercase text-[12px] border py-2.5 px-8 min-w-[75px] rounded-full z-0 overflow-hidden group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-in-out"
                                >
                                    {category}
                                </label>
                            )
                        )}
                    </div>
                )}
            </div>
            <div className="col-span-1">
                <h2 className="text-[85px] font-semibold leading-[.9] text-lightgray group-hover:brightness-[.85] transition-all duration-500 ease-in-out">
                    {content?.year}
                </h2>
            </div>
        </Link>
    );
};
