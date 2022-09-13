import { FC } from "react"
import { Container } from "react-bootstrap"

type Props = {
    className?: string
}

const Footer: FC<Props> = (className) => {

    return(
        <footer>
            <Container fluid className="footer">
                <span>Created with ☕ by Andrea</span>
            </Container>
        </footer>
    )

}

export { Footer }