import PageTransition from "@/components/PageTransition";
import HeroImage from "../../public/images/hero_main_img_hRes.webp";
import { FooterHome } from "@/components/Footer/FooterHome";
import HeroMain from "@/components/HeroMain/HeroMain";
import { FeaturedAlbumsGrid } from "@/components/FeaturedAlbumsGrid/FeaturedAlbumsGrid";

import fs from "fs";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";

export default function Home({ featuredAlbums }: any) {
    console.log("featuredAlbums = ", featuredAlbums);
    return (
        <PageTransition>
            <main>
                <HeroMain image={HeroImage} />

                <FeaturedAlbumsGrid />

                {/* <div className="w-full h-[100vh]">
                    <div className="container">
                        <h1>Container</h1>
                    </div>
                </div> */}

                <FooterHome />
            </main>
        </PageTransition>
    );
}

export async function getStaticProps() {
    const folder = "content/";

    const readFile = await fsPromises.readFile(
        `${folder}featured-albums.md`,
        "utf8"
    );
    const { data: contents } = matter(readFile);

    const albums = contents.albums;
    const featuredAlbums = [];

    for (const album of albums) {
        const albumFileName = `${folder}${album}`;
        const readFile = fs.readFileSync(`${albumFileName}.md`, "utf8");
        const { data: albumsContents } = matter(readFile);

        featuredAlbums.push({
            albumFileName,
            albumsContents,
        });
    }

    return {
        props: {
            featuredAlbums,
        },
    };
}
