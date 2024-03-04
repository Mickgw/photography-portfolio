import { createContext, useState } from "react";
import { AlbumsArchiveContextValue } from "../lib/props";
import { ALBUM_ARCHIVE_VIEWS } from "@/lib/consts";

export const AlbumsArchiveContext = createContext<AlbumsArchiveContextValue>({
    activeView: "",
    activeCategory: "",
    activeViewChangeHandler: () => {},
    activeCategoryChangeHandler: () => {},
});

const AlbumsArchiveContextProvider = ({ children }: any) => {
    const [activeView, setActiveView] = useState(
        ALBUM_ARCHIVE_VIEWS.portretGrid
    );
    const [activeCategory, setActiveCategory] = useState("all");

    const activeViewChangeHandler = (viewName: string) => {
        setActiveView(viewName);
    };

    const activeCategoryChangeHandler = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <AlbumsArchiveContext.Provider
            value={{
                activeView: activeView,
                activeCategory: activeCategory,
                activeViewChangeHandler: activeViewChangeHandler,
                activeCategoryChangeHandler: activeCategoryChangeHandler,
            }}
        >
            {children}
        </AlbumsArchiveContext.Provider>
    );
};

export default AlbumsArchiveContextProvider;
