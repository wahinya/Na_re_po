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

}}