/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repositoy';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO){
        const usuario = new UsuarioEntity();

        usuario.email = dadosDoUsuario.email;
        usuario.senha = dadosDoUsuario.senha;
        usuario.nome = dadosDoUsuario.nome;
        usuario.id = uuid();

        this.usuarioRepository.salvar(usuario);

        return { 
            usuario: new ListaUsuarioDTO(usuario.id, usuario.nome),
            messagem: 'usuário criado com sucesso'
        };
    }

    @Get()
    async listUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );

        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            messagem: 'usuário atualizado com sucesso'
        }
    }
}
