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
    user?: string
    date: new Date()
}

export type PostPayload = Omit<Post, 'id'>

export type Movie = {
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}

export type MovieRecommended = {
    id: string
    user: Pick<User, "id" | "name" | "lastname">
    image?: string
    title: string
    detail: string
    comments: Comment[]
    date: Date
}

// export type MoviePayload = {

// }