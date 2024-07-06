import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/actions/TaskAction'
import '../taskinput.css'

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addtask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName('');
    }
  };

  return (
    <div className='Input'>
        <h1>Task Manager</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? handleAddTask() : null)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;