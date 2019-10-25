import React from 'react';

const Task = props => (
  <div className="task">
    <p className="task__text">
      { props.count }. { props.text }
      <button
        className="button button--link button--delete"
        onClick={ e => props.deleteTask(props.text) }
      >
        x
      </button>
    </p>
  </div>
)

export default Task;