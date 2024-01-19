import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Word } from "./Words";

interface ParagraphProps {
    className?: string;
    children?: any;
}

export const Paragraph = ({ className, children }: ParagraphProps) => {
    const paragraph = useRef(null);
    const { scrollYProgress } = useScroll({
        target: paragraph,
        offset: ["start .9", "start .4"],
    });

    const words = children?.split(" ");

    return (
        <p
            className={`paragraph max-w-2xl flex flex-wrap leading-[1] ${className}`}
            ref={paragraph}
        >
            {words?.map((word: string, index: number) => {
                const start = index / words.length;
                const end = start + 1 / words.length;

                return (
                    <Word
                        key={index}
                        range={[start, end]}
                        progress={scrollYProgress}
                    >
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};
