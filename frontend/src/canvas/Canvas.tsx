import { FC, useEffect, useRef, useReducer, useLayoutEffect, useCallback } from 'react'

import style from '../styles/canvas/Canvas.module.css'

import { canvasMouseDown, canvasMouseMove } from './CanvasAPI'

import { Toolbar } from './toolbar/Toolbar'
import { CanvasSurface } from './CanvasSurface'

interface Point {
    x: number;
    y: number;
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

export interface State {
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

/*
const objects = {
    "objects" :[
        {
            "tag": "canvas",
            "title": "canvas",
            "type": "canvas",
            "attributes": [
                {
                    "tag": "dimensions",
                    "parameters": [
                        {
                            "tag": "x",
                            "value": 0
                        },
                        {
                            "tag": "y",
                            "value": 0
                        },
                        {
                            "tag": "width",
                            "value": 0
                        },
                        {
                            "tag": "height",
                            "value": 0
                        }
                    ]
                },
                {
                    "tag": "color",
                    "parameters": [
                        {
                            "tag": "backgroundColor",
                            "value": "#1a1a1a"
                        }
                    ]
                }
            ]
        },
        {
            "tag": "circle1",
            "title": "circle1",
            "type": "circle",
            "attributes": [
                {
                    "tag": "dimensions",
                    "parameters": [
                        {
                            "tag": "x",
                            "value": 0
                        },
                        {
                            "tag": "y",
                            "value": 0
                        },
                        {
                            "tag": "width",
                            "value": 10
                        },
                        {
                            "tag": "height",
                            "value": 10
                        }
                    ]
                },
                {
                    "tag": "color",
                    "parameters": [
                        {
                            "tag": "backgroundColor",
                            "value": "#123def"
                        }
                    ]
                }
            ] 
        }
    ]
};
*/

export const Canvas: FC<Props> = ({backgroundColor}) => {

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

    // background canvas ref
    const backgroundCanvasRef = useRef<HTMLDivElement>(null);

    // refs have to be updated sync
    const resize = useRef<boolean>(false);
    const resizeTop = useRef<boolean>(false);
    const resizeLeft = useRef<boolean>(false);
    const resizeBottom = useRef<boolean>(false);
    const resizeRight = useRef<boolean>(false);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        const resizing = canvasMouseMove(
            resize.current,
            resizeTop.current,
            resizeLeft.current,
            resizeBottom.current,
            resizeRight.current,
            event,
            state
        );

        if (resizing.top) { dispatch({type: ActionState.RESIZETOP, payload: {x: event.pageX, y: event.pageY}}); };
        if (resizing.left) { dispatch({type: ActionState.RESIZELEFT, payload: {x: event.pageX, y: event.pageY}}); };
        if (resizing.bottom) { dispatch({type: ActionState.RESIZEBOTTOM, payload: {x: event.pageX, y: event.pageY}}); };
        if (resizing.right) { dispatch({type: ActionState.RESIZERIGHT, payload: {x: event.pageX, y: event.pageY}}); };
    }, [state]);

    const handleMouseDown = useCallback((event: MouseEvent) => {
        resize.current = true;
        
        const resizing = canvasMouseDown(event, state);

        if (resizing.top) { resizeTop.current = true; };
        if (resizing.left) { resizeLeft.current = true; };
        if (resizing.bottom) { resizeBottom.current = true; };
        if (resizing.right) { resizeRight.current = true; };
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
        const { height, width, top, left } = backgroundCanvas.getBoundingClientRect();

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
            style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: backgroundColor}} >
            <Toolbar 
                width={220} 
                height={window.innerHeight} 
                backgroundColor="#1a1a1a" />
            <CanvasSurface
                backgroundCanvasRef={backgroundCanvasRef}
                state={state}
                showLines={false}
            />
        </div>
    )
}