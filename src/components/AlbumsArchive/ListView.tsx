import Link from "next/link";
import React, { useRef, useState } from "react";
import { ListAlbumPreview } from "./ListAlbumPreview";
import Cursor from "../Cursor/Cursor";
import { useInView } from "framer-motion";

interface ListViewProps {
    albums: any;
}

export const ListView = ({ albums }: ListViewProps) => {
    if (!albums) {
        return <h2 className="text-5xl font-bold">No albums found...</h2>;
    }

    const listViewContainer = useRef<HTMLDivElement>(null);
    const [activeHoverItem, setActiveHoverItem] = useState("");

    console.log("activeHoverItem = ", activeHoverItem);

    const parentInView = useInView(listViewContainer);

    return (
        <div ref={listViewContainer} className="list--view">
            {parentInView && (
                <Cursor
                    name="list-view"
                    width={100}
                    height={100}
                    className="hidden lg:flex w-full h-full z-30 bg-black text-white text-center rounded-full items-center justify-center"
                >
                    <span>view</span>
                </Cursor>
            )}

            <div className="grid grid-cols-5 border-b border-bordercolor pb-4 mb-4">
                <div className="col-span-1"></div>
                <div className="col-span-3">
                    <label>Album</label>
                </div>
                <div className="col-span-1">
                    <label>Year</label>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {albums?.map((album: any, index: number) => {
                    return (
                        <ListAlbumPreview
                            key={index}
                            album={album}
                            index={index}
                            setActiveHoverItem={setActiveHoverItem}
                        />
                    );
                })}
            </div>
        </div>
    );
};
