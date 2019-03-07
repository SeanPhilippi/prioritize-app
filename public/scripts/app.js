"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of a computer";
      var todos = ['interview practice', 'hackerrank', 'laundy', 'read'];

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(List, { todos: todos }),
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
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
    key: "handlePick",
    value: function handlePick() {
      alert('you made a pick!');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var DeleteButton = function (_React$Component4) {
  _inherits(DeleteButton, _React$Component4);

  function DeleteButton() {
    _classCallCheck(this, DeleteButton);

    return _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).apply(this, arguments));
  }

  _createClass(DeleteButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        null,
        "Delete All Tasks"
      );
    }
  }]);

  return DeleteButton;
}(React.Component);

var List = function (_React$Component5) {
  _inherits(List, _React$Component5);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "handleDelete",
    value: function handleDelete() {
      this.props.todos = [];
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(DeleteButton, { onClick: this.handleDelete }),
        React.createElement(
          "div",
          null,
          "There are ",
          this.props.todos.length,
          " tasks for the day!"
        ),
        this.props.todos.map(function (item, idx) {
          return React.createElement(Task, { key: idx, text: item });
        })
      );
    }
  }]);

  return List;
}(React.Component);

var Task = function (_React$Component6) {
  _inherits(Task, _React$Component6);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: "render",
    value: function render() {
      console.log(this.props.text);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          this.props.text
        )
      );
    }
  }]);

  return Task;
}(React.Component);

var AddTask = function (_React$Component7) {
  _inherits(AddTask, _React$Component7);

  function AddTask() {
    _classCallCheck(this, AddTask);

    return _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).apply(this, arguments));
  }

  _createClass(AddTask, [{
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      var task = e.target.elements.task.value.trim();
      if (task) {
        alert('a task!');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleAdd },
        React.createElement("input", { className: "input", type: "text", name: "task", placeholder: "Enter task here..." }),
        React.createElement(
          "button",
          null,
          "Add task"
        )
      );
    }
  }]);

  return AddTask;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
