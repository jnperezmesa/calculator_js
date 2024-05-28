const {Given, When} = require('@cucumber/cucumber');
const {Calculator} = require('../../src/calculator.js');
let calculator = new Calculator()

Given('exponential: a calculator', function () {
    calculator = new Calculator();
});

When('exponential: I calculate the exponential of {float}', function (number) {
    this.actualAnswer = calculator.exponential(number);
});

When('exponential: number is {string}', function (number) {
    this.actualAnswer = calculator.exponential(number);
});
