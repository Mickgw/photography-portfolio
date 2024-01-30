import PageTransition from "@/components/PageTransition";
import HeroImage from "../../public/images/hero_main_img_hRes.webp";
import { FooterHome } from "@/components/Footer/FooterHome";
import HeroMain from "@/components/HeroMain/HeroMain";
import { FeaturedAlbumsGrid } from "@/components/FeaturedAlbumsGrid/FeaturedAlbumsGrid";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { folderNames } from "@/lib/consts";

export default function Home({ featuredAlbums }: any) {
    console.log("featuredAlbums = ", featuredAlbums);
    return (
        <PageTransition>
            <main>
                <HeroMain image={HeroImage} />

                <FeaturedAlbumsGrid featuredAlbums={featuredAlbums} />

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
    const readFile = await fsPromises.readFile(
        `${folderNames.main}featured-albums.md`,
        "utf8"
    );
    const { data: contents } = matter(readFile);

    const albums = contents.albums;

    const featuredAlbumsPromises = albums.map(async (album: any) => {
        const albumFileName = `${folderNames.albums}${album}`;
        const readFile = await fsPromises.readFile(
            `${albumFileName}.md`,
            "utf8"
        );
        const { data: albumContents } = matter(readFile);

        return {
            albumFileName,
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
