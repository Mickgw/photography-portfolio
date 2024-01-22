import React from "react";
import Link from "next/link";

export const Name = ({ onMouseEnter, onMouseLeave, nameLinkCursor }: any) => {
    return (
        <Link
            href="/albums"
            id="name-wrapper"
            className={`z-10 text-white mix-blend-difference h-fit hidden relative items-center gap-[2vw] ${nameLinkCursor}`}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
        >
            <h1
                id="firstname"
                className="leading-[.9]  font-semibold overflow-hidden text-[12vh] sm:text-[15vh] lg:text-[25vh] xl:text-[350px] flex text-white"
            >
                {Array.from("explore").map((letter, index) => (
                    <div key={index} className="letter">
                        {letter}
                    </div>
                ))}
            </h1>
        </Link>
    );
};
