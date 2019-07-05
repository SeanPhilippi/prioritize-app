import React from 'react';

const Action = props => {
  return (
    <div>
      <button
        onClick={props.makeDecision}
        disabled={!props.hasTasks}
      >
        What should I do?
      </button>
    </div>
  )
}

export default Action;