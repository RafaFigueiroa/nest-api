/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoEntity } from "./produto.entity";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { v4 as uuid } from 'uuid';
import { ListaProdutoDTO } from "./dto/ListaProduto.dto";

@Controller('/produtos')
export class ProdutoController{
    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO){
        const produto = new ProdutoEntity();

        produto.nome = dadosDoProduto.nome;
        produto.valor = dadosDoProduto.valor;
        produto.quantidadeDisponivel = dadosDoProduto.quantidadeDisponivel;
        produto.descricao = dadosDoProduto.descricao;
        produto.caracteristicas = dadosDoProduto.caracteristicas;
        produto.imagens = dadosDoProduto.imagens;
        produto.categoria = dadosDoProduto.categoria;
        produto.dataCriacao = dadosDoProduto.dataCriacao;
        produto.dataAtualizacao = dadosDoProduto.dataAtualizacao;
        produto.usuarioId = dadosDoProduto.usuarioId;
        produto.id = uuid();

        this.produtoRepository.salvar(produto);
    }

    @Get()
    async listProdutos(){
        const produtosSalvos = await this.produtoRepository.listar();
        const produtosLista = produtosSalvos.map(
            produto => new ListaProdutoDTO(
                produto.id,
                produto.nome,
                produto.valor,
                produto.descricao,
                produto.categoria,
            )
        );

        return produtosLista;
    }

    @Put('/:id')
    async atualizaProduto(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO){
        const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados);

        return {
            produto: produtoAtualizado,
            messagem: 'Produto atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeProduto(@Param('id') id: string){
        const produtoRemovido = await this.produtoRepository.remove(id);

        return{
            produto: produtoRemovido,
            mensagem: "Produto removido com sucesso"
        }
    }
}