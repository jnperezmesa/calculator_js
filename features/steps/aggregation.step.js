const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Calculator  = require('../../src/calculator');

let calculator = new Calculator();

Given('a calculator', function () {
    calculator = new Calculator();
});

When('first number is {string} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.aggregation(first_number, second_number);
});

When('first number is {float} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.aggregation(first_number, second_number);
});

When('first number is {string} and second number is {float}', function (first_number, second_number) {
    this.actualAnswer = calculator.aggregation(first_number, second_number);
});

When('first number is {float} and second number is {string}', function (first_number, second_number) {
    this.actualAnswer = calculator.aggregation(first_number, second_number);
});

Then('I should be told {float}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

