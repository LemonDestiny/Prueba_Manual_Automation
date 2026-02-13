class Products {


    get = {
        productCategories : ()=> cy.get('#accordian'),
        productMenCategories : ()=> cy.get('#Men'),
        productWomenCategories : ()=> cy.get('#Women'),
        productCategoryTitle : ()=> cy.get('.active'),
        productAddCart: ()=> cy.get('.add-to-cart').eq(0).scrollIntoView(),
        productView: ()=> cy.get('.nav.nav-pills.nav-justified').eq(0),
        productCollection: ()=> cy.get('.productinfo p'),
        productPopUpTittle : ()=> cy.get('.modal-content h4'),
        productPopUpText : ()=> cy.get('.modal-body').eq(0),
        productContinueButton : ()=> cy.get('.btn.btn-success.close-modal.btn-block'),

    }

    clickViewProduct(){
        this.get.productView().click();
    }


    validateAllProductsAreTshirt(){
        this.get.productCollection().should('be.visible').each(($el) => {
            const productText = $el.text().toLowerCase();
            expect(productText).to.match(/t-shirt|tshirt|tshirts|t shirt/);
        })
    }
    validateAllProductsAreDress(){
        this.get.productCollection().should('be.visible').each(($el) => {
            const productText = $el.text().toLowerCase();
            expect(productText).to.match(/dress|Dress/);
        })
    }

    validatePopUp(){
        this.get.productPopUpTittle().should('contain','Added!');
        this.get.productPopUpText().should('contain','Your product has been added to cart.');
    }

    clickContinue(){
        this.get.productContinueButton().click();
    }
    clickMenuOption(optionName) {
        this.get.productCategories().contains('a', optionName).click();
    }

    clickMenCategory(){
        this.clickMenuOption('Men');
        this.get.productMenCategories().contains('a',"Tshirts").click();
    }

    clickWomenCategory(){
        this.clickMenuOption('Women');
        this.get.productWomenCategories().contains('a','Dress').click();
    }
    clickAddCart(){
        this.get.productAddCart().click();
    }


}



export const products = new Products ;