import { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const publicRoutes = ["/login", "/signup"]
const privateRoutes = ["/home", "/search", "/logout"]

const withAuth = (Component: FC): FC => {

    const Authenticated: FC = (): any => {
    

        const { me } = useAuth()
        const location = useLocation()
        const navigate = useNavigate()

        console.log(me)

        // Si esta logeado y entra a login o signup
        if(me && publicRoutes.includes(location.pathname)) {
            navigate("/home")
        }

        //si no esta logeado y entra a home, search o logout
        if(!me && privateRoutes.includes(location.pathname)) {
            navigate("/login")
        }

        return(
            <Component />
        )
    }

    return Authenticated

}

export { withAuth }