import styles from "./privateNotes.module.scss";
import lockImg from "../../assets/image/lockImg.svg";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import {useState} from "react";


const PrivateNotes = () => {

    const [password , setPassword] = useState("");
    const [lock , setLock] = useState(false);
    const pass = JSON.parse(localStorage.getItem("password"));

    const passwordChangeHandler = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const submitHandler = () => {
        if(pass === null  && password !== ""){
            localStorage.setItem("password" , JSON.stringify(password));
            setPassword("");
            swal("Done !!!" , "New password saved" , "success");
        }else{
            if(password === pass){
                setLock(true);
                setPassword("");
            }else{
                swal("Ooops !!!" , "The password is incorrect" , "error");
                setPassword("");
            }
        }
    }

    const lockComponent = () => {
        return (
            <article className="d-flex justify-content-between align-items-center flex-column">
                <img src={lockImg} alt="lock image" className={`${styles.lockImg} mb-5`}/>
                <h5 style={{fontFamily : "comfortaa"}} className="mb-4">
                    {!pass ? "please enter a password" : "please enter your password"}
                </h5>
                <input 
                type="password" 
                className={styles.passwordField} 
                autoFocus
                value={password}
                onChange={passwordChangeHandler}
                pattern="[0-9]" />
                <p className="mb-4">5/10</p>
                <Button onClick={submitHandler} style={{backgroundColor:"#5b3196" , width : "100px" , fontFamily : "comfortaa"}} className="border-0">click</Button>
            </article>
        )
    }

    const privateNoteList = () => {
        return (
            <p>masiha mohammadpour</p>
        )
    }

    return ( 
        <>
            <section className={`m-5`}>{lock ? privateNoteList() : lockComponent()}</section>
        </>
     );
}
 
export default PrivateNotes;