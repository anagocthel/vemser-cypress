export class RegisterPage{
    static registrarUsuarioValido(email, nome, senha, confirmacaoDeSenha){
        this.botaoRegistarClick();
        this.preencherEmail(email);
        this.preencherNome(nome);
        this.preencherSenha(senha);
        this.preencherConfirmacaoDeSenha(confirmacaoDeSenha);
        this.botaoSubmeterRegistroClick();

    }
    static botaoSubmeterRegistroClick(){
        cy.get("div.card__register button[type='submit']").click({
            force: true
        });
    }
    static botaoRegistarClick() {
        cy.get("div.login__buttons button[type='button']").click();
    }
    static preencherEmail(email){
        cy.get("div.card__register input[type='email']").type(email, {
            force: true,            
        });
    }
    static preencherSenha(senha){
        cy.get("div.card__register input[name='password']").type(senha, {
            force: true,            
        });
    }
    static preencherNome(nome){
        cy.get("div.card__register input[name='name']").type(nome, {
            force: true,            
        });
    }
    static preencherConfirmacaoDeSenha(confirmacaoDeSenha){
        cy.get("div.card__register input[name='passwordConfirmation']").type(confirmacaoDeSenha, {
            force: true,            
        });
    }
    static getModalText(){
        return cy.get("#modalText").invoke('text');
    }

}