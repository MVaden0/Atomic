import { off } from 'process';
import { useCallback } from 'react'


type Props = {
    x: number;
    y: number;
    w: number;
    h: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
    canvasTop: number;
    canvasLeft: number;
    offset: number;
    selected: boolean;
}

export const computeCursorType = ({x, y, w, h, top, left, bottom, right, canvasTop, canvasLeft, offset, selected}: Props) => {
    if (selected) {
        if (
            x - canvasLeft < left + offset &&               // top left
            x - canvasLeft > left - offset && 
            y - canvasTop  < top + offset && 
            y - canvasTop > top - offset
        ) {
            document.body.style.cursor = "nwse-resize";
        } else
        if (
            x - canvasLeft < left + w + offset &&           // bottom right
            x - canvasLeft > left + w - offset && 
            y - canvasTop  < top + h + offset && 
            y - canvasTop > top + h - offset
        ) {
            document.body.style.cursor = "nwse-resize";
        } else
        if (
            x - canvasLeft < left + offset &&               // bottom left
            x - canvasLeft > left - offset && 
            y - canvasTop  < top + h + offset && 
            y - canvasTop > top + h - offset
        ) {
            document.body.style.cursor = "nesw-resize";
        } else
        if (
            x - canvasLeft < left + w + offset &&           // top right
            x - canvasLeft > left + w - offset && 
            y - canvasTop  < top + offset && 
            y - canvasTop > top - offset
        ) {
            document.body.style.cursor = "nesw-resize";
        } else 
        if (
            x - canvasLeft < right &&                       // top
            x - canvasLeft > left && 
            y - canvasTop  < top + offset && 
            y - canvasTop > top - offset
        ) {
            document.body.style.cursor = "ns-resize";
        } else
        if (
            x - canvasLeft < left + offset &&               // left
            x - canvasLeft > left - offset && 
            y - canvasTop  < bottom && 
            y - canvasTop > top
        ) {
            document.body.style.cursor = "ew-resize";
        } else 
        if (
            x - canvasLeft < right &&                       // bottom
            x - canvasLeft > left && 
            y - canvasTop  < top + h + offset && 
            y - canvasTop > top  + h - offset
        ) {
            document.body.style.cursor = "ns-resize";
        } else 
        if (
            x - canvasLeft < left + w + offset &&           // right
            x - canvasLeft > left + w +- offset && 
            y - canvasTop  < bottom && 
            y - canvasTop > top
        ) {
            document.body.style.cursor = "ew-resize";
        };
    };
};

type objectMouseDownProps = {
    x: number,
    y: number,
    top: number,
    left: number,
    bottom: number,
    right: number,
    canvasTop: number,
    canvasLeft: number,
    offset: number,
};

export const objectMouseDown = ({x, y, top, left, bottom, right, canvasTop, canvasLeft, offset}: objectMouseDownProps) => {
    let resizing = {
        top: false,
        left: false,
        bottom: false,
        right: false
    };

    if (
        x - canvasLeft < left + offset &&            // top left
        x - canvasLeft > left - offset && 
        y - canvasTop < top + offset && 
        y - canvasTop > top - offset
    ) {
        resizing.top = true;
        resizing.left = true;
    } else 
    if (
        x - canvasLeft < right + offset &&            // bottom right
        x - canvasLeft > right - offset && 
        y - canvasTop < bottom + offset && 
        y - canvasTop > bottom - offset
    ) {
        resizing.bottom = true;
        resizing.right = true;
    } else 
    if (
        x - canvasLeft < left + offset &&            // bottom left
        x - canvasLeft > left - offset && 
        y - canvasTop < bottom + offset && 
        y - canvasTop > bottom - offset
    ) {
        resizing.bottom = true;
        resizing.left = true;
    } else 
    if (
        x - canvasLeft < right + offset &&            // top right
        x - canvasLeft > right - offset && 
        y - canvasTop < top + offset && 
        y - canvasTop > top - offset
    ) {
        resizing.top = true;
        resizing.right = true;
    } else 
    if (
        x - canvasLeft < right &&            // top
        x - canvasLeft > left && 
        y - canvasTop < top + offset && 
        y - canvasTop > top - offset
    ) {
        resizing.top = true;
    } else 
    if (
        x - canvasLeft < left + offset &&       // left
        x - canvasLeft > left - offset && 
        y - canvasTop < bottom && 
        y - canvasTop > top
    ) {
        resizing.left = true;
    } else 
    if (
        x - canvasLeft < right &&            // bottom
        x - canvasLeft > left && 
        y - canvasTop < bottom + offset && 
        y - canvasTop > bottom - offset
    ) {
        resizing.bottom = true; 
    } else
    if (
        x - canvasLeft < right + 10 &&       // right
        x - canvasLeft > right - 10 && 
        y - canvasTop < bottom && 
        y - canvasTop > top
    ) {
        resizing.right = true;
    };

    return resizing;
};