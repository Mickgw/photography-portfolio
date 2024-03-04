import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { PortretGridView } from "./PortretView/PortretGridView";
import { ListView } from "./ListView/ListView";
import { AlbumsViewContainer } from "./AlbumsViewContainer";
import { ButtonsDesktopView } from "./Buttons/ButtonsDesktopView";
import { ButtonsResponsiveView } from "./Buttons/ButtonsResponsiveView";
import { AlbumsArchiveContext } from "@/context/AlbumsArchiveContext";
import { ALBUM_ARCHIVE_VIEWS } from "@/lib/consts";

interface AlbumsArchiveProps {
    albums: any;
    categories: any;
}

export const AlbumsArchive = ({ albums, categories }: AlbumsArchiveProps) => {
    const { activeView } = useContext(AlbumsArchiveContext);
    const portretGridView = ALBUM_ARCHIVE_VIEWS.portretGrid;

    return (
        <div className="overflow-hidden">
            <div className="filters-and-grid-view">
                <ButtonsDesktopView categories={categories} />
                <ButtonsResponsiveView categories={categories} />
            </div>

            <div className="container">
                <AnimatePresence mode="wait">
                    {activeView === portretGridView ? (
                        <AlbumsViewContainer key={`portret-grid`}>
                            <PortretGridView albums={albums} />
                        </AlbumsViewContainer>
                    ) : (
                        <AlbumsViewContainer key={`numbered-list`}>
                            <ListView albums={albums} />
                        </AlbumsViewContainer>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
