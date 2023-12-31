import React from "react";

interface AlbumsImagesProps {
    imageFolder: string;
}

export const AlbumsImages = ({ imageFolder }: AlbumsImagesProps) => {
    return (
        <></>
        //     <div className="columns-4 gap-x-4 gap-y-4 py-12">
        //     {images?.map((image: any, index: number) => {
        //         return (
        //             <div
        //                 key={index}
        //                 className="relative mb-6 rounded-lg overflow-hidden"
        //             >
        //                 <Image
        //                     src={image}
        //                     alt=""
        //                     width={100}
        //                     height={100}
        //                     priority
        //                     sizes="(max-width: 768px) 45vw, 25vw"
        //                     className="w-full h-full object-cover object-center"
        //                 />
        //             </div>
        //         );
        //     })}
        // </div>
    );
};
