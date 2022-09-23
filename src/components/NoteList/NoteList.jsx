import styles from "./noteList.module.scss";
import { useState, useEffect } from "react";
import getAllData from "../../Services/getAllData";
import Note from "../Note/Note";
const NoteList = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await getAllData();
                setNotes(data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    const renderNotes = () => {
        if (notes.length === 0) {
            return <p>there is nothing</p>
        } else {
            return notes.map(n => {
                return <Note
                    key={n.id}
                    title={n.title}
                    text={n.text} />
            })
        }
    }


    return (
        <section className={` ${styles.noteList} w-100 p-3 mt-2`}>
            {renderNotes()}
        </section>
    );
}

export default NoteList;