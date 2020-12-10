import * as mongoose from 'mongoose';
import { string } from 'yargs';

export const TaskSchema = new mongoose.Schema({
    nome: String,
    marca: String,
    categoria: String,
    preco: Number,
    descricao: String,
    palavraChave: String,
    quantidade: Number,
    faq:
        [
            {
                pergunta: String,
                resposta: String,
            }
        ],
    imagem:
        [
            {
                linkImagem: String,
            }
        ],
})