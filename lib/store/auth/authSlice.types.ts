import { Status } from "@/lib/types/types"

export interface IRegisterData {
  username: string
  email: string
  password: string
}

export interface IUserData {
  username: string
  token: string
}

export interface IInitialState {
  user: IUserData
  status: Status
}
