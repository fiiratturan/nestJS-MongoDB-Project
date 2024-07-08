import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsNumber,MaxLength,IsString, isNumber } from "class-validator";
export class CreateUserDto
{
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    readonly age : number;
}