import React from 'react';
import Modal from 'react-modal';

const TaskModal = props => (
  <Modal
    // setting selectedState to a string vs the default undefined will turn isOpen to true
    isOpen={ !!props.selectedTask }
    // setting handler for pressing of escape key or click outside modal
    onRequestClose={ props.clearTask }
    contentLabel="Selected Task"
    closeTimeoutMS={ 200 }
    className="modal"
  >
    <h3 className="modal__title">Selected Task</h3>
    {props.selectedTask && <p className="modal__body">{ props.selectedTask }</p>}
    <button
      className="button"
      onClick={ () => props.clearTask() }
    >
      Okay
    </button>
  </Modal>
);

export default TaskModal;