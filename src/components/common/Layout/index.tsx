import { FC, ReactNode } from "react"
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
        <footer>
        <div>Aquí va el footer</div>
        </footer>
        </>
    )


}

export { Layout }