import React from "react";

interface TextSpacerProps {
    color?: string;
    gap?: number;
}

export const TextSpacer = ({ color, gap }: TextSpacerProps) => {
    return (
        <span
            style={{
                marginInline: `clamp(1.875rem, 1.4205rem + 1.8182vw, 3.125rem)`,
            }}
        >
            —
        </span>
    );
};
