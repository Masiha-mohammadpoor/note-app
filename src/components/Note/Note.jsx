import styles from "./note.module.scss";
import {FaRegHeart , FaHeart , FaEllipsisV , FaTrashAlt, FaEdit , FaEye} from "react-icons/fa";
import {Link} from "react-router-dom";


const Note = ({id , title , text , like , onLike , onDelete}) => {

    return (
        <article className={` ${styles.Note} p-3 mb-4 d-flex justify-content-between align-items-start flex-column`}>
            <h4>{title}</h4>
            <p>{text.slice(0 , 20) + "..."}</p>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <span className="w-50 d-flex justify-content-between align-items-center">
                    <button onClick={onDelete} className="border-0 bg-transparent fs-5 text-danger"><FaTrashAlt/></button>
                    <Link to={`/edit/${id}`}><button className="border-0 bg-transparent fs-5 text-primary"><FaEdit/></button></Link>
                    <Link to={`/note/${id}`}><button className={`${styles.seeNote} border-0 bg-transparent fs-5`}><FaEye/></button></Link>                    
                </span>
                <button className={`${like ? styles.activeLikeBtn : styles.likeBtn } border-0 bg-transparent`} onClick={onLike}>
                    {like ? <FaHeart/> : <FaRegHeart/>}
                </button>
            </div>
        </article>
    );
}

export default Note;