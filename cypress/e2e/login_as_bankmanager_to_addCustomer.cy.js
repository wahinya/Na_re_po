import { landingPage } from "../pages/landingPage"

describe('Login as a bank manager to add customer and add a bank accoubnt to the customer', { testIsolation: false },() => {
  const page = new landingPage()
  before(() => {
    page.navigate(Cypress.env('base'))
})
  it('login as a manager', () => {
    page.loginAsManager();
  })
  it('open customer form', () => {
    page.openCustomerForm();
  })
  it('add new customer details ', () => {
  page.addCustomerDetails();
})
it('open a new bank account for the customer ', () => {
  page.openNewBankAccount();
})

})
