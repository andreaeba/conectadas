import { Children, FC, ReactNode } from "react"
import { Layout } from "../../components/common/Layout"

type Props = {
    children: ReactNode
    className?: string
}

const Home: FC<Props> = ({children}) => {

    return(
        <>
        <Layout>
            {children}
        </Layout>
        </>
    )

}

export { Home }