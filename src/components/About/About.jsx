import styles from "./about.module.scss";
import developerImg from "../../assets/image/developer.svg";
import {FaWhatsapp , FaTelegramPlane , FaGithub} from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
    return ( 
        <section className={`m-0 m-md-5 ${styles.about}`}>
            <h4 className="text-center fw-bold mt-5">About <span className={styles.me}>Me</span></h4>
            <Row className=" pt-5 d-flex justify-content-between align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start"><img src={developerImg} alt="developer" className={styles.image}/></Col>
                {/* <Col  className="mt-5 mt-md-0"> */}
                <Col xs={12} md={6} className={`${styles.textContain} mt-5`}>
                    <h5 className="fw-bold"><span> Hello, I Am </span><span className={styles.me}>Masiha Mohammadpour</span></h5>
                    <ul className="p-0 mt-4 list-unstyled">
                        <li>I am a junior developer</li>
                        <li>I am interested in programming</li>
                        <li>I am learning react & redux</li>
                        <li>I am 16 years old</li>
                    </ul>
                    <div className={`${styles.links} w-25 d-flex justify-content-between align-items-center fs-4`}>
                        <a href="https://github.com/Masiha-mohammadpoor" target="_blank"><FaGithub/></a>
                        <a href="https://wa.me/9809057277318" target="_blank"><FaWhatsapp/></a>
                        <a href="https://t.me/MasihaMohammadour" target="_blank"><FaTelegramPlane/></a>
                    </div>
                </Col>
                {/* </Col> */}
            </Row>
        </section>
    );
}
 
export default About;


