import notFound from "../../assets/image/notFound.svg";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const NotFound = () => {
    return ( 
        <section className="mt-5 w-100 d-flex justify-content-between align-items-center flex-column">
            <img src={notFound} alt="not found" className="w-25 mb-5"/>
            <h4 style={{fontFamily : "comfortaa" , color : "#4c366b"}} className="fw-bold my-5">not found page</h4>
            <Link to="/notes"><Button style={{backgroundColor:"#4c366b"}} className="mt-5 border-0">go to noteList</Button></Link>
        </section>
    );
}
 
export default NotFound;