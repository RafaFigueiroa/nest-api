/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CriaProdutoCaracteristicasDTO{
    @IsNotEmpty()
    nome: string;
    
    @IsString()
    descricao: string;
}