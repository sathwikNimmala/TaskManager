import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletetask, toggleCompleteTask, updatetask } from '../redux/actions/TaskAction';
import '../tasklist.css' 

const TaskList = () => {
  const tasks = useSelector(state => state.task.tasks);
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');

  const handleEditTask = (task) => {
    setEditTask(task.id);
    setEditTaskName(task.name);
  };

  const handleUpdateTask = () => {
    dispatch(updatetask({ id: editTask, name: editTaskName, completed: false }));
    setEditTask(null);
    setEditTaskName('');
  };

  return (
    <div className="task-list"> 
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            {editTask === task.id ? (
              <div className='input-card'>
                <input
                  type="text"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                />
                <button onClick={handleUpdateTask}>Update</button>
              </div>
            ) : (
              <div className='task-container'>
                <div className='task-card'>
                    <div className={`task-name ${task.completed ? 'completed' : ''}`}>
                     {task.name}
                   </div>
                   <div className='buttons'>
                    <button onClick={() => dispatch(deletetask(task.id))}>Delete</button>
                    <button onClick={() => handleEditTask(task)}>Edit</button>
                    <button onClick={() => dispatch(toggleCompleteTask(task.id))}>
                    {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    </div> 
                   
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
