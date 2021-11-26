import Base from './_base.page'

import Login from "../pages/login.page"
import { CADASTRO } from './componentes/cadastrarEndereco.elements'
import { fakerBr } from 'js-brasil'
import Factory from '../dynamics/factory'
import INF from '../../informacaoCadastroEndereco.json'

const endereco = fakerBr.endereco()
const rua      = "Santa Tereza"
const cep      = "60010120"

const ADD  = "rua não existente"
const CEP  = '00000000'
const RUA  = "qualquer teste"
const NUM  = Factory.gerarNum()
const COMP = "teste"
const BAIR = "teste"

export default class CadastrarUsuario extends Base {
    static acessarSite() {
        Login.acessarSite()
        Login.logar()
    }

    static acessarSite2() {
        Login.acessarSite()
        Login.logar2()
    }

    static cadastrarEndereco() {

        cy.writeFile('informacaoCadastroEndereco.json', {endereço:endereco, rua:rua, cep:cep})
        cy.visit(CADASTRO.URL)
        super.clickOnElement(CADASTRO.BTN_EDIT)
        super.typeValue(CADASTRO.INP_ADRESS, INF.endereço.logradouro)
        super.typeValue(CADASTRO.INP_CEP, INF.cep)
        super.typeValue(CADASTRO.INP_RUA, INF.rua) 
        super.typeValue(CADASTRO.INP_RUA_NUM, INF.endereço.numero)
        super.typeValue(CADASTRO.INP_COMPLEMENT, INF.endereço.complemento)
        super.typeValue(CADASTRO.INP_BAIRRO, INF.endereço.bairro)
        cy.wait(3000)
        super.verifyIfElementIsVisible(CADASTRO.MSG_SUCESS)
        super.clickOnElement(CADASTRO.SAVE_ALTERACO)      
    }

    static cadastrarEnderecoInvalido() {

        cy.visit(CADASTRO.URL)
        super.clickOnElement(CADASTRO.BTN_EDIT)
        super.typeValue(CADASTRO.INP_ADRESS, ADD)
        super.clickOnElement(CADASTRO.INP_CEP, CEP)
        super.typeValue(CADASTRO.INP_RUA, RUA) 
        super.typeValue(CADASTRO.INP_RUA_NUM, NUM)
        super.typeValue(CADASTRO.INP_COMPLEMENT, COMP)
        super.typeValue(CADASTRO.INP_BAIRRO, BAIR)
        super.clickOnElement(CADASTRO.SAVE_ALTERACO) 
        cy.wait(3000) 
        super.verifyIfElementIsVisible(CADASTRO.MSG_ERRO)    
    }

    static cadastrarEndereco() {

        cy.writeFile('informacaoCadastroEndereco.json', {endereço:endereco, rua:rua, cep:cep})
        cy.visit(CADASTRO.URL)
        super.clickOnElement(CADASTRO.BTN_EDIT)
        super.typeValue(CADASTRO.INP_ADRESS, INF.endereço.logradouro)
        super.typeValue(CADASTRO.INP_CEP, INF.cep)
        super.typeValue(CADASTRO.INP_RUA, INF.rua) 
        super.typeValue(CADASTRO.INP_RUA_NUM, INF.endereço.numero)
        super.typeValue(CADASTRO.INP_COMPLEMENT, INF.endereço.complemento)
        super.typeValue(CADASTRO.INP_BAIRRO, INF.endereço.bairro)
        super.clickOnElement(CADASTRO.SAVE_ALTERACO)      
    }
}