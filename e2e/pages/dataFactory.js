import faker from 'faker';

function criarUserValido() {
    return {
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        senha: faker.internet.password(),
        confirmacaoDeSenha: faker.internet.password()
    };
}
module.exports = {
    criarUserValido
};