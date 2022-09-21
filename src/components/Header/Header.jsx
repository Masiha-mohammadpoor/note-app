import styles from "./header.module.scss";
import  Col  from "react-bootstrap/Col";
import { FaMoon , FaGithub} from "react-icons/fa";


const Header = () => {
    return (
        <header className={styles.header}>
            <Col xs={10} className={`d-flex justify-content-between align-content-center p-3 float-end ${styles.colHeader}`}>
                <input type="search" placeholder="search..." className={styles.searchBox}/>
                <div className={`d-flex justify-content-between align-items-center ${styles.options}`}>
                    <button><FaMoon/></button>
                    <a href="#"><FaGithub/></a>
                </div>
            </Col>
        </header>
    );
}
 
export default Header;