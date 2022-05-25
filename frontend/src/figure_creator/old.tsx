import { FC, useState, useEffect, useRef, useReducer, useLayoutEffect } from 'react'
import style from '../styles/FigureCreator.module.css'

import { Toolbar } from './Toolbar'
import { Canvas } from './Canvas'

enum CanvasActionState {
    RESIZETOP = 'RESIZETOP',
    RESIZELEFT = 'RESIZELEFT',
    RESIZEBOTTOM = 'RESIZEBOTTOM',
    RESIZERIGHT = 'RESIZERIGHT',
}

interface Point {
    x: number;
    y: number;
}

interface CanvasAction {
    type: CanvasActionState;
    payload: Point;
}

interface CanvasState {
    toolbarWidth: number;
    backgroundCanvasWidth: number;
    canvasHeight: number; 
    canvasWidth: number;
    canvasTop: number;
    canvasLeft: number;
}

const canvasReducer = (state: CanvasState, action: CanvasAction) => {
    const { type, payload} = action;

    switch (type) {
        case CanvasActionState.RESIZETOP:
            return {
                ...state,
                canvasTop: payload.y,
                canvasLeft: payload.x - 500
            }
        case CanvasActionState.RESIZELEFT:
            return {
                ...state,
                canvasTop: payload.y,
                canvasLeft: payload.x - 500
            }
        case CanvasActionState.RESIZEBOTTOM:
            return {
                ...state,
                canvasTop: payload.y - state.canvasHeight
            }
        case CanvasActionState.RESIZERIGHT:
            return {
                ...state,
                canvasLeft: payload.x - 500 - state.canvasWidth
            }
        default:
            return state
    }
};

interface Props {
    backgroundColor: string;
}

export const FigureCreator: FC<Props> = ({backgroundColor}) => {
    const [canvasState, dispatch] = useReducer(canvasReducer, 
        {
            toolbarWidth: 250,
            backgroundCanvasWidth: window.innerWidth - 500,
            canvasHeight: 800, 
            canvasWidth: 800,
            canvasTop: (window.innerHeight - 800) / 2,
            canvasLeft: (window.innerWidth - 500 - 800) / 2
        }
    );

    const [widthState, setWidthState] = useState<number>(window.innerWidth)
    const [heightState, setHeightState] = useState<number>(window.innerHeight)

    const [toolbarWidth, setToolbarWidth] = useState<number>(250);
    const [toolbarHeight, setToolbarHeight] = useState<number>(window.innerHeight)

    const [backgroundCanvasWidth, setBackgroundCanvasWidth] = useState<number>(window.innerWidth - 250 * 2)
    const [backgroundCanvasHeight, setBackgroundCanvasHeight] = useState<number>(window.innerHeight)

    const isResizing = useRef<boolean>(false);
    const resizingTop = useRef<boolean>(false);
    const resizingLeft = useRef<boolean>(false);
    const resizingBottom = useRef<boolean>(false);
    const resizingRight = useRef<boolean>(false);

    const handleMouseMove = (event: MouseEvent) => {
        // positioning
        const t: number = canvasState.canvasTop;
        const l: number = canvasState.canvasLeft;
        const b: number = canvasState.canvasTop + canvasState.canvasHeight;
        const r: number = canvasState.canvasLeft + canvasState.canvasWidth;
        const x: number = event.pageX;
        const y: number = event.pageY;
        const o: number = 10;

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
            } 
            else {
                document.body.style.cursor = "alias";
            };
        } else {
            document.body.style.cursor = "grabbing";

            if (resizingTop.current && y > 0 && y < window.innerHeight - 800) {         // top
                dispatch({type: CanvasActionState.RESIZETOP, payload: {y: y, x: x}})
            } else

            if (resizingLeft.current && x < window.innerWidth - 800 && x > 500) {       // left
                dispatch({type: CanvasActionState.RESIZELEFT, payload: {y: y, x: x}})
            } else

            if (resizingBottom.current && y < window.innerHeight && y > 800) {          // bottom
                dispatch({type: CanvasActionState.RESIZEBOTTOM, payload: {y: y, x: x}})
            } else 
            if (resizingRight.current && x < window.innerWidth && x > 800 + 500) {      // right
                dispatch({type: CanvasActionState.RESIZERIGHT, payload: {y: y, x: x}})
            };
        };
    };

    const handleMouseDown = (event: MouseEvent) => {
        // positioning
        const t: number = canvasState.canvasTop;
        const l: number = canvasState.canvasLeft;
        const b: number = canvasState.canvasTop + canvasState.canvasHeight;
        const r: number = canvasState.canvasLeft + canvasState.canvasWidth;
        const x: number = event.pageX;
        const y: number = event.pageY;
        const o: number = 10;

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

    }, []);

    // event listeners
    useLayoutEffect(() => {
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
                canvasTop={canvasState.canvasTop}
                canvasLeft={canvasState.canvasLeft}
                canvasWidth={canvasState.canvasWidth}
                canvasHeight={canvasState.canvasHeight}
                heightState={heightState} 
                showTop={true}
                showLeft={true}
                showBottom={true}
                showRight={true} />
        </div>
    )
}