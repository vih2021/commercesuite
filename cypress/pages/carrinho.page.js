import Base from './_base.page'
import { LOGIN } from './componentes/login.elements'
import { CARRINHO } from './componentes/carrinho.elements'

export default class Carrinho extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL)
    }

    static adicionarItem() {
        super.clickOnElement(CARRINHO.BTN_ADD)
        super.clickOnElement(CARRINHO.BTN_BAG)
        super.verifyIfElementExists(CARRINHO.BAG_LIST)
        super.verifyIfElementExists(CARRINHO.TOTAL)
        super.verifyIfElementExists(CARRINHO.FOOTER)
        super.verifyIfElementExists(CARRINHO.FINISH)
        super.verifyIfElementExists(CARRINHO.CLOSE_BAG)
        super.verifyIfElementExists(CARRINHO.SEARCH_BAG)
        cy.wait(4000)
        super.clickOnElement(CARRINHO.CLOSE_BAG)
        cy.wait(4000)
        super.clickOnElement(CARRINHO.MORE)
        cy.wait(2000)
        super.clickOnElement(CARRINHO.CAR_PAGE)
        super.verifyIfElementExists(CARRINHO.PG_BTN_CNT)
        super.verifyIfElementExists(CARRINHO.PG_M_PROD)
        super.verifyIfElementExists(CARRINHO.PG_CEP)
        super.verifyIfElementExists(CARRINHO.PG_DEL_PRD)
        super.verifyIfElementExists(CARRINHO.PG_PROD)
    }

    static verificarElementos() {
        super.clickOnElement(CARRINHO.BTN_ADD)
        super.verifyIfElementExists(CARRINHO.PRODUCT)
        super.verifyIfElementExists(CARRINHO.MORE)
        super.verifyIfElementExists(CARRINHO.LESS)
        super.verifyIfElementExists(CARRINHO.QNT_PROD)
        super.verifyIfElementExists(CARRINHO.BTN_BAG)
    }

    static removeItemPage() {
        super.clickOnElement(CARRINHO.BTN_ADD)
        super.clickOnElement(CARRINHO.LESS)
        super.clickOnElement(CARRINHO.CLOSE_BAG)
        super.clickOnElement(CARRINHO.FRUTAS)
        super.clickOnElement(CARRINHO.SEC_PROD)
        super.clickOnElement(CARRINHO.CAR_PAGE)              
        super.verifyIfElementNotExists(CARRINHO.PG_PROD2)
    }

    static removeItem() {
        super.clickOnElement(CARRINHO.BTN_ADD)
        super.clickOnElement(CARRINHO.BTN_BAG)
        super.clickOnElement(CARRINHO.CLS_BAG)
        super.verifyIfElementNotExists(CARRINHO.BAG_PROD)
        super.clickOnElement(CARRINHO.CLOSE_BAG)
        super.verifyIfElementNotExists(CARRINHO.MORE)//continua aparecendo e não deveria quantidade+
        super.verifyIfElementNotExists(CARRINHO.LESS)//...
    }

    static verificarElementosPage() {
        super.clickOnElement(CARRINHO.BTN_ADD)
        super.clickOnElement(CARRINHO.CAR_PAGE)
        super.verifyIfElementExists(CARRINHO.PG_BTN_CNT)
        super.verifyIfElementExists(CARRINHO.PG_M_PROD)
        super.verifyIfElementExists(CARRINHO.PG_CEP)
        super.verifyIfElementExists(CARRINHO.PG_DEL_PRD)
        super.verifyIfElementExists(CARRINHO.PG_PROD)
    }
}
    