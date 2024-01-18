describe('Автотест на форму логина', function () {
   it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })
   it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    })
   it('негативный кейс авторизации пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
   it('негативный кейс авторизации логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german1@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
   it(' негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })
   it(' негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german1dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешн');
    })

})
