Feature: Performing a Borrowing Estimate

    As a customer on the ANZ home loan calculate page
    I want to calculate how much I can borrow

    Background:
        Given I am on the home loan calculator page

    Scenario Outline: Performing a borrowing estimate for a customer - single, 0 dependencies, home to live in
        When I enter "<incomeAmount>" into the income field
        And I enter "<otherIncomeAmount>" into the other income field
        And I enter "<livingExpensesAmount>" into the living expenses field
        And I enter "<otherLoanRepayments>" into the other loan repayments field
        And I enter "<totalCreditCardAmount>" into the total credit card limits field
        And  I click the borrow button
        Then I should see the borrowing estimate amount "<borrowEstimateAmount>" is displayed
        When I click the startOver button
        Then I should see the form is cleared up


        Examples:
        |incomeAmount  | otherIncomeAmount | livingExpensesAmount | otherLoanRepayments | totalCreditCardAmount | borrowEstimateAmount |
        |80000         | 10000             |  500                 | 100                 | 10000                 | $507,000             |
//        |80000         | 10000             |  500                 | 0                   | 0                     | $581,000             |

