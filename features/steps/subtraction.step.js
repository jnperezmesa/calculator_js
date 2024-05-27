const {Given, When} = require('@cucumber/cucumber');
const Calculator = require('../../src/calculator');

let calculator = new Calculator();

Given('subtraction: a calculator', function () {
    calculator = new Calculator();
});

When('subtraction: first number is {string} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.subtraction(first_number, second_number);
});

When('subtraction: first number is {float} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.subtraction(first_number, second_number);
});

When('subtraction: first number is {string} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.subtraction(first_number, second_number);
});

When('subtraction: first number is {float} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.subtraction(first_number, second_number);
});
