import React, { useState } from 'react';
const Modal = props => {
  return (
    <div>
      {/* Trigger the modal with a button */}
      <button
        type="button"
        className="btn btn-info btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >
        Open Modal
      </button>
      {/* Modal */}
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          Modal contect
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Header</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;