import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return(
        <>
            <Navbar bg="primary" variant="primary" className='navbar-vertical d-flex justify-content-around'>
                <Navbar.Brand>ConectADAs</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/signup" className="nav-link">Sign up</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/search-friends" className="nav-link">Search friends</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )

}

export { Menu }