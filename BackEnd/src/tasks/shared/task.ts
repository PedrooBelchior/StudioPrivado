import {Document} from 'mongoose';


export class Task extends Document{
    nome: string;
    marca: string;
    categoria:string;
        // [
        //     {
        //         corda:
        //         {
        //             guitarra, baixo, ukulele
        //         },
        //         percussao:
        //         {
        //             bateria, cajon
        //         }
        //     },

        // ];
    preco: string;
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
