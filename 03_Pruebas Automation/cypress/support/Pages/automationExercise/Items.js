class Item {

    get = {

        itemImage : ()=> cy.get('.view-product img'),
        itemTitle : ()=> cy.get('.product-information h2'),
        itemCategory : ()=> cy.get('.product-information p'),
        itemPrice : ()=> cy.get('.product-information span'),
        itemAvailability : ()=> cy.get('.product-information p'),
        itemCondition : ()=> cy.get('.product-information p'),
        itemBrand : ()=> cy.get('.product-information p'),

    }
    ValidateInformation(){
        this.get.itemImage().should('be.visible');
        this.get.itemTitle().should('contain','Sleeveless Dress')
        this.get.itemCategory().contains('Women > Dress').should('be.visible');
        this.get.itemPrice().contains('Rs. 1000').should('be.visible');
        this.get.itemAvailability().contains('Availability:').should('be.visible');
        this.get.itemCondition().contains('Condition:').should('be.visible');
        this.get.itemBrand().contains('Brand:').should('be.visible');
    }
}
export const item = new Item ;