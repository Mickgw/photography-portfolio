import Link from "next/link";
import React, { useRef, useState } from "react";
import { ListAlbumPreview } from "./ListAlbumPreview";
import Cursor from "../Cursor/Cursor";
import { useInView } from "framer-motion";
import Image from "next/image";

interface ListViewProps {
    albums: any;
}

export const ListView = ({ albums }: ListViewProps) => {
    if (!albums) {
        return <h2 className="text-5xl font-bold">No albums found...</h2>;
    }

    const listViewContainer = useRef<HTMLDivElement>(null);
    const [activeHoverItem, setActiveHoverItem] = useState("");
    const [activeHoverItemIndex, setActiveHoverItemIndex] = useState(1);
    const [showCursor, setShowCursor] = useState(false);

    console.log("activeHoverItem = ", activeHoverItem);

    const parentInView = useInView(listViewContainer);

    return (
        <div ref={listViewContainer} className="list--view">
            {parentInView && (
                <Cursor
                    name="list-view"
                    width={325}
                    height={425}
                    className="hidden lg:block w-full h-full z-30 shadow-2xl"
                    style={{ opacity: showCursor ? 1 : 0 }}
                >
                    {albums?.map((album: any, index: number) => {
                        if (index === activeHoverItemIndex) {
                            return (
                                <div
                                    className="w-full h-full relative"
                                    key={index}
                                >
                                    <Image
                                        src={
                                            album?.contents?.featuredAlbumThumb
                                                ?.url
                                        }
                                        alt={album?.contents?.mainTitle}
                                        sizes="25vw"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Cursor>
            )}

            <div className="grid grid-cols-5 border-b border-bordercolor pb-4">
                <div className="col-span-1"></div>
                <div className="col-span-3">
                    <label>Album</label>
                </div>
                <div className="col-span-1">
                    <label>Year</label>
                </div>
            </div>
            <div
                className="flex flex-col"
                onMouseOverCapture={() => setShowCursor(true)}
                onMouseLeave={() => setShowCursor(false)}
            >
                {albums?.map((album: any, index: number) => {
                    return (
                        <ListAlbumPreview
                            key={index}
                            album={album}
                            index={index}
                            setActiveHoverItem={setActiveHoverItem}
                            setActiveHoverItemIndex={setActiveHoverItemIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
};
