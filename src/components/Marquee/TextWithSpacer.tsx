import React from "react";
import { TextSpacer } from "./TextSpacer";

interface TextWithSpacerProps {
    text: string;
    textColor?: string;
    gap?: number;
}

export const TextWithSpacer = ({
    text,
    textColor,
    gap,
}: TextWithSpacerProps) => {
    return (
        <>
            <h1
                style={{ color: textColor ? textColor : "#000" }}
                className="font-semibold"
            >
                {text}
                <TextSpacer color={textColor ? textColor : "#000"} gap={gap} />
            </h1>
        </>
    );
};
