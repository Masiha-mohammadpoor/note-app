import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FaPlus , FaTrashAlt} from "react-icons/fa";
import styles from "./CheckList.module.scss";
import { useState , useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import NothingNotes from "../NothingNotes/NothingNotes";
import { InfinitySpin } from 'react-loader-spinner'


const Task = (newDate) => {
    const {task , completed , date , completeHandler , deleteHandler} = newDate;

    return (
        <div className={`mb-3 d-flex justify-content-between align-items-center ${completed ? styles.completedTasks : styles.task}`}>
        <h5 className="m-0">{task.length <= 10 ? task.toLowerCase() : task.toLowerCase().slice(0,10) + " ..."}</h5>
        <small className="text-secondary d-none d-md-block">{date}</small>
        <span>
            <button onClick={deleteHandler} className="mx-3 bg-transparent border-0 text-danger fs-5"><FaTrashAlt/></button>
            <input 
            type="checkbox" 
            className={styles.checkbox} 
            checked={completed}
            onChange={completeHandler}/>
        </span>
        </div>
    )
}


const CheckList = () => {
    const [task , setTask] = useState("");
    const [tasks , setTasks] = useState([]);
    const [request , setRequest] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {  
                const {data , statusText} = await axios.get("https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/tasks");
                setTasks(data);
                setRequest(statusText);
            }catch(err){
                console.error(err);
            }
        }
        getData();
    } , []);


    const addTask = () => {
        if(task === ""){
            swal("ooops!" , "please enter something" , "warning");
        }else {
            const postData = async () => {
                try{
                    const newData = {task,completed : false , date : `${new Date().toLocaleDateString()}`};
                    await axios.post("https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/tasks" , newData);
                    const {data} = await axios.get("https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/tasks");
                    setTasks(data);
                }catch(err){
                    console.error(err);
                }
            }
            postData();
            setTask("");
        }
    }

    const completeHandler = (id , task) => {
        const editData = async () => {
            try {   
                await axios.put(`https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/tasks/${id}` , {...task , completed:!task.completed});
                const {data} = await axios.get("https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/tasks");
                setTasks(data);
            }catch(err){
                console.error(err);
            }
        }
        editData();
    }

    const deleteHandler = (id) => {
        const deleteData = async () => {
            try{
                await axios.delete(`https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/tasks/${id}`);
                const filtered = tasks.filter(t => t.id !== id);
                setTasks(filtered);    
            }catch(err){
                console.error(err);
            }
        }
        deleteData();
    }   

    const renderTasks = () => {
        if (tasks.length >= 1 ){
            return tasks.map(t => {
                return <Task 
                key={t.id}
                task={t.task} 
                completed={t.completed} 
                date={t.date}
                completeHandler={() => completeHandler(t.id , t)}
                deleteHandler={() => deleteHandler(t.id)}/>
            })
        }else if(tasks.length === 0 && request){
            return <NothingNotes btn={true}/>
        }else{
            return <div className={styles.loaderContainer}><InfinitySpin 
                width='200'
                color="#8562b5"
              /></div>
        }

    }

    return ( 
        <section className={styles.checkList}>
            <article className="w-75 mx-auto my-5 bginfo d-flex justify-content-evenly">
                <Form.Control 
                    className={`${styles.taskInput} w-75`} 
                    placeholder="task..."
                    value={task}
                    onChange={e => setTask(e.target.value)}/>

                <Button 
                style={{backgroundColor:"#4c366b"}} 
                className="border-0"
                onClick={addTask}>Add</Button>
            </article>
            <article className=" w-75 mx-auto">
                {renderTasks()}
            </article>
        </section>
    );
}
 
export default CheckList;