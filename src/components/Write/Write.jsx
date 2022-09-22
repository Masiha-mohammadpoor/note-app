import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./write.module.scss";

const Write = () => {
    return (
        <div>
            <div></div>
            <Form>
                <div  className="m-5">
                <Form.Label className={styles.inputLabel}>Title :</Form.Label>
                <Form.Control type="text" className={"w-75"} placeholder='Title...'/>
                <p className="w-75 d-flex justify-content-end">2/40</p>
                <Form.Label className={styles.inputLabel}>Text :</Form.Label>
                <Form.Control placeholder="Text..." as="textarea" className={`${styles.textarea} mb-5`}></Form.Control>
                <Button styles={{fontFamily : "comfortaa"}} className="mx-3">Add note</Button>
                <Button styles={{fontFamily : "comfortaa"}} variant='danger' className="writeBtn">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default Write;