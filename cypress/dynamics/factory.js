import faker from 'faker'

export default class Factory{
    static gerarNome(){
        return `${faker.name.firstName()} ${faker.name.lastName()}`       
    }

    static gerarSenha(){
        return `${faker.internet.password()}`   
    }

    static gerarEmail(){
        return `${faker.internet.email()}`   
    }

    static gerarData(){
        return `${0}${faker.datatype.number(8)+1}${0}${faker.datatype.number(8)+1}${200}${faker.datatype.number(2)+1}`
    }

    static gerarCpf(){
        return `${faker.datatype.number()}${faker.datatype.number()}${0}`
    }

    static gerarCel(){
        return `${faker.datatype.number()}${faker.datatype.number()}${0}`
    }

    static gerarCep(){
        return `${faker.datatype.number()}${faker.datatype.number()}`
    }

    static gerarBairro(){
        return `${'santa augusta'}`
    }

    static gerarNum(){
        return `${faker.datatype.number(10)}${0}`
    }
}