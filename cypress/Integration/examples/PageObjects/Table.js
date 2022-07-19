///<reference types="Cypress" />

import TableAqua from "./TableAqua";

class Table extends TableAqua
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

      searchName()
      {
        return cy.get('#filter-input').type('Niko Smith')
      }
      singleRowDataValidate()
      {
          cy.get('#filter-table>tbody>tr')
      .within(function(){
        cy.get('td').should('contain.text','Niko Smith')
      })
      }

      checkEquality()
      {
        return cy.get('#filter-input').then(($span)=>{
            const n=$span.text()

         return   cy.get('#row8 > :nth-child(1)').then(()=>{
           
                const m=$span.text()

                expect(n).to.eq(m)
    
           })
       })
        
        

      }

}

export default Table;