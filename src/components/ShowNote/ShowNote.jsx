import styles from "./showNote.module.scss";
import {useParams} from "react-router-dom";
import { useEffect , useState} from "react";
import getOneData from "../../Services/getOneData";


const ShowNote = () => {

    const [note , setNote] = useState({
        title : "",
        text : "",
    })

    const params = useParams();

    useEffect(() => {
        const getData = async () => {
            try{
                const {data} = await getOneData(+(params.id));
                setNote({title : data.title , text : data.text});
            }catch(err){
                console.log(err)
            }
        }
        getData()
    } , []);


    return (  
        <section className={`${styles.noteContainer} m-5`}>
            <h2 className={`${styles.title} fw-bold`}>{note.title}</h2>
            <small className="text-muted d-inline-block pb-4">05/07/1401</small>
            <p className={styles.text}>{note.text}</p>
        </section>
    );
}
 
export default ShowNote;