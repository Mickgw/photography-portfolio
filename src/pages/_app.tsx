import "@/assets/styles/globals.scss";
import "@/assets/styles/fonts.scss";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { LenisScroller } from "@/components/LenisScroller";

export default function App({ Component, pageProps, router }: AppProps) {
    console.log("router.route = ", router.route);
    return (
        <>
            <LenisScroller />

            <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </>
    );
}
