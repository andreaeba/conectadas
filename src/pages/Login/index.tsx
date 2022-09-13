import { FC, useState } from "react"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { Layout } from "../../components/common/Layout"
import { LoginForm } from "../../components/forms/LoginForm"
import { withAuth } from "../../hoc/withAuth"
import { useAuth } from "../../hooks/useAuth"
import { FormLogin } from "../../types"

const LoginPage = () => {

    const { login } = useAuth()

    const handleSubmit = (formData: FormLogin ) => {

        login(formData)
        
    }


    return(
        <>
        <Layout>
        <Container className="main d-flex justify-content-around ">
                
                <LoginForm onSubmit={handleSubmit}/>           
                
            </Container>
        </Layout>
        </>
    )

}

export const Login = withAuth(LoginPage)