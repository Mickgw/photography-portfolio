import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Word } from "./Words";

interface ParagraphProps {
    text?: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
    const paragraph = useRef(null);
    const { scrollYProgress } = useScroll({
        target: paragraph,
        offset: ["start .9", "start .4"],
    });

    const words = text?.split(" ");
    return (
        <p
            className="paragraph text-2xl max-w-6xl flex flex-wrap leading-[1] font-normal"
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
