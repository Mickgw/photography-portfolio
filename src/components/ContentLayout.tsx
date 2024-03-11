import { useOffsetHeightByClass } from "@/hooks/useOffsetHeightByClass";
import React from "react";

export const ContentLayout = ({ className, children }: any) => {
    const fixedFooterHeight = useOffsetHeightByClass(".fixed--footer");

    return (
        <main
            className={
                "content--layout relative z-20 bg-white shadow-[0_10px_100px_0_rgba(0,0,0,1)] overflow-x-visible " +
                className
            }
            style={{
                marginBottom: `${fixedFooterHeight}px`,
            }}
        >
            {children}
        </main>
    );
};
