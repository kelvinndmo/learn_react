"use strict";

var app = {
    "title": "norah Novak",
    "subtitle": "kelvin onkundi",
    "options": []
};

var submitForm = function submitForm(e) {
    e.preventDefault(); //prevents the default behaviour
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; //sets to an empty string 
    }
    renderApp();
};

var clearArray = function clearArray() {
    app.options = [];
    renderApp();
};

var renderApp = function renderApp() {
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
            app.options.length > 0 ? "here are your option" : "no options"
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
                "kelvin onkundi"
            ),
            React.createElement(
                "li",
                null,
                "norah areba"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: submitForm },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                " add option "
            ),
            React.createElement(
                "button",
                { onClick: clearArray },
                "clearall"
            )
        )
    );
    ReactDOM.render(template, document.getElementById('ndemo'));
};

renderApp();
