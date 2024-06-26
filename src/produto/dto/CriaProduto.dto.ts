/* eslint-disable prettier/prettier */
import { ArrayMinSize, IsArray, IsDate, IsNotEmpty, IsNumber, IsPositive, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { CriaProdutoCaracteristicasDTO } from "./CriaProdutoCaracteristicas.dto";
import { CriaProdutoImagensDTO } from "./CriaProdutoImagens.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO{
    @IsUUID(undefined, { message: 'ID do usuário inválido'})
    usuarioId: string;

    @IsNotEmpty()
    nome: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    valor: number;

    @IsNumber()
    @Min(0)
    quantidadeDisponivel: number;

    @IsNotEmpty()
    @MaxLength(100)
    descricao: string;

    @IsArray()
    @ArrayMinSize(3)
    @ValidateNested()
    @Type(() => CriaProdutoCaracteristicasDTO)
    caracteristicas: CriaProdutoCaracteristicasDTO[];

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested()
    @Type(() => CriaProdutoImagensDTO)
    imagens: CriaProdutoImagensDTO[];

    @IsNotEmpty()
    categoria: string;

    @IsDate()
    @Type(() => Date)
    dataCriacao: Date;

    @IsDate()
    @Type(() => Date)
    dataAtualizacao: Date;
}