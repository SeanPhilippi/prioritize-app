import React from 'react';
import Task from './Task';

const TaskList = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">
        Your Tasks
      </h3>
      <button
        className="button--link"
        onClick={props.deleteTasks}
      >
        delete all
      </button>
    </div>
    {props.tasks.length === 0 && <p className="widget__message">Add tasks to get started!</p>}
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