import fs from "fs";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import { IntroText } from "@/components/IntroText/IntroText";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import HeroSecondary from "@/components/HeroSecondary/HeroSecondary";
import { FooterAlbumSingle } from "@/components/Footer/FooterAlbumSingle";

export default function AlbumPage({ contents }: any) {
    return (
        <PageTransition>
            <article className="page-contents">
                <HeroSecondary
                    title={contents?.title}
                    image={contents?.thumbnail}
                />
                {/* <Breadcrumbs title={contents?.title} /> */}

                <IntroText
                    year={contents?.year}
                    title={contents?.introTitle}
                    subtitle={contents?.introSubtitle}
                    description={contents?.description}
                />

                <section className="container">
                    <AlbumsImages imageFolder={contents?.imagesFolder} />
                </section>
                <div className="w-full h-screen" />
            </article>
            <FooterAlbumSingle />
        </PageTransition>
    );
}

export async function getStaticPaths() {
    const folder = "content/";
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
    const folder = "content/";
    const readFile = fs.readFileSync(`${folder}${slug}.md`, "utf8");
    const { data: contents } = matter(readFile);

    return {
        props: {
            contents,
        },
    };
}
