import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { usersApi } from "../../api/users"
import { AuthContext } from "../../context/auth"
import { FormLogin, User } from "../../types"

const useAuth = () => {

    const { me, setCurrentUser }  = useContext(AuthContext)
    const navigate = useNavigate()

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

        if(logged) {
            const token = await setUserToken(logged.id)
    
            if(token) {
                localStorage.setItem('user-token', token)
                setCurrentUser(logged)
            }
               
        }

    }

    const loginWithToken = async () => {

        const users = await usersApi.getAll()

        const storedToken = localStorage.getItem('user-token')

        const logged = users.find(
            (user) => user.sessionStorage === storedToken)

        // console.log(logged)
        
        if(!me && logged) {
            setCurrentUser(logged)
        }

    }

    const logout = () => {

        //borrar de la base de datos - Remove session token
        localStorage.removeItem("user-token");
        navigate("/login");       

    }


    return { me, login, logout }
}

export { useAuth }