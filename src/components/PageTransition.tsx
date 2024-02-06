import { motion } from "framer-motion";

const PageTransition = ({ children }: any) => {
    const enterAnimation = {
        initial: {
            top: 0,
        },
        enter: {
            top: "-100vh",
            transition: {
                duration: 0.75,
                delay: 0.7,
                ease: [0.76, 0, 0.24, 1],
            },
            transitionEnd: {
                top: "100vh",
                borderRadius: 0,
            },
        },
        exit: {
            top: 0,
            transition: {
                duration: 0.75,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    return (
        <div className="page-transition--container overflow-hidden">
            <motion.div
                variants={enterAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-screen h-screen overflow-hidden fixed inset-0 bg-black z-[100] pointer-events-none"
            />
            {children}
        </div>
    );
};

export default PageTransition;
