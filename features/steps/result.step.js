const assert = require('assert');
const { Then } = require('@cucumber/cucumber');

Then('I should be told {float}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

