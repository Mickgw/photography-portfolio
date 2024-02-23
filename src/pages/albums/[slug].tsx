import fs from "fs";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumImages/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import HeroWithMarquee from "@/components/HeroWithMarquee/HeroWithMarquee";
import { folderNames } from "@/lib/consts";
import { ContentLayout } from "@/components/ContentLayout";
import { FixedFooter } from "@/components/FixedFooter";
import { ScrollTitleWithYear } from "@/components/ScrollTitleWithYear/ScrollTitleWithYear";
import { TitleWithParagraph } from "@/components/TitleWithParagraph/TitleWithParagraph";
import type { Metadata } from "next";
import { ScrollText } from "@/components/ScrollText/ScrollText";
import { ArrowRight } from "@/components/svgs/ArrowRight";
import { ScrollOpacityText } from "@/components/ScrollOpacityText/ScrollOpacityText";
import { AlbumAbout } from "@/components/AlbumAbout/AlbumAbout";

export const metadata: Metadata = {
    title: "TEST",
    description: "...",
};

export default function AlbumPage({ albumContents, albumPhotos }: any) {
    return (
        <PageTransition>
            <ContentLayout>
                <article className="page-contents">
                    <HeroWithMarquee
                        title={albumContents?.heroTitle}
                        image={albumContents?.heroImgDefault}
                        objectPositionHero={albumContents?.objectPosition}
                    />

                    <AlbumAbout
                        textLeft={albumContents?.shortDescription}
                        textRight={albumContents?.description}
                    />

                    {/* <div className="text-[250px] font-bold text-right text-lightgray">
                        2023
                    </div>

                    <div className="text-[250px] font-bold text-left text-lightgray">
                        About
                    </div> */}

                    <ScrollTitleWithYear title="" year={albumContents?.year} />

                    <section className="container overflow-hidden">
                        <AlbumsImages
                            albumFolder={albumContents?.albumFolderName}
                            albumPhotos={albumPhotos}
                        />
                    </section>
                </article>
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
}

export async function getStaticPaths() {
    const files = fs.readdirSync(folderNames.albums);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const paths = markdownPosts.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: any) {
    const readFile = fs.readFileSync(`${folderNames.albums}${slug}.md`, "utf8");
    const { data: albumContents } = matter(readFile);

    const photoAlbumFolderName = `public/images/${albumContents.albumFolderName}`;

    const metadata: Metadata = {
        title: albumContents?.metaTitle || "Mick Waanders",
        description:
            albumContents?.metaDescription ||
            "Portfolio site from Mick Waanders",
    };

    try {
        const files = await fsPromises.readdir(photoAlbumFolderName);
        const albumPhotos = files.filter((file) => file.endsWith(".jpg"));

        return {
            props: {
                albumContents,
                albumPhotos,
                metadata,
            },
        };
    } catch (error) {
        console.error("Error reading files:", error);

        return {
            props: {
                albumContents,
                albumPhotos: [],
                metadata,
            },
        };
    }
}
