import { Types } from "mongoose";

export interface UserEntity{
    _id?: Types.ObjectId;
    name: String;
    email: String,
    password: String;
    isAdmin: boolean;
    isBlocked: boolean;
}