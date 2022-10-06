import styles from "./showNote.module.scss";
import {useParams} from "react-router-dom";
import { useEffect , useState } from "react";
import getOneData from "../../Services/getOneData";
import {FaSearchPlus , FaSearchMinus, FaBold , FaItalic , FaRegClone} from "react-icons/fa";
import swal from "sweetalert";

const ShowNote = () => {

    const [note , setNote] = useState({
        title : "",
        text : "",
        date : ""
    });

    const [style , setStyle] = useState({
        fontSize : 18,
        fontWeight : "",
        fontStyle : ""
    });

    const params = useParams();

    useEffect(() => {
        const getData = async () => {
            try{
                const {data} = await getOneData(params.id);
                setNote({title : data.title , text : data.text , date : data.date});
            }catch(err){
                console.log(err)
            }
        }
        getData()
    } , []);

    const textStyle = {
        fontSize : `${style.fontSize}px`,
        fontWeight : style.fontWeight,
        fontStyle : style.fontStyle
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(`${note.title} \n ${note.text}`);
        swal("copied text" , "" , "success");
    }

    return (  
        <section className={`${styles.noteContainer} m-5`}>
            <div className="w-25 mb-4 d-flex justify-content-between align-items-center">
                <button onClick={() => setStyle({...style , fontSize : style.fontSize < 42 ? style.fontSize + 1 : style.fontSize})}><FaSearchPlus/></button>
                <button onClick={() => setStyle({...style , fontSize : style.fontSize > 10 ? style.fontSize - 1 : style.fontSize})}><FaSearchMinus/></button>
                <button onClick={() => setStyle({...style , fontWeight : style.fontWeight === "" ? "bold" : ""})}><FaBold/></button>
                <button onClick={() => setStyle({...style , fontStyle : style.fontStyle === "" ? "italic" : ""})}><FaItalic/></button>
                <button onClick={copyHandler}><FaRegClone/></button>
            </div>
            <h2 className={`${styles.title} fw-bold`}>{note.title}</h2>
            <small className="text-muted d-inline-block pb-4">{note.date}</small>
            <pre className={styles.text} style={{...textStyle}}>{note.text}</pre>
        </section>
    );
}
 
export default ShowNote;