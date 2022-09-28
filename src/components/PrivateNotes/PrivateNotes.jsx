import styles from "./privateNotes.module.scss";
import lockImg from "../../assets/image/lockImg.svg";
import Button from "react-bootstrap/Button";
import Note from "../Note/Note";
import { InfinitySpin } from 'react-loader-spinner';
import {Link} from "react-router-dom";
import nothingImg from "../../assets/image/nothingImg.svg";
import swal from "sweetalert";
import {useState , useEffect} from "react";
import getAllData from "../../Services/getAllData";
import editData from "../../Services/editData";
import deleteData from "../../Services/deleteData";


const PrivateNotes = () => {

    const [notes , setNotes] = useState([]);
    const [request , setRequest] = useState("");
    const [password , setPassword] = useState("");
    const [lock , setLock] = useState(false);
    const pass = JSON.parse(localStorage.getItem("password"));

    useEffect(() => {
        const getData = async () => {
            try{
                const {data , statusText} = await getAllData();
                const filtered = await data.filter(n => n.type === "private");
                setRequest(statusText)
                setNotes(filtered);
            }catch(err){
                console.log(err);
            }
        }
        getData()
    } , []);


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

    const nothingNotes = () => {
        return (    
            <article className={`${styles.nothingContainer} d-flex justify-content-evenly align-items-center flex-column`}>
                <img src={nothingImg} alt="nothing"/>
                <h5 className="text-secondary">Nothing is available</h5>
                <Link to="/write"><Button style={{backgroundColor:"#4c366b"}} className="border-0">add note ?</Button></Link>
            </article>
        );
    }

    const deleteHandler = async (id) => {
        try{
            const filtered = notes.filter(n => n.id !== id);
            setNotes(filtered);
            await deleteData(id);
        }catch(err){
            console.log(err)
        }
    }


    const likeHandler = async (noteData) => {
        try{
            const {title , text , type , like , id} = noteData;
            const index = notes.findIndex(n => n.id === id);
            const note = {...notes[index]};
            note.like = !like;
            const allNotes = [...notes];
            allNotes[index] = note;
            setNotes(allNotes);
            await editData(id , {title , text , type , like : !like});
        }catch(err){
            console.log(err);
        }
    }   


    const renderNotes = () => {
        if (notes.length >= 1 ){
            return notes.map(n => {
                return <Note
                key={n.id}
                id={n.id}
                title={n.title}
                text={n.text}
                type={n.type}
                like={n.like}
                onLike={() => likeHandler({...n})}
                onDelete={() => deleteHandler(n.id)} /> 
            })
        }else if(notes.length === 0 && request !== ""){
            return nothingNotes()
        }else{
            return <div className={styles.loaderContainer}><InfinitySpin 
                width='200'
                color="#8562b5"
              /></div>
        }
    }


    return ( 
        <>
            <section className={`${lock && notes.length >= 1 ? styles.noteList : styles.loaderContainer} mt-4 mb-5`}>{lock ? renderNotes() : lockComponent()}</section>
        </>
     );
}
 
export default PrivateNotes;