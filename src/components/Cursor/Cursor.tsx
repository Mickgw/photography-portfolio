import { useEffect, useRef } from "react";
import useMousePosition from "./hooks/useMousePosition";
import {
    setClassname,
    setCursorXoffset,
    setCursorYoffset,
    setEasingDuration,
    setEasingValues,
    setXandYposition,
} from "./lib/helpers";
import { CursorPositionProps, CursorProps } from "./lib/props";

/**
 * Custom cursor component that follows the mouse cursor's position.
 *
 * @component
 * @param {Object} props - The props for the Cursor component.
 * @param {string} props.name - The name of the cursor.
 * @param {number} props.width - The width of the cursor.
 * @param {number} props.height - The height of the cursor.
 * @param {number} props.zIndex - The z-index of the cursor.
 * @param {Object} props.style - Additional inline CSS styles for the cursor.
 * @param {Array<number>} props.ease - An array representing easing values for cursor transitions.
 * @param {number} props.easingDuration - The duration of the cursor's transition.
 * @param {React.ReactNode} props.children - Content to be rendered inside the cursor.
 * @param {string} props.className - Additional CSS class names for the cursor.
 * @returns {React.ReactNode|null} The Cursor component.
 */
const Cursor: React.FC<CursorProps> = ({
    name,
    width,
    height,
    zIndex,
    style,
    ease,
    easingDuration,
    children,
    className,
}: CursorProps) => {
    const { x, y } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement | null>(null);

    const xOffset = setCursorXoffset(width as number);
    const yOffset = setCursorYoffset(height as number);

    useEffect(() => {
        setXandYposition({
            cursorRef,
            x,
            xOffset,
            y,
            yOffset,
        } as CursorPositionProps);
    }, [x, y, xOffset, yOffset]);

    if (x === 0 || y === 0) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                pointerEvents: "none",
                zIndex: zIndex,
                left: 0,
                top: 0,
                width: `${width}px`,
                height: `${height}px`,
                transition: `${setEasingDuration(
                    easingDuration as number
                )}s cubic-bezier(${setEasingValues(ease as Array<number>)})`,
                ...style,
            }}
            className={`cursor_${name} ${setClassname(className as string)}`}
        >
            {children}
        </div>
    );
};

export default Cursor;
