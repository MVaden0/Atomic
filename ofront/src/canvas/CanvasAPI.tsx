interface State {
    bgCanvasHeight: number;
    bgCanvasWidth: number;
    bgCanvasTop: number;
    bgCanvasLeft: number;

    canvasHeight: number; 
    canvasWidth: number;
    canvasTop: number;
    canvasLeft: number;

    offset: number;
    minW: number;
    minH: number;
}

export const canvasMouseDown = (
    event: MouseEvent,
    state: State) => {

    let resizeTop = false;
    let resizeLeft = false;
    let resizeBottom = false;
    let resizeRight = false;

    if (
        event.pageY < state.canvasTop + state.offset && 
        event.pageY > state.canvasTop - state.offset &&
        event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
    ) {
        resizeTop = true;                                                    // top left
        resizeLeft = true;

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
        event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
        event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
    ) {
        resizeBottom = true;                                                 // bottom right
        resizeRight = true;

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.offset && 
        event.pageY > state.canvasTop - state.offset &&
        event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
    ) {
        resizeTop = true;                                                    // top right
        resizeRight = true;

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
        event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
        event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
    ) {
        resizeBottom = true;                                                 // bottom left
        resizeLeft = true;

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.offset && 
        event.pageY > state.canvasTop - state.offset &&
        event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft + state.bgCanvasLeft
    ) {
        resizeTop = true;                                                    // top

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.canvasHeight && 
        event.pageY > state.canvasTop &&
        event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
    ) {
        resizeLeft = true;                                                   // left

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
        event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
        event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft + state.bgCanvasLeft
    ) {
        resizeBottom = true;                                                 // bottom

        document.body.style.cursor = 'grabbing';
    } else
    if (
        event.pageY < state.canvasTop + state.canvasHeight && 
        event.pageY > state.canvasTop &&
        event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
        event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
    ) {
        resizeRight = true;                                                  // right

        document.body.style.cursor = 'grabbing';
    };

    return {
        top: resizeTop,
        left: resizeLeft,
        bottom: resizeBottom,
        right: resizeRight
    }
};

export const canvasMouseMove = (
    resize: boolean,
    resizeTop: boolean,
    resizeLeft: boolean,
    resizeBottom: boolean,
    resizeRight: boolean,
    event: MouseEvent,
    state: State) => {
    
    let resizingTop = false;
    let resizingLeft = false;
    let resizingBottom = false;
    let resizingRight = false;

    if (!resize) {
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "nwse-resize";                                  // top left
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "nwse-resize";                                  // bottom right
        } else
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "nesw-resize";                                  // top right
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "nesw-resize";                                  // bottom left
        } else
        if (
            event.pageY < state.canvasTop + state.offset && 
            event.pageY > state.canvasTop - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "ns-resize";                                   // top
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight && 
            event.pageY > state.canvasTop &&
            event.pageX < state.canvasLeft + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft - state.offset + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "ew-resize";                                   // left
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight + state.offset && 
            event.pageY > state.canvasTop + state.canvasHeight - state.offset &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "ns-resize";                                   // bottom
        } else
        if (
            event.pageY < state.canvasTop + state.canvasHeight && 
            event.pageY > state.canvasTop &&
            event.pageX < state.canvasLeft + state.canvasWidth + state.offset + state.bgCanvasLeft &&
            event.pageX > state.canvasLeft + state.canvasWidth - state.offset + state.bgCanvasLeft
        ) {
            document.body.style.cursor = "ew-resize";                                   // right
        } else {
            //document.body.style.cursor = "alias";
        };
    } else {
        if (
            resizeTop && 
            event.pageY < (window.innerHeight / 2) - (state.minH / 2) && 
            event.pageY > 0 + state.minH
        ) {                                  
            resizingTop = true;
        }
        if (
            resizeLeft && 
            event.pageX < ((window.innerWidth - state.bgCanvasLeft) / 2) + state.bgCanvasLeft - (state.minW / 2) && 
            event.pageX > state.bgCanvasLeft + state.minW
        ) {                   
            resizingLeft = true;
        }
        if (resizeBottom &&
            event.pageY > (window.innerHeight / 2) + (state.minH / 2) &&
            event.pageY < window.innerHeight - state.minH
        ) {
            resizingBottom = true;
        }
        if (
            resizeRight && 
            event.pageX - state.bgCanvasLeft > 
            ((window.innerWidth - state.bgCanvasLeft) / 2) + (state.minW / 2) && 
            event.pageX < window.innerWidth - state.minW
        ) {                                                                             
            resizingRight = true;
        };
    };

    return {
        "top": resizingTop,
        "left": resizingLeft,
        "bottom": resizingBottom,
        "right": resizingRight
    }
};