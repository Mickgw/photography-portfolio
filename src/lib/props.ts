export interface AlbumsArchiveContextValue {
    activeView: string;
    activeCategory: string;
    activeViewChangeHandler: (view: string) => void;
    activeCategoryChangeHandler: (category: string) => void;
}