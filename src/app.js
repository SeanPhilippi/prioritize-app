const obj = {
  name: 'Balthazar',
  getName() {
    return this.name
  }
}

const getName = obj.getName.bind(obj)

console.log(getName())

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const todos = ['interview practice', 'hackerrank', 'laundy', 'read']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <List todos={todos}/>
        <AddTask/>
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
  handlePick() {
    alert('you made a pick!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class DeleteButton extends React.Component {

  render() {
    return (
      <button onClick={this.handleDelete}>
        Delete All Tasks
      </button>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log(this.props.todos)
  }
  
  render() {
    console.log('props', this.props)
    return (
      <div>
        <button onClick={this.handleDelete}>delete all</button>
        <div>
          There are {this.props.todos.length} tasks for the day!
        </div>
        {this.props.todos.map((item, idx) => {
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
  handleAdd(e) {
    e.preventDefault();
    // trim prevents empty strings and space in input
    const task = e.target.elements.task.value.trim();
    if (task) {
      alert(`${task}`);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input className="input" type="text" name="task" placeholder="Enter task here..."/>
        <button>
          Add task
        </button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));