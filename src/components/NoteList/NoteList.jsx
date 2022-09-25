import styles from "./noteList.module.scss";
import { useState, useEffect } from "react";
import getAllData from "../../Services/getAllData";
import Note from "../Note/Note";
import { InfinitySpin } from 'react-loader-spinner'


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

    const renderNotes = () => {
        if (notes.length >= 1 ){
            return notes.map(n => {
                return <Note
                key={n.id}
                title={n.title}
                text={n.text} /> 
            })
        }else if(notes.length === 0 && request !== ""){
            return <p>nothing</p>
        }else{
            return <div className={styles.loaderContainer}><InfinitySpin 
                width='200'
                color="#8562b5"
              /></div>
        }
    }


    return (
        <section className={` ${notes.length >= 1 ?styles.noteList : styles.loaderContainer} w-100 p-3 mt-2`}>
            {renderNotes() || <div className={styles.loaderContainer}><InfinitySpin 
            width='200'
            color="#8562b5"
          /></div>}
        </section>
    );
}

export default NoteList;

