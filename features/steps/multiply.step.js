const { Given, When } = require('@cucumber/cucumber');
const Calculator  = require('../../src/calculator');

let calculator = new Calculator();

Given('multiplication: a calculator', function () {
    calculator = new Calculator();
});

When('multiplication: first number is {string} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.multiplication(first_number, second_number);
});

When('multiplication: first number is {float} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.multiplication(first_number, second_number);
});

When('multiplication: first number is {string} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.multiplication(first_number, second_number);
});

When('multiplication: first number is {float} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.multiplication(first_number, second_number);
});
