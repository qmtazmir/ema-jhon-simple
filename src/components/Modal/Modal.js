import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopupModal = ({ show,title, onAdd, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <h4>{title} already added to cart. Do you want to add another?</h4>
      </Modal.Header>
     
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
