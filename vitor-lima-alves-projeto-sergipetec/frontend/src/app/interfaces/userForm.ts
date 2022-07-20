import { Enderecos } from 'src/app/interfaces/address-class';

export class UserForm {
    "id": number = 0
    "nome": string = ''
    "email": string = ''
    "cpf": number = 0
    "telefone": number = 0
    "celular": number = 0
    "enderecos": Enderecos[]
}