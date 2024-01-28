import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { AlbumPreview } from "@/components/AlbumPreviews/AlbumPreview";
import PageTransition from "@/components/PageTransition";

export async function getStaticProps() {
    const folder = "albums/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const albums = markdownPosts.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`${folder}${fileName}`, "utf8");
        const { data: contents } = matter(readFile);

        return {
            slug,
            contents,
        };
    });

    return {
        props: {
            albums,
        },
    };
}

const Albums = ({ albums }: any) => {
    return (
        <PageTransition>
            <div className="container grid grid-cols-2">
                {albums?.map((album: any, index: number) => {
                    return (
                        <AlbumPreview
                            key={index}
                            slug={album?.slug}
                            contents={album?.contents}
                        />
                    );
                })}
            </div>
            <div className="w-full min-h-screen"></div>
            <div className="w-full min-h-screen"></div>
        </PageTransition>
    );
};

export default Albums;
