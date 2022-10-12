import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Col from 'react-bootstrap/Col';
import { useState } from "react";

const Layout = ({children , search }) => {

    const [menu , setMenu] = useState(false);


    // const showMenu = () => {
    //     setMenu(data => !data);
    // }


    return (
        <>
            <Menu menu={menu} setMenu={setMenu}/>
            <Header showMenu={() => setMenu(data => !data)} searchField={search}/>
            <Col xl={10} xs={12} className="main m-0">
                <main className="m-0">
                    {children}
                </main>
            </Col>
        </>
    )

}

export default Layout;