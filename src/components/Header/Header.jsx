import styles from "./header.module.scss";
import Col from "react-bootstrap/Col";
import { FaMoon, FaGithub } from "react-icons/fa";


const Header = () => {

    return (
        <Col xs={10} className="float-end">
            <header className={`${styles.header} w-100 d-flex justify-content-between align-content-center p-3`}>
                <input type="search" placeholder="search..." className={styles.searchBox} />
                <div className={`d-flex justify-content-between align-items-center ${styles.options}`}>
                    <button><FaMoon /></button>
                    <a href="#"><FaGithub /></a>
                </div>
            </header>
        </Col>
    );

}

export default Header;