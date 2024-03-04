import React, { useRef } from "react";
import { ParallaxElement } from "../ParallaxElement/ParallaxElement";
import { AlbumImagesColumn } from "./AlbumImagesColumn";
import Image from "next/image";

interface AlbumsImagesProps {
    albumFolder: string;
    albumPhotos: any;
}

export const AlbumsImages = ({
    albumFolder,
    albumPhotos,
}: AlbumsImagesProps) => {
    const getImageDimensions = (image: any) => {
        // Check if the image ends with "-P.jpg" or "-L.jpg"
        const isPortrait = image.endsWith("-P.jpg");
        const isLandscape = image.endsWith("-L.jpg");

        // Determine the class based on the image name
        const imageClass = isPortrait
            ? "portrait"
            : isLandscape
            ? "landscape"
            : "";

        return imageClass;
    };

    return (
        <div className="album-photos--grid">
            {albumPhotos?.map((image: any, index: number) => {
                return (
                    <div
                        key={index}
                        className={`album--photo ${getImageDimensions(image)}`}
                    >
                        <Image
                            src={`/images/${albumFolder}/${image}`}
                            fill
                            alt=""
                            priority
                            quality={85}
                            placeholder="blur"
                            sizes="
                                (min-width: 1500px) 33vw,
                                (min-width: 1024px) 30vw,
                                45vw,
                            "
                            blurDataURL={`/images/${albumFolder}/${image}`}
                        />
                    </div>
                );
            })}
        </div>
    );
};
