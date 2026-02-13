const { home } = require('../support/Pages/automationExercise/home');
const { products } = require('../support/Pages/automationExercise/products');

describe('This will test adding an item to the cart',()=>{

    beforeEach(()=>{
        cy.visit("https://automationexercise.com/");
        cy.url().should('contain',"automationexercise.com");
        cy.loginUI("maroctw72@gmail.com", "15221528");
        home.validateElements()
    })


    it('Full Cycle', ()=>{
        home.clickProducts();
        products.clickWomenCategory();
        products.clickAddCart();
        products.validatePopUp();
        products.clickContinue();
    })
}
)