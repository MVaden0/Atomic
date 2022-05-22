import React, {useRef, useEffect, useState} from 'react'
import style from '../styles/DrawingSurface.module.css'


/*
 * Enum of states denoting whether a resize event has started.
 */
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

/*
 * Enum of states denoting whether a resize event is currently happening.
 */
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

/**
 * Wrapper for the 'getBoundingClientRect' method that returns an object-wrapped
 * container for the data. Returns, height, width, top, left, bottom, and right 
 * of element.
 * @param   {object}  element  DOM element to get rect of.
 * @return  {object}           Object containing wrapped data.
 */
const getBoundingRect = (element) => {
  const {top, left, bottom, right, height, width} = element.getBoundingClientRect();

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    height: height,
    width: width
  };
};

/**
 * Checks if mouse position is close to a given edge.
 * @param    {double}  pos     Mouse position.
 * @param    {double}  bounds  Boundary of edge to check.
 * @param    {double}  offset  Offset area to check in either direction from bounds.
 * @returns  {boolean}         Boolean denoting if the edge condition is met.
 */
const checkEdge = (pos, bounds, offset) => {
  return pos < bounds + offset && pos > bounds - offset;
};

/**
 * Checks if mouse position is close to a given corner.
 * @param    {double}  xPos     X position of mouse.
 * @param    {double}  yPos     Y position of mouse.
 * @param    {double}  xBounds  Bounds to check on x axis. 
 * @param    {double}  yBounds  Bounds to check on y axis.
 * @param    {double}  offset   Offset area to check in either direction from both bounds.
 * @returns  {boolean}          Booleean denoting whether the corner condition is met.
 */
const checkCorner = (xPos, yPos, xBounds, yBounds, offset) => {
  return xPos < xBounds + offset && xPos > xBounds - offset && yPos < yBounds + offset && yPos > yBounds - offset;
};

/**
 * Checks if a resize event has started on any corner or edge.
 * @param    {Event}       event             Event target.
 * @param    {double}      top               Top bounds to check.
 * @param    {double}      left              Left bounds to check.
 * @param    {double}      bottom            Bottom bounds to check. 
 * @param    {double}      right             Right bounds to check.
 * @param    {double}      offset            Offset area to check in either directions from each bound.
 * @param    {ReactState}  isResizingTop     React state which denotes if resize event is happening from top.
 * @param    {ReactState}  isResizingLeft    React state which denotes if resize event is happening from left.
 * @param    {ReactState}  isResizingBottom  React state which denotes if resize event is happening from bottom.
 * @param    {ReactState}  isResizingRight   React state which denotes if resize event is happening from right.
 * @returns  {state}                         State denoting which resize event is starting.
 */
const checkResizeStart = (event, top, left, bottom, right, offset, isResizingTop, isResizingLeft, isResizingBottom, isResizingRight) => {
  // change cursor based on position
  if (checkCorner(event.pageX, event.pageY, left, top, offset) && !isResizingTop.current && !isResizingLeft.current) {                // top left corner
    return resizeStart.TOPLEFT;
  } 
  else if (checkCorner(event.pageX, event.pageY, right, bottom, offset) && !isResizingBottom.current && !isResizingRight.current) {   // bottom right corner
    return resizeStart.BOTTOMRIGHT;
  }
  else if (checkCorner(event.pageX, event.pageY, left, bottom, offset) && !isResizingBottom.current && !isResizingLeft.current) {     // bottom left corner
    return resizeStart.BOTTOMLEFT;
  } 
  else if (checkCorner(event.pageX, event.pageY, right, top, offset) && !isResizingTop.current && !isResizingRight.current) {         // top right corner
    return resizeStart.TOPRIGHT;
  }
  else if (checkEdge(event.pageY, top, offset) && !isResizingTop.current) {                                                          // top edge
    return resizeStart.TOP;
  }
  else if (checkEdge(event.pageX, left, offset) && !isResizingLeft.current) {                                                        // left edge
    return resizeStart.LEFT;
  }
  else if (checkEdge(event.pageY, bottom, offset) && !isResizingBottom.current) {                                                    // bottom edge
    return resizeStart.BOTTOM;
  }
  else if (checkEdge(event.pageX, right, offset) && !isResizingRight.current) {                                                      // right edge
    return resizeStart.RIGHT;
  }
  else if (!isResizingTop.current && !isResizingLeft.current && !isResizingBottom.current && !isResizingRight.current) {             // no edge or corner
    return resizeStart.NONE;
  };
};

/**
 * Checks if a resize event is currently happening.
 * @param    {ReactState}  isResizingTop     React state which denotes if resize event is happening from top.
 * @param    {ReactState}  isResizingLeft    React state which denotes if resize event is happening from left.
 * @param    {ReactState}  isResizingBottom  React state which denotes if resize event is happening from bottom.
 * @param    {ReactState}  isResizingRight   React state which denotes if resize event is happening from right.
 * @returns  {state}                         State denoting which resize event is currently happening.
 */
const checkResizeCurrent = (isResizingTop, isResizingLeft, isResizingBottom, isResizingRight) => {
  if (isResizingTop.current && isResizingLeft.current) {              // top left corner
    return resizeCurrent.TOPLEFT;
  } 
  else if (isResizingBottom.current && isResizingRight.current) {     // bottom right corner
    return resizeCurrent.BOTTOMRIGHT;
  }
  else if (isResizingBottom.current && isResizingLeft.current) {      // bottom left corner
    return resizeCurrent.BOTTOMLEFT;
  } 
  else if (isResizingTop.current && isResizingRight.current) {        // top right corner
    return resizeCurrent.TOPRIGHT;
  }
  else if (isResizingTop.current) {                                   // top edge
    return resizeCurrent.TOP;
  }
  else if (isResizingLeft.current) {                                  // left edge
    return resizeCurrent.LEFT;
  }
  else if (isResizingBottom.current) {                                // bottom edge
    return resizeCurrent.BOTTOM;
  }
  else if (isResizingRight.current) {                                 // right edge
    return resizeCurrent.RIGHT;
  };
};


const DrawingSurface = (props) => {
  // props
  const { draw, ...rest } = props;

  // params
  const minWidth = useRef(100);
  const minHeight = useRef(100);

  // DOM refs
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const topBorderRef = useRef(false);
  const leftBorderRef = useRef(false);
  const bottomBorderRef = useRef(false);
  const rightBorderRef = useRef(false);

  // resizing status    
  const isResizingTop = useRef(false);
  const isResizingLeft = useRef(false);
  const isResizingBottom = useRef(false);
  const isResizingRight = useRef(false);
  
  // state
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleMouseMove = (event) => {
    // get reference to container
    const container = containerRef.current;

    // get reference to borders
    const topBorder = topBorderRef.current;
    const leftBorder = leftBorderRef.current;
    const bottomBorder = bottomBorderRef.current;
    const rightBorder = rightBorderRef.current;

    // get positioning of container
    const containerRect = getBoundingRect(container);

    // compute start case
    const resizeStartCase = checkResizeStart(
      event, 
      containerRect.top, 
      containerRect.left, 
      containerRect.bottom, 
      containerRect.right, 
      20, 
      isResizingTop, 
      isResizingLeft, 
      isResizingBottom, 
      isResizingRight
    );

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

    // compute current case
    const resizeCurrentCase = checkResizeCurrent(
      isResizingTop, 
      isResizingLeft, 
      isResizingBottom, 
      isResizingRight
    );

    switch(resizeCurrentCase) {
      case resizeCurrent.TOPLEFT:
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';

        if (800 - (event.pageX - 760) * 2 >= minWidth.current) {
          setLeft(event.pageX - 400);
          setWidth(800 - ((event.pageX - 760) * 2));
        };
        
        if (800 - ((event.pageY - 68) * 2) >= minHeight.current) {
          setTop(event.pageY);
          setHeight(800 - ((event.pageY - 68) * 2));
        };

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

        if (800 - ((event.pageY - 68) * 2) >= minHeight.current) {
          setTop(event.pageY);
          setHeight(800 - ((event.pageY - 68) * 2));
        };

        break;
      case resizeCurrent.LEFT:
        leftBorder.style.display = 'block';
        rightBorder.style.display = 'block';

        if (800 - (event.pageX - 760) * 2 >= minWidth.current) {
          setLeft(event.pageX - 400);
          setWidth(800 - ((event.pageX - 760) * 2));
        };

        break;
      case resizeCurrent.BOTTOM:
        break;
      case resizeCurrent.RIGHT:
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
    const containerRect = getBoundingRect(container);

    // compute start case
    const resizeStartCase = checkResizeStart(
      event, 
      containerRect.top, 
      containerRect.left, 
      containerRect.bottom, 
      containerRect.right, 
      20, 
      isResizingTop, 
      isResizingLeft, 
      isResizingBottom, 
      isResizingRight
    );

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

    // compute current case
    const resizeCurrentCase = checkResizeCurrent(
      isResizingTop, 
      isResizingLeft, 
      isResizingBottom, 
      isResizingRight
    );

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

    // reset all border displays
    topBorder.style.display = 'none';
    leftBorder.style.display = 'none';
    bottomBorder.style.display = 'none';
    rightBorder.style.display = 'none';

    // get positioning of container
    const containerRect = getBoundingRect(container);

    // compute start case
    const resizeStartCase = checkResizeStart(
      event, 
      containerRect.top, 
      containerRect.left, 
      containerRect.bottom, 
      containerRect.right, 
      20, 
      isResizingTop, 
      isResizingLeft, 
      isResizingBottom, 
      isResizingRight
    );

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
  }, [draw])

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