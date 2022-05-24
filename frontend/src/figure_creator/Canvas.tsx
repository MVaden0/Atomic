import { FC } from 'react'
import style from '../styles/FigureCreator.module.css'

import { BoundingRect } from './BoundingRect'

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

export const Canvas: FC<Props> = ({backgroundCanvasWidth, backgroundCanvasHeight, canvasTop, canvasLeft, canvasWidth, canvasHeight, heightState, showTop, showLeft, showBottom, showRight}) => {

    return (
        <div 
            className={style.container} 
            style={{width: backgroundCanvasWidth, height: backgroundCanvasHeight, backgroundColor: '#1a1a1a'}} >
            <BoundingRect 
                backgroundCanvasWidth={backgroundCanvasWidth}
                backgroundCanvasHeight={backgroundCanvasHeight}
                canvasTop={canvasTop}
                canvasLeft={canvasLeft}
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                heightState={heightState} 
                showTop={true}
                showLeft={true}
                showBottom={true}
                showRight={true} />
            <div 
                className={style.canvasContainer} 
                style={{width: `${canvasWidth}px`, height: `${canvasHeight}px`, top: `${canvasTop}px`, left: `${canvasLeft}px`}} >
                <svg xmlns="http://www.w3.org/2000/svg" className={style.canvas} width={`${canvasWidth}px`} height={`${canvasHeight}px`} >

                </svg>
            </div>
        </div>
    )
}