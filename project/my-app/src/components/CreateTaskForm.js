//import './CreateTaskForm.css'
import {useState} from "react";
import CircularTimeDisplay from "./CircularTimeDisplay"
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateTaskForm = (props) => {
    return (
        <>
            <Container fluid>
                <Row className="text-center p-4">
                    <Col><h3>Create Your New Task</h3></Col>
                </Row>
                <Row>
                    <Col><CircularTimeDisplay /></Col>    
                </Row>
            </Container>

        </>
    );
}


// As always, we must export so others can import!
export default CreateTaskForm;