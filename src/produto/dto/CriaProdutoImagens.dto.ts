/* eslint-disable prettier/prettier */
import { IsString, IsUrl } from "class-validator";

export class CriaProdutoImagensDTO{
    @IsUrl()
    url: string;

    @IsString()
    descricao: string;
}