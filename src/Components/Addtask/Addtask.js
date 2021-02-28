import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Action/actions";
import "./Addtask.css";
import { Form, Button} from "react-bootstrap";

const Addtask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  //handleChange
  const handleChange = (e) =>  {
    e.preventDefault();
    if (task){
      dispatch(addTask({ id: Math.random(), task: task, isDone: false }));
      setTask("");
      
    } else {
      alert("cant add an empty task");
    }

    }

  return (
    <div >
      <h2 className="title">ToDo Application</h2>
  
    <Form onSubmit={handleChange} className="listItemPart">
    <Form.Control type="text" placeholder ="Enter task..." onChange={(e) => 
                setTask(e.target.value)}
                value={task}/>
         <br></br>
         <Button  variant="info"
          type="submit"
          className="mb-2"
          onClick={handleChange}
        >
          Add Task
        </Button>
        </Form>
    </div>
  );
};

export default Addtask;
