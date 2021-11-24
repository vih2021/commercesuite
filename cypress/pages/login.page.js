import Base from './_base.page'
import { LOGIN } from './componentes/login.elements'
import Factory from '../dynamics/factory'
import INF from '../../informacaoCadastro.json'

export default class login extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL)
    }

    static logar() {
        super.clickOnElement(LOGIN.BTN_ENTRAR)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.typeValue(LOGIN.INP_EMAIL, INF.email)
        super.clickOnElement(LOGIN.BTN_CONTINUE)
        super.typeValue(LOGIN.INP_PASSWORD, INF.senha)
        super.verifyIfElementExists(LOGIN.BTN_PASS_REC)
        super.clickOnElement(LOGIN.BTN_CONTINUE2)
        super.validarUrl('https://701523.commercesuite.com.br/my-account')
    }      

    static verificarElementos() {
        super.verifyIfElementExists(LOGIN.MENU_PEDIDOS)
        super.verifyIfElementExists(LOGIN.MENU_DADOS)
        super.verifyIfElementExists(LOGIN.MENU_ENDERECO)
        super.verifyIfElementExists(LOGIN.MENU_AVAL)
        super.verifyIfElementExists(LOGIN.MENU_LIST_ESP)
        super.verifyIfElementExists(LOGIN.MENU_DEVOL)
        super.verifyIfElementExists(LOGIN.MENU_CHANGE_P)
        super.verifyIfElementExists(LOGIN.MENU_EXIT)
        super.verifyIfElementExists(LOGIN.MESSAGE_USER)
        super.verifyIfElementExists(LOGIN.MESSAGE_OPT)
        super.clickOnElement(LOGIN.MESSAGE_OPT)
        super.verifyIfElementExists(LOGIN.MY_ACCOUNT)
        super.verifyIfElementExists(LOGIN.MY_ORDERS)
        super.verifyIfElementExists(LOGIN.CHANGE_PASS)
        super.verifyIfElementExists(LOGIN.EXIT)
    }

    static loginInvalido() {
        super.clickOnElement(LOGIN.BTN_ENTRAR)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.typeValue(LOGIN.INP_EMAIL, Factory.gerarEmail())
        super.clickOnElement(LOGIN.BTN_CONTINUE)
        super.typeValue(LOGIN.INP_PASSWORD, Factory.gerarSenha())
        super.verifyIfElementExists(LOGIN.BTN_PASS_REC)
        super.clickOnElement(LOGIN.BTN_CONTINUE2)
        super.verifyIfElementIsVisible(LOGIN.ERROR_MSG)
    }

    static logar2() {
        super.clickOnElement(LOGIN.BTN_ENTRAR)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.typeValue(LOGIN.INP_EMAIL, DEF.email)
        super.clickOnElement(LOGIN.BTN_CONTINUE)
        super.typeValue(LOGIN.INP_PASSWORD, DEF.senha)
        super.verifyIfElementExists(LOGIN.BTN_PASS_REC)
        super.clickOnElement(LOGIN.BTN_CONTINUE2)
        super.validarUrl('https://701523.commercesuite.com.br/my-account')
    }
}
