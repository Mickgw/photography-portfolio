import { useOffsetHeight } from "@/hooks/useOffsetHeightByRef";

import { useRef } from "react";

export const FixedFooter = ({ children }: any) => {
    const fixedFooter = useRef() as React.RefObject<HTMLDivElement>;
    const fixedFooterHeight = useOffsetHeight(fixedFooter);

    return (
        <footer
            ref={fixedFooter}
            className="fixed--footer z-10 fixed inset-x-0 w-full"
            style={{
                top: `calc(100vh - ${fixedFooterHeight}px)`,
            }}
        >
            <div className="footer--content w-full bg-black">{children}</div>
        </footer>
    );
};
