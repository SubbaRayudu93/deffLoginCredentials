class Login {
    enterUsername(loginuserdata){
        cy.get('[name="username"]').type(loginuserdata.username)
    }
    enterPassword(loginuserdata){
        cy.get('[type="password"]').type(loginuserdata.password)
    }
    clicksOnSubmit(){
        cy.get('[type="submit"]').should('be.visible').click();
    
    }
    verifyTheNewPageURl(){
        cy.title().should('include','OrangeHRM')
    }
    verifyTheNewPageContainsRequiredText(){
        cy.contains('Required').should('be.visible').and('contain', 'Required');
    }
    clicksOnLogOutButton(){
        cy.get('.wp-block-button__link').click();
    }
    verifyErrormsg(){
        cy.contains('Invalid credentials').should('be.visible').and('contain', 'Invalid credentials');

    }
    logOutTheApplication(){
        const dropdown = cy.get('[class="oxd-userdropdown-name"]');
        dropdown
            .should('be.visible')
            .click();
        const optionValue = 'Logout';
        optionValue
        cy.contains('a[role="menuitem"]', optionValue).click();    }
    }
    export const loginpage = new Login();