import styles from "./header.module.scss";
import Col from "react-bootstrap/Col";
import { FaMoon, FaGithub , FaSun} from "react-icons/fa";
import {useState , useEffect} from "react";

const Header = ({searchField , searchHandler}) => {

    const [search , setSearch] = useState("");
    const [darkTheme , setDarkTheme] = useState("");


    useEffect(() => {
            searchHandler(search);
    } , [search]);
    
    useEffect(() => {
        const htmlTag = document.querySelector("html");
        const darkThemeData = localStorage.getItem("darkTheme");
        if(darkThemeData === "yes") htmlTag.classList.add("darkTheme");
        else {
            htmlTag.classList.remove("darkTheme");
        }
} , [darkTheme])


    const darkThemeHandler = () => {
        const darkThemeData = localStorage.getItem("darkTheme");
        setDarkTheme(darkThemeData);
        if(!darkThemeData) localStorage.setItem("darkTheme" , "yes");
        else {
            localStorage.removeItem("darkTheme");
        }
    }


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
                    <button onClick={darkThemeHandler}>
                        {localStorage.getItem("darkTheme") ? <FaSun/> :<FaMoon />}
                        </button>
                    <a href="#"><FaGithub /></a>
                </div>
            </header>
        </Col>
    );

}

export default Header;