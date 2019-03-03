"use strict";

console.log('app is running');

var app = {
    "name": "kelvin onkundi ndemo",
    "title": "Look for me",
    "subtitle": "Yes its him",
    "options": []
};

var formSubmit = function formSubmit(e) {
    e.preventDefault(); //prevents page from exhibiting default loading behaviour
    var option = e.target.elements.option.value; //gets the value of the option we input

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; //reset the input field to blank
        console.log(app.options); //this is optional
    }
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "p",
        null,
        app.options.length
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    ),
    React.createElement(
        "form",
        { onSubmit: formSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add Option"
        )
    )
);

var approute = document.getElementById('areba');
ReactDOM.render(template, areba);
