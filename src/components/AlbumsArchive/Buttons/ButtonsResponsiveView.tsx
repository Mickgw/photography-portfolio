import React from "react";
import { CategoryButton } from "./CategoryButton";

interface ResponseViewProps {
    categories: string[];
}

export const ButtonsResponsiveView = ({ categories }: ResponseViewProps) => {
    return (
        <div className="responsive-view pb-8 pt-12 block sm:hidden">
            <div className="px-4 md:px-0 pb-1.5 overflow-x-auto mx-auto max-w-[520px] flex items-center gap-1.5 xs:gap-2 lg:gap-4">
                {categories?.map((category: any, index: number) => {
                    return (
                        <CategoryButton categoryName={category} key={index} />
                    );
                })}
            </div>
        </div>
    );
};
