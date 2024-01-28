import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
    const [showHeader, setShowHeader] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Adjust the threshold as needed
            const threshold = window.innerHeight;

            setShowHeader(scrollPosition > threshold);
        };

        // Attach the event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed z-[99] bg-white top-0 inset-x-0 w-full h-[100px] flex items-center justify-between text-lg container ${
                showHeader ? "visible" : "hidden"
            }`}
        >
            <Link href="/">© portfolio {new Date().getFullYear()}</Link>
            <Link href="/albums">albums</Link>
        </header>
    );
};
