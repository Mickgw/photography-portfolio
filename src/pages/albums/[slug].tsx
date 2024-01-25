import fs from "fs";
import matter from "gray-matter";
import { AlbumsImages } from "@/components/AlbumsImages";
import PageTransition from "@/components/PageTransition";
import { TextMarquee } from "@/components/Marquee/TextMarquee";
import Image from "next/image";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { IntroText } from "@/components/IntroText/IntroText";
import Hero from "@/components/Hero/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

export default function AlbumPage({ contents }: any) {
    return (
        <PageTransition>
            <article className="page-contents">
                <Hero title={contents?.title} image={contents?.thumbnail} />
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
