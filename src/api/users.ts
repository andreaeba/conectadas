import { mapToArray } from '../helpers'
import { User, UserLogin, UserPayload } from '../types'

const add = (user: UserPayload) => {

    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch('https://conectadas-50d68-default-rtdb.firebaseio.com/users.json', options)
}

const getAll = async (): Promise<User[]> => {

    const response = await fetch(
        'https://conectadas-50d68-default-rtdb.firebaseio.com/users.json'
    )
    
    const data = await response.json()

    return mapToArray(data)

}

const get = async (id: string) => {
        
        const response = await fetch(
        `https://conectadas-50d68-default-rtdb.firebaseio.com/users/${id}.json`
        )
        const data = await response.json()

        return data
}

const remove = () => {}

const update = async (id: string, payload: Partial<User>) => {

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    const response = await fetch(`https://conectadas-50d68-default-rtdb.firebaseio.com/users/${id}.json`, options)

    const data = await response.json()

    return data
}

export const usersApi = { add, getAll, get, remove, update}