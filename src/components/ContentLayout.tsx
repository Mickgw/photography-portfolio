import { ImportantVariables } from "@/lib/consts";
import React from "react";

export const ContentLayout = ({ className, children }: any) => {
    return (
        <main
            className={
                "content--layout relative z-20 bg-white shadow-[0_10px_300px_0_rgba(0,0,0,1)] overflow-x-visible " +
                className
            }
            style={{
                marginBottom: `${ImportantVariables.fixedFooterHeight}vh`,
            }}
        >
            {children}
        </main>
    );
};
