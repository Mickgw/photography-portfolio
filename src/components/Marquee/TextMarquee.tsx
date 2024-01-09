import React, { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextSpacer } from "./TextSpacer";

interface TextMarqueeProps {
    // Required
    text: string;

    // Optional
    textColor?: string;
    className?: string;
    easing?: number;
    initialDirection?: number;
    speed?: number;
    gap?: number;
}

export const TextMarquee = ({
    text,
    textColor,
    className,
}: TextMarqueeProps) => {
    const firstText = useRef<HTMLHeadingElement>(null);
    const secondText = useRef<HTMLHeadingElement>(null);
    const sliderRef = useRef<HTMLHeadingElement>(null);

    const [offsetWidth, setOffsetWidth] = useState(0);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

        gsap.to(sliderRef.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.8,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-=200px",
        });

        // Set offsetWidth value with the offset width of the first text
        if (firstText.current && secondText.current) {
            const width = firstText.current.offsetWidth;
            setOffsetWidth(width);
        }
    }, [text]);

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }

        if (xPercent > 0) {
            xPercent = -100;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        xPercent += 0.05 * direction;
        requestAnimationFrame(animation);
    };

    if (text) {
        return (
            <div className={` ${className}`}>
                <div
                    ref={sliderRef}
                    className="relative whitespace-nowrap flex [&_h1]:tracking-tighter"
                >
                    <div ref={firstText} className="flex items-center">
                        <h1 style={{ color: textColor ? textColor : "#000" }}>
                            {text}
                        </h1>
                        <TextSpacer color={textColor ? textColor : "#000"} />
                        <h1 style={{ color: textColor ? textColor : "#000" }}>
                            {text}
                        </h1>
                        <TextSpacer color={textColor ? textColor : "#000"} />
                    </div>

                    <div
                        ref={secondText}
                        className="flex items-center"
                        style={{ left: `${offsetWidth}px` }}
                    >
                        <h1 style={{ color: textColor ? textColor : "#000" }}>
                            {text}
                        </h1>
                        <TextSpacer color={textColor ? textColor : "#000"} />
                        <h1 style={{ color: textColor ? textColor : "#000" }}>
                            {text}
                        </h1>
                        <TextSpacer color={textColor ? textColor : "#000"} />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
