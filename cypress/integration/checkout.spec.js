import CHECKOUT from "../pages/checkout.page"
import LOGIN from "../pages/login.page"
/// <reference types="cypress" />


describe('Testes para Checkout, finalizar compra', () => {

    it('Deve realizar o Checkout', () => {
        LOGIN.acessarSite()
        CHECKOUT.finalizarCompra()
    })   
})