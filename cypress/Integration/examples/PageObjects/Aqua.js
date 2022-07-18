
///<reference types="Cypress" />
class Aqua
{
    
    constructor()

    {
     
        this.clickform=":nth-child(3) > .nav-link";
        this.name="#cname";
        this.email="#cemail";
        this.phonnum="#cphone";
        this.radiobutton="#contactForm > :nth-child(4) > :nth-child(2)";
        this.message="#cmessage";
        this.dropdown="#cselect";
        this.checkbox="#csuccess";
        this.submit="#submit";
        this.selectTextvalidate="#cmsgSubmit";
    }

    navigateToUrl()
        {
           cy.visit("https://aquabottesting.com/")
        }
   
    clickOnForm()
    {

        return cy.get(this.clickform)
      
    }

   
    fillName()
    {
    
         return cy.get(this.name)
    }
    
    fillEmail()
    {
        
        return cy.get(this.email)
    }

    fillPhoneNum()
    {
        
        return cy.get(this.phonnum)
    }

    clickonMobilephnRadiobutton()
    {
       
       return cy.get( this.radiobutton)
    

    }
   
    fillMessageBox()
    {
        
        return cy.get( this.message)
    }
     
    selectDropdown()
    {
      
      return cy.get(this.dropdown).select('Testing').contains('Testing')

      .each(function($el,index,$list){

          cy.log($el.text())
    })
     
          

    }

    selectCheckbox()
    {
        
          return cy.get(this.checkbox)
        
    }

    

    clickOnSubmit()
     {
    
            return cy.get(this.submit)
        
    }

    validateText()
    {
       return cy.get( this.selectTextvalidate)
    }



   
   
}
export default Aqua;