import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import * as mongoose from 'mongoose';
import { JwtService } from 'src/utils/jwt.service';
import { JwtDto } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly UserModel: mongoose.Model<User>,
  private readonly jwtService: JwtService
) { }

  async create(user: RegisterDto): Promise<JwtDto> {
    const res = await this.UserModel.create(user)
    const accessToken = this.jwtService.sign({id: res.id })

    return accessToken
  }


  async findOne( id: string) : Promise<AuthService>{
    return await this.UserModel.findById(id)
  }

}
