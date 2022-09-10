import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const Menu = () => {

    return(
        <>
            <Navbar bg="dark" variant="dark" className='navbar-vertical d-flex justify-content-around'>
                <Navbar.Brand>ConectADAs</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">Ingresar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/signup">Registrarse</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/search-friends">Buscar amigos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )

}

export { Menu }