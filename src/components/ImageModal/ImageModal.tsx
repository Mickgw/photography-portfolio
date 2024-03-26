import { ImageModalContext } from "@/context/ImageModalContext";
import { AlbumsImagesProps } from "@/lib/props";
import { AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IMAGE_MODAL_ANIMATION } from "@/lib/consts";
import { ImagesSlider } from "./ImagesSlider";
import { ModalArrowRight } from "../svgs/ModalArrowRight";
import { ModalArrowLeft } from "../svgs/ModalArrowLeft";

export const ImageModal = ({ albumFolder, albumPhotos }: AlbumsImagesProps) => {
    const { isModalOpen, closeModal } = useContext(ImageModalContext);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={IMAGE_MODAL_ANIMATION.initial}
                    animate={IMAGE_MODAL_ANIMATION.animate}
                    exit={IMAGE_MODAL_ANIMATION.exit}
                    className="image-modal fixed w-screen h-screen inset-0 z-50 backdrop-blur-3xl bg-white/70"
                >
                    <span
                        className="z-20 absolute top-8 right-8 font-semibold text-lg cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
                        onClick={() => closeModal()}
                    >
                        close
                    </span>

                    {/* z-index: 10 */}
                    <ImagesSlider
                        albumFolder={albumFolder}
                        albumPhotos={albumPhotos}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
