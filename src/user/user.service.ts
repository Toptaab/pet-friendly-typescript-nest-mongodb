import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import * as mongoose from 'mongoose';



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: mongoose.Model<User> ) { }


    async getUser() : Promise<User[]> {
        const result = await this.userModel.find()
        return result
    }


    async updateUser(id: string,data :any){
        const result = await this.userModel.findByIdAndUpdate(id,data)
        return result
    }
}
