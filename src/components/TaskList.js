import React from 'react';
import Task from './Task';

const TaskList = props => (
  <div>
    <button
      onClick={props.deleteTasks}
    >
      delete all
    </button>
    {props.tasks.length === 0 && <p>Add tasks to get started!</p>}
    <div>
      There are {props.tasks.length} tasks for the day!
    </div>
    {props.tasks.map((item, idx) => (
      <Task
        deleteTask={props.deleteTask}
        key={item}
        text={item}
      />
    ))}
  </div>
)

export default TaskList;