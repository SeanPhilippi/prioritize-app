class PrioritizeApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    try {
      const fetchedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (fetchedTasks) {
        console.log('fetching data');
        this.setState(() => ({ tasks: fetchedTasks }));
      }
    } catch (err) {
      console.log('error', err);
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      console.log('saving data to localStorage');
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json);
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

  handleDeleteTask(task) {
    this.setState(prevState => ({
        tasks: [...prevState.tasks.filter(item => item !== task)]
    }))
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
        <TaskList 
          deleteTask={this.handleDeleteTask}
          deleteTasks={this.handleDeleteTasks} 
          tasks={this.state.tasks} 
        />
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
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

const TaskList = props => {  
  return (
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
}


const Task = props => {
  return (
    <div>
      <p>
        {props.text}
        <button 
          onClick={e => props.deleteTask(props.text)}
        >
          x
        </button>
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

    if (!error) {
      e.target.elements.task.value = '';
    }
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