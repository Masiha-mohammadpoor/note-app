import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./write.module.scss";
import { useState } from "react";
import swal from "sweetalert";
import postData from "../../Services/postData";
import { useNavigate } from 'react-router-dom';


const Write = () => {

    const [note, setNote] = useState({
        title: "",
        text: ""
    });

    const navigate = useNavigate();

    const addNote = async (value) => {
        try {
            await postData(value);
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
            addNote(note);
            navigate("/notes")
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


                    <Button styles={{ fontFamily: "comfortaa" }} className="mx-3" onClick={submitHandler}>Add note</Button>
                    <Button styles={{ fontFamily: "comfortaa" }} variant='danger' className="writeBtn">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default Write;