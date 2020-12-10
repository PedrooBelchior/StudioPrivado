export interface Produto {
  _id: string;
  nome: string;
  marca: string;
  categoria: string;
  preco: number;
  descricao: string;
  palavraChave: string;
  quantidade: number;
  faq: Faq[];
  imagem: Imagem[];
}

// GET Produtos
export interface ResponseProdutos {
  produtos: Produto[];
}

// GET Produto
export interface ResponseProduto {
  data: Produto;
}

export class Faq {
  pergunta: string;
  resposta: string;
}

export class Imagem {
  linkImagem: string;
}
