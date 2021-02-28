import React, {useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'

// component
import Task from  "../Task/Task"

// CSS
import './ListTask.css'
import { Button } from 'react-bootstrap';


const ListTask = () => {
    const list =useSelector((state) =>  state.taskReducer.listTasks);
    const [status, setstatus] = useState("all");
   
    return (
        <div className="listTask">
            <h2 className="title2">List Tasks</h2>
                 {/* filtrage */}
      <span className="filterButton" >
      <Button variant="outline-primary m-2" onClick={() => setstatus("all")}>
        All
      </Button>
      <Button variant="outline-primary m-2" onClick={() => setstatus("done")}>
        Done
      </Button>
      <Button variant="outline-primary m-2" onClick={() => setstatus("undone")}>
        Undone
      </Button>
      </span>
      <ul>
      {status == "done"
      ? list
      .filter((el) => el.isDone == true)
      .map ((el) => <Task task ={el} key={el.id} />)
      : status == "undone"
      ? list
      .filter((el) => el.isDone == false)
      .map((el) =><li><Task task={el} key={el.id} /></li>)
      : list.map((el) => <li><Task task={el} key={el.id} /></li>)
      }
    </ul>
        </div>
    );
}

export default ListTask