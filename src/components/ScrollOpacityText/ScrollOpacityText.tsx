import React from "react";
import { Paragraph } from "./Paragraph";

interface ScrollOpacityTextProps {
    className?: string;
    children: any;
}

export const ScrollOpacityText = ({
    className,
    children,
}: ScrollOpacityTextProps) => {
    return <Paragraph className={className}>{children}</Paragraph>;
};
