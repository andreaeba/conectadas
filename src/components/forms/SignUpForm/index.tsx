import { FC, useState, useEffect } from "react"
import { Button, Card, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { usersApi } from "../../../api/users"
import { User, UserPayload } from "../../../types"

type Props = {
    className?: string
    
}

const SignUpForm: FC<Props> = (className) => {

    const [ name, setName ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ city, setCity ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ avatar, setAvatar ] = useState('')
    const [ birthday, setBirthday ] = useState('')
    const [ state, setState ] = useState('user')
    const [ sessionStorage, setSessionStorage ] = useState('')


    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const user: User = {name, lastname, email, password, city, country, avatar, birthday, state, sessionStorage} // Hay que agregar birthday pero me tira error => Type 'string' is not assignable to type 'Date'
        console.log(user)


        usersApi.add(user)
    }

    return(
        <>
        {/* <div className="signup-form"> */}
            
        <Card className="my-4">
            <Card.Body>
            <Form className="d-flex flex-column" onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                    <FormGroup className="form-group">
                        <FormLabel>
                            Name
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='text' 
                            value={name}
                            required
                            onChange={(e) => {setName(e.target.value)}}>                
                        </FormControl>
                    </FormGroup>

                    <FormGroup className="form-group ms-3">
                        <FormLabel>
                            Lastname
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='text' 
                            value={lastname}
                            required
                            onChange={(e) => {setLastname(e.target.value)}}>                
                        </FormControl>
                    </FormGroup>
                </div>

                <FormGroup className="">
                        <FormLabel className='my-2'>
                            Email
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='email' 
                            value={email}
                            required
                            onChange={(e) => {setEmail(e.target.value)}}>                
                        </FormControl>
                </FormGroup>

                <FormGroup className="">
                        <FormLabel className='my-2'>
                            Password
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='password' 
                            value={password}
                            required
                            onChange={(e) => {setPassword(e.target.value)}}>                
                        </FormControl>
                </FormGroup>

                <div className="d-flex justify-content-between">
                    <FormGroup className="form-group">
                        <FormLabel className='my-2'>
                            Country
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='text' 
                            value={country}
                            required
                            onChange={(e) => {setCountry(e.target.value)}}>                
                        </FormControl>
                    </FormGroup>

                    <FormGroup className="form-group ms-3">
                        <FormLabel className='my-2'>
                            City
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='text' 
                            value={city}
                            required
                            onChange={(e) => {setCity(e.target.value)}}>                
                        </FormControl>
                    </FormGroup>
                </div>

                <FormGroup className="">
                        <FormLabel className='my-2'>
                            Birthday
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='date' 
                            value={birthday}
                            required
                            onChange={(e) => {setBirthday(e.target.value)}}>                
                        </FormControl>
                </FormGroup>

                <FormGroup className="">
                        <FormLabel className='my-2'>
                            Avatar
                        </FormLabel>
                        <FormControl 
                            className='' 
                            type='image'
                            value={avatar}
                            required
                            onChange={(e) => {setAvatar(e.target.value)}}>                
                        </FormControl>
                </FormGroup>

                <Button variant="primary" type="submit" className="btn-primary">
                    Register
                </Button>
            </Form>
            </Card.Body>
        </Card>
        {/* </div> */}
        </>
    )
}

export { SignUpForm }