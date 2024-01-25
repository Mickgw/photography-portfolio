import React from "react";
import { ArrowUpRight } from "../svgs/ArrowUpRight";
import Link from "next/link";

export const FooterHome = () => {
    return (
        <footer className="w-full h-[500px] flex items-center justify-center">
            <Link href="/albums" className="flex gap-10">
                <h2 className="text-[200px]">Albums</h2>
                <ArrowUpRight />
            </Link>
        </footer>
    );
};
