import "@/assets/styles/globals.scss";
import "@/assets/styles/fonts.scss";
import type { AppProps } from "next/app";
import { LenisScroller } from "@/components/LenisScroller";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Layout />

            <AnimatePresence
                mode="wait"
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </>
    );
}
