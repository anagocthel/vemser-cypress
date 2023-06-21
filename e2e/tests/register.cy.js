const { BasePage } = require("../pages/base-page");
const { RegisterPage } = require("../pages/register-page");
import {criarUserValido} from '../pages/dataFactory'

describe('RegisterTest', () => {
    
    beforeEach(() => {
        BasePage.acessarPagina();
     });

    it('Clickar em registrar', ()=>{
        const user = criarUserValido();
        RegisterPage.registrarUsuarioValido(user.email, user.nome, user.senha, user.senha);
        RegisterPage.getModalText().should('include', 'criada com sucesso');
    })
})
