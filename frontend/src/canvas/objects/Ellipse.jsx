import { FC, useState, useCallback, useEffect, useRef, useReducer } from 'react'

import { ObjectBoundingRect } from './ObjectBoundingRect'
import { State } from '../Canvas'
import { Point } from'../CanvasObjectTypes'
import { computeCursorType, objectMouseDown } from './ObjectAPI'


const objectReducer = (objectState, action) => {
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

export const Ellipse = ({cx, cy, rx, ry, fill, canvasState}) => {
    const [objectState, dispatch] = useReducer(objectReducer, {
        cx: cx,
        cy: cy,
        rx: rx,
        ry: ry,
    });

    // is shape currently selected?
    const [selected, setSelected] = useState(false);

    // is shape currently moving?
    const moving = useRef(false);

    // start position of cursor and shape in moving state
    const movingCursorStart = useRef({x: 0, y: 0});
    const movingShapeStart = useRef({x: 0, y: 0});

    // reference to svg element
    const objectRef = useRef(null);

    // resize state
    const resize = useRef(false);
    const resizeTop = useRef(false);
    const resizeLeft = useRef(false);
    const resizeBottom = useRef(false);
    const resizeRight = useRef(false);

    // start position of cursor and shape in resizing state
    const resizingCursorStart = useRef({x: 0, y: 0});
    const resizingShapeStart = useRef({x: 0, y: 0});

    const handleClick = useCallback((event) => {
        if (event.target !== objectRef.current) {
            setSelected(false);
        }
    }, []);

    const objectClick = useCallback((event) => {
        setSelected(true)
    }, []);

    const mouseDown = useCallback((event) => {
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

    const mouseMove = useCallback((event) => {
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

    const mouseUp = useCallback((event) => {
        moving.current = false;

        resize.current = false;
        resizeTop.current = false;
        resizeLeft.current = false;
        resizeBottom.current = false;
        resizeRight.current = false;
    }, []);

    useEffect(() => {
        const object = objectRef.current;
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
            <ellipse ref={objectRef} cx={objectState.cx} cy={objectState.cy} rx={objectState.rx} ry={objectState.ry} fill={fill} />
            <ObjectBoundingRect 
                selected={selected} 
                p1={{x: objectState.cx + objectState.rx, y: objectState.cy - objectState.ry}} 
                p2={{x: objectState.cx - objectState.rx, y: objectState.cy - objectState.ry}} 
                p3={{x: objectState.cx - objectState.rx, y: objectState.cy + objectState.ry}} 
                p4={{x: objectState.cx + objectState.rx, y: objectState.cy + objectState.ry}} />
        </g>
    )
}