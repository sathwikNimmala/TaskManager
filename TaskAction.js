export const addtask = (task) =>{

    return{
        type:'ADDTASK',
        payload:task
    };   
}

export const deletetask =(id) =>{
    
    return{
        type:'DELETETASK',
        payload:id
    }
}

export const updatetask = (id) =>{

    return{
        type:'UPDATETASK',
        payload:id
    }
}

export const toggleCompleteTask = (id) =>{

    return{
        type:'TOGGLE_COMPLETE_TASK',
        payload:id

    }
}