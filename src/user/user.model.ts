import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    userName : {type: String, required:[true, "username is reuire"]},
    email: {type: String, required:[true, "email is reuire"]},
    password: {type: String, required:[true, "password is require"]},
    age: {type: Number}

})


export interface User {
    id: string
    userName: string
    email: string
    password: string
    age: number
}

