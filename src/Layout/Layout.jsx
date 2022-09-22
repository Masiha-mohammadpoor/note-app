import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Col from 'react-bootstrap/Col';


const Layout = ({children}) => {

    return (
        <>
            <Menu/>
            <Header/>
            <Col xs={10} className="main">
                <main>
                    
                </main>
            </Col>
        </>
    )

}

export default Layout;