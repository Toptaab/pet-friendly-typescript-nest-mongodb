// import * as mongoose from 'mongoose'
// import { Contains, IsDate, IsEmail, IsFQDN, IsString, Min, MinLength } from 'class-validator'
import { ApiProperty, PickType } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


// const Schema = mongoose.Schema;

export enum GENDER {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}

@Schema()
export class User {

    @Prop({ required: true, })
    userName: string

    @Prop({ required: true, })
    email: string

    @Prop({ required: true, select: false})
    password: string

    @Prop()
    gender: GENDER

    @Prop()
    phoneNumber: string

    @Prop()
    birthday: Date

    @Prop()
    about: string

    @Prop({select: false})
    lineIdToken: string

    @Prop()
    facebook: string

    @Prop()
    transection: [object]

    @Prop()
    creditCard: [object]
}

export const UserSchema = SchemaFactory.createForClass(User)


// export const UserSchema = new Schema({
//     userName: { type: String, required: [true, "username is reuire"], trim: true },
//     email: { type: String, required: [true, "email is reuire"], trim: true },
//     password: { type: String, required: [true, "password is require"] },
//     gender: { type: String },
//     phoneNumber: { type: String, trim: true },
//     birthday: { type: Date },
//     about: { type: String },
//     lineId: { type: String },
//     facebook: { type: String },
//     transection: { type: [{}] },
//     creditCard: { type: [{}] },
// })

// export const UserModel = mongoose.model('User', UserSchema)


