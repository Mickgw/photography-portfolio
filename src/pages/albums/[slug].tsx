import fs from "fs";
import { promisify } from "util";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumImages/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import HeroWithMarquee from "@/components/HeroWithMarquee/HeroWithMarquee";
import { folderNames } from "@/lib/consts";
import { ContentLayout } from "@/components/ContentLayout";
import { FixedFooter } from "@/components/FixedFooter";
import type { Metadata } from "next";
import { AlbumAbout } from "@/components/AlbumAbout/AlbumAbout";
import ImageModalContextProvider from "@/context/ImageModalContext";
import { ImageModal } from "@/components/ImageModal/ImageModal";

export const metadata: Metadata = {
    title: "TEST",
    description: "...",
};

export default function AlbumPage({ albumContents, albumPhotos }: any) {
    if (!albumContents) {
        // Handle the case where albumContents is not available (e.g., invalid slug)
        return <h1 className="text-5xl">Error loading album...</h1>;
    }

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

                    {albumPhotos && (
                        <ImageModalContextProvider>
                            <section className="container overflow-hidden pb-32">
                                <AlbumsImages
                                    albumFolder={albumContents?.albumFolderName}
                                    albumPhotos={albumPhotos}
                                />
                            </section>

                            <ImageModal
                                albumFolder={albumContents?.albumFolderName}
                                albumPhotos={albumPhotos}
                            />
                        </ImageModalContextProvider>
                    )}
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
    try {
        const readFile = fs.readFileSync(
            `${folderNames.albums}${slug}.md`,
            "utf8"
        );
        const { data: albumContents } = matter(readFile);

        const photoAlbumFolderName = `public/images/${albumContents.albumFolderName}`;

        const files = fs.readdirSync(photoAlbumFolderName);
        const albumPhotos = files.filter((file) => file.endsWith(".jpg"));

        const metadata: Metadata = {
            title: albumContents?.metaTitle || "Mick Waanders",
            description:
                albumContents?.metaDescription ||
                "Portfolio site from Mick Waanders",
        };

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
                albumContents: null,
                albumPhotos: [],
                metadata,
            },
        };
    }
}
