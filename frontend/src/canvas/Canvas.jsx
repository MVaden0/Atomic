import { FC, useEffect, useRef, useReducer, useLayoutEffect, useCallback, useContext} from 'react'

import style from '../styles/canvas/Canvas.module.css'

import { canvasMouseDown, canvasMouseMove } from './CanvasAPI'

import { Toolbar } from './toolbar/Toolbar'
import { CanvasSurface } from './CanvasSurface'
import { Section } from './toolbar/Section'
import { Input } from './toolbar/Input'

import { Ellipse } from './objects/Ellipse'
import { Rectangle } from './objects/Rectangle'
import { Path } from './objects/Path'

import { CanvasContextProvider } from'./CanvasContextProvider'
import { CanvasContext } from './CanvasContextProvider'


const canvasReducer = (state, action) => {
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

export const Canvas = ({backgroundColor}) => {
    const [state, dispatch] = useReducer(canvasReducer, 
        { 
            bgCanvasHeight: 0, bgCanvasWidth: 0, bgCanvasTop: 0, bgCanvasLeft: 0,
            canvasHeight: 0, canvasWidth: 0, canvasTop: 0, canvasLeft: 0,
            offset: 0, minW: 0, minH: 0,
        }
    );

    const testy = [
        {
            'tag': 'circle1',
            'cx': 500,
            'cy': 100,
            'rx': 50,
            'ry': 50,
            'fill': '#93B7BE'
        },
        {
            'tag': 'circle2',
            'cx': 500,
            'cy': 500,
            'rx': 50,
            'ry': 50,
            'fill': '#9ECE9A'
        },
    ]

    // background canvas ref
    const backgroundCanvasRef = useRef<HTMLDivElement>(null);

    // refs have to be updated sync
    const resize = useRef(false);
    const resizeTop = useRef(false);
    const resizeLeft = useRef(false);
    const resizeBottom = useRef(false);
    const resizeRight = useRef(false);

    const handleMouseMove = useCallback((event) => {
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

    const handleMouseDown = useCallback((event) => {
        resize.current = true;
        
        const resizing = canvasMouseDown(event, state);

        if (resizing.top) { resizeTop.current = true; };
        if (resizing.left) { resizeLeft.current = true; };
        if (resizing.bottom) { resizeBottom.current = true; };
        if (resizing.right) { resizeRight.current = true; };
    }, [state]);

    const handleMouseUp = (event) => {
        document.body.style.cursor = 'alias';

        resize.current = false;
        resizeTop.current = false;
        resizeLeft.current = false;
        resizeBottom.current = false;
        resizeRight.current = false;
    };

    // initialize state
    useLayoutEffect(() => {
        const backgroundCanvas = backgroundCanvasRef.current;
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

    const test = {
        startPoint: {
            x: 100,
            y: 100,
            xC: 200,
            yC: 100
        },
        points: [
            {
                x: 200,
                y: 200,
                x1C: 200,
                y1C: 100,
                x2C: 200,
                y2C: 300
            },
            {
                x: 300,
                y: 300,
                x1C: 200,
                y1C: 300,
                x2C: 400,
                y2C: 300
            }
        ],
        endPoint: {
            x: 400,
            y: 400,
            xC: 400,
            yC: 300
        }
    }

    const a = useContext(CanvasContext);

    return (
        
            <div 
                className={style.pageContainer} 
                style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: backgroundColor}} >
                <Toolbar width={220} backgroundColor="#1a1a1a" >
                    <Section description='Dimensions'>
                        <Input name="x" color="#fff0ce" />
                    </Section>
                </Toolbar>
                <CanvasContextProvider>
                    <CanvasSurface backgroundCanvasRef={backgroundCanvasRef} state={state} showLines={false}>
                        {/*
                        <Ellipse cx={test[0].cx} cy={test[0].cy} rx={test[0].rx} ry={test[0].ry} fill={test[0].fill} canvasState={state}/>
                        <Rectangle cx={test[0].cx} cy={test[0].cy} rx={test[0].rx} ry={test[0].ry} fill={test[1].fill} canvasState={state}/>
                        */}
                        <Path points={test}/>
                    </CanvasSurface>
                </CanvasContextProvider>
                
            </div>
        
    )
}