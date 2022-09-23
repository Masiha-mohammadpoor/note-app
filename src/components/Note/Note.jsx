import styles from "./note.module.scss";
import {FaRegHeart} from "react-icons/fa";


const Note = ({title , text}) => {
    return (
        <article className={` ${styles.Note} p-3 mb-4 d-flex justify-content-between align-items-start flex-column`}>
            <h4>{title}</h4>
            <p>{text.slice(0 , 20) + "..."}</p>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <span></span>
                <button className={`${styles.likeBtn} border-0 bg-transparent fs-`}><FaRegHeart/></button>
            </div>
        </article>
    );
}

export default Note;