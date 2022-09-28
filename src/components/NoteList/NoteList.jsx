import styles from "./noteList.module.scss";
import { useState, useEffect } from "react";
import Note from "../Note/Note";
import { InfinitySpin } from 'react-loader-spinner'
import nothingImg from "../../assets/image/nothingImg.svg";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import getAllData from "../../Services/getAllData";
import editData from "../../Services/editData";
import deleteData from "../../Services/deleteData";
import {FaPlus} from "react-icons/fa";

const NoteList = () => {

    const [notes, setNotes] = useState([]);
    const [request , setRequest] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const { data , statusText} = await getAllData();
                setNotes(data);
                setRequest(statusText);
            } catch (err) {
                console.log(err)
            }
        }
        getData();
    }, []);

    const nothingNotes = () => {
        return (    
            <article className={`${styles.nothingContainer} d-flex justify-content-evenly align-items-center flex-column`}>
                <img src={nothingImg} alt="nothing"/>
                <h5 className="text-secondary">Nothing is available</h5>
                <Link to="/write"><Button style={{backgroundColor:"#4c366b"}} className="border-0">add note ?</Button></Link>
            </article>
        );
    }

    const likeHandler = async (noteData) => {
        try{
            const {title , text , like , id} = noteData;
            await editData(id , {title , text , like : !like});
            const {data} = await getAllData();
            setNotes(data);
        }catch(err){
            console.log(err);
        }
    }   

    const deleteHandler = async (id) => {
        try{
            await deleteData(id);
            const {data} = await getAllData();
            setNotes(data);
        }catch(err){
            console.log(err)
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
        <section className={` ${notes.length >= 1 ?styles.noteList : styles.loaderContainer} w-100 p-3 mt-2`}>
            {renderNotes()}
        </section>
        <Link to="/write"><button className={styles.addBtn}><FaPlus/></button></Link>
        </>
    );
}

export default NoteList;

