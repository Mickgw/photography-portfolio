import React from "react";

interface ScrollTextProps {
    text: string;
}

export const ScrollText = ({ text }: ScrollTextProps) => {
    if (!text) {
        return null;
    }

    return (
        <section className="container">
            <div className="text-scroll-container overflow-x-visible">
                <h2 className="text-10xl whitespace-nowrap font-bold tracking-[-5px] leading-[1.1]">
                    {text}
                </h2>
            </div>
        </section>
    );
};
