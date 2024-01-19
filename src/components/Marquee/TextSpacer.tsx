import React from "react";

interface TextSpacerProps {
    color?: string;
    gap?: number;
}

export const TextSpacer = ({ color, gap }: TextSpacerProps) => {
    return (
        <div
            className="w-[45px] md:w-[75px] lg:w-[100px] h-2 lg:h-4"
            style={{
                backgroundColor: color ? color : "#000",
                marginInline: `${gap}px`,
            }}
        />
    );
};
