const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Calculator  = require('../../src/calculator');

let calculator = new Calculator();

Given('a calculator', function () {
    calculator = new Calculator();
});

When('first number is {int} and second number is {int}', function (first_number, second_number) {
    this.actualAnswer = calculator.aggregation(first_number, second_number);
});

Then('I should be told {int}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});
