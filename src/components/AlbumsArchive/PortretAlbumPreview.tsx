import { getIndex } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface PortretAlbumPreviewProps {
    album: any;
    index: number;
}

export const PortretAlbumPreview = ({
    album,
    index,
}: PortretAlbumPreviewProps) => {
    if (!album) return null;

    const content = album?.contents;

    return (
        <Link href={`albums/${album?.slug}`}>
            <div className="w-full aspect-[9/14] relative">
                {content?.featuredAlbumThumb?.url && (
                    <Image
                        src={content?.featuredAlbumThumb?.url}
                        alt={content?.mainTitle}
                        fill
                        quality={100}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        style={{
                            objectPosition: content?.featuredAlbumThumb
                                ?.object_position
                                ? album?.featuredAlbumThumb?.object_position
                                : "center",
                        }}
                    />
                )}

                {!content?.featuredAlbumThumb?.url && (
                    <div className="absolute inset-0 w-full h-full bg-lightgray flex items-center justify-center">
                        <h1 className="text-[40px] font-bold text-center">
                            Image not found
                        </h1>
                    </div>
                )}

                <h2 className="absolute right-3 bottom-3 tracking-[-5px] text-white/30 text-10xl font-bold leading-[.8]">
                    {getIndex(index)}
                </h2>
            </div>
        </Link>
    );
};
