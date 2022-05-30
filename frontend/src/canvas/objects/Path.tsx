import { FC, useState, useCallback, useEffect, useRef, useReducer } from 'react'

import { ObjectBoundingRect } from './ObjectBoundingRect'
import { State } from '../Canvas'
import { Point } from'../CanvasObjectTypes'
import { computeCursorType, objectMouseDown } from './ObjectAPI'

enum ActionState {
    MOVE = 'MOVE',
    RESIZETOP = 'RESIZETOP',
    RESIZEBOTTOM = 'RESIZEBOTTOM',
    RESIZELEFT = 'RESIZELEFT',
    RESIZERIGHT = 'RESIZERIGHT'
}

interface Action {
    type: ActionState;
    payload: Point | any;
}

export interface ObjectState {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
}

const objectReducer = (objectState: ObjectState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionState.MOVE:
            return {
                ...objectState,
                cx: payload.x,
                cy: payload.y,
            }
        case ActionState.RESIZETOP:
            return {
                ...objectState,
                ry: payload.y
            }
        case ActionState.RESIZEBOTTOM:
            return {
                ...objectState,
                ry: payload.y
            }
        case ActionState.RESIZELEFT:
            return {
                ...objectState,
                rx: payload.x
            }
        case ActionState.RESIZERIGHT:
            return {
                ...objectState,
                rx: payload.x
            }
    }
};

interface Props {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    fill: string;
    canvasState: State;
}

export const Path: FC<Props> = ({cx, cy, rx, ry, fill, canvasState}) => {
    const [objectState, dispatch] = useReducer(objectReducer, {
        cx: cx,
        cy: cy,
        rx: rx,
        ry: ry,
    });

    // is shape currently selected?
    const [selected, setSelected] = useState<boolean>(false);

    // is shape currently moving?
    const moving = useRef<boolean>(false);

    // start position of cursor and shape in moving state
    const movingCursorStart = useRef<Point>({x: 0, y: 0});
    const movingShapeStart = useRef<Point>({x: 0, y: 0});

    // reference to svg element
    const objectRef = useRef<SVGRectElement>(null);

    // resize state
    const resize = useRef<boolean>(false);
    const resizeTop = useRef<boolean>(false);
    const resizeLeft = useRef<boolean>(false);
    const resizeBottom = useRef<boolean>(false);
    const resizeRight = useRef<boolean>(false);

    // start position of cursor and shape in resizing state
    const resizingCursorStart = useRef<Point>({x: 0, y: 0});
    const resizingShapeStart = useRef<Point>({x: 0, y: 0});

    const handleClick = useCallback((event: MouseEvent) => {
        if (event.target !== objectRef.current) {
            setSelected(false);
        }
    }, []);

    const objectClick = useCallback((event: MouseEvent) => {
        setSelected(true)
    }, []);

    const mouseDown = useCallback((event: MouseEvent) => {
        const resizing = objectMouseDown({
            x: event.pageX,
            y: event.pageY,
            top: objectState.cy - objectState.ry,
            left: objectState.cx - objectState.rx,
            bottom: objectState.cy + objectState.ry,
            right: objectState.cx + objectState.rx,
            canvasTop: canvasState.canvasTop + canvasState.bgCanvasTop,
            canvasLeft: canvasState.canvasLeft + canvasState.bgCanvasLeft,
            offset: 5
        });

        if (resizing.top || resizing.left || resizing.bottom || resizing.right) {
            resizingCursorStart.current = {x: event.pageX, y: event.pageY};
            resizingShapeStart.current = {x: objectState.rx, y: objectState.ry};
        } else {
            moving.current = true;
        }

        if (resizing.top) { resizeTop.current = true; };
        if (resizing.left) { resizeLeft.current = true; };
        if (resizing.bottom) { resizeBottom.current = true; };
        if (resizing.right) { resizeRight.current = true; };


        if (moving.current) {
            movingCursorStart.current.x = event.pageX;
            movingShapeStart.current.x = objectState.cx;
            movingCursorStart.current.y = event.pageY;
            movingShapeStart.current.y = objectState.cy;
        };
        
    }, [objectState, canvasState]);

    const mouseMove = useCallback((event: MouseEvent) => {
        if (moving.current && selected) {
            const dxCursorMove = movingCursorStart.current.x - event.pageX;
            const dxShapeMove = movingShapeStart.current.x - dxCursorMove;

            const dyCursorMove = movingCursorStart.current.y - event.pageY;
            const dyShapeMove = movingShapeStart.current.y - dyCursorMove;

            dispatch({type: ActionState.MOVE, payload: {x: dxShapeMove, y: dyShapeMove}});
        }

        computeCursorType({
            x: event.pageX,
            y: event.pageY,
            w: objectState.rx * 2,
            h: objectState.ry * 2,
            top: objectState.cy - objectState.ry,
            left: objectState.cx - objectState.rx,
            bottom: objectState.cy + objectState.ry,
            right: objectState.cx + objectState.rx,
            canvasTop: canvasState.canvasTop + canvasState.bgCanvasTop,
            canvasLeft: canvasState.canvasLeft + canvasState.bgCanvasLeft,
            offset: 5,
            selected: selected
        });

        if (resizeTop.current && event.pageY - canvasState.canvasTop - canvasState.bgCanvasTop < objectState.cy - 10) {
            const dyCursorResize = resizingCursorStart.current.y - event.pageY;
            const dyShapeResize = resizingShapeStart.current.y + dyCursorResize;
            dispatch({type: ActionState.RESIZETOP, payload: {x: 0, y: dyShapeResize}});
        };

        if (resizeBottom.current && event.pageY - canvasState.canvasTop - canvasState.bgCanvasTop > objectState.cy + 10) {
            const dyCursorResize = event.pageY - resizingCursorStart.current.y;
            const dyShapeResize = resizingShapeStart.current.y + dyCursorResize;
            dispatch({type: ActionState.RESIZEBOTTOM, payload: {x: 0, y: dyShapeResize}});
        };

        if (resizeLeft.current && event.pageX - canvasState.canvasLeft - canvasState.bgCanvasLeft < objectState.cx - 10) {
            const dxCursorResize = resizingCursorStart.current.x - event.pageX;
            const dxShapeResize = resizingShapeStart.current.x + dxCursorResize;
            dispatch({type: ActionState.RESIZELEFT, payload: {x: dxShapeResize, y: 0}});
        };

        if (resizeRight.current && event.pageX - canvasState.canvasLeft - canvasState.bgCanvasLeft > objectState.cx + 10) {
            const dxCursorResize = event.pageX - resizingCursorStart.current.x;
            const dxShapeResize = resizingShapeStart.current.x + dxCursorResize;
            dispatch({type: ActionState.RESIZERIGHT, payload: {x: dxShapeResize, y: 0}});
        };

    }, [selected, objectState, canvasState, computeCursorType]);

    const mouseUp = useCallback((event: MouseEvent) => {
        moving.current = false;

        resize.current = false;
        resizeTop.current = false;
        resizeLeft.current = false;
        resizeBottom.current = false;
        resizeRight.current = false;
    }, []);

    useEffect(() => {
        const object = objectRef.current as SVGRectElement;
        document.addEventListener('click', handleClick);
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mousedown', mouseDown);
        object.addEventListener('click', objectClick)
        document.addEventListener('mouseup', mouseUp);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mousedown', mouseDown);
            object.removeEventListener('click', objectClick)
            document.removeEventListener('mouseup', mouseUp);
        };
    }, [handleClick, mouseMove, mouseDown, mouseUp, objectClick]);


    return (
        <g>
            
            <rect ref={objectRef} x={objectState.cx - objectState.rx} y={objectState.cy - objectState.ry} width={objectState.rx * 2} height={objectState.ry * 2} fill={'none'} />
            <path fill="none" stroke="red"
                d="M 10,30
                A 20,20 0,0,1 50,30
                A 20,20 0,0,1 90,30
                Q 90,60 50,90
                Q 10,60 10,30 z
                " 
            />
        </g>
    )
}
