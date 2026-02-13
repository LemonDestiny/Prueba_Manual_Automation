class Home {



    get = {

        carrousel : ()=> cy.get('#slider'),
        shopNavBar : ()=> cy.get('.nav.navbar-nav'),
        pageLogo : ()=> cy.get('[class="logo pull-left"]'),

    }

    clickMenuOption(optionName) {
        this.get.shopNavBar().contains('a', optionName).click();
    }

    validateElements(){
        this.get.carrousel().should('be.visible');
        this.get.pageLogo().should('be.visible');
        this.get.shopNavBar().should('be.visible');
    }

    ValidateLogin(){
        this.get.shopNavBar().contains('a','Logged in as Marcos').should('be.visible');
    }

    
    clickHome(){
        this.clickMenuOption('Home');
    }
    clickProducts(){
        this.clickMenuOption('Products');
    }
    clickCart(){
        this.clickMenuOption('Cart');
    }
    clickLogin(){
        this.clickMenuOption('Signup / Login');
    }
    clickContactUs(){
        this.clickMenuOption('Contact us');
    }
}

export const home = new Home ;