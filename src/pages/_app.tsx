import PageTransition from "@/components/PageTransition";
import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
    console.log("router.route = ", router.route);
    return (
        <AnimatePresence mode="wait">
            <Component key={router.route} {...pageProps} />
        </AnimatePresence>
    );
}
