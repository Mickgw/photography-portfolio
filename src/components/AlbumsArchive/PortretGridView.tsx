import Link from "next/link";
import React, { useRef, useState } from "react";
import { PortretAlbumPreview } from "./PortretAlbumPreview";
import { useInView } from "framer-motion";
import Cursor from "../Cursor/Cursor";

interface PortretGridViewProps {
    albums: any;
}

export const PortretGridView = ({ albums }: PortretGridViewProps) => {
    if (!albums) {
        return <h2 className="text-5xl font-bold">No albums found...</h2>;
    }

    const portretViewContainer = useRef<HTMLDivElement>(null);
    const [showCursor, setShowCursor] = useState(false);
    const parentInView = useInView(portretViewContainer);

    return (
        <div ref={portretViewContainer} className="portret--view">
            {parentInView && (
                <Cursor
                    name="list-view"
                    width={100}
                    height={100}
                    className="hidden lg:flex w-full h-full text-white z-30 bg-white/30 rounded-full overflow-hidden backdrop-blur-xl items-center justify-center"
                    style={{ opacity: showCursor ? 1 : 0 }}
                >
                    <span>view</span>
                </Cursor>
            )}

            <div
                onMouseOverCapture={() => setShowCursor(true)}
                onMouseLeave={() => setShowCursor(false)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
            >
                {albums?.map((album: any, index: number) => {
                    return (
                        <PortretAlbumPreview
                            key={index}
                            album={album}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};
