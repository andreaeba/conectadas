import { FC, ReactNode } from "react"


type Props = {
    children: ReactNode
    className?: string
}

const Layout: FC<Props> = ({children}) => {

    return(
        <>
        <header>
            <div>Aquí va el Menú</div>
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