import styles from "./menu.module.scss";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/image/logo.png";
import {FaRegListAlt , FaPencilAlt} from "react-icons/fa";

const Menu = () => {
    return (
        <Col xs={2} className="bg-info">
            <nav className={`${styles.nav} d-flex justify-content-between align-items-start flex-column`}>
                <div className={`${styles.logoContainer} p-4`}>
                    <img src={Logo} alt="logo" className="w-25" />
                    <h4 className="fw-bold text-light">notes</h4>
                </div>

                <div className={`w-100 ${styles.list}`}>
                    <ul className=" d-flex justify-content-evenly align-items-start flex-column p-0 m-0">
                        <li><a href="#"><span><FaRegListAlt/></span>all notes</a></li>
                        <li><a href="#"><span><FaPencilAlt/></span>write notes</a></li>
                        <li><a href="#"><span><FaRegListAlt/></span>all notes</a></li>
                        <li><a href="#"><span><FaPencilAlt/></span>write notes</a></li>
                        <li><a href="#"><span><FaRegListAlt/></span>all notes</a></li>
                        <li><a href="#"><span><FaPencilAlt/></span>write notes</a></li>
                        <li><a href="#"><span><FaRegListAlt/></span>all notes</a></li>
                        <li><a href="#"><span><FaPencilAlt/></span>write notes</a></li>
                    </ul>
                </div>

                <div></div>
            </nav>
        </Col>
    );
}

export default Menu;