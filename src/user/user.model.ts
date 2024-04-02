import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    userName : {type: String, required:[true, "username is reuire"],trim: true},
    email: {type: String, required:[true, "email is reuire"],trim: true},
    password: {type: String, required:[true, "password is require"] },
    gender: {type:String},
    phoneNumber: {type : String },
    birthday:{type: Date},
    about:{type:String},
    lineId:{type: String},
    facebook:{type:String},
    transectionId:{type: [{}]},
    creditCard:{type: [{}]},
    fevorite:{type: [{}]},
    // owner_id:{type: Array},
})


export interface User {
    id: string
    userName : string,
    email: string,
    password: string,
    gender: string,
    phoneNumber:string,
    birthday:string,
    about:string,
    lineId:string,
    facebook: string,
    transectionId:[{}],
    creditCard:[{}],
    fevorite:[{}],
}

