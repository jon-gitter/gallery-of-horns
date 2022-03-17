import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          className="modal-main"
          show={this.props.modalAppear}
          onClick={this.props.modalDisappear}
        >
          <Modal.Header className="modal-header" closeButton> {this.props.title} </Modal.Header>
          <Modal.Body className="modal-body"
            onClick={this.props.modalDisappear}
          >
            <img src={this.props.img_url} alt={this.props.keyword} />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;