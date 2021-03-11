import {ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK} from "../Action/actionsType"

// initial state
const initialState = {
    listTasks: [],
};

// pure function
const taskReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return {...state, listTasks: [...state.listTasks, action.payload]};
        
            case DELETE_TASK:
            return{
                ...state,
                listTasks:state.listTasks.filter((el)=> el.id !== action.id),
            };
           case DONE_TASK:
            return {
                ...state,
                listTasks:state.listTasks.map((el)=>
                el.id == action.payload ? {...el, isDone: !el.isDone}:el 
                )
                 };
                 case EDIT_TASK:
                    return {
                      ...state,
                      listTasks: state.listTasks.map((el) =>
                      el.id === action.payload.id ? { ...el, task: action.payload.newTask } : el
                      ),
                    };
                  default:
                    return state;
                }
              };

export default taskReducer;