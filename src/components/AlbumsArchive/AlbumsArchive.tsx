import Link from "next/link";
import React, { useState } from "react";
import { CategoryButton } from "./CategoryButton";

interface AlbumsArchiveProps {
    albums: any;
    categories: any;
}

export const AlbumsArchive = ({ albums, categories }: AlbumsArchiveProps) => {
    // const [activeCategory, setActiveCategory] = useState("");

    return (
        <div className="container">
            <div className=" flex justify-between py-14">
                <div className="flex items-center gap-4 flex-wrap">
                    {categories?.map((category: any, index: number) => {
                        return (
                            <CategoryButton
                                categoryName={category}
                                key={index}
                                // setActiveCategory={setActiveCategory}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-2">
                {albums?.map((album: any, index: number) => {
                    return (
                        <Link href={`albums/${album?.slug}`} key={index}>
                            <h1 className="text-[50px]">{album?.slug}</h1>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
