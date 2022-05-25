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
}

const canvasReducer = (state: State, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionState.RESIZETOP:
            return {
                ...state,
                canvasTop: payload.y
            }
        case ActionState.RESIZELEFT:
            return {
                ...state,
                canvasLeft: payload.x - 500
            }
        case ActionState.RESIZEBOTTOM:
            return {
                ...state,
                canvasTop: payload.y - 800
            }
        case ActionState.RESIZERIGHT:
            return {
                ...state,
                canvasLeft: payload.x - 500 - 800
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
        }
    );

    const resize = useRef(false);
    const resizeTop = useRef(false);
    const resizeLeft = useRef(false);
    const resizeBottom = useRef(false);
    const resizeRight = useRef(false);

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
            if (resizeTop.current) {
                dispatch({type: ActionState.RESIZETOP, payload: {x: event.pageX, y: event.pageY}})
            }
            if (resizeLeft.current) {
                dispatch({type: ActionState.RESIZELEFT, payload: {x: event.pageX, y: event.pageY}})
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
    }, [state]);

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
                showTop={true}
                showLeft={true}
                showBottom={true}
                showRight={true} />
        </div>
    )
}