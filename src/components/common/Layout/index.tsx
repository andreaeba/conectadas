import { FC, ReactNode } from "react"
import { Footer } from "../Footer"
import { MenuForLoginUser } from "../Menu"


type Props = {
    children: ReactNode
    className?: string
}

const Layout: FC<Props> = ({children}) => {

    return(
        <>
        <header>
            <MenuForLoginUser /> 
        </header>
        <main>
            {children}
        </main>
            <Footer />
        </>
    )


}

export { Layout }