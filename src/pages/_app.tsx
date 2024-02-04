import "@/assets/styles/globals.scss";
import "@/assets/styles/fonts.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import PreLoader from "@/components/PreLoader/PreLoader";
import PreLoaderContextProvider, {
    PreLoaderContext,
} from "@/components/PreLoader/PreLoaderContext";
import { useContext, useEffect } from "react";
import CursorContextProvider from "@/components/Cursor/context/CursorContext";

export default function App({ Component, pageProps, router }: AppProps) {
    const { preLoaderCompleted } = useContext(PreLoaderContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PreLoaderContextProvider>
            <Layout />
            {!preLoaderCompleted && <PreLoader />}

            <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </PreLoaderContextProvider>
    );
}
