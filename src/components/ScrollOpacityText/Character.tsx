import { useTransform, motion } from "framer-motion";
import React from "react";

export const Character = ({ children, range, progress }: any) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="character--wrapper -ml-[.5px]">
            <span className="absolute opacity-30">{children}</span>
            <motion.span className="character_" style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    );
};
