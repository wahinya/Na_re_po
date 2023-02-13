import { landingPage } from "../pages/landingPage"
import { withdrawamount } from "../utilities/locators"

describe('login as customer to perform deposit /withdraw transactions', { testIsolation: false },() => {
  const page = new landingPage()
  before(() => {
    page.navigate(Cypress.env('base'))
})
  it('login as a customer', () => {
    page.loginAsCustomer();
  })
  it('verifies the account number', () => {
    page.verifyAccountNumber("1016 ");
  })

  it('perform deposit transaction', () => {
    var depositamount = 10000;
    page.performDepositTransaction(depositamount);
  })
  it('perform withdraw transaction', () => {
    var withdrawamount = 5000;
    page.performWithdrawTransaction(withdrawamount);
  })
  
})