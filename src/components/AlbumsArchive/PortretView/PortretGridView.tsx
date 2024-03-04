import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { PortretAlbumPreview } from "./PortretAlbumPreview";
import { AnimatePresence, useInView } from "framer-motion";
import Cursor from "../../Cursor/Cursor";
import { AlbumsArchiveContext } from "@/context/AlbumsArchiveContext";
import { ALBUMS_ARCHIVE_ALBUM_ANIMATION } from "@/lib/consts";
import { motion } from "framer-motion";

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
    const { activeCategory } = useContext(AlbumsArchiveContext);

    const getAlbums = () => {
        return albums.map((album: any, index: number) => {
            const albumCategories = album?.contents?.categories;

            if (
                albumCategories.includes(activeCategory) ||
                activeCategory === "all"
            ) {
                return (
                    <PortretAlbumPreview
                        key={index}
                        album={album}
                        index={index}
                    />
                );
            }

            return null;
        });
    };

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

            {albums && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`portret-grid-${activeCategory}`}
                        initial={ALBUMS_ARCHIVE_ALBUM_ANIMATION.initial}
                        animate={ALBUMS_ARCHIVE_ALBUM_ANIMATION.animate}
                        exit={ALBUMS_ARCHIVE_ALBUM_ANIMATION.exit}
                    >
                        <div
                            onMouseOverCapture={() => setShowCursor(true)}
                            onMouseLeave={() => setShowCursor(false)}
                            className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 lg:gap-x-12 gap-y-16 lg:gap-y-20"
                        >
                            {getAlbums()}
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};
