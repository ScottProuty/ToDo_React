import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// REACT elements MUST start with uppercase character!
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //always returns array with two elements

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo; // makes available outside this file
