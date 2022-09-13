import { Navbar, Nav, NavLink} from 'react-bootstrap';

const Menu = () => {

    return(
        <>
            <Navbar bg="primary" className='navbar2 navbar-vertical d-flex justify-content-around'>
                <Navbar.Brand>ConectADAs</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <NavLink className='navbar-link' to="/home">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navbar-item' href="/login">Ingresar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navbar-item' href="/signup">Registrarse</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navbar-item' href="/search-friends">Buscar amigos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navbar-item' href="/logout">Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )

}

export { Menu }