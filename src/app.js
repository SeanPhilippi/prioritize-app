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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    return (
      <div>
        There are {this.props.todos.length} tasks for the day!
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
  render() {
    return (
      <div>
        <p>
          AddTask component here.
        </p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));