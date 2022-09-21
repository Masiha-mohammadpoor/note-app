import styles from "./home.module.scss";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/image/logo.png";
import mainImg from "../../assets/image/mainImg.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="logo" />
                </div>
                <h3 className={styles.title}><span>Note</span> App</h3>
                <a href="#" className={styles.github}><FaGithub /></a>
            </header>
            <main className={`mt-5 pt-5 ${styles.main}`}>
                <Container className="mt-3">
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col xs={6} className={styles.textsContainer}>
                            <h2 className="fw-bold">Write your notes here and save forever !!!</h2>
                            <h5 className="text-secondary">Take a big step towards success by writing notes, ideas, and daily tasks</h5>
                            <Button className={styles.Button}>Get Started</Button>
                        </Col>
                        <Col xs={6} className={styles.imgContainer}>
                            <div>
                                <img src={mainImg} alt="main image" className="img-fluid w-75"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Home;