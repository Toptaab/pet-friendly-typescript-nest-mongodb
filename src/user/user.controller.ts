import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findall() {
        const result = await this.userService.getUser()
        return result
    }

    @Get(':userId')
    findOne(@Param() param: any): string {
        console.log(+param.userId)
        return "findone"
    }

    @Post()
    async addUser(@Body() reqBody: User) {
        try {
            console.log("req", reqBody)
            const result = await this.userService.insertUser(reqBody)
            return result
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }

    }

    @Patch(':userId')
    async upDate(@Body() reqBody: User, @Param('userId') userId: string) {
        console.log( userId)
        const result = this.userService.updateUser(userId, reqBody)
        return result
    }
}
