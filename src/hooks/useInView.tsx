import { useState, useEffect, useRef } from "react";

interface InViewProps {
    root?: null | Element;
    rootMargin?: string;
    threshold?: number | number[];
}

const useInView = ({
    root = null,
    rootMargin = "0px",
    threshold = 0,
}: InViewProps = {}) => {
    const [isInView, setIsInView] = useState(false);
    const targetRef = useRef<Element | null>(null);

    useEffect(() => {
        const target = targetRef.current;

        if (!target) {
            return;
        }

        const options = {
            root,
            rootMargin,
            threshold,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            setIsInView(entry.isIntersecting);
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        observer.observe(target);

        // Cleanup the observer when the component unmounts or the target changes
        return () => {
            observer.unobserve(target);
            observer.disconnect();
        };
    }, [root, rootMargin, threshold]);

    return { targetRef, isInView };
};

export default useInView;
