import { FC, LegacyRef} from 'react'
import style from '../styles/FigureCreator.module.css'

import { BoundingRect } from './BoundingRect'

interface Props {
    backgroundCanvasWidth: number;
    backgroundCanvasHeight: number;
    backgroundCanvasRef: LegacyRef<HTMLDivElement>;
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

export const Canvas: FC<Props> = ({backgroundCanvasWidth, backgroundCanvasHeight, backgroundCanvasRef, canvasTop, canvasLeft, canvasWidth, canvasHeight, heightState, showTop, showLeft, showBottom, showRight}) => {

    return (
        <div 
            ref={backgroundCanvasRef}
            className={style.container} 
            style={{width: '100%', height: '100%', backgroundColor: '#83b4b3'}} >
            <BoundingRect 
                backgroundCanvasWidth={backgroundCanvasWidth}
                backgroundCanvasHeight={backgroundCanvasHeight}
                canvasTop={canvasTop}
                canvasLeft={canvasLeft}
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                heightState={heightState} 
                showTop={showTop}
                showLeft={showLeft}
                showBottom={showBottom}
                showRight={showRight} />
            <div 
                className={style.canvasContainer} 
                style={{width: `${canvasWidth}px`, height: `${canvasHeight}px`, top: `${canvasTop}px`, left: `${canvasLeft}px`}} >
                <svg xmlns="http://www.w3.org/2000/svg" className={style.canvas} width={`${canvasWidth}px`} height={`${canvasHeight}px`} >

                </svg>
            </div>
        </div>
    )
}