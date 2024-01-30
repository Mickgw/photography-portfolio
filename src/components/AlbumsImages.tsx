import Image from "next/image";
import React from "react";
import { folderNames } from "@/lib/consts";

interface AlbumsImagesProps {
    albumFolder: string;
    albumPhotos: any;
}

export const AlbumsImages = ({
    albumFolder,
    albumPhotos,
}: AlbumsImagesProps) => {
    return (
        <div className="columns-4 gap-x-4 gap-y-4 py-32">
            {albumPhotos?.map((image: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="relative mb-6 rounded-lg overflow-hidden"
                    >
                        <Image
                            src={`/${folderNames.images}/${albumFolder}/${image}`}
                            alt=""
                            width={100}
                            height={100}
                            priority
                            sizes="(max-width: 768px) 45vw, 25vw"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                );
            })}
        </div>
    );
};
