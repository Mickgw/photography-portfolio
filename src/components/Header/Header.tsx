import Link from "next/link";
import React from "react";

export const Header = () => {
    return (
        <header className="fixed z-[99] top-0 inset-x-0 w-full h-[100px] flex items-center justify-between text-lg container">
            <Link
                href="/"
                className="px-6 py-2 rounded-full bg-white shadow-lg flex items-center"
            >
                © portfolio by mick
            </Link>
            <Link
                href="/albums"
                className="px-6 py-2 rounded-full bg-white shadow-lg flex items-center"
            >
                albums
            </Link>
        </header>
    );
};
