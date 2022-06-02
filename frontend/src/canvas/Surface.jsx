import React from 'react'
import style from '../styles/canvas/Surface.module.css'

import { BoundingRect } from './BoundingRect'

export const Surface = ({state, backgroundCanvasRef, showLines, children}) => {

    return (
        <div 
            ref={backgroundCanvasRef}
            className={style.container} 
            style={{width: '100%', height: '100%', backgroundColor: '#1a1a1a'}} >
            <BoundingRect 
                state={state}
                showLines={showLines}
            />
            <div 
                className={style.canvasContainer} 
                style={{width: `${state.canvasWidth}px`, height: `${state.canvasHeight}px`, top: `${state.canvasTop}px`, left: `${state.canvasLeft}px`}} >
                <svg xmlns="http://www.w3.org/2000/svg" className={style.canvas} width={`${state.canvasWidth}px`} height={`${state.canvasHeight}px`} >
                    {children}
                </svg>
            </div>
        </div>
    )
}