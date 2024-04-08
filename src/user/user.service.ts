import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.model';
import * as mongoose from 'mongoose';



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: mongoose.Model<User> ) { }


    async getUser() {
        const result = await this.userModel.find()
        return result
    }


    async updateUser(id: string,data :any){
        const result = await this.userModel.findByIdAndUpdate(id,data)
        return result
    }
}
