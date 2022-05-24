import { FC, useState } from 'react'
import style from '../styles/FigureCreator.module.css'

import { Toolbar } from './Toolbar'
import { Canvas } from './Canvas'

interface Props {
    backgroundColor: string;
}

export const FigureCreator: FC<Props> = ({backgroundColor}) => {

    const [widthState, setWidthState] = useState<number>(window.innerWidth)
    const [heightState, setHeightState] = useState<number>(window.innerHeight)

    const [toolbarWidth, setToolbarWidth] = useState<number>(250);
    const [toolbarHeight, setToolbarHeight] = useState<number>(window.innerHeight)

    const [backgroundCanvasWidth, setBackgroundCanvasWidth] = useState<number>(window.innerWidth - toolbarWidth * 2)
    const [backgroundCanvasHeight, setBackgroundCanvasHeight] = useState<number>(window.innerHeight)

    const [canvasWidth, setCanvasWidth] = useState<number>(800)
    const [canvasHeight, setCanvasHeight] = useState<number>(800)
    const [canvasTop, setCanvasTop] = useState<number>((backgroundCanvasHeight - canvasHeight) / 2)
    const [canvasLeft, setCanvasLeft] = useState<number>((backgroundCanvasWidth - canvasWidth) / 2)

    return (
        <div 
            className={style.pageContainer} 
            style={{width: widthState, height: heightState, backgroundColor: backgroundColor}} >
            <Toolbar 
                width={toolbarWidth} 
                height={toolbarHeight} 
                backgroundColor="#8D6B94" />
            <Toolbar 
                width={toolbarWidth} 
                height={toolbarHeight} 
                backgroundColor="#B185A7" />
            <Canvas
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
        </div>
    )
}