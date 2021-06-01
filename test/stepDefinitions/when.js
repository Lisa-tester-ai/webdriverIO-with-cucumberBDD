import { When } from 'cucumber';
import homeLoanCalculatorPage from '../pageobjects/homeloan-calculator.page';


When(/^I enter "([^"]*)" into the income field$/, function (arg1) {
    homeLoanCalculatorPage.enterTextIntoIncome(arg1);
});

When(/^I enter "([^"]*)" into the other income field$/, function (arg1) {
    homeLoanCalculatorPage.enterTextIntoOtherIncome(arg1);
});

When(/^I enter "([^"]*)" into the living expenses field$/, function (arg1) {
    homeLoanCalculatorPage.enterTextIntoLivingExpenses(arg1);
});

When(/^I enter "([^"]*)" into the other loan repayments field$/, function (arg1) {
    homeLoanCalculatorPage.enterTextIntootherLoanRepayments(arg1);
});

When(/^I enter "([^"]*)" into the total credit card limits field$/, function (arg1) {
    homeLoanCalculatorPage.enterTextIntototalCreditCard(arg1);
});

When(/^I click the borrow button$/, function () {
    homeLoanCalculatorPage.borrow();
});

When(/^I click the startOver button$/, function () {
    homeLoanCalculatorPage.startOver();
});



