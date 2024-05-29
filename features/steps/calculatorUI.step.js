const assert = require('assert');
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities } = require('selenium-webdriver');
require("chromedriver");


// driver setup
const capabilities = Capabilities.chrome();

capabilities.set('chromeOptions', { "w3c": false });

const driver = new Builder().withCapabilities(capabilities).build();

Given('UI: I am on the calculator', async function () {
    await driver.get('http://localhost:8080');
});

When('UI: I click on {string}', async function (searchTerm) {
    const element = await driver.findElement(By.id(searchTerm));
    element.click();
});

Then('UI: I should be told {string}', {timeout: 60 * 1000}, async function () {
    const element = await driver.findElement(By.id("result"));

    assert.strictEqual(this.operation, element.value);
});

Then('UI: Previous should tell {string}', {timeout: 60 * 1000}, async function () {
    const element = await driver.findElement(By.id("previous"));

    assert.strictEqual(this.operation, element.value);
});

AfterAll(async function(){
    await driver.quit();
});

