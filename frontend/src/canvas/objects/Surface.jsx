import React, { useCallback, useEffect } from 'react'
import style from '../../styles/canvas/Surface.module.css'

import { useCanvasContext, Action } from '../CanvasPage'

export const Surface = ({children}) => {
    const [canvasContext, canvasDispatch] = useCanvasContext();

    const handleMouseMove = useCallback((event) => {
        // mouse position
        const x = event.pageX;
        const y = event.pageY;

        // positioning
        const t = canvasContext['surface']['top'];
        const l = canvasContext['surface']['left'] + canvasContext['toolbar']['width'];
        const b = t + canvasContext['surface']['height'];
        const r = l + canvasContext['surface']['width'];

        // offset
        const o = canvasContext['global']['resizeOffset'];

        if (x > l - o && x < l + o && y > t - o && y < t + o) {     // top left
            document.body.style.cursor = 'nwse-resize';
        } else
        if (x > r - o && x < r + o && y > b - o && y < b + o) {     // bottom right
            document.body.style.cursor = 'nwse-resize';
        } else
        if (x > r - o && x < r + o && y > t - o && y < t + o) {     // top right
            document.body.style.cursor = 'nesw-resize';
        } else
        if (x > l - o && x < l + o && y > b - o && y < b + o) {     // bottom left
            document.body.style.cursor = 'nesw-resize';
        } else
        if (x > l + o && x < r - o && y > t - o && y < t + o) {     // top
            document.body.style.cursor = 'ns-resize';
        } else
        if (x > l - o && x < l + o && y > t + o && y < b - o) {     // left
            document.body.style.cursor = 'ew-resize';
        } else
        if (x > l + o && x < r - o && y > b - o && y < b + o) {     // bottom
            document.body.style.cursor = 'ns-resize';
        } else
        if (x > r - o && x < r + o && y > t + o && y < b - o) {     // left
            document.body.style.cursor = 'ew-resize';
        } else {
            document.body.style.cursor = 'alias';
        };

        canvasDispatch({type: Action.EDIT, payload: {keys: ['surface', 'width'], value: 400}})

    }, [canvasContext])

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <div 
            className={style.container} 
            style={{backgroundColor: canvasContext.surface.backgroundColor}} >
            <div 
                className={style.canvasContainer} 
                style={{
                    width: `${canvasContext.surface.width}px`, 
                    height: `${canvasContext.surface.height}px`, 
                    top: `${canvasContext.surface.top}px`, 
                    left: `${canvasContext.surface.left}px`
                }}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={style.canvas} 
                width={`${canvasContext.surface.width}px`} 
                height={`${canvasContext.surface.height}px`} 
                style={{
                    backgroundColor: canvasContext.surface.foregroundColor
                }}>
                    {children}
                </svg>
            </div>
        </div>
    )
}