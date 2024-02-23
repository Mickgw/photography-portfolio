import React, { useEffect, useRef } from "react";
import fs from "fs";
import matter from "gray-matter";
import PageTransition from "@/components/PageTransition";
import { albumCategories, folderNames } from "@/lib/consts";
import { ContentLayout } from "@/components/ContentLayout";
import { FixedFooter } from "@/components/FixedFooter";
import Link from "next/link";
import { AlbumsArchive } from "@/components/AlbumsArchive/AlbumsArchive";
import { ParallaxElement } from "@/components/ParallaxElement/ParallaxElement";
import { AlbumsText } from "@/components/svgs/AlbumsText";

export async function getStaticProps() {
    const files = fs.readdirSync(folderNames.albums);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const albums = markdownPosts.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(
            `${folderNames.albums}${fileName}`,
            "utf8"
        );
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
    const parallaxTrigger = useRef<HTMLDivElement>(null);
    const parallaxTriggerStart = "top top=-200";
    const parallaxTriggerEnd = "bottom 0%;";

    return (
        <PageTransition>
            <ContentLayout className="pt-28">
                <div className="container mb-10">
                    <div
                        ref={parallaxTrigger}
                        className="heading--container relative"
                    >
                        <div className="z-10 absolute left-0 top-1/2 -translate-y-1/2">
                            <ParallaxElement
                                trigger={parallaxTrigger}
                                yAmount={-15}
                                start={parallaxTriggerStart}
                                end={parallaxTriggerEnd}
                            >
                                <h1 className="leading-[1] tracking-[-5px] text-[130px] font-bold">
                                    Albums
                                    <span className="absolute -right-8 -top-0 text-[35px] tracking-tighter">
                                        0{albums.length}
                                    </span>
                                </h1>
                            </ParallaxElement>
                        </div>

                        <ParallaxElement
                            trigger={parallaxTrigger}
                            yAmount={25}
                            start={parallaxTriggerStart}
                            end={parallaxTriggerEnd}
                        >
                            <AlbumsText className=" text-[#f7f7f7]" />
                        </ParallaxElement>
                    </div>
                </div>

                <AlbumsArchive albums={albums} categories={albumCategories} />

                <div className="w-full min-h-screen"></div>
            </ContentLayout>

            <FixedFooter>
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-[150px] text-white font-bold">
                        Footer
                    </h1>
                </div>
            </FixedFooter>
        </PageTransition>
    );
};

export default Albums;
