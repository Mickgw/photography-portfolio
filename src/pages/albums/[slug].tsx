import fs from "fs";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumImages/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import { IntroText } from "@/components/IntroText/IntroText";
import HeroSecondary from "@/components/HeroSecondary/HeroSecondary";
import { FooterAlbumSingle } from "@/components/Footer/FooterAlbumSingle";
import { folderNames } from "@/lib/consts";
import { useEffect } from "react";

export default function AlbumPage({ albumContents, albumPhotos }: any) {
    return (
        <PageTransition>
            <article className="page-contents">
                <HeroSecondary
                    title={albumContents?.title}
                    image={albumContents?.thumbnail}
                    objectPositionHero={albumContents?.objectPositionHero}
                />

                <IntroText
                    year={albumContents?.year}
                    title={albumContents?.introTitle}
                    subtitle={albumContents?.introSubtitle}
                    description={albumContents?.description}
                />

                <section className="container py-32 overflow-hidden">
                    <AlbumsImages
                        albumFolder={albumContents?.imagesFolder}
                        albumPhotos={albumPhotos}
                    />
                </section>
                <div className="w-full h-screen" />
            </article>
            <FooterAlbumSingle />
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

    const photoAlbumFolderName = `public/images/${albumContents.imagesFolder}`;

    try {
        const files = await fsPromises.readdir(photoAlbumFolderName);
        const albumPhotos = files.filter((file) => file.endsWith(".jpg"));

        return {
            props: {
                albumContents,
                albumPhotos,
            },
        };
    } catch (error) {
        console.error("Error reading files:", error);

        return {
            props: {
                albumContents,
                albumPhotos: [],
            },
        };
    }
}
