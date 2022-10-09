import styles from "./about.module.scss";
import developerImg from "../../assets/image/developer.svg";
import {FaWhatsapp , FaTelegramPlane , FaGithub} from "react-icons/fa";

const About = () => {
    return ( 
        <section className={`m-5 ${styles.about}`}>
            <h4 className="text-center fw-bold">About <span className={styles.me}>Me</span></h4>
            <article className="mt-5 pt-5 d-flex justify-content-between align-items-center">
                <img src={developerImg} alt="developer" className="w-25"/>
                <div className="w-50">
                    <h5 className="fw-bold">Hello, I Am <span className={styles.me}>Masiha Mohammadpour</span></h5>
                    <ul className="p-0 mt-4 list-unstyled">
                        <li>I am a junior developer</li>
                        <li>I am interested in programming and the web world</li>
                        <li>I am learning react & redux</li>
                        <li>I am 16 years old</li>
                    </ul>
                    <div className={`${styles.links} w-25 d-flex justify-content-between align-items-center fs-4`}>
                        <a href="https://github.com/Masiha-mohammadpoor" target="_blank"><FaGithub/></a>
                        <a href="https://wa.me/9809057277318" target="_blank"><FaWhatsapp/></a>
                        <a href="https://t.me/MasihaMohammadour" target="_blank"><FaTelegramPlane/></a>
                    </div>
                </div>
            </article>
        </section>
    );
}
 
export default About;


