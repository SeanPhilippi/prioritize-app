import React from 'react';

export default class AddTask extends React.Component {
  state = {
    errors: undefined
  };
  handleAddTask = e => {
    e.preventDefault();
    // trim prevents empty strings and space in input
    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);

    this.setState(() => ({error}));

    if (!error) {
      e.target.elements.task.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddTask}>
          <input className="input" type="text" name="task" placeholder="Enter task here..."/>
          <button>
            Add task
          </button>
        </form>
      </div>
    )
  }
}