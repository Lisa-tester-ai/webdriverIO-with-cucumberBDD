
import Page from './page';

class HomeloanCalculatorPage extends Page  {
  /**
  * define elements
  */
  get incomeInput() {return $('label*=Your income').$('input'); }
  get otherIncomeInput() {return $('label*=Your other income').$('input'); }
  get livingExpensesInput() {return $('label*=Living expenses').$('input'); }
  get otherLoanRepaymentsInput() {return $('label*=Other loan repayments').$('input'); }
  get totalCreditCardInput() {return $('label*=Total credit card limits').$('input'); }

  get borrowButton() {return $('button#btnBorrowCalculater'); }
  get borrowTextAmount() {return $('span#borrowResultTextAmount'); }
  get startOverButton() {return $('button.start-over'); }
  

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterTextIntoIncome (item) {
    this.incomeInput.clearValue();
    this.incomeInput.setValue(item);
    browser.pause(1000);
  }

  enterTextIntoOtherIncome (item) {
    this.otherIncomeInput.clearValue();
    this.otherIncomeInput.setValue(item);
    browser.pause(1000);
  }

  enterTextIntoLivingExpenses (item) {
    this.livingExpensesInput.clearValue();
    this.livingExpensesInput.setValue(item);
    browser.pause(1000);
  }

  enterTextIntootherLoanRepayments (item) {
    this.otherLoanRepaymentsInput.clearValue();
    this.otherLoanRepaymentsInput.setValue(item);
    browser.pause(1000);
  }

  enterTextIntototalCreditCard (item) {
    this.totalCreditCardInput.clearValue();
    this.totalCreditCardInput.setValue(item);
    browser.pause(1000);
  }

  borrow () {
    this.borrowButton.click();
    browser.pause(3000); // awaiting caculating..
  }

  getBorrowResultTextAmount() {
    this.borrowTextAmount.waitForDisplayed(1000);
    return this.borrowTextAmount.getText();
  }

  startOver() {
      this.startOverButton.click();
  }

  getIncomeInputAmount()
  {
      this.incomeInput.getValue();
  }

  isCleared () 
  {
    return this.incomeInput.getValue() == "0" 
      && this.otherIncomeInput.getValue() == "0"
      && this.livingExpensesInput.getValue() == "0"
      && this.otherLoanRepaymentsInput.getValue() == "0"
      && this.totalCreditCardInput.getValue() == "0";
  }

}

export default new HomeloanCalculatorPage();
