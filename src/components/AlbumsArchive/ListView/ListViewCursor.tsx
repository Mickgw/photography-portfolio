import Image from "next/image";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

interface ListViewCursorProps {
    albums: any;
    activeHoverItemIndex: number;
}

export const ListViewCursor = ({
    albums,
    activeHoverItemIndex,
}: ListViewCursorProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="albums-preview-image-container w-full h-full relative drop-shadow-2xl"
        >
            {albums?.map((album: any, index: number) => {
                if (index === activeHoverItemIndex) {
                    return (
                        <Image
                            key={index}
                            src={album?.contents?.featuredAlbumThumb?.url}
                            alt={album?.contents?.mainTitle}
                            sizes="25vw"
                            fill
                            priority
                            className="object-cover z-10"
                        />
                    );
                }
            })}
        </motion.div>
    );
};
