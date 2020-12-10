import {Document} from 'mongoose';


export class Task extends Document{
    nome: string;
    marca: string;
    categoria:string;
    preco: number;
    descricao: string;
    palavraChave: string;
    quantidade: number;
    faq:
        [
            {
                pergunta: string,
                resposta: string,
            }
        ];
    imagem: 
    [
        {
            linkImagem: string
        }
    ];
}
