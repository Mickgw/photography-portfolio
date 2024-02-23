import Link from "next/link";
import React, { useState } from "react";
import { CategoryButton } from "./CategoryButton";
import { ViewSwitchButton } from "./ViewSwitchButton";
import { PortretGridViewIcon } from "../svgs/PortretGridViewIcon";
import { ListViewIcon } from "../svgs/ListViewIcon";
import { AnimatePresence, motion } from "framer-motion";
import { PortretGridView } from "./PortretGridView";
import { ListView } from "./ListView";
import { AlbumsViewContainer } from "./AlbumsViewContainer";

interface AlbumsArchiveProps {
    albums: any;
    categories: any;
}

export const AlbumsArchive = ({ albums, categories }: AlbumsArchiveProps) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeView, setActiveView] = useState("portret-grid");

    let portretViewActive = activeView === "portret-grid";
    let listViewActive = activeView === "list";

    return (
        <div className="container">
            <div className="flex justify-between pt-14 pb-24 overflow-hidden">
                <div className="flex items-center gap-4 flex-wrap">
                    {categories?.map((category: any, index: number) => {
                        return (
                            <CategoryButton
                                categoryName={category}
                                isActive={activeCategory === category}
                                handleClick={() => setActiveCategory(category)}
                                key={index}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-4">
                    <ViewSwitchButton
                        viewName="portret-grid"
                        isActive={portretViewActive}
                        handleClick={() => setActiveView("portret-grid")}
                    >
                        <PortretGridViewIcon />
                    </ViewSwitchButton>

                    <ViewSwitchButton
                        viewName="list"
                        isActive={listViewActive}
                        handleClick={() => setActiveView("list")}
                    >
                        <ListViewIcon />
                    </ViewSwitchButton>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeView === "portret-grid" ? (
                    <AlbumsViewContainer key="portret-grid">
                        <PortretGridView albums={albums} />
                    </AlbumsViewContainer>
                ) : (
                    <AlbumsViewContainer key="list">
                        <ListView albums={albums} />
                    </AlbumsViewContainer>
                )}
            </AnimatePresence>
        </div>
    );
};
