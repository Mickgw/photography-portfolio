import PageTransition from "@/components/PageTransition";
import HeroImage from "../../public/images/hero_main_img_hRes.webp";
import { FooterHome } from "@/components/Footer/FooterHome";
import HeroMain from "@/components/HeroMain/HeroMain";
import { FeaturedAlbumsGrid } from "@/components/FeaturedAlbumsGrid/FeaturedAlbumsGrid";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { folderNames } from "@/lib/consts";
import CursorContextProvider from "@/components/Cursor/context/CursorContext";
import { TextMarquee } from "@/components/Marquee/TextMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Home({ featuredAlbums }: any) {
    return (
        <PageTransition>
            <CursorContextProvider>
                <HeroMain image={HeroImage} />

                <div className="container flex gap-32 pt-12 pb-32">
                    <div className="w-2/3">
                        <p className="text-3xl font-normal leading-[1.4]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="w-1/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis.
                    </div>
                </div>

                <FeaturedAlbumsGrid featuredAlbums={featuredAlbums} />

                <FooterHome />
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
