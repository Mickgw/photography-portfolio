import React, { useRef } from "react";
import { ParallaxElement } from "../ParallaxElement/ParallaxElement";
import { AlbumImagesColumn } from "./AlbumImagesColumn";

interface AlbumsImagesProps {
    albumFolder: string;
    albumPhotos: any;
}

export const AlbumsImages = ({
    albumFolder,
    albumPhotos,
}: AlbumsImagesProps) => {
    const parallaxTrigger = useRef() as React.RefObject<HTMLDivElement>;

    const createSeparateArrays = (mainArray: any) => {
        const chunkSize = Math.ceil(mainArray.length / 3);
        const chunks = [];

        for (let i = 0; i < mainArray.length; i += chunkSize) {
            chunks.push(mainArray.slice(i, i + chunkSize));
        }

        return chunks;
    };
    const [imagesColumnLeft, imagesColumnMiddle, imagesColumnRight] =
        createSeparateArrays(albumPhotos);

    return (
        <div ref={parallaxTrigger} className="grid grid-cols-3 gap-x-10 py-32">
            <ParallaxElement
                trigger={parallaxTrigger}
                yAmount={-500}
                start="top center"
            >
                <AlbumImagesColumn
                    images={imagesColumnLeft}
                    albumFolder={albumFolder}
                    className="column-left"
                />
            </ParallaxElement>

            <ParallaxElement
                trigger={parallaxTrigger}
                yAmount={0}
                start="top center"
            >
                <AlbumImagesColumn
                    images={imagesColumnMiddle}
                    albumFolder={albumFolder}
                    className="column-middle"
                />
            </ParallaxElement>

            <ParallaxElement
                trigger={parallaxTrigger}
                yAmount={500}
                start="top center"
            >
                <AlbumImagesColumn
                    images={imagesColumnRight}
                    albumFolder={albumFolder}
                    className="column-right"
                />
            </ParallaxElement>
        </div>
    );
};
