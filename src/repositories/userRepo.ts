import type { IUserPayload } from "../interfaces/IuserInterface"
import { User } from "../models/User"

export const UserRepo = {
  create: (data: IUserPayload) => User.create(data), // Changed type to IUserPayload
  findByEmail: (email: string) => User.findOne({ email }),
  findById: (id: string) => User.findById(id),
}
