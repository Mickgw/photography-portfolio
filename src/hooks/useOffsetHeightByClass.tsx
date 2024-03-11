import { useState, useEffect } from "react";

export const useOffsetHeightByClass = (selector: string | null): number => {
    const [offsetHeight, setOffsetHeight] = useState<number>(0);

    useEffect(() => {
        const element: HTMLElement | null = selector
            ? document.querySelector(selector)
            : null;

        if (element) {
            const updateHeight = () => {
                setOffsetHeight(element.offsetHeight);
            };

            updateHeight();

            // Add event listener for dynamic content changes
            window.addEventListener("resize", updateHeight);
            return () => {
                // Remove event listener on cleanup
                window.removeEventListener("resize", updateHeight);
            };
        }
    }, [selector]); // Dependency array includes only selector

    return offsetHeight;
};
