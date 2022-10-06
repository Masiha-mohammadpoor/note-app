import styles from "./nothingNotes.module.scss";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import nothingImg from "../../assets/image/nothingImg.svg";

const NothingNotes = () => {
    return (  
        <article className={`${styles.nothingContainer} d-flex justify-content-evenly align-items-center flex-column`}>
        <img src={nothingImg} alt="nothing"/>
        <h5 className="text-secondary">Nothing is available</h5>
        <Link to="/write"><Button style={{backgroundColor:"#4c366b"}} className="border-0">add note ?</Button></Link>
        </article>

    );
}
 
export default NothingNotes;