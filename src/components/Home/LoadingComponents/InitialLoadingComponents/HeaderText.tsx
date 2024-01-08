import React from "react";

export const HeaderText = () => {
    return (
        <div
            id="header-text-wrapper"
            className="z-20 absolute left-4 md:left-8 top-4 md:top-8"
        >
            <h4
                id="header-text"
                className="font-semibold leading-[1] overflow-hidden text-white"
            >
                <span id="text" className="hidden">
                    portfolio ©{new Date().getFullYear()}
                </span>
            </h4>
        </div>
    );
};
