import styles from "./menu.module.scss";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/image/logo.png";
import {FaRegListAlt , FaPencilAlt , FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <Col xs={2} className="float-start position-fixed">
            <nav className={`${styles.nav} d-flex justify-content-between align-items-start flex-column`}>
                <div className={`${styles.logoContainer} p-4`}>
                    <img src={Logo} alt="logo" className="w-25" />
                    <h4 className="fw-bold text-light">notes</h4>
                </div>

                <div className={`w-100 ${styles.list}`}>
                    <ul className=" d-flex justify-content-evenly align-items-start flex-column p-0 m-0">
                        <li><Link to="/"><span><FaHome/></span>Home</Link></li>
                        <li><Link to="/notes"><span><FaRegListAlt/></span>all notes</Link></li>
                        <li><Link to="/write"><span><FaPencilAlt/></span>write</Link></li>
                        <li><Link to="#"><span><FaPencilAlt/></span>write notes</Link></li>
                        <li><Link to="#"><span><FaRegListAlt/></span>all notes</Link></li>
                        <li><Link to="#"><span><FaPencilAlt/></span>write notes</Link></li>
                        <li><Link to="#"><span><FaRegListAlt/></span>all notes</Link></li>
                        <li><Link to="#"><span><FaPencilAlt/></span>write notes</Link></li>
                    </ul>
                </div>

                <div></div>
            </nav>
        </Col>
    );
}

export default Menu;