import "@/assets/styles/globals.scss";
import "@/assets/styles/fonts.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import PreLoader from "@/components/PreLoader/PreLoader";
import PreLoaderContextProvider, {
    PreLoaderContext,
} from "@/components/PreLoader/PreLoaderContext";
import { useContext } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
    const { preLoaderCompleted } = useContext(PreLoaderContext);

    return (
        <PreLoaderContextProvider>
            <Layout />

            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </PreLoaderContextProvider>
    );
}
