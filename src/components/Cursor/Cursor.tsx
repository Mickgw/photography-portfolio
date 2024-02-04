import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { setClassname, setEasingDuration } from "./lib/helpers";
import { CursorProps } from "./lib/props";
import { Expo } from "gsap";

const Cursor: React.FC<CursorProps> = ({
    name,
    width,
    height,
    zIndex,
    style,
    easingDuration,
    children,
    className,
}: CursorProps) => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const pos = { x: 0, y: 0 };

        const loop = () => {
            gsap.set(cursor, { x: pos.x, y: pos.y });
        };

        gsap.ticker.add(loop);

        const setFromEvent = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            gsap.to(pos, {
                x: x - (width as number) / 2,
                y: y - (height as number) / 2,
                duration: setEasingDuration(easingDuration as number),
                ease: Expo.easeOut,
            });
        };

        window.addEventListener("mousemove", setFromEvent);

        return () => {
            gsap.ticker.remove(loop);
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            id="custom-cursor"
            style={{
                zIndex: zIndex,
                width: `${width}px`,
                height: `${height}px`,
                ...style,
            }}
            className={`custom-cursor cursor-type-${name} ${setClassname(
                className as string
            )}`}
        >
            {children}
        </div>
    );
};

export default Cursor;
