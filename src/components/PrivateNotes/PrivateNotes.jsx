import styles from "./privateNotes.module.scss";
import lockImg from "../../assets/image/lockImg.svg";
import forgetImg from "../../assets/image/forgetImg.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Note from "../Note/Note";
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import nothingImg from "../../assets/image/nothingImg.svg";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import getAllData from "../../Services/getAllData";
import editData from "../../Services/editData";
import deleteData from "../../Services/deleteData";
import { encode, decode } from 'string-encode-decode';
import NothingNotes from "../NothingNotes/NothingNotes";


const PrivateNotes = () => {

    const [notes, setNotes] = useState([]);
    const [request, setRequest] = useState("");
    const [password, setPassword] = useState("");
    const [lock, setLock] = useState("");
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState({ question: "", answer: "" });
    const pass = JSON.parse(localStorage.getItem("password"));
    const forgetQuestion = JSON.parse(localStorage.getItem("question"));

    useEffect(() => {
        const getData = async () => {
            try {
                const { data, statusText } = await getAllData();
                const filtered = await data.filter(n => n.type === "private");
                setRequest(statusText)
                setNotes(filtered);
            } catch (err) {
                console.log(err);
            }
        }
        getData()
    }, []);


    const passwordChangeHandler = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const submitHandler = () => {
        if (pass === null && password !== "") {
            localStorage.setItem("password", JSON.stringify(encode(password)));
            setPassword("");
            swal("Done !!!", "New password saved", "success");
        } else {
            if (password === decode(pass)) {
                setLock(!forgetQuestion ? "question" : "list");
                setPassword("");
            } else {
                swal("Ooops !!!", "The password is incorrect", "error");
                setPassword("");
            }
        }
    }

    const checkAnswerOfQuestion = () => {
        const { answer: answer2 } = JSON.parse(decode(forgetQuestion));

        if (answer === "") {
            swal("Ooops !!!", "please enter answer", "error");
        } else {
            if (answer === answer2) {
                localStorage.removeItem("password");
                localStorage.removeItem("question");
                setLock("");
            } else {
                swal("Ooops !!!", "The answer is incorrect", "error");
            }
        }
    }

    const forgetPassword = () => {

        const { question } = JSON.parse(decode(forgetQuestion));

        return (
            <article className="d-flex justify-content-between align-items-center flex-column">
                <img src={forgetImg} alt="forget image" className={`${styles.lockImg} mb-5`} />
                <p style={{ fontFamily: "comfortaa" }} className="w-75 text-center"><span className="text-danger">!!! </span>Enter the correct answer to change the password</p>
                <h5 style={{ fontFamily: "comfortaa" }} className="mb-4">{question}?</h5>
                <Form.Control
                    value={answer}
                    placeholder="answer..."
                    style={{ fontFamily: "comfortaa" }}
                    className="w-75"
                    autoFocus
                    onChange={(e) => setAnswer(e.target.value)} />
                <Button onClick={checkAnswerOfQuestion} style={{ backgroundColor: "#4c366b", fontFamily: "comfortaa" }} className="w-50 mt-4 border-0">Check the answer</Button>
            </article>
        )
    }

    const lockComponent = () => {
        return (
            <article className="d-flex justify-content-between align-items-center flex-column">
                <img src={lockImg} alt="lock image" className={`${styles.lockImg} mb-5`} />
                <h5 style={{ fontFamily: "comfortaa" }} className="mb-4">
                    {!pass ? "please enter new password" : "please enter your password"}
                </h5>
                <input
                    type="password"
                    className={`${styles.passwordField} mb-2`}
                    autoFocus
                    value={password}
                    onChange={passwordChangeHandler}
                    pattern="[0-9]" />
                {forgetQuestion && <p><button onClick={() => setLock("forget")} className="border-0 bg-transparent" style={{ color: "#5b3196", fontFamily: "comfortaa" }}>forget password ?</button></p>}
                <Button onClick={submitHandler} style={{ backgroundColor: "#5b3196", width: "100px", fontFamily: "comfortaa" }} className="border-0 mt-2">click</Button>
            </article>
        )
    }


    const deleteHandler = (id) => {
        const deletNoteData = async () => {
          try {
            await deleteData(id);
            const {data} = await getAllData();
            const filtered = await data.filter(n => n.type === "private");
            setNotes(filtered);            
          }catch(err){
            console.error(err);
          }
        }
          swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
                if (willDelete) {
                  deletNoteData();
                    swal("this note is deleted", {
                        icon: "success",
                    });
                } else {
                    return "";
                }
            });
    }
  

    const likeHandler = async (noteData) => {
        try {
            const { title, text, type, like, id } = noteData;
            const index = notes.findIndex(n => n.id === id);
            const note = { ...notes[index] };
            note.like = !like;
            const allNotes = [...notes];
            allNotes[index] = note;
            setNotes(allNotes);
            await editData(id, { title, text, type, like: !like });
        } catch (err) {
            console.log(err);
        }
    }

    const questionChangeHandler = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    }

    const saveQuestion = () => {
        if (!question.question || !question.answer) {
            swal("Ooops !!!", "please enter values", "error");
        } else {
            setLock("list");
            localStorage.setItem("question", JSON.stringify(encode(JSON.stringify(question))));
        }
    }

    const setForgetQuestion = () => {
        return (
            <article className="m-5 w-100 d-flex justify-content-between align-items-center flex-column">
                <p style={{ fontFamily: "comfortaa" }} className="fs-5 w-100 text-center">Please enter the security question<span className="text-danger mx-1">!!!</span></p>
                <small className="text-secondary text-center pb-3 w-100" style={{fontFamily : "comfortaa"}}>This security response will only be for password recovery</small>
                <input
                    type="text"
                    placeholder="question ..."
                    className={styles.question}
                    autoFocus
                    name="question"
                    value={question.question}
                    onChange={questionChangeHandler}
                    autoComplete={"off"} />
                <input
                    type="text"
                    placeholder="answer..."
                    className={styles.question}
                    name="answer"
                    value={question.answer}
                    onChange={questionChangeHandler}
                    autoComplete={"off"} />
                <Button onClick={saveQuestion} className="w-50 fs-6 border-0 border-0" style={{ fontFamily: "comfortaa", backgroundColor: "#4c366b" }}>save</Button>
            </article>
        )
    }

    const renderNotes = () => {
        if (notes.length >= 1) {
            return notes.map(n => {
                return <Note
                    key={n.id}
                    id={n.id}
                    title={n.title}
                    text={n.text}
                    type={n.type}
                    like={n.like}
                    onLike={() => likeHandler({ ...n })}
                    onDelete={() => deleteHandler(n.id)} />
            })
        } else if (notes.length === 0 && request !== "") {
            return <NothingNotes/>
        } else {
            return <div className={styles.loaderContainer}><InfinitySpin
                width='200'
                color="#8562b5"
            /></div>
        }
    }

    const render = () => {
        if (lock === "question") {
            return setForgetQuestion();
        } else if (lock === "list") {
            return renderNotes()
        } else if (lock === "forget") {
            return forgetPassword();
        } else {
            return lockComponent();
        }
    }

    return (
        <>
            <section className={`${lock === "list" && notes.length >= 1 ? styles.noteList : styles.loaderContainer} mt-4 mb-5`}>
                {render()}
            </section>
        </>
    );
}

export default PrivateNotes;
