export interface User {
    _id: string;
    usuario: string;
    password: string;
    email: string;
    cpf: any,
    endereco: Endereco[];
    tipo: string;
    nome: string;
    sobrenome: string;
    statusUsuario: string;
    pedido: Pedido[];
}

// GET User
export interface ResponseUsers {
    users: User[];
}

// GET User
export interface ResponseUser {
    data: User;
}
export class Endereco {
    rua: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: string;
    cidade: string;
    estado: string;
    pais: string;
}
// GET User
export interface ResponsePedidos {
    pedidos: Pedido[];
}

export class Pedido {
    numero: string;
    data: string;
    hora: string;
    status: string;
    valorTotalCompra: string;
    enderecoEntrega: {};
    formaDePgmto: string;
    itens: Itens[];
}

export class Itens {
    nome: string;
    quantidade: string;
    valorUnitario: string;
    valorTotalItem: string;
}
