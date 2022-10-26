import { FC, useState } from "react"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { Layout } from "../../components/common/Layout"
import { LoginForm } from "../../components/forms/LoginForm"
import { useAuth } from "../../hooks/useAuth"
import { FormLogin } from "../../types"

const Login = () => {

    const { login } = useAuth()

    const handleSubmit = (formData: FormLogin ) => {

        login(formData)
        
    }


    return(
        <>
        <Outlet />
        <Layout>
        <Container className="main d-flex justify-content-around ">
                
                <LoginForm onSubmit={handleSubmit}/>           
                
            </Container>
        </Layout>
        </>
    )

}

export { Login }