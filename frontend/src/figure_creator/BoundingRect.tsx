import { FC } from 'react'
import style from '../styles/FigureCreator.module.css'

interface Props {
    backgroundCanvasWidth: number;
    backgroundCanvasHeight: number;
    canvasTop: number;
    canvasLeft: number;
    canvasWidth: number;
    canvasHeight: number;
    heightState: number;
    showTop: boolean;
    showLeft: boolean;
    showBottom: boolean;
    showRight: boolean;
}

export const BoundingRect: FC<Props> = ({backgroundCanvasWidth, backgroundCanvasHeight, canvasTop, canvasLeft, canvasWidth, canvasHeight, heightState, showTop, showLeft, showBottom, showRight}) => {

    return (
        <svg 
            className={style.backgroundCanvas} 
            width={`${backgroundCanvasWidth}px`} 
            height={`${backgroundCanvasHeight}px`} >
            <line 
                className={style.boundingLine}
                style={{display: showTop ? 'block' : 'none'}}
                x1="0"
                y1={canvasTop}
                x2={backgroundCanvasWidth}
                y2={canvasTop} />
            <line 
                className={style.boundingLine}
                style={{display: showLeft ? 'block' : 'none'}}
                x1={canvasLeft} 
                y1="0" 
                x2={canvasLeft} 
                y2={heightState} />
            <line 
                className={style.boundingLine}
                style={{display: showBottom ? 'block' : 'none'}}
                x1="0"
                y1={canvasTop + canvasHeight}
                x2={backgroundCanvasWidth}
                y2={canvasTop + canvasHeight} />
            <line 
                className={style.boundingLine}
                style={{display: showRight ? 'block' : 'none'}}
                x1={canvasLeft + canvasWidth} 
                y1="0" 
                x2={canvasLeft + canvasWidth} 
                y2={heightState} />
        </svg>
    )
}