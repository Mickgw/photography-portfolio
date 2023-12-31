import { gsap } from "gsap";
import { CursorPositionProps } from "./props";

/**
 * Calculates the horizontal offset needed to center a cursor horizontally.
 *
 * @param {number} cursorWidth - The width of the cursor.
 * @returns {number} The horizontal minus offset for centering the cursor.
 */
export function setCursorXoffset(cursorWidth : number) {
    let cursorXoffset = cursorWidth / 2;

    return -cursorXoffset;
}


/**
 * Calculates the vertical offset needed to center a cursor vertically.
 *
 * @param {number} cursorHeight - The height of the cursor.
 * @returns {number} The vertical minus offset for centering the cursor.
 */
export function setCursorYoffset(cursorHeight : number) {
    let cursorYoffset = cursorHeight / 2;

    return -cursorYoffset;
}


/**
 * Returns easing duration in case user enters nothing.
 *
 * @param {number} duration - The duration of the easing for the cursor movement.
 * @returns {number} The easing duration depending on user input.
 */
export function setEasingDuration(duration : number) {
    let easingDuration;

    if(duration) {
        easingDuration = duration;
    } else {
        easingDuration = 0.4;
    }

    return easingDuration;
}

/**
 * Returns easing duration in case user enters nothing.
 *
 * @param {Array<number>} ease - The easing values for the cursor movement.
 * @returns {Array<number>} The easing values depending on user input.
 */
export function setEasingValues(ease : Array<number>) {
    let easingValues;

    if(ease) {
        easingValues = ease;
    } else {
        easingValues = [0.05,0.03,0.3,0.96];
    }

    return easingValues;
}


/**
 * Set the CSS class name based on the provided value or return an empty string if not provided.
 *
 * @param {string} cursorClassname - The CSS class name to be applied.
 * @returns {string} The CSS class name or an empty string if not provided.
 */
export function setClassname(cursorClassname : string) {
    let className;

    if(cursorClassname) {
        className = cursorClassname;
    } else {
        className = "";
    }

    return className;
}


/**
 * Set the X and Y position of an element using GSAP animations.
 *
 * @param {Object} positionProps - An object containing position-related properties.
 * @param {React.RefObject<HTMLDivElement | null>} positionProps.cursorRef - A ref to the cursor element.
 * @param {number} positionProps.x - The X-coordinate.
 * @param {number} positionProps.xOffset - The X offset.
 * @param {number} positionProps.y - The Y-coordinate.
 * @param {number} positionProps.yOffset - The Y offset.
 * @returns {Function | undefined} A cleanup function to stop GSAP animations.
 */
export function setXandYposition({cursorRef, x, xOffset, y, yOffset } : CursorPositionProps) {
    if (!cursorRef.current) return;

    const tl = gsap.timeline();

    tl.set(cursorRef.current, {
        x: x + xOffset,
        y: y + yOffset,
    });

    return () => {
        tl.kill();
    };
}

  


