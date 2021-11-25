import Base from './_base.page'
import { CHECK } from './componentes/checkout.elements'
import { CARRINHO } from './componentes/carrinho.elements'
import { LOGIN } from './componentes/login.elements'
import ENV from '../fixtures/CADASTRO_FIXO.json'

            // cy.intercept(CHECK.URL_WAIT).as('url')
            // cy.visit(LOGIN.URL)
            // super.clickOnElement(CARRINHO.BTN_ADD)
            // cy.wait('@url')
            
            // cy.wait(['@getUsers', '@getActivities', '@getComments']).then(
            //   (interceptions) => {
             

export default class checkout extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL)
    }

    static finalizarCompra() {
        cy.readFile('cypress/fixtures/CADASTRO_FIXO.json').then(user =>{
                
            super.clickOnElement(CARRINHO.BTN_ADD)
            super.clickOnElement(CARRINHO.BTN_BAG)
            cy.wait(4000)
            super.clickOnElement(CARRINHO.BTN_FC)
            super.clickOnElement(CHECK.CONTINUE)
            cy.log(5000)
            super.typeValue(CHECK.INP_EMAIL, ENV.email)
            super.clickOnElement(CHECK.CONTINUE2)
            cy.wait(4000)
            cy.get('.ch-modal-content').should('not.be.visible')

            cy.get(CHECK.PERGUNTA).then(security =>{
                super.getElementText(security)

                var btn

                if (security.find("p:contains('Quais os primeiros digitos do seu CPF?')").length > 0) {
                    cy.log(btn)   
                    btn = user.cpf.substring(0, 6)
                    cy.log(btn)

                }
                else if (security.find("p:contains('Qual o seu sobrenome?')").length > 0) {
                    cy.log(btn)
                    btn = user.name.split(' ')[1]
                    cy.log(btn)
                
                }
                else if (security.find("p:contains('Quais os últimos digitos do seu CPF?')").length > 0){
                    cy.log(btn)
                    btn = user.cpf.slice(-6)
                    cy.log(btn)
                
                }
                else if (security.find("p:contains('Qual seu endereço de entrega?')").length > 0){
                    cy.log(btn)
                    btn = user.endereco.split(' ')[2]
                    cy.log(btn)

                }

                cy.wait(20000)
                super.getElement(CHECK.ESCOLHA).contains(btn).click()
                super.validarUrl('https://701523.commercesuite.com.br/checkout?session_id=lif7ib90rfhgnra37oj1vnnkt1&store_id=701523#principal')
            })            
        })
     }
 }
   

  