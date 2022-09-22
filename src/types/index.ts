export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password?: string
    city: string
    country: string
    avatar: string
    birthday: string
    sessionStorage?: string
    friends?: string[]
    state?: string

}

export type UserPayload = Omit<User, 'id' | 'sessionToken' | 'friends'>

export type UserLogin = Omit<User, 'id' | 'name' | 'lastname' |'city' | 'country' | 'state' | 'avatar' | 'state' | 'sessionToken'>

export type FormLogin = {
    email: string
    password: string
}

export type Post = {
    id: string
    title: string
    text: string
    user: string
}

export type PostPayload = Omit<Post, 'id'>