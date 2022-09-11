import { Omit } from "react-bootstrap/esm/helpers"

export type User = {
    id?: string
    name?: string
    lastname?: string
    email: string
    password: string
    city?: string
    country?: string
    avatar?: string
    birthday?: string
    sessionToken?: string
    friends?: string[]
    state?: string

}

export type UserPayload = Omit<User, 'id' | 'state' | 'sessionToken'>

export type UserLogin = Omit<User, 'id' | 'name' | 'lastname' |'city' | 'country' | 'state' | 'avatar' | 'state' | 'sessionToken'>

export type FormLogin = {
    email: string
    password: string
}