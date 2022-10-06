import { FC, ReactNode, useEffect, useState } from "react"
import { Button, Card, CardGroup, Container, Form, FormControl, FormGroup } from "react-bootstrap"
import { Outlet, useSearchParams } from "react-router-dom"
import { moviesApi } from "../../api/movies"
import { Layout } from "../../components/common/Layout"
import { withAuth } from "../../hoc"
import { Movie } from "@types"

type Props = {
    className?: string
}


const MoviesPage: FC<Props> = ({ className }) => {

    let [ dataMovie, setDataMovie ] = useState('')
    let [ searchParams, setSearchParams ] = useSearchParams();

    let movies: Movie[] = []

    // const searchMovie = searchParams.get('movie') || "";

    const handleSearch = (e: {preventDefault: () => void}) => {
        e.preventDefault();

        searchParams.set("query", e.target.value)

        setSearchParams(searchParams);


        
    }

    useEffect(() => {

        const dataMovie = searchParams.get("query") 

        console.log(dataMovie)

        moviesApi.searchMovie(dataMovie)
        
        const movies = dataMovie?.toString()

    }, [searchParams])

    return(
        <>
        <Outlet />
        <Layout>
            <Container className="m-5">
            <h3>Recommended Movies</h3>

                <Form className="" >
                    <Form.Group className="mb-3" controlId="formInputSearch">
                        <Form.Label>Search movies</Form.Label>
                        <Form.Control
                        type="input"
                        placeholder="Starwars"
                        onChange={handleSearch}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Container>
                    <ul> 
                        {
                            movies.map((elem) => {
                                return(
                                    <li>
                                        <h6>{elem.title}</h6>
                                        <p>{elem.popularity}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </Container>

            </Container>
        </Layout>
        </>
    )


}

export const Movies = withAuth(MoviesPage)
