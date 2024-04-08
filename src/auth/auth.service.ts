import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.model';
import * as mongoose from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly RegisterModel: mongoose.Model<User> ) { }

  async create(user: RegisterDto): Promise<string> {
      const postUser = new this.RegisterModel(user)
      const result = await postUser.save()

      console.log(result)
      return result.id
  }




  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

}
