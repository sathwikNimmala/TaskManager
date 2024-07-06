

const initialState ={
    id:0,
    tasks:JSON.parse(localStorage.getItem('tasks')) || []
}

const taskReducer = (state=initialState,action,) =>{

    switch(action.type){

        case 'ADDTASK' :

            const newTasks=[...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasks));

            return {

                    ...state,
                    tasks: newTasks,
                };

        case 'DELETETASK' : 

            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks));
          
            return {
                     ...state,
                    tasks: filteredTasks,
                };
        
        case 'UPDATETASK':
                
              const updatedTasks = state.tasks.map(task =>task.id === action.payload.id ? action.payload : task );
              localStorage.setItem('tasks', JSON.stringify(updatedTasks));
          
              return {
                     ...state,
                     tasks: updatedTasks,
                };
            
        case 'TOGGLE_COMPLETE_TASK':
      
              const toggledTasks = state.tasks.map(task =>task.id === action.payload ? { ...task, completed: !task.completed } : task);
              localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      
              return {
                     ...state,
                    tasks: toggledTasks,
                };
        
        default:
              return state;


    }}
export default taskReducer;