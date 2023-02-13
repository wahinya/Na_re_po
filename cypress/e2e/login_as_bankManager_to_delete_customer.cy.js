import { landingPage } from "../pages/landingPage"

describe('login as a bank manager to delete an existing customer ', { testIsolation: false },() => {
  const page = new landingPage()
  before(() => {
    page.navigate(Cypress.env('base'))
})
  it('login as a manager', () => {
    page.loginAsManager();
  })
  it('deletes a customer', () => {
    var customer = "duncan";
    page.deleteCustomer(customer);
  })

})