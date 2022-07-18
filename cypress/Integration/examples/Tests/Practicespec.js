describe('My second Test Suit', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  it('Get the whole table data', () => {
    cy.visit('https://aquabottesting.com/')
    cy.get('a.dropdown-item').invoke('show')
    cy.contains('Table 1 Example').click({force: true})

    cy.get('.navbar.navbar-expand-lg.navbar-dark.navbar-tables.fixed-top').then(function($Aquabot){
      const aquabotText =$Aquabot.text()
      cy.log(aquabotText)
    
    })
    
    cy.get('#js-sort-table>tbody>tr').should('have.length','9')
    cy.get('#js-sort-table>tbody>tr:eq(0)>td').should('have.length','5')

    cy.get('#js-sort-table>tbody>tr')
    .each(function($row,index,$rows){
      cy.wrap($row).within(function(){
        cy.get('td')
        .each(function($cellData,index,$columns){
          cy.log($cellData.text())
        })
      })
    })
  })
  it('Get single row data',function(){
    cy.get('#js-sort-table>tbody>tr').eq(0)
    .within(function(){
      cy.get('td').eq(2).should('contain.text','20015660')
    })
  })
  it('Get specific cell value based on another cell value',function(){
      
    cy.get('#js-sort-table').contains('Dawn Wolf').parent()
    .within(function(){
      cy.get('td').eq(4).then(function(Balance){
        cy.log(Balance.text())
        

      })
    })


  })
  
})