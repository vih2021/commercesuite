import Base from './_base.page'
import { CADASTRAR } from './componentes/cadastrarUsuario.elements'
import { LOGIN } from './componentes/login.elements'
import Factory from '../dynamics/factory'
import { fakerBr } from 'js-brasil'

const nome     = Factory.gerarNome()
const data     = fakerBr.data()
const cpf      = fakerBr.cpf()
const cel      = fakerBr.celular()
const email    = Factory.gerarEmail()
const email2   = email
const senha    = fakerBr.senha()
const senha2   = senha

const nome1     = Factory.gerarNome()
const data1     = Factory.gerarData()
const cpf1      = Factory.gerarCpf()
const cel1      = Factory.gerarCel()
const email1    = Factory.gerarEmail()
const email3   = email1
const senha1    = Factory.gerarSenha()
const senha3   = senha1

export default class CadastrarUsuario extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL)
    }

    static verificarElementos() {
        super.verifyIfElementExists(CADASTRAR.BTN_CADASTRO)
        super.clickOnElement(CADASTRAR.BTN_CADASTRO)
        super.verifyIfElementExists(CADASTRAR.INPUT_NAME)
        super.verifyIfElementExists(CADASTRAR.INPUT_NASCIMENTO)
        super.verifyIfElementExists(CADASTRAR.INPUT_CPF)
        super.verifyIfElementExists(CADASTRAR.INPUT_TELFIX)
        super.verifyIfElementExists(CADASTRAR.INPUT_CEL)
        super.verifyIfElementExists(CADASTRAR.INPUT_EMAIL)
        super.verifyIfElementExists(CADASTRAR.EMAIL_AGAIN)
        super.verifyIfElementExists(CADASTRAR.INPUT_SENHA)
        super.verifyIfElementExists(CADASTRAR.SENHA_AGAIN)
        super.validarUrl(CADASTRAR.URL)
    }

    static cadastrarUsuario() {
        super.clickOnElement(CADASTRAR.BTN_CADASTRO)
        super.typeValue(CADASTRAR.INPUT_NAME, nome)
        super.typeValue(CADASTRAR.INPUT_NASCIMENTO, data)
        super.typeValue(CADASTRAR.INPUT_CPF, cpf)
        super.typeValue(CADASTRAR.INPUT_CEL, cel)
        super.typeValue(CADASTRAR.INPUT_EMAIL, email)
        super.typeValue(CADASTRAR.EMAIL_AGAIN, email2)
        super.typeValue(CADASTRAR.INPUT_SENHA, senha)
        super.typeValue(CADASTRAR.SENHA_AGAIN, senha2)
        super.clickOnElement(CADASTRAR.BTN_CADASTRAR)
        cy.writeFile('informacaoCadastro.json', {name:nome, email:email, senha:senha, nascimento:data, cpf:cpf, celular:cel})
        super.verifyIfElementExists('#main > div > p')
    }

    static cadastrarUsuarioInvalido() {
        super.clickOnElement(CADASTRAR.BTN_CADASTRO)
        super.typeValue(CADASTRAR.INPUT_NAME, nome1)
        super.typeValue(CADASTRAR.INPUT_NASCIMENTO, data1)
        super.typeValue(CADASTRAR.INPUT_CPF, cpf1)
        super.typeValue(CADASTRAR.INPUT_CEL, cel1)
        super.typeValue(CADASTRAR.INPUT_EMAIL, email1)
        super.typeValue(CADASTRAR.EMAIL_AGAIN, email3)
        super.typeValue(CADASTRAR.INPUT_SENHA, senha1)
        super.typeValue(CADASTRAR.SENHA_AGAIN, senha3)
        super.clickOnElement(CADASTRAR.BTN_CADASTRAR)
        super.verifyIfElementIsVisible(CADASTRAR.ALERTA)
    }
}