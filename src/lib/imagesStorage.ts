// lib/imagesStorage.ts
let images: string[] = [];

export const getImages = (): string[] => images;
export const setImages = (newImages: string[]): void => {
  images = newImages;
};
