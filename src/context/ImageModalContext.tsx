import { createContext, useState } from "react";
import { ImageModalContextValue } from "../lib/props";

export const ImageModalContext = createContext<ImageModalContextValue>({
    clickedImageIndex: 0,
    isModalOpen: false,
    activeImageChangeHandler: () => {},
    showModal: () => {},
    closeModal: () => {},
});

const ImageModalContextProvider = ({ children }: any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const clickedImageIndexHandler = (index: number) => {
        setActiveIndex(index);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ImageModalContext.Provider
            value={{
                clickedImageIndex: activeIndex,
                isModalOpen: isModalOpen,
                activeImageChangeHandler: clickedImageIndexHandler,
                showModal: showModal,
                closeModal: closeModal,
            }}
        >
            {children}
        </ImageModalContext.Provider>
    );
};

export default ImageModalContextProvider;
