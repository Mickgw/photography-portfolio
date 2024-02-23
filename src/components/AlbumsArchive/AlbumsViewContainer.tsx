import { motion } from "framer-motion";

interface AlbumsViewContainerProps {
    children: React.ReactNode;
}

export const AlbumsViewContainer = ({ children }: AlbumsViewContainerProps) => {
    const animations = {
        initial: {
            opacity: 0,
            y: 40,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: [0.33, 1, 0.68, 1],
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};
