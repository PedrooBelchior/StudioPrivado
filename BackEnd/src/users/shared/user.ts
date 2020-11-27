import { Document } from 'mongoose';


export class User extends Document {
    usuario: string;
    password: string;
    email: string;
    cpf: string;
    endereco:[
        {
            rua: string,
            numero: string,
            bairro: string,
            complemento: string,
            cep: string,
            cidade: String,
            estado: string,
            pais: string,
        }
    ];
    tipo: string;
    nome: string;
    sobrenome: string;
    status: string;
}
