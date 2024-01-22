"use client";

import Cursor from "@/components/Cursor/Cursor";
import { CursorElement } from "@/components/Home/CursorElement";
import { Name } from "@/components/Home/LoadingComponents/FinalLoadingComponents/Name";
import { NavButton } from "@/components/Home/LoadingComponents/FinalLoadingComponents/NavButton";
import { HeaderText } from "@/components/PreLoader/HeaderText";
import { LoadingCounter } from "@/components/PreLoader/LoadingCounter";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, Power2, Power3 } from "gsap";
import React, { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader/PreLoader";

export default function Home() {
    const [cursorType, setCursorType] = useState("");
    const [timelineCompleted, setTimelineCompleted] = useState(false);
    const nameLinkCursor = timelineCompleted ? "cursor-pointer" : "cursor-wait";
    const mainCursor = timelineCompleted ? "cursor-default" : "cursor-wait";

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
            })

            .fromTo(
                "#intro-text, #name-wrapper",
                {
                    display: "none",
                },
                {
                    display: "flex",
                },
                "-=.3"
            )

            .fromTo(
                "#name-wrapper #firstname .letter",
                {
                    y: -50,
                    rotateX: -92,
                    opacity: 0,
                },
                {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 2,
                    ease: Power3.easeInOut,
                },
                "=-1"
            )

            .fromTo(
                "#nav-button-wrapper",
                {
                    display: "block",
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Power3.easeInOut,
                },
                "=-.8"
            );

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <PageTransition>
            <PreLoader />
            <div
                className={`w-full h-screen relative overflow-hidden bg-white ${mainCursor}`}
            >
                <div className="z-10 w-full h-full absolute inset-0 overflow-hidden bg-white">
                    <div className="absolute w-full h-full">
                        {timelineCompleted && (
                            <Cursor
                                name="name-hover-cursor"
                                width={250}
                                height={250}
                                className="z-10"
                            >
                                <AnimatePresence>
                                    {cursorType === "nameHover" && (
                                        <CursorElement />
                                    )}
                                </AnimatePresence>
                            </Cursor>
                        )}
                        <div className="h-full relative container flex items-center justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-center">
                                <Name
                                    onMouseEnter={() =>
                                        setCursorType("nameHover")
                                    }
                                    onMouseLeave={() => setCursorType("")}
                                    nameLinkCursor={nameLinkCursor}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z-20 absolute right-10 bottom-10 w-fit">
                    <NavButton />
                </div>
            </div>
        </PageTransition>
    );
}
