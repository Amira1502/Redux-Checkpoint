import React, { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import { editTask } from "../../Redux/Action/actions";

// CSS
import { Modal, Button } from "react-bootstrap";

const Edittask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newTask, setnewTask] = useState(task.task);
  const dispatch = useDispatch();


// fuctions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    // dispatch the action edit and close the modal
    dispatch(editTask(task.id, newTask));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newTask} onChange={(e) => setnewTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edittask;