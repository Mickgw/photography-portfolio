import Link from "next/link";
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

export default function AlbumPage({ contents }: any) {
    const parallaxTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const parallaxImage = useRef() as React.RefObject<HTMLImageElement | null>;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline.to(parallaxImage.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxTrigger.current,
                start: "top 0%",
                end: "bottom 0%",
                scrub: true,
            },
        });
    });

    return (
        <PageTransition>
            <article className="page-contents">
                {/* <section className="container flex gap-1 items-center">
                    <Link href="/albums" className="text-blue-500">
                        Albums
                    </Link>
                    <span>/</span>{" "}
                    <span className="font-bold">{contents?.title}</span>
                </section> */}

                <section
                    ref={parallaxTrigger}
                    className="single-album-hero h-[300px] lg:h-[100vh] max-h-[900px] relative"
                >
                    <div className="w-full h-full inset-0 rounded-b-xl md:rounded-b-xl lg:rounded-b-[2rem] overflow-hidden absolute">
                        <Image
                            ref={parallaxImage}
                            src={contents?.thumbnail}
                            alt="hero image"
                            fill
                            priority
                            className="object-cover object-[10%_10%]"
                        />
                    </div>
                    <TextMarquee
                        text={contents?.marqueeTitle}
                        textColor="#ededed"
                        className="absolute bottom-4 w-full overflow-hidden lg:-mt-10 [&_h1]:text-[50px] [&_h1]:md:text-[100px] [&_h1]:lg:text-[160px]"
                    />
                </section>

                {/* <TextMarquee
                    text={contents?.marqueeTitle}
                    textColor="#ededed"
                    className="w-full overflow-hidden lg:-mt-10 [&_h1]:text-[50px] [&_h1]:md:text-[100px] [&_h1]:lg:text-[160px]"
                /> */}

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
