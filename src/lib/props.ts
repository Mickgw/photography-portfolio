export interface AlbumsArchiveContextValue {
    activeView: string;
    activeCategory: string;
    activeViewChangeHandler: (view: string) => void;
    activeCategoryChangeHandler: (category: string) => void;
}

export interface ImageModalContextValue {
    clickedImageIndex: number;
    isModalOpen: boolean;
    activeImageChangeHandler: (index: number) => void;
    showModal: () => void;
    closeModal: () => void;
}

export interface VisibleAlbum {
    album: any;
    index: number;
}

export interface AlbumsImagesProps {
    albumFolder: string;
    albumPhotos: any;
}