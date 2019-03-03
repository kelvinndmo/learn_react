"use strict";

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(54, 60));

var user = {
    "name": "onkundi",
    "cities": ["nairobi", "New York", "Dublin"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + "has lived in " + city;
        });
    }
};

var multplier = {
    numbers: [1, 45, 6, 65, 4],
    multiplyBy: 2,
    multply: function multply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multplier.multply());
