import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';




@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async insertUser(user: User) {
        const postUser = new this.userModel(user)
        const result = await postUser.save()

        console.log(result)
        return result.id
    }


    async getUser() {
        const result = await this.userModel.find()

        return result
    }


    async updateUser(id: string,data :User){

        const result = await this.userModel.findByIdAndUpdate(id,data)
        return result
    }
}
