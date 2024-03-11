import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ScrollTextProps {
    text: string;
}

export const ScrollText = ({ text }: ScrollTextProps) => {
    if (!text) {
        return null;
    }

    const scrollTextTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const scrollText = useRef() as React.RefObject<HTMLDivElement>;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline.to(scrollTextTrigger.current, {
            x: "-40%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: scrollTextTrigger.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    });

    return (
        <section ref={scrollTextTrigger} className="container py-44">
            <div className="text-scroll-container overflow-x-visible">
                <h2
                    ref={scrollText}
                    className="text-10xl whitespace-nowrap font-bold tracking-[-5px] leading-[1.1]"
                >
                    {text}
                </h2>
            </div>
        </section>
    );
};
