import { Then }  from 'cucumber';
import homeloanCalculatorPage from '../pageobjects/homeloan-calculator.page';
import homeLoanCalculatorPage from '../pageobjects/homeloan-calculator.page';

Then(/^I should see the borrowing estimate amount "([^"]*)"$ is displayed/, function (amount) {
  homeLoanCalculatorPage.getBorrowResultTextAmount().should.equal(amount);
});

Then(/^I should see the form is cleared up$/, function () {
  homeloanCalculatorPage.isCleared().should.be.true;
});



