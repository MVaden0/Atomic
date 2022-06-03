import React, {useRef, useEffect, useState} from 'react'
import BoundingRect from './BoundingRect';


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

const Ellipse = (props) => {
    // props
    const { draw, ...rest } = props;

    const selected = useRef(false);
    const [selectedState, setSelectedState] = useState(selected.current);

    // params
    const minWidth = useRef(100);
    const minHeight = useRef(100);

    const topBorderRef = useRef(false);
    const leftBorderRef = useRef(false);
    const bottomBorderRef = useRef(false);
    const rightBorderRef = useRef(false);

    // resizing status    
    const resizeTop = useRef(false);
    const resizeLeft = useRef(false);
    const resizeBottom = useRef(false);
    const resizeRight = useRef(false);
    
    const width = useRef(props.rx * 2);
    const height = useRef(props.ry * 2);
    const left = useRef(0);
    const top = useRef(0);

    const [widthState, setWidthState] = useState(width.current);
    const [heightState, setHeightState] = useState(height.current);
    const [leftState, setLeftState] = useState(left.current);
    const [topState, setTopState] = useState(top.current);

    const ellipseRef = useRef(null);

    const toggleSelected = () => {
        if (selected.current == true) {
            selected.current = false;
            setSelectedState(false);
        } else {
            selected.current = true;
            setSelectedState(true);
        };
    };

    const handleMouseMove = (event) => {
        const ellipse = ellipseRef.current;
        const ellipseRect = getBoundingRect(ellipse);

        const resizeStartCase = checkResizeStart(
            event, 
            ellipseRect.top, 
            ellipseRect.left, 
            ellipseRect.bottom, 
            ellipseRect.right, 
            20, 
            resizeTop, 
            resizeLeft, 
            resizeBottom, 
            resizeRight
          );
      
          computeMouseType(resizeStartCase);
    };

    useEffect(() => {

        let frameCount = 0
        let animationFrameId
      
        const render = () => {
    
            frameCount++
            //draw(canvas, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
    
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
      }, [draw])
  
    useEffect(() => {
        const ellipse = ellipseRef.current;

        ellipse.addEventListener('click', (event) => {
            toggleSelected();
        })
    }, [])
  
    return (
        <g>
            <ellipse 
                ref={ellipseRef} 
                cx={props.cx} 
                cy={props.cy} 
                rx={props.rx} 
                ry={props.ry} 
                stroke='#1a1a1a' 
                strokeWidth='0' 
                fill='#00ff00'
            />
            <BoundingRect 
                x1={(parseInt(props.cx) - parseInt(props.rx)).toString()}
                y1={(parseInt(props.cy) - parseInt(props.ry)).toString()}
                x2={(parseInt(props.cx) - parseInt(props.rx)).toString()}
                y2={(parseInt(props.cy) + parseInt(props.ry)).toString()}
                x3={(parseInt(props.cx) + parseInt(props.rx)).toString()}
                y3={(parseInt(props.cy) + parseInt(props.ry)).toString()}
                x4={(parseInt(props.cx) + parseInt(props.rx)).toString()}
                y4={(parseInt(props.cy) - parseInt(props.ry)).toString()}
                radius='5'
                color='#f8edd6' 
                selected={selectedState}
            />
        </g>
        
    );
}
  
export default Ellipse;