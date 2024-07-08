import { Document } from "mongoose";
export interface IUser extends Document{
    readonly name: string;
    readonly age: number;
}