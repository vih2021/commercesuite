import CARRINHO from '../pages/carrinho.page'

describe('Teste para Cariinho', () =>{
    it('Deve verificar se os elementos existem na página', () =>{
        CARRINHO.acessarSite()
        CARRINHO.verificarElementosPage()
        CARRINHO.acessarSite()
        CARRINHO.verificarElementos()     
    })

    it('Deve adicionar um produto ao carrinho', () =>{
        CARRINHO.acessarSite()
        CARRINHO.adicionarItem()
    })

    it('Deve remover um item do carrinho no modal', () =>{
        CARRINHO.acessarSite()
        CARRINHO.removeItem()
    })

    it('Deve remover um item do carrinho na página', () =>{
        CARRINHO.acessarSite()
        CARRINHO.removeItemPage()
    })

    it('Deve verificar os elementos da página do carrinho', () =>{
        CARRINHO.acessarSite()
        CARRINHO.verificarElementosPage()
    })
})