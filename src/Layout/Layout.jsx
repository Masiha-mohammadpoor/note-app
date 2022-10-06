import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Layout = ({children}) => {

    const searchHandler = () => {
        return "";
    }

    return (
        <>
            <Menu/>
            <Header searchHandler={searchHandler}/>
            <Col xs={10} className="main m-0">
                <main className="m-0">
                    {children}
                </main>
            </Col>
        </>
    )

}

export default Layout;