import { useRef } from "react";
import { useInView } from "framer-motion";
import { FeaturedAlbumsGridCursor } from "./FeaturedAlbumsGridCursor";

export const FeaturedAlbumsGrid = ({ featuredAlbums }: any) => {
    const featuredAlbumsGrid = useRef<HTMLDivElement>(null);
    const parentIsInView = useInView(featuredAlbumsGrid);

    console.log("featuredAlbums = ", featuredAlbums);

    return (
        <section ref={featuredAlbumsGrid} className="container py-22 lg:py-44">
            {parentIsInView && <FeaturedAlbumsGridCursor />}

            <div className="grid grid-cols-2"></div>
        </section>
    );
};
