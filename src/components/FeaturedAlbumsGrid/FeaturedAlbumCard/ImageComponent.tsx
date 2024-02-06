import Image from "next/image";
import React from "react";
import { ImageComponentProps } from "../lib/props";

export const ImageComponent = ({
    src,
    alt,
    objectPosition,
    className,
}: ImageComponentProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            placeholder="blur"
            blurDataURL={src}
            className={
                "w-full h-full object-cover md:group-hover:brightness-[0.8] md:group-hover:scale-[1.025] transition-all duration-500 ease-in-out " +
                className
            }
            style={{ objectPosition: objectPosition }}
        />
    );
};
