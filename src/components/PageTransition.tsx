import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const PageTransition = ({ children, router }: any) => {
    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const firstUpdate = useRef(true);

    // useEffect(() => {}, [searchParams]);
    const animate = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
        };
    };

    const enterAnimation = {
        initial: {
            top: 0,
        },
        enter: {
            top: "100%",
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            },
            transitionEnd: {
                top: 0,
                height: 0,
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        exit: {
            top: 0,
            height: "100%",
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    return (
        <div className="page-transition--container">
            <motion.div
                variants={enterAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full h-screen fixed inset-0 bg-black z-[9999] pointer-events-none"
            />

            {children}
        </div>
    );
};

export default PageTransition;
