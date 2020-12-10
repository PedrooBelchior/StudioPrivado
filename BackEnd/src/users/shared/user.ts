import { Document } from 'mongoose';


export class User extends Document {
    usuario: string;
    password: string;
    email: string;
    cpf: string;
    endereco: [
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
    statusUsuario: string;
    pedido: Pedido[]

}

export class Pedido extends Document {
    pedido:
        [
            {
                numero: string;
                data: string;
                hora: string;
                status: string;
                valorTotalCompra: string;
                enderecoEntrega: {};
                formaDePgmto:string;
                itens: Itens[]
            }
        ]
}

export class Itens extends Document {
    itens:
        [
            {
                nome: string;
                quantidade: string;
                valorUnitario: string;
                valorTotalItem: string;
            }

        ]
}