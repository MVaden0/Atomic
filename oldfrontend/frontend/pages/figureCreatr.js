import { useState, useEffect, useRef} from 'react'
import style from '../styles/FigureCreator.module.css'

import ToolBar from '../components/figureCreator/ToolBar';
import Canvas from '../components/figureCreator/Canvas.tsx';


const FigureCreator = () => {
    const [pageWidth, setPageWidth] = useState();
    const [pageHeight, setPageHeight] = useState();

    const [toolBarWidth, setToolBarWidth] = useState(0);

    const [backgroundCanvasWidth, setBackgroundCanvasWidth] = useState(0);

    const [canvasRect, setCanvasRect] = useState({ });

    const [canvasTop, setCanvasTop] = useState(0);
    const [canvasLeft, setCanvasLeft] = useState(0);
    const [canvasBottom, setCanvasBottom] = useState(0);
    const [canvasRight, setCanvasRight] = useState(0);
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(0);

    const [objects, setObjects] = useState([]);
    
    const canvasContainerRef = useRef(null);
    const canvasRef = useRef(null);

    // resize status
    const isResizing = useRef(false);
    const resizingTop = useRef(false);
    const resizingLeft = useRef(false);
    const resizingBottom = useRef(false);
    const resizingRight = useRef(false);

    const handleMouseMove = (event) => {
        // positioning
        const t = canvasTop;
        const l = canvasLeft;
        const b = canvasBottom;
        const r = canvasRight;
        const x = event.pageX;
        const y = event.pageY;
        const o = 20;

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
                setCanvasBottom(y + canvasHeight);
            };
            if (resizingLeft.current) {                 // left
                setCanvasLeft(x - 500);
                setCanvasRight(x - 500 + canvasWidth);
            };
            if (resizingBottom.current) {               // bottom
                setCanvasBottom(y);
                setCanvasTop(y - canvasHeight);
            };
            if (resizingRight.current) {                // right
                setCanvasRight(x - 500);
                setCanvasLeft(x - 500 - canvasWidth);
            };
        };
    };

    const handleMouseDown = (event) => {
        // positioning
        const t = canvasTop;
        const l = canvasLeft;
        const b = canvasBottom;
        const r = canvasRight;
        const x = event.pageX;
        const y = event.pageY;
        const o = 20;

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

    const handleMouseUp = (event) => {
        isResizing.current = false;
        resizingTop.current = false;
        resizingLeft.current = false;
        resizingBottom.current = false;
        resizingRight.current = false;

        document.body.style.cursor = "alias";
    };

    // component did mount
    useEffect(() => {
        // DOM reference
        const canvasContainer = canvasContainerRef.current;
        const canvas = canvasRef.current;

        // set page dimensions
        setPageWidth(window.innerWidth);
        setPageHeight(window.innerHeight);

        // set toolbar dimensions
        setToolBarWidth(250);

        // set background canvas dimensions
        setBackgroundCanvasWidth(window.innerWidth - (250 * 2))

        // set canvas dimensions
        setCanvasWidth(800);
        setCanvasHeight(800);
        setCanvasTop((window.innerHeight - 800) / 2);
        setCanvasLeft((window.innerWidth - (250 * 2) - 800) / 2);
        setCanvasBottom(((window.innerHeight - 800) / 2) + 800);
        setCanvasRight(((window.innerWidth - (250 * 2) - 800) / 2) + 800);

        setObjects([...objects, 
            {
                tag: 'circle-1',
                type: 'circle',
                cx: 400,
                cy: 400,
                rx: 20, 
                ry: 10
            },
        ]);

    }, []);

    // event listeners
    useEffect(() => {
        // mouse events
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

    });

    return (
        <div className={style.mainPage} style={{backgroundColor: '#1a1a1a', width: `${pageWidth}px`, height: `${pageHeight}px`}}>
            <ToolBar 
                backgroundColor='#8E94F2' 
                width={toolBarWidth} 
                height={pageHeight} 
            />
            <ToolBar 
                backgroundColor='#9FA0FF' 
                width={toolBarWidth} 
                height={pageHeight} 
            />
            <Canvas 
                backgroundColor='#1a1a1a' 
                backgroundWidth={backgroundCanvasWidth} 
                backgroundHeight={pageHeight} 
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                canvasTop={canvasTop}
                canvasLeft={canvasLeft}
                canvasContainerRef={canvasContainerRef}
                canvasRef={canvasRef}
                objects={objects}
            />
        </div>
    );
};

export default FigureCreator;