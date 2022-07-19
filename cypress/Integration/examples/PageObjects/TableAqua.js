///<reference types="Cypress" />

import Aqua from "./Aqua";

class TableAqua extends Aqua
{

  navigateToURL()
    {
       return cy.visit("https://aquabottesting.com/")
    }
 
    clickTable()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false
          })

         return  cy.get('a.dropdown-item').invoke('show')
   
          
    }
     wholeTableData()
    {
        return cy.get('#js-sort-table>tbody>tr')
        .each(function($row,index,$rows){
          cy.wrap($row).within(function(){
            cy.get('td')
            .each(function($cellData,index,$columns){
              cy.log($cellData.text())
            })
          })
        })
    }

     singleRowData()
    {
       return cy.get('#js-sort-table>tbody>tr').eq(0)
    .within(function(){
      cy.get('td').eq(2).should('contain.text','20015660')
    })
    }

     specificCellData()
    {
        return cy.get('#js-sort-table').contains('Dawn Wolf').parent()
        .within(function(){
          cy.get('td').eq(4).then(function(Balance){
            cy.log(Balance.text())
    
          })
        })
    }
   

}

export default TableAqua;