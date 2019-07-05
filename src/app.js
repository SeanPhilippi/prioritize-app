import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Action from './components/Action';
import Header from './components/Header';

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
      console.log(`error name: ${err.name}\nerror message: ${err.message}`);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // checking for any changes in the number of tasks, that way the component
    // doesn't re-render unnecessarily, such as if the user resets when the
    // count is already 0.
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

ReactDOM.render(<PrioritizeApp />, document.getElementById('app'));