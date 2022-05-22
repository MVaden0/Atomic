import React, {useRef, useEffect, useState} from 'react'
import style from '../styles/DrawingSurface.module.css'

const DrawingSurface = (props) => {
  
  const { draw, ...rest } = props

  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  //const [isResizing, setIsResizing] = useState(false);
  const isResizing = useRef(false);

  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

  const checkEdge = (pos, bounds, offset) => {
    return pos < bounds + offset && pos > bounds - offset;
  };

  const checkCorner = (xPos, yPos, xBounds, yBounds, offset) => {
    return xPos < xBounds + offset && xPos > xBounds - offset && yPos < yBounds + offset && yPos > yBounds - offset;
  };

  const handleMouseMove = (event) => {
    // get reference to container
    const container = containerRef.current;

    // get positioning of container
    const { top, left, bottom, right } = container.getBoundingClientRect()

    // change cursor based on position
    if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {            // top left corner
      document.body.style.cursor = "nwse-resize";
    } 
    else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {    // bottom right corner
      document.body.style.cursor = "nwse-resize";
    }
    else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {     // bottom left corner
      document.body.style.cursor = "nesw-resize";
    } 
    else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {       // top right corner
      document.body.style.cursor = "nesw-resize";
    }
    else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {                             // top edge
      document.body.style.cursor = "ns-resize";
    }
    else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {                            // left edge
      document.body.style.cursor = "ew-resize";
    }
    else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {                          // bottom edge
      document.body.style.cursor = "ns-resize";
    }
    else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {                           // right edge
      document.body.style.cursor = "ew-resize";
    }
    else if (!isResizing) {                                                                      // no edge or corner
      document.body.style.cursor = "alias";
    };
  };

  const handleMouseDown = (event) => {
    // get reference to container
    const container = containerRef.current;

    // get positioning of container
    const { top, left, bottom, right } = container.getBoundingClientRect()

    // change cursor based on position
    if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {            // top left corner
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    } 
    else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {    // bottom right corner
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    }
    else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {     // bottom left corner
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    } 
    else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {       // top right corner
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    }
    else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {                             // top edge
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    }
    else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {                            // left edge
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    }
    else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {                          // bottom edge
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    }
    else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {                           // right edge
      isResizing.current = true;
      document.body.style.cursor = "grabbing";
    };
  };

  const handleMouseUp = (event) => {
    // denotes resizing has ceased
    isResizing.current = false;

    // get reference to container
    const container = containerRef.current;

    // get positioning of container
    const { top, left, bottom, right } = container.getBoundingClientRect()

    // change cursor based on position
    if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {            // top left corner
      document.body.style.cursor = "nwse-resize";
    } 
    else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {    // bottom right corner
      document.body.style.cursor = "nwse-resize";
    }
    else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {     // bottom left corner
      document.body.style.cursor = "nesw-resize";
    } 
    else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {       // top right corner
      document.body.style.cursor = "nesw-resize";
    }
    else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {                             // top edge
      document.body.style.cursor = "ns-resize";
    }
    else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {                            // left edge
      document.body.style.cursor = "ew-resize";
    }
    else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {                          // bottom edge
      document.body.style.cursor = "ns-resize";
    }
    else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {                           // right edge
      document.body.style.cursor = "ew-resize";
    }
    else if (!isResizing.current) {                                                                      // no edge or corner
      document.body.style.cursor = "alias";
    };
  };  

  useEffect(() => {
    setWidth(props.width)
    setHeight(props.height)

    const canvas = canvasRef.current

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
      <div ref={containerRef} style={{width: width, height: height}} className={style.container}>
          {/*
          <svg width={width} height={height} className={style.canvas} ref={canvasRef}>
              <circle cx="0" cy="0" r="100" stroke="green" stroke-width="4" fill="yellow" />
          </svg>
          */}
      </div>
  );
}

export default DrawingSurface;