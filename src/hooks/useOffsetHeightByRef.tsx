import { useState, useEffect, RefObject } from "react";

export const useOffsetHeight = (
    ref?: React.Ref<HTMLElement> | null
): number => {
    const [offsetHeight, setOffsetHeight] = useState<number>(0);

    useEffect(() => {
        const element: HTMLElement | null = (ref as RefObject<HTMLElement>)
            .current;

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
    }, [ref]); // Dependency array includes both ref and selector

    return offsetHeight;
};
