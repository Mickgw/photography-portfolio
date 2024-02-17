import React from "react";

interface ScrollTextProps {
    text: string;
}

export const ScrollText = ({ text }: ScrollTextProps) => {
    if (!text) {
        return null;
    }

    return (
        <section className=" container">
            <div className="text-scroll-container overflow-x-visible py-44">
                <h2 className="text-10xl whitespace-nowrap font-bold">
                    {text}
                </h2>
            </div>
        </section>
    );
};
