import { loginpage } from "../pages.files/OrangeHrm2.page";

describe('To verify the login functionality', () => {
    let loginuserdata;
    beforeEach(() => {
        cy.fixture('OrangeHrm.json').then((userdata) => ((loginuserdata) = (userdata)))
    })
    it('To verify positive logIn test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginpage.enterUsername(loginuserdata.positivelogintest);
        loginpage.enterPassword(loginuserdata.positivelogintest);
        loginpage.clicksOnSubmit();
        loginpage.verifyTheNewPageURl();
        loginpage.logOutTheApplication();
    });
    it('To verify negative username test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginpage.enterUsername(loginuserdata.negativeusernametest);
        loginpage.enterPassword(loginuserdata.negativeusernametest);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();

    });
    it('To verify negative password  test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginpage.enterUsername(loginuserdata.negativepasswordtest);
        loginpage.enterPassword(loginuserdata.negativepasswordtest);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();

    });
    it('To verify empty username and empty password  test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginpage.enterUsername(loginuserdata.emptyusernameandemptypassword);
        loginpage.enterPassword(loginuserdata.emptyusernameandemptypassword);
        loginpage.clicksOnSubmit();
    
        loginpage.verifyTheNewPageContainsRequiredText();

    });
    it('To verify that the User is not able to Login with an invalid Username and invalid Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginpage.enterUsername(loginuserdata.invalidusernameandinvalidpassword);
        loginpage.enterPassword(loginuserdata.invalidusernameandinvalidpassword);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();

    });
    it('To verify the login page for both, when the field is blank and Submit button is clicked', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginpage.clicksOnSubmit();
        loginpage.verifyTheNewPageContainsRequiredText();
        

    });
    it('To verify that the logout link is redirected to login/home page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginpage.enterUsername(loginuserdata.positivelogintest);
        loginpage.enterPassword(loginuserdata.positivelogintest);
        loginpage.clicksOnSubmit();
        loginpage.verifyTheNewPageURl();
       loginpage.logOutTheApplication();
    });

})