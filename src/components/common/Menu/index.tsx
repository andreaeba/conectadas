import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { withAuth } from '../../../hoc';
import { useAuth } from '../../../hooks/useAuth'

const MenuForLoginUser = () => {

    return(
        <>
            <Navbar bg="primary" variant="primary" className='navbar-vertical d-flex justify-content-around'>
                <Navbar.Brand>ConectADAs</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/movies" className="nav-link">Recomendar</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/profile" className="nav-link">Perfil</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )

}

const MenuForLogoutUser = () => {

    return(
        <>
            <Navbar bg="primary" variant="primary" className='navbar-vertical d-flex justify-content-around'>
                <Navbar.Brand>ConectADAs</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/login">
                    <Nav.Item>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/signup" className="nav-link">Sign up</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )

}

export { MenuForLoginUser, MenuForLogoutUser }