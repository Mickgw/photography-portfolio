import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface CategoryButtonProps {
    categoryName: string;
    // setActiveCategory: void;
}

export const CategoryButton = ({ categoryName }: CategoryButtonProps) => {
    const hoverElement = useRef<HTMLDivElement>(null);
    const timeline = useRef<any>(null);
    const timeoutDuration = 0;

    let timeoutId: any = null;

    useGSAP(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current

            .to(
                hoverElement.current,
                {
                    top: "-25%",
                    width: "150%",
                    duration: 0.4,
                    ease: "power1.in",
                },
                "enter"
            )

            .to(
                hoverElement.current,
                { top: "-250%", width: "75%", duration: 0.3 },
                "exit"
            );
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo("enter", "exit");
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, timeoutDuration);
    };

    return (
        <button
            onMouseEnter={() => {
                manageMouseEnter();
            }}
            onMouseLeave={() => {
                manageMouseLeave();
            }}
            className="category--button relative first-letter:uppercase py-4 px-12 overflow-hidden rounded-full bg-white border-lightgray border-[1px]"
        >
            <span className="category--name z-20">
                {categoryName ? categoryName : "All"}
            </span>

            <div
                ref={hoverElement}
                className="hover--element z-10 pointer-events-none absolute top-full inset-x-0 w-1/3 h-[250%] left-1/2 -translate-x-1/2 mix-blend-difference bg-[#e0e0e0] rounded-full"
            />
        </button>
    );
};
