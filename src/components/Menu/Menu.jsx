import styles from "./menu.module.scss";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/image/logo.png";
import {FaRegListAlt , FaPencilAlt , FaHome , FaRegHeart , FaLock , FaTasks , FaRocketchat , FaTimes} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useState  ,useEffect} from "react";

const Menu = ({menu , setMenu}) => {

    return (
        <Col xs={2} className={styles.menu}>
            <nav className={`${menu ? styles.activeNav :styles.nav} d-flex justify-content-between align-items-start flex-column`}>
                <div className={`${styles.logoContainer} p-4`}>
                    <span className="d-flex justify-content-center align-items-center">
                    <img src={Logo} alt="logo" className="w-25" />
                    <h4 className="fw-bold text-light">notes</h4>
                    </span>
                    <span><button className={`${styles.closeBtn} d-xs-inline d-xl-none border-0 bg-transparent text-light ml-5`} onClick={() => setMenu(false)}><FaTimes/></button></span>
                </div>
                <div className={`w-100 ${styles.list}`}>
                    <ul className=" d-flex justify-content-evenly align-items-startm flex-column p-0 m-0">
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} style={{backgroundColor:"transparent"}} to="/"><span><FaHome/></span>Home</NavLink></li>
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/notes"><span><FaRegListAlt/></span>All notes</NavLink></li>
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/write"><span><FaPencilAlt/></span>Write</NavLink></li>
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/favorites"><span><FaRegHeart/></span>Favorites</NavLink></li>
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/private"><span><FaLock/></span>Private</NavLink></li>
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/check-list"><span><FaTasks/></span>Check list</NavLink></li>
                        <li onClick={() => setMenu(false)}><NavLink className={data => data.isActive ? styles.activeLink : styles.link} to="/about"><span><FaRocketchat/></span>About</NavLink></li>
                    </ul>
                </div>

                <div></div>
                <div></div>
            </nav>
        </Col>
    );
}

export default Menu;
