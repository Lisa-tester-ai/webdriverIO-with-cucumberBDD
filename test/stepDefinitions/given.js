import { Given} from 'cucumber';
import homeLoanCalculatorPage from '../pageobjects/homeloan-calculator.page';

Given(/^I am on the home loan calculator page$/, function () {
  homeLoanCalculatorPage.open();
  browser.getTitle().should.equal('Home loan borrowing power calculator | ANZ');
});

