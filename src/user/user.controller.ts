import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service'
import { ValidationError, isArray, validateOrReject } from 'class-validator';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.schema';


@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findall() : Promise<User[]> {
        const result = await this.userService.getUser()
        return result
    }

    @Get(':userId')
    findOne(@Param() param: any): string {
        console.log(+param.userId)
        return "findone"
    }

    @Patch(':userId')
    async upDate(@Body() reqBody: UpdateUserDto, @Param('userId') userId: string) {
        console.log(userId)
        console.log(reqBody)
        const result = this.userService.updateUser(userId, reqBody)
        return result
    }
}
