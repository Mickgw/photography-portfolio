import { useContext, useRef, useState } from "react";
import { ListAlbumPreview } from "./ListAlbumPreview";
import Cursor from "../../Cursor/Cursor";
import { AnimatePresence, useInView, motion } from "framer-motion";
import { ListViewCursor } from "./ListViewCursor";
import { AlbumsArchiveContext } from "@/context/AlbumsArchiveContext";
import { ALBUMS_ARCHIVE_ALBUM_ANIMATION } from "@/lib/consts";
import { VisibleAlbum, getVisibleAlbums } from "@/lib/helpers";

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
    const parentInView = useInView(listViewContainer);
    const { activeCategory } = useContext(AlbumsArchiveContext);

    const visibleAlbums: VisibleAlbum[] = getVisibleAlbums(
        albums,
        activeCategory
    );

    const getVisibleListAlbumPreview = () => {
        return visibleAlbums.map(({ album, index }) => (
            <ListAlbumPreview
                key={index}
                album={album}
                index={index}
                setActiveHoverItem={setActiveHoverItem}
                setActiveHoverItemIndex={setActiveHoverItemIndex}
            />
        ));
    };

    return (
        <div ref={listViewContainer} className="list--view hidden md:block">
            {parentInView && (
                <Cursor
                    name="list-view"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full h-full z-30"
                >
                    <AnimatePresence>
                        {showCursor && (
                            <ListViewCursor
                                albums={albums}
                                activeHoverItemIndex={activeHoverItemIndex}
                            />
                        )}
                    </AnimatePresence>
                </Cursor>
            )}

            <div className="grid grid-cols-5 border-b border-bordercolor pb-4">
                <div className="col-span-1" />
                <div className="col-span-3">
                    <label>Album</label>
                </div>
                <div className="col-span-1">
                    <label>Year</label>
                </div>
            </div>

            {albums && (
                <div
                    className="flex flex-col"
                    onMouseOverCapture={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`list-view-${activeCategory}`}
                            {...ALBUMS_ARCHIVE_ALBUM_ANIMATION}
                        >
                            <div
                                className="flex flex-col"
                                onMouseOverCapture={() => setShowCursor(true)}
                                onMouseLeave={() => setShowCursor(false)}
                            >
                                {getVisibleListAlbumPreview()}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};
