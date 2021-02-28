import React from 'react'
import { useDispatch} from 'react-redux'
import {deleteTask,doneTask} from  '../../Redux/Action/actions'
import './Task.css'
import { Button} from "react-bootstrap";
import Edittask from '../Edittask/Edittask';

const Task = ({task}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <span className={task.isDone?"done" : null}>{task.task}</span>

              {/* Edit*/}
              <Edittask task={task} />

             {/*Button delete*/}
             <Button  variant="danger m-2"
                onClick={() => dispatch(deleteTask(task.id))}
                >Delete
                </Button>

                {/*Button done*/}
                <Button  variant="info"
                onClick={() =>
                  dispatch(doneTask(task.id))}
                >{task.isDone?"Done":"UnDone"}
                </Button>   
        </div>
    )
}

export default Task
