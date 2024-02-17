import React from "react";

export const FixedFooter = ({ children }: any) => {
    return (
        <footer className="footer--container z-10 fixed inset-0 w-full h-full">
            {children}
        </footer>
    );
};
