import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "../svgs/ArrowUpRight";

export const CursorElement = () => {
    const elementHidden = {
        opacity: 0,
        scale: 0,
    };

    const elementVisible = {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    };

    const elementHide = {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
        },
    };

    return (
        <motion.div
            initial={elementHidden}
            animate={elementVisible}
            exit={elementHide}
            className="w-full h-full rounded-full font-semibold flex items-center justify-center text-center overflow-hidden text-white bg-black"
        >
            <div className="h-fit flex items-center text-[26px]">
                <span>view pictures</span>
                <ArrowUpRight className="-mb-[7px]" width={32} height={32} />
            </div>
        </motion.div>
    );
};
