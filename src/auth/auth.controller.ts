import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ValidationError, isArray, validateOrReject } from 'class-validator';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/schemas/user.model';



@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }


  
  @Post('register')
  @ApiCreatedResponse({
    description: 'The user has been successfully created.',
    type: User,
  })
  async addUser(@Body() reqBody: RegisterDto) {
      try {
          const newUser = new RegisterDto
          for (const key in reqBody) {
              newUser[key] = reqBody[key]
          }
          console.log("req", reqBody)
          await validateOrReject(newUser)
          const user = await this.authService.create(newUser)
          return {user}
          
      } catch (error) {
          console.log(error)
          if (isArray(error) && error[0] instanceof ValidationError) {
              console.log('Promise rejected (validation failed). Errors: ', error)
              const newError = {}
              error.map(value => newError[value.property]=value.constraints)
              throw new HttpException(newError, HttpStatus.BAD_REQUEST);
          }
          console.log(error)
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }

  }
}
