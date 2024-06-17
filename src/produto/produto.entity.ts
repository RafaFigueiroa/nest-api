/* eslint-disable prettier/prettier */
class CaracteristicaProduto {
    nome: string;
    descricao: string;
}

class ImagemProduto {
    url: string;
    descricao: string;
}

export class ProdutoEntity{
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: CaracteristicaProduto[];
    imagens: ImagemProduto[];
    categoria: string;
    dataCriacao: Date;
    dataAtualizacao: Date;
}