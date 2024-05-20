/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController{
    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async criaProduto(@Body() dadosDoProduto){
        this.produtoRepository.salvar(dadosDoProduto);
    }

    @Get()
    async listProdutos(){
        return this.produtoRepository.listar();
    }
}