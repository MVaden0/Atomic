import { useState, useEffect } from 'react'
import style from '../styles/FigureCreator.module.css'

import ToolBar from '../components/figureCreator/ToolBar';
import Canvas from '../components/figureCreator/Canvas';

export default function FigureCreator() {
    const [pageWidth, setPageWidth] = useState();
    const [pageHeight, setPageHeight] = useState();

    const [toolBarWidth, setToolBarWidth] = useState(0);

    const [backgroundCanvasWidth, setBackgroundCanvasWidth] = useState(0);

    useEffect(() => {
        setPageWidth(window.innerWidth);
        setPageHeight(window.innerHeight);

        setToolBarWidth(250);

        setBackgroundCanvasWidth(pageWidth - (toolBarWidth * 2))
    });


    return (
        <div className={style.mainPage} style={{backgroundColor: '#1a1a1a', width: `${pageWidth}px`, height: `${pageHeight}px`}}>
            <ToolBar backgroundColor='#ff0000' width={toolBarWidth} height={pageHeight} />
            <ToolBar backgroundColor='#00ff00' width={toolBarWidth} height={pageHeight} />
            <Canvas backgroundColor='#0000ff' backgroundWidth={backgroundCanvasWidth} backgroundHeight={pageHeight} />
        </div>
    );
}