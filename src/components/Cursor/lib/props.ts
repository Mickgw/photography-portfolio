/**
 * Props for the Cursor component.
 *
 * @interface CursorProps
 */
export interface CursorProps {
    /**
     * The name of the cursor.
     */
    name: string; // required

    /**
     * The width of the cursor.
     */
    width: number; // required

    /**
     * The height of the cursor.
     */
    height: number; // required

    /**
     * The z-index of the cursor.
     */
    zIndex?: number;

    /**
     * Additional inline CSS styles for the cursor.
     */
    style?: React.CSSProperties;

    /**
     * An array representing easing values for cursor transitions.
     */
    ease?: Array<number>;

    /**
     * The duration of the cursor's transition.
     */
    easingDuration?: number;

    /**
     * Content to be rendered inside the cursor.
     */
    children?: React.ReactNode;

    /**
     * Additional CSS class names for the cursor.
     */
    className?: string;
}


export interface CursorPositionProps {
    cursorRef?: any;
    x: number;
    xOffset: number;
    y: number;
    yOffset: number;
}

export interface CursorContextValue {
    cursorType: string;
    cursorChangeHandler: (cursorType: string) => void;
}