import { ADD_TASK , DELETE_TASK, DONE_TASK, EDIT_TASK } from "../constants/action-types"

const initialeState = {
    ListTask:[
        {id:0,text:"drink coffee",isDone:true},
        {id:1,text:"practice some skills ",isDone:false},
        {id:2,text:"go to gym ",isDone:false}

    ]
}
const TaskReducer=(state = initialeState , {type , payload})=>{
  switch(type){
      case ADD_TASK:
          return {...state,ListTask:[...state.ListTask,payload]}

     case EDIT_TASK:
         return{...state,ListTask: state.ListTask.map((el)=>
            el.id === payload.id  ? {...el,text:payload.newTask}: el)}

    case DELETE_TASK:
        return{...state,ListTask:state.ListTask.filter((el)=>
          el.id !== payload)}   
          
          
    case DONE_TASK:
        return{...state,ListTask:state.ListTask
            .map((el)=>el.id === payload ? {...el, isDone: !el.isDone}:el )}      
    default:
     return state        

  }
}
export default TaskReducer