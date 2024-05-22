/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoCaracteristicasDTO } from "./dto/CriaProdutoCaracteristicas.dto";

@Controller('/produtos')
export class ProdutoController{
    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoCaracteristicasDTO){
        this.produtoRepository.salvar(dadosDoProduto);
    }

    @Get()
    async listProdutos(){
        return this.produtoRepository.listar();
    }
}