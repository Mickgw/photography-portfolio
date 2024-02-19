import fs from "fs";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumImages/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import HeroWithMarquee from "@/components/HeroWithMarquee/HeroWithMarquee";
import { FooterAlbumSingle } from "@/components/Footer/FooterAlbumSingle";
import { folderNames } from "@/lib/consts";
import { ContentLayout } from "@/components/ContentLayout";
import { FixedFooter } from "@/components/FixedFooter";

export default function AlbumPage({ albumContents, albumPhotos }: any) {
    console.log("albumContents = ", albumContents);
    console.log("albumPhotos = ", albumPhotos);

    return (
        <PageTransition>
            <ContentLayout>
                <article className="page-contents">
                    <HeroWithMarquee
                        title={albumContents?.heroTitle}
                        image={albumContents?.heroImgDefault}
                        objectPositionHero={albumContents?.objectPosition}
                    />

                    <section className="container py-32 overflow-hidden">
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
