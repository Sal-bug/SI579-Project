import './ShowTaskList.css'
import {useState} from "react";
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawChart from "./DrawChart"


const ShowTaskList = (props) => {
    const eventsToShow = [];

    // Loop through the event list. Add each event as new array item.
    // If React sees an array of JSX "markup", it will render each one.
    eventsToShow.push(
        <Row className="show p-2 m-3">
            <Col>
                Task Name         
            </Col>
            <Col>
                Task Tag         
            </Col>
            <Col>
                Task Content        
            </Col> 
            <Col>
                Task Time      
            </Col>       
        </Row>

    );

    props.events.forEach((eventInstance, index) =>
        eventsToShow.push(
            <Row className="show p-2 m-3">
                <Col>
                    {eventInstance.name}            
                </Col>
                <Col>
                    {eventInstance.tag}
                </Col>
                <Col>
                    {eventInstance.content}
                </Col>
                <Col>
                    {eventInstance.time}
                </Col>
            </Row>
        )
    );
    
    eventsToShow.push(
        <Row className="mt-4">
            <Col><DrawChart events={props.events} isStarting={props.iisStarting}/></Col>
        </Row>
    );

    return eventsToShow;
}


// As always, we must export so others can import!
export default ShowTaskList;