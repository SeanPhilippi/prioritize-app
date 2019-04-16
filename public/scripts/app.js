'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrioritizeApp = function (_React$Component) {
  _inherits(PrioritizeApp, _React$Component);

  function PrioritizeApp(props) {
    _classCallCheck(this, PrioritizeApp);

    var _this = _possibleConstructorReturn(this, (PrioritizeApp.__proto__ || Object.getPrototypeOf(PrioritizeApp)).call(this, props));

    _this.handleDeleteTasks = _this.handleDeleteTasks.bind(_this);
    _this.onMakeDecision = _this.onMakeDecision.bind(_this);
    _this.handleAddTask = _this.handleAddTask.bind(_this);
    _this.handleDeleteTask = _this.handleDeleteTask.bind(_this);
    _this.state = {
      tasks: []
    };
    return _this;
  }

  _createClass(PrioritizeApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var fetchedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (fetchedTasks) {
          console.log('fetching data');
          this.setState(function () {
            return { tasks: fetchedTasks };
          });
        }
      } catch (err) {
        console.log('error name: ' + err.name + '\nerror message: ' + err.message);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // checking for any changes in the number of tasks, that way the component
      // doesn't re-render unnecessarily, such as if the user resets when the 
      // count is already 0.  
      if (prevState.tasks.length !== this.state.tasks.length) {
        console.log('saving data to localStorage');
        var json = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', json);
      }
    }
  }, {
    key: 'handleAddTask',
    value: function handleAddTask(task) {
      if (!task) {
        return 'Enter valid value to add item';
      } else if (this.state.tasks.indexOf(task) > -1) {
        return 'This tasks already exists';
      }

      this.setState(function (prevState) {
        return {
          tasks: prevState.tasks.concat(task)
        };
      });
    }
  }, {
    key: 'handleDeleteTasks',
    value: function handleDeleteTasks() {
      this.setState(function () {
        return { tasks: [] };
      });
    }
  }, {
    key: 'handleDeleteTask',
    value: function handleDeleteTask(task) {
      this.setState(function (prevState) {
        return {
          tasks: [].concat(_toConsumableArray(prevState.tasks.filter(function (item) {
            return item !== task;
          })))
        };
      });
    }
  }, {
    key: 'onMakeDecision',
    value: function onMakeDecision() {
      var randomNum = Math.floor(Math.random() * this.state.tasks.length);
      var task = this.state.tasks[randomNum];
      alert(task);
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = "Decide what your ONE priority for the day is!";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { makeDecision: this.onMakeDecision, hasTasks: this.state.tasks.length > 0 }),
        React.createElement(TaskList, {
          deleteTask: this.handleDeleteTask,
          deleteTasks: this.handleDeleteTasks,
          tasks: this.state.tasks
        }),
        React.createElement(AddTask, { handleAddTask: this.handleAddTask })
      );
    }
  }]);

  return PrioritizeApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Prioritize!"
};

var Action = function Action(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.makeDecision,
        disabled: !props.hasTasks
      },
      'What should I do?'
    )
  );
};

var TaskList = function TaskList(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.deleteTasks
      },
      'delete all'
    ),
    props.tasks.length === 0 && React.createElement(
      'p',
      null,
      'Add tasks to get started!'
    ),
    React.createElement(
      'div',
      null,
      'There are ',
      props.tasks.length,
      ' tasks for the day!'
    ),
    props.tasks.map(function (item, idx) {
      return React.createElement(Task, {
        deleteTask: props.deleteTask,
        key: item,
        text: item
      });
    })
  );
};

var Task = function Task(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      props.text,
      React.createElement(
        'button',
        {
          onClick: function onClick(e) {
            return props.deleteTask(props.text);
          }
        },
        'x'
      )
    )
  );
};

var AddTask = function (_React$Component2) {
  _inherits(AddTask, _React$Component2);

  function AddTask(props) {
    _classCallCheck(this, AddTask);

    var _this2 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

    _this2.handleAddTask = _this2.handleAddTask.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddTask, [{
    key: 'handleAddTask',
    value: function handleAddTask(e) {
      e.preventDefault();
      // trim prevents empty strings and space in input
      var task = e.target.elements.task.value.trim();
      var error = this.props.handleAddTask(task);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.task.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddTask },
          React.createElement('input', { className: 'input', type: 'text', name: 'task', placeholder: 'Enter task here...' }),
          React.createElement(
            'button',
            null,
            'Add task'
          )
        )
      );
    }
  }]);

  return AddTask;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(React.createElement(PrioritizeApp, null), document.getElementById('app'));
