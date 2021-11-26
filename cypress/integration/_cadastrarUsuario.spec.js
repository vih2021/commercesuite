import CADASTRO from "../pages/cadastrarUsuario.page"

describe('Testes para cadastro de Usuario', () => {

    it('Verifica se os elementos existem', () => {
        CADASTRO.acessarSite()
        CADASTRO.verificarElementos()
    })

    it.only('Realiza o cadastro de um novo usuário', () => {
        CADASTRO.acessarSite()
        CADASTRO.cadastrarUsuario()
    })

    it.only('Tenta realizar o cadastro de um novo usuário Inválido', () => {
        CADASTRO.acessarSite()
        CADASTRO.cadastrarUsuarioInvalido()
    })

})
