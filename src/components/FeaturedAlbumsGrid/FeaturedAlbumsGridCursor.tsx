import React, { useContext } from "react";
import Cursor from "../Cursor/Cursor";
import { AnimatePresence, motion } from "framer-motion";
import { CursorContext } from "../Cursor/context/CursorContext";

export const FeaturedAlbumsGridCursor = () => {
    const { cursorType } = useContext(CursorContext);

    const cursorWidth = 100;
    const cursorHeight = cursorWidth;
    return (
        <>
            <Cursor
                name="featuredAlbumCardHoverCursor"
                width={cursorWidth}
                height={cursorHeight}
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
                            className="w-full h-full bg-gradient-to-br from-black/30 to-white/30 backdrop-blur-xl text-white overflow-hidden rounded-full"
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
        </>
    );
};
