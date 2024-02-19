import { ImportantVariables } from "@/lib/consts";

export const FixedFooter = ({ children }: any) => {
    return (
        <footer
            id="fixed--footer"
            className="z-10 fixed inset-x-0 w-full"
            style={{
                height: `${ImportantVariables.fixedFooterHeight}vh`,
                minHeight: `${ImportantVariables.fixedFooterHeight}vh`,
                top: `${100 - ImportantVariables.fixedFooterHeight}vh`,
            }}
        >
            <div className="footer--content w-full h-[80vh] bg-black">
                {children}
            </div>
        </footer>
    );
};
