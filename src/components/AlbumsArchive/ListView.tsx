import Link from "next/link";
import React from "react";

interface ListViewProps {
    albums: any;
}

export const ListView = ({ albums }: ListViewProps) => {
    return (
        <div className="flex flex-col gap-8">
            {albums?.map((album: any, index: number) => {
                return (
                    <Link href={`albums/${album?.slug}`} key={index}>
                        <h1 className="text-[50px]">{album?.slug}</h1>
                    </Link>
                );
            })}
        </div>
    );
};
