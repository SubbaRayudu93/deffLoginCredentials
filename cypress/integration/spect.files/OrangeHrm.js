describe('Login and Logout', () => {
    const loginData = [
        { username: 'Admin', password: 'admin123' },
        { username: 'Admin', password: 'password2' },
        { username: 'Admin1', password: 'admin123' },
        { username: 'Admin1', password: 'admin1231' },
        { username: ' ', password: 'admin123' },
        { username: 'Admin', password: ' ' },
        { username: ' ', password: ' ' },
        
    ];

    Cypress._.each(loginData, (userinfo, index) => {
        it(`Test ${index + 1}: Login and Logout`, () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/')

            cy.get('[name="username"]').type(userinfo.username);
            cy.get('[type="password"]').type(userinfo.password);
            cy.get('[type="submit"]').click();


            cy.url().then((url) => {
                if (url.includes('/dashboard')) {
                    // Assertion for successful login
                    const dropdown = cy.get('[class="oxd-userdropdown-name"]');
                    dropdown
                        .should('be.visible')
                        .click();
                    const optionValue = 'Logout';
                    optionValue
                    cy.contains('a[role="menuitem"]', optionValue).click();
                }
                else if (url.includes('/account')) {

                    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').then(($button) => {
                        const buttonText = $button.text();
                        if (buttonText === 'Invalid credentials') {
                            cy.contains('Invalid .credentials').should('be.visible').and('contain', 'Invalid credentials');

                        }
                        else {
                            cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').then(($defferent) => {
                                const defferentText = $defferent.text();
                                if (defferentText === 'Required') {
                                    cy.contains('Required').should('be.visible').and('contain', 'Required');
                                } else {
                                    cy.log('invalid credentiol ')
                                }
                            });


                        };

                    });
                };
            });





        });
    });
});
