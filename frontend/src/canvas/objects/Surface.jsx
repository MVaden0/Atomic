import React, { useCallback, useEffect } from 'react'
import style from '../../styles/canvas/Surface.module.css'

import { useCanvasContext } from '../CanvasPage'

export const Surface = ({children}) => {
    const [canvasContext, canvasDispatch] = useCanvasContext();

    const handleMouseMove = useCallback((event) => {
        const x = event.pageX;
        const y = event.pageY;

        const t = canvasContext.surface.top;
        const l = canvasContext.surface.left + canvasContext.toolbar.width;
        const w = canvasContext.surface.width;
        const h = canvasContext.surface.height;

        if (x < l) {
            alert("asdf")
        }
    }, [])

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