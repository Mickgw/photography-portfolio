import React, { useContext } from "react";

import { CategoryButton } from "./CategoryButton";
import { ViewSwitchButton } from "./ViewSwitchButton";
import { PortretGridViewIcon } from "@/components/svgs/PortretGridViewIcon";
import { ListViewIcon } from "@/components/svgs/ListViewIcon";
import { AlbumsArchiveContext } from "@/context/AlbumsArchiveContext";

interface DesktopViewProps {
    categories: string[];
}

export const ButtonsDesktopView = ({ categories }: DesktopViewProps) => {
    return (
        <div className="desktop-filters-and-view container overflow-y-hidden overflow-x-auto hidden sm:flex justify-between pt-6 sm:pt-10 lg:pt-14 pb-20 lg:pb-24">
            <div className="flex sm:items-center gap-2 lg:gap-4">
                {categories?.map((category: any, index: number) => {
                    return (
                        <CategoryButton categoryName={category} key={index} />
                    );
                })}
            </div>

            <div className="hidden md:flex flex-wrap gap-2 lg:gap-4">
                <ViewSwitchButton viewName="portret-grid">
                    <PortretGridViewIcon />
                </ViewSwitchButton>

                <ViewSwitchButton viewName="list">
                    <ListViewIcon />
                </ViewSwitchButton>
            </div>
        </div>
    );
};
