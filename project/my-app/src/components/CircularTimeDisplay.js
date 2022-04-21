import './CircularTimeDisplay.css'
import {useState, useEffect, useRef} from "react";
import ShowTaskList from "./ShowTaskList"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CircularSlider from '@fseehawer/react-circular-slider';
import sound from '../musics/Cool-alarm-tone-notification-sound.mp3'
import {Row, Col, Container, Dropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CircularTimeDisplay = (props) => {
    const [estimatedTime, setEstimatedTime] = useState(0);
    const [isStarting, setIsStarting] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskContent, setTaskContent] = useState("");
    const [taskTag, setTaskTag] = useState("");
    const [remainingTime, setRemainingTime] = useState(0);
    const [events, setEvents] = useState([]);
    const [selectTagText, setSelectTagText] = useState("Select Task Tag");


    const audio = new Audio(sound);
    const input_name = useRef();
    const input_content = useRef();

    useEffect(() => {
      audio.load();
    }, [])

    const renderTime = ({ remainingTime }) => {
      if (remainingTime === 0) {
        setIsStarting(false);
        audio.play();
        setTimeout(() => {
          audio.pause();
        }, 3000);

        setEvents([...events, {
          name: taskName,
          tag: taskTag,
          content: taskContent,
          time: estimatedTime - remainingTime,
          estimatedTime: estimatedTime,
          isStarting: isStarting
        }]);

        setSelectTagText("Select Task Tag");

        return <div className="timer">Time's Up...</div>;
      }

      setRemainingTime(estimatedTime - remainingTime);
    
      return (
        <div className="timer">
          <div className="text text-center">Remaining</div>
          <div className="value text-center">{Math.ceil(remainingTime)}</div>
          <div className="text text-center">minutes</div>
        </div>
      );
    };

    const startTaskHandler = () => {
      setIsStarting(!isStarting);
    }

    const endTaskHandler = () => {
      setEvents([...events, {
        name: taskName,
        tag: taskTag,
        content: taskContent,
        time: remainingTime,
        estimatedTime: estimatedTime,
      }]);

      setSelectTagText("Select Task Tag");
      setIsStarting(!isStarting);
    }

    const nameChangeHandler = () => {
      setTaskName(input_name.current.value);
    }

    const contentChangeHandler = () => {
      setTaskContent(input_content.current.value);
    }


    if (isStarting) {       
      return (
          <>
          <Container>
            <Row className="text-center">
            <div className="timer-wrapper">
              <CountdownCircleTimer
                        isPlaying
                        duration={estimatedTime}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[120, 80, 40, 0]}
                        //onComplete={() => ({ shouldRepeat: true, delay: 1 })}
              >
              {renderTime}
              </CountdownCircleTimer>
          </div>
          </Row>  

          <Row>
            <Button className="pt-2 pb-2 mt-5 mb-5 w-100" onClick={endTaskHandler} variant="danger">{isStarting ? "End Task" : "Start Task"}</Button>{' '} 
          </Row>


        </Container>
        <ShowTaskList events={events} isStarting={isStarting}/>
        </>
      );
    }
    else {
      return (
        <>
          <Container>
            <Row>
              <Col className="text-center"> 
                <CircularSlider
                    min={0}
                    max={120}
                    label="Estimated Time (Minutes)"
                    labelColor="#e10472"
                    knobColor="#e10472"
                    progressColorFrom="#ef46468d"
                    progressColorTo="#f20f0fbf"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                    //data={["1€","2€"]} //...
                    //dataIndex={10}
                    onChange={ value => { setEstimatedTime(value); } }
                />
              </Col>

              <Col>
                <Container fluid>
                  <Row className="p-1"><label>Enter your task name: </label></Row>
                  <Row className="p-1"><input type='text' placeholder="Your Task Name" ref={input_name} onChange={nameChangeHandler}/></Row>
                  <Row className="p-1"><label>Enter your task content: </label></Row>
                  <Row className="p-1"><input type='text' placeholder="Your Task Content" style={{height: "50px"}} ref={input_content} onChange={contentChangeHandler}/></Row>
                  <Row className="pt-4 pb-3"> 
                    <Dropdown>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic" className='w-100'>
                      {selectTagText}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => {setTaskTag("Study"); setSelectTagText("Study")}}>Study</Dropdown.Item>
                      <Dropdown.Item onClick={() => {setTaskTag("Work"); setSelectTagText("Work")}}>Work</Dropdown.Item>
                      <Dropdown.Item onClick={() => {setTaskTag("Entertainment"); setSelectTagText("Entertainment")}}>Entertainment</Dropdown.Item>
                      <Dropdown.Item onClick={() => {setTaskTag("Social"); setSelectTagText("Social")}}>Social</Dropdown.Item>
                      <Dropdown.Item onClick={() => {setTaskTag("Else"); setSelectTagText("Else")}}>Else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> 

                  </Row>

                </Container>
              </Col>
            </Row>
            <Row className="p-5 w-100 text-center">  <Button className="p-2" onClick={startTaskHandler} variant="danger">{isStarting ? "End Task" : "Start Task" }</Button>{' '}</Row>

            <ShowTaskList events={events} isStarting={isStarting} />
          </Container>
        </>
     )
    }
}

// As always, we must export so others can import!
export default CircularTimeDisplay;