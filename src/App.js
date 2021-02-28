import './App.css';
import Addtask from "./Components/Addtask/Addtask"
import ListTask from "./Components/ListTask/ListTask"

function App() {
  return (
    <div className="App">
     {/*addTask*/}
     <Addtask/>

     {/*listTask*/}
     <ListTask/>

    </div>
  );
}

export default App;
