import { ALBUMS_ARCHIVE_ALBUM_ANIMATION } from "@/lib/consts";
import { motion } from "framer-motion";

interface AlbumsViewContainerProps {
    children: React.ReactNode;
}

export const AlbumsViewContainer = ({ children }: AlbumsViewContainerProps) => {
    return (
        <motion.div
            initial={ALBUMS_ARCHIVE_ALBUM_ANIMATION.initial}
            animate={ALBUMS_ARCHIVE_ALBUM_ANIMATION.animate}
            exit={ALBUMS_ARCHIVE_ALBUM_ANIMATION.exit}
        >
            {children}
        </motion.div>
    );
};
