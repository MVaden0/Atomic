import { FC } from 'react'
import style from '../styles/canvas/BoundingRect.module.css'

import { State } from './Canvas'


export const BoundingRect = ({state, showLines}) => {

    return (
        <svg 
            className={style.backgroundCanvas} 
            width={`${state.bgCanvasWidth}px`} 
            height={`${state.bgCanvasHeight}px`} >
            <line 
                className={style.boundingLine}
                style={{display: showLines ? 'block' : 'none'}}
                x1="0"
                y1={state.canvasTop}
                x2={state.bgCanvasWidth}
                y2={state.canvasTop} />
            <line 
                className={style.boundingLine}
                style={{display: showLines ? 'block' : 'none'}}
                x1={state.canvasLeft} 
                y1="0" 
                x2={state.canvasLeft} 
                y2={window.innerHeight} />
            <line 
                className={style.boundingLine}
                style={{display: showLines ? 'block' : 'none'}}
                x1="0"
                y1={state.canvasTop + state.canvasHeight}
                x2={state.bgCanvasWidth}
                y2={state.canvasTop + state.canvasHeight} />
            <line 
                className={style.boundingLine}
                style={{display: showLines ? 'block' : 'none'}}
                x1={state.canvasLeft + state.canvasWidth} 
                y1="0" 
                x2={state.canvasLeft + state.canvasWidth} 
                y2={window.innerHeight} />
        </svg>
    )
}