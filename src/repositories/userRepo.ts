import { IUser } from "../interfaces/IuserInterface";
import { User } from "../models/User";

export const createUser = (data: IUser) => User.create(data);
export const findUserByEmail = (email: string) => User.findOne({ email });
export const findUserById = (id: string) => User.findById(id);
