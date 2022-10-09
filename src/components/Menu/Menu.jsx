import styles from "./menu.module.scss";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/image/logo.png";
import {FaRegListAlt , FaPencilAlt , FaHome , FaRegHeart , FaLock , FaTasks , FaRocketchat} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <Col xs={2} className="float-start position-fixed">
            <nav className={`${styles.nav} d-flex justify-content-between align-items-start flex-column`}>
                <div className={`${styles.logoContainer} p-4`}>
                    <img src={Logo} alt="logo" className="w-25" />
                    <h4 className="fw-bold text-light">notes</h4>
                </div>

                <div className={`w-100 ${styles.list}`}>
                    <ul className=" d-flex justify-content-evenly align-items-startm flex-column p-0 m-0">
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} style={{backgroundColor:"transparent"}} to="/"><span><FaHome/></span>Home</NavLink></li>
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/notes"><span><FaRegListAlt/></span>All notes</NavLink></li>
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/write"><span><FaPencilAlt/></span>Write</NavLink></li>
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/favorites"><span><FaRegHeart/></span>Favorites</NavLink></li>
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/private"><span><FaLock/></span>private</NavLink></li>
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/check-list"><span><FaTasks/></span>Check list</NavLink></li>
                        <li><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/about"><span><FaRocketchat/></span>About</NavLink></li>
                    </ul>
                </div>

                <div></div>
                <div></div>
            </nav>
        </Col>
    );
}

export default Menu;