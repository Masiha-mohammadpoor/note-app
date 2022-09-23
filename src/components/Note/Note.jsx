import styles from "./note.module.scss";
import {FaRegHeart} from "react-icons/fa";


const Note = () => {
    return (
        <article className={` ${styles.Note} p-3 m-3 d-flex justify-content-between align-items-start flex-column`}>
            <h3>this is title</h3>
            <p>this is descrption this is descrption this is descrption</p>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <span></span>
                <button className="border-0 bg-transparent fs-5"><FaRegHeart/></button>
            </div>
        </article>
    );
}

export default Note;