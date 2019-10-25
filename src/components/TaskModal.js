import React from 'react';
import Modal from 'react-modal';

const TaskModal = props => (
  <Modal
    // setting selectedState to a string vs the default undefined will turn isOpen to true
    isOpen={!!props.selectedTask}
    // setting handler for pressing of escape key or click outside modal
    onRequestClose={props.clearTask}
    contentLabel="Selected Task"
  >
    <h3>Selected Task</h3>
    {props.selectedTask && <p>{props.selectedTask}</p>}
    <button
      className="button"
      onClick={() => props.clearTask()}
    >
      x
    </button>
  </Modal>
);

export default TaskModal;