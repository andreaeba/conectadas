import { FC, ReactNode, useState } from "react"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { Layout } from "../../components/common/Layout"
import { SignUpForm } from "../../components/forms/SignUpForm"
import { withAuth } from "../../hoc"
import { User } from "../../types"

type Props = {
    className?: string
    user?: User
}

const SignUpPage: FC<Props> = (className, user: User) => {

    return(
        <>
        <Outlet />
        <Layout>
            <Container className="main d-flex justify-content-around ">
                <div className="d-flex flex-column justify-content-center">
                    <h2>Sign Up</h2>
                    <span>It's fast and easy</span>
                </div>
                

                <SignUpForm />           
                
            </Container>
        </Layout>
        </>
    )


}

export const SignUp = withAuth(SignUpPage)