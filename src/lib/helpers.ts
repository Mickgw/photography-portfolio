export function getIndex(index : number) {
    return index >= 10 ? (index + 1) : `0${index + 1}`
}

export interface VisibleAlbum {
    album: any;
    index: number;
  }
  
  export const getVisibleAlbums = (
    albums: any,
    activeCategory: string
  ): VisibleAlbum[] => {
    const filteredAlbums = albums.filter((album: any) => {
      const albumCategories = album?.contents?.categories;
  
      return (
        albumCategories.includes(activeCategory) ||
        activeCategory === "all"
      );
    });
  
    return filteredAlbums.map((album: any, index: number) => ({
      album,
      index,
    }));
  };