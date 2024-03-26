import { useContext } from "react";
import Image from "next/image";
import { ImageModalContext } from "@/context/ImageModalContext";
import { AlbumsImagesProps } from "@/lib/props";
import { motion } from "framer-motion";

export const AlbumsImages = ({
    albumFolder,
    albumPhotos,
}: AlbumsImagesProps) => {
    const { activeImageChangeHandler, showModal } =
        useContext(ImageModalContext);

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
                        onClick={() => {
                            activeImageChangeHandler(index);
                            showModal();
                        }}
                    >
                        <Image
                            src={`/images/${albumFolder}/${image}`}
                            fill
                            alt={image}
                            priority
                            quality={85}
                            placeholder="blur"
                            sizes="(min-width: 1660px) 502px, (min-width: 1440px) 432px, (min-width: 1280px) 384px, (min-width: 1040px) 304px, (min-width: 780px) 360px, (min-width: 640px) 296px, (min-width: 560px) 238px, calc(45.83vw - 10px)"
                            blurDataURL={`/images/${albumFolder}/${image}`}
                        />
                    </div>
                );
            })}
        </div>
    );
};
