import { UserPayload } from '../types'

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

export const usersApi = { add }