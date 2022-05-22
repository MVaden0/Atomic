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
 * @param    {ReactState}  resizeTop     React state which denotes if resize event is happening from top.
 * @param    {ReactState}  resizeLeft    React state which denotes if resize event is happening from left.
 * @param    {ReactState}  resizeBottom  React state which denotes if resize event is happening from bottom.
 * @param    {ReactState}  resizeRight   React state which denotes if resize event is happening from right.
 * @returns  {state}                         State denoting which resize event is starting.
 */
const checkResizeStart = (event, top, left, bottom, right, offset, resizeTop, resizeLeft, resizeBottom, resizeRight) => {
  // change cursor based on position
  if (checkCorner(event.pageX, event.pageY, left, top, offset) && !resizeTop.current && !resizeLeft.current) {                // top left corner
    return resizeStart.TOPLEFT;
  } 
  else if (checkCorner(event.pageX, event.pageY, right, bottom, offset) && !resizeBottom.current && !resizeRight.current) {   // bottom right corner
    return resizeStart.BOTTOMRIGHT;
  }
  else if (checkCorner(event.pageX, event.pageY, left, bottom, offset) && !resizeBottom.current && !resizeLeft.current) {     // bottom left corner
    return resizeStart.BOTTOMLEFT;
  } 
  else if (checkCorner(event.pageX, event.pageY, right, top, offset) && !resizeTop.current && !resizeRight.current) {         // top right corner
    return resizeStart.TOPRIGHT;
  }
  else if (checkEdge(event.pageY, top, offset) && !resizeTop.current) {                                                          // top edge
    return resizeStart.TOP;
  }
  else if (checkEdge(event.pageX, left, offset) && !resizeLeft.current) {                                                        // left edge
    return resizeStart.LEFT;
  }
  else if (checkEdge(event.pageY, bottom, offset) && !resizeBottom.current) {                                                    // bottom edge
    return resizeStart.BOTTOM;
  }
  else if (checkEdge(event.pageX, right, offset) && !resizeRight.current) {                                                      // right edge
    return resizeStart.RIGHT;
  }
  else if (!resizeTop.current && !resizeLeft.current && !resizeBottom.current && !resizeRight.current) {             // no edge or corner
    return resizeStart.NONE;
  };
};

/**
 * Checks if a resize event is currently happening.
 * @param    {ReactState}  resizeTop     React state which denotes if resize event is happening from top.
 * @param    {ReactState}  resizeLeft    React state which denotes if resize event is happening from left.
 * @param    {ReactState}  resizeBottom  React state which denotes if resize event is happening from bottom.
 * @param    {ReactState}  resizeRight   React state which denotes if resize event is happening from right.
 * @returns  {state}                         State denoting which resize event is currently happening.
 */
const checkResizeCurrent = (resizeTop, resizeLeft, resizeBottom, resizeRight) => {
  if (resizeTop.current && resizeLeft.current) {              // top left corner
    return resizeCurrent.TOPLEFT;
  } 
  else if (resizeBottom.current && resizeRight.current) {     // bottom right corner
    return resizeCurrent.BOTTOMRIGHT;
  }
  else if (resizeBottom.current && resizeLeft.current) {      // bottom left corner
    return resizeCurrent.BOTTOMLEFT;
  } 
  else if (resizeTop.current && resizeRight.current) {        // top right corner
    return resizeCurrent.TOPRIGHT;
  }
  else if (resizeTop.current) {                                   // top edge
    return resizeCurrent.TOP;
  }
  else if (resizeLeft.current) {                                  // left edge
    return resizeCurrent.LEFT;
  }
  else if (resizeBottom.current) {                                // bottom edge
    return resizeCurrent.BOTTOM;
  }
  else if (resizeRight.current) {                                 // right edge
    return resizeCurrent.RIGHT;
  };
};

const computeMouseType = (resizeStartCase) => {
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
}

const toggleResize = (toggle) => {
  for (let i = 1; i < arguments.length - 1; i++) {
    arguments[i].current = toggle;
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
  const resizeTop = useRef(false);
  const resizeLeft = useRef(false);
  const resizeBottom = useRef(false);
  const resizeRight = useRef(false);
  
  const width = useRef(props.width);
  const height = useRef(props.height);
  const left = useRef(0);
  const top = useRef(0);

  const [widthState, setWidthState] = useState(width.current);
  const [heightState, setHeightState] = useState(height.current);
  const [leftState, setLeftState] = useState(left.current);
  const [topState, setTopState] = useState(top.current);

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

    // get reference and container to parent
    const parent = container.parentElement;
    const parentRect = getBoundingRect(parent);

    const resizeStartCase = checkResizeStart(
      event, 
      containerRect.top, 
      containerRect.left, 
      containerRect.bottom, 
      containerRect.right, 
      20, 
      resizeTop, 
      resizeLeft, 
      resizeBottom, 
      resizeRight
    );

    computeMouseType(resizeStartCase);

    // compute current case
    const resizeCurrentCase = checkResizeCurrent(
      resizeTop, 
      resizeLeft, 
      resizeBottom, 
      resizeRight
    );

    switch(resizeCurrentCase) {
      case resizeCurrent.TOPLEFT:
        // turn on all borders
        topBorder.style.display = 'block';
        leftBorder.style.display = 'block';
        bottomBorder.style.display = 'block';
        rightBorder.style.display = 'block';

        if (width.current - (event.pageX - containerRect.left) * 2 >= minWidth.current) {
          left.current = event.pageX - parentRect.left;
          width.current = width.current - ((event.pageX - containerRect.left) * 2);

          setLeftState(left.current);
          setWidthState(width.current);
        };
        
        if (height.current - ((event.pageY - containerRect.top) * 2) >= minHeight.current) {
          top.current = event.pageY;
          height.current = height.current - ((event.pageY - containerRect.top) * 2);

          setTopState(top.current);
          setHeightState(height.current);
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

        if (height.current - ((event.pageY - containerRect.top) * 2) >= minHeight.current) {
          top.current = event.pageY;
          height.current = height.current - ((event.pageY - containerRect.top) * 2);

          setTopState(top.current);
          setHeightState(height.current);
        };

        break;
      case resizeCurrent.LEFT:
        leftBorder.style.display = 'block';
        rightBorder.style.display = 'block';

        if (width.current - (event.pageX - containerRect.left) * 2 >= minWidth.current) {
          left.current = event.pageX - parentRect.left;
          width.current = width.current - ((event.pageX - containerRect.left) * 2);

          setLeftState(left.current);
          setWidthState(width.current);
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

    const resizeStartCase = checkResizeStart(
      event, 
      containerRect.top, 
      containerRect.left, 
      containerRect.bottom, 
      containerRect.right, 
      20, 
      resizeTop, 
      resizeLeft, 
      resizeBottom, 
      resizeRight
    );

    computeMouseType(resizeStartCase);

    switch(resizeStartCase) {
      case resizeStart.TOPLEFT:
        //toggleResize(true, resizeTop, resizeLeft);
        resizeTop.current = true;
        resizeLeft.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.BOTTOMRIGHT:
        resizeBottom.current = true;
        resizeRight.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.BOTTOMLEFT:
        resizeBottom.current = true;
        resizeLeft.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.TOPRIGHT:
        resizeTop.current = true;
        resizeRight.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.TOP:
        resizeTop.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.LEFT:
        resizeLeft.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.BOTTOM:
        resizeBottom.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.RIGHT:
        resizeRight.current = true;
        document.body.style.cursor = "grabbing";
        break;
      case resizeStart.NONE:
        document.body.style.cursor = "alias";
        break;
    };
   
  };

  const handleMouseUp = (event) => {
    // reset all states for resizing
    resizeTop.current = false;
    resizeLeft.current = false;
    resizeBottom.current = false;
    resizeRight.current = false;

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

    
  };  

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    /* TESTING TESTING TESTING TESTING TESTING TESTING TESTING */
    const circle = {
      tag: 'circle-1',
      type: 'circle',
      x: 400,
      y: 400,
      radius: 100,
      stroke: 'red',
      strokeWidth: 4,
      fill: 'green'
    }

    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute('cx', circle.x)
    newCircle.setAttribute('cy', circle.y)
    newCircle.setAttribute('r', circle.radius)
    newCircle.setAttribute('stroke', circle.stroke)
    newCircle.setAttribute('stroke-width', circle.strokeWidth)
    newCircle.setAttribute('fill', circle.fill)

    canvas.appendChild(newCircle)

    newCircle.addEventListener('click', (event) => {
      const c = getBoundingRect(newCircle);
      alert(c.width)
    })


    /* TESTING TESTING TESTING TESTING TESTING TESTING TESTING */

    const parent = container.parentElement;
    const parentRect = getBoundingRect(parent);

    const surfaceTop = (parentRect.height - height.current) / 2;
    const surfaceLeft = (parentRect.width - width.current) / 2;

    top.current = surfaceTop;
    left.current = surfaceLeft;

    setWidthState(width.current);
    setHeightState(height.current);
    setTopState(top.current);
    setLeftState(left.current);

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
        <line ref={topBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1='0' y1={topState} x2="1520" y2={topState} />
        <line ref={leftBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1={leftState} y1="0" x2={leftState} y2="936" />
        <line ref={bottomBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1='0' y1={topState + heightState} x2="1520" y2={topState + heightState} />
        <line ref={rightBorderRef} style={{display: 'none', stroke: '#AFECE7', strokeWidth:2, strokeDasharray: '5, 5'}} x1={leftState + widthState} y1="0" x2={leftState + widthState} y2="936" />
      </svg>
      <div ref={containerRef} className={style.canvasContainer} style={{width: `${widthState}px`, height: `${heightState}px`, top: `${topState}px`, left: `${leftState}px`}} >
          <svg xmlns="http://www.w3.org/2000/svg" ref={canvasRef} className={style.canvas} width={`${widthState}px`} height={`${heightState}px`} >
              
          </svg>
      </div>
    </div>
      
  );
}

export default DrawingSurface;