/* eslint-disable prettier/prettier */
export class ListaProdutoDTO {
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly valor: number,
        readonly descricao: string,
        readonly categoria: string,
    ) {}
}