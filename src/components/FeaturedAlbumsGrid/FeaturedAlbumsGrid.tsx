import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const FeaturedAlbumsGrid = () => {
    const gridWrapperTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const scrollContainerLeft = useRef() as React.RefObject<HTMLDivElement>;
    const scrollContainerRight = useRef() as React.RefObject<HTMLDivElement>;
    const placeholderArray = [...Array(13)];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: gridWrapperTrigger.current,
                start: "top+=100 bottom",
                end: "bottom bottom",
                scrub: true,
            },
        });

        timeline
            .to(scrollContainerLeft.current, {
                y: -50,
                ease: "none",
            })

            .to(scrollContainerRight.current, {
                y: 50,
                ease: "none",
            });
    }, []);

    return (
        <section ref={gridWrapperTrigger} className="container py-22 lg:py-44">
            <div className="grid grid-cols-2 gap-20 border border-black">
                <div
                    ref={scrollContainerLeft}
                    className="scroll-container-left bg-black w-full h-[200vh] translate-y-[50px]"
                >
                    {placeholderArray.map((_, index) => (
                        <h1 className="text-white text-right" key={index}>
                            Up
                        </h1>
                    ))}
                </div>
                <div
                    ref={scrollContainerRight}
                    className="scroll-container-right bg-black w-full h-[200vh] translate-y-[-50px]"
                >
                    {placeholderArray.map((_, index) => (
                        <h1 className="text-white" key={index}>
                            Down
                        </h1>
                    ))}
                </div>
            </div>
        </section>
    );
};
