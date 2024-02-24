import Link from "next/link";
import React from "react";
import { PortretAlbumPreview } from "./PortretAlbumPreview";

interface PortretGridViewProps {
    albums: any;
}

export const PortretGridView = ({ albums }: PortretGridViewProps) => {
    if (!albums) {
        return <h2 className="text-5xl font-bold">No albums found...</h2>;
    }

    return (
        <div className="portret--view grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {albums?.map((album: any, index: number) => {
                return (
                    <PortretAlbumPreview
                        key={index}
                        album={album}
                        index={index}
                    />
                );
            })}
        </div>
    );
};
