import React from "react";

interface TextSpacerProps {
    color?: string;
}

export const TextSpacer = ({ color }: TextSpacerProps) => {
    return (
        <div
            className="w-[45px] md:w-[75px] lg:w-[100px] h-2 lg:h-4 mx-8"
            style={{ backgroundColor: color ? color : "#000" }}
        />
    );
};
