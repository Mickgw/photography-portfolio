import PageTransition from "@/components/PageTransition";
import { gsap, Power2 } from "gsap";
import React, { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader/PreLoader";
import HomeHero from "@/components/HomeHero/HomeHero";
import HeroImage from "../../public/images/home_hero_image.webp";
import { FooterHome } from "@/components/Footer/FooterHome";

export default function Home() {
    const [timelineCompleted, setTimelineCompleted] = useState(false);
    const nameLinkCursor = timelineCompleted ? "cursor-pointer" : "cursor-wait";

    useEffect(() => {
        const cont = { val: 0 };
        const newValue = 100;
        const timeline = gsap.timeline({
            onComplete: () => setTimelineCompleted(true),
        });

        timeline

            .fromTo(
                "#counter-wrapper",
                {
                    autoAlpha: 1,
                    display: "flex",
                    y: 100,
                },
                {
                    y: 0,
                    duration: 1,
                    ease: Power2.easeInOut,
                }
            )
            // Minus delay so that the counter and header are shown at the same time
            .fromTo(
                "#header-text #text",
                {
                    display: "block",
                    y: 50,
                },
                {
                    y: 0,
                    duration: 1,
                    ease: Power2.easeInOut,
                },
                "-=1"
            )
            .to(cont, {
                duration: 4,
                val: newValue,
                roundProps: { val: 1 },
                onUpdate: function () {
                    const currentElement = document.getElementById("count");

                    if (currentElement) {
                        currentElement.innerHTML = cont.val.toFixed(0);
                    }
                },
            })
            .fromTo(
                "#counter-wrapper",
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                    duration: 0.5,
                }
            )
            // Minus delay so that the counter and header are hidden again at the same time
            .fromTo(
                "#header-text #text",
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                    duration: 0.7,
                },
                "-=0.5"
            )
            .fromTo(
                ".pre-loader-wrapper",
                {
                    height: "100%",
                },
                {
                    height: 0,
                    duration: 1,
                    ease: Power2.easeInOut,
                },
                "-=0.5"
            )
            // Completely hide the counter and header
            .to("#counter--container, #header-text-wrapper", {
                display: "none",
                duration: 0,
            });

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <PageTransition>
            <main className={nameLinkCursor}>
                <PreLoader />

                <HomeHero image={HeroImage} />

                <div className="w-full h-[50vh]"></div>

                <FooterHome />
            </main>
        </PageTransition>
    );
}
