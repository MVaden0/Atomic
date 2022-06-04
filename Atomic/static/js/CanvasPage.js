const SVGXLMNS = "http://www.w3.org/2000/svg";

/**
 * The toolbar is where object properties can be manipulated.
 */
 class Toolbar {
    constructor() {
        this.DOM = {
            toolbar: document.querySelector("#toolbar"),
            title: document.querySelector("#toolbar__title"),
            attributesContainer: document.querySelector("#toolbar__attributes__container"),
        }

        this.STATE = {
            toolbar: {},
            title: {
                value: "Canvas"
            }
        }

        this.initialize();
    }

    initialize = () => {
        // set initial value
        this.DOM.title.setAttribute("value", this.STATE.title.value);
    };
}

/**
 * Canvas
 */
 class Canvas {
    constructor() {
        this.DOM = {
            container: document.querySelector("#canvas__container"),
            wrapper: document.querySelector("#canvas__wrapper"),
            canvas: document.querySelector("#canvas"),
        }

        this.STATE = {
            container: {
                width: window.innerWidth - 220
            },
            canvas: {
                top: (window.innerHeight - (window.innerHeight - 150)) / 2,
                left: (window.innerWidth - 220 - (window.innerHeight - 150)) / 2,
                height: (window.innerHeight - 150),
                width: (window.innerHeight - 150),
                offset: 5,
            },
            resizing: false,
            resizingTop: false,
            resizingLeft: false,
            resizingBottom: false,
            resizingRight: false,
        }

        this.initialize();
    }

    initialize = () => {
        this.DOM.container.style.width = `${this.STATE.container.top}px`;

        this.DOM.wrapper.style.top = `${this.STATE.canvas.top}px`;
        this.DOM.wrapper.style.left = `${this.STATE.canvas.left}px`;
        this.DOM.wrapper.style.height = `${this.STATE.canvas.height}px`;
        this.DOM.wrapper.style.width = `${this.STATE.canvas.width}px`;

        this.DOM.canvas.setAttribute("height", `${this.STATE.canvas.height}px`);
        this.DOM.canvas.setAttribute("width", `${this.STATE.canvas.width}px`);


        document.addEventListener('mousemove', (event) => { this.handleMouseMove(event); });
        document.addEventListener('mousedown', (event) => { this.handleMouseDown(event); });
        document.addEventListener('mouseup', (event) => { this.handleMouseUp(event); });
    };

    setTop = (value) => {
        this.STATE.canvas.top = value;
        this.DOM.wrapper.style.top = `${this.STATE.canvas.top}px`;
    };

    setLeft = (value) => {
        this.STATE.canvas.left = value;
        this.DOM.wrapper.style.left = `${this.STATE.canvas.left}px`;
    };

    setHeight = (value) => {
        this.STATE.canvas.height = value;
        this.DOM.wrapper.style.height = `${this.STATE.canvas.height}px`;
        this.DOM.canvas.setAttribute("height", `${this.STATE.canvas.height}px`);
    };

    setWidth = (value) => {
        this.STATE.canvas.width = value;
        this.DOM.wrapper.style.width = `${this.STATE.canvas.width}px`;
        this.DOM.canvas.setAttribute("width", `${this.STATE.canvas.width}px`);
    };

    computeCursorType = (x, y) => {
        const t = this.STATE.canvas.top;
        const l = this.STATE.canvas.left + 220;
        const b = t + this.STATE.canvas.height;
        const r = l + this.STATE.canvas.width;
        const o = this.STATE.canvas.offset;

        if (x > l - o && x < l + o && y > t - o && y < t + o) {     // top left
            document.body.style.cursor = "nwse-resize";
        } else
        if (x > r - o && x < r + o && y > b - o && y < b + o) {     // bottom right
            document.body.style.cursor = "nwse-resize";
        } else
        if (x > r - o && x < r + o && y > t - o && y < t + o) {     // top right
            document.body.style.cursor = "nesw-resize";
        } else
        if (x > l - o && x < l + o && y > b - o && y < b + o) {     // bottom left
            document.body.style.cursor = "nesw-resize";
        } else
        if (x > l + o && x < r - o && y > t - o && y < t + o) {     // top
            document.body.style.cursor = "ns-resize";
        } else
        if (x > l - o && x < l + o && y > t + o && y < b - o) {     // left
            document.body.style.cursor = "ew-resize";
        } else
        if (x > l + o && x < r - o && y > b - o && y < b + o) {     // bottom
            document.body.style.cursor = "ns-resize";
        } else
        if (x > r - o && x < r + o && y > t + o && y < b - o) {     // right
            document.body.style.cursor = "ew-resize";
        } else {
            document.body.style.cursor = "alias";
        };
    };

    handleMouseMove = (event) => {
        const x = event.pageX;
        const y = event.pageY;

        if (!this.STATE.resizing) {
            this.computeCursorType(x, y);
        } else {
            if (this.STATE.resizingTop) {
                if (y < (window.innerHeight / 2) - 50 && y > 50) {
                    this.setHeight(window.innerHeight - (2 * y));
                    this.setTop(y);
                };
            };

            if (this.STATE.resizingLeft) {
                if (x < ((window.innerWidth - 220) / 2) + 220 - 50 && x > 220 + 50) {
                    this.setWidth(window.innerWidth - 220 - (2 * (x - 220)));
                    this.setLeft(x - 220);
                };
            };

            if (this.STATE.resizingBottom) {    
                if (y < window.innerHeight - 50 && y > (window.innerHeight / 2) + 50) {
                    this.setHeight(window.innerHeight - (2 * (window.innerHeight - y)));
                    this.setTop(y - this.STATE.canvas.height);
                };  
            };

            if (this.STATE.resizingRight) {
                if (x < window.innerWidth - 50 && x > ((window.innerWidth - 220) / 2) + 220 + 50) {
                    this.setWidth(window.innerWidth - 220 - (2 * (window.innerWidth - x)));
                    this.setLeft(x - 220 - this.STATE.canvas.width);
                };
            }; 
        };
    };

    handleMouseDown = (event) => {
        const t = this.STATE.canvas.top;
        const l = this.STATE.canvas.left + 220;
        const b = t + this.STATE.canvas.height;
        const r = l + this.STATE.canvas.width;
        const o = this.STATE.canvas.offset;
        const x = event.pageX;
        const y = event.pageY;

        if (x > l - o && x < l + o && y > t - o && y < t + o) {     // top left
            this.STATE.resizing = true;
            this.STATE.resizingTop = true;
            this.STATE.resizingLeft = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > r - o && x < r + o && y > b - o && y < b + o) {     // bottom right
            this.STATE.resizing = true;
            this.STATE.resizingBottom = true;
            this.STATE.resizingRight = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > r - o && x < r + o && y > t - o && y < t + o) {     // top right
            this.STATE.resizing = true;
            this.STATE.resizingTop = true;
            this.STATE.resizingRight = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > l - o && x < l + o && y > b - o && y < b + o) {     // bottom left
            this.STATE.resizing = true;
            this.STATE.resizingBottom = true;
            this.STATE.resizingLeft = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > l + o && x < r - o && y > t - o && y < t + o) {     // top
            this.STATE.resizing = true;
            this.STATE.resizingTop = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > l - o && x < l + o && y > t + o && y < b - o) {     // left
            this.STATE.resizing = true;
            this.STATE.resizingLeft = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > l + o && x < r - o && y > b - o && y < b + o) {     // bottom
            this.STATE.resizing = true;
            this.STATE.resizingBottom = true;

            document.body.style.cursor = "grabbing";
        } else
        if (x > r - o && x < r + o && y > t + o && y < b - o) {     // right
            this.STATE.resizing = true;
            this.STATE.resizingRight = true;

            document.body.style.cursor = "grabbing";
        } else {
            document.body.style.cursor = "alias";
        };
    };

    handleMouseUp = (event) => {
        // reset cursor
        document.body.style.cursor = "alias";

        // reset resizing state
        this.STATE.resizing = false;
        this.STATE.resizingTop = false;
        this.STATE.resizingLeft = false;
        this.STATE.resizingBottom = false;
        this.STATE.resizingRight = false;
    };
};

/**
 * The CanvasPageController class provides a callable object that acts as a driver for the canvas page's interface.
 */
class CanvasPageController {
    constructor() {
        this.toolbar = new Toolbar();
        this.canvas = new Canvas();

        this.STATE = {
            layers: [
                {
                    name: "layer 1",
                    objects: [
                        {
                            tag: "ellipse 1",
                            color: {
                                fill: "#fff0ce",
                                stroke: "transparent"
                            },
                            dimensions: {
                                cx: 5,
                                cy: 6,
                                rx: 7,
                                ry: 8,
                            }
                        }
                    ]
                }
            ]
        };
    };
};

class Polygon {
    constructor(options) {
        this.PRIMITIVESTATE = {
            selected: false,
            fill: options.fill || "#000000",
            stroke: options.stroke || "#000000",
            fillOpacity: options.fillOpacity || 1,
            strokeOpacity: options.strokeOpacity || 1,
            strokeWidth: options.strokWidth || 0,
            cx: options.cx,
            cy: options.cy,
            w: options.w,
            h: options.h,
        };
    };
};

class Ellipse extends Polygon {
    constructor(options) {
        super({
            cx: options.cx,
            cy: options.cy,
            w: options.rx * 2,
            h: options.ry  * 2,
        });

        this.DOM = {
            ref: null
        }

        this.STATE = {
            ...this.PRIMITIVESTATE,
            rx: options.rx,
            ry: options.ry,
        };
    }

    initialize = (svgParent) => {
        // reference to DOM element
        this.DOM.ref = document.createElementNS(SVGXLMNS, "ellipse");

        // color attributes
        this.DOM.ref.setAttribute("fill", this.STATE.fill);
        this.DOM.ref.setAttribute("stroke", this.STATE.stroke);
        this.DOM.ref.setAttribute("fill-opacity", this.STATE.fillOpacity);
        this.DOM.ref.setAttribute("stroke-opacity", this.STATE.strokeOpacity);

        // position attributes
        this.DOM.ref.setAttribute("stroke-width", this.STATE.strokeWidth);
        this.DOM.ref.setAttribute("cx", this.STATE.cx);
        this.DOM.ref.setAttribute("cy", this.STATE.cy);
        this.DOM.ref.setAttribute("rx", this.STATE.rx);
        this.DOM.ref.setAttribute("ry", this.STATE.ry); 
    };
}

ready(() => {
    const canvasPageController = new CanvasPageController();
    const circ = new Ellipse({
        fill: "#fff0ce",
        cx: 5, 
        cy: 6, 
        rx: 7, 
        ry: 8
    });

    alert(JSON.stringify(circ.STATE));
});











/* Section */
/*
let hidePanel = false;
const button = document.querySelector("#toolbar-button");

const handleClick = (event) => {
    const content = document.querySelector("#sec");

    if (hidePanel) {
        content.style.height = "0";
    } else {
        content.style.height = "50px";
    }

    hidePanel = !hidePanel;
}

button.addEventListener('click', handleClick);
*/
/* input */
/*
const handleChange = (value) => {
    if (value.match(/^[0-9]*\.?[0-9]*$/) != null) {
        setInputValue(value);
    };
};

const input = document.querySelector("#x");
input.addEventListener('change', handleChange);
*/