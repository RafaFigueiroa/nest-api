/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repositoy";
import { EmailUnicoValidator } from "./validacao/emailUnico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUnicoValidator]
})
export class UsuarioModule{}