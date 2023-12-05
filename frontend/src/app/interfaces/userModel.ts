import { Enderecos } from './address';

export interface UserModel {
    id: number,
    nome: string,
    email: string,
    cpf: number,
    telefone: number,
    celular: number,
    enderecos: Enderecos[]
}