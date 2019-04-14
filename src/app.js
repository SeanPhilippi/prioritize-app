class PrioritizeApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      tasks: props.tasks
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
    const subtitle = "Decide what your ONE priority for the day is!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action makeDecision={this.onMakeDecision} hasTasks={this.state.tasks.length > 0} />
        <TaskList deleteTasks={this.handleDeleteTasks} tasks={this.state.tasks} />
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

PrioritizeApp.defaultProps = {
  tasks: []
}


const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Prioritize!"
}


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

// class DeleteButton extends React.Component {

//   render() {
//     return (
//       <button onClick={this.handleDelete}>
//         Delete All Tasks
//       </button>
//     )
//   }
// }

const TaskList = props => {  
  return (
    <div>
      <button onClick={props.deleteTasks}>
        delete all
      </button>
      <div>
        There are {props.tasks.length} tasks for the day!
      </div>
      {props.tasks.map((item, idx) => {
        return <Task key={idx} text={item} />
      })}
    </div>
  )
}


const Task = props => {
  return (
    <div>
      <p>
        {props.text}
      </p>
    </div>
  )
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<PrioritizeApp />, document.getElementById('app'));