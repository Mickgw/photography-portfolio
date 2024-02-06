import React, { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextWithSpacer } from "./TextWithSpacer";
import { getDirection } from "./lib/helpers";
import { useGSAP } from "@gsap/react";

interface TextMarqueeProps {
    // Required
    text: string;

    // Optional
    textColor?: string;
    className?: string;
    easing?: number;
    initialDirection?: string;
    speed?: number;
    gap?: number;
}

export const TextMarquee = ({
    text,
    textColor,
    className,
    easing = 0.8,
    initialDirection = "left",
    speed = 0.04,
    gap = 50,
}: TextMarqueeProps) => {
    const firstText = useRef<HTMLHeadingElement>(null);
    const secondText = useRef<HTMLHeadingElement>(null);
    const sliderRef = useRef<HTMLHeadingElement>(null);
    const [offsetWidth, setOffsetWidth] = useState(0);
    const marqueeWrapperClass =
        "marquee-wrapper relative whitespace-nowrap flex [&_h1]:leading-[1.4]";
    const marqueePartClass = "flex items-center";

    let direction = getDirection(initialDirection);
    let xPercent = 0;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

        gsap.to(sliderRef.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: easing,
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
        if (!firstText.current && !secondText.current) {
            return;
        }

        if (xPercent <= -100) {
            xPercent = 0;
        }

        if (xPercent > 0) {
            xPercent = -100;
        }

        if (speed !== undefined && direction !== undefined) {
            xPercent += speed * direction;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });

        requestAnimationFrame(animation);
    };

    return (
        <div className={` ${className}`}>
            <div ref={sliderRef} className={marqueeWrapperClass}>
                <div ref={firstText} className={marqueePartClass}>
                    <TextWithSpacer
                        text={text}
                        textColor={textColor}
                        gap={gap}
                    />
                    <TextWithSpacer
                        text={text}
                        textColor={textColor}
                        gap={gap}
                    />
                </div>

                <div
                    ref={secondText}
                    className={marqueePartClass}
                    style={{ left: `${offsetWidth}px` }}
                >
                    <TextWithSpacer
                        text={text}
                        textColor={textColor}
                        gap={gap}
                    />
                    <TextWithSpacer
                        text={text}
                        textColor={textColor}
                        gap={gap}
                    />
                </div>
            </div>
        </div>
    );
};
