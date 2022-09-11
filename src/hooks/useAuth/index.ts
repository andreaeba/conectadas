import { useEffect } from "react"
import { usersApi } from "../../api/users"
import { FormLogin } from "../../types"

const useAuth = () => {

    useEffect(() => {
        loginWithToken()
    }, [])

    const setUserToken = async (id: string) => {
        const newToken = Math.random().toString(36).substring(2)
        const rsp = await usersApi.update(id, { sessionStorage: newToken })
        return rsp ? newToken : null


    }

    const login = async ({email, password}: FormLogin) => {

        const users = await usersApi.getAll()

        const logged = users.find(
            (user) => user.email === email && user.password === password)

        //min 01:46

        console.log(logged, email, password)

    }

    const loginWithToken = async () => {

        const users = await usersApi.getAll()

        const storedToken = localStorage.getItem('user-token')

        const logged = users.find(
            (user) => user.sessionStorage === storedToken)


        if(logged) {
            const token = await setUserToken(logged.id)
    
            if(token) {
                localStorage.setItem('user-token', token)
            }
               
        }

    }


    return { login }
}

export { useAuth }