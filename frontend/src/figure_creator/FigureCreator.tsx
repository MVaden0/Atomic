import { FC, useState, useEffect, useRef } from 'react'
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

    const isResizing = useRef<boolean>(false);
    const resizingTop = useRef<boolean>(false);
    const resizingLeft = useRef<boolean>(false);
    const resizingBottom = useRef<boolean>(false);
    const resizingRight = useRef<boolean>(false);

    const handleMouseMove = (event: MouseEvent) => {
        // positioning
        const t: number = canvasTop;
        const l: number = canvasLeft;
        const b: number = canvasTop + canvasHeight;
        const r: number = canvasLeft + canvasWidth;
        const x: number = event.pageX;
        const y: number = event.pageY;
        const o: number = 20;

        // change cursor
        if (!isResizing.current) {
            if ((l + 500 - o < x) && (x < l + 500 + o) && (y < t + o) && (y > t - o)) {     // top left
                document.body.style.cursor = "nwse-resize";
            } else 
            if ((r + 500 - o < x) && (x < r + 500 + o) && (y < b + o) && (y > b - o)) {     // bottom right
                document.body.style.cursor = "nwse-resize";
            } else 
            if ((l + 500 - o < x) && (x < l + 500 + o) && (y < b + o) && (y > b - o)) {     // bottom left
                document.body.style.cursor = "nesw-resize";
            } else 
            if ((r + 500 - o < x) && (x < r + 500 + o) && (y < t + o) && (y > t - o)) {     // top right
                document.body.style.cursor = "nesw-resize";
            } else 
            if ((l + 500 - o < x) && (x < r + 500 + o) && (y < t + o) && (y > t - o)) {     // top
                document.body.style.cursor = "ns-resize";
            } else 
            if ((l + 500 - o < x) && (x < l + 500 + o) && (y < b + o) && (y > t - o)) {     // left
                document.body.style.cursor = "ew-resize";
            } else 
            if ((l + 500 - o < x) && (x < r + 500 + o) && (y < b + o) && (y > b - o)) {     // bottom
                document.body.style.cursor = "ns-resize";
            } else 
            if ((r + 500 - o < x) && (x < r + 500 + o) && (y < b + o) && (y > t - o)) {     // right
                document.body.style.cursor = "ew-resize";
            };
        } else {
            document.body.style.cursor = "grabbing";
            if (resizingTop.current) {                  // top
                setCanvasTop(y);
            };
            if (resizingLeft.current) {                 // left
                setCanvasLeft(x - 500);
            };
            if (resizingBottom.current) {               // bottom
                setCanvasTop(y - canvasHeight);
            };
            if (resizingRight.current) {                // right
                setCanvasLeft(x - 500 - canvasWidth);
            };
        };
    };

    const handleMouseDown = (event: MouseEvent) => {
        // positioning
        const t: number = canvasTop;
        const l: number = canvasLeft;
        const b: number = canvasTop + canvasHeight;
        const r: number = canvasLeft + canvasWidth;
        const x: number = event.pageX;
        const y: number = event.pageY;
        const o: number = 20;

        isResizing.current = true;

        if ((l + 500 - o < x) && (x < l + 500 + o) && (y < t + o) && (y > t - o)) {     // top left
            resizingTop.current = true;
            resizingLeft.current = true;
        } else 
        if ((r + 500 - o < x) && (x < r + 500 + o) && (y < b + o) && (y > b - o)) {     // bottom right
            resizingBottom.current = true;
            resizingRight.current = true;
        } else 
        if ((l + 500 - o < x) && (x < l + 500 + o) && (y < b + o) && (y > b - o)) {     // bottom left
            resizingBottom.current = true;
            resizingLeft.current = true;
        } else 
        if ((r + 500 - o < x) && (x < r + 500 + o) && (y < t + o) && (y > t - o)) {     // top right
            resizingTop.current = true;
            resizingRight.current = true;
        } else 
        if ((l + 500 - o < x) && (x < r + 500 + o) && (y < t + o) && (y > t - o)) {     // top
            resizingTop.current = true;
        } else 
        if ((l + 500 - o < x) && (x < l + 500 + o) && (y < b + o) && (y > t - o)) {     // left
            resizingLeft.current = true;
        } else 
        if ((l + 500 - o < x) && (x < r + 500 + o) && (y < b + o) && (y > b - o)) {     // bottom
            resizingBottom.current = true;
        } else 
        if ((r + 500 - o < x) && (x < r + 500 + o) && (y < b + o) && (y > t - o)) {     // right
            resizingRight.current = true;
        };
    };

    const handleMouseUp = (event: MouseEvent) => {
        isResizing.current = false;
        resizingTop.current = false;
        resizingLeft.current = false;
        resizingBottom.current = false;
        resizingRight.current = false;

        document.body.style.cursor = "alias";
    };

    // component did mount
    useEffect(() => {
        // set background canvas dimensions
        setBackgroundCanvasWidth(window.innerWidth - (250 * 2))

        // set canvas dimensions
        setCanvasWidth(800);
        setCanvasHeight(800);
        setCanvasTop((window.innerHeight - 800) / 2);
        setCanvasLeft((window.innerWidth - (250 * 2) - 800) / 2);

    }, []);

    // event listeners
    useEffect(() => {
        // mouse events
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
    });

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