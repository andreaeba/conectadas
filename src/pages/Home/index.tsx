import { FC, ReactNode, useState } from "react"
import { Button, Card, Container, FloatingLabel, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { Layout } from "../../components/common/Layout"
import { withAuth } from "../../hoc"
import { useAuth } from "../../hooks/useAuth"

type Props = {
    children?: ReactNode
    className?: string
}

const HomePage: FC<Props> = ({children}) => {


    const [title, setTile] = useState('')
    const [text, setText] = useState('')
    // const { login } = useAuth()

    return(
        <Layout>
            <Container fluid className="row">
                <Container className="col-sm-3 bg-light">
                    <Container className="p-3">
                        <Container fluid className="bg-primary p-3">Usuarios que todavía no seguís</Container>

                        <Container fluid className="bg-secondary p-3">Amigos</Container>
                    </Container>
                </Container>
                <Container className="col-sm-9 bg-primary p-3">
                    <Container fluid className="p-3 bg-warning">
                       <Card>
                            <Form className="d-flex flex-column">
                            <FloatingLabel
                                label="Título de la publicación"
                                className="mb-3"
                            >
                                <Form.Control
                                type="text"
                                placeholder=""
                                value={title}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Deja tu comentario aquí :)"
                                >
                                <Form.Control 
                                as="textarea"
                                placeholder="Mi película favorita es..."
                                style={{ height: '100px' }}
                                value={text} />
                            </FloatingLabel>

                            <Button 
                                type="submit"
                                className="btn-primary"
                                style={{ width: '100px' }}>
                                Publicar
                            </Button>
                            </Form>

                       </Card>

                    </Container>
                </Container>


            </Container>
        </Layout>
    )

}

export const Home = withAuth(HomePage)