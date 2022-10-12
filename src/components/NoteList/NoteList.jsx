import styles from "./noteList.module.scss";
import Note from "../Note/Note";
import { InfinitySpin } from 'react-loader-spinner'
import {Link} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import NothingNotes from "../NothingNotes/NothingNotes";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const NoteList = ({notes , request , likeHandler , deleteHandler , searchHandler}) => {

    const [search , setSearch] = useState("");

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
        }else if(notes.length === 0 && request){
            return <NothingNotes btn={true}/>
        }else{
            return <div className={styles.loaderContainer}><InfinitySpin 
                width='200'
                color="#8562b5"
              /></div>
        }
    }

    const searchValue = (e) => {
        setSearch(e.target.value);
        searchHandler(e.target.value);
    }


    return (
        <>
        <Form.Control 
        type="search" 
        placeholder="search..." 
        onChange={searchValue}
        className="w-50 m-auto mt-4"
        value={search}/>

        <section className={` ${notes.length >= 1 ? styles.noteList : styles.loaderContainer} w-100 px-3 mt-5`}>
            {renderNotes()}
        </section>
        <Link to="/write"><button className={styles.addBtn}><FaPlus/></button></Link>
        </>
    );
}

export default NoteList;
