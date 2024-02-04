import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ParallaxElementProps {
    trigger: any;
    yAmount: number;
    start?: string;
    end?: string;
    children: React.ReactNode;
}

export const ParallaxElement = ({
    trigger,
    yAmount,
    start,
    end,
    children,
}: ParallaxElementProps) => {
    const parallaxContainer = useRef() as React.RefObject<HTMLDivElement>;
    const parallaxElement = useRef() as React.RefObject<HTMLDivElement>;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger.current,
                start: start ? start : "top+=100 bottom",
                end: end ? end : "bottom bottom",
                scrub: true,
            },
        });

        timeline.to(parallaxElement.current, {
            y: yAmount,
            ease: "none",
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                gsap.to(parallaxElement.current, { y: 0 });
            }
        };

        handleResize(); // Check initial width

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div ref={parallaxContainer} className="w-full h-full">
            <div ref={parallaxElement}>{children}</div>
        </div>
    );
};
