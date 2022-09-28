import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./editNotes.module.scss";
import { useState , useEffect} from "react";
import swal from "sweetalert";
import postData from "../../Services/postData";
import editData from "../../Services/editData";
import getOneData from "../../Services/getOneData";
import { useNavigate , useParams} from 'react-router-dom';


const EditNotes = () => {

    const [note, setNote] = useState({
        title: "",
        text: "",
        type : ""
    });

    const [like , setLike] = useState(false);

    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {
        const getData = async () => {
        try{
            const {data} = await getOneData(+(params.id));
            setLike(data.like);
            setNote({title : data.title , text : data.text , type : data.type});
        }catch(err){
            console.log(err);
        }
    }
    getData();
    } , [])


    const editNote = async (value) => {
        try {
            await editData(+(params.id) , {...note , like});
        }catch(err){
            console.log(err);
        }   
        console.log(value)
    }

    const changeHandler = (e) => {
        const value = e.target.value;
        setNote({ ...note, [e.target.name]: value });
    }

    const submitHandler = () => {
        if(!note.title || !note.text) {
            swal("" , "please input something in fields" , "warning");
        }else{
            editNote(note);
            navigate(-1)
        }
    }

    const cancelHandler = () => {
        if(note.title || note.text){
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                setNote({title : "" , text : ""});
              swal("this note is deleted", {
                icon: "success",
              });
            } else {
              return "";
            }
          });
        }else {
            return "";
        }
    }


    return (
        <div>
            <div></div>
            <Form>
                <div className="m-5">
                    <Form.Label className={styles.inputLabel}>Title :</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={changeHandler}
                        className={"w-75"}
                        placeholder='Title...' />

                    <p className="w-75 d-flex justify-content-end">2/40</p>

                    <Form.Label className={styles.inputLabel}>Text :</Form.Label>
                    <Form.Control
                        placeholder="Text..."
                        name="text"
                        value={note.text}
                        onChange={changeHandler}
                        as="textarea" rows={10}
                        className={`${styles.textarea} mb-5`}></Form.Control>


                    <Button className="mx-3" onClick={submitHandler}>Save changes</Button>
                    <Button variant='danger' onClick={cancelHandler} className="writeBtn">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default EditNotes;