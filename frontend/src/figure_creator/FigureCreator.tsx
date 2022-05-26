import { FC, useState, useEffect, useRef, useReducer, useLayoutEffect, useCallback } from 'react'
import style from '../styles/FigureCreator.module.css'

import { Toolbar } from './Toolbar'
import { Canvas } from './Canvas'

interface Point {
    x: number;
    y: number;
}

interface Initialize {
    bgCanvasHeight: number;
    bgCanvasWidth: number;
    bgCanvasTop: number;
    bgCanvasLeft: number;

    canvasHeight: number; 
    canvasWidth: number;
    canvasTop: number;
    canvasLeft: number;

    offset: number;
    minW: number;
    minH: number;
}

enum ActionState {
    INITIALIZE = 'INITIALIZE',
    RESIZETOP = 'RESIZETOP',
    RESIZELEFT = 'RESIZELEFT',
    RESIZEBOTTOM = 'RESIZEBOTTOM',
    RESIZERIGHT = 'RESIZERIGHT',
}

interface Action {
    type: ActionState;
    payload: Point | any;
}

interface State {
    bgCanvasHeight: number;
    bgCanvasWidth: number;
    bgCanvasTop: number;
    bgCanvasLeft: number;

    canvasHeight: number; 
    canvasWidth: number;
    canvasTop: number;
    canvasLeft: number;

    offset: number;
    minW: number;
    minH: number;
}

const canvasReducer = (state: State, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionState.INITIALIZE:
            return {
                bgCanvasHeight: payload.bgCanvasHeight,
                bgCanvasWidth: payload.bgCanvasWidth,
                bgCanvasTop: payload.bgCanvasTop,
                bgCanvasLeft: payload.bgCanvasLeft,

                canvasHeight: payload.canvasHeight,
                canvasWidth: payload.canvasWidth,
                canvasTop: payload.canvasTop,
                canvasLeft: payload.canvasLeft,

                offset: payload.offset,
                minW: payload.minW,
                minH: payload.minH
            }
        case ActionState.RESIZETOP:
            return {
                ...state,
                canvasTop: payload.y,
                canvasHeight: window.innerHeight - payload.y * 2
            }
        case ActionState.RESIZELEFT:
            return {
                ...state,
                canvasLeft: payload.x - state.bgCanvasLeft,
                canvasWidth: window.innerWidth + state.bgCanvasLeft - payload.x * 2
            }
        case ActionState.RESIZEBOTTOM:
            return {
                ...state,
                canvasTop: payload.y - state.canvasHeight,
                canvasHeight: window.innerHeight - (2 * (window.innerHeight - payload.y))
            }
        case ActionState.RESIZERIGHT:
            return {
                ...state,
                canvasLeft: window.innerWidth - payload.x,
                canvasWidth: window.innerWidth - state.bgCanvasLeft - (2 * (window.innerWidth - payload.x))
            }
        default:
            return state
    }
};

interface Props {
    backgroundColor: string;
}

export const FigureCreator: FC<Props> = ({backgroundColor}) => {

    const [state, dispatch] = useReducer(canvasReducer, 
        {
            bgCanvasHeight: 0,
            bgCanvasWidth: 0,
            bgCanvasTop: 0,
            bgCanvasLeft: 0,

            canvasHeight: 0, 
            canvasWidth: 0,
            canvasTop: 0,
            canvasLeft: 0,

            offset: 0,
            minW: 0,
            minH: 0,
        }
    );

    // background canvas reference
    const backgroundCanvasRef = useRef<HTMLDivElement>(null);

    const resize = useRef<boolean>(false);
    const resizeTop = useRef<boolean>(false);
    const resizeLeft = useRef<boolean>(false);
    const resizeBottom = useRef<boolean>(false);
    const resizeRight = useRef<boolean>(false);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        if (!resize.current) {
            if (
                event.pageY < state.canvasTop + state.offset && 
                event.pageY > state.canvasTop - state.offset &&
                event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "nwse-resize";                                  // top left
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
                event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "nwse-resize";                                  // bottom right
            } else
            if (
                event.pageY < state.canvasTop + state.offset && 
                event.pageY > state.canvasTop - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "nesw-resize";                                  // top right
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
                event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
                event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "nesw-resize";                                  // bottom left
            } else
            if (
                event.pageY < state.canvasTop + state.offset && 
                event.pageY > state.canvasTop - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "ns-resize";                                   // top
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight && 
                event.pageY > state.canvasTop &&
                event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "ew-resize";                                   // left
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
                event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "ns-resize";                                   // bottom
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight && 
                event.pageY > state.canvasTop &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
                event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
            ) {
                document.body.style.cursor = "ew-resize";                                   // right
            } else {
                document.body.style.cursor = "alias";
            };
        } else {
            if (
                resizeTop.current && 
                event.pageY < (window.innerHeight / 2) - (state.minH / 2) && 
                event.pageY > 0 + state.minH
            ) {                                  
                dispatch({type: ActionState.RESIZETOP, payload: {x: event.pageX, y: event.pageY}})      // top
            }
            if (
                resizeLeft.current && 
                event.pageX < ((window.innerWidth - state.bgCanvasLeft) / 2) + state.bgCanvasLeft - (state.minW / 2) && 
                event.pageX > state.bgCanvasLeft + state.minW
            ) {                   
                dispatch({type: ActionState.RESIZELEFT, payload: {x: event.pageX, y: event.pageY}})     // left
            }
            if (resizeBottom.current &&
                event.pageY > (window.innerHeight / 2) + (state.minH / 2) &&
                event.pageY < window.innerHeight - state.minH
            ) {
                dispatch({type: ActionState.RESIZEBOTTOM, payload: {x: event.pageX, y: event.pageY}})   // bottom
            }
            if (
                resizeRight.current && 
                event.pageX - state.bgCanvasLeft > 
                ((window.innerWidth - state.bgCanvasLeft) / 2) + (state.minW / 2) && 
                event.pageX < window.innerWidth - state.minW
            ) {                                                                             
                dispatch({type: ActionState.RESIZERIGHT, payload: {x: event.pageX, y: event.pageY}})    // right
            }
        }
    }, [state]);

    const handleMouseDown = useCallback((event: MouseEvent) => {
        resize.current = true;

        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
        ) {
            resizeTop.current = true;                                                    // top left
            resizeLeft.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
        ) {
            resizeBottom.current = true;                                                 // bottom right
            resizeRight.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
        ) {
            resizeTop.current = true;                                                    // top right
            resizeRight.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
        ) {
            resizeBottom.current = true;                                                 // bottom left
            resizeLeft.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.bgCanvasLeft
        ) {
            resizeTop.current = true;                                                    // top

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight && 
            event.pageY > state.canvasTop &&
            event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
        ) {
            resizeLeft.current = true;                                                   // left

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.bgCanvasLeft
        ) {
            resizeBottom.current = true;                                                 // bottom

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight && 
            event.pageY > state.canvasTop &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
        ) {
            resizeRight.current = true;                                                  // right

            document.body.style.cursor = 'grabbing';
        };
    }, [state]);

    const handleMouseUp = (event: MouseEvent) => {
        document.body.style.cursor = 'alias';

        resize.current = false;

        resizeTop.current = false;
        resizeLeft.current = false;
        resizeBottom.current = false;
        resizeRight.current = false;

    };

    // initialize state
    useLayoutEffect(() => {
        const backgroundCanvas: HTMLDivElement = backgroundCanvasRef.current!;
        const {height, width, top, left} = backgroundCanvas.getBoundingClientRect();

        dispatch({type: ActionState.INITIALIZE, payload: {
            bgCanvasHeight: height,
            bgCanvasWidth: width,
            bgCanvasTop: top,
            bgCanvasLeft: left,

            canvasHeight: 800, 
            canvasWidth: 800,
            canvasTop: (window.innerHeight - 800) / 2,
            canvasLeft: (window.innerWidth - left - 800) / 2,

            offset: 20,
            minW: 100,
            minH: 100,
        }})

    }, []);

    // event listeners
    useEffect(() => {
        // mouse events
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [state, handleMouseDown, handleMouseMove]);

    return (
        <div 
            className={style.pageContainer} 
            style={{width: 1920, height: 936, backgroundColor: backgroundColor}} >
            <Toolbar 
                width={280} 
                height={936} 
                backgroundColor="#83b4b3" />
            <Canvas
                backgroundCanvasWidth={1420}
                backgroundCanvasHeight={936}
                backgroundCanvasRef={backgroundCanvasRef}
                canvasTop={state.canvasTop}
                canvasLeft={state.canvasLeft}
                canvasWidth={state.canvasWidth}
                canvasHeight={state.canvasHeight}
                heightState={936} 
                showTop={false}
                showLeft={false}
                showBottom={false}
                showRight={false} />
        </div>
    )
}