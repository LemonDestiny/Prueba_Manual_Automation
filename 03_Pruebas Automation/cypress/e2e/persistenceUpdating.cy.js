const { home } = require('../support/Pages/automationExercise/home');
const { products } = require('../support/Pages/automationExercise/products');

describe('This will test if the category persist after actualizing the page',()=>{

    beforeEach(()=>{
        cy.visit("https://automationexercise.com/");
        cy.url().should('contain',"automationexercise.com");
        cy.loginUI("maroctw72@gmail.com", "15221528");
        home.validateElements()
    })


    it('Full Cycle', ()=>{
        home.clickProducts();
        products.clickWomenCategory();
        cy.reload();
        products.validateAllProductsAreDress();
        products.get.productCategoryTitle().should('contain', 'Women > Dress')
    })
}
)