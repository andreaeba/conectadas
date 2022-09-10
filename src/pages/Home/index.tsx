import { FC, ReactNode } from "react"
import { Layout } from "../../components/common/Layout"

type Props = {
    children?: ReactNode
    className?: string
}

const Home: FC<Props> = ({children}) => {

    return(
        <>
        <Layout>
            {children = <>Soy el children</>} 
        </Layout>
        </>
    )

}

export { Home }