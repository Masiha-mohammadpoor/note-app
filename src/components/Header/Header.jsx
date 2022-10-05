import styles from "./header.module.scss";
import Col from "react-bootstrap/Col";
import { FaMoon, FaGithub } from "react-icons/fa";
import {useState , useEffect} from "react";

const Header = ({searchField , searchHandler}) => {

    const [search , setSearch] = useState("");

    useEffect(() => {
        searchHandler(search);
    } , [search])

    return (
        <Col xs={10} className="float-end">
            <header className={`${styles.header} w-100 d-flex justify-content-between align-content-center p-3`}>
                {!searchField ? <span></span> 
                : <input 
                    type="search" 
                    placeholder="search..." 
                    className={styles.searchBox}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}/>}
                <div className={`d-flex justify-content-between align-items-center ${styles.options}`}>
                    <button><FaMoon /></button>
                    <a href="#"><FaGithub /></a>
                </div>
            </header>
        </Col>
    );

}

export default Header;