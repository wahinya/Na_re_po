import { cutomerbtn, opencustomersbtn, opennewaccountbtn, searchbtn } from '../utilities/locators';

const locators = require ('../utilities/locators')

const managerbtn = locators.managerbtn;
const customerbtn = locators.customerbtn;
const addnewcustomerbtn = locators.addnewcustomerbtn;
const firstname = locators.firstname;
const lastname = locators.lastname;
const postcode = locators.postcode;
const submitcustomerbtn = locators.submitcustomerbtn;
const selectcustomer = locators.selectcustomer
const selectcurrency = locators.selectcurrency
const processbtn= locators.processbtn
const loginbtn = locators.loginbtn
const accnolabel = locators.accnolabel
const transactionsbtn = locators.transactionsbtn
const depositbtn = locators.depositbtn
const depositamount = locators.depositamount
const submitdepositbtn = locators.submitdepositbtn
const withdrawbtn = locators.withdrawbtn
const withdrawamount = locators.withdrawamount
const submitwithdraw = locators.submitwithdraw



export class landingPage{
navigate(pageURL){
    cy.visit(pageURL)
}
loginAsManager(){
    cy.xpath(managerbtn).click();
    cy.wait(2000);
}
openCustomerForm(){
    cy.xpath(addnewcustomerbtn).click();
}
addCustomerDetails(){
    cy.xpath(firstname).type("duncan");
    cy.xpath(lastname).type("wahinya");
    cy.xpath(postcode).type("00400");
    cy.xpath(submitcustomerbtn).click();
}
openNewBankAccount(){
 cy.xpath(opennewaccountbtn).click()
 cy.xpath(selectcustomer).select("duncan wahinya");
 cy.xpath(selectcurrency).select("Dollar");
 cy.xpath(processbtn).click();

}

//customer 
loginAsCustomer(){
    cy.xpath(customerbtn).click();
    cy.xpath(selectcustomer).select("duncan wahinya");
    cy.xpath(loginbtn).click();
}
verifyAccountNumber(customerAccountNumber){
    cy.xpath(accnolabel).should('have.text' , customerAccountNumber)
}
performDepositTransaction(amount){
    cy.xpath(depositbtn).click()
    cy.xpath(depositamount).type(amount)
    cy.xpath(submitdepositbtn).click()
}
performWithdrawTransaction(amount){
    cy.xpath(withdrawbtn).click()
    cy.xpath(withdrawamount).type(amount)
    cy.xpath(submitwithdraw).click()
}
}