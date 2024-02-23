import { motion } from "framer-motion";

interface AlbumsViewContainerProps {
    children: React.ReactNode;
}

export const AlbumsViewContainer = ({ children }: AlbumsViewContainerProps) => {
    // const animation = () => {

    // }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.55,
                    ease: [0.65, 0, 0.35, 1],
                },
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            {children}
        </motion.div>
    );
};
