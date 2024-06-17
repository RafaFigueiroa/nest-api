/* eslint-disable prettier/prettier */
import { ArrayMinSize, IsArray, IsDate, IsNotEmpty, IsNumber, IsOptional, IsPositive, MaxLength, Min, ValidateNested } from "class-validator";
import { CriaProdutoCaracteristicasDTO } from "./CriaProdutoCaracteristicas.dto";
import { CriaProdutoImagensDTO } from "./CriaProdutoImagens.dto";
import { Type } from "class-transformer";

export class AtualizaProdutoDTO{
    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    @IsOptional()
    valor: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    quantidadeDisponivel: number;

    @IsNotEmpty()
    @MaxLength(100)
    @IsOptional()
    descricao: string;

    @IsArray()
    @ArrayMinSize(3)
    @ValidateNested()
    @Type(() => CriaProdutoCaracteristicasDTO)
    @IsOptional()
    caracteristicas: CriaProdutoCaracteristicasDTO[];

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested()
    @Type(() => CriaProdutoImagensDTO)
    @IsOptional()
    imagens: CriaProdutoImagensDTO[];

    @IsNotEmpty()
    @IsOptional()
    categoria: string;

    @IsDate()
    @IsOptional()
    dataCriacao: Date;

    @IsDate()
    @IsOptional()
    dataAtualizacao: Date;
}