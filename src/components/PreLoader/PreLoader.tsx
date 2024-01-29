import React, { useContext, useRef } from "react";
import { gsap, Power2, Power3 } from "gsap";
import { PreLoaderContext } from "./PreLoaderContext";
import { useGSAP } from "@gsap/react";

const PreLoader = () => {
    const { setPreLoaderCompleted } = useContext(PreLoaderContext);

    const preLoaderWrapper = useRef() as React.RefObject<HTMLDivElement>;

    const headerText = useRef() as React.RefObject<HTMLDivElement>;

    const count = useRef() as React.RefObject<HTMLDivElement>;
    const counterWrapper = useRef() as React.RefObject<HTMLDivElement>;
    const counterContainer = useRef() as React.RefObject<HTMLDivElement>;

    useGSAP(() => {
        const cont = { val: 0 };
        const newValue = 100;
        const timeline = gsap.timeline({
            // paused: true,
            onComplete: () => {
                setPreLoaderCompleted(true);
            },
        });

        timeline

            .fromTo(
                count.current,
                {
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
                headerText.current,
                {
                    y: 100,
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
                    const currentElement = count.current;

                    if (currentElement) {
                        currentElement.innerHTML = cont.val.toFixed(0);
                    }
                },
            })
            .fromTo(
                counterWrapper.current,
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
                headerText.current,
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
                preLoaderWrapper.current,
                {
                    height: "100%",
                },
                {
                    height: 0,
                    duration: 1,
                    ease: Power3.easeInOut,
                },
                "-=0.5"
            );

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <div
            ref={preLoaderWrapper}
            className="fixed w-full h-full inset-0 bg-black z-[100] overflow-hidden"
        >
            <h4 className="z-20 absolute left-4 md:left-8 top-4 md:top-8 w-[300px] h-[60px] leading-[1] overflow-hidden text-white">
                <span className="absolute" ref={headerText}>
                    portfolio ©{new Date().getFullYear()}
                </span>
            </h4>

            <div
                ref={counterWrapper}
                className="overflow-hidden absolute right-4 md:right-8 bottom-4 md:bottom-8 w-[175px] sm:h-[60px] lg:h-[90px] leading-[.8] flex items-center justify-end gap-2"
            >
                <h2 ref={count} className="!text-white absolute text-right">
                    0
                </h2>
            </div>
        </div>
    );
};

export default PreLoader;
