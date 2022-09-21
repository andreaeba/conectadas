import { FC, ReactNode } from "react"
import { Layout } from "../../components/common/Layout"
import { withAuth } from "../../hoc"
import { useAuth } from "../../hooks/useAuth"

type Props = {
    children?: ReactNode
    className?: string
}

const HomePage: FC<Props> = ({children}) => {

    // const { login } = useAuth()

    return(
        <Layout>
            <h3>Home</h3>
        </Layout>
    )

}

export const Home = withAuth(HomePage)