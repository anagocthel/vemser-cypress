export class BasePage {
    static acessarPagina(){
        cy.visit('https://bugbank.netlify.app');
    }
}