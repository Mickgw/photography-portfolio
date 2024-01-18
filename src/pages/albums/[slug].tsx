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

export default function AlbumPage({ contents }: any) {
    const parallaxTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const parallaxImage = useRef() as React.RefObject<HTMLImageElement | null>;

    console.log(contents);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline.to(parallaxImage.current, {
            yPercent: 30,
            scale: 1.1,
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
                <section
                    ref={parallaxTrigger}
                    className="single-album-hero max-h-[450px] md:max-h-[600px] lg:max-h-[750px] xl:max-h-none min-h-screen relative overflow-hidden"
                >
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{
                            scale: 1,
                            transition: {
                                delay: 0.4,
                                duration: 1.7,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        className="w-full h-full inset-0 overflow-hidden absolute"
                    >
                        <Image
                            ref={parallaxImage}
                            src={contents?.thumbnail}
                            alt="hero image"
                            fill
                            priority
                            className="object-cover object-[50%_10%]"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-6 w-full overflow-hidden"
                        initial={{ y: 250, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,

                            transition: {
                                delay: 0.6,
                                duration: 1.3,
                                ease: [0.33, 1, 0.68, 1],
                            },
                        }}
                    >
                        <TextMarquee
                            text={contents?.marqueeTitle}
                            textColor="#ededed"
                            className=" lg:-mt-10 [&_h1]:text-[50px] [&_h1]:md:text-[100px] [&_h1]:lg:text-[150px]"
                        />
                    </motion.div>
                </section>

                {/* <section className="container flex gap-1 items-center">
                    <Link href="/albums" className="text-blue-500">
                        Albums
                    </Link>
                    <span>/</span>{" "}
                    <span className="font-bold">{contents?.title}</span>
                </section> */}

                <section className="min-h-screen container py-32">
                    <IntroText
                        year={contents?.year}
                        title={contents?.introTitle}
                        subtitle={contents?.introSubtitle}
                        description={contents?.description}
                    />
                </section>

                <section className="container">
                    <h1 className="lowercase">{contents?.title}</h1>
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
