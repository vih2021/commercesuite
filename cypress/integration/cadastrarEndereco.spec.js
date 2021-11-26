import CADASTRO from "../pages/cadastrarEndereco.page"

describe('Testes para cadastro de Endereço', () => {

    it('Deve tentar cadastrar um endereço inválido', () =>{
        CADASTRO.acessarSite()
        CADASTRO.cadastrarEnderecoInvalido()
    })

    it('Realiza o cadastro de um novo endereço', () => {
        CADASTRO.acessarSite()
        CADASTRO.cadastrarEndereco()
    })
})