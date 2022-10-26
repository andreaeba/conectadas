import { FC, useState, useEffect } from "react"
import { Button, Card, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { usersApi } from "../../../api/users"
import { useAuth } from "../../../hooks/useAuth"
import { User, LoginPayload, SignUpPayload, FormLogin } from "../../../types"

type Props = {
    className?: string
    onSubmit: (formData: FormLogin) => void
}

const initialData: FormLogin = {
    email: "",
    password: ""
}

const LoginForm: FC<Props> = ({ onSubmit }) => {

    const [formData, setFormData] = useState(initialData)

    // const handleSubmit = (e: {preventDefault: () => void}) => {
    //     e.preventDefault()

    //     const user: LoginPayload = { email, password }
    //     console.log(user)

    // }

    return(
        <>
       
         <Card className="my-4 form-login d-flex flex-column justify-content-center">
            <Card.Body className="d-flex flex-column justify-content-center">

            <div className="d-flex flex-column justify-content-center text-center p-3">
                    <h2>Login</h2>
                    <span>Don't you have an account? Sign Up</span>
            </div>

            <Form className="d-flex flex-column" onSubmit={(e) => {
                e.preventDefault()
                onSubmit(formData)}}
                >

                <FormGroup className="">
                        <FormLabel className='my-2'>
                            Email
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='email' 
                            value={formData.email}
                            required
                            onChange={e => {
                                setFormData((prevState) =>({
                                    ...prevState,
                                    email: e.target.value
                                }))
                            }}>                
                        </FormControl>
                </FormGroup>

                <FormGroup className="">
                        <FormLabel className='my-2'>
                            Password
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='password' 
                            value={formData.password}
                            required
                            onChange={e => {
                                setFormData((prevState) =>({
                                    ...prevState,
                                    password: e.target.value
                                }))
                            }}>                
                        </FormControl>
                </FormGroup>

                <span>Forgot your password?</span>


                <Button variant="primary" type="submit" className="btn-primary">
                    Login
                </Button>
            </Form>
            </Card.Body>
        </Card>
        </>
    )

}

export { LoginForm }