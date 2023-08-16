import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import  {IsString,  MinLength, IsOptional} from 'class-validator'

//PartialType hace que la clase tenga todos los atributos de CreateBrandDto pero configurados como opcionales
//Además podemos añadir nuevos atributos
//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto{
    @IsString()
    @MinLength(1)
   // @IsOptional()
    name:string;
}
