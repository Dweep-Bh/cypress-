///<reference types="Cypress" />
import Aqua from "../PageObjects/Aqua";
import Table from "../PageObjects/Table";
import TableAqua from "../PageObjects/TableAqua";


describe('Test Suite', function(){

    const obj=new Aqua()
    const obj1=new TableAqua()
    const obj2=new Table()

   

    beforeEach(function() {
        
        cy.fixture('example').then(function(data)
        {
         this.data=data
        })
        
      })

    it('first test case',function(){

        obj.navigateToUrl('url')
        cy.title().should('be.equal','Aquabot Testing Site')
        obj.clickOnForm().click({ force: true }).should('be.visible')
        obj.fillName().type(this.data.name).should('be.visible')
        obj.fillEmail().type(this.data.email).should('be.visible')
        obj.fillPhoneNum().type(this.data.phone).should('be.visible')
        obj.clickonMobilephnRadiobutton().click({ force: true })
        obj.fillMessageBox().type(this.data.message).should('be.visible')
        obj.selectDropdown().should('have.value', 'Testing').and('be.visible')
        obj.selectCheckbox().click({ force: true }).check().should('be.checked').and('have.value','success')
        obj.clickOnSubmit().click({ force: true }).should('be.enabled')
        obj.validateText().should('be.visible','Message Submitted!')
        
    })
   

    it('second test case',function(){
       
        obj1.navigateToURL('url')
        obj1.clickTable().contains('Table 1 Example').click({force: true})
        obj1.wholeTableData().should('be.visible')
        obj1.singleRowData().should('be.visible')
        obj1.specificCellData().should('be.visible')
    })

    it('Third test case',function(){
       
        obj2.navigateToURL('url')
        obj2.clickTable().contains('Table 2 Example').click({force: true})
        obj2.searchName().should('be.visible')
        obj2.singleRowDataValidate()
        obj2.checkEquality()
       
    })
})
