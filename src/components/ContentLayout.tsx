import React from "react";

export const ContentLayout = ({ children }: any) => {
    return (
        <main className="content--layout relative z-20 mb-[100vh] bg-white shadow-[0_10px_500px_0_rgba(0,0,0,1)] overflow-x-visible">
            {children}
        </main>
    );
};
