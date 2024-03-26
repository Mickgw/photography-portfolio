// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ImageModalContext } from "@/context/ImageModalContext";
import { ModalArrowLeft } from "../svgs/ModalArrowLeft";
import { ModalArrowRight } from "../svgs/ModalArrowRight";

interface ImagesSliderProps {
    albumFolder: string;
    albumPhotos: string[];
}

export const ImagesSlider = ({
    albumFolder,
    albumPhotos,
}: ImagesSliderProps) => {
    const sliderRef = useRef(null) as any;
    const { clickedImageIndex } = useContext(ImageModalContext);
    const [sliderActiveIndex, setSliderActiveIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const getImageDimensions = (image: any) => {
        // Check if the image ends with "-P.jpg" or "-L.jpg"
        const isPortrait = image.endsWith("-P.jpg");
        const isLandscape = image.endsWith("-L.jpg");

        // Determine the class based on the image name
        const imageSize = isPortrait ? "35vw" : isLandscape ? "85vw" : "";

        return imageSize;
    };

    if (albumPhotos.length > 0) {
        return (
            <div className="absolute inset-0 w-full h-full z-10">
                <div
                    onClick={() => handlePrev()}
                    className="slide-prev cursor-pointer absolute top-1/2 -translate-y-1/2 left-7"
                >
                    <ModalArrowLeft className="text-highlight/30" />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[calc(100%-12rem)] h-[calc(100%-12rem)]">
                    <Swiper
                        ref={sliderRef}
                        modules={[Virtual, Keyboard]}
                        keyboard={{
                            enabled: true,
                        }}
                        speed={750}
                        spaceBetween={0}
                        slidesPerView={1}
                        virtual
                        onBeforeInit={(swiper) => {
                            setSliderActiveIndex(swiper.activeIndex);
                        }}
                        onSlideChange={(swiper) => {
                            setSliderActiveIndex(swiper.activeIndex);
                        }}
                        initialSlide={clickedImageIndex}
                        className="w-full h-full"
                    >
                        {albumPhotos?.map((image: any, index: number) => {
                            return (
                                <SwiperSlide
                                    key={`image-${index}`}
                                    virtualIndex={index}
                                >
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={`/images/${albumFolder}/${image}`}
                                            alt={image}
                                            fill
                                            priority
                                            sizes={getImageDimensions(image)}
                                            className="w-full h-full object-contain object-center"
                                            placeholder="blur"
                                            blurDataURL={`/images/${albumFolder}/${image}`}
                                            quality={85}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div
                    onClick={() => handleNext()}
                    className="slide-next cursor-pointer absolute top-1/2 -translate-y-1/2 right-7"
                >
                    <ModalArrowRight className="text-highlight/30" />
                </div>

                <div className="pagination font-semibold absolute left-1/2 -translate-x-1/2 bottom-6 text-sm text-highlight/60">
                    <span>{sliderActiveIndex + 1}</span>
                    <span className="mx-2">/</span>
                    <span>{albumPhotos.length}</span>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
