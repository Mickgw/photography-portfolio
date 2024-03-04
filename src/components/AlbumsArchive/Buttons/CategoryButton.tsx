import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { buttonClickAnimationProps } from "@/lib/consts";
import { AlbumsArchiveContext } from "@/context/AlbumsArchiveContext";

interface CategoryButtonProps {
    categoryName: string;
}

export const CategoryButton = ({ categoryName }: CategoryButtonProps) => {
    const { activeCategory, activeCategoryChangeHandler } =
        useContext(AlbumsArchiveContext);

    const isActive = activeCategory === categoryName;

    const button = useRef<HTMLButtonElement>(null);
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
                {
                    top: "-200%",
                    width: "100%",
                    duration: 0.4,
                },
                "exit"
            );
    }, []);

    useGSAP(() => {
        // Adjust hoverElement position when isActive changes
        if (isActive) {
            timeline.current.tweenTo("exit");
        } else {
            // Play exit animation when isActive is true
            timeline.current.play("exit");
        }
    }, [isActive]);

    /**
     * This function manages the mouse enter event.
     */
    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo("enter", "exit");
    };

    /**
     * This function manages the mouse leave event by setting a timeout and playing the timeline after the specified duration.
     */
    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, timeoutDuration);
    };

    const handleButtonClick = () => {
        activeCategoryChangeHandler(categoryName);

        gsap.to(button.current, {
            scale: buttonClickAnimationProps.scaleWhileTap,
            duration: buttonClickAnimationProps.scaleDuration,
            onComplete: () => {
                gsap.to(button.current, {
                    scale: 1,
                    duration: buttonClickAnimationProps.scaleDuration,
                });
            },
        });
    };

    return (
        <button
            ref={button}
            onMouseEnter={() => !isActive && manageMouseEnter()}
            onMouseLeave={() => !isActive && manageMouseLeave()}
            onClick={() => {
                handleButtonClick();
            }}
            id={categoryName}
            className={
                "category--button shrink-0 w-fit text-[13px] lg:text-base z-0 relative first-letter:uppercase min-h-[52px] lg:min-h-[60px] px-8 lg:px-12 overflow-hidden rounded-full bg-white border-bordercolor border-[1px] " +
                (isActive ? "pointer-events-none" : "")
            }
        >
            <span className="category--name z-10 translate-y-[1px] text-center">
                {categoryName}
            </span>

            <div
                ref={hoverElement}
                className="hover--element bg-[#e0e0e0] z-20 pointer-events-none absolute top-full inset-x-0 w-2/3 h-[200%] left-1/2 -translate-x-1/2 mix-blend-difference rounded-full"
            />
        </button>
    );
};
