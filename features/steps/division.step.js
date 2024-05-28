const { Given, When } = require('@cucumber/cucumber');
const Calculator  = require('../../scripts/calculator');

let calculator = new Calculator();

Given('division: a calculator', function () {
    calculator = new Calculator();
});

When('division: first number is {string} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.division(first_number, second_number);
});

When('division: first number is {float} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.division(first_number, second_number);
});

When('division: first number is {string} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.division(first_number, second_number);
});

When('division: first number is {float} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.division(first_number, second_number);
});
