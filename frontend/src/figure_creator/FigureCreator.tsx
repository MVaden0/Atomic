import { FC, useState, useEffect, useRef, useReducer, useLayoutEffect } from 'react'
import style from '../styles/FigureCreator.module.css'

import { Toolbar } from './Toolbar'
import { Canvas } from './Canvas'

interface Point {
    x: number;
    y: number;
}

enum ActionState {
    RESIZETOP = 'RESIZETOP',
    RESIZELEFT = 'RESIZELEFT',
    RESIZEBOTTOM = 'RESIZEBOTTOM',
    RESIZERIGHT = 'RESIZERIGHT',
}

interface Action {
    type: ActionState;
    payload: Point;
}

interface State {
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
        case ActionState.RESIZETOP:
            return {
                ...state,
                canvasTop: payload.y,
                canvasHeight: window.innerHeight - payload.y * 2
            }
        case ActionState.RESIZELEFT:
            return {
                ...state,
                canvasLeft: payload.x - 500,
                canvasWidth: window.innerWidth + 500 - payload.x * 2
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
                canvasWidth: window.innerWidth - 500 - (2 * (window.innerWidth - payload.x))
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
            canvasHeight: 800, 
            canvasWidth: 800,
            canvasTop: (window.innerHeight - 800) / 2,
            canvasLeft: (window.innerWidth - 500 - 800) / 2,
            offset: 20,
            minW: 100,
            minH: 100,
        }
    );

    const resize = useRef<boolean>(false);
    const resizeTop = useRef<boolean>(false);
    const resizeLeft = useRef<boolean>(false);
    const resizeBottom = useRef<boolean>(false);
    const resizeRight = useRef<boolean>(false);

    const handleMouseMove = (event: MouseEvent) => {
        if (!resize.current) {
            if (
                event.pageY < state.canvasTop + state.offset && 
                event.pageY > state.canvasTop - state.offset &&
                event.pageX < state.canvasLeft + state.offset + 500 &&
                event.pageX > state.canvasLeft - state.offset + 500
            ) {
                document.body.style.cursor = "nwse-resize";                                  // top left
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
                event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.offset + 500 &&
                event.pageX > state.canvasLeft + state.canvasWidth - state.offset + 500
            ) {
                document.body.style.cursor = "nwse-resize";                                  // bottom right
            } else
            if (
                event.pageY < state.canvasTop + state.offset && 
                event.pageY > state.canvasTop - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.offset + 500 &&
                event.pageX > state.canvasLeft + state.canvasWidth - state.offset + 500
            ) {
                document.body.style.cursor = "nesw-resize";                                  // top right
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
                event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
                event.pageX < state.canvasLeft + state.offset + 500 &&
                event.pageX > state.canvasLeft - state.offset + 500
            ) {
                document.body.style.cursor = "nesw-resize";                                  // bottom left
            } else
            if (
                event.pageY < state.canvasTop + state.offset && 
                event.pageY > state.canvasTop - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + 500 &&
                event.pageX > state.canvasLeft + 500
            ) {
                document.body.style.cursor = "ns-resize";                                   // top
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight && 
                event.pageY > state.canvasTop &&
                event.pageX < state.canvasLeft + state.offset + 500 &&
                event.pageX > state.canvasLeft - state.offset + 500
            ) {
                document.body.style.cursor = "ew-resize";                                   // left
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
                event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
                event.pageX < state.canvasLeft + state.canvasWidth + 500 &&
                event.pageX > state.canvasLeft + 500
            ) {
                document.body.style.cursor = "ns-resize";                                   // bottom
            } else
            if (
                event.pageY < state.canvasTop + state.canvasHeight && 
                event.pageY > state.canvasTop &&
                event.pageX < state.canvasLeft + state.canvasWidth + state.offset + 500 &&
                event.pageX > state.canvasLeft + state.canvasWidth - state.offset + 500
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
                event.pageX < ((window.innerWidth - 500) / 2) + 500 - (state.minW / 2) && 
                event.pageX > 500 + state.minW
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
                event.pageX - 500 > 
                ((window.innerWidth - 500) / 2) + (state.minW / 2) && 
                event.pageX < window.innerWidth - state.minW
            ) {                                                                             
                dispatch({type: ActionState.RESIZERIGHT, payload: {x: event.pageX, y: event.pageY}})    // right
            }
        }
    };

    const handleMouseDown = (event: MouseEvent) => {
        resize.current = true;

        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.offset + 500 &&
            event.pageX > state.canvasLeft - state.offset + 500
        ) {
            resizeTop.current = true;                                                    // top left
            resizeLeft.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + 500 &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + 500
        ) {
            resizeBottom.current = true;                                                 // bottom right
            resizeRight.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + 500 &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + 500
        ) {
            resizeTop.current = true;                                                    // top right
            resizeRight.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.offset + 500 &&
            event.pageX > state.canvasLeft - state.offset + 500
        ) {
            resizeBottom.current = true;                                                 // bottom left
            resizeLeft.current = true;

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + 500 &&
            event.pageX > state.canvasLeft + 500
        ) {
            resizeTop.current = true;                                                    // top

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight && 
            event.pageY > state.canvasTop &&
            event.pageX < state.canvasLeft + state.offset + 500 &&
            event.pageX > state.canvasLeft - state.offset + 500
        ) {
            resizeLeft.current = true;                                                   // left

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + 500 &&
            event.pageX > state.canvasLeft + 500
        ) {
            resizeBottom.current = true;                                                 // bottom

            document.body.style.cursor = 'grabbing';
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight && 
            event.pageY > state.canvasTop &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + 500 &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + 500
        ) {
            resizeRight.current = true;                                                  // right

            document.body.style.cursor = 'grabbing';
        };
    };

    const handleMouseUp = (event: MouseEvent) => {
        document.body.style.cursor = 'alias';

        resize.current = false;

        resizeTop.current = false;
        resizeLeft.current = false;
        resizeBottom.current = false;
        resizeRight.current = false;

    };

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
                width={250} 
                height={936} 
                backgroundColor="#8D6B94" />
            <Toolbar 
                width={250} 
                height={936} 
                backgroundColor="#B185A7" />
            <Canvas
                backgroundCanvasWidth={1420}
                backgroundCanvasHeight={936}
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