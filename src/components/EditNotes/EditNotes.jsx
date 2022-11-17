import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./editNotes.module.scss";
import { useState , useEffect , useRef} from "react";
import swal from "sweetalert";
import postData from "../../Services/postData";
import editData from "../../Services/editData";
import getOneData from "../../Services/getOneData";
import { useNavigate , useParams} from 'react-router-dom';
import {FaLock , FaLockOpen} from "react-icons/fa";;


const EditNotes = () => {

    const [note, setNote] = useState({
        title: "",
        text: "",
        type : "public",
        date : ""
    });

    const [like , setLike] = useState(false);

    const navigate = useNavigate();
    const textArea = useRef();
    const params = useParams();

    useEffect(() => {
        const getData = async () => {
        try{
            const {data} = await getOneData(params.id);
            setLike(data.like);
            setNote({title : data.title , text : data.text , type : data.type , date : data.date});
        }catch(err){
            console.log(err);
        }
    }
    getData();
    } , []);

    useEffect(() => {
        const tag = textArea.current;

        tag.style.height = tag.scrollHeight + "px";
    } , [note.text])



    const editNote = async (value) => {
        try {
            await editData(params.id , {...note , like});
        }catch(err){
            console.log(err);
        }   
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
                const getData = async () => {
                    try{
                        const {data} = await getOneData(params.id);
                        setLike(data.like);
                        setNote({title : data.title , text : data.text , type : data.type , date : data.date});
                    }catch(err){
                        console.log(err);
                    }
                }
                getData();
                swal("Changes removed", {
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

                    <p className="w-75 d-flex justify-content-end text-light">_</p>

                    <Form.Label className={styles.inputLabel}>Text :</Form.Label>
                    <Form.Control
                        placeholder="Text..."
                        name="text"
                        value={note.text}
                        ref={textArea}
                        onChange={changeHandler}
                        as="textarea" rows={7}
                        className={`${styles.textarea} mb-5`}></Form.Control>

                        <div className="pb-4">
                        <div className="d-flex align-items-center mb-2">
                        <Form.Check
                            type="radio"
                            label={`public note`}
                            name="type"
                            value="public"
                            checked={note.type === "public"}
                            onChange={changeHandler}
                        />
                        <span className="mx-2"><FaLockOpen/></span>
                        </div>
                        <div className="d-flex align-items-center">
                        <Form.Check
                            type="radio"
                            label={`private note`}
                            name="type"
                            value="private"
                            checked={note.type === "private"}
                            onChange={changeHandler}
                        />
                        <span className="mx-2"><FaLock/></span>
                        </div>
                    </div>


                    <Button onClick={submitHandler}>Save changes</Button>
                    <Button variant='danger' onClick={cancelHandler} className="writeBtn mx-3">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default EditNotes;