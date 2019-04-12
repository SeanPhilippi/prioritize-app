'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteTasks = _this.handleDeleteTasks.bind(_this);
    _this.onMakeDecision = _this.onMakeDecision.bind(_this);
    _this.state = {
      tasks: ['interview practice', 'hackerrank', 'laundy', 'read', 'journal']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteTasks',
    value: function handleDeleteTasks() {
      this.setState(function () {
        return { tasks: [] };
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
      var title = "Prioritize!";
      var subtitle = "Decide what your ONE priority for the day is!";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { makeDecision: this.onMakeDecision, hasTasks: this.state.tasks.length > 0 }),
        React.createElement(TaskList, { deleteTasks: this.handleDeleteTasks, tasks: this.state.tasks }),
        React.createElement(AddTask, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.makeDecision,
            disabled: !this.props.hasTasks
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

// class DeleteButton extends React.Component {

//   render() {
//     return (
//       <button onClick={this.handleDelete}>
//         Delete All Tasks
//       </button>
//     )
//   }
// }

var TaskList = function (_React$Component4) {
  _inherits(TaskList, _React$Component4);

  function TaskList() {
    _classCallCheck(this, TaskList);

    return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).apply(this, arguments));
  }

  _createClass(TaskList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.deleteTasks },
          'delete all'
        ),
        React.createElement(
          'div',
          null,
          'There are ',
          this.props.tasks.length,
          ' tasks for the day!'
        ),
        this.props.tasks.map(function (item, idx) {
          return React.createElement(Task, { key: idx, text: item });
        })
      );
    }
  }]);

  return TaskList;
}(React.Component);

var Task = function (_React$Component5) {
  _inherits(Task, _React$Component5);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      console.log(this.props.text);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          this.props.text
        )
      );
    }
  }]);

  return Task;
}(React.Component);

var AddTask = function (_React$Component6) {
  _inherits(AddTask, _React$Component6);

  function AddTask() {
    _classCallCheck(this, AddTask);

    return _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).apply(this, arguments));
  }

  _createClass(AddTask, [{
    key: 'handleAdd',
    value: function handleAdd(e) {
      e.preventDefault();
      // trim prevents empty strings and space in input
      var task = e.target.elements.task.value.trim();
      if (task) {
        alert('' + task);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleAdd },
        React.createElement('input', { className: 'input', type: 'text', name: 'task', placeholder: 'Enter task here...' }),
        React.createElement(
          'button',
          null,
          'Add task'
        )
      );
    }
  }]);

  return AddTask;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
