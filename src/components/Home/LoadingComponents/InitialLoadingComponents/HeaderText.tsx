import React from "react";

export const HeaderText = () => {
    return (
        <div
            id="header-text-wrapper"
            className="z-20 absolute left-6 md:left-14 top-6 md:top-14"
        >
            <h4
                id="header-text"
                className="font-semibold leading-[1] overflow-hidden text-white"
            >
                <span id="text" className="hidden">
                    portfolio ©2023
                </span>
            </h4>
        </div>
    );
};
