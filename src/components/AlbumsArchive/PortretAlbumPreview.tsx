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
                <Image
                    src={content?.featuredAlbumThumb?.url}
                    alt={content?.mainTitle}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{
                        objectPosition: content?.featuredAlbumThumb
                            ?.object_position
                            ? album?.featuredAlbumThumb?.object_position
                            : "center",
                    }}
                />
                <h2 className="absolute right-3 bottom-3 tracking-[-10px] text-white text-10xl opacity-30 font-bold leading-[1]">
                    0{index + 1}
                </h2>
            </div>
        </Link>
    );
};
