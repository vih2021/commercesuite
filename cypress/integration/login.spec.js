import LOGIN from "../pages/login.page"

describe('Testes para login', () => {

    it('Realiza o login', () => {
        LOGIN.acessarSite()
        LOGIN.logar()
    })

    it('Realiza um login inválido', () => {
        LOGIN.acessarSite()
        LOGIN.loginInvalido()
    })

    it('Verifica se os elementos existem na página', () =>{
        LOGIN.acessarSite()
        LOGIN.logar()
        LOGIN.verificarElementos()
    })
})
