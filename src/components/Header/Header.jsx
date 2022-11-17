import styles from "./header.module.scss";
import Col from "react-bootstrap/Col";
import { FaMoon, FaGithub , FaSun , FaBars} from "react-icons/fa";
import {useState , useEffect} from "react";


const Header = ({ showMenu , searchField}) => {

    const [search , setSearch] = useState("");
    const [darkTheme , setDarkTheme] = useState("");



    
    useEffect(() => {
        const htmlTag = document.querySelector("html");
        const darkThemeData = localStorage.getItem("darkTheme");
        if(darkThemeData === "yes") htmlTag.classList.add("darkTheme");
        else {
            htmlTag.classList.remove("darkTheme");
        }
} , [darkTheme]);



    const darkThemeHandler = () => {
        const darkThemeData = localStorage.getItem("darkTheme");
        setDarkTheme(darkThemeData);
        if(!darkThemeData) localStorage.setItem("darkTheme" , "yes");
        else {
            localStorage.removeItem("darkTheme");
        }
    }


    return (
        <Col xl={10} xs={12} className="float-end">
            <header className={`${styles.header} w-100 d-flex justify-content-between align-content-center p-3`}>
                <button onClick={showMenu} className="d-xl-none d-xs-block text-light border-0 bg-transparent fs-4"><FaBars/></button>
                <span></span>
                <div className={`d-flex justify-content-between align-items-center ${styles.options}`}>
                    <button onClick={darkThemeHandler}>
                        {localStorage.getItem("darkTheme") ? <FaSun/> :<FaMoon />}
                        </button>
                    <a target="_blank" href="https://github.com/Masiha-mohammadpoor/note-app"><FaGithub /></a>
                </div>
            </header>
        </Col>

    );

}


export default Header;

