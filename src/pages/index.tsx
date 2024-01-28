import PageTransition from "@/components/PageTransition";
import { gsap, Power2 } from "gsap";
import React, { useContext, useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader/PreLoader";
import HomeHero from "@/components/HeroMain/HeroMain";
import HeroImage from "../../public/images/hero_main_img_hRes.webp";
import { FooterHome } from "@/components/Footer/FooterHome";
import HeroMain from "@/components/HeroMain/HeroMain";
import { FeaturedAlbumsGrid } from "@/components/FeaturedAlbumsGrid/FeaturedAlbumsGrid";

export default function Home() {
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
