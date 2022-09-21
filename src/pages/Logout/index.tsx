import { Layout } from "../../components/common/Layout"
import { withAuth } from "../../hoc"

const LogoutPage = () => {

    return(
        <Layout>
            <h2>Logout</h2>
        </Layout>
    )

}

export const Logout = withAuth(LogoutPage)