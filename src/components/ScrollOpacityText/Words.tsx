import React from "react";
import { Character } from "./Character";

interface WordProps {
    children?: any;
    range?: any;
    progress?: any;
}

export const Word = ({ children, range, progress }: WordProps) => {
    const characters = children?.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
        <span className="word_">
            {characters?.map((character: string, index: number) => {
                const start = range[0] + step * index;
                const end = range[0] + step * (index + 1);

                return (
                    <Character
                        key={index}
                        range={[start, end]}
                        progress={progress}
                    >
                        {character}
                    </Character>
                );
            })}
        </span>
    );
};
