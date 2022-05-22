import React, {useRef, useEffect, useState} from 'react'
import style from '../styles/DrawingSurface.module.css'

const DrawingSurface = (props) => {
  
  const { draw, ...rest } = props

  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  const topBorderRef = useRef(false);
  const leftBorderRef = useRef(false);
  const bottomBorderRef = useRef(false);
  const rightBorderRef = useRef(false);

  const isResizing = useRef(false);
  const isResizingTop = useRef(false);
  const isResizingLeft = useRef(false);
  const isResizingBottom = useRef(false);
  const isResizingRight = useRef(false);

  const resizeStart = {
    TOP: Symbol('top'),
    LEFT: Symbol('left'),
    BOTTOM: Symbol('bottom'),
    RIGHT: Symbol('right'),
    TOPLEFT: Symbol('topleft'),
    BOTTOMRIGHT: Symbol('bottomright'),
    BOTTOMLEFT: Symbol('bottomleft'),
    TOPRIGHT: Symbol('topright'),
    NONE: Symbol('none')
  };

  const resizeCurrent = {
    TOP: Symbol('top'),
    LEFT: Symbol('left'),
    BOTTOM: Symbol('bottom'),
    RIGHT: Symbol('right'),
    TOPLEFT: Symbol('topleft'),
    BOTTOMRIGHT: Symbol('bottomright'),
    BOTTOMLEFT: Symbol('bottomleft'),
    TOPRIGHT: Symbol('topright'),
  };
  
  //const topPosition = useRef(0);
  const leftPosition = useRef(0);
  const bottomPosition = useRef(0);
  const rightPosition = useRef(0);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const getBoundingRect = (element) => {
    const {top, left, bottom, right, height, width} = element.getBoundingClientRect();

    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      height: height,
      width: width
    }
  }

  const checkEdge = (pos, bounds, offset) => {
    return pos < bounds + offset && pos > bounds - offset;
  };

  const checkCorner = (xPos, yPos, xBounds, yBounds, offset) => {
    return xPos < xBounds + offset && xPos > xBounds - offset && yPos < yBounds + offset && yPos > yBounds - offset;
  };

  const checkResizeStart = (event, top, left, bottom, right, offset) => {
    // change cursor based on position
    if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizingTop.current && !isResizingLeft.current) {            // top left corner
      return resizeStart.TOPLEFT;
    } 
    else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizingBottom.current && !isResizingRight.current) {    // bottom right corner
      return resizeStart.BOTTOMRIGHT;
    }
    else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizingBottom.current && !isResizingLeft.current) {     // bottom left corner
      return resizeStart.BOTTOMLEFT;
    } 
    else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizingTop.current && !isResizingRight.current) {       // top right corner
      return resizeStart.TOPRIGHT;
    }
    else if (checkEdge(event.pageY, top, 20) && !isResizingTop.current) {                             // top edge
      return resizeStart.TOP;
    }
    else if (checkEdge(event.pageX, left, 20) && !isResizingLeft.current) {                            // left edge
      return resizeStart.LEFT;
    }
    else if (checkEdge(event.pageY, bottom, 20) && !isResizingBottom.current) {                          // bottom edge
      return resizeStart.BOTTOM;
    }
    else if (checkEdge(event.pageX, right, 20) && !isResizingRight.current) {                           // right edge
      return resizeStart.RIGHT;
    }
    else if (!isResizingTop.current && !isResizingLeft.current && !isResizingBottom.current && !isResizingRight.current) {                                                                      // no edge or corner
      return resizeStart.NONE;
    };
  };

  const checkResizeCurrent = () => {
    // change cursor based on position
    if (isResizingTop.current && isResizingLeft.current) {            // top left corner
      return resizeCurrent.TOPLEFT;
    } 
    else if (isResizingBottom.current && isResizingRight.current) {    // bottom right corner
      return resizeCurrent.BOTTOMRIGHT;
    }
    else if (isResizingBottom.current && isResizingLeft.current) {     // bottom left corner
      return resizeCurrent.BOTTOMLEFT;
    } 
    else if (isResizingTop.current && isResizingRight.current) {       // top right corner
      return resizeCurrent.TOPRIGHT;
    }
    else if (isResizingTop.current) {                             // top edge
      return resizeCurrent.TOP;
    }
    else if (isResizingLeft.current) {                            // left edge
      return resizeCurrent.LEFT;
    }
    else if (isResizingBottom.current) {                          // bottom edge
      return resizeCurrent.BOTTOM;
    }
    else if (isResizingRight.current) {                           // right edge
      return resizeCurrent.RIGHT;
    };
  };

  const handleMouseMove = (event) => {
    // get reference to container
    const container = containerRef.current;

    // get reference to borders
    const topBorder = topBorderRef.current;
    const leftBorder = leftBorderRef.current;
    const bottomBorder = bottomBorderRef.current;
    const rightBorder = rightBorderRef.current;

    // get positioning of container
    const { top, left, bottom, right } = container.getBoundingClientRect()

    const resizeStartCase = checkResizeStart(event, top, left, bottom, right, 20);

    switch(resizeStartCase) {
      case resizeStart.TOPLEFT:
        document.body.style.cursor = "nwse-resize";
        break;
      case resizeStart.BOTTOMRIGHT:
        document.body.style.cursor = "nwse-resize";
        break;
      case resizeStart.BOTTOMLEFT:
        document.body.style.cursor = "nesw-resize";
        break;
      case resizeStart.TOPRIGHT:
        document.body.style.cursor = "nesw-resize";
        break;
      case resizeStart.TOP:
        document.body.style.cursor = "ns-resize";
        break;
      case resizeStart.LEFT:
        document.body.style.cursor = "ew-resize";
        break;
      case resizeStart.BOTTOM:
        document.body.style.cursor = "ns-resize";
        break;
      case resizeStart.RIGHT:
        document.body.style.cursor = "ew-resize";
        break;
      case resizeStart.NONE:
        document.body.style.cursor = "alias";
        break;
    };

    const resizeCurrentCase = checkResizeCurrent();

    switch(resizeCurrentCase) {
      case resizeCurrent.TOPLEFT:
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        setTop(event.pageY);
        setHeight(800 - ((event.pageY - 68) * 2));
        setLeft(event.pageX - 400);
        setWidth(800 - ((event.pageX - 760) * 2));
        break;
      case resizeCurrent.BOTTOMRIGHT:
        break;
      case resizeCurrent.BOTTOMLEFT:
        break;
      case resizeCurrent.TOPRIGHT:
        break;
      case resizeCurrent.TOP:
        topBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        setTop(event.pageY);
        setHeight(800 - ((event.pageY - 68) * 2));
        break;
      case resizeCurrent.LEFT:
        leftBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        setLeft(event.pageX - 400);
        setWidth(800 - ((event.pageX - 760) * 2));
        break;
      case resizeCurrent.BOTTOM:
        topPosition.current = event.pageY - 800
        container.style.top = `${topPosition.current}px`
        break;
      case resizeCurrent.RIGHT:
        rightBorder.style.display = 'block';
        leftPosition.current = event.pageX - 1200
        container.style.left = `${leftPosition.current}px`
        break;
    };
  };

  const handleMouseDown = (event) => {
    // get reference to container
    const container = containerRef.current;

    // get reference to borders
    const topBorder = topBorderRef.current;
    const leftBorder = leftBorderRef.current;
    const bottomBorder = bottomBorderRef.current;
    const rightBorder = rightBorderRef.current;

    // get positioning of container
    const { top, left, bottom, right } = container.getBoundingClientRect()

    const resizeStartCase = checkResizeStart(event, top, left, bottom, right, 20);

    switch(resizeStartCase) {
      case resizeStart.TOPLEFT:
        isResizingTop.current = true;
        isResizingLeft.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.BOTTOMRIGHT:
        isResizingBottom.current = true;
        isResizingRight.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.BOTTOMLEFT:
        isResizingBottom.current = true;
        isResizingLeft.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.TOPRIGHT:
        isResizingTop.current = true;
        isResizingRight.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.TOP:
        isResizingTop.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.LEFT:
        isResizingLeft.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.BOTTOM:
        isResizingBottom.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.RIGHT:
        isResizingRight.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.NONE:
        document.body.style.cursor = "alias";
        break;
    };

    const resizeCurrentCase = checkResizeCurrent();

    switch(resizeCurrentCase) {
      case resizeCurrent.TOPLEFT:
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        break;
      case resizeCurrent.BOTTOMRIGHT:
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        break;
      case resizeCurrent.BOTTOMLEFT:
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        break;
      case resizeCurrent.TOPRIGHT:
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        break;
      case resizeCurrent.TOP:
        topBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        break;
      case resizeCurrent.LEFT:
        leftBorder.style.display = 'block';
        rightBorder.style.display = 'block';
        break;
      case resizeCurrent.BOTTOM:
        topPosition.current = event.pageY - 800
        container.style.top = `${topPosition.current}px`
        break;
      case resizeCurrent.RIGHT:
        rightBorder.sytle.display = 'block';
        break;
    };
  };

  const handleMouseUp = (event) => {
    // reset all states for resizing
    isResizing.current = false;

    isResizingTop.current = false;
    isResizingLeft.current = false;
    isResizingBottom.current = false;
    isResizingRight.current = false;

    // get reference to container
    const container = containerRef.current;

    // get reference to borders
    const topBorder = topBorderRef.current;
    const leftBorder = leftBorderRef.current;
    const bottomBorder = bottomBorderRef.current;
    const rightBorder = rightBorderRef.current;

    topBorder.style.display = 'none';
    leftBorder.style.display = 'none';
    bottomBorder.style.display = 'none';
    rightBorder.style.display = 'none';

    // get positioning of container
    const { top, left, bottom, right } = container.getBoundingClientRect()

    const resizeStartCase = checkResizeStart(event, top, left, bottom, right, 20);

    switch(resizeStartCase) {
      case resizeStart.TOPLEFT:
        document.body.style.cursor = "nwse-resize";
        break;
      case resizeStart.BOTTOMRIGHT:
        document.body.style.cursor = "nwse-resize";
        break;
      case resizeStart.BOTTOMLEFT:
        document.body.style.cursor = "nesw-resize";
        break;
      case resizeStart.TOPRIGHT:
        document.body.style.cursor = "nesw-resize";
        break;
      case resizeStart.TOP:
        document.body.style.cursor = "ns-resize";
        break;
      case resizeStart.LEFT:
        document.body.style.cursor = "ew-resize";
        break;
      case resizeStart.BOTTOM:
        document.body.style.cursor = "ns-resize";
        break;
      case resizeStart.RIGHT:
        document.body.style.cursor = "ew-resize";
        break;
      case resizeStart.NONE:
        document.body.style.cursor = "alias";
        break;
    };
  };  

  useEffect(() => {
    setWidth(props.width);
    setHeight(props.height);

    const container = containerRef.current;
    const canvas = canvasRef.current;

    const parent = container.parentElement;
    
    const parentRect = getBoundingRect(parent);

    const surfaceTop = (parentRect.height - props.height) / 2;
    const surfaceLeft = (parentRect.width - props.width) / 2;

    setTop(surfaceTop);
    setLeft(surfaceLeft);

    let frameCount = 0
    let animationFrameId

    const render = () => {

        frameCount++
        draw(canvas, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, isResizing])

  return (

    <div className={style.container} >
      <svg width='1520px' height='936px' className={style.backgroundCanvas}>
        <line ref={topBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1='0' y1={top} x2="1520" y2={top} />
        <line ref={leftBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1={left} y1="0" x2={left} y2="936" />
        <line ref={bottomBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1='0' y1={top + height} x2="1520" y2={top + height} />
        <line ref={rightBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1={left + width} y1="0" x2={left + width} y2="936" />
      </svg>
      <div ref={containerRef} className={style.canvasContainer} style={{width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`}} >
          <svg ref={canvasRef} className={style.canvas} sytle={{width: `${width}px`, height: `${height}px`}} >
              <circle cx="0" cy="0" r="100" stroke="green" strokeWidth="4" fill="yellow" />
          </svg>
      </div>
    </div>
      
  );
}

export default DrawingSurface;