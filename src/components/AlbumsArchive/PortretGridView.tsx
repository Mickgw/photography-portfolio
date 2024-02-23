import Link from "next/link";
import React from "react";
import { PortretAlbumPreview } from "./PortretAlbumPreview";

interface PortretGridViewProps {
    albums: any;
}

export const PortretGridView = ({ albums }: PortretGridViewProps) => {
    return (
        <div className="grid grid-cols-2 gap-12">
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
