import { FC, ReactNode } from "react"
import { Footer } from "../Footer"
import { Menu } from "../Menu"


type Props = {
    children: ReactNode
    className?: string
}

const Layout: FC<Props> = ({children}) => {

    return(
        <>
        <header>
            <Menu />  
        </header>
        <main>
            {children}
        </main>
            <Footer />
        </>
    )


}

export { Layout }