const { home } = require('../support/Pages/automationExercise/home');
const { products } = require('../support/Pages/automationExercise/products');



describe('search validation by category',()=>{

    beforeEach(()=>{
        cy.visit("https://automationexercise.com/");
        cy.url().should('contain',"automationexercise.com");
        cy.loginUI("maroctw72@gmail.com", "15221528");
        home.validateElements()
    })


    it('Full Cycle', ()=>{
        home.clickProducts();
        products.clickMenCategory();
        products.validateAllProductsAreTshirt();

    
    })
}
)