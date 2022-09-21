import { FC, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const publicRoutes = ["/login", "/signup"]

const withAuth = (Component: FC): FC => {

    const Authenticated: FC = (): any => {
    

        const { me } = useAuth()
        const location = useLocation()
        const navigate = useNavigate()

        // console.log(me, location.pathname)

        useEffect(() => {
            // Si esta logeado y entra a login o signup
        // Caso 1 - Existe el usuario y es una ruta pública => home
            if(me && publicRoutes.includes(location.pathname)) {
                navigate("/home")
            }
            // Caso 2 - Existe el usuario y NO es una ruta pública => Component

            // Caso 3 - No existe el usuario y es una ruta pública => Component


            // Caso 4 - No existe el usuario y NO es una ruta pública => Login
            console.log(!me, !publicRoutes.includes(location.pathname))
            if(!me && !publicRoutes.includes(location.pathname)) {
                navigate("/login")
            }

        }, [me])
        

        

        return(
            <Component />
        )
    }

    return Authenticated

}

export { withAuth }