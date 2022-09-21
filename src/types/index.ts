export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    city: string
    country: string
    avatar: string
    birthday: string
    sessionToken?: string
    friends?: string[]
    state: string


}

export type UserPayload = Omit<User, 'id' | 'state' | 'sessionToken'>