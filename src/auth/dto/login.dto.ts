import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, MinLength } from "class-validator"




export class LoginDto {

    @IsEmail()
    @ApiProperty()
    email: string

    @MinLength(6)
    @ApiProperty()
    password: string
}
