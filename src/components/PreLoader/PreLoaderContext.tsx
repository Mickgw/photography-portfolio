import { createContext, useContext, useState } from "react";
import { PreLoaderContextValue } from "./lib/props";

export const PreLoaderContext = createContext<PreLoaderContextValue>({
    preLoaderCompleted: false,
    setPreLoaderCompleted: () => {},
});

const PreLoaderContextProvider = ({ children }: any) => {
    const [preLoaderCompleted, setPreLoaderCompleted] = useState(false);

    return (
        <PreLoaderContext.Provider
            value={{
                preLoaderCompleted,
                setPreLoaderCompleted,
            }}
        >
            {children}
        </PreLoaderContext.Provider>
    );
};

export default PreLoaderContextProvider;
