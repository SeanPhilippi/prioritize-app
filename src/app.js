class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      tasks: [],
    }
  }

  handleAddTask(task) {
    if (!task) {
      return 'Enter valid value to add item';
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This tasks already exists';
    } 

    this.setState(prevState => ({
      tasks: prevState.tasks.concat(task)
    }))
  }

  handleDeleteTasks() {
    this.setState(() => ({ tasks: [] }))
  }

  onMakeDecision() {
    const randomNum = Math.floor(Math.random() * this.state.tasks.length);
    const task = this.state.tasks[randomNum];
    alert(task);
  }

  render() {
    const title = "Prioritize!";
    const subtitle = "Decide what your ONE priority for the day is!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action makeDecision={this.onMakeDecision} hasTasks={this.state.tasks.length > 0} />
        <TaskList deleteTasks={this.handleDeleteTasks} tasks={this.state.tasks} />
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}


class Action extends React.Component {

  render() {
    return (
      <div>
        <button 
          onClick={this.props.makeDecision}
          disabled={!this.props.hasTasks}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

// class DeleteButton extends React.Component {

//   render() {
//     return (
//       <button onClick={this.handleDelete}>
//         Delete All Tasks
//       </button>
//     )
//   }
// }

class TaskList extends React.Component {  
  
  render() {
    return (
      <div>
        <button onClick={this.props.deleteTasks}>
          delete all
        </button>
        <div>
          There are {this.props.tasks.length} tasks for the day!
        </div>
        {this.props.tasks.map((item, idx) => {
          return <Task key={idx} text={item} />
        })}
      </div>
    )
  }
}


class Task extends React.Component {
  render() {
    console.log(this.props.text)
    return (
      <div>
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
}


class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddTask(e) {
    e.preventDefault();
    // trim prevents empty strings and space in input
    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);

    this.setState(() => ({error}));
  }

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));