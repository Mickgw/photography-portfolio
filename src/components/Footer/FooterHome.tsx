import React from "react";
import { ArrowUpRight } from "../svgs/ArrowUpRight";
import Link from "next/link";

export const FooterHome = () => {
    return (
        <div className="w-full bg-black text-semi-expanded min-h-screen flex items-center justify-center">
            <h1 className="text-10xl text-white font-bold">Footer</h1>
            {/* <Link
                href="/albums"
                className="flex items-center justify-center gap-10 py-44"
            >
                <h2 className="text-[200px] text-white">Albums</h2>
                <ArrowUpRight className="text-white w-[150px] h-[150px]" />
            </Link>
            <div className="container py-10 flex items-center justify-between">
                <div className="flex items-center gap-14">
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] text-gray-400">Version</p>
                        <p className="text-white">©2024</p>
                    </div>
                </div>
                <div className="flex items-center gap-14">
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] text-gray-400">Socials</p>
                        <div className="flex items-center gap-8 text-white">
                            <a href="https://instagram.com/mick.gw">
                                Instagram
                            </a>
                            <a href="https://www.linkedin.com">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
