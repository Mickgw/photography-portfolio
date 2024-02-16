"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const LenisScroller = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({
            lerp: 0.075,
        });

        lenis.on("scroll", (e: any) => {});

        function raf(time: number) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <></>;
};
