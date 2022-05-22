import React, {useRef, useEffect, useState} from 'react'
import style from '../styles/DrawingSurface.module.css'

const DrawingSurface = (props) => {
  
  const { draw, ...rest } = props

  const containerRef = useRef(null)
  const canvasRef = useRef(null)

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
  
  const topPosition = useRef(0);
  const leftPosition = useRef(0);
  const bottomPosition = useRef(0);
  const rightPosition = useRef(0);

  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

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
        break;
      case resizeCurrent.BOTTOMRIGHT:
        break;
      case resizeCurrent.BOTTOMLEFT:
        break;
      case resizeCurrent.TOPRIGHT:
        break;
      case resizeCurrent.TOP:
        topPosition.current = event.pageY
        container.style.top = `${topPosition.current}px`
        break;
      case resizeCurrent.LEFT:
        leftPosition.current = event.pageX - 400;
        container.style.left = `${leftPosition.current}px`
        break;
      case resizeCurrent.BOTTOM:
        topPosition.current = event.pageY - 800
        container.style.top = `${topPosition.current}px`
        break;
      case resizeCurrent.RIGHT:
        leftPosition.current = event.pageX - 1200
        container.style.left = `${leftPosition.current}px`
        break;
    };

    /*
    if (isResizingTop.current) {
      topPosition.current = event.pageY
      container.style.top = `${topPosition.current}px`
    } */
  };

  const handleMouseDown = (event) => {
    // get reference to container
    const container = containerRef.current;

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
    setWidth(props.width)
    setHeight(props.height)

    const container = containerRef.current;
    const canvas = canvasRef.current;

    const parent = container.parentElement;
    
    const { top, left, bottom, right } = parent.getBoundingClientRect();

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
  }, [draw, isResizing, topPosition])

  return (
      <div ref={containerRef} style={{width: width, height: height, position: 'relative'}} className={style.container}>
          {/*
          <svg width={width} height={height} className={style.canvas} ref={canvasRef}>
              <circle cx="0" cy="0" r="100" stroke="green" stroke-width="4" fill="yellow" />
          </svg>
          */}
      </div>
  );
}

export default DrawingSurface;