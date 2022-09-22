import { Layout } from "../../components/common/Layout"
import { withAuth } from "../../hoc"

const SearchPage = () => {

    return(
        <Layout>
            <h2>Search friends</h2>
        </Layout>
    )

}

export const Search = withAuth(SearchPage)