'use strict';

var count = 0;

var countIncrement = function countIncrement() {
    count++;
    runTheApplication();
};

var approute = document.getElementById('areba');

var runTheApplication = function runTheApplication() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count : ',
            count
        ),
        React.createElement(
            'button',
            { onClick: countIncrement },
            'Kelvin Onkundi Ndemo'
        )
    );
    ReactDOM.render(template, approute);
};

runTheApplication();
