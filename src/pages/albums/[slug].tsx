import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import { TextMarquee } from "@/components/Marquee/TextMarquee";

export default function AlbumPage({ contents }: any) {
    console.log(contents);

    return (
        <PageTransition>
            <article className="page-contents">
                <section className="single-album-hero">
                    <div className="relative h-screen max-h-[800px] bg-black overflow-hidden">
                        <TextMarquee
                            text={contents?.marqueeTitle}
                            className="absolute bottom-2 inset-x-0"
                        />
                    </div>
                </section>

                <section className="container flex gap-1 items-center">
                    <Link href="/albums" className="text-blue-500">
                        Albums
                    </Link>
                    <span>/</span>{" "}
                    <span className="font-bold">{contents?.title}</span>
                </section>

                <section className="container">
                    <h1>{contents?.title}</h1>
                    <p>{contents?.description}</p>
                    <AlbumsImages imageFolder={contents?.imagesFolder} />
                </section>

                <div className="w-full h-screen" />
            </article>
        </PageTransition>
    );
}

export async function getStaticPaths() {
    const folder = "albums/";
    const files = fs.readdirSync(folder);
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
    const folder = "albums/";
    const readFile = fs.readFileSync(`${folder}${slug}.md`, "utf8");
    const { data: contents } = matter(readFile);

    return {
        props: {
            contents,
        },
    };
}
