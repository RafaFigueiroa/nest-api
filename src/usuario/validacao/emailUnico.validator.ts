/* eslint-disable prettier/prettier */
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repositoy";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private usuarioRepository: UsuarioRepository){}

    async validate(value: any): Promise<boolean> {
        const usuarioExiste = await this.usuarioRepository.existeComEmail(value);

        return !usuarioExiste;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        })
    }
}