export class LoginPage{
    
    static preencherCampoEmail(email) {
        cy.get("div.card__login input[type='email']").type(email);
    }

    static preencherCampoSenha(senha) {
        cy.get("div.card__login input[type='password']").type(senha);
    }

    static botaoAcessarClick() {
        cy.get("div.login__buttons button[type=submit]").click();
    }


    static login(){
        this.preencherCampoEmail;
        this.preencherCampoSenha;
        this.botaoAcessarClick
    }
}

