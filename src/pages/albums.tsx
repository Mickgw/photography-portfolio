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
import AlbumsArchiveContextProvider from "@/context/AlbumsArchiveContext";

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
                <div className="container mb-6 sm:mb-10">
                    <div
                        ref={parallaxTrigger}
                        className="heading--container relative"
                    >
                        <div className="z-10 absolute left-0 top-1/2 -translate-y-1/2">
                            <ParallaxElement
                                trigger=".heading--container"
                                yAmount={-25}
                                start={parallaxTriggerStart}
                                end={parallaxTriggerEnd}
                            >
                                <h1 className="leading-[1] tracking-tighter md:tracking-[-5px] text-9xl font-bold">
                                    Albums
                                    <span className="absolute -right-6 sm:-right-7 md:-right-8 top-1 sm:top-3 lg:top-2 xl:top-3 text-[20px] md:text-[24px] lg:text-[28px] tracking-tighter">
                                        0{albums.length}
                                    </span>
                                </h1>
                            </ParallaxElement>
                        </div>

                        <ParallaxElement
                            trigger=".heading--container"
                            yAmount={20}
                            start={parallaxTriggerStart}
                            end={parallaxTriggerEnd}
                            className="min-w-[500px]"
                        >
                            <AlbumsText className=" text-[#f7f7f7]" />
                        </ParallaxElement>
                    </div>
                </div>

                <AlbumsArchiveContextProvider>
                    <AlbumsArchive
                        albums={albums}
                        categories={albumCategories}
                    />
                </AlbumsArchiveContextProvider>

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
