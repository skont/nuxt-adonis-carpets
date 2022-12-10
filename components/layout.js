import { Container } from "react-bootstrap";
import Header from "./header"


const Layout = ({ children }) => (
    <>
        <Header />
        <Container>
            <main>{children}</main>
        </Container>
    </>

)

export default Layout;