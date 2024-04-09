import { ApiProperty } from "@nestjs/swagger";
import { GENDER } from "src/schemas/user.schema";

export class AuthDto {

    @ApiProperty()
    userName: string

    @ApiProperty()
    email: string

    @ApiProperty()
    gender: GENDER

    @ApiProperty()
    phoneNumber: string

    @ApiProperty()
    birthday: Date

    @ApiProperty()
    about: string

    @ApiProperty()
    facebook: string

    @ApiProperty()
    transection: [object]

    @ApiProperty()
    creditCard: [object]
}

