import { mapToArray } from '../helpers'
import { Post, PostPayload } from '../types'

const add = (post: PostPayload) => {

    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }

    fetch('https://conectadas-50d68-default-rtdb.firebaseio.com/posts.json', options)
}

const getAll = async (): Promise<Post[]> => {

    const response = await fetch(
        'https://conectadas-50d68-default-rtdb.firebaseio.com/posts.json'
    )
    
    const data = await response.json()

    return mapToArray(data)

}

const get = async (id: string) => {
        
        const response = await fetch(
        `https://conectadas-50d68-default-rtdb.firebaseio.com/posts/${id}.json`
        )
        const data = await response.json()

        return data
}

const remove = () => {}

const update = async (id: string, payload: Partial<Post>) => {

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    const response = await fetch(`https://conectadas-50d68-default-rtdb.firebaseio.com/posts/${id}.json`, options)

    const data = await response.json()

    return data
}

export const postsApi = { add, getAll, get, remove, update}