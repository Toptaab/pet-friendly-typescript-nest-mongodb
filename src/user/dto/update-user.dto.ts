import { ApiProperty } from "@nestjs/swagger";
import { Contains, IsDate, IsEmail, IsFQDN, MinLength } from "class-validator";

export class UpdateUserDto {

    @ApiProperty()
    userName : string;

    @IsEmail()
    @ApiProperty()
    email: string;


    @MinLength(6)
    @ApiProperty()
    password: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    phoneNumber:string;

    @IsDate()
    @ApiProperty()
    birthday:string;

    @ApiProperty()
    about:string;

    @ApiProperty()
    lineId:string;

    @IsFQDN()
    @Contains('facebook')
    @ApiProperty()
    facebook: string;

    @ApiProperty()
    transection:[{}];

    @ApiProperty()
    creditCard:[{}];
}