export interface AlbumsArchiveContextValue {
    activeView: string;
    activeCategory: string;
    activeViewChangeHandler: (view: string) => void;
    activeCategoryChangeHandler: (category: string) => void;
}

export interface VisibleAlbum {
    album: any;
    index: number;
  }
  