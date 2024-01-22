import React from "react";

export const LoadingCounter = () => {
    return (
        <div
            id="counter--container"
            className="z-20 overflow-hidden absolute right-4 md:right-8 bottom-4 md:bottom-8"
        >
            <div className="w-[300px] h-[45px] sm:h-[60px] lg:h-[90px] overflow-hidden relative">
                <div
                    id="counter-wrapper"
                    className="absolute leading-[.8] inset-0 hidden items-center justify-end gap-2 text-right !text-white"
                >
                    <h2 id="count" className="text-white">
                        0
                    </h2>
                </div>
            </div>
        </div>
    );
};
