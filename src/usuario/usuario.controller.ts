/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repositoy';

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario);
    }

    @Get()
    async listUsuarios(){
        return this.usuarioRepository.listar();
    }
}
