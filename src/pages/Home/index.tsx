import { FC, ReactNode } from "react"
import { Layout } from "../../components/common/Layout"
import { useAuth } from "../../hooks/useAuth"

type Props = {
    children?: ReactNode
    className?: string
}

const Home: FC<Props> = ({children}) => {

    return(
        <Layout>
            <h3>Login</h3>
        </Layout>
    )

}

export { Home }