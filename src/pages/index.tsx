import PageTransition from "@/components/PageTransition";
import HeroImage from "../../public/images/hero_img.jpg";
import { FooterHome } from "@/components/Footer/FooterHome";
import { FeaturedAlbumsGrid } from "@/components/FeaturedAlbumsGrid/FeaturedAlbumsGrid";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { folderNames } from "@/lib/consts";
import CursorContextProvider from "@/components/Cursor/context/CursorContext";
import Hero from "@/components/Hero/Hero";
import { Intro } from "@/components/Intro/Intro";
import { ScrollText } from "@/components/ScrollText/ScrollText";
import { ContentLayout } from "@/components/ContentLayout";
import { FixedFooter } from "@/components/FixedFooter";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Home({ featuredAlbums }: any) {
    // useGSAP(() => {
    //     gsap.from(".footer-scroll--content", {
    //         y: "-10vh",
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".content--layout",
    //             start: "bottom bottom",
    //             scrub: true,
    //         },
    //     });
    // });

    return (
        <PageTransition>
            <CursorContextProvider>
                <ContentLayout>
                    <Hero
                        image={HeroImage}
                        smallTitle="A portfolio website by"
                        title="Mick Waanders"
                    />

                    <Intro
                        welcomeText="Welcome to my portfolio, showcasing my photography journey and visual stories."
                        mainText="Embarking on my newfound passion, I crafted a portfolio website from scratch. Merging my creativity and coding skills, I curated a digital showcase, reflecting my journey in this hobby. The site, a canvas of progress, mirrors my evolving skills and enthusiasm."
                    />

                    <ScrollText text="Categories I love to shoot" />

                    <FeaturedAlbumsGrid featuredAlbums={featuredAlbums} />
                </ContentLayout>

                <FixedFooter>
                    <FooterHome albumsAmount={featuredAlbums.length} />
                </FixedFooter>
            </CursorContextProvider>
        </PageTransition>
    );
}

export async function getStaticProps() {
    const readFile = await fsPromises.readFile(
        `${folderNames.main}featured-albums.md`,
        "utf8"
    );
    const { data: contents } = matter(readFile);

    const albums = contents.albums;

    if (!Array.isArray(albums) || albums.length === 0) {
        throw new Error("No featured albums found.");
    }

    const featuredAlbumsPromises = albums.map(async (album: any) => {
        const albumFileNameForSlug = album;
        const albumFileName = `${folderNames.albums}${album}`;
        const readFile = await fsPromises.readFile(
            `${albumFileName}.md`,
            "utf8"
        );

        const { data: albumContents } = matter(readFile);

        return {
            albumFileNameForSlug,
            albumContents,
        };
    });

    const featuredAlbums = await Promise.all(featuredAlbumsPromises);

    return {
        props: {
            featuredAlbums,
        },
    };
}
