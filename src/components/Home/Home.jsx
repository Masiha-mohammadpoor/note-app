import styles from "./home.module.scss";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/image/logo.png";
import mainImg from "../../assets/image/mainImg.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="logo" />
                </div>
                <h3 className={styles.title}><span>Note</span> App</h3>
                <a target="_blank" href="https://github.com/Masiha-mohammadpoor/note-app" className={styles.github}><FaGithub /></a>
            </header>
            <main className={`mt-5 pt-5 ${styles.main}`}>
                <Container className="mt-3">
                    <Row className="d-flex justify-content-between align-items-center flex-column-reverse flex-md-row">
                        <Col xs={12} md={6} className={`${styles.textsContainer} d-flex justify-content-between flex-column`}>
                            <h2 className="fw-bold lh-base mb-3">Write your notes here and save forever !!!</h2>
                            <h5 className="text-secondary lh-base">Take a big step towards success by writing notes, ideas, and daily tasks</h5>
                            <div className={styles.btnContainer}>
                            <Link to="/notes"><Button className={`${styles.Button} mt-3`}>Get Started</Button></Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className={styles.imgContainer}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={mainImg} alt="main image" className="img-fluid w-75 mb-3"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}


export default Home;