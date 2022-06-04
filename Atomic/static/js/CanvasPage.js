/**
 * Toolbar
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
            },
            attributesContainer: {},
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
                minPadding: 50,
                minH: 100,
                maxH: window.innerHeight - 100,
                minW: 100,
                maxW: window.innerWidth - 220 - 100,
            }
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
}

/**
 * CanvasPageController
 */
class CanvasPageController {
    constructor() {
        this.toolbar = new Toolbar();
        this.canvas = new Canvas();

        this.STATE = {
            resizing: false,
            resizingTop: false,
            resizingLeft: false,
            resizingBottom: false,
            resizingRight: false,
        }

        document.addEventListener('mousemove', (event) => { this.handleMouseMove(event); });
        document.addEventListener('mousedown', (event) => { this.handleMouseDown(event); });
        document.addEventListener('mouseup', (event) => { this.handleMouseUp(event); });
    }

    handleMouseMove = (event) => {
        const x = event.pageX;
        const y = event.pageY;

        if (!this.STATE.resizing) {
            this.computeCursorType(x, y);
        } else {
            if (this.STATE.resizingTop) {
                const height = window.innerHeight - (2 * y);

                if (height < this.canvas.STATE.canvas.maxH && height > this.canvas.STATE.canvas.minH ) {
                    this.canvas.setTop(y);
                    this.canvas.setHeight(height);
                };
            };

            if (this.STATE.resizingLeft) {
                const width = window.innerWidth - 220 - (2 * (x - 220));

                if (width < this.canvas.STATE.canvas.maxW && width > this.canvas.STATE.canvas.minW ) {
                    this.canvas.setLeft(x - 220);
                    this.canvas.setWidth(width);
                };
            };

            if (this.STATE.resizingBottom) {
                const height = window.innerHeight - (2 * (window.innerHeight - y));
                
                if (height < this.canvas.STATE.canvas.maxH && height > this.canvas.STATE.canvas.minH ) {
                    this.canvas.setTop(y - this.canvas.STATE.canvas.height);
                    this.canvas.setHeight(height);
                };  
            };

            if (this.STATE.resizingRight) {
                const width = window.innerWidth - 220 - (2 * (window.innerWidth - x));

                if (width < this.canvas.STATE.canvas.maxW && width > this.canvas.STATE.canvas.minW ) {
                    this.canvas.setLeft(x - 220 - this.canvas.STATE.canvas.width);
                    this.canvas.setWidth(width);
                };
            }; 
        };
    };

    handleMouseDown = (event) => {
        const t = this.canvas.STATE.canvas.top;
        const l = this.canvas.STATE.canvas.left + 220;
        const b = t + this.canvas.STATE.canvas.height;
        const r = l + this.canvas.STATE.canvas.width;
        const o = this.canvas.STATE.canvas.offset;
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

    computeCursorType = (x, y) => {
        const t = this.canvas.STATE.canvas.top;
        const l = this.canvas.STATE.canvas.left + 220;
        const b = t + this.canvas.STATE.canvas.height;
        const r = l + this.canvas.STATE.canvas.width;
        const o = this.canvas.STATE.canvas.offset;

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
};

ready(() => {
    const canvasPageController = new CanvasPageController();
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