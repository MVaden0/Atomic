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
            container: {},
            wrapper: {
                top: (window.innerHeight - 800) / 2,
                left: (window.innerWidth - 220 - 800) / 2,
                height: 800,
                width: 800,
            },
            canvas: {
                height: 800,
                width: 800,
            }
        }

        alert(window.innerHeight)

        this.initialize();
    }

    initialize = () => {
        this.DOM.wrapper.style.top = `${this.STATE.wrapper.top}px`;
        this.DOM.wrapper.style.left = `${this.STATE.wrapper.left}px`;
        this.DOM.wrapper.style.height = `${this.STATE.wrapper.height}px`;
        this.DOM.wrapper.style.width = `${this.STATE.wrapper.width}px`;

        this.DOM.canvas.setAttribute("width", this.STATE.wrapper.width);
        this.DOM.canvas.setAttribute("height", this.STATE.wrapper.height);
    };
}

ready(() => {
    const toolbar = new Toolbar();
    const canvas = new Canvas();
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