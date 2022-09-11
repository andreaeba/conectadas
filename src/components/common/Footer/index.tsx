import { FC } from "react"
import { Container } from "react-bootstrap"

type Props = {
    className?: string
}

const Footer: FC<Props> = (className) => {

    return(
        <>
        <Container fluid className="footer">
            <span>Created with ☕ by Andrea</span>
        </Container>
        </>
    )

}

export { Footer }