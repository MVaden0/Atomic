/**
 * Toolbar Section
 */
 class Toolbar {
    constructor() {
        // DOM Elements
        this.DOM = {
            toolbar: document.querySelector("#toolbar"),
            title: document.querySelector("#toolbar__title"),
            attributesContainer: document.querySelector("#toolbar__attributes__container"),
        }

        // state
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

ready(() => {
    const toolbar = new Toolbar();
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